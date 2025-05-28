"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-07ecdc0a"],
    {
        902958: (e, s, t) => {
            t.d(s, { e: () => Q });
            var a = t(552322),
                r = t(436059),
                l = t(941204),
                i = t(202784),
                n = t(969088),
                o = t(816778),
                c = t(323788),
                d = t(33340),
                x = t(700009),
                m = t(26429),
                h = t(130844),
                u = t(703612),
                f = t(862399),
                p = t(666200),
                g = t(52053),
                j = t(553453),
                v = t(561677),
                b = t(671026),
                w = t(995348),
                N = t(909361),
                y = t(377446),
                k = t(840489),
                C = t(430962),
                R = t(598705),
                Z = t(164695),
                z = t(697597),
                I = t(530361);
            function L(e) {
                return Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(e);
            }
            function P({ children: e, maxHeightClass: s = "max-h-[4em]" }) {
                const t = (0, i.useRef)(null),
                    [r, l] = (0, i.useState)(!1);
                return (
                    (0, i.useEffect)(() => {
                        const e = () => {
                            if (t.current) {
                                const e = t.current.scrollHeight > t.current.clientHeight;
                                l(e);
                            }
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
                    }, []),
                    (0, a.jsxs)("div", { className: `${s} break-words overflow-hidden relative`, ref: t, children: [e, r && (0, a.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none" })] })
                );
            }
            function V({ mediaItems: e }) {
                const [s, t] = (0, i.useState)(!1),
                    [r, l] = (0, i.useState)(0),
                    n = (e, s) => (e.preventDefault(), e.stopPropagation(), l(s), t(!0), !1);
                if (!e || 0 === e.length) return null;
                if (1 === e.length) {
                    const i = e[0];
                    return i
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: "border border-gray-200 rounded-xl overflow-hidden cursor-pointer w-full h-auto max-h-auto aspect-video",
                                      onClick: (e) => {
                                          e.preventDefault(), e.stopPropagation(), n(e, 0);
                                      },
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onTouchStart: (e) => e.stopPropagation(),
                                      children: (0, a.jsx)(S, { mediaItem: i, gridItem: !1 }),
                                  }),
                                  (0, a.jsx)($, {
                                      mediaItems: e,
                                      initialIndex: r,
                                      isOpen: s,
                                      onClose: () => {
                                          t(!1), l(0);
                                      },
                                  }),
                              ],
                          })
                        : null;
                }
                const o = e.slice(0, 4),
                    c = 3 === o.length,
                    d = o.length <= 2 ? 1 : 2,
                    x = (e) => {
                        const s = "lg";
                        if (2 === o.length) return 0 === e ? `rounded-l-${s}` : `rounded-r-${s}`;
                        if (c) {
                            if (0 === e) return `rounded-l-${s}`;
                            if (1 === e) return `rounded-tr-${s}`;
                            if (2 === e) return `rounded-br-${s}`;
                        }
                        if (4 === o.length) {
                            if (0 === e) return `rounded-tl-${s}`;
                            if (1 === e) return `rounded-tr-${s}`;
                            if (2 === e) return `rounded-bl-${s}`;
                            if (3 === e) return `rounded-br-${s}`;
                        }
                        return "";
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: "grid gap-0.5 border border-gray-200 overflow-hidden w-[120px] h-[68px] flex-shrink-0 rounded-lg",
                            style: { padding: 0, gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: c ? "1fr 1fr" : `repeat(${d}, 1fr)`, aspectRatio: "16/9" },
                            children: o.map((e, s) =>
                                (0, a.jsx)(
                                    "div",
                                    {
                                        className: "w-full h-full overflow-hidden cursor-pointer",
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), n(e, s);
                                        },
                                        onMouseDown: (e) => e.stopPropagation(),
                                        onTouchStart: (e) => e.stopPropagation(),
                                        style: { ...(c && 0 === s ? { gridRow: "span 2" } : void 0) },
                                        children: (0, a.jsx)(S, { mediaItem: e, gridItem: !0, cornerClass: x(s) }),
                                    },
                                    `media-${e.url}-${s}`,
                                ),
                            ),
                        }),
                        (0, a.jsx)($, {
                            mediaItems: e,
                            initialIndex: r,
                            isOpen: s,
                            onClose: () => {
                                t(!1), l(0);
                            },
                        }),
                    ],
                });
            }
            function $({ mediaItems: e, initialIndex: s = 0, isOpen: t, onClose: r }) {
                const [l, n] = (0, i.useState)(s),
                    { analytics: o } = (0, C.M1)();
                (0, i.useEffect)(() => {
                    n(s);
                }, [s]);
                const c = e[l],
                    d = (e) => {
                        e.target === e.currentTarget && r();
                    };
                return t && c
                    ? (0, a.jsx)(Z.Vq, {
                          open: t,
                          onOpenChange: r,
                          children: (0, a.jsxs)(Z.PK, {
                              children: [
                                  (0, a.jsx)(Z.t9, { className: "fixed inset-0 bg-black/80 z-50" }),
                                  (0, a.jsxs)(Z.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: d,
                                      children: [
                                          (0, a.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: d, children: "video" === c.type ? (0, a.jsx)("div", { className: "relative w-full h-auto max-w-[800px] max-h-[80vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("div", { className: "w-full h-full aspect-video", children: (0, a.jsx)(z.q, { src: c.variants?.[0]?.url || c.url, poster: c.previewImage, type: c.variants?.[0]?.contentType || "video/mp4" }) }) }) : "animated_gif" === c.type ? (0, a.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("video", { src: c.url, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: c.previewImage }) }) : (0, a.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("img", { src: c.url, alt: "", className: "max-w-full max-h-full object-contain" }) }) }),
                                          e.length > 1 &&
                                              (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, a.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, a.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          l > 0 &&
                                                                          (0, a.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (s) => {
                                                                                  s.preventDefault(), s.stopPropagation(), n((s) => (s > 0 ? s - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": o.previous,
                                                                              children: (0, a.jsx)(p.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, a.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          l < e.length - 1 &&
                                                                          (0, a.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (s) => {
                                                                                  s.preventDefault(), s.stopPropagation(), n((s) => (s < e.length - 1 ? s + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": o.next,
                                                                              children: (0, a.jsx)(g.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [l + 1, " / ", e.length] }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
            function S({ mediaItem: e, gridItem: s = !1, cornerClass: t }) {
                const { analytics: r } = (0, C.M1)();
                if (!e) return null;
                const l = "video" === e.type,
                    i = "animated_gif" === e.type;
                return (0, a.jsxs)("div", { className: (0, k.W)("relative overflow-hidden", s ? (0, k.W)("w-full h-full", t) : "w-[120px] h-[68px] flex-shrink-0 aspect-[16/9]"), children: [(0, a.jsx)("img", { src: e.previewImage || "/placeholder.svg", alt: l ? r.videoThumbnail : i ? r.gifLabel : r.imageLabel, className: (0, k.W)("w-full h-full object-cover") }), (l || i) && (0, a.jsx)("div", { className: "absolute inset-0 flex items-end justify-start", children: l && e.duration && (0, a.jsx)("div", { className: "text-white text-[6px] mb-2 ml-2 px-1 py-0.5 scale-[0.9] origin-bottom-left rounded", style: { backgroundColor: "rgba(0, 0, 0, 0.7)" }, children: (0, R.LU)(e.duration) }) })] });
            }
            function _({ metrics: e, small: s = !1 }) {
                return e ? (0, a.jsxs)("div", { className: "flex items-center justify-between px-1 mr-9", children: [(0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(j.Z, { className: (0, k.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, k.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, R.uf)(e.replies) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(v.Z, { className: (0, k.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, k.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, R.uf)(e.reposts) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(b.Z, { className: (0, k.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, k.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, R.uf)(e.likes) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(w.Z, { className: (0, k.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, k.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, R.uf)(e.impressions) })] })] }) : null;
            }
            function T() {
                const { formattedPost: e, postData: s } = (0, n.dQ)(),
                    [t, r] = (0, i.useState)(!1),
                    o = e,
                    c = s?.parentPost;
                if (!o) return null;
                const d = (e) => {
                        e.stopPropagation(), r(!0);
                    },
                    x = c?.publicMetrics;
                return (0, a.jsx)("div", {
                    className: "px-4 pt-2 pb-1 rounded-xl border border-gray-200 max-[988px]:pb-3",
                    children: c
                        ? (0, a.jsxs)("div", {
                              className: "grid gap-x-3",
                              style: { gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto auto auto auto auto", alignItems: "start" },
                              children: [
                                  (0, a.jsx)("div", { style: { gridRow: 1, gridColumn: 1 }, className: "flex justify-center", children: (0, a.jsx)(m.q, { url: c.author.profileImageUrl, size: t ? "large" : "small", screenName: c.author.screenName, withLink: "external" }) }),
                                  (0, a.jsx)("div", {
                                      style: { gridRow: "1 / 3", gridColumn: 2 },
                                      children: t
                                          ? (0, a.jsxs)("div", {
                                                className: "rounded-lg transition-colors relative",
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: "absolute top-0 right-0 rounded-full hover:bg-gray-200 transition-colors z-10 select-none",
                                                        onClick: (e) => {
                                                            e.stopPropagation(), r(!1);
                                                        },
                                                        children: (0, a.jsx)(y.Z, { className: "w-4 h-4 text-gray-500" }),
                                                    }),
                                                    (0, a.jsx)(h.r, { href: `https://x.com/${c.author.screenName}/status/${c.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: (0, a.jsxs)("div", { className: "overflow-hidden", children: [(0, a.jsx)("div", { className: "flex items-start flex-nowrap", children: (0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden mb-0.5", children: (0, a.jsx)(u.R, { name: c.author.name, size: "subtext1", withLink: "external", badges: c.author.badges }) }) }), (0, a.jsx)(P, { children: (0, a.jsx)(l.x, { size: "subtext2", children: (0, f.W)({ text: (0, I.decode)(c.text), size: "subtext2", displayTextRange: c.display_text_range, numberOfLines: 3 }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[3px]", children: (0, a.jsx)(_, { metrics: x, small: !0 }) })] }) }),
                                                ],
                                            })
                                          : (0, a.jsxs)("div", { className: "flex items-start gap-2 pb-2 rounded-lg cursor-pointer transition-colors relative", onClick: d, children: [(0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(j.Z, { className: "w-4 h-4 text-gray-500" }) }), (0, a.jsxs)(l.x, { size: "subtext2", className: "text-gray-500", children: ["You replied to ", c.author.screenName] }), (0, a.jsx)("div", { className: "absolute top-0 right-0 rounded-full hover:bg-gray-200 transition-colors z-10 select-none", onClick: d, children: (0, a.jsx)(N.Z, { className: "w-4 h-4 text-gray-500" }) })] }),
                                  }),
                                  (0, a.jsx)("div", { style: { gridRow: "2 / 4", gridColumn: 1, position: "relative", height: "100%" }, className: "flex justify-center", children: t && (0, a.jsx)("div", { className: "absolute w-[2px] bg-gray-200", style: { top: "4px", bottom: "4px", left: "50%", transform: "translateX(-50%)" } }) }),
                                  (0, a.jsx)("div", { style: { gridRow: 3, gridColumn: 2 }, className: (0, k.W)(t && "h-3") }),
                                  (0, a.jsx)("div", { style: { gridRow: 4, gridColumn: 1 }, className: "flex justify-center", children: (0, a.jsx)(m.q, { screenName: o.author.screenName, size: "large", url: o.author.profileImageUrl, withLink: "external" }) }),
                                  (0, a.jsx)("div", { style: { gridRow: "4 / 6", gridColumn: 2 }, children: (0, a.jsxs)(h.r, { href: `https://x.com/${o.author.screenName}/status/${o.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: [(0, a.jsxs)("div", { className: "flex items-start flex-nowrap", children: [(0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, a.jsx)(u.R, { badges: o.author.badges, name: o.author.name, size: "body", withLink: "external" }) }), o.createdAt && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "h-0.5 w-0.5 rounded-full bg-gray-700 mx-1 flex-shrink-0 flex items-center self-center" }), (0, a.jsx)("div", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: L(o.createdAt) })] })] }), (0, a.jsx)("div", { className: "mb-0.5", children: o.media && o.media.length > 0 ? (0, a.jsxs)("div", { className: "flex gap-4 mt-1", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsx)(V, { mediaItems: o.media }) }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(P, { children: (0, a.jsx)(f.W, { text: (0, I.decode)(o.text), numberOfLines: 3, size: "subtext1", displayTextRange: o.display_text_range }) }) })] }) : (0, a.jsx)("div", { children: (0, a.jsx)(P, { children: (0, a.jsx)(f.W, { text: (0, I.decode)(o.text), numberOfLines: 3, size: "subtext1", displayTextRange: o.display_text_range }) }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[6px] mb-[0.5]", children: (0, a.jsx)(_, { metrics: o.publicMetrics }) })] }) }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: "grid gap-x-3",
                              style: { gridTemplateColumns: "auto 1fr" },
                              children: [
                                  (0, a.jsx)("div", { className: "flex justify-center", children: (0, a.jsx)(m.q, { screenName: o.author.screenName, size: "large", url: o.author.profileImageUrl, withLink: "external" }) }),
                                  (0, a.jsx)(h.r, { href: `https://x.com/${o.author.screenName}/status/${o.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: (0, a.jsxs)("div", { children: [(0, a.jsxs)("div", { className: "flex items-start flex-nowrap mb-0.5", children: [(0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, a.jsx)(u.R, { badges: o.author.badges, name: o.author.name, size: "body", withLink: "external" }) }), o.createdAt && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "h-0.5 w-0.5 rounded-full bg-gray-700 mx-1 flex-shrink-0 flex items-center self-center" }), (0, a.jsx)("div", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: L(o.createdAt) })] })] }), (0, a.jsx)("div", { className: "mb-0.5", children: o.media && o.media.length > 0 ? (0, a.jsxs)("div", { className: "flex gap-4 mt-1", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsx)(V, { mediaItems: o.media }) }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(P, { children: (0, a.jsx)(f.W, { text: (0, I.decode)(o.text), numberOfLines: 3, size: "subtext1", displayTextRange: o.display_text_range }) }) })] }) : (0, a.jsx)("div", { children: (0, a.jsx)(P, { children: (0, a.jsx)(f.W, { text: (0, I.decode)(o.text), numberOfLines: 3, size: "subtext1", displayTextRange: o.display_text_range }) }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[6px] mb-[0.5]", children: (0, a.jsx)(_, { metrics: o.publicMetrics }) })] }) }),
                              ],
                          }),
                });
            }
            var W = t(86781),
                K = t(991732);
            function M({ stats: e }) {
                const s = (0, K.T)();
                return (0, a.jsx)("div", {
                    className: (0, k.Z)("grid grid-cols-5", "px-4 gap-2 min-[988px]:gap-4 min-[988px]:grid-rows-2 min-[988px]:border-l min-[988px]:border-gray-200 min-[988px]:pl-8 min-[988px]:h-fit"),
                    children: e.slice(0, 10).map((e, t) => {
                        const { label: r, info: l } = s[e.metricKey] || { label: e.metricKey, info: `Details about ${e.metricKey}` };
                        return (0, a.jsxs)(
                            "div",
                            { className: (0, k.Z)("flex flex-col items-start", t < 5 && "mb-3 min-[988px]:mb-0"), children: [(0, a.jsx)("div", { className: "min-[988px]:hidden w-full", children: (0, a.jsxs)(Z.Vq, { children: [(0, a.jsx)(Z.hg, { className: "w-full", children: (0, a.jsx)("div", { className: "cursor-pointer", children: (0, a.jsxs)("div", { className: "flex flex-row items-center mb-1 gap-1", children: [(0, a.jsx)("div", { className: "flex items-center justify-center w-4 h-4", children: e.icon }), (0, a.jsx)("p", { className: "font-semibold leading-tight text-[11px]", children: e.value })] }) }) }), (0, a.jsxs)(Z.cZ, { className: "max-sm:max-w-[calc(100vw-2rem)] rounded-xl", children: [(0, a.jsxs)(Z.fK, { children: [(0, a.jsx)(Z.$N, { tabIndex: 0, children: r }), (0, a.jsx)(Z.Be, { className: "text-start", children: l })] }), (0, a.jsx)("div", { className: "text-headline2 text-text flex items-baseline gap-2 pt-4 font-bold", children: "number" == typeof e.rawValue ? e.rawValue.toLocaleString() : e.rawValue })] })] }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block", children: (0, a.jsx)(W.J, { trigger: (0, a.jsxs)("div", { className: "cursor-pointer", children: [(0, a.jsxs)("div", { className: "flex flex-row items-center mb-1 gap-2", children: [(0, a.jsx)("div", { className: "flex items-center justify-center w-5 h-5", children: e.icon }), (0, a.jsx)("p", { className: "font-semibold leading-tight text-subtext2", children: e.value })] }), (0, a.jsx)("p", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: r })] }), children: (0, a.jsxs)("div", { className: "p-3 w-64 space-y-2 border border-border rounded-lg", children: [(0, a.jsx)("h4", { className: "font-medium", children: r }), (0, a.jsx)("p", { className: "text-muted-foreground", children: l }), (0, a.jsx)("div", { className: "font-semibold", children: "number" == typeof e.rawValue ? e.rawValue.toLocaleString() : e.rawValue })] }) }) })] },
                            `stat-${e.metricKey}-${t}`,
                        );
                    }),
                });
            }
            var F = t(650185),
                U = t(751254),
                D = t(241101),
                O = t(685902),
                q = t(298163),
                A = t(981626),
                E = t(458872),
                B = t(968025);
            function Q({ restId: e, referrerUrl: s, contentPageUrl: t = "/analytics/content", showFollowersChart: r = !1, showRealtimeChart: l = !1 }) {
                return (0, a.jsx)(n.R4, { restId: e, showRealtimeChart: l, children: (0, a.jsx)(H, { referrerUrl: s, contentPageUrl: t, showFollowersChart: r }) });
            }
            function H({ referrerUrl: e, contentPageUrl: s, showFollowersChart: t }) {
                const { postData: m, metrics: h } = (0, n.dQ)(),
                    [u, f] = (0, i.useState)("overview"),
                    p = (0, B.t)(),
                    { analytics: g } = (0, C.M1)(),
                    { overviewSelectedMetric: N, setOverviewSelectedMetric: y, audienceSelectedMetric: k, setAudienceSelectedMetric: Z } = (0, n.dQ)(),
                    z = (0, i.useMemo)(() => m?.media && m.media.length > 0, [m]),
                    I = (0, i.useMemo)(() => {
                        if (!h) return [];
                        return [
                            { icon: (0, a.jsx)(w.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Impressions", value: (0, R.uf)(h.impressions), rawValue: h.impressions },
                            { icon: (0, a.jsx)(b.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Likes", value: (0, R.uf)(h.likes), rawValue: h.likes },
                            { icon: (0, a.jsx)(j.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Replies", value: (0, R.uf)(h.replies), rawValue: h.replies },
                            { icon: (0, a.jsx)(v.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Retweets", value: (0, R.uf)(h.retweets), rawValue: h.retweets },
                            { icon: (0, a.jsx)(F.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "EngagementRate", value: h.formattedEngagementRate, rawValue: h.formattedEngagementRate },
                            { icon: (0, a.jsx)(U.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "ProfileVisits", value: (0, R.uf)(h.profileVisits), rawValue: h.profileVisits },
                            { icon: (0, a.jsx)(D.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Follows", value: (0, R.uf)(h.follows), rawValue: h.follows },
                            { icon: (0, a.jsx)(O.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Bookmark", value: (0, R.uf)(h.bookmarks), rawValue: h.bookmarks },
                            { icon: (0, a.jsx)(q.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Share", value: (0, R.uf)(h.share), rawValue: h.share },
                            { icon: (0, a.jsx)(A.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "MediaViews", value: z ? (0, R.uf)(h.mediaViews) : "-", rawValue: z ? h.mediaViews : 0 },
                        ];
                    }, [h, z]),
                    L = (0, i.useMemo)(
                        () => [
                            { value: "Impressions", label: g.ImpressionsLabel, icon: w.Z },
                            { value: "Likes", label: g.LikesLabel, icon: b.Z },
                            { value: "Replies", label: g.RepliesLabel, icon: j.Z },
                            { value: "Retweets", label: g.RetweetsLabel, icon: v.Z },
                            { value: "Bookmark", label: g.BookmarkLabel, icon: O.Z },
                            { value: "Share", label: g.ShareLabel, icon: q.Z },
                            { value: "ProfileVisits", label: g.ProfileVisitsLabel, icon: U.Z },
                            { value: "Follows", label: g.FollowsLabel, icon: D.Z },
                        ],
                        [g],
                    );
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 p-4",
                    children: [
                        (0, a.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    (0, a.jsx)(r.z, {
                                        icon: (0, a.jsx)(E.Z, {}),
                                        onClick: () => {
                                            p.push(e || s);
                                        },
                                        variant: "primaryText",
                                        "aria-label": g.backToContent,
                                    }),
                                    (0, a.jsx)(l.x, { size: "headline1", weight: "bold", children: g.postAnalytics }),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", { className: "max-[988px]:hidden flex flex-col gap-6", children: [(0, a.jsxs)("div", { className: "flex gap-8", children: [(0, a.jsx)("div", { className: "flex-1 max-w-[50%]", children: (0, a.jsx)(T, {}) }), h && (0, a.jsx)("div", { className: "w-1/2 flex-shrink-0", children: (0, a.jsx)(M, { stats: I }) })] }), (0, a.jsx)("hr", { className: "border-t border-gray-100" }), (0, a.jsx)(x.q, {}), (0, a.jsx)("hr", { className: "border-t border-gray-100" }), (0, a.jsx)(d.R, { showFollowersChart: t })] }),
                        (0, a.jsxs)("div", {
                            className: "min-[988px]:hidden",
                            children: [
                                (0, a.jsx)("div", { className: "overflow-hidden mb-4", children: (0, a.jsx)(T, {}) }),
                                h && (0, a.jsx)("div", { className: "w-full mb-6", children: (0, a.jsx)(M, { stats: I }) }),
                                (0, a.jsxs)(o.mQ, {
                                    defaultValue: "overview",
                                    value: u,
                                    onValueChange: f,
                                    className: "w-full",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "flex items-center justify-between w-full gap-4",
                                            children: [
                                                (0, a.jsxs)(o.dr, { className: "border-0 bg-transparent p-0 flex w-full border-b border-gray-200 rounded-none", children: [(0, a.jsx)(o.SP, { value: "overview", className: "font-semibold flex-1 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none border-b-2 border-transparent -mb-[2px]", children: g.overview }), (0, a.jsx)(o.SP, { value: "audience", className: "font-semibold flex-1 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none border-b-2 border-transparent -mb-[2px]", children: g.audience })] }),
                                                (0, a.jsx)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: (0, a.jsxs)(c.Ph, {
                                                        value: "overview" === u ? N : k,
                                                        onValueChange: (e) => {
                                                            const s = e;
                                                            y(s), Z(s);
                                                        },
                                                        children: [
                                                            (0, a.jsx)(c.i4, {
                                                                className: "items-center min-w-0 h-8 py-1 px-1 border-none !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none hover:bg-gray-100",
                                                                children: (() => {
                                                                    const e = "overview" === u ? N : k,
                                                                        s = L.find((s) => s.value === e),
                                                                        t = s?.icon || w.Z;
                                                                    return (0, a.jsx)(t, { className: "w-5 h-5 text-gray-900 items-center flex-shrink-0" });
                                                                })(),
                                                            }),
                                                            (0, a.jsx)(c.Bw, {
                                                                children: L.map((e) => {
                                                                    const s = e.icon;
                                                                    return (0, a.jsx)(c.Ql, { value: e.value, children: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)(s, { className: "w-4 h-4 text-gray-700" }), (0, a.jsx)("span", { children: e.label })] }) }, e.value);
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(o.nU, { value: "overview", className: "mt-0", children: (0, a.jsx)(x.q, { hideSelector: !0 }) }),
                                        (0, a.jsx)(o.nU, { value: "audience", className: "mt-0", children: (0, a.jsx)(d.R, { showFollowersChart: t, hideSelector: !0 }) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-07ecdc0a.e7538aca.js.map
