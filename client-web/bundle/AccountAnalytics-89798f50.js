"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-89798f50"],
    {
        33340: (e, a, s) => {
            s.d(a, { R: () => Z });
            var i = s(552322),
                l = s(202784),
                t = s(702024),
                n = s(941204),
                c = s(323788),
                r = s(951547),
                d = s(97360),
                o = s(713014),
                m = s(774534),
                x = s(151634),
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
                M = s(840489),
                y = s(995961),
                k = s(511974),
                C = s(991732);
            function Z({ showFollowersChart: e = !1, hideSelector: a = !1 }) {
                const { metrics: s } = (0, N.h)(),
                    { analytics: j } = (0, w.M1)(),
                    { audienceSelectedMetric: v, setAudienceSelectedMetric: b } = (0, N.h)(),
                    g = (0, l.useMemo)(
                        () => [
                            { value: "Impressions", label: j.ImpressionsLabel, icon: r.Z },
                            { value: "Likes", label: j.LikesLabel, icon: d.Z },
                            { value: "Replies", label: j.RepliesLabel, icon: o.Z },
                            { value: "Retweets", label: j.RetweetsLabel, icon: m.Z },
                            { value: "Bookmark", label: j.BookmarkLabel, icon: x.Z },
                            { value: "Share", label: j.ShareLabel, icon: u.Z },
                            { value: "ProfileVisits", label: j.ProfileVisitsLabel, icon: h.Z },
                            { value: "Follows", label: j.FollowsLabel, icon: p.Z },
                        ],
                        [j],
                    ),
                    f = (0, l.useMemo)(() => {
                        if (!s?.audienceMetrics) return !1;
                        const { rawAudienceMetrics: e, rawCountryMetrics: a } = s.audienceMetrics;
                        return e.length > 0 || a.length > 0;
                    }, [s]);
                return s && s.audienceMetrics
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: "flex items-center justify-between mb-6",
                                  children: [
                                      (0, i.jsx)("div", { className: "flex items-center gap-2", children: (0, i.jsx)(n.x, { size: "headline2", className: "text-muted-foreground max-[988px]:hidden", children: j.audienceInsights }) }),
                                      !a &&
                                          (0, i.jsx)("div", {
                                              className: "flex items-center gap-2",
                                              children: (0, i.jsxs)(c.Ph, {
                                                  value: v,
                                                  onValueChange: b,
                                                  children: [
                                                      (0, i.jsx)(c.i4, { className: "w-[180px]", children: (0, i.jsx)(c.ki, {}) }),
                                                      (0, i.jsx)(c.Bw, {
                                                          children: g.map((e) => {
                                                              const a = e.icon;
                                                              return (0, i.jsx)(c.Ql, { value: e.value, children: (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [(0, i.jsx)(a, { className: "w-4 h-4 text-gray-900" }), (0, i.jsx)("span", { children: e.label })] }) }, e.value);
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                  ],
                              }),
                              f ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: "hidden min-[988px]:grid grid-cols-1 gap-6 min-[988px]:grid-cols-2 max-w-[1400px] mx-auto w-full", children: [(0, i.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, i.jsx)("div", { className: "order-3 min-[988px]:order-none", children: (0, i.jsx)(V, {}) }), (0, i.jsx)("div", { className: "order-4 min-[988px]:order-none", children: (0, i.jsx)(A, {}) })] }), (0, i.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, i.jsx)("div", { className: "order-1 min-[988px]:order-none", children: (0, i.jsx)(T, {}) }), (0, i.jsx)("div", { className: "order-2 min-[988px]:order-none", children: (0, i.jsx)(L, {}) }), e && (0, i.jsx)("div", { className: "order-5 min-[988px]:order-none", children: (0, i.jsx)(S, {}) })] })] }), (0, i.jsx)("div", { className: "min-[988px]:hidden grid grid-cols-1 gap-4 max-w-[1400px] mx-auto w-full", children: (0, i.jsxs)("div", { className: "grid grid-cols-2 gap-4 col-span-2", children: [(0, i.jsx)("div", { className: "order-1 col-span-1", children: (0, i.jsx)(V, { compactView: !0 }) }), (0, i.jsx)("div", { className: "order-2 col-span-1", children: (0, i.jsx)(T, { compactView: !0 }) }), (0, i.jsx)("div", { className: "order-3 col-span-1", children: (0, i.jsx)(A, { compactView: !0 }) }), (0, i.jsx)("div", { className: "order-4 col-span-1", children: (0, i.jsx)(L, { compactView: !0 }) }), e && (0, i.jsx)("div", { className: "order-5 col-span-2", children: (0, i.jsx)(S, { compactView: !0 }) })] }) })] }) : (0, i.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, i.jsx)("div", { className: "min-[988px]:w-[calc(50%-8px)]", children: (0, i.jsx)(n.x, { className: "text-gray-600", children: j.pleaseCheckBackAgainLater }) }) }),
                          ],
                      })
                    : (0, i.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto flex items-center justify-center transition-opacity delay-100 duration-200", children: (0, i.jsx)(t.P, { size: "large" }) });
            }
            function T({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.h)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, l.useState)(!1),
                    r = (0, C.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, l.useMemo)(() => ({ Male: t.genderMale, Female: t.genderFemale, Unknown: t.genderNotSpecified }), [t.genderMale, t.genderFemale, t.genderNotSpecified]),
                    m = (0, l.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "gender", s);
                        return (0, g.Nn)(e, f._N).map((e) => ({ ...e, name: o[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    x = (0, l.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!m.length) return null;
                const u = m.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 })),
                    h = u.length > 0 && u.some((e) => e.value > 0);
                return (0, i.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, i.jsxs)("section", {
                            className: (0, M.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.genderTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        (0, i.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.genderTitle }),
                                        e &&
                                            (0, i.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, i.jsx)(k.Z, {}),
                                            }),
                                    ],
                                }),
                                h && !e && (0, i.jsx)("p", { className: "text-gray-600 mb-4 text-subtext2", children: t.genderSubtitle }),
                                (0, i.jsx)("div", { children: (0, i.jsx)("div", { children: (0, i.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, i.jsx)(y.cu, { open: n, onOpenChange: c, children: (0, i.jsx)(y.hC, { title: (0, i.jsxs)("div", { children: [t.genderTitle, (0, i.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, i.jsxs)("div", { className: "pt-1", children: [h && (0, i.jsx)("p", { className: "text-gray-600 mb-2 text-subtext2", children: t.genderSubtitle }), (0, i.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 })] }) }) }),
                    ],
                });
            }
            function L({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.h)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, l.useState)(!1),
                    r = (0, C.T)(),
                    d = (0, l.useMemo)(() => ({ iOS: t.deviceIOS, Android: t.deviceAndroid, Web: t.deviceWeb, Other: t.deviceOther }), [t.deviceIOS, t.deviceAndroid, t.deviceWeb, t.deviceOther]),
                    o = () => {
                        c(!0);
                    },
                    m = (0, l.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "device", s);
                        return (0, g.Nn)(e, f.he).map((e) => ({ ...e, name: d[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, d]),
                    x = (0, l.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!m.length) return null;
                const u = m.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, i.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, i.jsxs)("section", {
                            className: (0, M.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.deviceTitle,
                            onClick: e ? o : void 0,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        (0, i.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.deviceTitle }),
                                        e &&
                                            (0, i.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), o();
                                                },
                                                children: (0, i.jsx)(k.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, i.jsx)("div", { children: (0, i.jsx)("div", { children: (0, i.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, i.jsx)(y.cu, { open: n, onOpenChange: c, children: (0, i.jsx)(y.hC, { title: (0, i.jsxs)("div", { children: [t.deviceTitle, (0, i.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, i.jsx)("div", { className: "pt-1", children: (0, i.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
            function V({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.h)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, l.useState)(!1),
                    r = (0, C.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, l.useMemo)(() => ({ Age13to17: t.age13to17, Age18to24: t.age18to24, Age25to34: t.age25to34, Age35To44: t.age35to44, Age45To54: t.age45to54, Age55To64: t.age55to64, AgeOver65: t.age65plus }), [t]),
                    m = (0, l.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "age", s),
                            i = new Map(e.map((e) => [e.name, { count: e.count, formattedCount: e.formattedCount, value: e.value }]));
                        return f.S9.map((e) => {
                            const a = i.get(e);
                            return { label: o[e] || e, value: a?.count || 0, formattedCount: a?.formattedCount || "0", count: a?.count || 0 };
                        });
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    x = (0, l.useMemo)(() => r[s]?.label || s, [r, s]);
                return m.length
                    ? (0, i.jsxs)("div", {
                          className: "relative isolate",
                          children: [
                              (0, i.jsxs)("section", {
                                  className: (0, M.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                                  "aria-label": t.ageTitle,
                                  onClick: e ? d : void 0,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: (0, M.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                          children: [
                                              (0, i.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.ageTitle }),
                                              e &&
                                                  (0, i.jsx)("button", {
                                                      type: "button",
                                                      className: "text-gray-400 cursor-pointer",
                                                      "aria-label": "Expand chart",
                                                      onClick: (e) => {
                                                          e.stopPropagation(), d();
                                                      },
                                                      children: (0, i.jsx)(k.Z, {}),
                                                  }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", { children: (0, i.jsx)(j.Z, { data: m, title: t.ageTitle, sortByValue: !1, compactView: e, showLabelsInCompactView: !0 }) }),
                                  ],
                              }),
                              (0, i.jsx)(y.cu, { open: n, onOpenChange: c, children: (0, i.jsx)(y.hC, { title: (0, i.jsxs)("div", { children: [t.ageTitle, (0, i.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, i.jsx)("div", { className: "pt-1", children: (0, i.jsx)(j.Z, { data: m, title: t.ageTitle, sortByValue: !1, showLabelsInCompactView: !0 }) }) }) }),
                          ],
                      })
                    : null;
            }
            function A({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.h)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, l.useState)(!1),
                    r = (0, C.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, l.useMemo)(() => (a?.audienceMetrics?.rawCountryMetrics ? (0, g.od)(a.audienceMetrics.rawCountryMetrics, s) : []), [a?.audienceMetrics?.rawCountryMetrics, s]),
                    m = (0, l.useMemo)(() => r[s]?.label || s, [r, s]);
                if (!o.length) return null;
                const x = o.map((e) => ({ label: b.e[e.name.toLowerCase()] || e.name, value: e.value, icon: "Other" !== e.name ? (0, g.bK)(e.name) : void 0 }));
                return (0, i.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, i.jsxs)("section", {
                            className: (0, M.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.countryTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: (0, M.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, i.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.countryTitle }),
                                        e &&
                                            (0, i.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, i.jsx)(k.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, i.jsx)("div", { children: (0, i.jsx)(j.Z, { data: x, title: t.countryTitle, maxItems: 5, compactView: e, showLabelsInCompactView: !1 }) }),
                            ],
                        }),
                        (0, i.jsx)(y.cu, { open: n, onOpenChange: c, children: (0, i.jsx)(y.hC, { title: (0, i.jsxs)("div", { children: [t.countryTitle, (0, i.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", m, ")"] })] }), children: (0, i.jsx)("div", { className: "pt-1 overflow-y-auto max-h-[70vh]", children: (0, i.jsx)(j.Z, { data: x, title: t.countryTitle, compactView: !1 }) }) }) }),
                    ],
                });
            }
            function S({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, N.h)(),
                    { analytics: t } = (0, w.M1)(),
                    [n, c] = (0, l.useState)(!1),
                    r = (0, C.T)(),
                    d = () => {
                        c(!0);
                    },
                    o = (0, l.useMemo)(() => ({ inNetwork: t.inNetwork, outNetwork: t.outNetwork }), [t.inNetwork, t.outNetwork]),
                    m = (0, l.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, g.ZT)(a.audienceMetrics.rawAudienceMetrics, "network", s);
                        return (0, g.Nn)(e, f.Dx).map((e) => ({ ...e, name: o[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, o]),
                    x = (0, l.useMemo)(() => r[s]?.label || s, [r, s]);
                if ("Follows" === s || !m.length) return null;
                const u = m.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, i.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, i.jsxs)("section", {
                            className: (0, M.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": t.networkTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: (0, M.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, i.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: t.networkTitle }),
                                        e &&
                                            (0, i.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, i.jsx)(k.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, i.jsx)("div", { children: (0, i.jsx)("div", { children: (0, i.jsx)(v.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, i.jsx)(y.cu, { open: n, onOpenChange: c, children: (0, i.jsx)(y.hC, { title: (0, i.jsxs)("div", { children: [t.networkTitle, (0, i.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, i.jsx)("div", { className: "pt-1", children: (0, i.jsx)(v.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
        },
        700009: (e, a, s) => {
            s.d(a, { q: () => w });
            var i = s(552322),
                l = s(941204),
                t = s(969088),
                n = s(378850),
                c = s(306823),
                r = s(323788),
                d = s(202784),
                o = s(991732),
                m = s(951547),
                x = s(97360),
                u = s(713014),
                h = s(250415),
                p = s(151634),
                j = s(57301),
                v = s(140213),
                b = s(251161),
                g = s(430962);
            function w({ className: e, hideSelector: a = !1 }) {
                const { first48HoursData: s } = (0, t.h)(),
                    { overviewSelectedMetric: w, setOverviewSelectedMetric: N, realtimeHourlyData: f, realtimeMinutelyData: M, isRealtimeLoading: y, showRealtimeChart: k } = (0, t.h)(),
                    C = (0, o.T)(),
                    { analytics: Z } = (0, g.M1)(),
                    T = (0, d.useMemo)(() => {
                        const e = w.toLowerCase();
                        return s[e] || [];
                    }, [w, s]),
                    L = (0, d.useMemo)(() => C[w]?.label || w, [C, w]),
                    V = (0, d.useMemo)(
                        () => [
                            { value: "Impressions", label: Z.ImpressionsLabel, icon: m.Z },
                            { value: "Likes", label: Z.LikesLabel, icon: x.Z },
                            { value: "Replies", label: Z.RepliesLabel, icon: u.Z },
                            { value: "Retweets", label: Z.RetweetsLabel, icon: h.Z },
                            { value: "Bookmark", label: Z.BookmarkLabel, icon: p.Z },
                            { value: "Share", label: Z.ShareLabel, icon: j.Z },
                            { value: "ProfileVisits", label: Z.ProfileVisitsLabel, icon: v.Z },
                            { value: "Follows", label: Z.FollowsLabel, icon: b.Z },
                        ],
                        [Z],
                    ),
                    A = 0 === T.length,
                    S = k ?? !1;
                return (0, i.jsxs)("div", {
                    className: `flex flex-col gap-4 ${e || ""}`,
                    children: [
                        (0, i.jsx)("div", {
                            className: "max-[988px]:hidden min-[988px]:flex min-[988px]:flex-col gap-6",
                            children: (0, i.jsxs)("div", {
                                className: "w-full flex flex-col gap-6",
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            (0, i.jsx)("div", { className: "flex items-center gap-2", children: (0, i.jsx)(l.x, { size: "headline2", className: "text-muted-foreground", children: Z.activityBreakdown }) }),
                                            (0, i.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, i.jsxs)(r.Ph, {
                                                    value: w,
                                                    onValueChange: N,
                                                    children: [
                                                        (0, i.jsx)(r.i4, { className: "w-[180px]", children: (0, i.jsx)(r.ki, {}) }),
                                                        (0, i.jsx)(r.Bw, {
                                                            children: V.map((e) => {
                                                                const a = e.icon;
                                                                return (0, i.jsx)(r.Ql, { value: e.value, children: (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [(0, i.jsx)(a, { className: "w-4 h-4 text-gray-700" }), (0, i.jsx)("span", { children: e.label })] }) }, e.value);
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", { className: `grid ${S ? "grid-cols-2" : "grid-cols-1"} gap-6`, children: [S && (0, i.jsx)("div", { className: "h-[240px]", children: (0, i.jsx)(c.C, { className: "h-full", hourlyData: f, minutelyData: M, isLoading: y, metricLabel: L }) }), (0, i.jsx)("div", { className: "h-[240px]", children: A ? (0, i.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, i.jsx)("div", { className: "w-full", children: (0, i.jsx)(l.x, { className: "text-gray-600", children: Z.noDataAvailable }) }) }) : (0, i.jsx)(n._, { className: "h-full", data: T, label: L, title: Z.first48Hours }) })] }),
                                ],
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: "min-[988px]:hidden flex flex-col gap-4",
                            children: [
                                (0, i.jsxs)("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        (0, i.jsx)("div", { className: "flex items-center gap-2", children: (0, i.jsx)(l.x, { size: "headline2", className: "text-muted-foreground max-[988px]:hidden", children: Z.activityBreakdown }) }),
                                        !a &&
                                            (0, i.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, i.jsxs)(r.Ph, {
                                                    value: w,
                                                    onValueChange: N,
                                                    children: [
                                                        (0, i.jsx)(r.i4, { className: "w-[180px]", children: (0, i.jsx)(r.ki, {}) }),
                                                        (0, i.jsx)(r.Bw, {
                                                            children: V.map((e) => {
                                                                const a = e.icon;
                                                                return (0, i.jsx)(r.Ql, { value: e.value, children: (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [(0, i.jsx)(a, { className: "w-4 h-4 text-gray-700" }), (0, i.jsx)("span", { children: e.label })] }) }, e.value);
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                    ],
                                }),
                                S && (0, i.jsx)("div", { className: "w-full h-[240px]", children: (0, i.jsx)(c.C, { className: "h-full", hourlyData: f, minutelyData: M, isLoading: y, metricLabel: L }) }),
                                (0, i.jsx)("div", { className: "w-full h-[240px]", children: A ? (0, i.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, i.jsx)("div", { className: "w-full", children: (0, i.jsx)(l.x, { className: "text-gray-600", children: Z.noDataAvailable }) }) }) : (0, i.jsx)(n._, { className: "h-full", data: T, label: L, title: Z.first48Hours }) }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-89798f50.b2b0bcfa.js.map
