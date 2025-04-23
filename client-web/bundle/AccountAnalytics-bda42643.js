"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bda42643"],
    {
        481899: (e, s, t) => {
            t.d(s, { o: () => T });
            var a = t(552322),
                r = t(163637),
                n = t(26429),
                l = t(412035),
                i = t(16246),
                c = t(610922),
                d = t(796309),
                o = t(430962);
            function x() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, o.M1)(),
                    t = e?.creator,
                    x = (e) => Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(e));
                return (0, a.jsxs)("div", {
                    className: "w-full h-full max-w-[1024px] min-h-[3em] rounded-xl bg-gradient-to-b from-[#a17dff] to-[#8a65f2] p-4 text-white shadow-lg flex flex-col",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "flex items-center mb-2",
                            children: [
                                (0, a.jsxs)("div", { className: "flex items-center gap-1 flex-1", children: [(0, a.jsx)(n.q, { url: t?.profileImageUrl, size: "medium" }), (0, a.jsx)(l.R, { name: t?.name || s.Unknown, badges: { verifiedType: t?.verifiedType, affiliation: t?.badge ? { label: t.badge.description || "", url: t.badge.url || "" } : void 0 }, withLink: "external", color: "white", size: "body" }), (0, a.jsx)("div", { className: "bg-white/35 text-white ml-1 px-2 py-1 rounded-md font-medium text-subtext1", children: s.Host })] }),
                                (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        (() => {
                                            if (!e?.state) return null;
                                            const t = [];
                                            return "Running" === e.state ? t.push((0, a.jsx)("div", { className: "bg-black/25 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: s.Live }, "live")) : "Ended" === e.state ? (e.isAvailableForReplay ? t.push((0, a.jsx)("div", { className: "bg-red-500/30 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: s.Recorded }, "recorded")) : t.push((0, a.jsx)("div", { className: "bg-black/25 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: s.Ended }, "ended"))) : e.scheduledStart ? t.push((0, a.jsx)("div", { className: "bg-black/25 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: s.Scheduled }, "scheduled")) : t.push((0, a.jsx)("div", { className: "bg-black/25 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: e.state }, "default")), (0, a.jsx)("div", { className: "flex gap-2", children: t });
                                        })(),
                                        e &&
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, d.cn)("size-8 rounded-full border border-white/50 text-white bg-white/10 flex justify-center items-center transition-colors hover:bg-white/20"),
                                                onClick: (s) => {
                                                    s.stopPropagation(), window.open(`https://x.com/i/spaces/${e.restId}/peek`, "_blank");
                                                },
                                                children: "Ended" === e.state && e.isAvailableForReplay ? (0, a.jsx)(i.Z, { className: "size-5" }) : (0, a.jsx)(c.Z, { className: "size-5" }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("h1", { className: "text-title4 font-bold mb-2 line-clamp-1 overflow-hidden", children: e?.title || s.untitledVideo }),
                        (0, a.jsx)("div", { className: "text-subtext1 font-normal", children: e?.scheduledStart && "Running" !== e.state && "Ended" !== e.state ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("span", { className: "font-medium", children: [s.ScheduledFor, " "] }), x(e.scheduledStart)] }) : e?.createdAt ? x(e.createdAt) : "" }),
                    ],
                });
            }
            var m = t(407250),
                u = t(598705),
                h = t(669833);
            function p() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, o.M1)(),
                    t = e?.metrics.totalParticipated || 0,
                    n = e?.peakConcurrentViewers || 0,
                    l = e?.metrics.totalReplayWatched || 0,
                    i = e?.subscriberCount || 0,
                    c = e?.isAvailableForReplay || !1,
                    d = e?.scheduledStart && !("Running" === e.state || "Ended" === e.state);
                return (0, a.jsxs)(m.Zb, { className: "w-full lg:w-[400px] bg-card text-card-foreground", children: [(0, a.jsx)(m.Ol, { className: "space-y-2", children: (0, a.jsx)(m.ll, { className: "text-headline2 font-normal line-clamp-2 max-h-[3em] break-words", children: s.spaceStats }) }), (0, a.jsx)(m.aY, { className: "space-y-4", children: d ? (0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.attendingSpace }), (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: i })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalParticipants }), (0, a.jsx)(h.O, { label: t.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(t) }) })] }), (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.peakConcurrentViewers }), (0, a.jsx)(h.O, { label: n.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(n) }) })] }), c && (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalReplayWatched }), (0, a.jsx)(h.O, { label: l.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(l) }) })] })] }) })] });
            }
            var f = t(643715),
                b = t(829233),
                g = t(202784);
            const { Area: j, CartesianGrid: v, XAxis: y, YAxis: N, AreaChart: w } = f,
                k = (e) => {
                    const s = Math.floor(e / 60),
                        t = e % 60;
                    return 0 === s ? `${t}s` : `${s}:${t.toString().padStart(2, "0")}`;
                };
            function S() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, o.M1)(),
                    t = (0, g.useMemo)(() => (e?.viewCountGraph && e.start ? e.viewCountGraph.map((e, s) => ({ viewers: e, seconds: s })) : []), [e]);
                return 0 === t.length
                    ? (0, a.jsx)("p", { className: "text-gray-600 mt-2 pl-4", children: s.pleaseCheckBackAgainLater })
                    : (0, a.jsx)(b.BO, {
                          className: "relative aspect-auto h-full min-h-[0] w-full select-none pe-2",
                          config: { viewers: { color: "hsl(var(--colors-purple-500))" } },
                          children: (0, a.jsxs)(w, {
                              data: t,
                              margin: { bottom: 10, left: -10, right: 5, top: 5 },
                              children: [
                                  (0, a.jsx)("defs", { children: (0, a.jsxs)("linearGradient", { id: "viewersGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, a.jsx)("stop", { offset: "5%", stopColor: "hsl(var(--colors-purple-500) / 0.5)", stopOpacity: 0.8 }), (0, a.jsx)("stop", { offset: "95%", stopColor: "hsl(var(--colors-purple-500) / 0)", stopOpacity: 0 })] }) }),
                                  (0, a.jsx)(v, { strokeDasharray: "0", vertical: !1, stroke: "hsl(var(--colors-gray-100))" }),
                                  (0, a.jsx)(y, { dataKey: "seconds", tickLine: !1, axisLine: !1, className: "text-subtext3", minTickGap: 60, tickMargin: 8, tick: { fill: "hsl(var(--colors-gray-600))" }, tickFormatter: k }),
                                  (0, a.jsx)(N, { tickLine: !1, axisLine: !1, className: "text-subtext3", tickFormatter: (e) => (0, u.uf)(e), tick: { fill: "hsl(var(--colors-gray-600))" } }),
                                  (0, a.jsx)(b.h7, {
                                      content: (0, a.jsx)(b.dg, {
                                          labelFormatter: (e, s) => {
                                              const t = s?.[0]?.payload;
                                              return t ? `Time: ${k(t.seconds)}` : "";
                                          },
                                          valueFormatter: (e) => (0, u.uf)(e),
                                      }),
                                  }),
                                  (0, a.jsx)(j, { type: "monotone", dataKey: "viewers", name: s.viewers, stroke: "hsl(var(--colors-purple-500))", fillOpacity: 1, fill: "url(#viewersGradient)" }),
                              ],
                          }),
                      });
            }
            var A = t(72100);
            function C({ post: e, isLast: s }) {
                return (0, a.jsx)("div", { className: "rounded-xl [&>div]:hover:bg-gray-50 [&>div]:transition-colors [&>div]:duration-200 " + (s ? "max-md:[&>div]:border-b-0" : ""), children: (0, a.jsx)(A.S, { post: e }) });
            }
            function L() {
                const { analytics: e } = (0, o.M1)(),
                    { spaceDetails: s } = (0, r.R5)(),
                    t = s?.posts || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.postsContentType, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, u.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e, s) => (0, a.jsx)(C, { post: e, isLast: s === t.length - 1 }, e.id)) }) })] });
            }
            var M = t(812115),
                R = t(840489);
            function U({ speaker: e }) {
                const s = `https://x.com/${e.screenName}`;
                return (0, a.jsxs)(M.r, { href: s, target: "_blank", className: (0, R.Z)("flex items-center gap-3 p-3 md:rounded-xl md:border md:border-gray-50 cursor-pointer md:hover:bg-gray-50", "focus:outline-none focus-visible:outline-none active:outline-none", "[-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent]", "[touch-callout:none] [user-select:none]", "border-b border-gray-100 max-md:last:border-b-0"), children: [(0, a.jsx)(n.q, { screenName: e.screenName, size: "xLarge", url: e.profileImageUrl, withLink: "external" }), (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, a.jsx)(l.R, { badges: e.badges, name: e.name, size: "subtext1", withLink: "external" }), (0, a.jsxs)("div", { className: "text-subtext2 text-gray-700", children: ["@", e.screenName] })] })] });
            }
            function z() {
                const { analytics: e } = (0, o.M1)(),
                    { spaceDetails: s } = (0, r.R5)(),
                    t = s?.participants.speakers || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.speakers, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, u.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e) => (0, a.jsx)(U, { speaker: e }, e.id)) }) })] });
            }
            var F = t(436059),
                O = t(941204),
                D = t(582440),
                Z = t(968025),
                E = t(768246);
            function V({ spacesOverviewUrl: e = "/analytics/spaces", referrerUrl: s }) {
                const t = (0, Z.t)(),
                    { analytics: r } = (0, o.M1)(),
                    n = (0, E.l)(),
                    l = (0, g.useMemo)(() => s || n.get("referrerUrl") || void 0, [s, n]);
                return (0, a.jsxs)("div", {
                    className: "flex flex-col p-4",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                (0, a.jsx)(F.z, {
                                    icon: (0, a.jsx)(D.Z, {}),
                                    onClick: () => {
                                        t.push(l || e);
                                    },
                                    variant: "primaryText",
                                    "aria-label": r.backToSpaces,
                                }),
                                (0, a.jsx)(O.x, { size: "headline1", weight: "bold", children: r.spaceAnalytics }),
                            ],
                        }),
                        (0, a.jsxs)("div", { className: "flex flex-col min-[988px]:flex-row gap-3", children: [(0, a.jsx)("div", { className: "min-[988px]:w-full", children: (0, a.jsx)(x, {}) }), (0, a.jsx)("div", { className: "min-[988px]:w-[400px]", children: (0, a.jsx)(p, {}) })] }),
                        (0, a.jsx)("hr", { className: "border-t border-gray-100 my-3" }),
                        (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl pt-4 pr-4 border border-gray-200 mb-4", children: [(0, a.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold pl-4", children: r.concurrentViewers }), (0, a.jsx)("div", { className: "h-[140px]", children: (0, a.jsx)(S, {}) })] }),
                        (0, a.jsxs)("div", { className: "grid grid-cols-1 min-[988px]:grid-cols-2 gap-4 mb-4", children: [(0, a.jsx)(z, {}), (0, a.jsx)(L, {})] }),
                    ],
                });
            }
            function T({ id: e, isMockData: s = !1, spacesOverviewUrl: t = "/analytics/spaces", referrerUrl: n }) {
                return (0, a.jsx)(r.py, { spaceId: e, isMockData: s, children: (0, a.jsx)(V, { spacesOverviewUrl: t, referrerUrl: n }) });
            }
        },
        47649: (e, s, t) => {
            t.d(s, { l: () => F });
            var a = t(552322),
                r = t(202784),
                n = t(407250),
                l = t(436059),
                i = t(323788),
                c = t(841707),
                d = t(470675),
                o = t(345343),
                x = t(933544),
                m = t(136048),
                u = t(844096),
                h = t(968025),
                p = t(634979),
                f = t(768246),
                b = t(393035),
                g = t(882040),
                j = t(682008),
                v = t(951547),
                y = t(16246),
                N = t(669833),
                w = t(796309),
                k = t(598705),
                S = t(430962),
                A = t(702024);
            function C({ id: e, title: s, date: t, duration: r, speakers: l, listeners: i, isSubscriberOnly: o = !1, scheduledStart: m, state: u, isAvailableForReplay: h = !1, subscriberCount: p, onViewSpaceAction: f, onViewSpaceAnalyticsAction: k }) {
                const { analytics: A } = (0, S.M1)();
                return (0, a.jsx)(
                    n.Zb,
                    {
                        className: "border-l-4 " + (o ? "border-l-magenta-500" : "border-l-purple-500"),
                        children: (0, a.jsx)(n.aY, {
                            className: "p-6",
                            children: (0, a.jsxs)("div", {
                                className: "flex flex-col gap-4 md:flex-row md:items-center",
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "flex-1 space-y-1",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    (0, a.jsx)("h3", {
                                                        className: "font-semibold cursor-pointer hover:underline",
                                                        onClick: (e) => {
                                                            e.stopPropagation(), k?.();
                                                        },
                                                        children: s ?? A.untitledVideo,
                                                    }),
                                                    o && (0, a.jsx)(N.O, { label: A.subscriberOnly, children: (0, a.jsx)("div", { children: (0, a.jsx)(b.Z, { className: "text-magenta-500" }) }) }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground", children: "Ended" === u ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.O, { label: A.Date, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: t })] }) }), (0, a.jsx)(N.O, { label: A.duration, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(d.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: r })] }) })] }) : m ? (0, a.jsx)(N.O, { label: A.scheduledStart, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(m) })] }) }) : null }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: "flex gap-2",
                                                children: (() => {
                                                    if (!u) return [];
                                                    const e = [];
                                                    return "Running" === u ? e.push((0, a.jsx)("div", { className: "bg-green-500/30 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: A.Live }, "live")) : "Ended" === u ? (h ? e.push((0, a.jsx)("div", { className: "bg-red-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: A.Recorded }, "recorded")) : e.push((0, a.jsx)("div", { className: "bg-gray-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: A.Ended }, "ended"))) : m && "Ended" !== u ? e.push((0, a.jsx)("div", { className: "bg-blue-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1 min-[988px]:mr-8", children: A.Scheduled }, "scheduled")) : e.push((0, a.jsx)("div", { className: "bg-purple-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: u }, "default")), e;
                                                })(),
                                            }),
                                            "Running" === u || "Ended" === u ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.O, { label: A.speakers, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(x.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: l })] }) }), (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(N.O, { label: A.listeners, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(g.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: i })] }) }) })] }) : (0, a.jsx)(a.Fragment, { children: null !== p && (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(N.O, { label: A.attendingSpace, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(j.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: p })] }) }) }) }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, w.cn)("size-8 p-0 rounded-full text-gray-1100 border transition-colors bg-background flex justify-center items-center ", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, "hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), k?.();
                                                },
                                                title: A.viewSpace,
                                                children: (0, a.jsx)(v.Z, { className: "size-5" }),
                                            }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, w.cn)("size-8 rounded-full border text-gray-1100 bg-background flex justify-center items-center transition-colors", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, " hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), f?.();
                                                },
                                                title: A.viewSpaceAnalytics,
                                                children: (0, a.jsx)(y.Z, { className: "size-5" }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    },
                    e,
                );
            }
            function L({ spaces: e, onViewSpaceAction: s, onViewSpaceAnalyticsAction: t, hasMoreData: n = !1, onLoadMore: l, isLoading: i = !1 }) {
                const c = (0, r.useRef)(null),
                    [d, o] = (0, r.useState)(!1);
                return (
                    (0, r.useEffect)(() => {
                        if (!i && d) {
                            const e = setTimeout(() => {
                                o(!1);
                            }, 300);
                            return () => clearTimeout(e);
                        }
                    }, [i, d]),
                    (0, r.useEffect)(() => {
                        if (i || !n || !l || d) return;
                        const e = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    e.isIntersecting && (o(!0), l());
                                });
                            },
                            { root: null, rootMargin: "100px", threshold: 0 },
                        );
                        return (
                            c.current && e.observe(c.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [i, n, l, d]),
                    (0, a.jsxs)("div", { className: "space-y-4", children: [e.map((e) => (0, a.jsx)(C, { ...e, state: e.state, isAvailableForReplay: e.isAvailableForReplay, isSubscriberOnly: 2 === e.audienceType, speakers: e.speakersCount, listeners: e.totalLiveListeners ?? 0, scheduledStart: e.scheduledStart ?? void 0, subscriberCount: e.subscriberCount, date: e.startedAt ? Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(e.startedAt) : "", duration: e.duration ? (0, k.LU)(e.duration) : "", onViewSpaceAction: s ? () => s(e.id) : void 0, onViewSpaceAnalyticsAction: t ? () => t(e.id) : void 0 }, e.id)), n && (0, a.jsx)("div", { ref: c, className: "flex justify-center py-4", children: i && (0, a.jsx)(A.P, { size: "small" }) })] })
                );
            }
            var M = t(413740);
            const R = (e) => {
                if ("undefined" == typeof window) return;
                const s = new URL(window.location.href);
                Object.entries(e).forEach(([e, t]) => {
                    t ? s.searchParams.set(e, t) : s.searchParams.delete(e);
                }),
                    window.history.replaceState({}, "", s.pathname + s.search);
            };
            function U({ sortField: e, sortDirection: s, onSortFieldChange: t, onSortDirectionChange: n }) {
                const { analytics: h } = (0, S.M1)(),
                    p = (0, r.useMemo)(
                        () => [
                            { value: "date", label: h.Date, icon: (0, a.jsx)(c.Z, { className: "size-5" }) },
                            { value: "duration", label: h.duration, icon: (0, a.jsx)(d.Z, { className: "size-5" }) },
                            { value: "listeners", label: h.listeners, icon: (0, a.jsx)(o.Z, { className: "size-5" }) },
                            { value: "speakers", label: h.speakers, icon: (0, a.jsx)(x.Z, { className: "size-5" }) },
                        ],
                        [h.Date, h.duration, h.listeners, h.speakers],
                    ),
                    f = p.find((s) => s.value === e);
                return (0, a.jsxs)("div", { className: "flex items-center gap-2 relative", children: [(0, a.jsx)(l.z, { size: "xSmallCompact", onClick: () => n("asc" === s ? "desc" : "asc"), className: "px-0 border-none bg-background", children: "asc" === s ? (0, a.jsx)(m.Z, { className: "size-5 text-gray-900" }) : (0, a.jsx)(u.Z, { className: "size-5 text-gray-900" }) }), (0, a.jsxs)(i.Ph, { value: e, onValueChange: (e) => t(e), children: [(0, a.jsx)(i.i4, { className: "bg-background text-subtext1 w-auto font-bold border-none pl-1 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, a.jsx)(i.ki, { children: f?.icon }) }), (0, a.jsx)(i.Bw, { children: p.map((e) => (0, a.jsx)(i.Ql, { value: e.value, children: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)("span", { className: "text-gray-700", children: e.icon }), (0, a.jsx)("span", { children: e.label })] }) }, e.value)) })] })] });
            }
            function z({ spaces: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                const l = (0, h.t)(),
                    c = (0, p.j)(),
                    d = (0, f.l)(),
                    { analytics: o } = (0, S.M1)(),
                    [x, m] = (0, r.useState)(!1),
                    [u, b] = (0, r.useState)("all"),
                    [g, j] = (0, r.useState)("date"),
                    [v, y] = (0, r.useState)("desc"),
                    { hasMoreData: N, onLoadMore: w, isLoading: k } = (0, M.BK)();
                (0, r.useEffect)(() => {
                    if (!x) {
                        const e = d.get("filter");
                        e && ["all", "live", "scheduled", "ended"].includes(e) && b(e);
                        const s = d.get("sort");
                        s && ["date", "listeners", "speakers", "duration"].includes(s) && j(s);
                        const t = d.get("dir");
                        t && ["asc", "desc"].includes(t) && y(t), m(!0);
                    }
                }, [x, d]),
                    (0, r.useEffect)(() => {
                        x && R({ filter: u, sort: g, dir: v });
                    }, [u, g, v, x]);
                const A = e.filter((e) => ("live" !== u || "Running" === e.state) && !!("scheduled" !== u || (e.scheduledStart && "Running" !== e.state && "Ended" !== e.state)) && ("ended" !== u || "Ended" === e.state)),
                    C = (0, r.useMemo)(
                        () =>
                            [...A].sort((e, s) => {
                                let t = 0;
                                switch (g) {
                                    case "date":
                                        t = (e.scheduledStart || e.startedAt || 0) - (s.scheduledStart || s.startedAt || 0);
                                        break;
                                    case "duration":
                                        t = (e.duration || 0) - (s.duration || 0);
                                        break;
                                    case "listeners":
                                        t = (e.totalLiveListeners || 0) - (s.totalLiveListeners || 0);
                                        break;
                                    case "speakers":
                                        t = e.speakersCount - s.speakersCount;
                                        break;
                                    default:
                                        t = 0;
                                }
                                return "asc" === v ? t : -t;
                            }),
                        [A, g, v],
                    );
                return (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                        (0, a.jsx)("div", { className: "sticky top-[-1px] z-10 bg-background [background-clip:padding-box] pt-[1px] mb-6", children: (0, a.jsxs)("div", { className: "flex justify-between items-center p-3 border-b border-gray-200", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsxs)(i.Ph, { value: u, onValueChange: b, children: [(0, a.jsx)(i.i4, { className: "w-[180px]", children: (0, a.jsx)(i.ki, { placeholder: o.filterSpaces }) }), (0, a.jsxs)(i.Bw, { children: [(0, a.jsx)(i.Ql, { value: "all", children: o.allContentTypes }), (0, a.jsx)(i.Ql, { value: "live", children: o.Live }), (0, a.jsx)(i.Ql, { value: "scheduled", children: o.Scheduled }), (0, a.jsx)(i.Ql, { value: "ended", children: o.Ended })] })] }) }), (0, a.jsx)("div", { className: "flex items-center gap-1 ml-auto", children: (0, a.jsx)(U, { sortField: g, sortDirection: v, onSortFieldChange: j, onSortDirectionChange: y }) })] }) }),
                        C.length > 0
                            ? (0, a.jsx)(L, {
                                  spaces: C,
                                  onViewSpaceAction: (e) => {
                                      window.open(t(e), "_blank");
                                  },
                                  onViewSpaceAnalyticsAction: (e) => {
                                      const t = s(e);
                                      if (t.startsWith("/")) {
                                          const e = `${window.location.origin}${c}?${d.toString()}`,
                                              s = new URL(t, window.location.origin);
                                          s.searchParams.set("referrerUrl", e), l.push(s.pathname + s.search);
                                      } else window.open(t, "_blank");
                                  },
                                  hasMoreData: N,
                                  onLoadMore: w,
                                  isLoading: k,
                              })
                            : (0, a.jsx)(n.Zb, { children: (0, a.jsx)(n.aY, { className: "flex items-center justify-center p-6", children: (0, a.jsx)("p", { className: "text-muted-foreground", children: o.noSpacesAvailableFilter }) }) }),
                    ],
                });
            }
            function F({ isMock: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                return (0, a.jsx)(M.br, { isMockData: e, children: (0, a.jsx)(O, { getSpaceAnalyticsUrl: s, getSpaceUrl: t }) });
            }
            function O({ getSpaceAnalyticsUrl: e, getSpaceUrl: s }) {
                const { spaces: t } = (0, M.BK)(),
                    { analytics: r } = (0, S.M1)();
                return (0, a.jsxs)("div", { className: "flex flex-col gap-6 p-4", children: [(0, a.jsx)("span", { className: "text-headline1 whitespace-nowrap font-bold", children: r.spacesOverview }), (0, a.jsx)(z, { spaces: t, getSpaceAnalyticsUrl: e, getSpaceUrl: s })] });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bda42643.0c640f2a.js.map
