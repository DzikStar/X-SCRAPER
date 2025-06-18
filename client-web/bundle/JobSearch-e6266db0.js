"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-e6266db0"],
    {
        246851: (e, a, r) => {
            r.d(a, { Z: () => n });
            var o = r(202784);
            function n(e) {
                const a = o.useRef();
                return (
                    o.useEffect(() => {
                        a.current = e;
                    }),
                    a.current
                );
            }
        },
        524084: (e, a, r) => {
            r.d(a, { Z: () => l });
            var o = r(202784),
                n = r(523561),
                t = r(195560);
            const l = (0, n.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, a) => o.createElement(t.Z, { hasError: e, onRetry: a }) });
        },
        402058: (e, a, r) => {
            r.d(a, { Z: () => o });
            r(202784);
            const o = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.8"),
                        r.e("icons.15"),
                        r.e("icons.7"),
                        r.e("icons.3"),
                        r.e("icons.24"),
                        r.e("icons.12"),
                        r.e("icons.22"),
                        r.e("icons.2"),
                        r.e("icons.18"),
                        r.e("icons.9"),
                        r.e("icons.6"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.14"),
                        r.e("icons.5"),
                        r.e("icons.16"),
                        r.e("icons.19"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        r.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        r.e("loader.WideLayout-6107ac1a"),
                        r.e("loader.WideLayout-a2dee9c7"),
                    ]).then(r.bind(r, 527969)),
            });
        },
        226298: (e, a, r) => {
            r.d(a, { z: () => o });
            const o = (e) => `/i/jobs/${e}`;
        },
        985124: (e, a, r) => {
            r.d(a, { $J: () => d, WA: () => j, ZC: () => w, cj: () => H, eo: () => o.eo, hb: () => z, kW: () => s, pg: () => P, rP: () => l, u4: () => J, xk: () => B });
            var o = r(89217),
                n = r(111677),
                t = r.n(n);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                d = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(o.eo).map(([e, a]) => ({ label: String(a), value: e })),
                c = t().d2b8da2c,
                i = t().cd958040,
                u = t().c5760ca2,
                h = t().d31b4a2a,
                m = t().df1b7550,
                D = t().f38959a6,
                b = t().bc78a26c,
                f = t().ec28738e,
                p = t().icb06308,
                v = t().d0b978ec,
                y = t().af19cdc2,
                M = t().e4a51fca,
                g = t().e8ca78ae,
                k = t().c365dcc6,
                w = Object.freeze({ software_engineering: c, data_analytics: i, product: u, design: h, marketing: m, sales_am: D, operations: b, people_hr: f, finance_accounting: p, legal_compliance: v, science_engineering: y, medical: M, construction_trades: g, other: k }),
                P = Object.entries(w).map(([e, a]) => ({ label: String(a), value: e })),
                E = t().e25d75e4,
                I = t().e89b3f04,
                S = t().h55825dc,
                A = t().cc537386,
                Z = t().jfc3cece,
                C = t().e1b683aa,
                _ = t().c4627fda,
                x = t().db75b47c,
                j = Object.freeze({ intern: E, entry_level: I, junior: S, mid_level: A, senior: Z, lead: C, manager: _, executive: x }),
                B = Object.entries(j).map(([e, a]) => ({ label: String(a), value: e })),
                L = t().i312f0ce,
                R = t().b4aff05e,
                N = t().c08b9138,
                O = t().ia5d6422,
                $ = t().h97c7f42,
                F = t().ibed2d04,
                H = Object.freeze({ onsite: { label: L, description: O, value: "onsite" }, remote: { label: N, description: F, value: "remote" }, hybrid: { label: R, description: $, value: "hybrid" } }),
                J = Object.keys(H).map((e) => ({ label: H[e].label, value: e, description: H[e].description })),
                z = Object.keys(o.Qw).map((e) => ({ ...o.Qw[e], value: String(o.Qw[e].value) }));
        },
        943052: (e, a, r) => {
            r.d(a, { Z: () => t });
            r(543673), r(240753), r(128399), r(136728);
            var o = r(202784),
                n = r(107267);
            const t = () => {
                const e = (0, n.useLocation)(),
                    a = (0, n.useHistory)(),
                    [r, t] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const l = o.useCallback(
                        (o, n) => {
                            const t = new URLSearchParams(r);
                            t.set(o, n), a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, r],
                    ),
                    d = o.useCallback(
                        (o) => {
                            const n = new URLSearchParams(r);
                            for (const e in o) o[e] ? n.set(e, o[e]) : n.delete(e);
                            a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, r],
                    );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), l, d];
            };
        },
        482924: (e, a, r) => {
            r.d(a, { A: () => m });
            var o = r(202784),
                n = r(437429),
                t = r.n(n),
                l = r(57074),
                d = r.n(l),
                s = r(10622),
                c = r.n(s),
                i = r(71620),
                u = r(312771),
                h = r(535338);
            function m(e, a, r) {
                const n = d()(a),
                    l = d()(r),
                    s = t()(),
                    m = (0, i.po)(),
                    [D, b] = o.useState(null),
                    [f, p] = o.useState(!1),
                    v = o.useCallback(() => {
                        f ||
                            (p(!0),
                            c()(s, e, n, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    p(!1);
                                },
                                error: (e) => {
                                    m(e), p(!1), b(e);
                                },
                            }));
                    }, [s, m, e, f, n, l]),
                    y = (0, h.p)(e, a, r);
                return o.useMemo(() => (D ? { data: y, refetch: v, refetchStatus: u.ZP.FAILED, refetchError: D } : { data: y, refetch: v, refetchStatus: f ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [y, D, f, v]);
            }
        },
        127218: (e, a, r) => {
            r.d(a, { C: () => p });
            var o = r(202784),
                n = r(614983),
                t = r.n(n),
                l = r(437429),
                d = r.n(l),
                s = r(57074),
                c = r.n(s),
                i = r(10622),
                u = r.n(i),
                h = r(585488),
                m = r(71620),
                D = r(163889),
                b = r(312771),
                f = r(535338);
            function p(e, a, r) {
                const [n, l] = o.useState(!1),
                    [s, i] = o.useState(null),
                    p = d()(),
                    v = c()(a),
                    y = (0, m.po)(),
                    M = (0, f.p)(e, v, r);
                return o.useMemo(() => {
                    const a = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    t()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, a) {
                                try {
                                    t()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of a) t()(!!r, "The provided path is invalid."), t()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, D.ZP)(e.message);
                                }
                            })(M, a) || {},
                        d = (a) => {
                            n ||
                                (l(!0),
                                u()(p, e, { ...v, cursor: a }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), i(e), y(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && d(r);
                        },
                        m = () => {
                            o && d(o);
                        },
                        f = () => {
                            d(void 0);
                        };
                    return s ? { subsequentFetchStatus: b.ZP.FAILED, error: s, fetchNext: c, fetchPrevious: m, refetch: f, data: M, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: n ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: m, refetch: f, data: M, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, M, n, s, p, v, y]);
            }
        },
        263870: (e, a, r) => {
            r.r(a), r.d(a, { default: () => U });
            var o = r(202784),
                n = r(247411),
                t = r(736063),
                l = r(325686),
                d = r(107267),
                s = r(708852),
                c = r(530732),
                i = r(731708),
                u = r(392237),
                h = r(894966),
                m = r(318178),
                D = r(903233),
                b = r(652904),
                f = r(293115),
                p = r(254221),
                v = r(771741),
                y = (r(585488), r(457311)),
                M = r(154003),
                g = r(97301),
                k = r(58399),
                w = r(292546),
                P = r(482924),
                E = r(62941),
                I = r(965245),
                S = r(609927),
                A = r(715601),
                Z = r(768572),
                C = r(46858);
            const _ = { isGlobal: !0, isSticky: !1 },
                x = (e) => e.rest_id,
                j = u.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { position: "relative", height: "calc(100vh - 112px)", overflow: "auto" } })),
                B = ({ items: e }) => {
                    const a = (0, s.Ji)(),
                        r = o.useCallback((a) => o.createElement(C.Z, { item: a.result, itemId: a.rest_id, itemIndex: e.findIndex((e) => e.rest_id === a.rest_id), pathPrefix: "/jobs/saved" }), [e]),
                        n = o.useCallback(() => o.createElement(I.Z, { cacheKey: "jobSearchList", footer: null, identityFunction: x, items: e, renderer: r, withoutHeadroom: !0 }), [e, r]);
                    return e ? (e.length && a ? o.createElement(S.Z.Provider, { value: _ }, o.createElement(Z.y3.Provider, { value: void 0 }, o.createElement(A.Z, { style: j.viewport }, n()))) : e.length && !a ? o.createElement(l.Z, { style: j.mobileContainer }, n()) : null) : null;
                },
                L = v.Z,
                R = 10,
                N = () => {
                    const e = (0, d.useHistory)(),
                        [a, r] = (0, w.Z)(),
                        [n, t] = o.useState(!1),
                        c = (0, s.Ji)(),
                        u = a.get("page") ? parseInt(a?.get("page"), 10) : 1,
                        { data: h, refetchStatus: m } = (0, P.A)(L, { limit: R, offset: ((D = u), (D - 1) * R) });
                    var D;
                    o.useEffect(() => {
                        "none" === m && t(!1);
                    }, [m]);
                    const b = h?.viewer_v2?.user_results?.result,
                        f = b?.saved_jobs ?? {},
                        p = f.total || 0,
                        v = Math.ceil(p / R),
                        I = f.items_results ?? [],
                        S = I.length > 0 ? I[0].rest_id : null,
                        A = !b || n;
                    o.useEffect(() => {
                        S && "/jobs/saved" === location.pathname && c && !A && e.replace(`/jobs/saved/${S}?page=${u}`);
                    }, [S, c, A, u, e]);
                    const Z = o.useCallback(() => {
                            u < v && r("page", (u + 1).toString());
                        }, [u, r, v]),
                        C = o.useCallback(() => {
                            u > 1 && r("page", (u - 1).toString());
                        }, [u, r]);
                    return A
                        ? o.createElement(E.Z, null)
                        : p <= 0
                          ? o.createElement(y.Z, { header: "No saved jobs" })
                          : o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(B, { items: I }),
                                o.createElement(
                                    l.Z,
                                    { style: { ...O.actionBar, ...(c ? {} : O.mobileActionBar) } },
                                    o.createElement(
                                        l.Z,
                                        { style: O.actionBarInner },
                                        o.createElement(M.ZP, { disabled: 1 === u, icon: o.createElement(g.default, null), onClick: C, type: "brandText" }),
                                        o.createElement(
                                            i.ZP,
                                            { color: "gray900", size: "subtext1" },
                                            ((e, a) => {
                                                if (a > 0) {
                                                    let r = e * R;
                                                    return r > a && (r = a), `Viewing ${e * R - 9} - ${r} of ${a}`;
                                                }
                                                return "";
                                            })(u, p),
                                        ),
                                        o.createElement(M.ZP, { disabled: u === v, icon: o.createElement(k.default, null), onClick: Z, type: "brandText" }),
                                    ),
                                ),
                            );
                },
                O = u.default.create((e) => ({ actionBar: { width: "100%", backgroundColor: e.colors.gray200 }, mobileActionBar: { width: "100%", backgroundColor: e.colors.gray200 }, actionBarInner: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space4 } })),
                $ = { context: "JobBookmarksList" },
                F = () => o.createElement(t.H, { errorConfig: $ }, o.createElement(N, null)),
                H = { page: "saved_jobs", section: "all" },
                J = () => {
                    const e = (0, d.useLocation)(),
                        a = (0, d.useHistory)(),
                        r = !(0, s.Ji)(),
                        n = /\/jobs\/saved\/\d+/.test(e.pathname),
                        t = o.useCallback(() => {
                            a.goBack();
                        }, [a]);
                    return o.createElement(f.nO, { namespace: H }, o.createElement(b.Z, { locationKey: H.page }, o.createElement(D.Z, { isRightRootActive: n, leftContent: o.createElement(l.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, o.createElement(F, null)), mobileRootStyles: { height: "calc(100vh - 68px)" }, rightContent: o.createElement(l.Z, null, r && o.createElement(c.Z, { onClick: t, style: z.mobileDetailBackButton }, o.createElement(h.default, null), o.createElement(i.ZP, { size: "body", weight: "bold" }, "Back to saved jobs")), o.createElement(p.Z, { actions: [m.h5] })), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                z = u.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 }, mobileDetailActionsItemBreak: { flexBasis: "100%" } })),
                T = { context: "JobRecommendations" },
                U = () => o.createElement(t.H, { errorConfig: T }, o.createElement(n.Z, null, o.createElement(J, null)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-e6266db0.b2f516ca.js.map
