"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bda42643"],
    {
        481899: (e, s, t) => {
            t.d(s, { o: () => _ });
            var a = t(552322),
                r = t(458872),
                n = t(993165),
                l = t(332161),
                i = t(905394),
                c = t(430962),
                d = t(163637),
                o = t(913577),
                x = t(981626),
                m = t(69716),
                h = t(679804),
                u = t(6937),
                p = t(589259),
                f = t(287326),
                b = t(31674),
                j = t(598705);
            function g() {
                const { spaceDetails: e } = (0, d.R5)(),
                    { analytics: s } = (0, c.M1)(),
                    t = e?.creator,
                    r = (e) => Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(e)),
                    n = 2 === e?.narrowCastSpaceType;
                return (0, a.jsxs)("div", {
                    className: (0, b.cn)("relative overflow-hidden", "w-full h-full max-w-[1024px] min-h-[3em] rounded-xl p-4 shadow-lg flex flex-col", "text-white"),
                    children: [
                        (0, a.jsx)("div", { className: (0, b.cn)("absolute inset-0 z-[-1]", "bg-gradient-to-b from-[#a17dff] to-[#8a65f2]", n && ["before:content-['']", "before:absolute before:inset-0", "before:bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]", "before:from-magenta-500/40", "before:to-transparent", "before:pointer-events-none"]) }),
                        (0, a.jsxs)("div", {
                            className: "flex items-center mb-2",
                            children: [
                                (0, a.jsxs)("div", { className: "flex items-center gap-1 flex-1 mr-2", children: [(0, a.jsx)(u.q, { url: t?.profileImageUrl, size: "medium" }), (0, a.jsx)(p.R, { name: t?.name || s.Unknown, badges: { verifiedType: t?.verifiedType, affiliation: t?.badge ? { label: t.badge.description || "", url: t.badge.url || "" } : void 0 }, withLink: "external", color: "white", size: "body" }), (0, a.jsx)("div", { className: "bg-white/35 text-white ml-1 px-2 py-1 rounded-md font-medium text-subtext1", children: s.Host }), 2 === e?.narrowCastSpaceType && (0, a.jsx)(f.O, { label: s.subscriberOnly, children: (0, a.jsx)("div", { className: "ml-1", children: (0, a.jsx)(o.Z, { className: "size-5 text-white" }) }) })] }),
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
                                                className: (0, b.cn)("size-8 rounded-full border border-white/50 text-white bg-white/10 flex justify-center items-center transition-colors hover:bg-white/20"),
                                                onClick: (s) => {
                                                    s.stopPropagation(), window.open(`https://x.com/i/spaces/${e.restId}/peek`, "_blank");
                                                },
                                                children: "Ended" === e.state && e.isAvailableForReplay ? (0, a.jsx)(x.Z, { className: "size-5" }) : (0, a.jsx)(m.Z, { className: "size-5" }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("h1", { className: "text-title4 font-bold mb-2 line-clamp-1 overflow-hidden", children: e?.title || s.untitledVideo }),
                        (0, a.jsxs)("div", { className: (0, b.cn)("text-subtext1 font-normal", e?.start && "max-[987px]:flex max-[987px]:justify-between max-[987px]:items-center"), children: [e?.scheduledStart && "Running" !== e.state && "Ended" !== e.state ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("span", { className: "font-medium", children: [s.ScheduledFor, " "] }), r(e.scheduledStart)] }) : e?.start ? (0, a.jsx)("span", { children: r(e.start) }) : "", e?.duration && (0, a.jsxs)("div", { className: "flex items-center gap-1 min-[988px]:hidden", children: [(0, a.jsx)(h.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: (0, j.LU)(e.duration) })] })] }),
                        e?.duration && (0, a.jsxs)("div", { className: "hidden min-[988px]:flex items-center gap-1 mt-auto ml-auto text-subtext1 font-normal", children: [(0, a.jsx)(h.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: (0, j.LU)(e.duration) })] }),
                    ],
                });
            }
            var v = t(917317);
            function y() {
                const { spaceDetails: e } = (0, d.R5)(),
                    { analytics: s } = (0, c.M1)(),
                    t = e?.metrics.totalParticipated || 0,
                    r = e?.peakConcurrentViewers || 0,
                    n = e?.metrics.totalReplayWatched || 0,
                    l = e?.subscriberCount || 0,
                    i = e?.isAvailableForReplay || !1,
                    o = e?.scheduledStart && !("Running" === e.state || "Ended" === e.state);
                return (0, a.jsxs)(v.Zb, { className: "w-full lg:w-[400px] bg-card text-card-foreground", children: [(0, a.jsx)(v.Ol, { className: "space-y-2", children: (0, a.jsx)(v.ll, { className: "text-headline2 font-normal line-clamp-2 max-h-[3em] break-words", children: s.spaceStats }) }), (0, a.jsx)(v.aY, { className: "space-y-4", children: o ? (0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.attendingSpace }), (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: l })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalParticipants }), (0, a.jsx)(f.O, { label: t.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, j.uf)(t) }) })] }), (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.peakConcurrentViewers }), (0, a.jsx)(f.O, { label: r.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, j.uf)(r) }) })] }), i && (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalReplayWatched }), (0, a.jsx)(f.O, { label: n.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, j.uf)(n) }) })] })] }) })] });
            }
            var N = t(72100);
            function w({ post: e, isLast: s }) {
                return (0, a.jsx)("div", { className: "rounded-xl [&>div]:hover:bg-gray-50 [&>div]:transition-colors [&>div]:duration-200 " + (s ? "max-md:[&>div]:border-b-0" : ""), children: (0, a.jsx)(N.S, { post: e }) });
            }
            function k() {
                const { analytics: e } = (0, c.M1)(),
                    { spaceDetails: s } = (0, d.R5)(),
                    t = s?.posts || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.postsContentType, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, j.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e, s) => (0, a.jsx)(w, { post: e, isLast: s === t.length - 1 }, e.id)) }) })] });
            }
            var S = t(322506),
                C = t(840489);
            function A({ speaker: e }) {
                const s = `https://x.com/${e.screenName}`;
                return (0, a.jsxs)(S.r, { href: s, target: "_blank", className: (0, C.Z)("flex items-center gap-3 p-3 md:rounded-xl md:border md:border-gray-50 cursor-pointer md:hover:bg-gray-50", "focus:outline-none focus-visible:outline-none active:outline-none", "[-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent]", "[touch-callout:none] [user-select:none]", "border-b border-gray-100 max-md:last:border-b-0"), children: [(0, a.jsx)(u.q, { screenName: e.screenName, size: "xLarge", url: e.profileImageUrl, withLink: "external" }), (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, a.jsx)(p.R, { badges: e.badges, name: e.name, size: "subtext1", withLink: "external" }), (0, a.jsxs)("div", { className: "text-subtext2 text-gray-700", children: ["@", e.screenName] })] })] });
            }
            function L() {
                const { analytics: e } = (0, c.M1)(),
                    { spaceDetails: s } = (0, d.R5)(),
                    t = s?.participants.speakers || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.speakers, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, j.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e) => (0, a.jsx)(A, { speaker: e }, e.id)) }) })] });
            }
            var z = t(643715),
                U = t(1468),
                R = t(202784);
            const { Area: D, CartesianGrid: F, XAxis: M, YAxis: O, AreaChart: Z } = z,
                E = (e) => {
                    const s = Math.floor(e / 60),
                        t = e % 60;
                    return 0 === s ? `${t}s` : `${s}:${t.toString().padStart(2, "0")}`;
                };
            function T() {
                const { spaceDetails: e } = (0, d.R5)(),
                    { analytics: s } = (0, c.M1)(),
                    t = (0, R.useMemo)(() => (e?.viewCountGraph && e.start ? e.viewCountGraph.map((e, s) => ({ viewers: e, seconds: s })) : []), [e]);
                return 0 === t.length
                    ? (0, a.jsx)("p", { className: "text-gray-600 mt-2 pl-4", children: s.pleaseCheckBackAgainLater })
                    : (0, a.jsx)(U.BO, {
                          className: "relative aspect-auto h-full min-h-[0] w-full select-none pe-2",
                          config: { viewers: { color: "hsl(var(--colors-purple-500))" } },
                          children: (0, a.jsxs)(Z, {
                              data: t,
                              margin: { bottom: 10, left: -10, right: 5, top: 5 },
                              children: [
                                  (0, a.jsx)("defs", { children: (0, a.jsxs)("linearGradient", { id: "viewersGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, a.jsx)("stop", { offset: "5%", stopColor: "hsl(var(--colors-purple-500) / 0.5)", stopOpacity: 0.8 }), (0, a.jsx)("stop", { offset: "95%", stopColor: "hsl(var(--colors-purple-500) / 0)", stopOpacity: 0 })] }) }),
                                  (0, a.jsx)(F, { strokeDasharray: "0", vertical: !1, stroke: "hsl(var(--colors-gray-100))" }),
                                  (0, a.jsx)(M, { dataKey: "seconds", tickLine: !1, axisLine: !1, className: "text-subtext3", minTickGap: 60, tickMargin: 8, tick: { fill: "hsl(var(--colors-gray-600))" }, tickFormatter: E }),
                                  (0, a.jsx)(O, { tickLine: !1, axisLine: !1, className: "text-subtext3", tickFormatter: (e) => (0, j.uf)(e), tick: { fill: "hsl(var(--colors-gray-600))" }, allowDecimals: !1 }),
                                  (0, a.jsx)(U.h7, {
                                      content: (0, a.jsx)(U.dg, {
                                          labelFormatter: (e, s) => {
                                              const t = s?.[0]?.payload;
                                              return t ? `Time: ${E(t.seconds)}` : "";
                                          },
                                          valueFormatter: (e) => (0, j.uf)(e),
                                      }),
                                  }),
                                  (0, a.jsx)(D, { type: "monotone", dataKey: "viewers", name: s.viewers, stroke: "hsl(var(--colors-purple-500))", fillOpacity: 1, fill: "url(#viewersGradient)" }),
                              ],
                          }),
                      });
            }
            function V({ spacesOverviewUrl: e = "/analytics/spaces", referrerUrl: s }) {
                const t = (0, i.d)(),
                    { analytics: d } = (0, c.M1)();
                return (0, a.jsxs)("div", {
                    className: "flex flex-col p-4",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                (0, a.jsx)(n.z, {
                                    icon: (0, a.jsx)(r.Z, {}),
                                    onClick: () => {
                                        t.push(s || e);
                                    },
                                    variant: "primaryText",
                                    "aria-label": d.backToSpaces,
                                }),
                                (0, a.jsx)(l.x, { size: "headline1", weight: "bold", children: d.spaceAnalytics }),
                            ],
                        }),
                        (0, a.jsxs)("div", { className: "flex flex-col min-[988px]:flex-row gap-3", children: [(0, a.jsx)("div", { className: "min-[988px]:w-full", children: (0, a.jsx)(g, {}) }), (0, a.jsx)("div", { className: "min-[988px]:w-[400px]", children: (0, a.jsx)(y, {}) })] }),
                        (0, a.jsx)("hr", { className: "border-t border-gray-100 my-3" }),
                        (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl pt-4 pr-4 border border-gray-200 mb-4", children: [(0, a.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold pl-4", children: d.concurrentViewers }), (0, a.jsx)("div", { className: "h-[140px]", children: (0, a.jsx)(T, {}) })] }),
                        (0, a.jsxs)("div", { className: "grid grid-cols-1 min-[988px]:grid-cols-2 gap-4 mb-4", children: [(0, a.jsx)(L, {}), (0, a.jsx)(k, {})] }),
                    ],
                });
            }
            function _({ id: e, isMockData: s = !1, spacesOverviewUrl: t = "/analytics/spaces", referrerUrl: r }) {
                return (0, a.jsx)(d.py, { spaceId: e, isMockData: s, children: (0, a.jsx)(V, { spacesOverviewUrl: t, referrerUrl: r }) });
            }
        },
        47649: (e, s, t) => {
            t.d(s, { l: () => F });
            var a = t(552322),
                r = t(202784),
                n = t(453436),
                l = t(679804),
                i = t(417957),
                c = t(907927),
                d = t(14313),
                o = t(97759),
                x = t(993165),
                m = t(917317),
                h = t(713990),
                u = t(905394),
                p = t(508251),
                f = t(604840),
                b = t(430962),
                j = t(413740),
                g = t(913577),
                v = t(434533),
                y = t(543005),
                N = t(995348),
                w = t(981626),
                k = t(287326),
                S = t(31674),
                C = t(598705),
                A = t(193686);
            function L({ id: e, title: s, date: t, duration: r, speakers: i, listeners: d, isSubscriberOnly: o = !1, scheduledStart: x, state: h, isAvailableForReplay: u = !1, subscriberCount: p, onViewSpaceAction: f, onViewSpaceAnalyticsAction: j }) {
                const { analytics: C } = (0, b.M1)();
                return (0, a.jsx)(
                    m.Zb,
                    {
                        className: "border-l-4 " + (o ? "border-l-fuchsia-600" : "border-l-purple-500"),
                        children: (0, a.jsx)(m.aY, {
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
                                                            e.stopPropagation(), j?.();
                                                        },
                                                        children: s ?? C.untitledVideo,
                                                    }),
                                                    o && (0, a.jsx)(k.O, { label: C.subscriberOnly, children: (0, a.jsx)("div", { children: (0, a.jsx)(g.Z, { className: "text-magenta-500" }) }) }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground", children: "Ended" === h ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(k.O, { label: C.Date, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(n.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: t })] }) }), (0, a.jsx)(k.O, { label: C.duration, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(l.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: r })] }) })] }) : x ? (0, a.jsx)(k.O, { label: C.scheduledStart, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(n.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(x) })] }) }) : null }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: "flex gap-2",
                                                children: (() => {
                                                    if (!h) return [];
                                                    const e = [];
                                                    return "Running" === h ? e.push((0, a.jsx)("div", { className: "bg-green-500/30 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: C.Live }, "live")) : "Ended" === h ? (u ? e.push((0, a.jsx)("div", { className: "bg-red-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: C.Recorded }, "recorded")) : e.push((0, a.jsx)("div", { className: "bg-gray-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: C.Ended }, "ended"))) : x && "Ended" !== h ? e.push((0, a.jsx)("div", { className: "bg-blue-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1 min-[988px]:mr-8", children: C.Scheduled }, "scheduled")) : e.push((0, a.jsx)("div", { className: "bg-purple-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: h }, "default")), e;
                                                })(),
                                            }),
                                            "Running" === h || "Ended" === h ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(k.O, { label: C.speakers, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: i })] }) }), (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(k.O, { label: C.listeners, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(v.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: d })] }) }) })] }) : (0, a.jsx)(a.Fragment, { children: null !== p && (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(k.O, { label: C.attendingSpace, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(y.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: p })] }) }) }) }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, S.cn)("size-8 p-0 rounded-full text-gray-1100 border transition-colors bg-background flex justify-center items-center ", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, "hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), j?.();
                                                },
                                                title: C.viewSpace,
                                                children: (0, a.jsx)(N.Z, { className: "size-5" }),
                                            }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, S.cn)("size-8 rounded-full border text-gray-1100 bg-background flex justify-center items-center transition-colors", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, " hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), f?.();
                                                },
                                                title: C.viewSpaceAnalytics,
                                                children: (0, a.jsx)(w.Z, { className: "size-5" }),
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
            function z({ spaces: e, onViewSpaceAction: s, onViewSpaceAnalyticsAction: t, hasMoreData: n = !1, onLoadMore: l, isLoading: i = !1 }) {
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
                    (0, a.jsxs)("div", { className: "space-y-4", children: [e.map((e) => (0, a.jsx)(L, { ...e, state: e.state, isAvailableForReplay: e.isAvailableForReplay, isSubscriberOnly: 2 === e.audienceType, speakers: e.speakersCount, listeners: e.totalLiveListeners ?? 0, scheduledStart: e.scheduledStart ?? void 0, subscriberCount: e.subscriberCount, date: e.startedAt ? Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(e.startedAt) : "", duration: e.duration ? (0, C.LU)(e.duration) : "", onViewSpaceAction: s ? () => s(e.id) : void 0, onViewSpaceAnalyticsAction: t ? () => t(e.id) : void 0 }, e.id)), n && (0, a.jsx)("div", { ref: c, className: "flex justify-center py-4", children: i && (0, a.jsx)(A.P, { size: "small" }) })] })
                );
            }
            const U = (e) => {
                if ("undefined" == typeof window) return;
                const s = new URL(window.location.href);
                Object.entries(e).forEach(([e, t]) => {
                    t ? s.searchParams.set(e, t) : s.searchParams.delete(e);
                }),
                    window.history.replaceState({}, "", s.pathname + s.search);
            };
            function R({ sortField: e, sortDirection: s, onSortFieldChange: t, onSortDirectionChange: m }) {
                const { analytics: u } = (0, b.M1)(),
                    p = (0, r.useMemo)(
                        () => [
                            { value: "date", label: u.Date, icon: (0, a.jsx)(n.Z, { className: "size-5" }) },
                            { value: "duration", label: u.duration, icon: (0, a.jsx)(l.Z, { className: "size-5" }) },
                            { value: "listeners", label: u.listeners, icon: (0, a.jsx)(i.Z, { className: "size-5" }) },
                            { value: "speakers", label: u.speakers, icon: (0, a.jsx)(c.Z, { className: "size-5" }) },
                        ],
                        [u.Date, u.duration, u.listeners, u.speakers],
                    ),
                    f = p.find((s) => s.value === e);
                return (0, a.jsxs)("div", { className: "flex items-center gap-2 relative", children: [(0, a.jsx)(x.z, { size: "xSmallCompact", onClick: () => m("asc" === s ? "desc" : "asc"), className: "px-0 border-none bg-background", children: "asc" === s ? (0, a.jsx)(d.Z, { className: "size-5 text-gray-900" }) : (0, a.jsx)(o.Z, { className: "size-5 text-gray-900" }) }), (0, a.jsxs)(h.Ph, { value: e, onValueChange: (e) => t(e), children: [(0, a.jsx)(h.i4, { className: "bg-background text-subtext1 w-auto font-bold border-none pl-1 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, a.jsx)(h.ki, { children: f?.icon }) }), (0, a.jsx)(h.Bw, { children: p.map((e) => (0, a.jsx)(h.Ql, { value: e.value, children: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)("span", { className: "text-gray-700", children: e.icon }), (0, a.jsx)("span", { children: e.label })] }) }, e.value)) })] })] });
            }
            function D({ spaces: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                const n = (0, u.d)(),
                    l = (0, p.j)(),
                    i = (0, f.l)(),
                    { analytics: c } = (0, b.M1)(),
                    [d, o] = (0, r.useState)(!1),
                    [x, g] = (0, r.useState)("all"),
                    [v, y] = (0, r.useState)("date"),
                    [N, w] = (0, r.useState)("desc"),
                    { hasMoreData: k, onLoadMore: S, isLoading: C } = (0, j.BK)();
                (0, r.useEffect)(() => {
                    if (!d) {
                        const e = i.get("filter");
                        e && ["all", "live", "scheduled", "ended"].includes(e) && g(e);
                        const s = i.get("sort");
                        s && ["date", "listeners", "speakers", "duration"].includes(s) && y(s);
                        const t = i.get("dir");
                        t && ["asc", "desc"].includes(t) && w(t), o(!0);
                    }
                }, [d, i]),
                    (0, r.useEffect)(() => {
                        d && U({ filter: x, sort: v, dir: N });
                    }, [x, v, N, d]);
                const A = e.filter((e) => ("live" !== x || "Running" === e.state) && !!("scheduled" !== x || (e.scheduledStart && "Running" !== e.state && "Ended" !== e.state)) && ("ended" !== x || "Ended" === e.state)),
                    L = (0, r.useMemo)(
                        () =>
                            [...A].sort((e, s) => {
                                let t = 0;
                                switch (v) {
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
                                return "asc" === N ? t : -t;
                            }),
                        [A, v, N],
                    );
                return (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "sticky top-0 z-10 bg-background [background-clip:padding-box] pt-[1px]",
                            children: [
                                (0, a.jsx)("div", { className: "max-[987px]:block min-[988px]:hidden", children: (0, a.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, a.jsxs)("div", { className: "flex items-center justify-between", children: [(0, a.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, a.jsxs)(h.Ph, { value: x, onValueChange: g, children: [(0, a.jsx)(h.i4, { className: "bg-background text-subtext1 relative w-auto overflow-hidden font-bold border-none px-0 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, a.jsx)(h.ki, { placeholder: c.filterSpaces }) }), (0, a.jsxs)(h.Bw, { children: [(0, a.jsx)(h.Ql, { value: "all", children: c.allContentTypes }), (0, a.jsx)(h.Ql, { value: "live", children: c.Live }), (0, a.jsx)(h.Ql, { value: "scheduled", children: c.Scheduled }), (0, a.jsx)(h.Ql, { value: "ended", children: c.Ended })] })] }) }), (0, a.jsx)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: (0, a.jsx)(R, { sortField: v, sortDirection: N, onSortFieldChange: y, onSortDirectionChange: w }) })] }) }) }),
                                (0, a.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, a.jsxs)("div", { className: "flex justify-between items-center p-3 border-b border-gray-200", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsxs)(h.Ph, { value: x, onValueChange: g, children: [(0, a.jsx)(h.i4, { className: "w-[180px]", children: (0, a.jsx)(h.ki, { placeholder: c.filterSpaces }) }), (0, a.jsxs)(h.Bw, { children: [(0, a.jsx)(h.Ql, { value: "all", children: c.allContentTypes }), (0, a.jsx)(h.Ql, { value: "live", children: c.Live }), (0, a.jsx)(h.Ql, { value: "scheduled", children: c.Scheduled }), (0, a.jsx)(h.Ql, { value: "ended", children: c.Ended })] })] }) }), (0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(R, { sortField: v, sortDirection: N, onSortFieldChange: y, onSortDirectionChange: w }) })] }) }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: "px-2 pt-6 overflow-y-auto h-[calc(100vh-60px)]",
                            children:
                                L.length > 0
                                    ? (0, a.jsx)(z, {
                                          spaces: L,
                                          onViewSpaceAction: (e) => {
                                              window.open(t(e), "_blank");
                                          },
                                          onViewSpaceAnalyticsAction: (e) => {
                                              const t = s(e);
                                              if (t.startsWith("/")) {
                                                  const e = l + (i ? `?${i.toString()}` : ""),
                                                      s = `${t}?referrerUrl=${encodeURIComponent(e)}`;
                                                  n.push(s);
                                              } else window.open(t, "_blank");
                                          },
                                          hasMoreData: k,
                                          onLoadMore: S,
                                          isLoading: C,
                                      })
                                    : (0, a.jsx)(m.Zb, { children: (0, a.jsx)(m.aY, { className: "flex items-center justify-center p-6", children: (0, a.jsx)("p", { className: "text-muted-foreground", children: c.noSpacesAvailableFilter }) }) }),
                        }),
                    ],
                });
            }
            function F({ isMock: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                return (0, a.jsx)(j.br, { isMockData: e, children: (0, a.jsx)(M, { getSpaceAnalyticsUrl: s, getSpaceUrl: t }) });
            }
            function M({ getSpaceAnalyticsUrl: e, getSpaceUrl: s }) {
                const { spaces: t } = (0, j.BK)();
                return (0, a.jsx)("div", { className: "flex flex-col min-[988px]:gap-6 min-[988px]:p-0", children: (0, a.jsx)(D, { spaces: t, getSpaceAnalyticsUrl: e, getSpaceUrl: s }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bda42643.45d5529a.js.map
