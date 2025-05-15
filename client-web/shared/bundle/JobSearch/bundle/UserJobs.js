"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        229333: (e, a, d) => {
            d.d(a, { Z: () => s });
            var r = d(202784),
                o = d(466999),
                n = d(325686),
                l = d(392237),
                c = d(674132);
            const i = d.n(c)().e5b0063d;
            let u = 0;
            class t extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${u}`), (u += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        d = i({ title: a });
                    return r.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, a), r.createElement(n.Z, { "aria-label": d }, e));
                }
            }
            const s = t;
        },
        414939: (e, a, d) => {
            d.d(a, { Z: () => i });
            var r = d(202784),
                o = d(325686),
                n = d(392237);
            class l extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(o.Z, { style: c.root });
                }
            }
            const c = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = l;
        },
        856438: (e, a, d) => {
            d.d(a, { Z: () => b });
            var r = d(202784),
                o = d(868634),
                n = d(731708),
                l = d(392237),
                c = d(674132),
                i = d.n(c),
                u = d(262009);
            const t = i().a71d7584,
                s = l.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                b = () => r.createElement(o.ZP, { style: s.label, type: "priority" }, r.createElement(n.ZP, { style: s.featuredLabel }, r.createElement(u.default, { style: s.featuredIcon }), t));
        },
        324948: (e, a, d) => {
            d.d(a, { Z: () => l });
            var r = d(202784),
                o = d(691533);
            const n = (0, d(523561).Z)({
                    loader: () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.21"),
                            d.e("icons.13"),
                            d.e("icons.20"),
                            d.e("icons.14"),
                            d.e("icons.1"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.11"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("icons.12"),
                            d.e("icons.22"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                            d.e("loader.WideLayout"),
                        ]).then(d.bind(d, 527969)),
                }),
                l = (e) => r.createElement(o.Z, { hideOnError: !0 }, r.createElement(n, e));
        },
        965245: (e, a, d) => {
            d.d(a, { Z: () => i });
            var r = d(807896),
                o = d(202784),
                n = d(229333),
                l = d(414939),
                c = d(334346);
            const i = ({ accessibilityTitle: e, footer: a = o.createElement(l.Z, null), ...d }) => {
                const i = o.createElement(c.C, (0, r.Z)({}, d, { footer: a }));
                return e ? o.createElement(n.Z, { title: e }, i) : i;
            };
        },
        652904: (e, a, d) => {
            d.d(a, { Z: () => t });
            var r = d(202784),
                o = d(500002),
                n = d(668214),
                l = d(997174),
                c = d(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class u extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: d, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: c,
                        } = e;
                    let i = !1;
                    a.pathname !== d ? (this._isInBackground = !0) : this._isInBackground && a.pathname === d && ((this._isInBackground = !1), (i = !0));
                    const u = o || c;
                    ((u && o !== c) || (!u && d !== n) || r !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: d, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), d(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            u.defaultProps = { children: null };
            const t = (0, o.ZP)(i(u));
        },
        985124: (e, a, d) => {
            d.d(a, { $J: () => c, WA: () => x, ZC: () => v, cj: () => T, eo: () => r.eo, hb: () => $, kW: () => i, pg: () => k, rP: () => l, u4: () => W, xk: () => j });
            var r = d(89217),
                o = d(674132),
                n = d.n(o);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                c = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(r.eo).map(([e, a]) => ({ label: String(a), value: e })),
                u = n().d2b8da2c,
                t = n().cd958040,
                s = n().c5760ca2,
                b = n().d31b4a2a,
                h = n().df1b7550,
                D = n().f38959a6,
                p = n().bc78a26c,
                S = n().ec28738e,
                m = n().icb06308,
                A = n().d0b978ec,
                y = n().af19cdc2,
                f = n().e4a51fca,
                w = n().e8ca78ae,
                M = n().c365dcc6,
                v = Object.freeze({ software_engineering: u, data_analytics: t, product: s, design: b, marketing: h, sales_am: D, operations: p, people_hr: S, finance_accounting: m, legal_compliance: A, science_engineering: y, medical: f, construction_trades: w, other: M }),
                k = Object.entries(v).map(([e, a]) => ({ label: String(a), value: e })),
                P = n().e25d75e4,
                I = n().e89b3f04,
                g = n().h55825dc,
                B = n().cc537386,
                C = n().jfc3cece,
                Z = n().e1b683aa,
                _ = n().c4627fda,
                E = n().db75b47c,
                x = Object.freeze({ intern: P, entry_level: I, junior: g, mid_level: B, senior: C, lead: Z, manager: _, executive: E }),
                j = Object.entries(x).map(([e, a]) => ({ label: String(a), value: e })),
                L = n().i312f0ce,
                R = n().b4aff05e,
                N = n().c08b9138,
                O = n().ia5d6422,
                F = n().h97c7f42,
                U = n().ibed2d04,
                T = Object.freeze({ onsite: { label: L, description: O, value: "onsite" }, remote: { label: N, description: U, value: "remote" }, hybrid: { label: R, description: F, value: "hybrid" } }),
                W = Object.keys(T).map((e) => ({ label: T[e].label, value: e, description: T[e].description })),
                $ = Object.keys(r.Qw).map((e) => ({ ...r.Qw[e], value: String(r.Qw[e].value) }));
        },
        943052: (e, a, d) => {
            d.d(a, { Z: () => n });
            d(543673), d(240753), d(128399), d(136728);
            var r = d(202784),
                o = d(107267);
            const n = () => {
                const e = (0, o.useLocation)(),
                    a = (0, o.useHistory)(),
                    [d, n] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    n(new URLSearchParams(e.search));
                }, [e.search]);
                const l = r.useCallback(
                        (r, o) => {
                            const n = new URLSearchParams(d);
                            n.set(r, o), a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, d],
                    ),
                    c = r.useCallback(
                        (r) => {
                            const o = new URLSearchParams(d);
                            for (const e in r) r[e] ? o.set(e, r[e]) : o.delete(e);
                            a.push(`${e.pathname}?${o.toString()}`);
                        },
                        [a, e.pathname, d],
                    );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), l, c];
            };
        },
        127218: (e, a, d) => {
            d.d(a, { C: () => m });
            var r = d(202784),
                o = d(614983),
                n = d.n(o),
                l = d(437429),
                c = d.n(l),
                i = d(57074),
                u = d.n(i),
                t = d(10622),
                s = d.n(t),
                b = d(585488),
                h = d(71620),
                D = d(163889),
                p = d(312771),
                S = d(535338);
            function m(e, a, d) {
                const [o, l] = r.useState(!1),
                    [i, t] = r.useState(null),
                    m = c()(),
                    A = u()(a),
                    y = (0, h.po)(),
                    f = (0, S.p)(e, A, d);
                return r.useMemo(() => {
                    const a = (0, b.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: d, previous_cursor: r } =
                            (function (e, a) {
                                try {
                                    n()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let d = e;
                                    for (const e of a) n()(!!d, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (d = d?.[e]);
                                    return d;
                                } catch (e) {
                                    return void (0, D.ZP)(e.message);
                                }
                            })(f, a) || {},
                        c = (a) => {
                            o ||
                                (l(!0),
                                s()(m, e, { ...A, cursor: a }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), t(e), y(e);
                                    },
                                }));
                        },
                        u = () => {
                            d && c(d);
                        },
                        h = () => {
                            r && c(r);
                        },
                        S = () => {
                            c(void 0);
                        };
                    return i ? { subsequentFetchStatus: p.ZP.FAILED, error: i, fetchNext: u, fetchPrevious: h, refetch: S, data: f, hasNext: Boolean(d), hasPrevious: Boolean(r) } : { subsequentFetchStatus: o ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: u, fetchPrevious: h, refetch: S, data: f, hasNext: Boolean(d), hasPrevious: Boolean(r) };
                }, [e, f, o, i, m, A, y]);
            }
        },
        28135: (e, a, d) => {
            d.d(a, { Z: () => B });
            d(136728);
            var r = d(202784),
                o = d(576648),
                n = d(107267),
                l = d(811176),
                c = d(40644),
                i = d(674132),
                u = d.n(i),
                t = d(630715),
                s = d(717160),
                b = d(885724),
                h = d(106186),
                D = d(786272),
                p = d(443781),
                S = d(952793),
                m = d(782642);
            const A = (e) => `/i/jobs/${e}`;
            var y = d(701796);
            const f = u().f508c49c,
                w = u().f88553c8,
                M = u().d6825dce,
                v = u().b9613442,
                k = u().c2b3f0da,
                P = u().c791d3fc,
                I = { label: u().ifea3114, withDelay: !0 },
                g = ({ iconSize: e = "normal", jobId: a, jobUserId: d }) => {
                    const i = (0, m.p)(),
                        u = (0, n.useHistory)(),
                        { userClaims: g, viewerUserId: B } = (0, p.QZ)(),
                        C = (0, S.hC)("recruiting_jobs_list_share_enabled"),
                        Z = (0, S.hC)("recruiting_pin_job_enabled") && (g.isTrueAndEnabled("subscriptions_feature_premium_jobs") || g.isVerifiedOrg()) && B !== d,
                        _ = r.useCallback(() => {
                            u.push({ query: { text: (0, y.w)(A(a)) }, pathname: "/messages/compose" });
                        }, [u, a]),
                        E = r.useCallback(() => {
                            o.Z.setString((0, y.w)(A(a))), i({ text: w });
                        }, [i, a]),
                        x = r.useCallback(() => {
                            u.push({ query: { text: (0, y.w)(A(a)) }, pathname: "/compose/post" });
                        }, [u, a]),
                        j = r.useCallback(() => {
                            u.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: u.location.pathname } });
                        }, [u, a]),
                        L = r.useCallback(() => {
                            const e = [];
                            return o.Z.isAvailable() && e.push({ text: f, onClick: E, Icon: t.default }), B && (e.push(((e) => ({ text: M, onClick: e, Icon: s.default }))(_)), e.push(((e) => ({ text: v, onClick: e, Icon: b.default }))(x))), Z && e.push(((e) => ({ text: k, onClick: e, Icon: h.default }))(j)), e;
                        }, [E, _, j, x, Z, B]),
                        R = r.useCallback(
                            (e) => {
                                const a = L();
                                return a.length ? r.createElement(l.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        N = r.useCallback(() => {}, []);
                    return C ? r.createElement(c.ZP, { Icon: D.default, "aria-label": P, color: "text", hoverLabel: I, iconSize: e, onPress: N, renderMenu: R, testID: "job-share-action-btn" }) : null;
                },
                B = r.memo(g);
        },
        524496: (e, a, d) => {
            d.d(a, { Z: () => f });
            d(136728);
            var r = d(202784),
                o = d(301503),
                n = d(325686),
                l = d(595088),
                c = d(516951),
                i = d(731708),
                u = d(779802),
                t = d(537392),
                s = d(989272),
                b = d(925873),
                h = d(202253),
                D = d(786475),
                p = d(392237),
                S = d(135904);
            const m = { [u.P7.atomic]: { element: "section" }, [u.P7.header1]: { element: "h1", wrapper: r.createElement(i.ZP, null) }, [u.P7.header2]: { element: "h2", wrapper: r.createElement(i.ZP, null) } },
                A = (0, l.Z)(m).reduce((e, [a, d]) => e.set(a, d), o.DefaultDraftBlockRenderMap);
            let y = !1;
            const f = r.memo(function (e) {
                    const { componentByType: a, contentState: d, onScribeEvent: l, paragraphFontSizeOverride: i } = e;
                    r.useEffect(() => {
                        y || (s.fH(S.c, S.n), (y = !0));
                    }, []);
                    const p = [(0, h.ez)(l, i), h.aF, h.RU];
                    e.disable_entityLinkDecorator || p.push((0, h.NA)(l, i));
                    const m = b.Z.initEditorState(d, { decorators: p });
                    let f = c.Z;
                    return (
                        a &&
                            (f = (e) => {
                                const d = e.getType();
                                return a[d] || null;
                            }),
                        r.createElement(t.ZP, null, ({ containerWidth: e }) => r.createElement(n.Z, { style: w.fontFamily }, r.createElement(o.Editor, { blockRenderMap: A, blockRendererFn: f, blockStyleFn: (0, u.su)(D.Z.isNarrowScreenWidth(e)), editorState: m, onChange: c.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        183806: (e, a, d) => {
            d.d(a, { Z: () => r });
            const r = d(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.810a30ba.js.map
