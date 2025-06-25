"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-07ecdc0a"],
    {
        902958: (e, s, t) => {
            t.d(s, { e: () => Q });
            var a = t(552322),
                r = t(995348),
                l = t(671026),
                i = t(553453),
                n = t(561677),
                o = t(650185),
                c = t(751254),
                d = t(241101),
                x = t(685902),
                m = t(298163),
                h = t(981626),
                u = t(458872),
                f = t(993165),
                p = t(332161),
                g = t(713990),
                j = t(476865),
                v = t(905394),
                b = t(202784),
                w = t(430962),
                N = t(969088),
                y = t(598705),
                k = t(33340),
                C = t(700009),
                R = t(6937),
                Z = t(322506),
                z = t(589259),
                I = t(123010),
                L = t(666200),
                P = t(52053),
                V = t(909361),
                $ = t(377446),
                S = t(840489),
                _ = t(34681),
                T = t(17849),
                W = t(530361);
            function K(e) {
                return Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(e);
            }
            function M({ children: e, maxHeightClass: s = "max-h-[4em]" }) {
                const t = (0, b.useRef)(null),
                    [r, l] = (0, b.useState)(!1);
                return (
                    (0, b.useEffect)(() => {
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
            function F({ mediaItems: e }) {
                const [s, t] = (0, b.useState)(!1),
                    [r, l] = (0, b.useState)(0),
                    i = (e, s) => (e.preventDefault(), e.stopPropagation(), l(s), t(!0), !1);
                if (!e || 0 === e.length) return null;
                if (1 === e.length) {
                    const n = e[0];
                    return n
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: "border border-gray-200 rounded-xl overflow-hidden cursor-pointer w-full h-auto max-h-auto aspect-video",
                                      onClick: (e) => {
                                          e.preventDefault(), e.stopPropagation(), i(e, 0);
                                      },
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onTouchStart: (e) => e.stopPropagation(),
                                      children: (0, a.jsx)(D, { mediaItem: n, gridItem: !1 }),
                                  }),
                                  (0, a.jsx)(U, {
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
                const n = e.slice(0, 4),
                    o = 3 === n.length,
                    c = n.length <= 2 ? 1 : 2,
                    d = (e) => {
                        const s = "lg";
                        if (2 === n.length) return 0 === e ? `rounded-l-${s}` : `rounded-r-${s}`;
                        if (o) {
                            if (0 === e) return `rounded-l-${s}`;
                            if (1 === e) return `rounded-tr-${s}`;
                            if (2 === e) return `rounded-br-${s}`;
                        }
                        if (4 === n.length) {
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
                            style: { padding: 0, gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: o ? "1fr 1fr" : `repeat(${c}, 1fr)`, aspectRatio: "16/9" },
                            children: n.map((e, s) =>
                                (0, a.jsx)(
                                    "div",
                                    {
                                        className: "w-full h-full overflow-hidden cursor-pointer",
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), i(e, s);
                                        },
                                        onMouseDown: (e) => e.stopPropagation(),
                                        onTouchStart: (e) => e.stopPropagation(),
                                        style: { ...(o && 0 === s ? { gridRow: "span 2" } : void 0) },
                                        children: (0, a.jsx)(D, { mediaItem: e, gridItem: !0, cornerClass: d(s) }),
                                    },
                                    `media-${e.url}-${s}`,
                                ),
                            ),
                        }),
                        (0, a.jsx)(U, {
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
            function U({ mediaItems: e, initialIndex: s = 0, isOpen: t, onClose: r }) {
                const [l, i] = (0, b.useState)(s),
                    { analytics: n } = (0, w.M1)();
                (0, b.useEffect)(() => {
                    i(s);
                }, [s]);
                const o = e[l],
                    c = (e) => {
                        e.target === e.currentTarget && r();
                    };
                return t && o
                    ? (0, a.jsx)(_.Vq, {
                          open: t,
                          onOpenChange: r,
                          children: (0, a.jsxs)(_.PK, {
                              children: [
                                  (0, a.jsx)(_.t9, { className: "fixed inset-0 bg-black/80 z-50" }),
                                  (0, a.jsxs)(_.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: c,
                                      children: [
                                          (0, a.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: c, children: "video" === o.type ? (0, a.jsx)("div", { className: "relative w-full h-auto max-w-[800px] max-h-[80vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("div", { className: "w-full h-full aspect-video", children: (0, a.jsx)(T.q, { src: o.variants?.[0]?.url || o.url, poster: o.previewImage, previewImage: o.variants?.[0]?.contentType || "video/mp4" }) }) }) : "animated_gif" === o.type ? (0, a.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("video", { src: o.url, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: o.previewImage }) }) : (0, a.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, a.jsx)("img", { src: o.url, alt: "", className: "max-w-full max-h-full object-contain" }) }) }),
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
                                                                                  s.preventDefault(), s.stopPropagation(), i((s) => (s > 0 ? s - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": n.previous,
                                                                              children: (0, a.jsx)(L.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, a.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          l < e.length - 1 &&
                                                                          (0, a.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (s) => {
                                                                                  s.preventDefault(), s.stopPropagation(), i((s) => (s < e.length - 1 ? s + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": n.next,
                                                                              children: (0, a.jsx)(P.Z, { className: "w-4 h-4" }),
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
            function D({ mediaItem: e, gridItem: s = !1, cornerClass: t }) {
                const { analytics: r } = (0, w.M1)();
                if (!e) return null;
                const l = "video" === e.type,
                    i = "animated_gif" === e.type;
                return (0, a.jsxs)("div", { className: (0, S.W)("relative overflow-hidden", s ? (0, S.W)("w-full h-full", t) : "w-[120px] h-[68px] flex-shrink-0 aspect-[16/9]"), children: [(0, a.jsx)("img", { src: e.previewImage || "/placeholder.svg", alt: l ? r.videoThumbnail : i ? r.gifLabel : r.imageLabel, className: (0, S.W)("w-full h-full object-cover") }), (l || i) && (0, a.jsx)("div", { className: "absolute inset-0 flex items-end justify-start", children: l && e.duration && (0, a.jsx)("div", { className: "text-white text-[6px] mb-2 ml-2 px-1 py-0.5 scale-[0.9] origin-bottom-left rounded", style: { backgroundColor: "rgba(0, 0, 0, 0.7)" }, children: (0, y.LU)(e.duration) }) })] });
            }
            function O({ metrics: e, small: s = !1 }) {
                return e ? (0, a.jsxs)("div", { className: "flex items-center justify-between px-1 mr-9", children: [(0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(i.Z, { className: (0, S.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, S.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, y.uf)(e.replies) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(n.Z, { className: (0, S.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, S.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, y.uf)(e.reposts) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(l.Z, { className: (0, S.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, S.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, y.uf)(e.likes) })] }), (0, a.jsxs)("div", { className: "flex items-center gap-1 justify-center", children: [(0, a.jsx)(r.Z, { className: (0, S.W)(s ? "size-3" : "size-4", "text-gray-700") }), (0, a.jsx)("span", { className: (0, S.W)("font-semibold text-gray-900", s ? "text-subtext2" : "text-subtext1"), children: (0, y.uf)(e.impressions) })] })] }) : null;
            }
            function q() {
                const { formattedPost: e, postData: s } = (0, N.dQ)(),
                    [t, r] = (0, b.useState)(!1),
                    l = e,
                    n = s?.parentPost;
                if (!l) return null;
                const o = (e) => {
                        e.stopPropagation(), r(!0);
                    },
                    c = n?.publicMetrics;
                return (0, a.jsx)("div", {
                    className: "px-4 pt-2 pb-1 rounded-xl border border-gray-200 max-[988px]:pb-3",
                    children: n
                        ? (0, a.jsxs)("div", {
                              className: "grid gap-x-3",
                              style: { gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto auto auto auto auto", alignItems: "start" },
                              children: [
                                  (0, a.jsx)("div", { style: { gridRow: 1, gridColumn: 1 }, className: "flex justify-center", children: (0, a.jsx)(R.q, { url: n.author.profileImageUrl, size: t ? "large" : "small", screenName: n.author.screenName, withLink: "external" }) }),
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
                                                        children: (0, a.jsx)($.Z, { className: "w-4 h-4 text-gray-500" }),
                                                    }),
                                                    (0, a.jsx)(Z.r, { href: `https://x.com/${n.author.screenName}/status/${n.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: (0, a.jsxs)("div", { className: "overflow-hidden", children: [(0, a.jsx)("div", { className: "flex items-start flex-nowrap", children: (0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden mb-0.5", children: (0, a.jsx)(z.R, { name: n.author.name, size: "subtext1", withLink: "external", badges: n.author.badges }) }) }), (0, a.jsx)(M, { children: (0, a.jsx)(p.x, { size: "subtext2", children: (0, I.W)({ text: (0, W.decode)(n.text), size: "subtext2", displayTextRange: n.display_text_range, numberOfLines: 3 }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[3px]", children: (0, a.jsx)(O, { metrics: c, small: !0 }) })] }) }),
                                                ],
                                            })
                                          : (0, a.jsxs)("div", { className: "flex items-start gap-2 pb-2 rounded-lg cursor-pointer transition-colors relative", onClick: o, children: [(0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(i.Z, { className: "w-4 h-4 text-gray-500" }) }), (0, a.jsxs)(p.x, { size: "subtext2", className: "text-gray-500", children: ["You replied to ", n.author.screenName] }), (0, a.jsx)("div", { className: "absolute top-0 right-0 rounded-full hover:bg-gray-200 transition-colors z-10 select-none", onClick: o, children: (0, a.jsx)(V.Z, { className: "w-4 h-4 text-gray-500" }) })] }),
                                  }),
                                  (0, a.jsx)("div", { style: { gridRow: "2 / 4", gridColumn: 1, position: "relative", height: "100%" }, className: "flex justify-center", children: t && (0, a.jsx)("div", { className: "absolute w-[2px] bg-gray-200", style: { top: "4px", bottom: "4px", left: "50%", transform: "translateX(-50%)" } }) }),
                                  (0, a.jsx)("div", { style: { gridRow: 3, gridColumn: 2 }, className: (0, S.W)(t && "h-3") }),
                                  (0, a.jsx)("div", { style: { gridRow: 4, gridColumn: 1 }, className: "flex justify-center", children: (0, a.jsx)(R.q, { screenName: l.author.screenName, size: "large", url: l.author.profileImageUrl, withLink: "external" }) }),
                                  (0, a.jsx)("div", { style: { gridRow: "4 / 6", gridColumn: 2 }, children: (0, a.jsxs)(Z.r, { href: `https://x.com/${l.author.screenName}/status/${l.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: [(0, a.jsxs)("div", { className: "flex items-start flex-nowrap", children: [(0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, a.jsx)(z.R, { badges: l.author.badges, name: l.author.name, size: "body", withLink: "external" }) }), l.createdAt && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "h-0.5 w-0.5 rounded-full bg-gray-700 mx-1 flex-shrink-0 flex items-center self-center" }), (0, a.jsx)("div", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: K(l.createdAt) })] })] }), (0, a.jsx)("div", { className: "mb-0.5", children: l.media && l.media.length > 0 ? (0, a.jsxs)("div", { className: "flex gap-4 mt-1", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsx)(F, { mediaItems: l.media }) }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(M, { children: (0, a.jsx)(I.W, { text: (0, W.decode)(l.text), numberOfLines: 3, size: "subtext1", displayTextRange: l.display_text_range }) }) })] }) : (0, a.jsx)("div", { children: (0, a.jsx)(M, { children: (0, a.jsx)(I.W, { text: (0, W.decode)(l.text), numberOfLines: 3, size: "subtext1", displayTextRange: l.display_text_range }) }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[6px] mb-[0.5]", children: (0, a.jsx)(O, { metrics: l.publicMetrics }) })] }) }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: "grid gap-x-3",
                              style: { gridTemplateColumns: "auto 1fr" },
                              children: [
                                  (0, a.jsx)("div", { className: "flex justify-center", children: (0, a.jsx)(R.q, { screenName: l.author.screenName, size: "large", url: l.author.profileImageUrl, withLink: "external" }) }),
                                  (0, a.jsx)(Z.r, { href: `https://x.com/${l.author.screenName}/status/${l.id}`, target: "_blank", rel: "noopener noreferrer", className: "transition-colors outline-none cursor-pointer focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", children: (0, a.jsxs)("div", { children: [(0, a.jsxs)("div", { className: "flex items-start flex-nowrap mb-0.5", children: [(0, a.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, a.jsx)(z.R, { badges: l.author.badges, name: l.author.name, size: "body", withLink: "external" }) }), l.createdAt && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "h-0.5 w-0.5 rounded-full bg-gray-700 mx-1 flex-shrink-0 flex items-center self-center" }), (0, a.jsx)("div", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: K(l.createdAt) })] })] }), (0, a.jsx)("div", { className: "mb-0.5", children: l.media && l.media.length > 0 ? (0, a.jsxs)("div", { className: "flex gap-4 mt-1", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsx)(F, { mediaItems: l.media }) }), (0, a.jsx)("div", { className: "flex-1", children: (0, a.jsx)(M, { children: (0, a.jsx)(I.W, { text: (0, W.decode)(l.text), numberOfLines: 3, size: "subtext1", displayTextRange: l.display_text_range }) }) })] }) : (0, a.jsx)("div", { children: (0, a.jsx)(M, { children: (0, a.jsx)(I.W, { text: (0, W.decode)(l.text), numberOfLines: 3, size: "subtext1", displayTextRange: l.display_text_range }) }) }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block mt-[6px] mb-[0.5]", children: (0, a.jsx)(O, { metrics: l.publicMetrics }) })] }) }),
                              ],
                          }),
                });
            }
            var A = t(437712),
                E = t(991732);
            function B({ stats: e }) {
                const s = (0, E.T)();
                return (0, a.jsx)("div", {
                    className: (0, S.Z)("grid grid-cols-5", "px-4 gap-2 min-[988px]:gap-4 min-[988px]:grid-rows-2 min-[988px]:border-l min-[988px]:border-gray-200 min-[988px]:pl-8 min-[988px]:h-fit"),
                    children: e.slice(0, 10).map((e, t) => {
                        const { label: r, info: l } = s[e.metricKey] || { label: e.metricKey, info: `Details about ${e.metricKey}` };
                        return (0, a.jsxs)(
                            "div",
                            { className: (0, S.Z)("flex flex-col items-start", t < 5 && "mb-3 min-[988px]:mb-0"), children: [(0, a.jsx)("div", { className: "min-[988px]:hidden w-full", children: (0, a.jsxs)(_.Vq, { children: [(0, a.jsx)(_.hg, { className: "w-full", children: (0, a.jsx)("div", { className: "cursor-pointer", children: (0, a.jsxs)("div", { className: "flex flex-row items-center mb-1 gap-1", children: [(0, a.jsx)("div", { className: "flex items-center justify-center w-4 h-4", children: e.icon }), (0, a.jsx)("p", { className: "font-semibold leading-tight text-[11px]", children: e.value })] }) }) }), (0, a.jsxs)(_.cZ, { className: "max-sm:max-w-[calc(100vw-2rem)] rounded-xl", children: [(0, a.jsxs)(_.fK, { children: [(0, a.jsx)(_.$N, { tabIndex: 0, children: r }), (0, a.jsx)(_.Be, { className: "text-start", children: l })] }), (0, a.jsx)("div", { className: "text-headline2 text-text flex items-baseline gap-2 pt-4 font-bold", children: "number" == typeof e.rawValue ? e.rawValue.toLocaleString() : e.rawValue })] })] }) }), (0, a.jsx)("div", { className: "hidden min-[988px]:block", children: (0, a.jsx)(A.J, { trigger: (0, a.jsxs)("div", { className: "cursor-pointer", children: [(0, a.jsxs)("div", { className: "flex flex-row items-center mb-1 gap-2", children: [(0, a.jsx)("div", { className: "flex items-center justify-center w-5 h-5", children: e.icon }), (0, a.jsx)("p", { className: "font-semibold leading-tight text-subtext2", children: e.value })] }), (0, a.jsx)("p", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: r })] }), children: (0, a.jsxs)("div", { className: "p-3 w-64 space-y-2 border border-border rounded-lg", children: [(0, a.jsx)("h4", { className: "font-medium", children: r }), (0, a.jsx)("p", { className: "text-muted-foreground", children: l }), (0, a.jsx)("div", { className: "font-semibold", children: "number" == typeof e.rawValue ? e.rawValue.toLocaleString() : e.rawValue })] }) }) })] },
                            `stat-${e.metricKey}-${t}`,
                        );
                    }),
                });
            }
            function Q({ restId: e, referrerUrl: s, contentPageUrl: t = "/analytics/content", showFollowersChart: r = !1, showRealtimeChart: l = !1 }) {
                return (0, a.jsx)(N.R4, { restId: e, showRealtimeChart: l, children: (0, a.jsx)(H, { referrerUrl: s, contentPageUrl: t, showFollowersChart: r }) });
            }
            function H({ referrerUrl: e, contentPageUrl: s, showFollowersChart: t }) {
                const { postData: R, metrics: Z } = (0, N.dQ)(),
                    [z, I] = (0, b.useState)("overview"),
                    L = (0, v.d)(),
                    { analytics: P } = (0, w.M1)(),
                    { overviewSelectedMetric: V, setOverviewSelectedMetric: $, audienceSelectedMetric: S, setAudienceSelectedMetric: _ } = (0, N.dQ)(),
                    T = (0, b.useMemo)(() => R?.media && R.media.length > 0, [R]),
                    W = (0, b.useMemo)(() => {
                        if (!Z) return [];
                        return [
                            { icon: (0, a.jsx)(r.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Impressions", value: (0, y.uf)(Z.impressions), rawValue: Z.impressions },
                            { icon: (0, a.jsx)(l.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Likes", value: (0, y.uf)(Z.likes), rawValue: Z.likes },
                            { icon: (0, a.jsx)(i.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Replies", value: (0, y.uf)(Z.replies), rawValue: Z.replies },
                            { icon: (0, a.jsx)(n.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Retweets", value: (0, y.uf)(Z.retweets), rawValue: Z.retweets },
                            { icon: (0, a.jsx)(o.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "EngagementRate", value: Z.formattedEngagementRate, rawValue: Z.formattedEngagementRate },
                            { icon: (0, a.jsx)(c.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "ProfileVisits", value: (0, y.uf)(Z.profileVisits), rawValue: Z.profileVisits },
                            { icon: (0, a.jsx)(d.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Follows", value: (0, y.uf)(Z.follows), rawValue: Z.follows },
                            { icon: (0, a.jsx)(x.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Bookmark", value: (0, y.uf)(Z.bookmarks), rawValue: Z.bookmarks },
                            { icon: (0, a.jsx)(m.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "Share", value: (0, y.uf)(Z.share), rawValue: Z.share },
                            { icon: (0, a.jsx)(h.Z, { className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700" }), metricKey: "MediaViews", value: T ? (0, y.uf)(Z.mediaViews) : "-", rawValue: T ? Z.mediaViews : 0 },
                        ];
                    }, [Z, T]),
                    K = (0, b.useMemo)(
                        () => [
                            { value: "Impressions", label: P.ImpressionsLabel, icon: r.Z },
                            { value: "Likes", label: P.LikesLabel, icon: l.Z },
                            { value: "Replies", label: P.RepliesLabel, icon: i.Z },
                            { value: "Retweets", label: P.RetweetsLabel, icon: n.Z },
                            { value: "Bookmark", label: P.BookmarkLabel, icon: x.Z },
                            { value: "Share", label: P.ShareLabel, icon: m.Z },
                            { value: "ProfileVisits", label: P.ProfileVisitsLabel, icon: c.Z },
                            { value: "Follows", label: P.FollowsLabel, icon: d.Z },
                        ],
                        [P],
                    );
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 p-4",
                    children: [
                        (0, a.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    (0, a.jsx)(f.z, {
                                        icon: (0, a.jsx)(u.Z, {}),
                                        onClick: () => {
                                            L.push(e || s);
                                        },
                                        variant: "primaryText",
                                        "aria-label": P.backToContent,
                                    }),
                                    (0, a.jsx)(p.x, { size: "headline1", weight: "bold", children: P.postAnalytics }),
                                ],
                            }),
                        }),
                        (0, a.jsxs)("div", { className: "max-[988px]:hidden flex flex-col gap-6", children: [(0, a.jsxs)("div", { className: "flex gap-8", children: [(0, a.jsx)("div", { className: "flex-1 max-w-[50%]", children: (0, a.jsx)(q, {}) }), Z && (0, a.jsx)("div", { className: "w-1/2 flex-shrink-0", children: (0, a.jsx)(B, { stats: W }) })] }), (0, a.jsx)("hr", { className: "border-t border-gray-100" }), (0, a.jsx)(C.q, {}), (0, a.jsx)("hr", { className: "border-t border-gray-100" }), (0, a.jsx)(k.R, { showFollowersChart: t })] }),
                        (0, a.jsxs)("div", {
                            className: "min-[988px]:hidden",
                            children: [
                                (0, a.jsx)("div", { className: "overflow-hidden mb-4", children: (0, a.jsx)(q, {}) }),
                                Z && (0, a.jsx)("div", { className: "w-full mb-6", children: (0, a.jsx)(B, { stats: W }) }),
                                (0, a.jsxs)(j.mQ, {
                                    defaultValue: "overview",
                                    value: z,
                                    onValueChange: I,
                                    className: "w-full",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "flex items-center justify-between w-full gap-4",
                                            children: [
                                                (0, a.jsxs)(j.dr, { className: "border-0 bg-transparent p-0 flex w-full border-b border-gray-200 rounded-none", children: [(0, a.jsx)(j.SP, { value: "overview", className: "font-semibold flex-1 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none border-b-2 border-transparent -mb-[2px]", children: P.overview }), (0, a.jsx)(j.SP, { value: "audience", className: "font-semibold flex-1 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none border-b-2 border-transparent -mb-[2px]", children: P.audience })] }),
                                                (0, a.jsx)("div", {
                                                    className: "flex justify-center items-center",
                                                    children: (0, a.jsxs)(g.Ph, {
                                                        value: "overview" === z ? V : S,
                                                        onValueChange: (e) => {
                                                            const s = e;
                                                            $(s), _(s);
                                                        },
                                                        children: [
                                                            (0, a.jsx)(g.i4, {
                                                                className: "items-center min-w-0 h-8 py-1 px-1 border-none !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none hover:bg-gray-100",
                                                                children: (() => {
                                                                    const e = "overview" === z ? V : S,
                                                                        s = K.find((s) => s.value === e),
                                                                        t = s?.icon || r.Z;
                                                                    return (0, a.jsx)(t, { className: "w-5 h-5 text-gray-900 items-center flex-shrink-0" });
                                                                })(),
                                                            }),
                                                            (0, a.jsx)(g.Bw, {
                                                                children: K.map((e) => {
                                                                    const s = e.icon;
                                                                    return (0, a.jsx)(g.Ql, { value: e.value, children: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)(s, { className: "w-4 h-4 text-gray-700" }), (0, a.jsx)("span", { children: e.label })] }) }, e.value);
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(j.nU, { value: "overview", className: "mt-0", children: (0, a.jsx)(C.q, { hideSelector: !0 }) }),
                                        (0, a.jsx)(j.nU, { value: "audience", className: "mt-0", children: (0, a.jsx)(k.R, { showFollowersChart: t, hideSelector: !0 }) }),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-07ecdc0a.221d981a.js.map
