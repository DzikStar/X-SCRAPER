(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e96e9bea"],
    {
        318063: (e, t, r) => {
            "use strict";
            r.d(t, { P: () => c });
            var n = r(552322),
                s = r(480158),
                a = r(202784),
                i = r(993165),
                o = r(332161);
            const l = ({ destructive: e, icon: t, onClick: r, text: s }) => (0, n.jsx)(i.z, { className: "!justify-start cursor-pointer px-6 h-10 min-w-10 w-full border-transparent focus-visible:bg-gray-50 hover:bg-gray-50", variant: e ? "destructiveGhost" : "insightsGhost", onClick: r, type: "button", children: (0, n.jsxs)(o.x, { className: "flex gap-3", color: e ? "red500" : "text", numberOfLines: 1, weight: "bold", children: [t && (0, a.cloneElement)(t, { className: "size-5" }), s] }) }),
                c = ({ items: e, open: t, onOpenChange: r, trigger: a }) => (0, n.jsx)(s.h, { borderRadius: "2xLarge", trigger: a, open: t, onOpenChange: r, children: (0, n.jsx)("div", { className: "border border-gray-200 flex flex-col overflow-hidden  rounded-2xl", children: e.map((e) => (0, n.jsx)(l, { ...e }, e.text)) }) });
        },
        959992: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => a });
            var n = r(552322),
                s = r(31674);
            function a({ className: e, strength: t = 5, to: r = "bottom" }) {
                return (0, n.jsxs)("div", {
                    className: (0, s.cn)("absolute inset-0", e),
                    children: [
                        (0, n.jsx)("div", { className: "absolute inset-0", style: { background: `linear-gradient(to ${r}, transparent 10%, hsl(var(--colors-background)) 100%)` } }),
                        Array.from({ length: t })
                            .map((e, t) => t + 1)
                            .map((e) => (0, n.jsx)("div", { className: "absolute inset-0", style: { WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", mask: `linear-gradient(to ${r}, transparent 0%, hsl(var(--colors-background) / 0.8) 50%, hsl(var(--colors-background) / 1) 100%)` } }, e)),
                    ],
                });
            }
        },
        344851: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => i });
            var n = r(552322),
                s = r(34681),
                a = r(993165);
            const i = ({ open: e, defaultOpen: t, onOpenChange: r, modal: i, title: o, message: l, onConfirm: c, confirmText: d = "Confirm", cancelText: u = "Cancel", trigger: h }) => (0, n.jsxs)(s.Vq, { defaultOpen: t, open: e, onOpenChange: r, modal: i, children: [(0, n.jsx)(s.hg, { asChild: !0, children: h }), (0, n.jsxs)(s.cZ, { className: "max-w-sm p-6", children: [(0, n.jsx)(s.fK, { children: (0, n.jsx)(s.$N, { children: o }) }), (0, n.jsx)(s.Be, { children: l }), (0, n.jsxs)(s.cN, { className: "gap-4 flex !flex-col-reverse", children: [(0, n.jsx)(s.GG, { asChild: !0, children: (0, n.jsxs)(a.z, { type: "button", size: "xxLargeCompact", children: [(0, n.jsx)("span", { className: "sr-only", children: u }), u] }) }), (0, n.jsxs)(a.z, { type: "submit", size: "xxLargeCompact", onClick: c, variant: "destructiveFilled", className: "!ml-0", children: [(0, n.jsx)("span", { className: "sr-only", children: d }), d] })] })] })] });
        },
        388414: (e, t, r) => {
            "use strict";
            r.d(t, { I: () => u });
            var n = r(552322),
                s = r(966830),
                a = r(110929),
                i = r(202784),
                o = r(332161),
                l = r(840489);
            const c = ({ destructive: e, icon: t, onClick: r, text: a }) => (0, n.jsxs)(s.ck, { className: (0, l.Z)("focus-visible:outline-none cursor-pointer px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100", { "text-red-500 hover:bg-mix-red-500 hover:bg-mix-amount-15": e }), onClick: r, children: [t && (0, i.cloneElement)(t, { className: "size-[22px]" }), (0, n.jsx)(o.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: a })] }),
                d = (0, a.j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function u({ borderRadius: e = "2xLarge", items: t, onOpenChange: r, trigger: a, ...i }) {
                return (0, n.jsxs)(s.fC, { onOpenChange: r, children: [(0, n.jsx)(s.xz, { asChild: !0, children: a }), (0, n.jsx)(s.Uv, { children: (0, n.jsx)(s.VY, { ...i, className: d({ borderRadius: e }), children: (0, n.jsx)("div", { className: "overflow-hidden flex flex-col items-start justify-start rounded-2xl border border-gray-200 gap-1", children: t.map((e) => (0, n.jsx)(c, { ...e }, e.text)) }) }) })] });
            }
        },
        470851: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => m, h: () => x });
            var n = r(552322),
                s = r(447742),
                a = r(687521),
                i = r(983706),
                o = r(332161),
                l = r(202784),
                c = r(347725);
            const d = (e, t) => {
                    const r = (0, l.useRef)([0, 0, 0]),
                        n = (0, l.useRef)(0),
                        s = (t, r, n) => {
                            const s = e[t];
                            return !!s && 8 * r + n < s.emojis.length;
                        },
                        a = (t, r, n) => {
                            if (!e[t]) return 0;
                            for (let e = n; e >= 0; e--) if (s(t, r, e)) return e;
                            return 0;
                        };
                    return (i) => {
                        const [o, l, c] = r.current;
                        let d = [o, l, c];
                        const u = e[o],
                            h = u?.emojis.length || 0,
                            m = Math.ceil(h / 8),
                            g = () => {
                                if (o + 1 < e.length) {
                                    const e = a(o + 1, 0, n.current);
                                    d = [o + 1, 0, e];
                                }
                            },
                            x = () => {
                                if (o > 0) {
                                    const t = e[o - 1],
                                        r = Math.ceil((t?.emojis.length || 0) / 8),
                                        s = a(o - 1, r - 1, n.current);
                                    return (d = [o - 1, r - 1, s]), null;
                                }
                                return t?.current && (t.current.focus(), (r.current = [0, 0, 0]), (n.current = 0)), !0;
                            };
                        switch (i.key) {
                            case "ArrowDown":
                                if ((i.preventDefault(), i.stopPropagation(), t?.current && document.activeElement === t.current && ((d = [0, 0, 0]), s(...d)))) {
                                    n.current = 0;
                                    break;
                                }
                                if (i.shiftKey) g();
                                else if (l + 1 >= m) g();
                                else {
                                    const e = a(o, l + 1, n.current);
                                    d = [o, l + 1, e];
                                }
                                break;
                            case "ArrowUp":
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) {
                                    if (x()) return;
                                } else if (l <= 0) {
                                    if (x()) return;
                                } else {
                                    const e = a(o, l - 1, n.current);
                                    d = [o, l - 1, e];
                                }
                                break;
                            case "ArrowLeft":
                                if (t?.current && document.activeElement === t.current) return;
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) (d = [o, l, 0]), s(...d) && (n.current = 0);
                                else if (c <= 0) {
                                    if (l > 0) {
                                        const e = a(o, l - 1, 7);
                                        (d = [o, l - 1, e]), s(...d) && (n.current = e);
                                    } else if (o > 0) {
                                        const t = e[o - 1],
                                            r = Math.ceil((t?.emojis.length || 0) / 8),
                                            i = a(o - 1, r - 1, 7);
                                        (d = [o - 1, r - 1, i]), s(...d) && (n.current = i);
                                    }
                                } else (d = [o, l, c - 1]), s(...d) && (n.current = c - 1);
                                break;
                            case "ArrowRight":
                                if (t?.current && document.activeElement === t.current) return;
                                if ((i.preventDefault(), i.stopPropagation(), i.shiftKey)) {
                                    const e = a(o, l, 7);
                                    (d = [o, l, e]), s(...d) && (n.current = e);
                                } else c + 1 >= 8 || 8 * l + c + 1 >= h ? (l + 1 < m ? ((d = [o, l + 1, 0]), (n.current = 0)) : o + 1 < e.length && ((d = [o + 1, 0, 0]), (n.current = 0))) : ((d = [o, l, c + 1]), s(...d) && (n.current = c + 1));
                                break;
                            default:
                                return;
                        }
                        const p = `Emoji-${d.join("-")}`,
                            f = document.getElementById(p);
                        f && ((r.current = d), f.focus());
                    };
                },
                u = c.S.spriteSheetColumns,
                h = c.S.spriteSheetRows,
                m = ({ emoji: e }) => {
                    const t = c.S.emojis[e]?.k[0] || 0,
                        r = c.S.emojis[e]?.k[1] || 0,
                        s = `${(t / (u - 1)) * 100}% ${(r / (h - 1)) * 100}%`;
                    return (0, n.jsx)("div", { style: { backgroundImage: "url(https://abs.twimg.com/responsive-web/client-web/twemoji_sprite_high_res.0eb9421a.png)", backgroundPosition: s, backgroundSize: "5000% 7200%", display: "inline-block", outlineStyle: "none", height: "20px", width: "20px" } });
                },
                g = ({ item: e, index: t, onReactionClicked: r, reactedEmojis: s, t: a }) =>
                    (0, n.jsxs)("div", {
                        className: "mb-4",
                        id: `Emoji-${t}`,
                        children: [
                            (0, n.jsx)(o.x, { size: "body", weight: "bold", className: "mb-2", children: a(e.name) }),
                            (0, n.jsx)("div", {
                                className: "grid grid-cols-8 gap-2",
                                children: e.emojis.map((e, a) => {
                                    const i = Math.floor(a / 8),
                                        o = a % 8;
                                    return (0, n.jsx)("button", { id: `Emoji-${t}-${i}-${o}`, className: "flex focus:outline-none focus:ring-0 focus:bg-blue-500/50 justify-center items-center cursor-pointer hover:bg-gray-100 rounded py-1 " + (s.has(e) ? "bg-gray-50" : ""), onClick: () => r(e), type: "button", children: (0, n.jsx)(m, { emoji: e }) }, `${e}`);
                                }),
                            }),
                        ],
                    }),
                x = ({ onReactionClicked: e, recentlyUsedEmojis: t = [], reactionMap: r = [], t: o }) => {
                    const [u, h] = (0, l.useState)(""),
                        m = new Set(r),
                        x = (0, l.useRef)(null),
                        p = (0, l.useMemo)(() => {
                            if (!u) return [t.length > 0 && "" === u ? { id: "recently-used", name: "Recently Used", emojis: t } : void 0, ...c.S.categories].filter((e) => void 0 !== e);
                            const e = u.toLowerCase();
                            return c.S.categories
                                .map((t) => {
                                    const r = t.emojis.filter((t) => {
                                        const r = c.S.emojis[t];
                                        return r?.j.some((t) => t.toLowerCase().includes(e));
                                    });
                                    return { ...t, emojis: r };
                                })
                                .filter((e) => e.emojis.length > 0);
                        }, [u, t]),
                        f = d(p, x);
                    return (0, n.jsxs)("div", {
                        className: "h-100 w-80 p-2 border border-gray-100 rounded-2xl flex flex-col gap-2",
                        onKeyDown: (e) => {
                            f(e);
                        },
                        children: [(0, n.jsx)(a._, { ref: x, id: "emoji-search", autoFocus: !0, placeholder: o("Search"), value: u, onChange: (e) => h(e.target.value), borderRadius: "xLarge", className: "bg-gray-0 focus-within:bg-transparent", inputClassName: "placeholder:text-gray-700", leftContent: (0, n.jsx)(s.Z, { className: "h-5 w-5 text-gray-700" }) }), (0, n.jsx)(i.T, { items: p, renderItem: (t, r) => (0, n.jsx)(g, { index: r, item: t, reactedEmojis: m, onReactionClicked: e, t: o }, t.id), className: "!h-80 scrollbar-thin-custom" })],
                    });
                };
        },
        789764: (e, t, r) => {
            "use strict";
            r.d(t, { o: () => a });
            var n = r(552322),
                s = r(6937);
            function a({ size: e = "medium", spacing: t = 12, urls: r, resolution: a, stackOrder: i = "descending" }) {
                const o = (function (e, t) {
                    if ("ascending" === t) return e.map((e, t) => ({ index: t, scale: "scale-80" }));
                    if ("descending" === t) return e.map((t, r) => ({ index: e.length - r, scale: "scale-80" }));
                    const r = Math.floor(e.length / 2);
                    return e.map((t, n) => {
                        if (n === r) return { index: e.length, scale: "scale-100" };
                        const s = Math.abs(n - r);
                        return { index: e.length - s, scale: "scale-75" };
                    });
                })(r, i);
                return (0, n.jsx)("div", { className: "flex", style: { marginInlineStart: `${t}px` }, children: r.map((r, i) => (0, n.jsx)("div", { className: `rounded-full bg-background p-0.5 ${o[i]?.scale}`, style: { marginInlineStart: -1 * t, zIndex: o[i]?.index }, children: (0, n.jsx)(s.q, { size: e, shape: "circle", url: r, resolution: a }) }, `${r}${i}`)) });
            }
        },
        588377: (e, t, r) => {
            "use strict";
            r.d(t, { s: () => o });
            var n = r(552322),
                s = r(472275),
                a = r(840489),
                i = r(202784);
            function o({ mediaItems: e }) {
                const [t, r] = (0, i.useState)(!1),
                    [a, o] = (0, i.useState)(0),
                    c = (e, t) => (e.preventDefault(), e.stopPropagation(), o(t), r(!0), !1);
                if (!e || 0 === e.length) return null;
                if (1 === e.length) {
                    const i = e[0];
                    return i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", {
                                      className: "border border-gray-200 rounded-xl overflow-hidden cursor-pointer w-full h-auto max-h-auto",
                                      onClick: (e) => {
                                          e.preventDefault(), e.stopPropagation(), c(e, 0);
                                      },
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onTouchStart: (e) => e.stopPropagation(),
                                      children: (0, n.jsx)(l, { mediaItem: i, gridItem: !1 }),
                                  }),
                                  (0, n.jsx)(s.e, {
                                      mediaItems: e,
                                      initialIndex: a,
                                      isOpen: t,
                                      onClose: () => {
                                          r(!1), o(0);
                                      },
                                  }),
                              ],
                          })
                        : null;
                }
                const d = e.slice(0, 4),
                    u = 3 === d.length,
                    h = d.length <= 2 ? 1 : 2;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("div", {
                            className: "grid gap-0.5 border border-gray-200 overflow-hidden flex-shrink-0 rounded-lg aspect-video p-0",
                            style: { gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: u ? "1fr 1fr" : `repeat(${h}, 1fr)` },
                            children: d.map((e, t) =>
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: "w-full h-full overflow-hidden cursor-pointer",
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), c(e, t);
                                        },
                                        onMouseDown: (e) => e.stopPropagation(),
                                        onTouchStart: (e) => e.stopPropagation(),
                                        style: { ...(u && 0 === t ? { gridRow: "span 2" } : void 0) },
                                        children: (0, n.jsx)(l, { mediaItem: e, gridItem: !0 }),
                                    },
                                    `media-${e.src}-${t}`,
                                ),
                            ),
                        }),
                        (0, n.jsx)(s.e, {
                            mediaItems: e,
                            initialIndex: a,
                            isOpen: t,
                            onClose: () => {
                                r(!1), o(0);
                            },
                        }),
                    ],
                });
            }
            function l({ mediaItem: e, gridItem: t = !1 }) {
                if (!e) return null;
                const r = "video" === e.type,
                    s = "animated_gif" === e.type;
                return (0, n.jsx)("div", { className: (0, a.Z)("relative overflow-hidden", t ? "w-full h-full" : "w-full h-full flex-shrink-0"), children: r || s ? (0, n.jsx)("video", { src: e.src, autoPlay: !0, muted: !0, loop: !0, playsInline: !0, className: (0, a.Z)("w-full h-full object-cover") }) : (0, n.jsx)("img", { src: e.previewImage, alt: "Media content", className: (0, a.Z)("w-full h-full object-cover") }) });
            }
        },
        472275: (e, t, r) => {
            "use strict";
            r.d(t, { e: () => l });
            var n = r(552322),
                s = r(666200),
                a = r(52053),
                i = r(34681),
                o = r(202784);
            function l({ mediaItems: e, initialIndex: t = 0, isOpen: r, onClose: l }) {
                const [c, d] = (0, o.useState)(t);
                (0, o.useEffect)(() => {
                    d(t);
                }, [t]);
                const u = e[c],
                    h = (e) => {
                        e.target === e.currentTarget && l();
                    };
                return r && u
                    ? (0, n.jsx)(i.Vq, {
                          open: r,
                          onOpenChange: l,
                          children: (0, n.jsxs)(i.PK, {
                              children: [
                                  (0, n.jsx)(i.t9, { className: "fixed inset-0 bg-black/50 z-50" }),
                                  (0, n.jsxs)(i.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: h,
                                      children: [
                                          (0, n.jsx)(i.$N, { className: "sr-only", children: "Media Viewer" }),
                                          (0, n.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: h, children: "animated_gif" === u.type || "video" === u.type ? (0, n.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, n.jsx)("video", { src: u.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: u.previewImage }) }) : (0, n.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: (0, n.jsx)("img", { src: u.src, alt: "", className: "w-full h-full object-cover max-h-[inherit] select-none" }) }) }),
                                          e.length > 1 &&
                                              (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, n.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, n.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          c > 0 &&
                                                                          (0, n.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t > 0 ? t - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "previous",
                                                                              children: (0, n.jsx)(s.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, n.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          c < e.length - 1 &&
                                                                          (0, n.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t < e.length - 1 ? t + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "next",
                                                                              children: (0, n.jsx)(a.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, n.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [c + 1, " / ", e.length] }),
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
            var n = r(552322),
                s = r(840489),
                a = r(533131);
            function i({ variant: e = "normal", ...t }) {
                return (0, n.jsx)(a.ZA, { className: "z-40 bg-mask fixed bottom-0 end-0 start-0 top-0 flex h-full w-full items-center justify-center", ...t, children: (0, n.jsx)(a.u_, { ...t, className: (0, s.Z)("bg-background max-h-full overflow-y-auto rounded-xl", "small" === e && "max-w-[32rem]", "normal" === e && "max-w-[60rem]") }) });
            }
        },
        423011: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => a });
            var n = r(552322),
                s = r(332161);
            const a = ({ leftContent: e, rightContent: t, title: r, subtitle: a }) => (0, n.jsxs)("div", { className: "flex flex-row justify-between  p-2 py-4", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [e, (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(s.x, { size: "headline1", weight: "extrabold", children: r }), a && (0, n.jsx)(s.x, { color: "gray700", children: a })] })] }), t] });
        },
        480158: (e, t, r) => {
            "use strict";
            r.d(t, { h: () => d });
            var n = r(552322),
                s = r(3577),
                a = r(110929),
                i = r(194787);
            const o = (0, a.j)("bg-background h-fit fixed bottom-0 left-0 right-0 outline-none", { variants: { borderRadius: { "2xLarge": "rounded-t-2xl", "3xLarge": "rounded-t-3xl", full: "rounded-t-full", large: "rounded-t-lg", medium: "rounded-t-md", none: "rounded-t-none", small: "rounded-t-sm", xLarge: "rounded-t-xl", true: "rounded-t" } } });
            function l({ borderRadius: e = "medium", children: t, className: r, title: s, trigger: a, withHandle: l, ...c }) {
                return (0, n.jsxs)(i.dy.Root, { ...c, children: [(0, n.jsx)(i.dy.Trigger, { asChild: !0, children: a }), (0, n.jsxs)(i.dy.Portal, { children: [(0, n.jsx)(i.dy.Overlay, { className: "fixed inset-0 bg-black/40" }), (0, n.jsxs)(i.dy.Content, { className: o({ borderRadius: e, className: r }), children: [l && (0, n.jsx)(i.dy.Handle, { className: "my-2" }), s && (0, n.jsx)(i.dy.Title, { children: s }), t] })] })] });
            }
            var c = r(437712);
            function d({ children: e, open: t, onOpenChange: r, trigger: a, borderRadius: i }) {
                return (0, s.a)("(min-width: 768px)") ? (0, n.jsx)(c.J, { open: t, onOpenChange: r, trigger: a, withArrow: "none" === i, borderRadius: i, children: e }) : (0, n.jsx)(l, { open: t, onOpenChange: r, trigger: a, children: e });
            }
        },
        880605: (e, t, r) => {
            "use strict";
            r.d(t, { O: () => a });
            var n = r(552322),
                s = r(31674);
            function a({ className: e, ...t }) {
                return (0, n.jsx)("div", { className: (0, s.cn)("block h-full w-full rounded bg-gray-100 motion-safe:animate-pulse", e), ...t });
            }
        },
        261012: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => o });
            var n = r(552322),
                s = r(199237),
                a = r(202784),
                i = r(31674);
            const o = (0, a.forwardRef)(function ({ className: e, size: t = "medium", thumbClassName: r, ...a }, o) {
                return (0, n.jsx)(s.fC, { className: (0, i.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === t ? "h-3 w-10" : "h-2 w-6", e), ...a, ref: o, children: (0, n.jsx)(s.bU, { className: (0, i.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === t ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", r) }) });
            });
        },
        626768: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => o });
            var n = r(552322),
                s = r(31674),
                a = r(664177),
                i = r(202784);
            const o = i.memo(function ({ children: e, as: t = "p", className: r, duration: o = 2, spread: l = 2 }) {
                const c = a.E.create(t),
                    d = (0, i.useMemo)(() => e.length * l, [e, l]);
                return (0, n.jsx)(c, { className: (0, s.cn)("relative inline-block bg-[length:250%_100%,auto] bg-clip-text", "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]", "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]", "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]", r), initial: { backgroundPosition: "100% center" }, animate: { backgroundPosition: "0% center" }, transition: { repeat: Number.POSITIVE_INFINITY, duration: o, ease: "linear" }, style: { "--spread": `${d}px`, backgroundImage: "var(--bg), linear-gradient(var(--base-color), var(--base-color))" }, children: e });
            });
        },
        331707: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => M });
            var n = r(202784),
                s = r(325686),
                a = r(107267),
                i = r(67369),
                o = r(392237),
                l = r(545457),
                c = r(252021),
                d = r(234622),
                u = (r(434882), r(125363)),
                h = r(390387),
                m = r(189244),
                g = (r(136728), r(176453));
            r(536188);
            const x = (e) => {
                const t = (0, a.useHistory)(),
                    { id: r, token: s } = (0, a.useParams)();
                return (r && s) || t.push("/i/chat"), n.createElement(g.N, { groupId: r, token: s });
            };
            var p = r(700931);
            r(804835);
            const f = (e) => n.createElement(p.H, null);
            var b = r(420740),
                v = r(111677),
                j = r.n(v);
            const y = j().h7e1c146,
                w = j().ha8209bc;
            function k() {
                return n.createElement(s.Z, { style: N.root }, n.createElement(b.Z, { buttonLink: { pathname: "/home" }, retryLabel: w, title: y }));
            }
            const N = o.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 } }));
            var C = r(850697);
            r(470201);
            const _ = (e) => {
                const { xChatPinMode: t } = (0, a.useParams)();
                return n.createElement(C.x, { mode: t ?? "new" });
            };
            var I = r(732448),
                $ = r(264531),
                E = r(857378),
                P = (r(514882), r(134760)),
                R = r(952793);
            const z = ({ children: e }) => {
                    const t = (0, a.useLocation)(),
                        r = (0, R.hC)("rweb_xchat_debug_enabled"),
                        s = (0, i.yu)(),
                        o = "/i/chat/" === t.pathname || "/i/chat" === t.pathname,
                        l = s && !!o ? E.h$ : 0,
                        c = (0, R.hC)("rweb_xchat_logs");
                    return n.createElement(I.I, { settings: { path: "/i/chat", showDebugOptions: r, bottomBarHeight: l, logLevel: c ? $.B$.DEBUG : $.B$.WARN, rwebElements: { dashMenuButton: s && o ? n.createElement(P.Z, null) : void 0 } } }, e);
                },
                L = o.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                M = (e) => {
                    const t = (0, a.useHistory)(),
                        r = (0, a.useLocation)(),
                        o = (0, i.yu)(),
                        g = !("/i/chat/" === r.pathname || "/i/chat" === r.pathname);
                    (0, l.MQ)();
                    const p = (0, u.v9)(h.Lz);
                    return n.createElement(d.i, null, n.createElement(z, null, n.createElement(c.Z, { headerless: o && g, history: t, isFullWidth: !0, primaryContent: () => (p ? n.createElement(k, null) : n.createElement(s.Z, { style: L.root }, n.createElement(a.Route, { component: _, exact: !0, key: "/i/chat/pin/:xChatPinMode", path: `/i/chat/pin/${m.yf}` }), n.createElement(a.Route, { component: f, exact: !0, key: "/i/chat", path: ["/i/chat", `/i/chat/${m.JD}/${m.dh}`, `/i/chat/${m.JD}`, `/i/chat/${m.JD}/${m.dh}/${m.UI}`] }), n.createElement(a.Route, { component: x, exact: !0, key: "/i/xchat_group_join/:id/:token", path: `/i/xchat_group_join/${m.JD}/${m.xv}` }), n.createElement(a.Route, { component: x, exact: !0, key: "/i/chat/group_join/:id/:token", path: `/i/chat/group_join/${m.JD}/${m.xv}` }))), sidebarContent: null, withTopNav: !1 })));
                };
        },
        115290: (e, t, r) => {
            var n = r(482609),
                s = r(274380);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        850906: (e, t, r) => {
            var n = r(482609),
                s = r(274380);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        278003: (e, t, r) => {
            var n = r(482609),
                s = r(274380);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        665509: (e, t, r) => {
            var n = r(482609),
                s = r(274380);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        606299: (e, t, r) => {
            var n = r(482609),
                s = r(274380);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        536188: (e, t, r) => {
            var n = r(46062),
                s = r(115290);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
        804835: (e, t, r) => {
            var n = r(46062),
                s = r(850906);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
        470201: (e, t, r) => {
            var n = r(46062),
                s = r(278003);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
        514882: (e, t, r) => {
            var n = r(46062),
                s = r(665509);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
        434882: (e, t, r) => {
            var n = r(46062),
                s = r(606299);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e96e9bea.b5c27fca.js.map
