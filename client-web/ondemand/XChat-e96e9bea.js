(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e96e9bea"],
    {
        318063: (e, t, s) => {
            "use strict";
            s.d(t, { P: () => o });
            var r = s(552322),
                n = s(480158),
                a = s(202784),
                l = s(332161);
            const i = ({ destructive: e, icon: t, onClick: s, text: n }) => (0, r.jsxs)("button", { type: "button", className: "px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100 " + (e ? "text-destructive" : "text-text"), onClick: s, children: [t && (0, a.cloneElement)(t, { className: "size-[22px]" }), (0, r.jsx)(l.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: n })] }),
                o = ({ items: e, open: t, onOpenChange: s, trigger: a }) => (0, r.jsx)(n.h, { borderRadius: "2xLarge", trigger: a, open: t, onOpenChange: s, children: (0, r.jsx)("div", { className: "overflow-hidden flex flex-col items-start justify-start rounded-2xl border border-gray-200 gap-1", children: e.map((e) => (0, r.jsx)(i, { ...e }, e.text)) }) });
        },
        959992: (e, t, s) => {
            "use strict";
            s.d(t, { r: () => a });
            var r = s(552322),
                n = s(31674);
            function a({ className: e, strength: t = 5, to: s = "bottom" }) {
                return (0, r.jsxs)("div", {
                    className: (0, n.cn)("absolute inset-0", e),
                    children: [
                        (0, r.jsx)("div", { className: "absolute inset-0", style: { background: `linear-gradient(to ${s}, transparent 10%, hsl(var(--colors-background)) 100%)` } }),
                        Array.from({ length: t })
                            .map((e, t) => t + 1)
                            .map((e) => (0, r.jsx)("div", { className: "absolute inset-0", style: { backdropFilter: "blur(8px)", mask: `linear-gradient(to ${s}, transparent 0%, hsl(var(--colors-background) / 0.8) 50%, hsl(var(--colors-background) / 1) 100%)` } }, e)),
                    ],
                });
            }
        },
        344851: (e, t, s) => {
            "use strict";
            s.d(t, { c: () => l });
            var r = s(552322),
                n = s(34681),
                a = s(993165);
            const l = ({ title: e, message: t, onConfirm: s, confirmText: l = "Confirm", cancelText: i = "Cancel", trigger: o }) => (0, r.jsxs)(n.Vq, { children: [(0, r.jsx)(n.hg, { asChild: !0, children: o }), (0, r.jsxs)(n.cZ, { className: "max-w-sm md:max-w-2xl [&>button]:hidden", children: [(0, r.jsx)(n.fK, { children: (0, r.jsx)(n.$N, { children: e }) }), (0, r.jsx)(n.Be, { children: t }), (0, r.jsxs)(n.cN, { className: "gap-4", children: [(0, r.jsx)(n.GG, { asChild: !0, children: (0, r.jsxs)(a.z, { type: "button", size: "xxLargeCompact", children: [(0, r.jsx)("span", { className: "sr-only", children: i }), i] }) }), (0, r.jsxs)(a.z, { type: "submit", size: "xxLargeCompact", onClick: s, variant: "destructiveFilled", children: [(0, r.jsx)("span", { className: "sr-only", children: l }), l] })] })] })] });
        },
        388414: (e, t, s) => {
            "use strict";
            s.d(t, { I: () => d });
            var r = s(552322),
                n = s(966830),
                a = s(110929),
                l = s(202784),
                i = s(332161);
            const o = ({ destructive: e, icon: t, onClick: s, text: a }) => (0, r.jsxs)(n.ck, { className: "focus-visible:outline-none cursor-pointer px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100 " + (e ? "text-destructive" : "text-text"), onClick: s, children: [t && (0, l.cloneElement)(t, { className: "size-[22px]" }), (0, r.jsx)(i.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: a })] }),
                c = (0, a.j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function d({ borderRadius: e = "2xLarge", items: t, onOpenChange: s, trigger: a, ...l }) {
                return (0, r.jsxs)(n.fC, { onOpenChange: s, children: [(0, r.jsx)(n.xz, { asChild: !0, children: a }), (0, r.jsx)(n.Uv, { children: (0, r.jsx)(n.VY, { ...l, className: c({ borderRadius: e }), children: (0, r.jsx)("div", { className: "overflow-hidden flex flex-col items-start justify-start rounded-2xl border border-gray-200 gap-1", children: t.map((e) => (0, r.jsx)(o, { ...e }, e.text)) }) }) })] });
            }
        },
        594078: (e, t, s) => {
            "use strict";
            s.d(t, { c: () => h, h: () => m });
            var r = s(552322),
                n = s(687521),
                a = s(983706),
                l = s(347725),
                i = s(447742),
                o = s(202784),
                c = s(332161);
            const d = l.S.spriteSheetColumns,
                u = l.S.spriteSheetRows,
                h = ({ emoji: e }) => {
                    const t = l.S.emojis[e]?.k[0] || 0,
                        s = l.S.emojis[e]?.k[1] || 0,
                        n = `-${t * (1200 / d)}px -${s * (1728 / u)}px`;
                    return (0, r.jsx)("div", { style: { width: "24px", height: "24px", backgroundImage: "url(https://abs.twimg.com/responsive-web/client-web/twemoji_sprite.5e8ec19a.png)", backgroundPosition: n, backgroundRepeat: "no-repeat" } });
                },
                x = ({ item: e, index: t, onReactionClicked: s }) => (0, r.jsxs)("div", { className: "mb-4", id: `Emoji-${t}`, children: [(0, r.jsx)(c.x, { size: "body", weight: "bold", className: "mb-2", children: e.name }), (0, r.jsx)("div", { className: "grid grid-cols-8 gap-2", children: e.emojis.map((e) => (0, r.jsx)("button", { className: "flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded", onClick: () => s(e), type: "button", children: (0, r.jsx)(h, { emoji: e }) }, `${e}`)) })] }),
                m = ({ onReactionClicked: e, recentlyUsedEmojis: t = [] }) => {
                    const [s, d] = (0, o.useState)(""),
                        u = (0, o.useMemo)(() => {
                            if (!s) return l.S.categories;
                            const e = s.toLowerCase();
                            return l.S.categories
                                .map((t) => {
                                    const s = t.emojis.filter((t) => {
                                        const s = l.S.emojis[t];
                                        return s?.j.some((t) => t.toLowerCase().includes(e));
                                    });
                                    return { ...t, emojis: s };
                                })
                                .filter((e) => e.emojis.length > 0);
                        }, [s]);
                    return (0, r.jsxs)("div", { className: "h-100 w-80 p-4 border border-gray-100 rounded-2xl", children: [(0, r.jsx)("div", { className: "py-2", children: (0, r.jsx)(n._, { autoFocus: !0, placeholder: "Search", value: s, onChange: (e) => d(e.target.value), borderRadius: "xLarge", className: "bg-gray-0 focus-within:bg-transparent", inputClassName: "placeholder:text-gray-700", leftContent: (0, r.jsx)(i.Z, { className: "h-5 w-5 text-gray-700" }) }) }), (0, r.jsx)(a.T, { items: u, renderItem: (n, a) => (0, r.jsxs)(r.Fragment, { children: [0 === a && t.length > 0 && "" === s && (0, r.jsxs)("div", { className: "mb-4", children: [(0, r.jsx)(c.x, { size: "body", weight: "bold", className: "mb-2", children: "Recently Used" }), (0, r.jsx)("div", { className: "grid grid-cols-8 gap-2", children: t.map((t) => (0, r.jsx)("button", { className: "flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded", onClick: () => e(t), type: "button", children: (0, r.jsx)(h, { emoji: t }) }, `${t}-recent`)) })] }), (0, r.jsx)(x, { item: n, index: a, onReactionClicked: e })] }), className: "!h-80 scrollbar-thin-custom" })] });
                };
        },
        789764: (e, t, s) => {
            "use strict";
            s.d(t, { o: () => a });
            var r = s(552322),
                n = s(378364);
            function a({ size: e = "medium", spacing: t = 12, urls: s, resolution: a, stackOrder: l = "descending" }) {
                const i = (function (e, t) {
                    if ("ascending" === t) return e.map((e, t) => ({ index: t, scale: "scale-75" }));
                    if ("descending" === t) return e.map((t, s) => ({ index: e.length - s, scale: "scale-75" }));
                    const s = Math.floor(e.length / 2);
                    return e.map((t, r) => {
                        if (r === s) return { index: e.length, scale: "scale-100" };
                        const n = Math.abs(r - s);
                        return { index: e.length - n, scale: "scale-75" };
                    });
                })(s, l);
                return (0, r.jsx)("div", { className: "flex", style: { marginInlineStart: `${t}px` }, children: s.map((s, l) => (0, r.jsx)("div", { className: `rounded-full bg-background p-0.5 ${i[l]?.scale}`, style: { marginInlineStart: -1 * t, zIndex: i[l]?.index }, children: (0, r.jsx)(n.q, { size: e, shape: "circle", url: s, resolution: a }) }, `${s}${l}`)) });
            }
        },
        472275: (e, t, s) => {
            "use strict";
            s.d(t, { e: () => o });
            var r = s(552322),
                n = s(666200),
                a = s(52053),
                l = s(34681),
                i = s(202784);
            function o({ mediaItems: e, initialIndex: t = 0, isOpen: s, onClose: o }) {
                const [c, d] = (0, i.useState)(t);
                (0, i.useEffect)(() => {
                    d(t);
                }, [t]);
                const u = e[c],
                    h = (e) => {
                        e.target === e.currentTarget && o();
                    };
                return s && u
                    ? (0, r.jsx)(l.Vq, {
                          open: s,
                          onOpenChange: o,
                          children: (0, r.jsxs)(l.PK, {
                              children: [
                                  (0, r.jsx)(l.t9, { className: "fixed inset-0 bg-black/50 z-50" }),
                                  (0, r.jsxs)(l.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: h,
                                      children: [
                                          (0, r.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: h, children: "animated_gif" === u.type ? (0, r.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, r.jsx)("video", { src: u.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: u.previewImage }) }) : (0, r.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: (0, r.jsx)("img", { src: u.src, alt: "", className: "w-full h-full object-cover max-h-[inherit] select-none" }) }) }),
                                          e.length > 1 &&
                                              (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, r.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, r.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          c > 0 &&
                                                                          (0, r.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t > 0 ? t - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "previous",
                                                                              children: (0, r.jsx)(n.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, r.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          c < e.length - 1 &&
                                                                          (0, r.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (t) => {
                                                                                  t.preventDefault(), t.stopPropagation(), d((t) => (t < e.length - 1 ? t + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "next",
                                                                              children: (0, r.jsx)(a.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, r.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [c + 1, " / ", e.length] }),
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
            s.d(t, { s: () => l });
            var r = s(552322),
                n = s(840489),
                a = s(533131);
            function l({ variant: e = "normal", ...t }) {
                return (0, r.jsx)(a.ZA, { className: "z-40 bg-mask fixed bottom-0 end-0 start-0 top-0 flex h-full w-full items-center justify-center", ...t, children: (0, r.jsx)(a.u_, { ...t, className: (0, n.Z)("bg-background max-h-full overflow-y-auto rounded-xl", "small" === e && "max-w-[32rem]", "normal" === e && "max-w-[60rem]") }) });
            }
        },
        423011: (e, t, s) => {
            "use strict";
            s.d(t, { x: () => a });
            var r = s(552322),
                n = s(332161);
            const a = ({ leftContent: e, rightContent: t, title: s, subtitle: a }) => (0, r.jsxs)("div", { className: "flex flex-row justify-between  p-2 py-4", children: [(0, r.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [e, (0, r.jsxs)("div", { className: "flex flex-col", children: [(0, r.jsx)(n.x, { size: "headline1", weight: "extrabold", children: s }), a && (0, r.jsx)(n.x, { color: "gray700", children: a })] })] }), t] });
        },
        480158: (e, t, s) => {
            "use strict";
            s.d(t, { h: () => d });
            var r = s(552322),
                n = s(305399),
                a = s(110929),
                l = s(194787);
            const i = (0, a.j)("bg-background h-fit fixed bottom-0 left-0 right-0 outline-none", { variants: { borderRadius: { "2xLarge": "rounded-t-2xl", "3xLarge": "rounded-t-3xl", full: "rounded-t-full", large: "rounded-t-lg", medium: "rounded-t-md", none: "rounded-t-none", small: "rounded-t-sm", xLarge: "rounded-t-xl", true: "rounded-t" } } });
            function o({ borderRadius: e = "medium", children: t, className: s, title: n, trigger: a, withHandle: o, ...c }) {
                return (0, r.jsxs)(l.dy.Root, { ...c, children: [(0, r.jsx)(l.dy.Trigger, { asChild: !0, children: a }), (0, r.jsxs)(l.dy.Portal, { children: [(0, r.jsx)(l.dy.Overlay, { className: "fixed inset-0 bg-black/40" }), (0, r.jsxs)(l.dy.Content, { className: i({ borderRadius: e, className: s }), children: [o && (0, r.jsx)(l.dy.Handle, { className: "my-2" }), n && (0, r.jsx)(l.dy.Title, { children: n }), t] })] })] });
            }
            var c = s(437712);
            function d({ children: e, open: t, onOpenChange: s, trigger: a, borderRadius: l }) {
                return (0, n.a)("(min-width: 768px)") ? (0, r.jsx)(c.J, { open: t, onOpenChange: s, trigger: a, withArrow: !0, borderRadius: l, children: e }) : (0, r.jsx)(o, { open: t, onOpenChange: s, trigger: a, children: e });
            }
        },
        261012: (e, t, s) => {
            "use strict";
            s.d(t, { r: () => i });
            var r = s(552322),
                n = s(199237),
                a = s(202784),
                l = s(31674);
            const i = (0, a.forwardRef)(function ({ className: e, size: t = "medium", thumbClassName: s, ...a }, i) {
                return (0, r.jsx)(n.fC, { className: (0, l.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === t ? "h-3 w-10" : "h-2 w-6", e), ...a, ref: i, children: (0, r.jsx)(n.bU, { className: (0, l.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === t ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", s) }) });
            });
        },
        597322: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => b });
            s(136728);
            var r = s(202784),
                n = s(176453),
                a = s(325686),
                l = s(107267),
                i = s(67369),
                o = s(392237),
                c = s(545457),
                d = s(857378),
                u = s(252021),
                h = s(234622),
                x = (s(536188), s(125363)),
                m = s(390387),
                g = s(809329);
            const p = o.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                b = (e) => {
                    const t = (0, i.yu)(),
                        s = (0, l.useHistory)(),
                        { id: o, token: b } = (0, l.useParams)(),
                        f = t ? d.h$ : 0;
                    (o && b) || s.push("/i/chat"), (0, c.MQ)();
                    const j = (0, x.v9)(m.Lz);
                    return r.createElement(h.i, null, r.createElement(u.Z, { history: s, isFullWidth: !0, primaryContent: () => (j ? r.createElement(g.x, null) : r.createElement(a.Z, { style: p.root }, r.createElement(n.N, { groupId: o, settings: { path: "/i/chat", bottomBarHeight: f }, token: b }))), sidebarContent: null }));
                };
        },
        809329: (e, t, s) => {
            "use strict";
            s.d(t, { x: () => u });
            var r = s(202784),
                n = s(325686),
                a = s(420740),
                l = s(392237),
                i = s(111677),
                o = s.n(i);
            const c = o().h7e1c146,
                d = o().ha8209bc;
            function u() {
                return r.createElement(n.Z, { style: h.root }, r.createElement(a.Z, { buttonLink: { pathname: "/home" }, retryLabel: d, title: c }));
            }
            const h = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 } }));
        },
        647665: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => b });
            var r = s(202784),
                n = s(850697),
                a = s(325686),
                l = s(107267),
                i = s(67369),
                o = s(392237),
                c = s(545457),
                d = s(857378),
                u = s(252021),
                h = s(234622),
                x = (s(470201), s(125363)),
                m = s(390387),
                g = s(809329);
            const p = o.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                b = (e) => {
                    const t = (0, i.yu)(),
                        s = (0, l.useHistory)(),
                        { xChatPinMode: o } = (0, l.useParams)(),
                        b = t ? d.h$ : 0;
                    (0, c.MQ)();
                    const f = (0, x.v9)(m.Lz);
                    return r.createElement(h.i, null, r.createElement(u.Z, { history: s, isFullWidth: !0, primaryContent: () => (f ? r.createElement(g.x, null) : r.createElement(a.Z, { style: p.root }, r.createElement(n.x, { mode: o ?? "new", settings: { path: "/i/chat", bottomBarHeight: b } }))), sidebarContent: null }));
                };
        },
        476644: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => v });
            var r = s(202784),
                n = s(700931),
                a = s(264531),
                l = s(325686),
                i = s(107267),
                o = s(67369),
                c = s(392237),
                d = s(545457),
                u = s(857378),
                h = s(252021),
                x = s(234622),
                m = (s(434882), s(134760)),
                g = s(952793),
                p = s(125363),
                b = s(390387),
                f = s(809329);
            const j = c.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                v = (e) => {
                    const t = (0, i.useHistory)(),
                        s = (0, i.useLocation)(),
                        c = (0, g.hC)("rweb_xchat_debug_enabled"),
                        v = (0, o.yu)(),
                        y = "/i/chat/" === s.pathname || "/i/chat" === s.pathname,
                        w = !y,
                        k = v && !w ? u.h$ : 0,
                        N = (0, g.hC)("rweb_xchat_logs"),
                        C = (0, g.hC)("rweb_xchat_new_db_worker_enabled");
                    (0, d.MQ)();
                    const z = (0, p.v9)(b.Lz);
                    return r.createElement(x.i, null, r.createElement(h.Z, { headerless: v && w, history: t, isFullWidth: !0, primaryContent: () => (z ? r.createElement(f.x, null) : r.createElement(l.Z, { style: j.root }, r.createElement(n.H, { settings: { path: "/i/chat", showDebugOptions: c, bottomBarHeight: k, logLevel: N ? a.B$.INFO : a.B$.WARN, newDBWorker: C, rwebElements: { dashMenuButton: v && y ? r.createElement(m.Z, null) : void 0 } } }))), sidebarContent: null, withTopNav: !1 }));
                };
        },
        115290: (e, t, s) => {
            var r = s(482609),
                n = s(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        278003: (e, t, s) => {
            var r = s(482609),
                n = s(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        606299: (e, t, s) => {
            var r = s(482609),
                n = s(274380);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        536188: (e, t, s) => {
            var r = s(46062),
                n = s(115290);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            r(n, a);
            e.exports = n.locals || {};
        },
        470201: (e, t, s) => {
            var r = s(46062),
                n = s(278003);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            r(n, a);
            e.exports = n.locals || {};
        },
        434882: (e, t, s) => {
            var r = s(46062),
                n = s(606299);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var a = { insert: "head", singleton: !1 };
            r(n, a);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e96e9bea.b3374baa.js.map
