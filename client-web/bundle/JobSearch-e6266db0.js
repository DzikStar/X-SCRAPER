"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-e6266db0"],
    {
        246851: (e, a, n) => {
            n.d(a, { Z: () => t });
            var o = n(202784);
            function t(e) {
                const a = o.useRef();
                return (
                    o.useEffect(() => {
                        a.current = e;
                    }),
                    a.current
                );
            }
        },
        524084: (e, a, n) => {
            n.d(a, { Z: () => l });
            var o = n(202784),
                t = n(523561),
                r = n(195560);
            const l = (0, t.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, a) => o.createElement(r.Z, { hasError: e, onRetry: a }) });
        },
        402058: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.10"),
                        n.e("icons.1"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.23"),
                        n.e("icons.8"),
                        n.e("icons.2"),
                        n.e("icons.3"),
                        n.e("icons.15"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.9"),
                        n.e("icons.7"),
                        n.e("icons.24"),
                        n.e("icons.13"),
                        n.e("icons.29"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        n.e("loader.WideLayout-6107ac1a"),
                        n.e("loader.WideLayout-a2dee9c7"),
                    ]).then(n.bind(n, 527969)),
            });
        },
        478414: (e, a, n) => {
            n.d(a, { Hx: () => i, K: () => r, bb: () => d, gv: () => l, kg: () => s, yW: () => c });
            var o = n(779802),
                t = n(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                l = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                d = ({ h1FontSize: e, h2FontSize: a, paragraphFontSize: n }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: a, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: n, children: o.$u }) },
                ],
                i = "extended-profile",
                s = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: a, h2FontSize: n, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[a]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[a]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${t.default.theme.fontSizes[n]};\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${t.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: calc(${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: ${t.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${t.default.theme.spaces.space2});\n        padding-left: calc(${t.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${t.default.theme.colors.gray900};\n        border-radius: ${t.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        226298: (e, a, n) => {
            n.d(a, { z: () => o });
            const o = (e) => `/i/jobs/${e}`;
        },
        985124: (e, a, n) => {
            n.d(a, { $J: () => d, WA: () => C, ZC: () => S, cj: () => O, eo: () => o.eo, hb: () => W, kW: () => i, pg: () => v, rP: () => l, u4: () => H, xk: () => _ });
            var o = n(89217),
                t = n(111677),
                r = n.n(t);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                d = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(o.eo).map(([e, a]) => ({ label: String(a), value: e })),
                s = r().d2b8da2c,
                c = r().cd958040,
                u = r().c5760ca2,
                m = r().d31b4a2a,
                h = r().df1b7550,
                f = r().f38959a6,
                b = r().bc78a26c,
                p = r().ec28738e,
                g = r().icb06308,
                D = r().d0b978ec,
                y = r().af19cdc2,
                w = r().e4a51fca,
                $ = r().e8ca78ae,
                k = r().c365dcc6,
                S = Object.freeze({ software_engineering: s, data_analytics: c, product: u, design: m, marketing: h, sales_am: f, operations: b, people_hr: p, finance_accounting: g, legal_compliance: D, science_engineering: y, medical: w, construction_trades: $, other: k }),
                v = Object.entries(S).map(([e, a]) => ({ label: String(a), value: e })),
                M = r().e25d75e4,
                P = r().e89b3f04,
                E = r().h55825dc,
                z = r().cc537386,
                I = r().jfc3cece,
                A = r().e1b683aa,
                Z = r().c4627fda,
                x = r().db75b47c,
                C = Object.freeze({ intern: M, entry_level: P, junior: E, mid_level: z, senior: I, lead: A, manager: Z, executive: x }),
                _ = Object.entries(C).map(([e, a]) => ({ label: String(a), value: e })),
                j = r().i312f0ce,
                F = r().b4aff05e,
                L = r().c08b9138,
                B = r().ia5d6422,
                R = r().h97c7f42,
                N = r().ibed2d04,
                O = Object.freeze({ onsite: { label: j, description: B, value: "onsite" }, remote: { label: L, description: N, value: "remote" }, hybrid: { label: F, description: R, value: "hybrid" } }),
                H = Object.keys(O).map((e) => ({ label: O[e].label, value: e, description: O[e].description })),
                W = Object.keys(o.Qw).map((e) => ({ ...o.Qw[e], value: String(o.Qw[e].value) }));
        },
        943052: (e, a, n) => {
            n.d(a, { Z: () => r });
            n(543673), n(240753), n(128399), n(136728);
            var o = n(202784),
                t = n(107267);
            const r = () => {
                const e = (0, t.useLocation)(),
                    a = (0, t.useHistory)(),
                    [n, r] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const l = o.useCallback(
                        (o, t) => {
                            const r = new URLSearchParams(n);
                            r.set(o, t), a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, n],
                    ),
                    d = o.useCallback(
                        (o) => {
                            const t = new URLSearchParams(n);
                            for (const e in o) o[e] ? t.set(e, o[e]) : t.delete(e);
                            a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, n],
                    );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), l, d];
            };
        },
        482924: (e, a, n) => {
            n.d(a, { A: () => h });
            var o = n(202784),
                t = n(437429),
                r = n.n(t),
                l = n(57074),
                d = n.n(l),
                i = n(10622),
                s = n.n(i),
                c = n(71620),
                u = n(312771),
                m = n(535338);
            function h(e, a, n) {
                const t = d()(a),
                    l = d()(n),
                    i = r()(),
                    h = (0, c.po)(),
                    [f, b] = o.useState(null),
                    [p, g] = o.useState(!1),
                    D = o.useCallback(() => {
                        p ||
                            (g(!0),
                            s()(i, e, t, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    g(!1);
                                },
                                error: (e) => {
                                    h(e), g(!1), b(e);
                                },
                            }));
                    }, [i, h, e, p, t, l]),
                    y = (0, m.p)(e, a, n);
                return o.useMemo(() => (f ? { data: y, refetch: D, refetchStatus: u.ZP.FAILED, refetchError: f } : { data: y, refetch: D, refetchStatus: p ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [y, f, p, D]);
            }
        },
        127218: (e, a, n) => {
            n.d(a, { C: () => g });
            var o = n(202784),
                t = n(614983),
                r = n.n(t),
                l = n(437429),
                d = n.n(l),
                i = n(57074),
                s = n.n(i),
                c = n(10622),
                u = n.n(c),
                m = n(585488),
                h = n(71620),
                f = n(163889),
                b = n(312771),
                p = n(535338);
            function g(e, a, n) {
                const [t, l] = o.useState(!1),
                    [i, c] = o.useState(null),
                    g = d()(),
                    D = s()(a),
                    y = (0, h.po)(),
                    w = (0, p.p)(e, D, n);
                return o.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: o } =
                            (function (e, a) {
                                try {
                                    r()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of a) r()(!!n, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, f.ZP)(e.message);
                                }
                            })(w, a) || {},
                        d = (a) => {
                            t ||
                                (l(!0),
                                u()(g, e, { ...D, cursor: a }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), c(e), y(e);
                                    },
                                }));
                        },
                        s = () => {
                            n && d(n);
                        },
                        h = () => {
                            o && d(o);
                        },
                        p = () => {
                            d(void 0);
                        };
                    return i ? { subsequentFetchStatus: b.ZP.FAILED, error: i, fetchNext: s, fetchPrevious: h, refetch: p, data: w, hasNext: Boolean(n), hasPrevious: Boolean(o) } : { subsequentFetchStatus: t ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: s, fetchPrevious: h, refetch: p, data: w, hasNext: Boolean(n), hasPrevious: Boolean(o) };
                }, [e, w, t, i, g, D, y]);
            }
        },
        263870: (e, a, n) => {
            n.r(a), n.d(a, { default: () => T });
            var o = n(202784),
                t = n(247411),
                r = n(736063),
                l = n(325686),
                d = n(107267),
                i = n(708852),
                s = n(530732),
                c = n(731708),
                u = n(392237),
                m = n(894966),
                h = n(318178),
                f = n(903233),
                b = n(652904),
                p = n(293115),
                g = n(254221),
                D = n(771741),
                y = (n(585488), n(457311)),
                w = n(154003),
                $ = n(97301),
                k = n(58399),
                S = n(292546),
                v = n(482924),
                M = n(62941),
                P = n(965245),
                E = n(609927),
                z = n(715601),
                I = n(768572),
                A = n(46858);
            const Z = { isGlobal: !0, isSticky: !1 },
                x = (e) => e.rest_id,
                C = u.default.create((e) => ({ viewport: { overflow: "auto", height: "100%", flex: 1 }, mobileContainer: { position: "relative", height: "calc(100vh - 112px)", overflow: "auto" } })),
                _ = ({ items: e }) => {
                    const a = (0, i.Ji)(),
                        n = o.useCallback((a) => o.createElement(A.Z, { item: a.result, itemId: a.rest_id, itemIndex: e.findIndex((e) => e.rest_id === a.rest_id), pathPrefix: "/jobs/saved" }), [e]),
                        t = o.useCallback(() => o.createElement(P.Z, { cacheKey: "jobSearchList", footer: null, identityFunction: x, items: e, renderer: n, withoutHeadroom: !0 }), [e, n]);
                    return e ? (e.length && a ? o.createElement(E.Z.Provider, { value: Z }, o.createElement(I.y3.Provider, { value: void 0 }, o.createElement(z.Z, { style: C.viewport }, t()))) : e.length && !a ? o.createElement(l.Z, { style: C.mobileContainer }, t()) : null) : null;
                },
                j = D.Z,
                F = 10,
                L = () => {
                    const e = (0, d.useHistory)(),
                        [a, n] = (0, S.Z)(),
                        [t, r] = o.useState(!1),
                        s = (0, i.Ji)(),
                        u = a.get("page") ? parseInt(a?.get("page"), 10) : 1,
                        { data: m, refetchStatus: h } = (0, v.A)(j, { limit: F, offset: ((f = u), (f - 1) * F) });
                    var f;
                    o.useEffect(() => {
                        "none" === h && r(!1);
                    }, [h]);
                    const b = m?.viewer_v2?.user_results?.result,
                        p = b?.saved_jobs ?? {},
                        g = p.total || 0,
                        D = Math.ceil(g / F),
                        P = p.items_results ?? [],
                        E = P.length > 0 ? P[0].rest_id : null,
                        z = !b || t;
                    o.useEffect(() => {
                        E && "/jobs/saved" === location.pathname && s && !z && e.replace(`/jobs/saved/${E}?page=${u}`);
                    }, [E, s, z, u, e]);
                    const I = o.useCallback(() => {
                            u < D && n("page", (u + 1).toString());
                        }, [u, n, D]),
                        A = o.useCallback(() => {
                            u > 1 && n("page", (u - 1).toString());
                        }, [u, n]);
                    return z
                        ? o.createElement(M.Z, null)
                        : g <= 0
                          ? o.createElement(y.Z, { header: "No saved jobs" })
                          : o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(_, { items: P }),
                                o.createElement(
                                    l.Z,
                                    { style: { ...B.actionBar, ...(s ? {} : B.mobileActionBar) } },
                                    o.createElement(
                                        l.Z,
                                        { style: B.actionBarInner },
                                        o.createElement(w.ZP, { disabled: 1 === u, icon: o.createElement($.default, null), onClick: A, type: "brandText" }),
                                        o.createElement(
                                            c.ZP,
                                            { color: "gray900", size: "subtext1" },
                                            ((e, a) => {
                                                if (a > 0) {
                                                    let n = e * F;
                                                    return n > a && (n = a), `Viewing ${e * F - 9} - ${n} of ${a}`;
                                                }
                                                return "";
                                            })(u, g),
                                        ),
                                        o.createElement(w.ZP, { disabled: u === D, icon: o.createElement(k.default, null), onClick: I, type: "brandText" }),
                                    ),
                                ),
                            );
                },
                B = u.default.create((e) => ({ actionBar: { width: "100%", backgroundColor: e.colors.gray200 }, mobileActionBar: { width: "100%", backgroundColor: e.colors.gray200 }, actionBarInner: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space4 } })),
                R = { context: "JobBookmarksList" },
                N = () => o.createElement(r.H, { errorConfig: R }, o.createElement(L, null)),
                O = { page: "saved_jobs", section: "all" },
                H = () => {
                    const e = (0, d.useLocation)(),
                        a = (0, d.useHistory)(),
                        n = !(0, i.Ji)(),
                        t = /\/jobs\/saved\/\d+/.test(e.pathname),
                        r = o.useCallback(() => {
                            a.goBack();
                        }, [a]);
                    return o.createElement(p.nO, { namespace: O }, o.createElement(b.Z, { locationKey: O.page }, o.createElement(f.Z, { isRightRootActive: t, leftContent: o.createElement(l.Z, { style: { display: "flex", overflow: "auto", width: "30%" } }, o.createElement(N, null)), mobileRootStyles: { height: "calc(100vh - 68px)" }, rightContent: o.createElement(l.Z, null, n && o.createElement(s.Z, { onClick: r, style: W.mobileDetailBackButton }, o.createElement(m.default, null), o.createElement(c.ZP, { size: "body", weight: "bold" }, "Back to saved jobs")), o.createElement(g.Z, { actions: [h.h5] })), rootStyles: { height: "calc(100vh - 116px)" } })));
                },
                W = u.default.create((e) => ({ mobileDetailBackButton: { flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16 }, mobileDetailActionsItemBreak: { flexBasis: "100%" } })),
                q = { context: "JobRecommendations" },
                T = () => o.createElement(r.H, { errorConfig: q }, o.createElement(t.Z, null, o.createElement(H, null)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-e6266db0.321a038a.js.map
