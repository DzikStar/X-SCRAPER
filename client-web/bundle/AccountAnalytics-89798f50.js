"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-89798f50"],
    {
        33340: (e, a, s) => {
            s.d(a, { R: () => C });
            var l = s(552322),
                i = s(995348),
                t = s(671026),
                n = s(553453),
                c = s(561677),
                r = s(685902),
                d = s(298163),
                o = s(751254),
                x = s(241101),
                m = s(52053),
                u = s(193686),
                h = s(332161),
                p = s(713990),
                j = s(840489),
                v = s(202784),
                b = s(430962),
                g = s(881120),
                w = s(542372),
                N = s(995961),
                f = s(864897),
                y = s(82143),
                M = s(991732),
                T = s(969088),
                k = s(598705);
            function C({ showFollowersChart: e = !1, hideSelector: a = !1 }) {
                const { metrics: s } = (0, T.dQ)(),
                    { analytics: m } = (0, b.M1)(),
                    { audienceSelectedMetric: j, setAudienceSelectedMetric: g } = (0, T.dQ)(),
                    w = (0, v.useMemo)(
                        () => [
                            { value: "Impressions", label: m.ImpressionsLabel, icon: i.Z },
                            { value: "Likes", label: m.LikesLabel, icon: t.Z },
                            { value: "Replies", label: m.RepliesLabel, icon: n.Z },
                            { value: "Retweets", label: m.RetweetsLabel, icon: c.Z },
                            { value: "Bookmark", label: m.BookmarkLabel, icon: r.Z },
                            { value: "Share", label: m.ShareLabel, icon: d.Z },
                            { value: "ProfileVisits", label: m.ProfileVisitsLabel, icon: o.Z },
                            { value: "Follows", label: m.FollowsLabel, icon: x.Z },
                        ],
                        [m],
                    ),
                    N = (0, v.useMemo)(() => {
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
                                      (0, l.jsx)("div", { className: "flex items-center gap-2", children: (0, l.jsx)(h.x, { size: "headline2", className: "text-muted-foreground max-[988px]:hidden", children: m.audienceInsights }) }),
                                      !a &&
                                          (0, l.jsx)("div", {
                                              className: "flex items-center gap-2",
                                              children: (0, l.jsxs)(p.Ph, {
                                                  value: j,
                                                  onValueChange: g,
                                                  children: [
                                                      (0, l.jsx)(p.i4, { className: "w-[180px]", children: (0, l.jsx)(p.ki, {}) }),
                                                      (0, l.jsx)(p.Bw, {
                                                          children: w.map((e) => {
                                                              const a = e.icon;
                                                              return (0, l.jsx)(p.Ql, { value: e.value, children: (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [(0, l.jsx)(a, { className: "w-4 h-4 text-gray-900" }), (0, l.jsx)("span", { children: e.label })] }) }, e.value);
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                  ],
                              }),
                              N ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)("div", { className: "hidden min-[988px]:grid grid-cols-1 gap-6 min-[988px]:grid-cols-2 max-w-[1400px] mx-auto w-full", children: [(0, l.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, l.jsx)("div", { className: "order-3 min-[988px]:order-none", children: (0, l.jsx)(A, {}) }), (0, l.jsx)("div", { className: "order-4 min-[988px]:order-none", children: (0, l.jsx)(S, {}) })] }), (0, l.jsxs)("div", { className: "contents min-[988px]:block min-[988px]:space-y-6", children: [(0, l.jsx)("div", { className: "order-1 min-[988px]:order-none", children: (0, l.jsx)(Z, {}) }), (0, l.jsx)("div", { className: "order-2 min-[988px]:order-none", children: (0, l.jsx)(V, {}) }), e && (0, l.jsx)("div", { className: "order-5 min-[988px]:order-none", children: (0, l.jsx)(L, {}) })] })] }), (0, l.jsx)("div", { className: "min-[988px]:hidden grid grid-cols-1 gap-4 max-w-[1400px] mx-auto w-full", children: (0, l.jsxs)("div", { className: "grid grid-cols-2 gap-4 col-span-2", children: [(0, l.jsx)("div", { className: "order-1 col-span-1", children: (0, l.jsx)(A, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-2 col-span-1", children: (0, l.jsx)(Z, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-3 col-span-1", children: (0, l.jsx)(S, { compactView: !0 }) }), (0, l.jsx)("div", { className: "order-4 col-span-1", children: (0, l.jsx)(V, { compactView: !0 }) }), e && (0, l.jsx)("div", { className: "order-5 col-span-2", children: (0, l.jsx)(L, { compactView: !0 }) })] }) })] }) : (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, l.jsx)("div", { className: "min-[988px]:w-[calc(50%-8px)]", children: (0, l.jsx)(h.x, { className: "text-gray-600", children: m.pleaseCheckBackAgainLater }) }) }),
                          ],
                      })
                    : (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto flex items-center justify-center transition-opacity delay-100 duration-200", children: (0, l.jsx)(u.P, { size: "large" }) });
            }
            function Z({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, T.dQ)(),
                    { analytics: i } = (0, b.M1)(),
                    [t, n] = (0, v.useState)(!1),
                    c = (0, M.T)(),
                    r = () => {
                        n(!0);
                    },
                    d = (0, v.useMemo)(() => ({ Male: i.genderMale, Female: i.genderFemale, Unknown: i.genderNotSpecified }), [i.genderMale, i.genderFemale, i.genderNotSpecified]),
                    o = (0, v.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, k.ZT)(a.audienceMetrics.rawAudienceMetrics, "gender", s);
                        return (0, k.Nn)(e, y._N).map((e) => ({ ...e, name: d[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, d]),
                    x = (0, v.useMemo)(() => c[s]?.label || s, [c, s]);
                if (!o.length) return null;
                const u = o.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 })),
                    h = u.length > 0 && u.some((e) => e.value > 0);
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, j.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.genderTitle,
                            onClick: e ? r : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.genderTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), r();
                                                },
                                                children: (0, l.jsx)(m.Z, {}),
                                            }),
                                    ],
                                }),
                                h && !e && (0, l.jsx)("p", { className: "text-gray-600 mb-4 text-subtext2", children: i.genderSubtitle }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(f.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(N.cu, { open: t, onOpenChange: n, children: (0, l.jsx)(N.hC, { title: (0, l.jsxs)("div", { children: [i.genderTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, l.jsxs)("div", { className: "pt-1", children: [h && (0, l.jsx)("p", { className: "text-gray-600 mb-2 text-subtext2", children: i.genderSubtitle }), (0, l.jsx)(f.Z, { data: u, compactView: !1, animationDuration: 400 })] }) }) }),
                    ],
                });
            }
            function V({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, T.dQ)(),
                    { analytics: i } = (0, b.M1)(),
                    [t, n] = (0, v.useState)(!1),
                    c = (0, M.T)(),
                    r = (0, v.useMemo)(() => ({ iOS: i.deviceIOS, Android: i.deviceAndroid, Web: i.deviceWeb, Other: i.deviceOther }), [i.deviceIOS, i.deviceAndroid, i.deviceWeb, i.deviceOther]),
                    d = () => {
                        n(!0);
                    },
                    o = (0, v.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, k.ZT)(a.audienceMetrics.rawAudienceMetrics, "device", s);
                        return (0, k.Nn)(e, y.he).map((e) => ({ ...e, name: r[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, r]),
                    x = (0, v.useMemo)(() => c[s]?.label || s, [c, s]);
                if (!o.length) return null;
                const u = o.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, j.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.deviceTitle,
                            onClick: e ? d : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.deviceTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), d();
                                                },
                                                children: (0, l.jsx)(m.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(f.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(N.cu, { open: t, onOpenChange: n, children: (0, l.jsx)(N.hC, { title: (0, l.jsxs)("div", { children: [i.deviceTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(f.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
            function A({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, T.dQ)(),
                    { analytics: i } = (0, b.M1)(),
                    [t, n] = (0, v.useState)(!1),
                    c = (0, M.T)(),
                    r = () => {
                        n(!0);
                    },
                    d = (0, v.useMemo)(() => ({ Age13to17: i.age13to17, Age18to24: i.age18to24, Age25to34: i.age25to34, Age35To44: i.age35to44, Age45To54: i.age45to54, Age55To64: i.age55to64, AgeOver65: i.age65plus }), [i]),
                    o = (0, v.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, k.ZT)(a.audienceMetrics.rawAudienceMetrics, "age", s),
                            l = new Map(e.map((e) => [e.name, { count: e.count, formattedCount: e.formattedCount, value: e.value }]));
                        return y.S9.map((e) => {
                            const a = l.get(e);
                            return { label: d[e] || e, value: a?.count || 0, formattedCount: a?.formattedCount || "0", count: a?.count || 0 };
                        });
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, d]),
                    x = (0, v.useMemo)(() => c[s]?.label || s, [c, s]);
                return o.length
                    ? (0, l.jsxs)("div", {
                          className: "relative isolate",
                          children: [
                              (0, l.jsxs)("section", {
                                  className: (0, j.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                                  "aria-label": i.ageTitle,
                                  onClick: e ? r : void 0,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: (0, j.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                          children: [
                                              (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.ageTitle }),
                                              e &&
                                                  (0, l.jsx)("button", {
                                                      type: "button",
                                                      className: "text-gray-400 cursor-pointer",
                                                      "aria-label": "Expand chart",
                                                      onClick: (e) => {
                                                          e.stopPropagation(), r();
                                                      },
                                                      children: (0, l.jsx)(m.Z, {}),
                                                  }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", { children: (0, l.jsx)(w.Z, { data: o, title: i.ageTitle, sortByValue: !1, compactView: e, showLabelsInCompactView: !0 }) }),
                                  ],
                              }),
                              (0, l.jsx)(N.cu, { open: t, onOpenChange: n, children: (0, l.jsx)(N.hC, { title: (0, l.jsxs)("div", { children: [i.ageTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(w.Z, { data: o, title: i.ageTitle, sortByValue: !1, showLabelsInCompactView: !0 }) }) }) }),
                          ],
                      })
                    : null;
            }
            function S({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, T.dQ)(),
                    { analytics: i } = (0, b.M1)(),
                    [t, n] = (0, v.useState)(!1),
                    c = (0, M.T)(),
                    r = () => {
                        n(!0);
                    },
                    d = (0, v.useMemo)(() => (a?.audienceMetrics?.rawCountryMetrics ? (0, k.od)(a.audienceMetrics.rawCountryMetrics, s) : []), [a?.audienceMetrics?.rawCountryMetrics, s]),
                    o = (0, v.useMemo)(() => c[s]?.label || s, [c, s]);
                if (!d.length) return null;
                const x = d.map((e) => ({ label: g.e[e.name.toLowerCase()] || e.name, value: e.value, icon: "Other" !== e.name ? (0, k.bK)(e.name) : void 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, j.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.countryTitle,
                            onClick: e ? r : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, j.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.countryTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), r();
                                                },
                                                children: (0, l.jsx)(m.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)(w.Z, { data: x, title: i.countryTitle, maxItems: 5, compactView: e, showLabelsInCompactView: !1, modalSubtitle: o }) }),
                            ],
                        }),
                        (0, l.jsx)(N.cu, { open: t, onOpenChange: n, children: (0, l.jsx)(N.hC, { title: (0, l.jsxs)("div", { className: "text-center", children: [i.countryTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", o, ")"] })] }), children: (0, l.jsx)("div", { className: "overflow-y-auto max-h-[400px] pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: (0, l.jsx)(w.Z, { data: x, title: i.countryTitle, compactView: !1 }) }) }) }),
                    ],
                });
            }
            function L({ compactView: e = !1 }) {
                const { metrics: a, audienceSelectedMetric: s } = (0, T.dQ)(),
                    { analytics: i } = (0, b.M1)(),
                    [t, n] = (0, v.useState)(!1),
                    c = (0, M.T)(),
                    r = () => {
                        n(!0);
                    },
                    d = (0, v.useMemo)(() => ({ inNetwork: i.inNetwork, outNetwork: i.outNetwork }), [i.inNetwork, i.outNetwork]),
                    o = (0, v.useMemo)(() => {
                        if (!a?.audienceMetrics?.rawAudienceMetrics) return [];
                        const e = (0, k.ZT)(a.audienceMetrics.rawAudienceMetrics, "network", s);
                        return (0, k.Nn)(e, y.Dx).map((e) => ({ ...e, name: d[e.name] || e.name }));
                    }, [a?.audienceMetrics?.rawAudienceMetrics, s, d]),
                    x = (0, v.useMemo)(() => c[s]?.label || s, [c, s]);
                if ("Follows" === s || !o.length) return null;
                const u = o.map((e) => ({ name: e.name, value: e.value, count: Number.parseInt(e.formattedCount.replace(/,/g, "")) || 0 }));
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, j.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.networkTitle,
                            onClick: e ? r : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, j.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.networkTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), r();
                                                },
                                                children: (0, l.jsx)(m.Z, {}),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(f.Z, { data: u, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(N.cu, { open: t, onOpenChange: n, children: (0, l.jsx)(N.hC, { title: (0, l.jsxs)("div", { children: [i.networkTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", x, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(f.Z, { data: u, compactView: !1, animationDuration: 400 }) }) }) }),
                    ],
                });
            }
        },
        700009: (e, a, s) => {
            s.d(a, { q: () => w });
            var l = s(552322),
                i = s(332161),
                t = s(969088),
                n = s(378850),
                c = s(306823),
                r = s(713990),
                d = s(202784),
                o = s(991732),
                x = s(995348),
                m = s(671026),
                u = s(553453),
                h = s(72566),
                p = s(685902),
                j = s(298163),
                v = s(751254),
                b = s(241101),
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
                                    A && (y ? (0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.C, { className: "h-full" }) }) : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.lastHour, liveIndicatorTooltip: T.liveDataTitle, dataType: "minutely" }) }), (0, l.jsx)("div", { className: "w-full h-[240px]", children: (0, l.jsx)(c.t, { className: "h-full", cardTitle: T.last48Hours, liveIndicatorTooltip: T.liveDataTitle, dataType: "hourly" }) })] })),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-89798f50.8484420a.js.map
