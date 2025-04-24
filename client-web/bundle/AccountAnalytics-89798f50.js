"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-89798f50"],
    {
        33340: (e, a, s) => {
            s.d(a, { R: () => C });
            var l = s(552322),
                i = s(202784),
                t = s(702024),
                n = s(941204),
                c = s(323788),
                r = s(951547),
                d = s(97360),
                o = s(713014),
                x = s(774534),
                m = s(151634),
                u = s(57301),
                h = s(140213),
                p = s(251161),
                j = s(542372),
                v = s(864897),
                b = s(881120),
                g = s(598705),
                w = s(430962),
                N = s(969088),
                f = s(82143),
                y = s(840489),
                M = s(995961),
                T = s(511974),
                k = s(991732);
            function C({ showFollowersChart: e = !1, hideSelector: a = !1 }) {
                const { metrics: s } = (0, N.dQ)(),
                    { analytics: j } = (0, w.M1)(),
                    { audienceSelectedMetric: v, setAudienceSelectedMetric: b } = (0, N.dQ)(),
                    g = (0, i.useMemo)(
                        () => [
                            { value: "Impressions", label: j.ImpressionsLabel, icon: r.Z },
                            { value: "Likes", label: j.LikesLabel, icon: d.Z },
                            { value: "Replies", label: j.RepliesLabel, icon: o.Z },
                            { value: "Retweets", label: j.RetweetsLabel, icon: x.Z },
                            { value: "Bookmark", label: j.BookmarkLabel, icon: m.Z },
                            { value: "Share", label: j.ShareLabel, icon: u.Z },
                            { value: "ProfileVisits", label: j.ProfileVisitsLabel, icon: h.Z },
                            { value: "Follows", label: j.FollowsLabel, icon: p.Z },
                        ],
                        [j],
                    ),
                    f = (0, i.useMemo)(() => {
                        if (!s?.audienceMetrics) return !1;
                        const { rawAudienceMetrics: e, rawCountryMetrics: a } = s.audienceMetrics;
                        return e.length > 0 || a.length > 0;
                    }, [s]);
                return s && s.audienceMetrics
                    ? (0, l.jsxs)("div", {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: "flex items-center justify-between mb-6",
                                  children: [
                                      (0, l.jsx)("div", { className: "flex items-center gap-2", children: (0, l.jsx)(n.x, { size: "headline2", className: "text-muted-foreground max-[988px]:hidden", children: j.audienceInsights }) }),
                                      !a &&
                                          (0, l.jsx)("div", {
                                              className: "flex items-center gap-2",
                                              children: (0, l.jsxs)(c.Ph, {
                                                  value: v,
                                                  onValueChange: b,
                                                  children: [
                                                      (0, l.jsx)(c.i4, { className: "w-[180px]", children: (0, l.jsx)(c.ki, {}) }),
                                                      (0, l.jsx)(c.Bw, {
                                                          children: g.map((e) => {
                                                              const a = e.icon;
                                                              return (0, l.jsx)(c.Ql, { value: e.value, children: (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [(0, l.jsx)(a, { className: "w-4 h-4 text-gray-900" }), (0, l.jsx)("span", { children: e.label })] }) }, e.value);
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                  ],
                              }),
                              f ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)("div", { className: "hidden min-[988px]:grid grid-cols-1 gap-6 min-[988px]:grid-cols-2 max-w-[1400px] mx-auto w-full", children: [(0, l.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, l.jsx)("div", { className: "order-3 min-[988px]:order-none", children: (0, l.jsx)(A, {}) }), (0, l.jsx)("div", { className: "order-4 min-[988px]:order-none", children: (0, l.jsx)(S, {}) })] }), (0, l.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, l.jsx)("div", { className: "order-1 min-[988px]:order-none", children: (0, l.jsx)(Z, {}) }), (0, l.jsx)("div", { className: "order-2 min-[988px]:order-none", children: (0, l.jsx)(V, {}) }), e && (0, l.jsx)("div", { className: "order-5 min-[988px]:order-none", children: (0, l.jsx)(L, {}) })] })] }), (0, l.jsx)("div", { className: "min-[988px]:hidden grid grid-cols-1 gap-4 max-w-[1400px] mx-auto w-full", children: (0, l.jsxs)("div", { className: "grid grid-cols-2 gap-4 col-span-2", children: [(0, l.jsx)("div", { className: "order-1 col-span-1", children: (0, l.jsx)(A, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-2 col-span-1", children: (0, l.jsx)(Z, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-3 col-span-1", children: (0, l.jsx)(S, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-4 col-span-1", children: (0, l.jsx)(V, { compactView: !0 }) }), e && (0, l.jsx)("div", { className: "order-5 col-span-2", children: (0, l.jsx)(L, { compactView: !0 }) })] }) })] }) : (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, l.jsx)("div", { className: "min-[988px]:w-[calc(50%-8px)]", children: (0, l.jsx)(n.x, { className: "text-gray-600", children: j.pleaseCheckBackAgainLater }) }) }),
                          ],
                      })
                    : (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto flex items-center justify-center transition-opacity delay-100 duration-200", children: (0, l.jsx)(t.P, { size: "large" }) });
            }
            function Z({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.dQ)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, i.useState)(!1),
                    r = (0, k.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, i.useMemo)(() => ({ Male: t.genderMale, Female: t.genderFemale, Unknown: t.genderNotSpecified }), [t.genderMale, t.genderFemale, t.genderNotSpecified]),
                    x = (0, i.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "gender", s);
                        return (0, g.Nn)(e, f._N).map((e) => ({ ...e, name: o[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    m = (0, i.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!x.length) return null;
                const u = x.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 })),
                    h = u.length > 0 && u.some((e) => e.value > 0);
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, y.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.genderTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.genderTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, l.jsx)(T.Z, {}),
                                            }),
                                    ],
                                }),
                                h && !e && (0, l.jsx)("p", { className: "text-gray-600 mb-4 text-subtext2", children: t.genderSubtitle }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(M.cu, { open: n, onOpenChange: c, children: (0, l.jsx)(M.hC, { title: (0, l.jsxs)("div", { children: [t.genderTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", m, ")"] })] }), children: (0, l.jsxs)("div", { className: "pt-1", children: [h && (0, l.jsx)("p", { className: "text-gray-600 mb-2 text-subtext2", children: t.genderSubtitle }), (0, l.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 })] }) }) }),
                    ],
                });
            }
            function V({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.dQ)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, i.useState)(!1),
                    r = (0, k.T)(),
                    d = (0, i.useMemo)(() => ({ iOS: t.deviceIOS, Android: t.deviceAndroid, Web: t.deviceWeb, Other: t.deviceOther }), [t.deviceIOS, t.deviceAndroid, t.deviceWeb, t.deviceOther]),
                    o = () => {
                        c(!0);
                    },
                    x = (0, i.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "device", s);
                        return (0, g.Nn)(e, f.he).map((e) => ({ ...e, name: d[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, d]),
                    m = (0, i.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!x.length) return null;
                const u = x.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, y.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.deviceTitle,
                            onClick: e ? o : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.deviceTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), o();
                                                },
                                                children: (0, l.jsx)(T.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(M.cu, { open: n, onOpenChange: c, children: (0, l.jsx)(M.hC, { title: (0, l.jsxs)("div", { children: [t.deviceTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", m, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
            function A({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.dQ)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, i.useState)(!1),
                    r = (0, k.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, i.useMemo)(() => ({ Age13to17: t.age13to17, Age18to24: t.age18to24, Age25to34: t.age25to34, Age35To44: t.age35to44, Age45To54: t.age45to54, Age55To64: t.age55to64, AgeOver65: t.age65plus }), [t]),
                    x = (0, i.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "age", s),
                            l = new Map(e.map((e) => [e.name, { count: e.count, formattedCount: e.formattedCount, value: e.value }]));
                        return f.S9.map((e) => {
                            const a = l.get(e);
                            return { label: o[e] || e, value: a?.count || 0, formattedCount: a?.formattedCount || "0", count: a?.count || 0 };
                        });
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    m = (0, i.useMemo)(() => r[s]?.label || s, [r, s]);
                return x.length
                    ? (0, l.jsxs)("div", {
                          className: "relative isolate",
                          children: [
                              (0, l.jsxs)("section", {
                                  className: (0, y.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                                  "aria-label": t.ageTitle,
                                  onClick: e ? d : void 0,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: (0, y.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                          children: [
                                              (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.ageTitle }),
                                              e &&
                                                  (0, l.jsx)("button", {
                                                      type: "button",
                                                      className: "text-gray-400 cursor-pointer",
                                                      "aria-label": "Expand chart",
                                                      onClick: (e) => {
                                                          e.stopPropagation(), d();
                                                      },
                                                      children: (0, l.jsx)(T.Z, {}),
                                                  }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", { children: (0, l.jsx)(j.Z, { data: x, title: t.ageTitle, sortByValue: !1, compactView: e, showLabelsInCompactView: !0 }) }),
                                  ],
                              }),
                              (0, l.jsx)(M.cu, { open: n, onOpenChange: c, children: (0, l.jsx)(M.hC, { title: (0, l.jsxs)("div", { children: [t.ageTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", m, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(j.Z, { data: x, title: t.ageTitle, sortByValue: !1, showLabelsInCompactView: !0 }) }) }) }),
                          ],
                      })
                    : null;
            }
            function S({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.dQ)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, i.useState)(!1),
                    r = (0, k.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, i.useMemo)(() => (a?.audienceMetrics?.rawCountryMetrics ? (0, g.od)(a.audienceMetrics.rawCountryMetrics, s) : []), [a?.audienceMetrics?.rawCountryMetrics, s]),
                    x = (0, i.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!o.length) return null;
                const m = o.map((e) => ({ label: b.e[e.name.toLowerCase()] || e.name, value: e.value, icon: "Other" !== e.name ? (0, g.bK)(e.name) : void 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, y.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.countryTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, y.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.countryTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, l.jsx)(T.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)(j.Z, { data: m, title: t.countryTitle, maxItems: 5, compactView: e, showLabelsInCompactView: !1 }) }),
                            ],
                        }),
                        (0, l.jsx)(M.cu, { open: n, onOpenChange: c, children: (0, l.jsx)(M.hC, { title: (0, l.jsxs)("div", { children: [t.countryTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1 overflow-y-auto max-h-[70vh]", children: (0, l.jsx)(j.Z, { data: m, title: t.countryTitle, compactView: !1 }) }) }) }),
                    ],
                });
            }
            function L({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.dQ)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, i.useState)(!1),
                    r = (0, k.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, i.useMemo)(() => ({ inNetwork: t.inNetwork, outNetwork: t.outNetwork }), [t.inNetwork, t.outNetwork]),
                    x = (0, i.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "network", s);
                        return (0, g.Nn)(e, f.Dx).map((e) => ({ ...e, name: o[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    m = (0, i.useMemo)(() => r[s]?.label || s, [r, s]);
                if ("Follows" === s || !x.length) return null;
                const u = x.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, y.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.networkTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, y.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.networkTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, l.jsx)(T.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(M.cu, { open: n, onOpenChange: c, children: (0, l.jsx)(M.hC, { title: (0, l.jsxs)("div", { children: [t.networkTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", m, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
        },
        700009: (e, a, s) => {
            s.d(a, { q: () => w });
            var l = s(552322),
                i = s(941204),
                t = s(969088),
                n = s(378850),
                c = s(306823),
                r = s(323788),
                d = s(202784),
                o = s(991732),
                x = s(951547),
                m = s(97360),
                u = s(713014),
                h = s(250415),
                p = s(151634),
                j = s(57301),
                v = s(140213),
                b = s(251161),
                g = s(430962);
            function w({ className: e, hideSelector: a = !1 }) {
                const { first48HoursData: s, overviewSelectedMetric: w, setOverviewSelectedMetric: N, showRealtimeChart: f, isPostOlderThan48Hours: y } = (0, t.dQ)(),
                    M = (0, o.T)(),
                    { analytics: T } = (0, g.M1)(),
                    k = (0, d.useMemo)(() => {
                        const e = w.toLowerCase();
                        return s[e] || [];
                    }, [w, s]),
                    C = (0, d.useMemo)(() => M[w]?.label || w, [M, w]),
                    Z = (0, d.useMemo)(
                        () => [
                            { value: "Impressions", label: T.ImpressionsLabel, icon: x.Z },
                            { value: "Likes", label: T.LikesLabel, icon: m.Z },
                            { value: "Replies", label: T.RepliesLabel, icon: u.Z },
                            { value: "Retweets", label: T.RetweetsLabel, icon: h.Z },
                            { value: "Bookmark", label: T.BookmarkLabel, icon: p.Z },
                            { value: "Share", label: T.ShareLabel, icon: j.Z },
                            { value: "ProfileVisits", label: T.ProfileVisitsLabel, icon: v.Z },
                            { value: "Follows", label: T.FollowsLabel, icon: b.Z },
                        ],
                        [T],
                    ),
                    V = 0 === k.length,
                    A = f ?? !1,
                    S = (0, d.useMemo)(() => {
                        const e = A ? "grid-cols-2" : "grid-cols-1";
                        return (0, l.jsx)("div", {
                            className: "max-[988px]:hidden min-[988px]:flex min-[988px]:flex-col gap-6",
                            children: (0, l.jsxs)("div", {
                                className: "w-full flex flex-col gap-6",
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            (0, l.jsx)("div", { className: "flex items-center gap-2", children: (0, l.jsx)(i.x, { size: "headline2", className: "text-muted-foreground", children: T.activityBreakdown }) }),
                                            (0, l.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, l.jsxs)(r.Ph, {
                                                    value: w,
                                                    onValueChange: N,
                                                    children: [
                                                        (0, l.jsx)(r.i4, { className: "w-[180px]", children: (0, l.jsx)(r.ki, {}) }),
                                                        (0, l.jsx)(r.Bw, {
                                                            children: Z.map((e) => {
                                                                const a = e.icon;
                                                                return (0, l.jsx)(r.Ql, { value: e.value, children: (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [(0, l.jsx)(a, { className: "w-4 h-4 text-gray-700" }), (0, l.jsx)("span", { children: e.label })] }) }, e.value);
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", { className: `grid ${e} gap-6`, children: [A && (y ? (0, l.jsx)("div", { className: "h-[240px]", children: (0, l.jsx)(c.C, { className: "h-full" }) }) : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: "h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.lastHour, liveIndicatorTooltip: T.liveDataTitle, dataType: "minutely" }) }), (0, l.jsx)("div", { className: "h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.last48Hours, liveIndicatorTooltip: T.liveDataTitle, dataType: "hourly" }) })] })), (y || !A) && (0, l.jsx)("div", { className: "h-[240px]", children: V ? (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, l.jsx)("div", { className: "w-full", children: (0, l.jsx)(i.x, { className: "text-gray-600", children: T.noDataAvailable }) }) }) : (0, l.jsx)(n._, { className: "h-full", data: k, label: C, title: T.first48Hours }) })] }),
                                ],
                            }),
                        });
                    }, [A, y, T, w, N, Z, V, k, C]),
                    L = (0, d.useMemo)(
                        () =>
                            (0, l.jsxs)("div", {
                                className: "min-[988px]:hidden flex flex-col gap-4",
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            (0, l.jsx)("div", { className: "flex items-center gap-2", children: (0, l.jsx)(i.x, { size: "headline2", className: "text-muted-foreground max-[988px]:hidden", children: T.activityBreakdown }) }),
                                            !a &&
                                                (0, l.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, l.jsxs)(r.Ph, {
                                                        value: w,
                                                        onValueChange: N,
                                                        children: [
                                                            (0, l.jsx)(r.i4, { className: "w-[180px]", children: (0, l.jsx)(r.ki, {}) }),
                                                            (0, l.jsx)(r.Bw, {
                                                                children: Z.map((e) => {
                                                                    const a = e.icon;
                                                                    return (0, l.jsx)(r.Ql, { value: e.value, children: (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [(0, l.jsx)(a, { className: "w-4 h-4 text-gray-700" }), (0, l.jsx)("span", { children: e.label })] }) }, e.value);
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                        ],
                                    }),
                                    A && (y ? (0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.C, { className: "h-full" }) }) : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.last48Hours, liveIndicatorTooltip: T.liveDataTitle, dataType: "hourly" }) }), (0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.lastHour, liveIndicatorTooltip: T.liveDataTitle, dataType: "minutely" }) })] })),
                                    (y || !A) && (0, l.jsx)("div", { className: "w-full h-[240px]", children: V ? (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, l.jsx)("div", { className: "w-full", children: (0, l.jsx)(i.x, { className: "text-gray-600", children: T.noDataAvailable }) }) }) : (0, l.jsx)(n._, { className: "h-full", data: k, label: C, title: T.first48Hours }) }),
                                ],
                            }),
                        [A, y, T, a, w, N, Z, V, k, C],
                    );
                return (0, l.jsxs)("div", { className: `flex flex-col gap-4 ${e || ""}`, children: [S, L] });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-89798f50.f8ac745a.js.map
