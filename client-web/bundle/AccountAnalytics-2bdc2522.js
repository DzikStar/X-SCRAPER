"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-2bdc2522"],
    {
        326618: (e, s, r) => {
            r.d(s, { w: () => Q, x: () => _ });
            var i = r(552322),
                t = r(993165),
                l = r(193686),
                n = r(983706),
                a = r(713990),
                o = r(377446),
                c = r(909361),
                d = r(679804),
                x = r(995348),
                m = r(671026),
                u = r(553453),
                h = r(561677),
                p = r(14313),
                f = r(97759),
                b = r(840489),
                g = r(202784),
                j = (r(889906), r(430962)),
                v = r(777301),
                y = r(746659),
                N = r(812115),
                w = r(378364),
                k = r(589259),
                C = r(983955),
                z = r(598705),
                M = r(634979),
                F = r(768246),
                R = r(530361);
            function T(e) {
                return Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(e);
            }
            function I({ mediaItems: e, isMobile: s = !1 }) {
                if (!e || 0 === e.length) return null;
                if (1 === e.length) return (0, i.jsx)("div", { className: "border border-gray-200 rounded-xl overflow-hidden", style: { width: "100%", maxWidth: s ? "400px" : "none", height: "auto", maxHeight: s ? "510px" : "auto", margin: s ? "0.5rem 0" : "0", aspectRatio: s ? void 0 : "16/9" }, children: (0, i.jsx)(S, { mediaItem: e[0], isMobile: s, gridItem: !1 }) });
                const r = e.slice(0, 4),
                    t = 3 === r.length,
                    l = r.length <= 2 ? 1 : 2,
                    n = (e) => {
                        const i = s ? "xl" : "lg";
                        if (2 === r.length) return 0 === e ? `rounded-l-${i}` : `rounded-r-${i}`;
                        if (t) {
                            if (0 === e) return `rounded-l-${i}`;
                            if (1 === e) return `rounded-tr-${i}`;
                            if (2 === e) return `rounded-br-${i}`;
                        }
                        if (4 === r.length) {
                            if (0 === e) return `rounded-tl-${i}`;
                            if (1 === e) return `rounded-tr-${i}`;
                            if (2 === e) return `rounded-bl-${i}`;
                            if (3 === e) return `rounded-br-${i}`;
                        }
                        return "";
                    };
                return (0, i.jsx)("div", { className: `grid gap-0.5 ${s ? "w-full" : "w-[120px] h-[68px] flex-shrink-0"} ${s ? "rounded-2xl" : "rounded-lg"} border border-gray-200 overflow-hidden`, style: { padding: 0, margin: s ? "0.5rem 0" : "0", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: t ? "1fr 1fr" : `repeat(${l}, 1fr)`, aspectRatio: "16/9" }, children: r.map((e, r) => (0, i.jsx)("div", { className: "w-full h-full overflow-hidden", style: { ...(t && 0 === r ? { gridRow: "span 2" } : void 0) }, children: (0, i.jsx)(S, { mediaItem: e, isMobile: s, gridItem: !0, cornerClass: n(r) }) }, `media-${e.url}-${r}`)) });
            }
            function S({ mediaItem: e, isMobile: s = !1, gridItem: r = !1, cornerClass: t }) {
                const { analytics: l } = (0, j.M1)();
                if (!e) return null;
                const n = "video" === e.type,
                    a = "animated_gif" === e.type;
                return (0, i.jsxs)("div", {
                    className: "relative overflow-hidden " + (r ? `w-full h-full ${t || ""}` : s ? "w-full h-auto" : "w-[120px] h-[68px] flex-shrink-0 aspect-[16/9]"),
                    style: s && !r ? { maxHeight: "510px" } : void 0,
                    children: [
                        (0, i.jsx)("img", {
                            src: e.url,
                            alt: n ? l.videoThumbnail : a ? l.gifLabel : l.imageLabel,
                            className:
                                "w-full " +
                                (!r && s
                                    ? `h-auto max-h-[510px] ${
                                          (() => {
                                              if (e.width && e.height) {
                                                  return e.width / e.height < 0.75;
                                              }
                                              return !1;
                                          })()
                                              ? "aspect-[3/4]"
                                              : ""
                                      } object-cover object-center`
                                    : "h-full object-cover"),
                        }),
                        (n || a) && (0, i.jsx)("div", { className: "absolute inset-0 flex items-end justify-start", children: n && e.duration && (0, i.jsx)("div", { className: "text-white px-1 py-0.5 rounded " + (s ? "text-[10px] mb-2 ml-2 px-1 py-0.5" : r ? "text-[5px] mb-1 ml-1 px-0.5 py-0.5 scale-[0.85] origin-bottom-left" : "text-[6px] mb-2 ml-2 px-1 py-0.5 scale-[0.9] origin-bottom-left"), style: { backgroundColor: "rgba(0, 0, 0, 0.7)" }, children: (0, z.LU)(e.duration) }) }),
                    ],
                });
            }
            function D({ icon: e, value: s, centered: r = !1 }) {
                return (0, i.jsxs)("div", { className: "flex items-center gap-1 " + (r ? "justify-center" : ""), children: [e, (0, i.jsx)("span", { className: "font-semibold text-gray-900", children: (0, z.uf)(s) })] });
            }
            function L({ metrics: e }) {
                return (0, i.jsxs)("div", { className: "text-subtext2 flex justify-between text-gray-900 mt-3 pl-1 pr-12", children: [(0, i.jsx)(D, { icon: (0, i.jsx)(u.Z, { className: "size-4 text-gray-700" }), value: e.replies }), (0, i.jsx)(D, { icon: (0, i.jsx)(h.Z, { className: "size-4 text-gray-700" }), value: e.reposts }), (0, i.jsx)(D, { icon: (0, i.jsx)(m.Z, { className: "size-4 text-gray-700" }), value: e.likes }), (0, i.jsx)(D, { icon: (0, i.jsx)(x.Z, { className: "size-4 text-gray-700" }), value: e.impressions })] });
            }
            function $({ metrics: e }) {
                return (0, i.jsxs)("div", { className: "flex items-center", children: [(0, i.jsx)("div", { className: "w-28 text-center mr-6", children: (0, i.jsx)(D, { icon: (0, i.jsx)(x.Z, { className: "size-4 text-gray-700" }), value: e.impressions, centered: !0 }) }), (0, i.jsx)("div", { className: "w-20 text-center mr-6", children: (0, i.jsx)(D, { icon: (0, i.jsx)(m.Z, { className: "size-4 text-gray-700" }), value: e.likes, centered: !0 }) }), (0, i.jsx)("div", { className: "w-20 text-center mr-6", children: (0, i.jsx)(D, { icon: (0, i.jsx)(u.Z, { className: "size-4 text-gray-700" }), value: e.replies, centered: !0 }) }), (0, i.jsx)("div", { className: "w-20 text-center mr-6", children: (0, i.jsx)(D, { icon: (0, i.jsx)(h.Z, { className: "size-4 text-gray-700" }), value: e.reposts, centered: !0 }) })] });
            }
            function Z({ post: e, url: s, isMobile: r = !1 }) {
                const t = e.author.badges ? { verifiedType: e.author.badges.verifiedType || e.author.verifiedType, isProtected: e.author.badges.isProtected, isSubscriber: e.author.badges.isSubscriber, isTranslator: e.author.badges.isTranslator, affiliation: e.author.badges.affiliation } : void 0,
                    l = (0, M.j)(),
                    n = (0, F.l)(),
                    a = l + (n ? `?${n.toString()}` : "");
                return (0, i.jsxs)(N.r, {
                    href: `${s}/${e.id}?referrerUrl=${encodeURIComponent(a)}`,
                    className: (0, b.W)("transition-colors block outline-none focus:outline-none [&:focus-visible]:outline-none [&:active]:outline-none [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] [touch-callout:none] [user-select:none]", !r && "hover:bg-gray-50"),
                    children: [
                        (0, i.jsx)("div", { className: "min-[988px]:hidden text-text flex flex-col p-3 pb-2", children: (0, i.jsxs)("div", { className: "flex items-start gap-3", children: [(0, i.jsx)("div", { className: "flex-shrink-0", children: (0, i.jsx)(w.q, { screenName: e.author.screenName, size: "large", url: e.author.profileImageUrl, resolution: "400x400", withLink: "external" }) }), (0, i.jsxs)("div", { className: "flex-1", children: [(0, i.jsxs)("div", { className: "flex items-center flex-nowrap mb-0.5", children: [(0, i.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, i.jsx)(k.R, { badges: t, name: e.author.name, size: "body", withLink: "external" }) }), e.createdAt && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: "h-0.5 w-0.5 rounded-full bg-gray-700 mx-1 flex-shrink-0" }), (0, i.jsx)("div", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: T(e.createdAt) })] })] }), (0, i.jsx)(C.W, { text: (0, R.decode)(e.text), numberOfLines: 3, size: "subtext1", displayTextRange: e.display_text_range }), e.media && e.media.length > 0 && (0, i.jsx)("div", { className: "mt-2", children: (0, i.jsx)(I, { mediaItems: e.media, isMobile: !0 }) }), (0, i.jsx)(L, { metrics: e.publicMetrics })] })] }) }),
                        (0, i.jsxs)("div", { className: "hidden min-[988px]:flex items-start pt-2 px-4 pb-4", children: [(0, i.jsx)("div", { className: "flex-1 pr-4", children: (0, i.jsxs)("div", { className: "flex items-start", children: [(0, i.jsx)("div", { className: "mr-3", children: (0, i.jsx)(w.q, { screenName: e.author.screenName, size: "large", url: e.author.profileImageUrl, withLink: "external" }) }), (0, i.jsxs)("div", { className: "flex-1", children: [(0, i.jsxs)("div", { className: "flex items-center flex-nowrap mb-1", children: [(0, i.jsx)("div", { className: "min-w-0 flex-shrink overflow-hidden", children: (0, i.jsx)(k.R, { badges: t, name: e.author.name, size: "body", withLink: "external" }) }), e.createdAt && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("span", { className: "text-gray-700 mx-1 flex-shrink-0", children: "·" }), (0, i.jsx)("span", { className: "text-body whitespace-nowrap flex-shrink-0 text-gray-700", children: T(e.createdAt) })] })] }), (0, i.jsx)("div", { className: "mt-1", children: e.media && e.media.length > 0 ? (0, i.jsxs)("div", { className: "flex gap-3", children: [(0, i.jsx)("div", { className: "flex-shrink-0", children: (0, i.jsx)(I, { mediaItems: e.media }) }), (0, i.jsx)("div", { className: "flex-1", children: (0, i.jsx)(C.W, { text: (0, R.decode)(e.text), numberOfLines: 3, size: "subtext1", displayTextRange: e.display_text_range }) })] }) : (0, i.jsx)(C.W, { text: (0, R.decode)(e.text), numberOfLines: 3, size: "subtext1", displayTextRange: e.display_text_range }) })] })] }) }), (0, i.jsx)($, { metrics: e.publicMetrics })] }),
                    ],
                });
            }
            var W = r(411924);
            const _ = r(672930),
                P = ({ field: e, sortField: s, sortDirection: r }) => (e !== s ? null : "asc" === r ? (0, i.jsx)(o.Z, { className: "size-4 align-text-bottom ml-1" }) : (0, i.jsx)(c.Z, { className: "size-4 align-text-bottom ml-1" }));
            function A({ sortField: e, sortDirection: s, onSortFieldChange: r, onSortDirectionChange: l }) {
                const { analytics: n } = (0, j.M1)(),
                    o = (0, g.useMemo)(
                        () => [
                            { value: "date", label: n.Date, icon: (0, i.jsx)(d.Z, { className: "size-5" }) },
                            { value: "impressions", label: n.ImpressionsLabel, icon: (0, i.jsx)(x.Z, { className: "size-5" }) },
                            { value: "likes", label: n.LikesLabel, icon: (0, i.jsx)(m.Z, { className: "size-5" }) },
                            { value: "replies", label: n.RepliesLabel, icon: (0, i.jsx)(u.Z, { className: "size-5" }) },
                            { value: "reposts", label: n.RetweetsLabel, icon: (0, i.jsx)(h.Z, { className: "size-5" }) },
                        ],
                        [n],
                    ),
                    c = o.find((s) => s.value === e);
                return (0, i.jsxs)("div", { className: "flex items-center gap-2 relative", children: [(0, i.jsx)(t.z, { size: "xSmallCompact", onClick: () => l("asc" === s ? "desc" : "asc"), className: "px-0 border-none bg-background", children: "asc" === s ? (0, i.jsx)(p.Z, { className: "size-5 text-gray-900" }) : (0, i.jsx)(f.Z, { className: "size-5 text-gray-900" }) }), (0, i.jsxs)(a.Ph, { value: e, onValueChange: r, children: [(0, i.jsx)(a.i4, { className: "bg-background text-subtext1 w-auto font-bold border-none pl-1 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, i.jsx)(a.ki, { children: c?.icon }) }), (0, i.jsx)(a.Bw, { children: o.map((e) => (0, i.jsx)(a.Ql, { value: e.value, children: (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [(0, i.jsx)("span", { className: "text-gray-700", children: e.icon }), (0, i.jsx)("span", { children: e.label })] }) }, e.value)) })] })] });
            }
            function O({ onClick: e, visible: s, isMobile: r }) {
                return (0, i.jsx)(t.z, { onClick: e, className: (0, b.W)("rounded-full bg-background border border-gray-200 shadow-md transition-all duration-300 z-50", r ? "fixed bottom-6 right-6" : "absolute bottom-8 right-8", !r && "hover:bg-gray-100", s ? "opacity-100 scale-100" : "opacity-0 scale-0"), size: "medium", icon: (0, i.jsx)(p.Z, { className: "size-6 text-text" }) });
            }
            const E = (0, g.memo)(({ post: e, url: s, isMobile: r }) => (0, i.jsx)("div", { children: (0, i.jsx)(Z, { post: e, url: s, isMobile: r }) }, e.id)),
                U = (0, g.forwardRef)(({ posts: e, url: s, isMobile: r }, t) => {
                    const { analytics: a } = (0, j.M1)(),
                        { isLoading: o, isFetching: c } = (0, y.r0)(),
                        [d, x] = (0, g.useState)(o || c),
                        [m, u] = (0, g.useState)(!1),
                        h = (0, g.useRef)(null),
                        p = (0, g.useRef)(null),
                        f = `analytics-content-scroll-${s}`;
                    (0, g.useEffect)(() => {
                        x(o || c);
                    }, [o, c]),
                        (0, g.useEffect)(() => {
                            if (!o && p.current && e.length > 0)
                                try {
                                    const e = sessionStorage.getItem(f);
                                    e && p.current.scrollTo(Number.parseInt(e, 10));
                                } catch (e) {}
                            return () => {};
                        }, [o, e, f]),
                        (0, g.useEffect)(() => {
                            const e = () => {
                                try {
                                    sessionStorage.removeItem(f);
                                } catch (e) {}
                            };
                            return (
                                window.addEventListener("beforeunload", e),
                                () => {
                                    window.removeEventListener("beforeunload", e);
                                }
                            );
                        }, [f]);
                    const v = (0, g.useCallback)(
                            (e) => {
                                u(e > 300);
                                try {
                                    sessionStorage.setItem(f, String(e));
                                } catch (e) {}
                            },
                            [f],
                        ),
                        N = (0, g.useCallback)(() => {
                            p.current && p.current.scrollTo(0);
                        }, []);
                    return (0, g.useImperativeHandle)(t, () => ({ scrollToTop: N })), 0 === e.length ? (0, i.jsx)("div", { className: "p-6 text-center text-gray-500 bg-background", children: a.noPostsFound }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)("div", { ref: h, className: `h-full flex flex-col ${r ? "max-h-[100vh]" : "max-h-[calc(100vh-220px)]"} flex-1 border-gray-100 overflow-hidden relative`, children: [(0, i.jsx)(O, { onClick: N, visible: m, isMobile: r }), (0, i.jsx)("div", { className: (0, b.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-50 transition-opacity delay-100 duration-200", { "opacity-0": !d, "opacity-100": d }), children: (0, i.jsx)(l.P, { size: "large" }) }), (0, i.jsx)(n.T, { api: p, onScroll: v, className: (0, b.W)("[&>ul>li]:border-t [&>ul>li]:border-gray-100 [&>ul>li:first-child]:border-t-0 [&>ul>li:last-child]:border-b max-h-full [&>ul]:pb-8 [&>ul]:overflow-visible", r ? "scrollbar-hide" : "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-md [scrollbar-gutter:stable]"), items: e, overscan: 10, renderItem: (e) => (0, i.jsx)(E, { post: e, url: s, isMobile: r }, e.id) })] }) });
                }),
                H = (e, s) =>
                    e && 0 !== e.length
                        ? e.filter((e) => {
                              switch (s) {
                                  case "posts":
                                      return !e.replyToId && !e.communityId;
                                  case "replies":
                                      return !!e.replyToId;
                                  case "community":
                                      return !!e.communityId;
                                  default:
                                      return !0;
                              }
                          })
                        : [],
                q = (e, s, r) => {
                    if (!e || 0 === e.length) return [];
                    return [...e].sort((e, i) => {
                        let t, l;
                        switch (s) {
                            case "date":
                            default:
                                (t = e.createdAt || new Date(0)), (l = i.createdAt || new Date(0));
                                break;
                            case "impressions":
                                (t = e.publicMetrics.impressions), (l = i.publicMetrics.impressions);
                                break;
                            case "replies":
                                (t = e.publicMetrics.replies), (l = i.publicMetrics.replies);
                                break;
                            case "reposts":
                                (t = e.publicMetrics.reposts), (l = i.publicMetrics.reposts);
                                break;
                            case "likes":
                                (t = e.publicMetrics.likes), (l = i.publicMetrics.likes);
                        }
                        return ((e, s, r) => {
                            if (e === s) return 0;
                            const i = e > s ? 1 : -1;
                            return "asc" === r ? i : -i;
                        })(t, l, r);
                    });
                };
            function B({ sortField: e, sortDirection: s, onSort: r, isInteractive: t = !0 }) {
                const { analytics: l } = (0, j.M1)();
                return (0, i.jsxs)("div", {
                    className: "sticky top-0 z-10 bg-background p-3 border-b border-gray-200 flex items-center justify-between rounded-t-xl",
                    children: [
                        (0, i.jsx)("div", { className: (0, b.W)("text-left mr-6 select-none", t && "cursor-pointer hover:text-gray-900", t && { "font-bold": "date" === e }), onClick: t ? () => r?.("date") : void 0, children: (0, i.jsxs)("span", { className: "inline-flex items-center min-w-[50px]", children: [l.Date, t && (0, i.jsx)(P, { field: "date", sortField: e ?? "date", sortDirection: s ?? "desc" })] }) }),
                        (0, i.jsxs)("div", { className: "flex items-center mr-2", children: [(0, i.jsx)("div", { className: (0, b.W)("w-28 text-center mr-6 select-none", t && "cursor-pointer hover:text-gray-900", t && { "font-bold": "impressions" === e }), onClick: t ? () => r?.("impressions") : void 0, children: (0, i.jsxs)("span", { className: "inline-flex items-center justify-center min-w-[90px]", children: [l.ImpressionsLabel, t && (0, i.jsx)(P, { field: "impressions", sortField: e ?? "date", sortDirection: s ?? "desc" })] }) }), (0, i.jsx)("div", { className: (0, b.W)("w-20 text-center mr-6 select-none", t && "cursor-pointer hover:text-gray-900", t && { "font-bold": "likes" === e }), onClick: t ? () => r?.("likes") : void 0, children: (0, i.jsxs)("span", { className: "inline-flex items-center justify-center min-w-[50px]", children: [l.LikesLabel, t && (0, i.jsx)(P, { field: "likes", sortField: e ?? "date", sortDirection: s ?? "desc" })] }) }), (0, i.jsx)("div", { className: (0, b.W)("w-20 text-center mr-6 select-none", t && "cursor-pointer hover:text-gray-900", t && { "font-bold": "replies" === e }), onClick: t ? () => r?.("replies") : void 0, children: (0, i.jsxs)("span", { className: "inline-flex items-center justify-center min-w-[50px]", children: [l.RepliesLabel, t && (0, i.jsx)(P, { field: "replies", sortField: e ?? "date", sortDirection: s ?? "desc" })] }) }), (0, i.jsx)("div", { className: (0, b.W)("w-20 text-center mr-6 select-none", t && "cursor-pointer hover:text-gray-900", t && { "font-bold": "reposts" === e }), onClick: t ? () => r?.("reposts") : void 0, children: (0, i.jsxs)("span", { className: "inline-flex items-center justify-center min-w-[50px]", children: [l.RetweetsLabel, t && (0, i.jsx)(P, { field: "reposts", sortField: e ?? "date", sortDirection: s ?? "desc" })] }) })] }),
                    ],
                });
            }
            function Q({ contentType: e, url: s, onContentTypeChange: r, timeRange: t, onTimeRangeChange: n, timeRangeOptions: a, sortField: o, sortDirection: c, onSortFieldChange: d, onSortDirectionChange: x }) {
                const { posts: m, isLoading: u } = (0, y.r0)(),
                    [h, p] = (0, g.useState)("date"),
                    [f, b] = (0, g.useState)("desc"),
                    { analytics: N } = (0, j.M1)(),
                    w = o ?? h,
                    k = c ?? f,
                    C = (0, g.useMemo)(() => H(m, e), [m, e]),
                    z = (0, g.useMemo)(() => q(C, w, k), [C, w, k]),
                    M = (0, g.useCallback)(
                        (e) => {
                            d && x ? (e === w ? x("asc" === k ? "desc" : "asc") : (d(e), x("desc"))) : e === w ? b((e) => ("asc" === e ? "desc" : "asc")) : (p(e), b("desc"));
                        },
                        [w, k, d, x],
                    ),
                    F = (e) => {
                        d ? d(e) : p(e);
                    },
                    R = (e) => {
                        x ? x(e) : b(e);
                    },
                    T = (0, g.useRef)(null),
                    I = (0, g.useRef)(!0);
                return (
                    (0, g.useEffect)(() => {
                        I.current ? (I.current = !1) : T.current?.scrollToTop();
                    }, [e, t, w, k]),
                    u
                        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: "max-[987px]:block min-[988px]:hidden", children: [(0, i.jsx)("div", { className: "sticky top-[-1px] z-10 bg-background [background-clip:padding-box] pt-[1px]", children: (0, i.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, i.jsxs)("div", { className: "flex items-center justify-between", children: [r ? (0, i.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, i.jsx)(W.CR, { contentType: e, onChange: r, isMobile: !0 }) }) : (0, i.jsx)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold flex-shrink-0 mr-2", children: N.postsContentType }), (0, i.jsxs)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: [(0, i.jsx)(A, { sortField: w, sortDirection: k, onSortFieldChange: F, onSortDirectionChange: R }), t && n && a && (0, i.jsx)(v.W, { timeRange: t, onChange: n, timeRangeOptions: a, compact: !0 })] })] }) }) }), (0, i.jsx)("div", { className: "flex justify-center p-8", children: (0, i.jsx)(l.P, { size: "large" }) })] }), (0, i.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, i.jsxs)("div", { className: "bg-background rounded-xl border border-gray-200 flex flex-col h-full overflow-hidden", children: [(0, i.jsx)(B, { sortField: w, sortDirection: k, isInteractive: !1 }), (0, i.jsx)("div", { className: "flex justify-center p-8", children: (0, i.jsx)(l.P, { size: "large" }) })] }) })] })
                        : m && 0 !== m.length
                          ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: "max-[987px]:block min-[988px]:hidden", children: [(0, i.jsx)("div", { className: "sticky top-[-1px] z-10 bg-background [background-clip:padding-box] pt-[1px]", children: (0, i.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, i.jsxs)("div", { className: "flex items-center justify-between", children: [r ? (0, i.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, i.jsx)(W.CR, { contentType: e, onChange: r, isMobile: !0 }) }) : (0, i.jsx)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold flex-shrink-0 mr-2", children: N.postsContentType }), (0, i.jsxs)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: [(0, i.jsx)(A, { sortField: w, sortDirection: k, onSortFieldChange: F, onSortDirectionChange: R }), t && n && a && (0, i.jsx)(v.W, { timeRange: t, onChange: n, timeRangeOptions: a, compact: !0 })] })] }) }) }), (0, i.jsx)("div", { className: "h-full flex flex-col max-h-[100vh] flex-1 border-gray-100 overflow-hidden relative", children: (0, i.jsx)("div", { className: "flex-1 overflow-y-auto", children: (0, i.jsx)(U, { ref: T, posts: z, url: s, isMobile: !0 }) }) })] }), (0, i.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, i.jsxs)("div", { className: "bg-background rounded-xl border border-gray-200 flex flex-col h-full overflow-hidden", children: [(0, i.jsx)(B, { sortField: w, sortDirection: k, onSort: M, isInteractive: !0 }), (0, i.jsx)("div", { className: "h-full flex flex-col max-h-[calc(100vh-220px)] flex-1 border-gray-100 overflow-hidden relative", children: (0, i.jsx)("div", { className: "flex-1 overflow-y-auto", children: (0, i.jsx)(U, { ref: T, posts: z, url: s, isMobile: !1 }) }) })] }) })] })
                          : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: "max-[987px]:block min-[988px]:hidden", children: [(0, i.jsx)("div", { className: "sticky top-[-1px] z-10 bg-background [background-clip:padding-box] pt-[1px]", children: (0, i.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, i.jsxs)("div", { className: "flex items-center justify-between", children: [r ? (0, i.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, i.jsx)(W.CR, { contentType: e, onChange: r, isMobile: !0 }) }) : (0, i.jsx)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold flex-shrink-0 mr-2", children: N.postsContentType }), (0, i.jsxs)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: [(0, i.jsx)(A, { sortField: w, sortDirection: k, onSortFieldChange: F, onSortDirectionChange: R }), t && n && a && (0, i.jsx)(v.W, { timeRange: t, onChange: n, timeRangeOptions: a, compact: !0 })] })] }) }) }), (0, i.jsx)("div", { className: "p-6 text-center text-gray-500 bg-background", children: N.noPostsFound })] }), (0, i.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, i.jsxs)("div", { className: "bg-background rounded-xl border border-gray-200 flex flex-col h-full overflow-hidden", children: [(0, i.jsx)(B, { sortField: w, sortDirection: k, isInteractive: !1 }), (0, i.jsx)("div", { className: "p-6 text-center text-gray-500 bg-background", children: N.noPostsFound })] }) })] })
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-2bdc2522.0c29093a.js.map
