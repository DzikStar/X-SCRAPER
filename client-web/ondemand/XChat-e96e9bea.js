(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e96e9bea"],
    {
        318063: (e, t, r) => {
            "use strict";
            r.d(t, { P: () => c });
            var s = r(552322),
                n = r(480158),
                a = r(202784),
                i = r(332161),
                l = r(993165);
            const o = ({ destructive: e, icon: t, onClick: r, text: n }) => (0, s.jsxs)(l.z, { type: "button", className: "px-6 flex items-center h-10 min-w-10 gap-3 w-full !justify-start border-transparent hover:bg-gray-50 focus:brightness-100", variant: e ? "destructiveGhost" : "insightsGhost", onClick: r, children: [t && (0, a.cloneElement)(t, { className: "size-[22px]" }), (0, s.jsx)(i.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: n })] }),
                c = ({ items: e, open: t, onOpenChange: r, trigger: a }) => (0, s.jsx)(n.h, { borderRadius: "2xLarge", trigger: a, open: t, onOpenChange: r, children: (0, s.jsx)("div", { className: "overflow-hidden flex flex-col items-start justify-start rounded-2xl border border-gray-200 gap-1", children: e.map((e) => (0, s.jsx)(o, { ...e }, e.text)) }) });
        },
        959992: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => a });
            var s = r(552322),
                n = r(31674);
            function a({ className: e, strength: t = 5, to: r = "bottom" }) {
                return (0, s.jsxs)("div", {
                    className: (0, n.cn)("absolute inset-0", e),
                    children: [
                        (0, s.jsx)("div", { className: "absolute inset-0", style: { background: `linear-gradient(to ${r}, transparent 10%, hsl(var(--colors-background)) 100%)` } }),
                        Array.from({ length: t })
                            .map((e, t) => t + 1)
                            .map((e) => (0, s.jsx)("div", { className: "absolute inset-0", style: { backdropFilter: "blur(8px)", mask: `linear-gradient(to ${r}, transparent 0%, hsl(var(--colors-background) / 0.8) 50%, hsl(var(--colors-background) / 1) 100%)` } }, e)),
                    ],
                });
            }
        },
        344851: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => i });
            var s = r(552322),
                n = r(34681),
                a = r(993165);
            const i = ({ title: e, message: t, onConfirm: r, confirmText: i = "Confirm", cancelText: l = "Cancel", trigger: o }) => (0, s.jsxs)(n.Vq, { children: [(0, s.jsx)(n.hg, { asChild: !0, children: o }), (0, s.jsxs)(n.cZ, { className: "max-w-sm md:max-w-2xl [&>button]:hidden", children: [(0, s.jsx)(n.fK, { children: (0, s.jsx)(n.$N, { children: e }) }), (0, s.jsx)(n.Be, { children: t }), (0, s.jsxs)(n.cN, { className: "gap-4", children: [(0, s.jsx)(n.GG, { asChild: !0, children: (0, s.jsxs)(a.z, { type: "button", size: "xxLargeCompact", children: [(0, s.jsx)("span", { className: "sr-only", children: l }), l] }) }), (0, s.jsxs)(a.z, { type: "submit", size: "xxLargeCompact", onClick: r, variant: "destructiveFilled", children: [(0, s.jsx)("span", { className: "sr-only", children: i }), i] })] })] })] });
        },
        388414: (e, t, r) => {
            "use strict";
            r.d(t, { I: () => d });
            var s = r(552322),
                n = r(966830),
                a = r(110929),
                i = r(202784),
                l = r(332161);
            const o = ({ destructive: e, icon: t, onClick: r, text: a }) => (0, s.jsxs)(n.ck, { className: "focus-visible:outline-none cursor-pointer px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100 " + (e ? "text-destructive" : "text-text"), onClick: r, children: [t && (0, i.cloneElement)(t, { className: "size-[22px]" }), (0, s.jsx)(l.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: a })] }),
                c = (0, a.j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function d({ borderRadius: e = "2xLarge", items: t, onOpenChange: r, trigger: a, ...i }) {
                return (0, s.jsxs)(n.fC, { onOpenChange: r, children: [(0, s.jsx)(n.xz, { asChild: !0, children: a }), (0, s.jsx)(n.Uv, { children: (0, s.jsx)(n.VY, { ...i, className: c({ borderRadius: e }), children: (0, s.jsx)("div", { className: "overflow-hidden flex flex-col items-start justify-start rounded-2xl border border-gray-200 gap-1", children: t.map((e) => (0, s.jsx)(o, { ...e }, e.text)) }) }) })] });
            }
        },
        470851: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => m, h: () => g });
            var s = r(552322),
                n = r(447742),
                a = r(687521),
                i = r(983706),
                l = r(332161),
                o = r(202784),
                c = r(347725);
            const d = (e, t) => {
                    const r = (0, o.useRef)([0, 0, 0]),
                        s = (0, o.useRef)(0),
                        n = (t, r, s) => {
                            const n = e[t];
                            return !!n && 8 * r + s < n.emojis.length;
                        },
                        a = (t, r, s) => {
                            if (!e[t]) return 0;
                            for (let e = s; e >= 0; e--) if (n(t, r, e)) return e;
                            return 0;
                        };
                    return (i) => {
                        const [l, o, c] = r.current;
                        let d = [l, o, c];
                        const u = e[l],
                            h = u?.emojis.length || 0,
                            m = Math.ceil(h / 8),
                            x = () => {
                                if (l + 1 < e.length) {
                                    const e = a(l + 1, 0, s.current);
                                    d = [l + 1, 0, e];
                                }
                            },
                            g = () => {
                                if (l > 0) {
                                    const t = e[l - 1],
                                        r = Math.ceil((t?.emojis.length || 0) / 8),
                                        n = a(l - 1, r - 1, s.current);
                                    return (d = [l - 1, r - 1, n]), null;
                                }
                                return t?.current && (t.current.focus(), (r.current = [0, 0, 0]), (s.current = 0)), !0;
                            };
                        switch (i.key) {
                            case "ArrowDown":
                                if ((i.preventDefault(), i.stopPropagation(), t?.current && document.activeElement === t.current && ((d = [0, 0, 0]), n(...d)))) {
                                    s.current = 0;
                                    break;
                                }
                                if (i.shiftKey) x();
                                else if (o + 1 >= m) x();
                                else {
                                    const e = a(l, o + 1, s.current);
                                    d = [l, o + 1, e];
                                }
                                break;
                            case "ArrowUp":
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) {
                                    if (g()) return;
                                } else if (o <= 0) {
                                    if (g()) return;
                                } else {
                                    const e = a(l, o - 1, s.current);
                                    d = [l, o - 1, e];
                                }
                                break;
                            case "ArrowLeft":
                                if (t?.current && document.activeElement === t.current) return;
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) (d = [l, o, 0]), n(...d) && (s.current = 0);
                                else if (c <= 0) {
                                    if (o > 0) {
                                        const e = a(l, o - 1, 7);
                                        (d = [l, o - 1, e]), n(...d) && (s.current = e);
                                    } else if (l > 0) {
                                        const t = e[l - 1],
                                            r = Math.ceil((t?.emojis.length || 0) / 8),
                                            i = a(l - 1, r - 1, 7);
                                        (d = [l - 1, r - 1, i]), n(...d) && (s.current = i);
                                    }
                                } else (d = [l, o, c - 1]), n(...d) && (s.current = c - 1);
                                break;
                            case "ArrowRight":
                                if (t?.current && document.activeElement === t.current) return;
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) {
                                    const e = a(l, o, 7);
                                    (d = [l, o, e]), n(...d) && (s.current = e);
                                } else c + 1 >= 8 || 8 * o + c + 1 >= h ? (o + 1 < m ? ((d = [l, o + 1, 0]), (s.current = 0)) : l + 1 < e.length && ((d = [l + 1, 0, 0]), (s.current = 0))) : ((d = [l, o, c + 1]), n(...d) && (s.current = c + 1));
                                break;
                            default:
                                return;
                        }
                        const f = `Emoji-${d.join("-")}`,
                            p = document.getElementById(f);
                        p && ((r.current = d), p.focus());
                    };
                },
                u = c.S.spriteSheetColumns,
                h = c.S.spriteSheetRows,
                m = ({ emoji: e }) => {
                    const t = c.S.emojis[e]?.k[0] || 0,
                        r = c.S.emojis[e]?.k[1] || 0,
                        n = `${(t / (u - 1)) * 100}% ${(r / (h - 1)) * 100}%`;
                    return (0, s.jsx)("div", { style: { backgroundImage: "url(https://abs.twimg.com/responsive-web/client-web/twemoji_sprite_high_res.0eb9421a.png)", backgroundPosition: n, backgroundSize: "5000% 7200%", display: "inline-block", outlineStyle: "none", height: "20px", width: "20px" } });
                },
                x = ({ item: e, index: t, onReactionClicked: r, reactedEmojis: n }) =>
                    (0, s.jsxs)("div", {
                        className: "mb-4",
                        id: `Emoji-${t}`,
                        children: [
                            (0, s.jsx)(l.x, { size: "body", weight: "bold", className: "mb-2", children: e.name }),
                            (0, s.jsx)("div", {
                                className: "grid grid-cols-8 gap-2",
                                children: e.emojis.map((e, a) => {
                                    const i = Math.floor(a / 8),
                                        l = a % 8;
                                    return (0, s.jsx)("button", { id: `Emoji-${t}-${i}-${l}`, className: "flex focus:outline-none focus:ring-0 focus:bg-blue-500/50 justify-center items-center cursor-pointer hover:bg-gray-100 rounded py-1 " + (n.has(e) ? "bg-gray-50" : ""), onClick: () => r(e), type: "button", children: (0, s.jsx)(m, { emoji: e }) }, `${e}`);
                                }),
                            }),
                        ],
                    }),
                g = ({ onReactionClicked: e, recentlyUsedEmojis: t = [], reactionMap: r = [] }) => {
                    const [l, u] = (0, o.useState)(""),
                        h = new Set(r),
                        m = (0, o.useRef)(null),
                        g = (0, o.useMemo)(() => {
                            if (!l) return [t.length > 0 && "" === l ? { id: "recently-used", name: "Recently Used", emojis: t } : void 0, ...c.S.categories].filter((e) => void 0 !== e);
                            const e = l.toLowerCase();
                            return c.S.categories
                                .map((t) => {
                                    const r = t.emojis.filter((t) => {
                                        const r = c.S.emojis[t];
                                        return r?.j.some((t) => t.toLowerCase().includes(e));
                                    });
                                    return { ...t, emojis: r };
                                })
                                .filter((e) => e.emojis.length > 0);
                        }, [l, t]),
                        f = d(g, m);
                    return (0, s.jsxs)("div", {
                        className: "h-100 w-80 p-2 border border-gray-100 rounded-2xl flex flex-col gap-2",
                        onKeyDown: (e) => {
                            f(e);
                        },
                        children: [(0, s.jsx)(a._, { ref: m, id: "emoji-search", autoFocus: !0, placeholder: "Search", value: l, onChange: (e) => u(e.target.value), borderRadius: "xLarge", className: "bg-gray-0 focus-within:bg-transparent", inputClassName: "placeholder:text-gray-700", leftContent: (0, s.jsx)(n.Z, { className: "h-5 w-5 text-gray-700" }) }), (0, s.jsx)(i.T, { items: g, renderItem: (t, r) => (0, s.jsx)(x, { index: r, item: t, reactedEmojis: h, onReactionClicked: e }, t.id), className: "!h-80 scrollbar-thin-custom" })],
                    });
                };
        },
        789764: (e, t, r) => {
            "use strict";
            r.d(t, { o: () => a });
            var s = r(552322),
                n = r(378364);
            function a({ size: e = "medium", spacing: t = 12, urls: r, resolution: a, stackOrder: i = "descending" }) {
                const l = (function (e, t) {
                    if ("ascending" === t) return e.map((e, t) => ({ index: t, scale: "scale-80" }));
                    if ("descending" === t) return e.map((t, r) => ({ index: e.length - r, scale: "scale-80" }));
                    const r = Math.floor(e.length / 2);
                    return e.map((t, s) => {
                        if (s === r) return { index: e.length, scale: "scale-100" };
                        const n = Math.abs(s - r);
                        return { index: e.length - n, scale: "scale-75" };
                    });
                })(r, i);
                return (0, s.jsx)("div", { className: "flex", style: { marginInlineStart: `${t}px` }, children: r.map((r, i) => (0, s.jsx)("div", { className: `rounded-full bg-background p-0.5 ${l[i]?.scale}`, style: { marginInlineStart: -1 * t, zIndex: l[i]?.index }, children: (0, s.jsx)(n.q, { size: e, shape: "circle", url: r, resolution: a }) }, `${r}${i}`)) });
            }
        },
        472275: (e, t, r) => {
            "use strict";
            r.d(t, { e: () => o });
            var s = r(552322),
                n = r(666200),
                a = r(52053),
                i = r(34681),
                l = r(202784);
            function o({ mediaItems: e, initialIndex: t = 0, isOpen: r, onClose: o }) {
                const [c, d] = (0, l.useState)(t);
                (0, l.useEffect)(() => {
                    d(t);
                }, [t]);
                const u = e[c],
                    h = (e) => {
                        e.target === e.currentTarget && o();
                    };
                return r && u
                    ? (0, s.jsx)(i.Vq, {
                          open: r,
                          onOpenChange: o,
                          children: (0, s.jsxs)(i.PK, {
                              children: [
                                  (0, s.jsx)(i.t9, { className: "fixed inset-0 bg-black/50 z-50" }),
                                  (0, s.jsxs)(i.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: h,
                                      children: [
                                          (0, s.jsx)(i.$N, { className: "sr-only", children: "Media Viewer" }),
                                          (0, s.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: h, children: "animated_gif" === u.type || "video" === u.type ? (0, s.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, s.jsx)("video", { src: u.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: u.previewImage }) }) : (0, s.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: (0, s.jsx)("img", { src: u.src, alt: "", className: "w-full h-full object-cover max-h-[inherit] select-none" }) }) }),
                                          e.length > 1 &&
                                              (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, s.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, s.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          c > 0 &&
                                                                          (0, s.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t > 0 ? t - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "previous",
                                                                              children: (0, s.jsx)(n.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, s.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          c < e.length - 1 &&
                                                                          (0, s.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t < e.length - 1 ? t + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "next",
                                                                              children: (0, s.jsx)(a.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, s.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [c + 1, " / ", e.length] }),
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
        653748: (e, t, r) => {
            "use strict";
            r.d(t, { s: () => i });
            var s = r(552322),
                n = r(840489),
                a = r(533131);
            function i({ variant: e = "normal", ...t }) {
                return (0, s.jsx)(a.ZA, { className: "z-40 bg-mask fixed bottom-0 end-0 start-0 top-0 flex h-full w-full items-center justify-center", ...t, children: (0, s.jsx)(a.u_, { ...t, className: (0, n.Z)("bg-background max-h-full overflow-y-auto rounded-xl", "small" === e && "max-w-[32rem]", "normal" === e && "max-w-[60rem]") }) });
            }
        },
        423011: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => a });
            var s = r(552322),
                n = r(332161);
            const a = ({ leftContent: e, rightContent: t, title: r, subtitle: a }) => (0, s.jsxs)("div", { className: "flex flex-row justify-between  p-2 py-4", children: [(0, s.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [e, (0, s.jsxs)("div", { className: "flex flex-col", children: [(0, s.jsx)(n.x, { size: "headline1", weight: "extrabold", children: r }), a && (0, s.jsx)(n.x, { color: "gray700", children: a })] })] }), t] });
        },
        480158: (e, t, r) => {
            "use strict";
            r.d(t, { h: () => d });
            var s = r(552322),
                n = r(305399),
                a = r(110929),
                i = r(194787);
            const l = (0, a.j)("bg-background h-fit fixed bottom-0 left-0 right-0 outline-none", { variants: { borderRadius: { "2xLarge": "rounded-t-2xl", "3xLarge": "rounded-t-3xl", full: "rounded-t-full", large: "rounded-t-lg", medium: "rounded-t-md", none: "rounded-t-none", small: "rounded-t-sm", xLarge: "rounded-t-xl", true: "rounded-t" } } });
            function o({ borderRadius: e = "medium", children: t, className: r, title: n, trigger: a, withHandle: o, ...c }) {
                return (0, s.jsxs)(i.dy.Root, { ...c, children: [(0, s.jsx)(i.dy.Trigger, { asChild: !0, children: a }), (0, s.jsxs)(i.dy.Portal, { children: [(0, s.jsx)(i.dy.Overlay, { className: "fixed inset-0 bg-black/40" }), (0, s.jsxs)(i.dy.Content, { className: l({ borderRadius: e, className: r }), children: [o && (0, s.jsx)(i.dy.Handle, { className: "my-2" }), n && (0, s.jsx)(i.dy.Title, { children: n }), t] })] })] });
            }
            var c = r(437712);
            function d({ children: e, open: t, onOpenChange: r, trigger: a, borderRadius: i }) {
                return (0, n.a)("(min-width: 768px)") ? (0, s.jsx)(c.J, { open: t, onOpenChange: r, trigger: a, withArrow: !0, borderRadius: i, children: e }) : (0, s.jsx)(o, { open: t, onOpenChange: r, trigger: a, children: e });
            }
        },
        880605: (e, t, r) => {
            "use strict";
            r.d(t, { O: () => a });
            var s = r(552322),
                n = r(31674);
            function a({ className: e, ...t }) {
                return (0, s.jsx)("div", { className: (0, n.cn)("block h-full w-full rounded bg-gray-100 motion-safe:animate-pulse", e), ...t });
            }
        },
        261012: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => l });
            var s = r(552322),
                n = r(199237),
                a = r(202784),
                i = r(31674);
            const l = (0, a.forwardRef)(function ({ className: e, size: t = "medium", thumbClassName: r, ...a }, l) {
                return (0, s.jsx)(n.fC, { className: (0, i.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === t ? "h-3 w-10" : "h-2 w-6", e), ...a, ref: l, children: (0, s.jsx)(n.bU, { className: (0, i.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === t ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", r) }) });
            });
        },
        597322: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => p });
            r(136728);
            var s = r(202784),
                n = r(176453),
                a = r(325686),
                i = r(107267),
                l = r(67369),
                o = r(392237),
                c = r(545457),
                d = r(857378),
                u = r(252021),
                h = r(234622),
                m = (r(536188), r(125363)),
                x = r(390387),
                g = r(809329);
            const f = o.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                p = (e) => {
                    const t = (0, l.yu)(),
                        r = (0, i.useHistory)(),
                        { id: o, token: p } = (0, i.useParams)(),
                        b = t ? d.h$ : 0;
                    (o && p) || r.push("/i/chat"), (0, c.MQ)();
                    const j = (0, m.v9)(x.Lz);
                    return s.createElement(h.i, null, s.createElement(u.Z, { history: r, isFullWidth: !0, primaryContent: () => (j ? s.createElement(g.x, null) : s.createElement(a.Z, { style: f.root }, s.createElement(n.N, { groupId: o, settings: { path: "/i/chat", bottomBarHeight: b }, token: p }))), sidebarContent: null }));
                };
        },
        809329: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => u });
            var s = r(202784),
                n = r(325686),
                a = r(420740),
                i = r(392237),
                l = r(111677),
                o = r.n(l);
            const c = o().h7e1c146,
                d = o().ha8209bc;
            function u() {
                return s.createElement(n.Z, { style: h.root }, s.createElement(a.Z, { buttonLink: { pathname: "/home" }, retryLabel: d, title: c }));
            }
            const h = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 } }));
        },
        647665: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => p });
            var s = r(202784),
                n = r(850697),
                a = r(325686),
                i = r(107267),
                l = r(67369),
                o = r(392237),
                c = r(545457),
                d = r(857378),
                u = r(252021),
                h = r(234622),
                m = (r(470201), r(125363)),
                x = r(390387),
                g = r(809329);
            const f = o.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                p = (e) => {
                    const t = (0, l.yu)(),
                        r = (0, i.useHistory)(),
                        { xChatPinMode: o } = (0, i.useParams)(),
                        p = t ? d.h$ : 0;
                    (0, c.MQ)();
                    const b = (0, m.v9)(x.Lz);
                    return s.createElement(h.i, null, s.createElement(u.Z, { history: r, isFullWidth: !0, primaryContent: () => (b ? s.createElement(g.x, null) : s.createElement(a.Z, { style: f.root }, s.createElement(n.x, { mode: o ?? "new", settings: { path: "/i/chat", bottomBarHeight: p } }))), sidebarContent: null }));
                };
        },
        476644: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => v });
            var s = r(202784),
                n = r(700931),
                a = r(264531),
                i = r(325686),
                l = r(107267),
                o = r(67369),
                c = r(392237),
                d = r(545457),
                u = r(857378),
                h = r(252021),
                m = r(234622),
                x = (r(434882), r(134760)),
                g = r(952793),
                f = r(125363),
                p = r(390387),
                b = r(809329);
            const j = c.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                v = (e) => {
                    const t = (0, l.useHistory)(),
                        r = (0, l.useLocation)(),
                        c = (0, g.hC)("rweb_xchat_debug_enabled"),
                        v = (0, o.yu)(),
                        y = "/i/chat/" === r.pathname || "/i/chat" === r.pathname,
                        w = !y,
                        k = v && !w ? u.h$ : 0,
                        N = (0, g.hC)("rweb_xchat_logs"),
                        C = (0, g.hC)("rweb_xchat_new_db_worker_enabled"),
                        E = (0, g.hC)("rweb_xchat_fs_worker");
                    (0, d.MQ)();
                    const _ = (0, f.v9)(p.Lz);
                    return s.createElement(m.i, null, s.createElement(h.Z, { headerless: v && w, history: t, isFullWidth: !0, primaryContent: () => (_ ? s.createElement(b.x, null) : s.createElement(i.Z, { style: j.root }, s.createElement(n.H, { settings: { path: "/i/chat", showDebugOptions: c, bottomBarHeight: k, logLevel: N ? a.B$.INFO : a.B$.WARN, newDBWorker: C, fsWorker: E, rwebElements: { dashMenuButton: v && y ? s.createElement(x.Z, null) : void 0 } } }))), sidebarContent: null, withTopNav: !1 }));
                };
        },
        115290: (e, t, r) => {
            var s = r(482609),
                n = r(274380);
            (t = s(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        278003: (e, t, r) => {
            var s = r(482609),
                n = r(274380);
            (t = s(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        606299: (e, t, r) => {
            var s = r(482609),
                n = r(274380);
            (t = s(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        536188: (e, t, r) => {
            var s = r(46062),
                n = r(115290);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            s(n, a);
            e.exports = n.locals || {};
        },
        470201: (e, t, r) => {
            var s = r(46062),
                n = r(278003);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            s(n, a);
            e.exports = n.locals || {};
        },
        434882: (e, t, r) => {
            var s = r(46062),
                n = r(606299);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            s(n, a);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e96e9bea.d15cc1fa.js.map
