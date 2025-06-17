"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs"],
    {
        229333: (e, a, l) => {
            l.d(a, { Z: () => u });
            var r = l(202784),
                n = l(466999),
                t = l(325686),
                o = l(392237),
                s = l(111677);
            const i = l.n(s)().e5b0063d;
            let d = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        l = i({ title: a });
                    return r.createElement(t.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, a), r.createElement(t.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        414939: (e, a, l) => {
            l.d(a, { Z: () => i });
            var r = l(202784),
                n = l(325686),
                t = l(392237);
            class o extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: s.root });
                }
            }
            const s = t.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = o;
        },
        856438: (e, a, l) => {
            l.d(a, { Z: () => m });
            var r = l(202784),
                n = l(868634),
                t = l(731708),
                o = l(392237),
                s = l(111677),
                i = l.n(s),
                d = l(262009);
            const c = i().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => r.createElement(n.ZP, { style: u.label, type: "priority" }, r.createElement(t.ZP, { style: u.featuredLabel }, r.createElement(d.default, { style: u.featuredIcon }), c));
        },
        150123: (e, a, l) => {
            l.d(a, { Z: () => o });
            var r = l(202784),
                n = l(691533),
                t = l(402058);
            const o = (e) => r.createElement(n.Z, { hideOnError: !0 }, r.createElement(t.Z, e));
        },
        965245: (e, a, l) => {
            l.d(a, { Z: () => i });
            var r = l(807896),
                n = l(202784),
                t = l(229333),
                o = l(414939),
                s = l(334346);
            const i = ({ accessibilityTitle: e, footer: a = n.createElement(o.Z, null), ...l }) => {
                const i = n.createElement(s.C, (0, r.Z)({}, l, { footer: a }));
                return e ? n.createElement(t.Z, { title: e }, i) : i;
            };
        },
        334346: (e, a, l) => {
            l.d(a, { C: () => i, Z: () => s });
            var r = l(807896),
                n = l(202784),
                t = l(524084),
                o = l(768572);
            const s = "stable_sort_index",
                i = n.forwardRef((e, a) => {
                    const l = e.cacheKey;
                    return n.createElement(o.ZP, { identifier: l }, n.createElement(t.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, l) => {
            l.d(a, { Z: () => o });
            var r = l(202784),
                n = l(107267),
                t = l(115553);
            const o = (e) => {
                (0, n.useHistory)();
                return r.createElement(t.A, e);
            };
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => c });
            var r = l(202784),
                n = l(500002),
                t = l(668214),
                o = l(997174),
                s = l(118823);
            const i = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
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
                            location: { pathname: t, search: o },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (i = !0));
                    const d = n || s;
                    ((d && n !== s) || (!d && l !== t) || r !== o || i) && this._performPageUpdates(this.props);
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
            const c = (0, n.ZP)(i(d));
        },
        524084: (e, a, l) => {
            l.d(a, { Z: () => o });
            var r = l(202784),
                n = l(523561),
                t = l(195560);
            const o = (0, n.Z)({ loader: () => l.e("loader.AbsolutePower").then(l.bind(l, 590136)), renderPlaceholder: (e, a) => r.createElement(t.Z, { hasError: e, onRetry: a }) });
        },
        402058: (e, a, l) => {
            l.d(a, { Z: () => r });
            l(202784);
            const r = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.8"),
                        l.e("icons.15"),
                        l.e("icons.7"),
                        l.e("icons.3"),
                        l.e("icons.24"),
                        l.e("icons.12"),
                        l.e("icons.22"),
                        l.e("icons.2"),
                        l.e("icons.18"),
                        l.e("icons.9"),
                        l.e("icons.6"),
                        l.e("modules.common-e907d115"),
                        l.e("modules.common-e019dbda"),
                        l.e("icons.14"),
                        l.e("icons.5"),
                        l.e("icons.16"),
                        l.e("icons.19"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                        l.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
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
            l.d(a, { $J: () => s, WA: () => K, ZC: () => v, cj: () => U, eo: () => r.eo, hb: () => B, kW: () => i, pg: () => w, rP: () => o, u4: () => O, xk: () => T });
            var r = l(89217),
                n = l(111677),
                t = l.n(n);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                s = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(r.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = t().d2b8da2c,
                c = t().cd958040,
                u = t().c5760ca2,
                m = t().d31b4a2a,
                p = t().df1b7550,
                h = t().f38959a6,
                b = t().bc78a26c,
                g = t().ec28738e,
                y = t().icb06308,
                f = t().d0b978ec,
                _ = t().af19cdc2,
                k = t().e4a51fca,
                D = t().e8ca78ae,
                S = t().c365dcc6,
                v = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: p, sales_am: h, operations: b, people_hr: g, finance_accounting: y, legal_compliance: f, science_engineering: _, medical: k, construction_trades: D, other: S }),
                w = Object.entries(v).map(([e, a]) => ({ label: String(a), value: e })),
                F = t().e25d75e4,
                E = t().e89b3f04,
                Z = t().h55825dc,
                C = t().cc537386,
                I = t().jfc3cece,
                M = t().e1b683aa,
                P = t().c4627fda,
                x = t().db75b47c,
                K = Object.freeze({ intern: F, entry_level: E, junior: Z, mid_level: C, senior: I, lead: M, manager: P, executive: x }),
                T = Object.entries(K).map(([e, a]) => ({ label: String(a), value: e })),
                L = t().i312f0ce,
                A = t().b4aff05e,
                j = t().c08b9138,
                R = t().ia5d6422,
                z = t().h97c7f42,
                N = t().ibed2d04,
                U = Object.freeze({ onsite: { label: L, description: R, value: "onsite" }, remote: { label: j, description: N, value: "remote" }, hybrid: { label: A, description: z, value: "hybrid" } }),
                O = Object.keys(U).map((e) => ({ label: U[e].label, value: e, description: U[e].description })),
                B = Object.keys(r.Qw).map((e) => ({ ...r.Qw[e], value: String(r.Qw[e].value) }));
        },
        943052: (e, a, l) => {
            l.d(a, { Z: () => t });
            l(543673), l(240753), l(128399), l(136728);
            var r = l(202784),
                n = l(107267);
            const t = () => {
                const e = (0, n.useLocation)(),
                    a = (0, n.useHistory)(),
                    [l, t] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = r.useCallback(
                        (r, n) => {
                            const t = new URLSearchParams(l);
                            t.set(r, n), a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, l],
                    ),
                    s = r.useCallback(
                        (r) => {
                            const n = new URLSearchParams(l);
                            for (const e in r) r[e] ? n.set(e, r[e]) : n.delete(e);
                            a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, l],
                    );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), o, s];
            };
        },
        42508: (e, a, l) => {
            l.d(a, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, a, l) => {
            l.d(a, { ZP: () => n, n5: () => o });
            var r = l(42508);
            const n = ({ displaySensitiveMedia: e, isNotFound: a, isSuspended: l, isWithheld: r, user: n, userProfileInterstitialType: o, viewerUserId: s }) => {
                    const i = !!s && s === n.id_str,
                        d = n.blocked_by,
                        c = n.blocking,
                        u = t({ displaySensitiveMedia: e, isOwnProfile: i, user: n, userProfileInterstitialType: o }),
                        m = (i || !r) && !l;
                    return { avatar: i || (!u && !a && !l && !r), badges: i || !r, description: i || (!c && !d && !u && !l && !r), followButton: !(i || d || u || a || l || r), followersYouKnow: !i && !d && !c && !u && !a && !l && !r && (n.following || !n.protected), followIndicator: !r, fullName: m, label: m, stats: i || (!d && !u && !l && !r), subscriptionsCount: i || !n.has_hidden_subscriptions_on_profile };
                },
                t = ({ displaySensitiveMedia: e, isOwnProfile: a, user: l, userProfileInterstitialType: n }) => (n === r.Z.SensitiveMedia || n === r.Z.OffensiveProfileContent) && !(a || l.following || e),
                o = ({ isOwnProfile: e, isSoftBlockEnabled: a = !1, user: l }) => {
                    const r = l.blocked_by,
                        n = l.protected && !l.following;
                    return a ? e || !n : e || (!n && !r);
                };
        },
        127218: (e, a, l) => {
            l.d(a, { C: () => y });
            var r = l(202784),
                n = l(614983),
                t = l.n(n),
                o = l(437429),
                s = l.n(o),
                i = l(57074),
                d = l.n(i),
                c = l(10622),
                u = l.n(c),
                m = l(585488),
                p = l(71620),
                h = l(163889),
                b = l(312771),
                g = l(535338);
            function y(e, a, l) {
                const [n, o] = r.useState(!1),
                    [i, c] = r.useState(null),
                    y = s()(),
                    f = d()(a),
                    _ = (0, p.po)(),
                    k = (0, g.p)(e, f, l);
                return r.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    t()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: l, previous_cursor: r } =
                            (function (e, a) {
                                try {
                                    t()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let l = e;
                                    for (const e of a) t()(!!l, "The provided path is invalid."), t()("string" == typeof e, "Unexpected value for path!"), (l = l?.[e]);
                                    return l;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(k, a) || {},
                        s = (a) => {
                            n ||
                                (o(!0),
                                u()(y, e, { ...f, cursor: a }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), _(e);
                                    },
                                }));
                        },
                        d = () => {
                            l && s(l);
                        },
                        p = () => {
                            r && s(r);
                        },
                        g = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: b.ZP.FAILED, error: i, fetchNext: d, fetchPrevious: p, refetch: g, data: k, hasNext: Boolean(l), hasPrevious: Boolean(r) } : { subsequentFetchStatus: n ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: p, refetch: g, data: k, hasNext: Boolean(l), hasPrevious: Boolean(r) };
                }, [e, k, n, i, y, f, _]);
            }
        },
        499102: (e, a, l) => {
            l.d(a, { Z: () => C });
            l(136728);
            var r = l(202784),
                n = l(576648),
                t = l(107267),
                o = l(811176),
                s = l(40644),
                i = l(111677),
                d = l.n(i),
                c = l(630715),
                u = l(717160),
                m = l(885724),
                p = l(106186),
                h = l(786272),
                b = l(443781),
                g = l(952793),
                y = l(782642),
                f = l(226298),
                _ = l(701796);
            const k = d().f508c49c,
                D = d().f88553c8,
                S = d().d6825dce,
                v = d().b9613442,
                w = d().c2b3f0da,
                F = d().c791d3fc,
                E = { label: d().ifea3114, withDelay: !0 },
                Z = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const i = (0, y.p)(),
                        d = (0, t.useHistory)(),
                        { userClaims: Z, viewerUserId: C } = (0, b.QZ)(),
                        I = (0, g.hC)("recruiting_jobs_list_share_enabled"),
                        M = (0, g.hC)("recruiting_pin_job_enabled") && (Z.isTrueAndEnabled("subscriptions_feature_premium_jobs") || Z.isVerifiedOrg()) && C !== l,
                        P = r.useCallback(() => {
                            d.push({ query: { text: (0, _.w)((0, f.z)(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        x = r.useCallback(() => {
                            n.Z.setString((0, _.w)((0, f.z)(a))), i({ text: D });
                        }, [i, a]),
                        K = r.useCallback(() => {
                            d.push({ query: { text: (0, _.w)((0, f.z)(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        T = r.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        L = r.useCallback(() => {
                            const e = [];
                            return n.Z.isAvailable() && e.push({ text: k, onClick: x, Icon: c.default }), C && (e.push(((e) => ({ text: S, onClick: e, Icon: u.default }))(P)), e.push(((e) => ({ text: v, onClick: e, Icon: m.default }))(K))), M && e.push(((e) => ({ text: w, onClick: e, Icon: p.default }))(T)), e;
                        }, [x, P, T, K, M, C]),
                        A = r.useCallback(
                            (e) => {
                                const a = L();
                                return a.length ? r.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        j = r.useCallback(() => {}, []);
                    return I ? r.createElement(s.ZP, { Icon: h.default, "aria-label": F, color: "text", hoverLabel: E, iconSize: e, onPress: j, renderMenu: A, testID: "job-share-action-btn" }) : null;
                },
                C = r.memo(Z);
        },
        771035: (e, a, l) => {
            l.d(a, { Z: () => c });
            var r = l(202784),
                n = l(107267),
                t = l(371344),
                o = l(956272),
                s = l(666536),
                i = l(943052);
            const d = ({ basePath: e, isCompact: a = !1, resetPageOnSearch: l = !1, styleType: d }) => {
                    const [c, u, m] = (0, i.Z)(),
                        [p, h] = r.useState(c.get("q") || ""),
                        b = (0, n.useHistory)(),
                        g = r.useRef(!1);
                    r.useEffect(
                        () => (
                            (g.current = !0),
                            () => {
                                g.current = !1;
                            }
                        ),
                        [],
                    );
                    const y = r.useCallback(() => {
                            h(""), b.replace(e);
                        }, [e, b]),
                        f = r.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    g.current && (e.length > 0 ? (l ? m({ q: e, p: "1" }) : u("q", e)) : y());
                                }, 1e3),
                            [y, u, m, l],
                        ),
                        _ = r.useCallback(
                            (e) => {
                                const { value: a } = e.target;
                                h(a), f(a);
                            },
                            [f],
                        );
                    return r.createElement(t.Z, { Icon: o.default, autoComplete: "off", isCompact: a, leftAligned: !0, onChange: _, onClear: y, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                c = r.memo(d);
        },
        736181: (e, a, l) => {
            l.r(a), l.d(a, { default: () => qe });
            var r = l(202784),
                n = l(325686),
                t = l(457311),
                o = l(823161),
                s = l(731708),
                i = l(601413),
                d = l(392237),
                c = l(111677),
                u = l.n(c),
                m = l(150123),
                p = l(252021),
                h = l(443781),
                b = l(952793),
                g = l(835546),
                y = l(615027),
                f = l(771035),
                _ = l(668214),
                k = l(919022);
            const D = (e, a) => a.match.params.screenName || void 0,
                S = (e, a) => {
                    const l = D(0, a);
                    if (l) return k.ZP.selectByScreenName(e, l);
                },
                v = (0, _.Z)()
                    .propsFromState(() => ({ screenName: D, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var w,
                F,
                E,
                Z,
                C,
                I,
                M,
                P,
                x,
                K,
                T,
                L,
                A,
                j,
                R = l(807896),
                z = {
                    fragment: {
                        argumentDefinitions: [(w = { defaultValue: null, kind: "LocalArgument", name: "count" }), (F = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (E = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (Z = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (C = [
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
                                                (I = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                                                                (P = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                    args: [(x = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (K = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                        (T = {
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
                                                (L = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        argumentDefinitions: [Z, w, F, E],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: C,
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
                                            I,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    M,
                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    P,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            P,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    I,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (A = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, x]),
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
                                                                                            (j = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            P,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    I,
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
                                                                                                            j,
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
                                                                                    K,
                                                                                    T,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: A, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            j,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            j,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    j,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            L,
                                        ],
                                        storageKey: null,
                                    },
                                    j,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zNjyUs2MiymdZNSapnTINA", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            z.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const N = z;
            l(585488);
            var U = l(38293),
                O = l(652904),
                B = l(736063),
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
                te = l(989272),
                oe = l(925873),
                se = l(952428),
                ie = l(457458),
                de = l(524496),
                ce = l(966886),
                ue = l(187669),
                me = l(949626),
                pe = l(856438),
                he = l(910113),
                be = l(478414),
                ge = l(499102);
            const ye = ({ fallbackName: e, user: a }) => {
                    const l = Q()(he.fR, a);
                    return l && l.core && l.core.name && l.core.screen_name ? r.createElement(ne.Z, { avatarSize: "small", isVerified: l.verification?.verified ?? !1, name: l.core.name, nameSize: "subtext2", screenName: l.core.screen_name, screenNameSize: "subtext2", verifiedType: l.verification?.verified_type ?? void 0, weight: "normal" }) : e ? r.createElement(s.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                fe = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                _e = "user-job-list-item-short-description",
                ke = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                De = ({ allowShare: e = !1, companyName: a, createdAt: l, formattedSalary: t, isFeatured: o, isVerifiedOrg: i, jobId: d, jobTitle: c, location: u, onClick: m, profileId: p, redirectUrl: h, salaryInterval: b, shortDescription: g, user: y, withUserInfo: f = !1 }) => {
                    (0, ue.q)(() => {
                        (0, te.fH)((0, be.yW)(_e, fe), _e);
                    });
                    const _ = r.useMemo(() => ({ label: c }), [c]),
                        k = r.useMemo(() => oe.Z.getContentStateFromRaw(g), [g]),
                        D = r.useMemo(() => k && (0, re.convertFromRaw)(k).hasText(), [k]),
                        S = r.useMemo(() => `/i/jobs/${d}`, [d]);
                    return r.createElement(se.Z, { interactive: !0, link: i ? { pathname: S, external: !0 } : h || "", onClick: m, style: ke.listContainer }, r.createElement(n.Z, { style: ke.items }, r.createElement(s.ZP, { hoverLabel: _, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), f ? r.createElement(ye, { fallbackName: a, user: y }) : null, r.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), t ? r.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, ie.M)(t, b)) : null, k && D ? r.createElement(n.Z, { style: ke.shortDescription }, r.createElement(me.Z, { className: _e }, r.createElement(de.Z, { contentState: k, paragraphFontSizeOverride: fe.paragraphFontSize }))) : null), r.createElement(n.Z, { style: ke.lastRow }, r.createElement(n.Z, { style: ke.itemRow }, r.createElement(n.Z, { style: ke.itemRow }, l ? r.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: l }) : null, o ? r.createElement(pe.Z, null) : null), e ? r.createElement(ge.Z, { iconSize: "small", jobId: d, jobUserId: p }) : null)));
                },
                Se = le,
                ve = ({ isViewerFollowsUser: e, item: a, jobId: l, jobIndex: n, profileId: t, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Se, a),
                        d = r.useCallback(() => {
                            s.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: t, items: [{ id: l, position: n, is_viewer_follows_user: e }] } });
                        }, [s, e, l, n, t]),
                        c = Boolean(o?.is_verified_organization);
                    return i && i.title && i.location ? r.createElement(De, { allowShare: c, createdAt: i.created_at, formattedSalary: i.formatted_salary, isFeatured: Boolean(i.featured), isVerifiedOrg: o?.is_verified_organization, jobId: l, jobTitle: i.title, location: i.location, onClick: d, profileId: t, redirectUrl: i.redirect_url || "", salaryInterval: i.salary_interval, salaryMax: i.salary_max, salaryMin: i.salary_min, shortDescription: i.short_description, user: o }) : null;
                },
                we = r.memo(ve),
                Fe = $,
                Ee = (e) => e.rest_id,
                Ze = ({ fetchNext: e, isViewerFollowsUser: a, profileId: l, slice: n, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Fe, n).items_results,
                        d = r.useCallback(
                            (e) => {
                                const n = e.result?.core;
                                return n ? r.createElement(we, { isViewerFollowsUser: a, item: n, jobId: e.rest_id, jobIndex: i.findIndex((a) => a.rest_id === e.rest_id), profileId: l, user: o }) : null;
                            },
                            [a, i, l, o],
                        ),
                        [c, u] = r.useState([]),
                        m = r.useCallback(
                            (e) => {
                                e.positions.forEach((r, n) => {
                                    var t, o, i;
                                    r.rectangle.getTop() + r.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && r.id && !c.includes(r.id) && (s.scribe({ ...((t = "job_list"), (o = "impression"), (i = "job"), { section: "jobs_list", component: t, element: i, action: o }), data: { ...ee(r.id, n, a, l) } }), u((e) => [...e, r.id]));
                                });
                            },
                            [s, c, a, l],
                        );
                    return i ? (i.length ? r.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: Ee, items: i, onItemsRendered: m, onNearEnd: e, renderer: d }) : r.createElement(t.Z, { header: "No jobs" })) : null;
                },
                Ce = r.memo(Ze),
                Ie = { page: "jobs_list", section: "all" },
                Me = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Pe = N,
                xe = (e) => {
                    const { query: a, screenName: l, user: n } = e,
                        t = r.useMemo(() => {
                            const e = a?.keyword ? { keyword: a.keyword } : null;
                            return { userId: n.id_str, count: 50, cursor: null, searchParams: e };
                        }, [a, n.id_str]),
                        { data: o, fetchNext: s } = (0, W.C)(Pe, t),
                        i = o?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return i ? r.createElement(H.nO, { namespace: Ie }, r.createElement(O.Z, null, r.createElement(r.Fragment, null, r.createElement(U.Z, { title: Me(l) }), r.createElement(Ce, { fetchNext: s, isViewerFollowsUser: n.following, profileId: n.id_str, slice: i, user: o.data.result })))) : null;
                },
                Ke = { context: "UserJobs" },
                Te = (e) => {
                    const [a] = (0, J.Z)(),
                        l = r.useMemo(() => ({ keyword: a.get("q") }), [a]);
                    return r.createElement(B.H, { errorConfig: Ke }, r.createElement(xe, (0, R.Z)({}, e, { query: l })));
                },
                Le = r.memo(Te);
            var Ae = l(138099),
                je = l(154003),
                Re = l(466818),
                ze = l(985124);
            const Ne = () => {
                    const [e, a] = (0, J.Z)(),
                        l = r.useCallback(
                            (e, l) => {
                                a("t", e);
                            },
                            [a],
                        ),
                        n = r.useMemo(() => e.get("t") ?? "", [e]);
                    return r.createElement(Re.ZP, { label: "Job category", onChange: l, options: ze.pg, testID: "select-team", value: n, withEmptyOption: !0 });
                },
                Ue = ({ onDismiss: e, screenName: a }) => r.createElement(Ae.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, r.createElement(n.Z, { style: Oe.modalContent }, r.createElement(s.ZP, null, "Search jobs")), r.createElement(f.Z, { basePath: `/${a}/jobs` }), r.createElement(Ne, null), r.createElement(je.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Be = r.memo(Ue),
                Je = u().b007440a,
                He = u().c5fb5a1a,
                We = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = v((e) => {
                    const [a, l] = r.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: _ } = e,
                        { viewerUserId: k } = r.useContext(h.rC),
                        D = (0, b.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, b.hC)("recruiting_job_recommendations_enabled"),
                        v = (0, b.hC)("xprofile_blocked_by_view_enabled");
                    r.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const w = _?.id_str === k,
                        F = !_ || (_ && (0, g.n5)({ isOwnProfile: w, isSoftBlockEnabled: v, user: _ })),
                        E = r.useCallback(() => {
                            l(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === _?.verified_type || "Square" === _?.profile_image_shape ? "square" : "circle";
                            return r.createElement(n.Z, { style: We.rightControlContainer }, r.createElement(n.Z, null, _ ? r.createElement(o.default, { screenName: u, shape: e, size: "large", uri: _.profile_image_url_https }) : r.createElement(o.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), r.createElement(n.Z, null, r.createElement(s.ZP, { size: "body", weight: "bold" }, Je), r.createElement(i.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return F ? r.createElement(r.Fragment, null, r.createElement(p.Z, { backLocation: "/", history: c, primaryContent: _ ? (!_?.protected || _?.following || w ? r.createElement(r.Fragment, null, D && u ? r.createElement(n.Z, { style: We.rightControlContainer }, r.createElement(n.Z, { style: We.searchContainer }, r.createElement(f.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, r.createElement(Le, { screenName: u, user: _ })) : r.createElement(t.Z, { header: He })) : null, primaryContentLabel: Je, sidebarContent: S ? r.createElement(n.Z, { style: We.sidebarRoot }, r.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), a ? r.createElement(Be, { onDismiss: E, screenName: u }) : null) : r.createElement(y.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        524496: (e, a, l) => {
            l.d(a, { Z: () => k });
            l(136728);
            var r = l(202784),
                n = l(301503),
                t = l(325686),
                o = l(595088),
                s = l(516951),
                i = l(731708),
                d = l(779802),
                c = l(537392),
                u = l(989272),
                m = l(925873),
                p = l(202253),
                h = l(786475),
                b = l(392237),
                g = l(135904);
            const y = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: r.createElement(i.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: r.createElement(i.ZP, null) } },
                f = (0, o.Z)(y).reduce((e, [a, l]) => e.set(a, l), n.DefaultDraftBlockRenderMap);
            let _ = !1;
            const k = r.memo(function (e) {
                    const { componentByType: a, contentState: l, onScribeEvent: o, paragraphFontSizeOverride: i } = e;
                    r.useEffect(() => {
                        _ || (u.fH(g.c, g.n), (_ = !0));
                    }, []);
                    const b = [(0, p.ez)(o, i), p.aF, p.RU];
                    e.disable_entityLinkDecorator || b.push((0, p.NA)(o, i));
                    const y = m.Z.initEditorState(l, { decorators: b });
                    let k = s.Z;
                    return (
                        a &&
                            (k = (e) => {
                                const l = e.getType();
                                return a[l] || null;
                            }),
                        r.createElement(c.ZP, null, ({ containerWidth: e }) => r.createElement(t.Z, { style: D.fontFamily }, r.createElement(n.Editor, { blockRenderMap: f, blockRendererFn: k, blockStyleFn: (0, d.su)(h.Z.isNarrowScreenWidth(e)), editorState: y, onChange: s.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = b.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        466818: (e, a, l) => {
            l.d(a, { ZP: () => y });
            var r = l(202784),
                n = l(325686),
                t = l(487552),
                o = l(302752),
                s = l(183806),
                i = l(731708),
                d = l(950822),
                c = l(224162),
                u = l(392237);
            const m = r.forwardRef((e, a) => (0, d.Z)("select", { ...e, ref: a })),
                p = (e) => (0, d.Z)("option", e);
            let h = 1;
            class b extends r.PureComponent {
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
                        (this._id = `SELECTOR_${h}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (h += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: a, errorText: l, hasError: d, helperText: h, options: b, style: y, testID: f, value: _, withEmptyOption: k } = this.props,
                        { isFocused: D } = this.state,
                        S = i.ZP.getLanguage(),
                        v = void 0 === d ? !!l : d,
                        w = new Set();
                    l && w.add(this._errorID), e && w.add(e), h && w.add(this._helperID);
                    const F = w.size ? [...w].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === S ? u.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(S) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [s.Z.border, g.container, a && s.Z.disabled, D && s.Z.focusedBorderValid, v && s.Z.invalidBorderColor, D && v && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                r.createElement(
                                    m,
                                    { "aria-describedby": F, "aria-invalid": v, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: i }, a && s.Z.disabled], testID: f || "", value: _ },
                                    k ? r.createElement(p, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: a, label: l, value: n } = e;
                                        return r.createElement(p, { disabled: a, key: `${l}-${n}`, style: g.option, value: n }, l);
                                    }),
                                ),
                                r.createElement(t.default, { style: [g.dropdownCaret, D && s.Z.validColor, !(!d && !l) && s.Z.invalidColor] }),
                            );
                        }),
                        h ? this._renderHelperText() : null,
                        v && l ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: l } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(i.ZP, { color: a || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, l);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(i.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(i.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = b;
        },
        183806: (e, a, l) => {
            l.d(a, { Z: () => r });
            const r = l(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.8820981a.js.map
