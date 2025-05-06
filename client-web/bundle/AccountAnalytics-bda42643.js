"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bda42643"],
    {
        481899: (e, s, t) => {
            t.d(s, { o: () => _ });
            var a = t(552322),
                r = t(163637),
                n = t(913577),
                l = t(981626),
                i = t(69716),
                c = t(679804),
                d = t(26429),
                o = t(703612),
                x = t(669833),
                m = t(796309),
                h = t(430962),
                u = t(598705);
            function p() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, h.M1)(),
                    t = e?.creator,
                    p = (e) => Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(e)),
                    f = 2 === e?.narrowCastSpaceType;
                return (0, a.jsxs)("div", {
                    className: (0, m.cn)("relative overflow-hidden", "w-full h-full max-w-[1024px] min-h-[3em] rounded-xl p-4 shadow-lg flex flex-col", "text-white"),
                    children: [
                        (0, a.jsx)("div", { className: (0, m.cn)("absolute inset-0 z-[-1]", "bg-gradient-to-b from-[#a17dff] to-[#8a65f2]", f && ["before:content-['']", "before:absolute before:inset-0", "before:bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]", "before:from-magenta-500/40", "before:to-transparent", "before:pointer-events-none"]) }),
                        (0, a.jsxs)("div", {
                            className: "flex items-center mb-2",
                            children: [
                                (0, a.jsxs)("div", { className: "flex items-center gap-1 flex-1 mr-2", children: [(0, a.jsx)(d.q, { url: t?.profileImageUrl, size: "medium" }), (0, a.jsx)(o.R, { name: t?.name || s.Unknown, badges: { verifiedType: t?.verifiedType, affiliation: t?.badge ? { label: t.badge.description || "", url: t.badge.url || "" } : void 0 }, withLink: "external", color: "white", size: "body" }), (0, a.jsx)("div", { className: "bg-white/35 text-white ml-1 px-2 py-1 rounded-md font-medium text-subtext1", children: s.Host }), 2 === e?.narrowCastSpaceType && (0, a.jsx)(x.O, { label: s.subscriberOnly, children: (0, a.jsx)("div", { className: "ml-1", children: (0, a.jsx)(n.Z, { className: "size-5 text-white" }) }) })] }),
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
                                                className: (0, m.cn)("size-8 rounded-full border border-white/50 text-white bg-white/10 flex justify-center items-center transition-colors hover:bg-white/20"),
                                                onClick: (s) => {
                                                    s.stopPropagation(), window.open(`https://x.com/i/spaces/${e.restId}/peek`, "_blank");
                                                },
                                                children: "Ended" === e.state && e.isAvailableForReplay ? (0, a.jsx)(l.Z, { className: "size-5" }) : (0, a.jsx)(i.Z, { className: "size-5" }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("h1", { className: "text-title4 font-bold mb-2 line-clamp-1 overflow-hidden", children: e?.title || s.untitledVideo }),
                        (0, a.jsxs)("div", { className: (0, m.cn)("text-subtext1 font-normal", e?.start && "max-[987px]:flex max-[987px]:justify-between max-[987px]:items-center"), children: [e?.scheduledStart && "Running" !== e.state && "Ended" !== e.state ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("span", { className: "font-medium", children: [s.ScheduledFor, " "] }), p(e.scheduledStart)] }) : e?.start ? (0, a.jsx)("span", { children: p(e.start) }) : "", e?.duration && (0, a.jsxs)("div", { className: "flex items-center gap-1 min-[988px]:hidden", children: [(0, a.jsx)(c.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: (0, u.LU)(e.duration) })] })] }),
                        e?.duration && (0, a.jsxs)("div", { className: "hidden min-[988px]:flex items-center gap-1 mt-auto ml-auto text-subtext1 font-normal", children: [(0, a.jsx)(c.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: (0, u.LU)(e.duration) })] }),
                    ],
                });
            }
            var f = t(407250);
            function b() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, h.M1)(),
                    t = e?.metrics.totalParticipated || 0,
                    n = e?.peakConcurrentViewers || 0,
                    l = e?.metrics.totalReplayWatched || 0,
                    i = e?.subscriberCount || 0,
                    c = e?.isAvailableForReplay || !1,
                    d = e?.scheduledStart && !("Running" === e.state || "Ended" === e.state);
                return (0, a.jsxs)(f.Zb, { className: "w-full lg:w-[400px] bg-card text-card-foreground", children: [(0, a.jsx)(f.Ol, { className: "space-y-2", children: (0, a.jsx)(f.ll, { className: "text-headline2 font-normal line-clamp-2 max-h-[3em] break-words", children: s.spaceStats }) }), (0, a.jsx)(f.aY, { className: "space-y-4", children: d ? (0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.attendingSpace }), (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: i })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("div", { className: "flex justify-between items-center", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalParticipants }), (0, a.jsx)(x.O, { label: t.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(t) }) })] }), (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.peakConcurrentViewers }), (0, a.jsx)(x.O, { label: n.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(n) }) })] }), c && (0, a.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, a.jsx)("span", { className: "text-body2 text-muted-foreground", children: s.totalReplayWatched }), (0, a.jsx)(x.O, { label: l.toLocaleString(), children: (0, a.jsx)("span", { className: "text-headline2 text-foreground", children: (0, u.uf)(l) }) })] })] }) })] });
            }
            var j = t(643715),
                g = t(829233),
                v = t(202784);
            const { Area: y, CartesianGrid: N, XAxis: w, YAxis: k, AreaChart: S } = j,
                C = (e) => {
                    const s = Math.floor(e / 60),
                        t = e % 60;
                    return 0 === s ? `${t}s` : `${s}:${t.toString().padStart(2, "0")}`;
                };
            function A() {
                const { spaceDetails: e } = (0, r.R5)(),
                    { analytics: s } = (0, h.M1)(),
                    t = (0, v.useMemo)(() => (e?.viewCountGraph && e.start ? e.viewCountGraph.map((e, s) => ({ viewers: e, seconds: s })) : []), [e]);
                return 0 === t.length
                    ? (0, a.jsx)("p", { className: "text-gray-600 mt-2 pl-4", children: s.pleaseCheckBackAgainLater })
                    : (0, a.jsx)(g.BO, {
                          className: "relative aspect-auto h-full min-h-[0] w-full select-none pe-2",
                          config: { viewers: { color: "hsl(var(--colors-purple-500))" } },
                          children: (0, a.jsxs)(S, {
                              data: t,
                              margin: { bottom: 10, left: -10, right: 5, top: 5 },
                              children: [
                                  (0, a.jsx)("defs", { children: (0, a.jsxs)("linearGradient", { id: "viewersGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, a.jsx)("stop", { offset: "5%", stopColor: "hsl(var(--colors-purple-500) / 0.5)", stopOpacity: 0.8 }), (0, a.jsx)("stop", { offset: "95%", stopColor: "hsl(var(--colors-purple-500) / 0)", stopOpacity: 0 })] }) }),
                                  (0, a.jsx)(N, { strokeDasharray: "0", vertical: !1, stroke: "hsl(var(--colors-gray-100))" }),
                                  (0, a.jsx)(w, { dataKey: "seconds", tickLine: !1, axisLine: !1, className: "text-subtext3", minTickGap: 60, tickMargin: 8, tick: { fill: "hsl(var(--colors-gray-600))" }, tickFormatter: C }),
                                  (0, a.jsx)(k, { tickLine: !1, axisLine: !1, className: "text-subtext3", tickFormatter: (e) => (0, u.uf)(e), tick: { fill: "hsl(var(--colors-gray-600))" }, allowDecimals: !1 }),
                                  (0, a.jsx)(g.h7, {
                                      content: (0, a.jsx)(g.dg, {
                                          labelFormatter: (e, s) => {
                                              const t = s?.[0]?.payload;
                                              return t ? `Time: ${C(t.seconds)}` : "";
                                          },
                                          valueFormatter: (e) => (0, u.uf)(e),
                                      }),
                                  }),
                                  (0, a.jsx)(y, { type: "monotone", dataKey: "viewers", name: s.viewers, stroke: "hsl(var(--colors-purple-500))", fillOpacity: 1, fill: "url(#viewersGradient)" }),
                              ],
                          }),
                      });
            }
            var L = t(72100);
            function z({ post: e, isLast: s }) {
                return (0, a.jsx)("div", { className: "rounded-xl [&>div]:hover:bg-gray-50 [&>div]:transition-colors [&>div]:duration-200 " + (s ? "max-md:[&>div]:border-b-0" : ""), children: (0, a.jsx)(L.S, { post: e }) });
            }
            function U() {
                const { analytics: e } = (0, h.M1)(),
                    { spaceDetails: s } = (0, r.R5)(),
                    t = s?.posts || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.postsContentType, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, u.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e, s) => (0, a.jsx)(z, { post: e, isLast: s === t.length - 1 }, e.id)) }) })] });
            }
            var R = t(812115),
                D = t(840489);
            function F({ speaker: e }) {
                const s = `https://x.com/${e.screenName}`;
                return (0, a.jsxs)(R.r, { href: s, target: "_blank", className: (0, D.Z)("flex items-center gap-3 p-3 md:rounded-xl md:border md:border-gray-50 cursor-pointer md:hover:bg-gray-50", "focus:outline-none focus-visible:outline-none active:outline-none", "[-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent]", "[touch-callout:none] [user-select:none]", "border-b border-gray-100 max-md:last:border-b-0"), children: [(0, a.jsx)(d.q, { screenName: e.screenName, size: "xLarge", url: e.profileImageUrl, withLink: "external" }), (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, a.jsx)(o.R, { badges: e.badges, name: e.name, size: "subtext1", withLink: "external" }), (0, a.jsxs)("div", { className: "text-subtext2 text-gray-700", children: ["@", e.screenName] })] })] });
            }
            function M() {
                const { analytics: e } = (0, h.M1)(),
                    { spaceDetails: s } = (0, r.R5)(),
                    t = s?.participants.speakers || [];
                return (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, a.jsx)("div", { className: "flex items-center justify-between pb-2.5", children: (0, a.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.speakers, " ", (0, a.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, u.uf)(t.length), ")"] })] }) }), (0, a.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === t.length ? (0, a.jsx)("p", { className: "text-gray-600 mt-2", children: e.pleaseCheckBackAgainLater }) : (0, a.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: t.map((e) => (0, a.jsx)(F, { speaker: e }, e.id)) }) })] });
            }
            var O = t(436059),
                Z = t(941204),
                E = t(458872),
                T = t(968025);
            function V({ spacesOverviewUrl: e = "/analytics/spaces", referrerUrl: s }) {
                const t = (0, T.t)(),
                    { analytics: r } = (0, h.M1)();
                return (0, a.jsxs)("div", {
                    className: "flex flex-col p-4",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                (0, a.jsx)(O.z, {
                                    icon: (0, a.jsx)(E.Z, {}),
                                    onClick: () => {
                                        t.push(s || e);
                                    },
                                    variant: "primaryText",
                                    "aria-label": r.backToSpaces,
                                }),
                                (0, a.jsx)(Z.x, { size: "headline1", weight: "bold", children: r.spaceAnalytics }),
                            ],
                        }),
                        (0, a.jsxs)("div", { className: "flex flex-col min-[988px]:flex-row gap-3", children: [(0, a.jsx)("div", { className: "min-[988px]:w-full", children: (0, a.jsx)(p, {}) }), (0, a.jsx)("div", { className: "min-[988px]:w-[400px]", children: (0, a.jsx)(b, {}) })] }),
                        (0, a.jsx)("hr", { className: "border-t border-gray-100 my-3" }),
                        (0, a.jsxs)("div", { className: "bg-gray-0 rounded-xl pt-4 pr-4 border border-gray-200 mb-4", children: [(0, a.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold pl-4", children: r.concurrentViewers }), (0, a.jsx)("div", { className: "h-[140px]", children: (0, a.jsx)(A, {}) })] }),
                        (0, a.jsxs)("div", { className: "grid grid-cols-1 min-[988px]:grid-cols-2 gap-4 mb-4", children: [(0, a.jsx)(M, {}), (0, a.jsx)(U, {})] }),
                    ],
                });
            }
            function _({ id: e, isMockData: s = !1, spacesOverviewUrl: t = "/analytics/spaces", referrerUrl: n }) {
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
                c = t(453436),
                d = t(679804),
                o = t(417957),
                x = t(907927),
                m = t(14313),
                h = t(97759),
                u = t(968025),
                p = t(634979),
                f = t(768246),
                b = t(913577),
                j = t(434533),
                g = t(543005),
                v = t(995348),
                y = t(981626),
                N = t(669833),
                w = t(796309),
                k = t(598705),
                S = t(430962),
                C = t(702024);
            function A({ id: e, title: s, date: t, duration: r, speakers: l, listeners: i, isSubscriberOnly: o = !1, scheduledStart: m, state: h, isAvailableForReplay: u = !1, subscriberCount: p, onViewSpaceAction: f, onViewSpaceAnalyticsAction: k }) {
                const { analytics: C } = (0, S.M1)();
                return (0, a.jsx)(
                    n.Zb,
                    {
                        className: "border-l-4 " + (o ? "border-l-fuchsia-600" : "border-l-purple-500"),
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
                                                        children: s ?? C.untitledVideo,
                                                    }),
                                                    o && (0, a.jsx)(N.O, { label: C.subscriberOnly, children: (0, a.jsx)("div", { children: (0, a.jsx)(b.Z, { className: "text-magenta-500" }) }) }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground", children: "Ended" === h ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.O, { label: C.Date, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: t })] }) }), (0, a.jsx)(N.O, { label: C.duration, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(d.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: r })] }) })] }) : m ? (0, a.jsx)(N.O, { label: C.scheduledStart, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "numeric" }).format(m) })] }) }) : null }),
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
                                                    return "Running" === h ? e.push((0, a.jsx)("div", { className: "bg-green-500/30 text-white px-2 py-1 rounded-md font-medium text-subtext1", children: C.Live }, "live")) : "Ended" === h ? (u ? e.push((0, a.jsx)("div", { className: "bg-red-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: C.Recorded }, "recorded")) : e.push((0, a.jsx)("div", { className: "bg-gray-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: C.Ended }, "ended"))) : m && "Ended" !== h ? e.push((0, a.jsx)("div", { className: "bg-blue-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1 min-[988px]:mr-8", children: C.Scheduled }, "scheduled")) : e.push((0, a.jsx)("div", { className: "bg-purple-500/30 text-text px-2 py-1 rounded-md font-medium text-subtext1", children: h }, "default")), e;
                                                })(),
                                            }),
                                            "Running" === h || "Ended" === h ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.O, { label: C.speakers, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(x.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: l })] }) }), (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(N.O, { label: C.listeners, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(j.Z, { className: "size-3.5" }), (0, a.jsx)("span", { children: i })] }) }) })] }) : (0, a.jsx)(a.Fragment, { children: null !== p && (0, a.jsx)("div", { className: "flex items-end gap-1 text-gray-1100", children: (0, a.jsx)(N.O, { label: C.attendingSpace, children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(g.Z, { className: "h-3.5 w-3.5" }), (0, a.jsx)("span", { children: p })] }) }) }) }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, w.cn)("size-8 p-0 rounded-full text-gray-1100 border transition-colors bg-background flex justify-center items-center ", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, "hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), k?.();
                                                },
                                                title: C.viewSpace,
                                                children: (0, a.jsx)(v.Z, { className: "size-5" }),
                                            }),
                                            (0, a.jsx)("button", {
                                                type: "button",
                                                className: (0, w.cn)("size-8 rounded-full border text-gray-1100 bg-background flex justify-center items-center transition-colors", { "hover:text-magenta-500 hover:bg-magenta-500/10": o, " hover:text-purple-500 hover:bg-purple-500/10": !o }),
                                                onClick: (e) => {
                                                    e.stopPropagation(), f?.();
                                                },
                                                title: C.viewSpaceAnalytics,
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
                    (0, a.jsxs)("div", { className: "space-y-4", children: [e.map((e) => (0, a.jsx)(A, { ...e, state: e.state, isAvailableForReplay: e.isAvailableForReplay, isSubscriberOnly: 2 === e.audienceType, speakers: e.speakersCount, listeners: e.totalLiveListeners ?? 0, scheduledStart: e.scheduledStart ?? void 0, subscriberCount: e.subscriberCount, date: e.startedAt ? Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(e.startedAt) : "", duration: e.duration ? (0, k.LU)(e.duration) : "", onViewSpaceAction: s ? () => s(e.id) : void 0, onViewSpaceAnalyticsAction: t ? () => t(e.id) : void 0 }, e.id)), n && (0, a.jsx)("div", { ref: c, className: "flex justify-center py-4", children: i && (0, a.jsx)(C.P, { size: "small" }) })] })
                );
            }
            var z = t(413740);
            const U = (e) => {
                if ("undefined" == typeof window) return;
                const s = new URL(window.location.href);
                Object.entries(e).forEach(([e, t]) => {
                    t ? s.searchParams.set(e, t) : s.searchParams.delete(e);
                }),
                    window.history.replaceState({}, "", s.pathname + s.search);
            };
            function R({ sortField: e, sortDirection: s, onSortFieldChange: t, onSortDirectionChange: n }) {
                const { analytics: u } = (0, S.M1)(),
                    p = (0, r.useMemo)(
                        () => [
                            { value: "date", label: u.Date, icon: (0, a.jsx)(c.Z, { className: "size-5" }) },
                            { value: "duration", label: u.duration, icon: (0, a.jsx)(d.Z, { className: "size-5" }) },
                            { value: "listeners", label: u.listeners, icon: (0, a.jsx)(o.Z, { className: "size-5" }) },
                            { value: "speakers", label: u.speakers, icon: (0, a.jsx)(x.Z, { className: "size-5" }) },
                        ],
                        [u.Date, u.duration, u.listeners, u.speakers],
                    ),
                    f = p.find((s) => s.value === e);
                return (0, a.jsxs)("div", { className: "flex items-center gap-2 relative", children: [(0, a.jsx)(l.z, { size: "xSmallCompact", onClick: () => n("asc" === s ? "desc" : "asc"), className: "px-0 border-none bg-background", children: "asc" === s ? (0, a.jsx)(m.Z, { className: "size-5 text-gray-900" }) : (0, a.jsx)(h.Z, { className: "size-5 text-gray-900" }) }), (0, a.jsxs)(i.Ph, { value: e, onValueChange: (e) => t(e), children: [(0, a.jsx)(i.i4, { className: "bg-background text-subtext1 w-auto font-bold border-none pl-1 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, a.jsx)(i.ki, { children: f?.icon }) }), (0, a.jsx)(i.Bw, { children: p.map((e) => (0, a.jsx)(i.Ql, { value: e.value, children: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [(0, a.jsx)("span", { className: "text-gray-700", children: e.icon }), (0, a.jsx)("span", { children: e.label })] }) }, e.value)) })] })] });
            }
            function D({ spaces: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                const l = (0, u.t)(),
                    c = (0, p.j)(),
                    d = (0, f.l)(),
                    { analytics: o } = (0, S.M1)(),
                    [x, m] = (0, r.useState)(!1),
                    [h, b] = (0, r.useState)("all"),
                    [j, g] = (0, r.useState)("date"),
                    [v, y] = (0, r.useState)("desc"),
                    { hasMoreData: N, onLoadMore: w, isLoading: k } = (0, z.BK)();
                (0, r.useEffect)(() => {
                    if (!x) {
                        const e = d.get("filter");
                        e && ["all", "live", "scheduled", "ended"].includes(e) && b(e);
                        const s = d.get("sort");
                        s && ["date", "listeners", "speakers", "duration"].includes(s) && g(s);
                        const t = d.get("dir");
                        t && ["asc", "desc"].includes(t) && y(t), m(!0);
                    }
                }, [x, d]),
                    (0, r.useEffect)(() => {
                        x && U({ filter: h, sort: j, dir: v });
                    }, [h, j, v, x]);
                const C = e.filter((e) => ("live" !== h || "Running" === e.state) && !!("scheduled" !== h || (e.scheduledStart && "Running" !== e.state && "Ended" !== e.state)) && ("ended" !== h || "Ended" === e.state)),
                    A = (0, r.useMemo)(
                        () =>
                            [...C].sort((e, s) => {
                                let t = 0;
                                switch (j) {
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
                        [C, j, v],
                    );
                return (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "sticky top-0 z-10 bg-background [background-clip:padding-box] pt-[1px]",
                            children: [
                                (0, a.jsx)("div", { className: "max-[987px]:block min-[988px]:hidden", children: (0, a.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, a.jsxs)("div", { className: "flex items-center justify-between", children: [(0, a.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, a.jsxs)(i.Ph, { value: h, onValueChange: b, children: [(0, a.jsx)(i.i4, { className: "bg-background text-subtext1 relative w-auto overflow-hidden font-bold border-none px-0 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, a.jsx)(i.ki, { placeholder: o.filterSpaces }) }), (0, a.jsxs)(i.Bw, { children: [(0, a.jsx)(i.Ql, { value: "all", children: o.allContentTypes }), (0, a.jsx)(i.Ql, { value: "live", children: o.Live }), (0, a.jsx)(i.Ql, { value: "scheduled", children: o.Scheduled }), (0, a.jsx)(i.Ql, { value: "ended", children: o.Ended })] })] }) }), (0, a.jsx)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: (0, a.jsx)(R, { sortField: j, sortDirection: v, onSortFieldChange: g, onSortDirectionChange: y }) })] }) }) }),
                                (0, a.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, a.jsxs)("div", { className: "flex justify-between items-center p-3 border-b border-gray-200", children: [(0, a.jsx)("div", { className: "flex-shrink-0", children: (0, a.jsxs)(i.Ph, { value: h, onValueChange: b, children: [(0, a.jsx)(i.i4, { className: "w-[180px]", children: (0, a.jsx)(i.ki, { placeholder: o.filterSpaces }) }), (0, a.jsxs)(i.Bw, { children: [(0, a.jsx)(i.Ql, { value: "all", children: o.allContentTypes }), (0, a.jsx)(i.Ql, { value: "live", children: o.Live }), (0, a.jsx)(i.Ql, { value: "scheduled", children: o.Scheduled }), (0, a.jsx)(i.Ql, { value: "ended", children: o.Ended })] })] }) }), (0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(R, { sortField: j, sortDirection: v, onSortFieldChange: g, onSortDirectionChange: y }) })] }) }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: "px-2 pt-6 overflow-y-auto h-[calc(100vh-60px)]",
                            children:
                                A.length > 0
                                    ? (0, a.jsx)(L, {
                                          spaces: A,
                                          onViewSpaceAction: (e) => {
                                              window.open(t(e), "_blank");
                                          },
                                          onViewSpaceAnalyticsAction: (e) => {
                                              const t = s(e);
                                              if (t.startsWith("/")) {
                                                  const e = c + (d ? `?${d.toString()}` : ""),
                                                      s = `${t}?referrerUrl=${encodeURIComponent(e)}`;
                                                  l.push(s);
                                              } else window.open(t, "_blank");
                                          },
                                          hasMoreData: N,
                                          onLoadMore: w,
                                          isLoading: k,
                                      })
                                    : (0, a.jsx)(n.Zb, { children: (0, a.jsx)(n.aY, { className: "flex items-center justify-center p-6", children: (0, a.jsx)("p", { className: "text-muted-foreground", children: o.noSpacesAvailableFilter }) }) }),
                        }),
                    ],
                });
            }
            function F({ isMock: e, getSpaceAnalyticsUrl: s, getSpaceUrl: t }) {
                return (0, a.jsx)(z.br, { isMockData: e, children: (0, a.jsx)(M, { getSpaceAnalyticsUrl: s, getSpaceUrl: t }) });
            }
            function M({ getSpaceAnalyticsUrl: e, getSpaceUrl: s }) {
                const { spaces: t } = (0, z.BK)();
                return (0, a.jsx)("div", { className: "flex flex-col min-[988px]:gap-6 min-[988px]:p-0", children: (0, a.jsx)(D, { spaces: t, getSpaceAnalyticsUrl: e, getSpaceUrl: s }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bda42643.8d94073a.js.map
