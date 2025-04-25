"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs"],
    {
        229333: (e, a, l) => {
            l.d(a, { Z: () => u });
            var r = l(202784),
                n = l(466999),
                o = l(325686),
                t = l(392237),
                i = l(674132);
            const s = l.n(i)().e5b0063d;
            let d = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        l = s({ title: a });
                    return r.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: t.default.visuallyHidden }, a), r.createElement(o.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        414939: (e, a, l) => {
            l.d(a, { Z: () => s });
            var r = l(202784),
                n = l(325686),
                o = l(392237);
            class t extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: i.root });
                }
            }
            const i = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = t;
        },
        856438: (e, a, l) => {
            l.d(a, { Z: () => p });
            var r = l(202784),
                n = l(868634),
                o = l(731708),
                t = l(392237),
                i = l(674132),
                s = l.n(i),
                d = l(262009);
            const c = s().a71d7584,
                u = t.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                p = () => r.createElement(n.ZP, { style: u.label, type: "priority" }, r.createElement(o.ZP, { style: u.featuredLabel }, r.createElement(d.default, { style: u.featuredIcon }), c));
        },
        150123: (e, a, l) => {
            l.d(a, { Z: () => t });
            var r = l(202784),
                n = l(691533),
                o = l(402058);
            const t = (e) => r.createElement(n.Z, { hideOnError: !0 }, r.createElement(o.Z, e));
        },
        965245: (e, a, l) => {
            l.d(a, { Z: () => s });
            var r = l(807896),
                n = l(202784),
                o = l(229333),
                t = l(414939),
                i = l(334346);
            const s = ({ accessibilityTitle: e, footer: a = n.createElement(t.Z, null), ...l }) => {
                const s = n.createElement(i.C, (0, r.Z)({}, l, { footer: a }));
                return e ? n.createElement(o.Z, { title: e }, s) : s;
            };
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => c });
            var r = l(202784),
                n = l(500002),
                o = l(668214),
                t = l(997174),
                i = l(118823);
            const s = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: t.NH }))
                .withAnalytics();
            class d extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: t },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (s = !0));
                    const d = n || i;
                    ((d && n !== i) || (!d && l !== o) || r !== t || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(s(d));
        },
        402058: (e, a, l) => {
            l.d(a, { Z: () => r });
            l(202784);
            const r = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.7"),
                        l.e("icons.15"),
                        l.e("icons.8"),
                        l.e("icons.3"),
                        l.e("icons.24"),
                        l.e("icons.9"),
                        l.e("icons.22"),
                        l.e("icons.12"),
                        l.e("modules.common-e907d115"),
                        l.e("modules.common-e019dbda"),
                        l.e("icons.5"),
                        l.e("icons.6"),
                        l.e("icons.14"),
                        l.e("icons.18"),
                        l.e("icons.2"),
                        l.e("icons.16"),
                        l.e("icons.19"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-00a077b2"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4b805c4b"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c219810"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-9b4c2397"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c2fdd616"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-70774d80"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-92c1aea7"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8767a721"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-d5c922ba"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e9891f16"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        l.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        l.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        l.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        l.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        l.e("loader.WideLayout"),
                    ]).then(l.bind(l, 527969)),
            });
        },
        226298: (e, a, l) => {
            l.d(a, { z: () => r });
            const r = (e) => `/i/jobs/${e}`;
        },
        985124: (e, a, l) => {
            l.d(a, { $J: () => i, WA: () => x, ZC: () => A, cj: () => N, eo: () => r.eo, hb: () => U, kW: () => s, pg: () => v, rP: () => t, u4: () => O, xk: () => B });
            var r = l(89217),
                n = l(674132),
                o = l.n(n);
            const t = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(r.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = o().d2b8da2c,
                c = o().cd958040,
                u = o().c5760ca2,
                p = o().d31b4a2a,
                b = o().df1b7550,
                m = o().f38959a6,
                h = o().bc78a26c,
                y = o().ec28738e,
                g = o().icb06308,
                S = o().d0b978ec,
                f = o().af19cdc2,
                D = o().e4a51fca,
                _ = o().e8ca78ae,
                k = o().c365dcc6,
                A = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: p, marketing: b, sales_am: m, operations: h, people_hr: y, finance_accounting: g, legal_compliance: S, science_engineering: f, medical: D, construction_trades: _, other: k }),
                v = Object.entries(A).map(([e, a]) => ({ label: String(a), value: e })),
                w = o().e25d75e4,
                F = o().e89b3f04,
                E = o().h55825dc,
                I = o().cc537386,
                C = o().jfc3cece,
                M = o().e1b683aa,
                Z = o().c4627fda,
                P = o().db75b47c,
                x = Object.freeze({ intern: w, entry_level: F, junior: E, mid_level: I, senior: C, lead: M, manager: Z, executive: P }),
                B = Object.entries(x).map(([e, a]) => ({ label: String(a), value: e })),
                K = o().i312f0ce,
                L = o().b4aff05e,
                T = o().c08b9138,
                j = o().ia5d6422,
                R = o().h97c7f42,
                z = o().ibed2d04,
                N = Object.freeze({ onsite: { label: K, description: j, value: "onsite" }, remote: { label: T, description: z, value: "remote" }, hybrid: { label: L, description: R, value: "hybrid" } }),
                O = Object.keys(N).map((e) => ({ label: N[e].label, value: e, description: N[e].description })),
                U = Object.keys(r.Qw).map((e) => ({ ...r.Qw[e], value: String(r.Qw[e].value) }));
        },
        943052: (e, a, l) => {
            l.d(a, { Z: () => o });
            l(543673), l(240753), l(128399), l(136728);
            var r = l(202784),
                n = l(107267);
            const o = () => {
                const e = (0, n.useLocation)(),
                    a = (0, n.useHistory)(),
                    [l, o] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const t = r.useCallback(
                        (r, n) => {
                            const o = new URLSearchParams(l);
                            o.set(r, n), a.push(`${e.pathname}?${o.toString()}`);
                        },
                        [a, e.pathname, l],
                    ),
                    i = r.useCallback(
                        (r) => {
                            const n = new URLSearchParams(l);
                            for (const e in r) r[e] ? n.set(e, r[e]) : n.delete(e);
                            a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, l],
                    );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), t, i];
            };
        },
        42508: (e, a, l) => {
            l.d(a, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, a, l) => {
            l.d(a, { ZP: () => n, n5: () => t });
            var r = l(42508);
            const n = ({ displaySensitiveMedia: e, isNotFound: a, isSuspended: l, isWithheld: r, user: n, userProfileInterstitialType: t, viewerUserId: i }) => {
                    const s = !!i && i === n.id_str,
                        d = n.blocked_by,
                        c = n.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: s, user: n, userProfileInterstitialType: t }),
                        p = (s || !r) && !l;
                    return { avatar: s || (!u && !a && !l && !r), badges: s || !r, description: s || (!c && !d && !u && !l && !r), followButton: !(s || d || u || a || l || r), followersYouKnow: !s && !d && !c && !u && !a && !l && !r && (n.following || !n.protected), followIndicator: !r, fullName: p, label: p, stats: s || (!d && !u && !l && !r), subscriptionsCount: s || !n.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: a, user: l, userProfileInterstitialType: n }) => (n === r.Z.SensitiveMedia || n === r.Z.OffensiveProfileContent) && !(a || l.following || e),
                t = ({ isOwnProfile: e, isSoftBlockEnabled: a = !1, user: l }) => {
                    const r = l.blocked_by,
                        n = l.protected && !l.following;
                    return a ? e || !n : e || (!n && !r);
                };
        },
        127218: (e, a, l) => {
            l.d(a, { C: () => g });
            var r = l(202784),
                n = l(614983),
                o = l.n(n),
                t = l(437429),
                i = l.n(t),
                s = l(57074),
                d = l.n(s),
                c = l(10622),
                u = l.n(c),
                p = l(585488),
                b = l(71620),
                m = l(163889),
                h = l(312771),
                y = l(535338);
            function g(e, a, l) {
                const [n, t] = r.useState(!1),
                    [s, c] = r.useState(null),
                    g = i()(),
                    S = d()(a),
                    f = (0, b.po)(),
                    D = (0, y.p)(e, S, l);
                return r.useMemo(() => {
                    const a = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    o()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: l, previous_cursor: r } =
                            (function (e, a) {
                                try {
                                    o()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let l = e;
                                    for (const e of a) o()(!!l, "The provided path is invalid."), o()("string" == typeof e, "Unexpected value for path!"), (l = l?.[e]);
                                    return l;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(D, a) || {},
                        i = (a) => {
                            n ||
                                (t(!0),
                                u()(g, e, { ...S, cursor: a }).subscribe({
                                    complete: () => {
                                        t(!1);
                                    },
                                    error: (e) => {
                                        t(!1), c(e), f(e);
                                    },
                                }));
                        },
                        d = () => {
                            l && i(l);
                        },
                        b = () => {
                            r && i(r);
                        },
                        y = () => {
                            i(void 0);
                        };
                    return s ? { subsequentFetchStatus: h.ZP.FAILED, error: s, fetchNext: d, fetchPrevious: b, refetch: y, data: D, hasNext: Boolean(l), hasPrevious: Boolean(r) } : { subsequentFetchStatus: n ? h.ZP.LOADING : h.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: b, refetch: y, data: D, hasNext: Boolean(l), hasPrevious: Boolean(r) };
                }, [e, D, n, s, g, S, f]);
            }
        },
        499102: (e, a, l) => {
            l.d(a, { Z: () => I });
            l(136728);
            var r = l(202784),
                n = l(576648),
                o = l(107267),
                t = l(811176),
                i = l(40644),
                s = l(674132),
                d = l.n(s),
                c = l(630715),
                u = l(717160),
                p = l(885724),
                b = l(106186),
                m = l(786272),
                h = l(443781),
                y = l(952793),
                g = l(782642),
                S = l(226298),
                f = l(701796);
            const D = d().f508c49c,
                _ = d().f88553c8,
                k = d().d6825dce,
                A = d().b9613442,
                v = d().c2b3f0da,
                w = d().c791d3fc,
                F = { label: d().ifea3114, withDelay: !0 },
                E = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const s = (0, g.p)(),
                        d = (0, o.useHistory)(),
                        { userClaims: E, viewerUserId: I } = (0, h.QZ)(),
                        C = (0, y.hC)("recruiting_jobs_list_share_enabled"),
                        M = (0, y.hC)("recruiting_pin_job_enabled") && (E.isTrueAndEnabled("subscriptions_feature_premium_jobs") || E.isVerifiedOrg()) && I !== l,
                        Z = r.useCallback(() => {
                            d.push({ query: { text: (0, f.w)((0, S.z)(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        P = r.useCallback(() => {
                            n.Z.setString((0, f.w)((0, S.z)(a))), s({ text: _ });
                        }, [s, a]),
                        x = r.useCallback(() => {
                            d.push({ query: { text: (0, f.w)((0, S.z)(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        B = r.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        K = r.useCallback(() => {
                            const e = [];
                            return n.Z.isAvailable() && e.push({ text: D, onClick: P, Icon: c.default }), I && (e.push(((e) => ({ text: k, onClick: e, Icon: u.default }))(Z)), e.push(((e) => ({ text: A, onClick: e, Icon: p.default }))(x))), M && e.push(((e) => ({ text: v, onClick: e, Icon: b.default }))(B)), e;
                        }, [P, Z, B, x, M, I]),
                        L = r.useCallback(
                            (e) => {
                                const a = K();
                                return a.length ? r.createElement(t.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [K],
                        ),
                        T = r.useCallback(() => {}, []);
                    return C ? r.createElement(i.ZP, { Icon: m.default, "aria-label": w, color: "text", hoverLabel: F, iconSize: e, onPress: T, renderMenu: L, testID: "job-share-action-btn" }) : null;
                },
                I = r.memo(E);
        },
        771035: (e, a, l) => {
            l.d(a, { Z: () => c });
            var r = l(202784),
                n = l(107267),
                o = l(371344),
                t = l(956272),
                i = l(666536),
                s = l(943052);
            const d = ({ basePath: e, isCompact: a = !1, resetPageOnSearch: l = !1, styleType: d }) => {
                    const [c, u, p] = (0, s.Z)(),
                        [b, m] = r.useState(c.get("q") || ""),
                        h = (0, n.useHistory)(),
                        y = r.useRef(!1);
                    r.useEffect(
                        () => (
                            (y.current = !0),
                            () => {
                                y.current = !1;
                            }
                        ),
                        [],
                    );
                    const g = r.useCallback(() => {
                            m(""), h.replace(e);
                        }, [e, h]),
                        S = r.useMemo(
                            () =>
                                (0, i.Z)((e) => {
                                    y.current && (e.length > 0 ? (l ? p({ q: e, p: "1" }) : u("q", e)) : g());
                                }, 1e3),
                            [g, u, p, l],
                        ),
                        f = r.useCallback(
                            (e) => {
                                const { value: a } = e.target;
                                m(a), S(a);
                            },
                            [S],
                        );
                    return r.createElement(o.Z, { Icon: t.default, autoComplete: "off", isCompact: a, leftAligned: !0, onChange: f, onClear: g, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: b, withClearButton: !0 });
                },
                c = r.memo(d);
        },
        736181: (e, a, l) => {
            l.r(a), l.d(a, { default: () => qe });
            var r = l(202784),
                n = l(325686),
                o = l(457311),
                t = l(823161),
                i = l(731708),
                s = l(601413),
                d = l(392237),
                c = l(674132),
                u = l.n(c),
                p = l(150123),
                b = l(252021),
                m = l(443781),
                h = l(952793),
                y = l(835546),
                g = l(615027),
                S = l(771035),
                f = l(668214),
                D = l(919022);
            const _ = (e, a) => a.match.params.screenName || void 0,
                k = (e, a) => {
                    const l = _(0, a);
                    if (l) return D.ZP.selectByScreenName(e, l);
                },
                A = (0, f.Z)()
                    .propsFromState(() => ({ screenName: _, user: k }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: D.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                w,
                F,
                E,
                I,
                C,
                M,
                Z,
                P,
                x,
                B,
                K,
                L,
                T,
                j = l(807896),
                R = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (w = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (F = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (E = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (I = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "result",
                                            plural: !1,
                                            selections: [
                                                (C = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (M = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
                                                        { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                                        { args: null, kind: "FragmentSpread", name: "JobSearchListItem_user" },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "ApiRecruitingOrganizationResults",
                                                            kind: "LinkedField",
                                                            name: "recruiting_organization_results",
                                                            plural: !1,
                                                            selections: [
                                                                (Z = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "result",
                                                                    plural: !1,
                                                                    selections: [
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                {
                                                                                    alias: "consumer_job_search",
                                                                                    args: [(P = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (x = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                        (B = {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "JobSliceInfo",
                                                                                            kind: "LinkedField",
                                                                                            name: "slice_info",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        }),
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            type: "ApiRecruitingOrganization",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                                (K = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                            ],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [E, v, w, F],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: I,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            C,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    M,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    Z,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            Z,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    C,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (L = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, P]),
                                                                                concreteType: "JobSearchSlice",
                                                                                kind: "LinkedField",
                                                                                name: "consumer_job_search",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "ApiJobResults",
                                                                                        kind: "LinkedField",
                                                                                        name: "items_results",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            (T = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            Z,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    C,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "JobCore",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "core",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            T,
                                                                                                        ],
                                                                                                        type: "ApiJob",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    x,
                                                                                    B,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: L, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            T,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            T,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    T,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            K,
                                        ],
                                        storageKey: null,
                                    },
                                    T,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "fYvxKiGKvUPjY1YYCJBEyw", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            R.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const z = R;
            l(585488);
            var N = l(38293),
                O = l(652904),
                U = l(736063),
                J = l(943052),
                H = l(293115),
                W = l(127218),
                q = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "UserJobList_jobsSlice",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiJobResults",
                            kind: "LinkedField",
                            name: "items_results",
                            plural: !0,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "UserJobListItem_job" }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "JobSearchSlice",
                    abstractKey: null,
                    hash: "a688905aa4e96a202044a60f562fa122",
                };
            const $ = q;
            var V = l(277660),
                Q = l.n(V),
                Y = l(965245),
                G = l(725516);
            const X = (e, a, l) => ({ id: e, position: a, is_viewer_follows_user: l }),
                ee = (e, a, l, r) => ({ profile_id: r, items: [X(e, a, l)] });
            var ae = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserJobListItem_job",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                ],
                type: "JobCore",
                abstractKey: null,
                hash: "0e4f5949b9df9ad17952651c89f85a17",
            };
            const le = ae;
            var re = l(301503),
                ne = l(366635),
                oe = l(989272),
                te = l(925873),
                ie = l(952428),
                se = l(457458),
                de = l(524496),
                ce = l(966886),
                ue = l(187669),
                pe = l(949626),
                be = l(856438),
                me = l(910113),
                he = l(478414),
                ye = l(499102);
            const ge = ({ fallbackName: e, user: a }) => {
                    const l = Q()(me.fR, a);
                    return l && l.legacy && l.legacy.name && l.legacy.screen_name ? r.createElement(ne.Z, { avatarSize: "small", isVerified: l.legacy.verified, name: l.legacy.name, nameSize: "subtext2", screenName: l.legacy.screen_name, screenNameSize: "subtext2", verifiedType: l.legacy.verified_type ?? void 0, weight: "normal" }) : e ? r.createElement(i.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                Se = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                fe = "user-job-list-item-short-description",
                De = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                _e = ({ allowShare: e = !1, companyName: a, createdAt: l, formattedSalary: o, isFeatured: t, isVerifiedOrg: s, jobId: d, jobTitle: c, location: u, onClick: p, profileId: b, redirectUrl: m, salaryInterval: h, shortDescription: y, user: g, withUserInfo: S = !1 }) => {
                    (0, ue.q)(() => {
                        (0, oe.fH)((0, he.yW)(fe, Se), fe);
                    });
                    const f = r.useMemo(() => ({ label: c }), [c]),
                        D = r.useMemo(() => te.Z.getContentStateFromRaw(y), [y]),
                        _ = r.useMemo(() => D && (0, re.convertFromRaw)(D).hasText(), [D]),
                        k = r.useMemo(() => `/i/jobs/${d}`, [d]);
                    return r.createElement(ie.Z, { interactive: !0, link: s ? { pathname: k, external: !0 } : m || "", onClick: p, style: De.listContainer }, r.createElement(n.Z, { style: De.items }, r.createElement(i.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), S ? r.createElement(ge, { fallbackName: a, user: g }) : null, r.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), o ? r.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, se.M)(o, h)) : null, D && _ ? r.createElement(n.Z, { style: De.shortDescription }, r.createElement(pe.Z, { className: fe }, r.createElement(de.Z, { contentState: D, paragraphFontSizeOverride: Se.paragraphFontSize }))) : null), r.createElement(n.Z, { style: De.lastRow }, r.createElement(n.Z, { style: De.itemRow }, r.createElement(n.Z, { style: De.itemRow }, l ? r.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: De.timestamp, timestamp: l }) : null, t ? r.createElement(be.Z, null) : null), e ? r.createElement(ye.Z, { iconSize: "small", jobId: d, jobUserId: b }) : null)));
                },
                ke = le,
                Ae = ({ isViewerFollowsUser: e, item: a, jobId: l, jobIndex: n, profileId: o, user: t }) => {
                    const i = (0, G.z)(),
                        s = Q()(ke, a),
                        d = r.useCallback(() => {
                            i.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: o, items: [{ id: l, position: n, is_viewer_follows_user: e }] } });
                        }, [i, e, l, n, o]),
                        c = Boolean(t?.is_verified_organization);
                    return s && s.title && s.location ? r.createElement(_e, { allowShare: c, createdAt: s.created_at, formattedSalary: s.formatted_salary, isFeatured: Boolean(s.featured), isVerifiedOrg: t?.is_verified_organization, jobId: l, jobTitle: s.title, location: s.location, onClick: d, profileId: o, redirectUrl: s.redirect_url || "", salaryInterval: s.salary_interval, salaryMax: s.salary_max, salaryMin: s.salary_min, shortDescription: s.short_description, user: t }) : null;
                },
                ve = r.memo(Ae),
                we = $,
                Fe = (e) => e.rest_id,
                Ee = ({ fetchNext: e, isViewerFollowsUser: a, profileId: l, slice: n, user: t }) => {
                    const i = (0, G.z)(),
                        s = Q()(we, n).items_results,
                        d = r.useCallback(
                            (e) => {
                                const n = e.result?.core;
                                return n ? r.createElement(ve, { isViewerFollowsUser: a, item: n, jobId: e.rest_id, jobIndex: s.findIndex((a) => a.rest_id === e.rest_id), profileId: l, user: t }) : null;
                            },
                            [a, s, l, t],
                        ),
                        [c, u] = r.useState([]),
                        p = r.useCallback(
                            (e) => {
                                e.positions.forEach((r, n) => {
                                    var o, t, s;
                                    r.rectangle.getTop() + r.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && r.id && !c.includes(r.id) && (i.scribe({ ...((o = "job_list"), (t = "impression"), (s = "job"), { section: "jobs_list", component: o, element: s, action: t }), data: { ...ee(r.id, n, a, l) } }), u((e) => [...e, r.id]));
                                });
                            },
                            [i, c, a, l],
                        );
                    return s ? (s.length ? r.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: Fe, items: s, onItemsRendered: p, onNearEnd: e, renderer: d }) : r.createElement(o.Z, { header: "No jobs" })) : null;
                },
                Ie = r.memo(Ee),
                Ce = { page: "jobs_list", section: "all" },
                Me = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Ze = z,
                Pe = (e) => {
                    const { query: a, screenName: l, user: n } = e,
                        o = r.useMemo(() => {
                            const e = a?.keyword ? { keyword: a.keyword } : null;
                            return { userId: n.id_str, count: 50, cursor: null, searchParams: e };
                        }, [a, n.id_str]),
                        { data: t, fetchNext: i } = (0, W.C)(Ze, o),
                        s = t?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return s ? r.createElement(H.nO, { namespace: Ce }, r.createElement(O.Z, null, r.createElement(r.Fragment, null, r.createElement(N.Z, { title: Me(l) }), r.createElement(Ie, { fetchNext: i, isViewerFollowsUser: n.following, profileId: n.id_str, slice: s, user: t.data.result })))) : null;
                },
                xe = { context: "UserJobs" },
                Be = (e) => {
                    const [a] = (0, J.Z)(),
                        l = r.useMemo(() => ({ keyword: a.get("q") }), [a]);
                    return r.createElement(U.H, { errorConfig: xe }, r.createElement(Pe, (0, j.Z)({}, e, { query: l })));
                },
                Ke = r.memo(Be);
            var Le = l(138099),
                Te = l(154003),
                je = l(466818),
                Re = l(985124);
            const ze = () => {
                    const [e, a] = (0, J.Z)(),
                        l = r.useCallback(
                            (e, l) => {
                                a("t", e);
                            },
                            [a],
                        ),
                        n = r.useMemo(() => e.get("t") ?? "", [e]);
                    return r.createElement(je.ZP, { label: "Job category", onChange: l, options: Re.pg, testID: "select-team", value: n, withEmptyOption: !0 });
                },
                Ne = ({ onDismiss: e, screenName: a }) => r.createElement(Le.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, r.createElement(n.Z, { style: Oe.modalContent }, r.createElement(i.ZP, null, "Search jobs")), r.createElement(S.Z, { basePath: `/${a}/jobs` }), r.createElement(ze, null), r.createElement(Te.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Ue = r.memo(Ne),
                Je = u().b007440a,
                He = u().c5fb5a1a,
                We = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = A((e) => {
                    const [a, l] = r.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: f } = e,
                        { viewerUserId: D } = r.useContext(m.rC),
                        _ = (0, h.hC)("recruiting_jobs_list_search_enabled"),
                        k = (0, h.hC)("recruiting_job_recommendations_enabled"),
                        A = (0, h.hC)("xprofile_blocked_by_view_enabled");
                    r.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const v = f?.id_str === D,
                        w = !f || (f && (0, y.n5)({ isOwnProfile: v, isSoftBlockEnabled: A, user: f })),
                        F = r.useCallback(() => {
                            l(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === f?.verified_type || "Square" === f?.profile_image_shape ? "square" : "circle";
                            return r.createElement(n.Z, { style: We.rightControlContainer }, r.createElement(n.Z, null, f ? r.createElement(t.default, { screenName: u, shape: e, size: "large", uri: f.profile_image_url_https }) : r.createElement(t.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), r.createElement(n.Z, null, r.createElement(i.ZP, { size: "body", weight: "bold" }, Je), r.createElement(s.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return w ? r.createElement(r.Fragment, null, r.createElement(b.Z, { backLocation: "/", history: c, primaryContent: f ? (!f?.protected || f?.following || v ? r.createElement(r.Fragment, null, _ && u ? r.createElement(n.Z, { style: We.rightControlContainer }, r.createElement(n.Z, { style: We.searchContainer }, r.createElement(S.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, r.createElement(Ke, { screenName: u, user: f })) : r.createElement(o.Z, { header: He })) : null, primaryContentLabel: Je, sidebarContent: k ? r.createElement(n.Z, { style: We.sidebarRoot }, r.createElement(p.Z, { isSidebarModule: !0 })) : null, title: e() }), a ? r.createElement(Ue, { onDismiss: F, screenName: u }) : null) : r.createElement(g.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        524496: (e, a, l) => {
            l.d(a, { Z: () => D });
            l(136728);
            var r = l(202784),
                n = l(301503),
                o = l(325686),
                t = l(595088),
                i = l(516951),
                s = l(731708),
                d = l(779802),
                c = l(537392),
                u = l(989272),
                p = l(925873),
                b = l(202253),
                m = l(786475),
                h = l(392237),
                y = l(135904);
            const g = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                S = (0, t.Z)(g).reduce((e, [a, l]) => e.set(a, l), n.DefaultDraftBlockRenderMap);
            let f = !1;
            const D = r.memo(function (e) {
                    const { componentByType: a, contentState: l, onScribeEvent: t, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        f || (u.fH(y.c, y.n), (f = !0));
                    }, []);
                    const h = [(0, b.ez)(t, s), b.aF, b.RU];
                    e.disable_entityLinkDecorator || h.push((0, b.NA)(t, s));
                    const g = p.Z.initEditorState(l, { decorators: h });
                    let D = i.Z;
                    return (
                        a &&
                            (D = (e) => {
                                const l = e.getType();
                                return a[l] || null;
                            }),
                        r.createElement(c.ZP, null, ({ containerWidth: e }) => r.createElement(o.Z, { style: _.fontFamily }, r.createElement(n.Editor, { blockRenderMap: S, blockRendererFn: D, blockStyleFn: (0, d.su)(m.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                _ = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        466818: (e, a, l) => {
            l.d(a, { ZP: () => g });
            var r = l(202784),
                n = l(325686),
                o = l(487552),
                t = l(302752),
                i = l(183806),
                s = l(731708),
                d = l(950822),
                c = l(224162),
                u = l(392237);
            const p = r.forwardRef((e, a) => (0, d.Z)("select", { ...e, ref: a })),
                b = (e) => (0, d.Z)("option", e);
            let m = 1;
            class h extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: a, withEmptyOption: l } = this.props,
                                { selectedIndex: r, value: n } = e.target;
                            a && a(n, r - (l ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: a } = this.props;
                            this.setState({ isFocused: !1 }), a && a();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: a } = this.props;
                            this.setState({ isFocused: !0 }), a && a();
                        }),
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: a, errorText: l, hasError: d, helperText: m, options: h, style: g, testID: S, value: f, withEmptyOption: D } = this.props,
                        { isFocused: _ } = this.state,
                        k = s.ZP.getLanguage(),
                        A = void 0 === d ? !!l : d,
                        v = new Set();
                    l && v.add(this._errorID), e && v.add(e), m && v.add(this._helperID);
                    const w = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const s = "ja" === k ? u.default.theme.fontFamilies.japan : "rtl" === e || t.Z.isLocaleRTL(k) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [i.Z.border, y.container, a && i.Z.disabled, _ && i.Z.focusedBorderValid, A && i.Z.invalidBorderColor, _ && A && i.Z.focusedBorderInvalid, g] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": w, "aria-invalid": A, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: s }, a && i.Z.disabled], testID: S || "", value: f },
                                    D ? r.createElement(b, { disabled: !0, style: y.option, value: "" }) : null,
                                    h.map((e) => {
                                        const { disabled: a, label: l, value: n } = e;
                                        return r.createElement(b, { disabled: a, key: `${l}-${n}`, style: y.option, value: n }, l);
                                    }),
                                ),
                                r.createElement(o.default, { style: [y.dropdownCaret, _ && i.Z.validColor, !(!d && !l) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        A && l ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: l } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(s.ZP, { color: a || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: y.label }, l);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "gray700", id: this._helperID, style: y.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "red500", id: this._errorID, style: y.helperText }, this.props.errorText));
                }
            }
            h.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                g = h;
        },
        183806: (e, a, l) => {
            l.d(a, { Z: () => r });
            const r = l(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.22c34d5a.js.map
