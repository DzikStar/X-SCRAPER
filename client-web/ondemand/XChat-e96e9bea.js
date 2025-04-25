(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e96e9bea"],
    {
        527735: (e, t, s) => {
            "use strict";
            s.d(t, { P: () => u });
            var l = s(552322),
                r = s(202784),
                i = s(332161);
            const n = ({ destructive: e, icon: t, onClick: s, text: n }) => (0, l.jsxs)("button", { type: "button", className: "px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100 " + (e ? "text-destructive" : "text-text"), onClick: s, children: [t && (0, r.cloneElement)(t, { className: "size-[22px]" }), (0, l.jsx)(i.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: n })] });
            var a = s(305399),
                c = s(110929),
                o = s(194787);
            const h = (0, c.j)("bg-background h-fit fixed bottom-0 left-0 right-0 outline-none", { variants: { borderRadius: { "2xLarge": "rounded-t-2xl", "3xLarge": "rounded-t-3xl", full: "rounded-t-full", large: "rounded-t-lg", medium: "rounded-t-md", none: "rounded-t-none", small: "rounded-t-sm", xLarge: "rounded-t-xl", true: "rounded-t" } } });
            function d({ borderRadius: e = "medium", children: t, className: s, title: r, trigger: i, withHandle: n, ...a }) {
                return (0, l.jsxs)(o.dy.Root, { ...a, children: [(0, l.jsx)(o.dy.Trigger, { asChild: !0, children: i }), (0, l.jsxs)(o.dy.Portal, { children: [(0, l.jsx)(o.dy.Overlay, { className: "fixed inset-0 bg-black/40" }), (0, l.jsxs)(o.dy.Content, { className: h({ borderRadius: e, className: s }), children: [n && (0, l.jsx)(o.dy.Handle, { className: "my-2" }), r && (0, l.jsx)(o.dy.Title, { children: r }), t] })] })] });
            }
            var x = s(437712);
            function m({ children: e, open: t, onOpenChange: s, trigger: r }) {
                return (0, a.a)("(min-width: 768px)") ? (0, l.jsx)(x.J, { open: t, onOpenChange: s, trigger: r, withArrow: !0, children: e }) : (0, l.jsx)(d, { open: t, onOpenChange: s, trigger: r, children: e });
            }
            const u = ({ items: e, open: t, onOpenChange: s, trigger: r }) => (0, l.jsx)(m, { trigger: r, open: t, onOpenChange: s, children: (0, l.jsx)("div", { className: "flex flex-col items-start justify-start rounded-sm gap-1", children: e.map((e) => (0, l.jsx)(n, { ...e }, e.text)) }) });
        },
        789764: (e, t, s) => {
            "use strict";
            s.d(t, { o: () => i });
            var l = s(552322),
                r = s(378364);
            function i({ size: e = "medium", spacing: t = 12, urls: s, resolution: i, stackOrder: n = "descending" }) {
                return (0, l.jsx)("div", { className: "flex", style: { marginInlineStart: `${t}px` }, children: s.map((a, c) => (0, l.jsx)("div", { className: "rounded-full bg-background p-0.5", style: { marginInlineStart: -1 * t, zIndex: "ascending" === n ? c : s.length - c }, children: (0, l.jsx)(r.q, { size: e, shape: "circle", url: a, resolution: i }) }, `${a}${c}`)) });
            }
        },
        472275: (e, t, s) => {
            "use strict";
            s.d(t, { e: () => c });
            var l = s(552322),
                r = s(202784),
                i = s(34681),
                n = s(570306),
                a = s(123848);
            function c({ mediaItems: e, initialIndex: t = 0, isOpen: s, onClose: c }) {
                const [o, h] = (0, r.useState)(t);
                (0, r.useEffect)(() => {
                    h(t);
                }, [t]);
                const d = e[o],
                    x = (e) => {
                        e.target === e.currentTarget && c();
                    };
                return s && d
                    ? (0, l.jsx)(i.Vq, {
                          open: s,
                          onOpenChange: c,
                          children: (0, l.jsxs)(i.PK, {
                              children: [
                                  (0, l.jsx)(i.t9, { className: "fixed inset-0 bg-black/50 z-50" }),
                                  (0, l.jsxs)(i.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: x,
                                      children: [
                                          (0, l.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: x, children: "animated_gif" === d.type ? (0, l.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, l.jsx)("video", { src: d.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: d.previewImage }) }) : (0, l.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: (0, l.jsx)("img", { src: d.src, alt: "", className: "w-full h-full object-cover max-h-[inherit] select-none" }) }) }),
                                          e.length > 1 &&
                                              (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, l.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, l.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          o > 0 &&
                                                                          (0, l.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), h((t) => (t > 0 ? t - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "previous",
                                                                              children: (0, l.jsx)(n.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, l.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          o < e.length - 1 &&
                                                                          (0, l.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), h((t) => (t < e.length - 1 ? t + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "next",
                                                                              children: (0, l.jsx)(a.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, l.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [o + 1, " / ", e.length] }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
        },
        653748: (e, t, s) => {
            "use strict";
            s.d(t, { s: () => n });
            var l = s(552322),
                r = s(840489),
                i = s(533131);
            function n({ variant: e = "normal", ...t }) {
                return (0, l.jsx)(i.ZA, { className: "z-40 bg-mask fixed bottom-0 end-0 start-0 top-0 flex h-full w-full items-center justify-center", ...t, children: (0, l.jsx)(i.u_, { ...t, className: (0, r.Z)("bg-background max-h-full overflow-y-auto rounded-xl", "small" === e && "max-w-[32rem]", "normal" === e && "max-w-[60rem]") }) });
            }
        },
        423011: (e, t, s) => {
            "use strict";
            s.d(t, { x: () => i });
            var l = s(552322),
                r = s(332161);
            const i = ({ leftContent: e, rightContent: t, title: s, subtitle: i }) => (0, l.jsxs)("div", { className: "flex flex-row justify-between  p-2 py-4", children: [(0, l.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [e, (0, l.jsxs)("div", { className: "flex flex-col", children: [(0, l.jsx)(r.x, { size: "headline1", weight: "extrabold", children: s }), i && (0, l.jsx)(r.x, { color: "gray700", children: i })] })] }), t] });
        },
        261012: (e, t, s) => {
            "use strict";
            s.d(t, { r: () => a });
            var l = s(552322),
                r = s(199237),
                i = s(202784),
                n = s(31674);
            const a = (0, i.forwardRef)(function ({ className: e, size: t = "medium", thumbClassName: s, ...i }, a) {
                return (0, l.jsx)(r.fC, { className: (0, n.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === t ? "h-3 w-10" : "h-2 w-6", e), ...i, ref: a, children: (0, l.jsx)(r.bU, { className: (0, n.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === t ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", s) }) });
            });
        },
        38375: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" }) });
        },
        332476: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("circle", { cx: 12, cy: 12, r: 10.3 }) });
        },
        747632: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M15 6v3h3v2h-3v3h-2v-3h-3V9h3V6h2zm4.5-4C20.88 2 22 3.12 22 4.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C7.12 18 6 16.88 6 15.5v-11C6 3.12 7.12 2 8.5 2h11zM8 15.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v11zm-4 4V8h-.5C2.67 8 2 8.67 2 9.5v10C2 20.88 3.12 22 4.5 22h10c.83 0 1.5-.67 1.5-1.5V20H4.5c-.28 0-.5-.22-.5-.5z" }) });
        },
        286689: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zM13.25 7L13 12.7s-.5-.2-1-.2-1 .2-1 .2L10.75 7h2.5zM12 17c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17z" }) });
        },
        162807: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm6.543.04l1.414 1.42L20 10.41l2.043 2.05 1.414-1.42L21.414 9l2.043-2.04-1.414-1.42L20 7.59l-2.043-2.05-1.414 1.42L18.586 9l-2.043 2.04z" }) });
        },
        871885: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" }) });
        },
        219622: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z" }) });
        },
        791010: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M17.584 4l-2.043-2.043L16.955.543l2.043 2.043L21.041.543l1.414 1.414L20.412 4l2.043 2.043-1.414 1.414-2.043-2.043-2.043 2.043-1.414-1.414L17.584 4zm-11.4-.949C7.734 2.534 9.849 2 12 2v2c-1.849 0-3.734.465-5.184.949-.719.24-1.318.479-1.735.658L5 5.642v6.377c0 1.565.445 3.066 1.291 4.269 1.467-1.484 3.429-2.287 5.715-2.287s4.241.801 5.708 2.279C18.557 15.079 19 13.581 19 12.019V11h2v1.019c0 2.407-.852 4.792-2.575 6.514-.282.282-.587.545-.914.787-.86.636-1.821 1.288-2.742 1.785-.882.476-1.879.895-2.768.895s-1.886-.42-2.768-.895c-.922-.497-1.882-1.149-2.742-1.785-.324-.24-.626-.5-.905-.778-1.729-1.723-2.584-4.112-2.584-6.523V4.382l.553-.276.447.894-.447-.894h.002l.004-.003.012-.006.04-.02.146-.069c.126-.059.308-.141.537-.24.458-.196 1.109-.457 1.89-.717h-.002zM16.32 17.713C15.234 16.605 13.783 16 12.007 16s-3.232.608-4.318 1.719c.82.606 1.692 1.193 2.493 1.625.844.455 1.463.656 1.819.656s.975-.2 1.819-.656c.804-.433 1.678-1.023 2.5-1.631zM12 8c-.828 0-1.5.672-1.5 1.5S11.172 11 12 11s1.5-.672 1.5-1.5S12.828 8 12 8zM8.5 9.5C8.5 7.567 10.067 6 12 6s3.5 1.567 3.5 3.5S13.933 13 12 13s-3.5-1.567-3.5-3.5z" }) });
        },
        117113: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M17.998 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zm-11.814.051C7.734 2.534 9.849 2 12 2v2c-1.849 0-3.734.465-5.184.949-.719.24-1.318.479-1.735.658L5 5.642v6.377c0 1.565.445 3.066 1.291 4.269 1.467-1.484 3.429-2.287 5.715-2.287s4.241.801 5.708 2.28C18.557 15.08 19 13.582 19 12.02v-1.019h2v1.019c0 2.407-.852 4.792-2.575 6.514-.282.282-.587.545-.914.787-.86.636-1.821 1.288-2.742 1.785-.882.476-1.879.895-2.768.895s-1.886-.42-2.768-.895c-.922-.497-1.882-1.149-2.742-1.785-.324-.24-.626-.5-.905-.778-1.729-1.723-2.584-4.112-2.584-6.523V4.382l.553-.276.447.894-.447-.894h.002l.004-.003.012-.006.04-.02.146-.069c.126-.059.308-.141.537-.24.458-.196 1.109-.457 1.89-.717h-.002zM16.32 17.713C15.234 16.605 13.783 16 12.007 16s-3.232.608-4.318 1.719c.82.606 1.692 1.193 2.493 1.625.844.455 1.463.656 1.819.656s.975-.2 1.819-.656c.804-.433 1.678-1.023 2.5-1.631zM12.001 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 1.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5z" }) });
        },
        89616: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }) });
        },
        341333: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M12 5c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5zM8.5 6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5S13.93 10 12 10 8.5 8.43 8.5 6.5zm-3.25 1c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.75.75c0-1.52 1.23-2.75 2.75-2.75S8 6.73 8 8.25 6.77 11 5.25 11 2.5 9.77 2.5 8.25zm16.25-.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM16 8.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S20.27 11 18.75 11 16 9.77 16 8.25zM12 13c-1.29 0-2.37.54-3.22 1.61C8 15.6 7.4 17.07 7.12 19h9.76c-.27-1.85-.83-3.28-1.57-4.28C14.45 13.58 13.34 13 12 13zm-4.78.36C8.41 11.86 10.06 11 12 11c2.02 0 3.7.92 4.91 2.53 1.18 1.57 1.88 3.77 2.09 6.39l.08 1.08H4.92L5 19.92c.22-2.7.96-4.97 2.22-6.56zM2.95 16c.16-.55.39-.97.66-1.28.4-.46.94-.72 1.64-.72v-2c-1.26 0-2.35.49-3.15 1.4-.78.89-1.22 2.11-1.35 3.51L.65 18H4v-2H2.95zm18.95-2.6c.78.89 1.22 2.11 1.35 3.51l.1 1.09H20v-2h1.05c-.16-.55-.39-.97-.66-1.28-.4-.46-.94-.72-1.64-.72v-2c1.26 0 2.35.49 3.15 1.4z" }) });
        },
        444966: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M22.25 13.46v-2.92l-2.36-1.57c-.17-.12-.26-.33-.21-.53l.58-2.54-2.17-2.17-2.53.59c-.21.04-.42-.04-.53-.21l-1.57-2.36h-2.92L8.96 4.11c-.11.17-.32.25-.52.21L5.9 3.73 3.73 5.9l.58 2.54c.05.2-.03.41-.21.53l-2.35 1.57v2.92l2.35 1.57c.18.12.26.33.21.53l-.58 2.54 2.17 2.17 2.54-.59c.2-.04.41.04.52.21l1.58 2.36h2.92l1.57-2.36c.11-.17.32-.25.53-.21l2.53.59 2.17-2.17-.58-2.54c-.05-.2.04-.41.21-.53l2.36-1.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.65 0 3 1.34 3 3s-1.35 3-3 3z" }) });
        },
        468208: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var l = s(552322);
            const r = (e) => (0, l.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, l.jsx)("path", { d: "M3.57 7.14C5.34 4.07 8.66 2 12.46 2C18.12 2 22.71 6.59 22.71 12.25C22.71 17.91 18.12 22.5 12.46 22.5V20.5C17.02 20.5 20.71 16.81 20.71 12.25C20.71 7.69 17.02 4 12.46 4C9.3 4 6.55 5.78 5.16 8.4L7.55 7.34L8.37 9.16L2.83 11.62L1 5.54L2.92 4.96L3.57 7.14ZM13.46 11.84V8.25H11.46V12.66L15.25 16.46L16.67 15.04L13.46 11.84ZM3.84 17.79C3.19 16.79 2.72 15.67 2.45 14.47L4.4 14.03C4.62 15 5 15.9 5.52 16.71L3.84 17.79ZM9.14 21.95C7.9 21.53 6.78 20.88 5.81 20.05L7.11 18.53C7.89 19.2 8.79 19.72 9.78 20.06L9.14 21.95Z" }) });
        },
        647665: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => x });
            var l = s(202784),
                r = s(954713),
                i = s(325686),
                n = s(107267),
                a = s(67369),
                c = s(392237),
                o = s(252021),
                h = s(234622);
            s(470201);
            const d = c.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                x = (e) => {
                    const t = (0, a.JS)(),
                        s = (0, n.useHistory)(),
                        { xChatPinMode: c, xChatPinRegister: x } = (0, n.useParams)();
                    return l.createElement(h.i, null, l.createElement(o.Z, { history: s, isFullWidth: !0, primaryContent: () => l.createElement(i.Z, { style: [d.root, t && d.narrowRoot] }, l.createElement(r.x, { mode: c ?? "new", settings: { path: "/i/chat" }, shouldRegister: "register" === x })), sidebarContent: null }));
                };
        },
        476644: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => m });
            var l = s(202784),
                r = s(700931),
                i = s(325686),
                n = s(107267),
                a = s(67369),
                c = s(392237),
                o = s(252021),
                h = s(234622),
                d = (s(434882), s(952793));
            const x = c.default.create((e) => ({ root: { width: "100%", display: "block", height: "100dvh" }, narrowRoot: { height: "unset" }, webviewRoot: { height: "100%" } })),
                m = (e) => {
                    const t = (0, a.JS)(),
                        s = (0, n.useHistory)(),
                        c = (0, d.hC)("rweb_xchat_debug_enabled");
                    return l.createElement(h.i, null, l.createElement(o.Z, { history: s, isFullWidth: !0, primaryContent: () => l.createElement(i.Z, { style: [x.root, t && x.narrowRoot] }, l.createElement(r.H, { settings: { path: "/i/chat", showDebugOptions: c } })), sidebarContent: null }));
                };
        },
        278003: (e, t, s) => {
            var l = s(482609),
                r = s(274380);
            (t = l(!1)).i(r), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        606299: (e, t, s) => {
            var l = s(482609),
                r = s(274380);
            (t = l(!1)).i(r), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        470201: (e, t, s) => {
            var l = s(46062),
                r = s(278003);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = { insert: "head", singleton: !1 };
            l(r, i);
            e.exports = r.locals || {};
        },
        434882: (e, t, s) => {
            var l = s(46062),
                r = s(606299);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var i = { insert: "head", singleton: !1 };
            l(r, i);
            e.exports = r.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e96e9bea.1acaa4fa.js.map
