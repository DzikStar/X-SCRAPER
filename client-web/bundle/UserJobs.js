(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs", "icons/IconItalic-js", "icons/IconNumberedList-js"],
    {
        229333: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => u });
            var t = l(202784),
                r = l(466999),
                n = l(325686),
                o = l(392237),
                s = l(111677);
            const i = l.n(s)().e5b0063d;
            let d = 0;
            class c extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        l = i({ title: a });
                    return t.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, a), t.createElement(n.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        414939: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => i });
            var t = l(202784),
                r = l(325686),
                n = l(392237);
            class o extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(r.Z, { style: s.root });
                }
            }
            const s = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = o;
        },
        856438: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => m });
            var t = l(202784),
                r = l(868634),
                n = l(731708),
                o = l(392237),
                s = l(111677),
                i = l.n(s),
                d = l(262009);
            const c = i().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => t.createElement(r.ZP, { style: u.label, type: "priority" }, t.createElement(n.ZP, { style: u.featuredLabel }, t.createElement(d.default, { style: u.featuredIcon }), c));
        },
        150123: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => o });
            var t = l(202784),
                r = l(691533),
                n = l(402058);
            const o = (e) => t.createElement(r.Z, { hideOnError: !0 }, t.createElement(n.Z, e));
        },
        965245: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => i });
            var t = l(807896),
                r = l(202784),
                n = l(229333),
                o = l(414939),
                s = l(334346);
            const i = ({ accessibilityTitle: e, footer: a = r.createElement(o.Z, null), ...l }) => {
                const i = r.createElement(s.C, (0, t.Z)({}, l, { footer: a }));
                return e ? r.createElement(n.Z, { title: e }, i) : i;
            };
        },
        334346: (e, a, l) => {
            "use strict";
            l.d(a, { C: () => i, Z: () => s });
            var t = l(807896),
                r = l(202784),
                n = l(524084),
                o = l(768572);
            const s = "stable_sort_index",
                i = r.forwardRef((e, a) => {
                    const l = e.cacheKey;
                    return r.createElement(o.ZP, { identifier: l }, r.createElement(n.Z, (0, t.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => o });
            var t = l(202784),
                r = l(107267),
                n = l(115553);
            const o = (e) => {
                (0, r.useHistory)();
                return t.createElement(n.A, e);
            };
        },
        652904: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => c });
            var t = l(202784),
                r = l(500002),
                n = l(668214),
                o = l(997174),
                s = l(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: t },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: o },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (i = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && l !== n) || t !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(i(d));
        },
        524084: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => o });
            var t = l(202784),
                r = l(523561),
                n = l(195560);
            const o = (0, r.Z)({ loader: () => l.e("loader.AbsolutePower").then(l.bind(l, 590136)), renderPlaceholder: (e, a) => t.createElement(n.Z, { hasError: e, onRetry: a }) });
        },
        402058: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => t });
            l(202784);
            const t = (0, l(523561).Z)({
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
                        l.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        l.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        l.e("loader.WideLayout-6107ac1a"),
                        l.e("loader.WideLayout-a2dee9c7"),
                    ]).then(l.bind(l, 527969)),
            });
        },
        226298: (e, a, l) => {
            "use strict";
            l.d(a, { z: () => t });
            const t = (e) => `/i/jobs/${e}`;
        },
        985124: (e, a, l) => {
            "use strict";
            l.d(a, { $J: () => s, WA: () => T, ZC: () => S, cj: () => U, eo: () => t.eo, hb: () => B, kW: () => i, pg: () => E, rP: () => o, u4: () => O, xk: () => K });
            var t = l(89217),
                r = l(111677),
                n = l.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                s = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(t.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = n().d2b8da2c,
                c = n().cd958040,
                u = n().c5760ca2,
                m = n().d31b4a2a,
                p = n().df1b7550,
                h = n().f38959a6,
                g = n().bc78a26c,
                b = n().ec28738e,
                y = n().icb06308,
                f = n().d0b978ec,
                _ = n().af19cdc2,
                k = n().e4a51fca,
                v = n().e8ca78ae,
                D = n().c365dcc6,
                S = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: p, sales_am: h, operations: g, people_hr: b, finance_accounting: y, legal_compliance: f, science_engineering: _, medical: k, construction_trades: v, other: D }),
                E = Object.entries(S).map(([e, a]) => ({ label: String(a), value: e })),
                Z = n().e25d75e4,
                w = n().e89b3f04,
                F = n().h55825dc,
                C = n().cc537386,
                x = n().jfc3cece,
                I = n().e1b683aa,
                P = n().c4627fda,
                M = n().db75b47c,
                T = Object.freeze({ intern: Z, entry_level: w, junior: F, mid_level: C, senior: x, lead: I, manager: P, executive: M }),
                K = Object.entries(T).map(([e, a]) => ({ label: String(a), value: e })),
                L = n().i312f0ce,
                j = n().b4aff05e,
                z = n().c08b9138,
                A = n().ia5d6422,
                R = n().h97c7f42,
                N = n().ibed2d04,
                U = Object.freeze({ onsite: { label: L, description: A, value: "onsite" }, remote: { label: z, description: N, value: "remote" }, hybrid: { label: j, description: R, value: "hybrid" } }),
                O = Object.keys(U).map((e) => ({ label: U[e].label, value: e, description: U[e].description })),
                B = Object.keys(t.Qw).map((e) => ({ ...t.Qw[e], value: String(t.Qw[e].value) }));
        },
        943052: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => n });
            l(543673), l(240753), l(128399), l(136728);
            var t = l(202784),
                r = l(107267);
            const n = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [l, n] = t.useState(new URLSearchParams(e.search));
                t.useEffect(() => {
                    n(new URLSearchParams(e.search));
                }, [e.search]);
                const o = t.useCallback(
                        (t, r) => {
                            const n = new URLSearchParams(l);
                            n.set(t, r), a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, l],
                    ),
                    s = t.useCallback(
                        (t) => {
                            const r = new URLSearchParams(l);
                            for (const e in t) t[e] ? r.set(e, t[e]) : r.delete(e);
                            a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, l],
                    );
                return [t.useMemo(() => new URLSearchParams(e.search), [e.search]), o, s];
            };
        },
        42508: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => t });
            const t = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, a, l) => {
            "use strict";
            l.d(a, { ZP: () => r, n5: () => o });
            var t = l(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: a, isSuspended: l, isWithheld: t, user: r, userProfileInterstitialType: o, viewerUserId: s }) => {
                    const i = !!s && s === r.id_str,
                        d = r.blocked_by,
                        c = r.blocking,
                        u = n({ displaySensitiveMedia: e, isOwnProfile: i, user: r, userProfileInterstitialType: o }),
                        m = (i || !t) && !l;
                    return { avatar: i || (!u && !a && !l && !t), badges: i || !t, description: i || (!c && !d && !u && !l && !t), followButton: !(i || d || u || a || l || t), followersYouKnow: !i && !d && !c && !u && !a && !l && !t && (r.following || !r.protected), followIndicator: !t, fullName: m, label: m, stats: i || (!d && !u && !l && !t), subscriptionsCount: i || !r.has_hidden_subscriptions_on_profile };
                },
                n = ({ displaySensitiveMedia: e, isOwnProfile: a, user: l, userProfileInterstitialType: r }) => (r === t.Z.SensitiveMedia || r === t.Z.OffensiveProfileContent) && !(a || l.following || e),
                o = ({ isOwnProfile: e, isSoftBlockEnabled: a = !1, user: l }) => {
                    const t = l.blocked_by,
                        r = l.protected && !l.following;
                    return a ? e || !r : e || (!r && !t);
                };
        },
        127218: (e, a, l) => {
            "use strict";
            l.d(a, { C: () => y });
            var t = l(202784),
                r = l(614983),
                n = l.n(r),
                o = l(437429),
                s = l.n(o),
                i = l(57074),
                d = l.n(i),
                c = l(10622),
                u = l.n(c),
                m = l(585488),
                p = l(71620),
                h = l(163889),
                g = l(312771),
                b = l(535338);
            function y(e, a, l) {
                const [r, o] = t.useState(!1),
                    [i, c] = t.useState(null),
                    y = s()(),
                    f = d()(a),
                    _ = (0, p.po)(),
                    k = (0, b.p)(e, f, l);
                return t.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: l, previous_cursor: t } =
                            (function (e, a) {
                                try {
                                    n()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let l = e;
                                    for (const e of a) n()(!!l, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (l = l?.[e]);
                                    return l;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(k, a) || {},
                        s = (a) => {
                            r ||
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
                            t && s(t);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: g.ZP.FAILED, error: i, fetchNext: d, fetchPrevious: p, refetch: b, data: k, hasNext: Boolean(l), hasPrevious: Boolean(t) } : { subsequentFetchStatus: r ? g.ZP.LOADING : g.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: p, refetch: b, data: k, hasNext: Boolean(l), hasPrevious: Boolean(t) };
                }, [e, k, r, i, y, f, _]);
            }
        },
        499102: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => C });
            l(136728);
            var t = l(202784),
                r = l(576648),
                n = l(107267),
                o = l(811176),
                s = l(40644),
                i = l(111677),
                d = l.n(i),
                c = l(630715),
                u = l(717160),
                m = l(885724),
                p = l(106186),
                h = l(786272),
                g = l(443781),
                b = l(952793),
                y = l(782642),
                f = l(226298),
                _ = l(701796);
            const k = d().f508c49c,
                v = d().f88553c8,
                D = d().d6825dce,
                S = d().b9613442,
                E = d().c2b3f0da,
                Z = d().c791d3fc,
                w = { label: d().ifea3114, withDelay: !0 },
                F = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const i = (0, y.p)(),
                        d = (0, n.useHistory)(),
                        { userClaims: F, viewerUserId: C } = (0, g.QZ)(),
                        x = (0, b.hC)("recruiting_jobs_list_share_enabled"),
                        I = (0, b.hC)("recruiting_pin_job_enabled") && (F.isTrueAndEnabled("subscriptions_feature_premium_jobs") || F.isVerifiedOrg()) && C !== l,
                        P = t.useCallback(() => {
                            d.push({ query: { text: (0, _.w)((0, f.z)(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        M = t.useCallback(() => {
                            r.Z.setString((0, _.w)((0, f.z)(a))), i({ text: v });
                        }, [i, a]),
                        T = t.useCallback(() => {
                            d.push({ query: { text: (0, _.w)((0, f.z)(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        K = t.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        L = t.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: k, onClick: M, Icon: c.default }), C && (e.push(((e) => ({ text: D, onClick: e, Icon: u.default }))(P)), e.push(((e) => ({ text: S, onClick: e, Icon: m.default }))(T))), I && e.push(((e) => ({ text: E, onClick: e, Icon: p.default }))(K)), e;
                        }, [M, P, K, T, I, C]),
                        j = t.useCallback(
                            (e) => {
                                const a = L();
                                return a.length ? t.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        z = t.useCallback(() => {}, []);
                    return x ? t.createElement(s.ZP, { Icon: h.default, "aria-label": Z, color: "text", hoverLabel: w, iconSize: e, onPress: z, renderMenu: j, testID: "job-share-action-btn" }) : null;
                },
                C = t.memo(F);
        },
        771035: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => c });
            var t = l(202784),
                r = l(107267),
                n = l(371344),
                o = l(956272),
                s = l(666536),
                i = l(943052);
            const d = ({ basePath: e, isCompact: a = !1, resetPageOnSearch: l = !1, styleType: d }) => {
                    const [c, u, m] = (0, i.Z)(),
                        [p, h] = t.useState(c.get("q") || ""),
                        g = (0, r.useHistory)(),
                        b = t.useRef(!1);
                    t.useEffect(
                        () => (
                            (b.current = !0),
                            () => {
                                b.current = !1;
                            }
                        ),
                        [],
                    );
                    const y = t.useCallback(() => {
                            h(""), g.replace(e);
                        }, [e, g]),
                        f = t.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    b.current && (e.length > 0 ? (l ? m({ q: e, p: "1" }) : u("q", e)) : y());
                                }, 1e3),
                            [y, u, m, l],
                        ),
                        _ = t.useCallback(
                            (e) => {
                                const { value: a } = e.target;
                                h(a), f(a);
                            },
                            [f],
                        );
                    return t.createElement(n.Z, { Icon: o.default, autoComplete: "off", isCompact: a, leftAligned: !0, onChange: _, onClear: y, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                c = t.memo(d);
        },
        736181: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, { default: () => qe });
            var t = l(202784),
                r = l(325686),
                n = l(457311),
                o = l(823161),
                s = l(731708),
                i = l(601413),
                d = l(392237),
                c = l(111677),
                u = l.n(c),
                m = l(150123),
                p = l(252021),
                h = l(443781),
                g = l(952793),
                b = l(835546),
                y = l(615027),
                f = l(771035),
                _ = l(668214),
                k = l(919022);
            const v = (e, a) => a.match.params.screenName || void 0,
                D = (e, a) => {
                    const l = v(0, a);
                    if (l) return k.ZP.selectByScreenName(e, l);
                },
                S = (0, _.Z)()
                    .propsFromState(() => ({ screenName: v, user: D }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: k.ZP.fetchOneByScreenNameIfNeeded }));
            var E,
                Z,
                w,
                F,
                C,
                x,
                I,
                P,
                M,
                T,
                K,
                L,
                j,
                z,
                A = l(807896),
                R = {
                    fragment: {
                        argumentDefinitions: [(E = { defaultValue: null, kind: "LocalArgument", name: "count" }), (Z = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (w = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (F = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                                                (x = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (I = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
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
                                                                                    args: [(M = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (T = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                        (K = {
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
                        argumentDefinitions: [F, E, Z, w],
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
                                            x,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    I,
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
                                                                    x,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (j = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, M]),
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
                                                                                            (z = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            P,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    x,
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
                                                                                                            z,
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
                                                                                    T,
                                                                                    K,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: j, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            z,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            z,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    z,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            L,
                                        ],
                                        storageKey: null,
                                    },
                                    z,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zNjyUs2MiymdZNSapnTINA", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            R.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const N = R;
            l(585488);
            var U = l(38293),
                O = l(652904),
                B = l(736063),
                H = l(943052),
                J = l(293115),
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
            const V = q;
            var $ = l(277660),
                Q = l.n($),
                Y = l(965245),
                G = l(725516);
            const X = (e, a, l) => ({ id: e, position: a, is_viewer_follows_user: l }),
                ee = (e, a, l, t) => ({ profile_id: t, items: [X(e, a, l)] });
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
            var te = l(301503),
                re = l(366635),
                ne = l(989272),
                oe = l(925873),
                se = l(952428),
                ie = l(457458),
                de = l(524496),
                ce = l(966886),
                ue = l(187669),
                me = l(949626),
                pe = l(856438),
                he = l(910113),
                ge = l(478414),
                be = l(499102);
            const ye = ({ fallbackName: e, user: a }) => {
                    const l = Q()(he.fR, a);
                    return l && l.core && l.core.name && l.core.screen_name ? t.createElement(re.Z, { avatarSize: "small", isVerified: l.verification?.verified ?? !1, name: l.core.name, nameSize: "subtext2", screenName: l.core.screen_name, screenNameSize: "subtext2", verifiedType: l.verification?.verified_type ?? void 0, weight: "normal" }) : e ? t.createElement(s.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                fe = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                _e = "user-job-list-item-short-description",
                ke = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                ve = ({ allowShare: e = !1, companyName: a, createdAt: l, formattedSalary: n, isFeatured: o, isVerifiedOrg: i, jobId: d, jobTitle: c, location: u, onClick: m, profileId: p, redirectUrl: h, salaryInterval: g, shortDescription: b, user: y, withUserInfo: f = !1 }) => {
                    (0, ue.q)(() => {
                        (0, ne.fH)((0, ge.yW)(_e, fe), _e);
                    });
                    const _ = t.useMemo(() => ({ label: c }), [c]),
                        k = t.useMemo(() => oe.Z.getContentStateFromRaw(b), [b]),
                        v = t.useMemo(() => k && (0, te.convertFromRaw)(k).hasText(), [k]),
                        D = t.useMemo(() => `/i/jobs/${d}`, [d]);
                    return t.createElement(se.Z, { interactive: !0, link: i ? { pathname: D, external: !0 } : h || "", onClick: m, style: ke.listContainer }, t.createElement(r.Z, { style: ke.items }, t.createElement(s.ZP, { hoverLabel: _, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), f ? t.createElement(ye, { fallbackName: a, user: y }) : null, t.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), n ? t.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, ie.M)(n, g)) : null, k && v ? t.createElement(r.Z, { style: ke.shortDescription }, t.createElement(me.Z, { className: _e }, t.createElement(de.Z, { contentState: k, paragraphFontSizeOverride: fe.paragraphFontSize }))) : null), t.createElement(r.Z, { style: ke.lastRow }, t.createElement(r.Z, { style: ke.itemRow }, t.createElement(r.Z, { style: ke.itemRow }, l ? t.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: ke.timestamp, timestamp: l }) : null, o ? t.createElement(pe.Z, null) : null), e ? t.createElement(be.Z, { iconSize: "small", jobId: d, jobUserId: p }) : null)));
                },
                De = le,
                Se = ({ isViewerFollowsUser: e, item: a, jobId: l, jobIndex: r, profileId: n, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(De, a),
                        d = t.useCallback(() => {
                            s.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: n, items: [{ id: l, position: r, is_viewer_follows_user: e }] } });
                        }, [s, e, l, r, n]),
                        c = Boolean(o?.is_verified_organization);
                    return i && i.title && i.location ? t.createElement(ve, { allowShare: c, createdAt: i.created_at, formattedSalary: i.formatted_salary, isFeatured: Boolean(i.featured), isVerifiedOrg: o?.is_verified_organization, jobId: l, jobTitle: i.title, location: i.location, onClick: d, profileId: n, redirectUrl: i.redirect_url || "", salaryInterval: i.salary_interval, salaryMax: i.salary_max, salaryMin: i.salary_min, shortDescription: i.short_description, user: o }) : null;
                },
                Ee = t.memo(Se),
                Ze = V,
                we = (e) => e.rest_id,
                Fe = ({ fetchNext: e, isViewerFollowsUser: a, profileId: l, slice: r, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Ze, r).items_results,
                        d = t.useCallback(
                            (e) => {
                                const r = e.result?.core;
                                return r ? t.createElement(Ee, { isViewerFollowsUser: a, item: r, jobId: e.rest_id, jobIndex: i.findIndex((a) => a.rest_id === e.rest_id), profileId: l, user: o }) : null;
                            },
                            [a, i, l, o],
                        ),
                        [c, u] = t.useState([]),
                        m = t.useCallback(
                            (e) => {
                                e.positions.forEach((t, r) => {
                                    var n, o, i;
                                    t.rectangle.getTop() + t.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && t.id && !c.includes(t.id) && (s.scribe({ ...((n = "job_list"), (o = "impression"), (i = "job"), { section: "jobs_list", component: n, element: i, action: o }), data: { ...ee(t.id, r, a, l) } }), u((e) => [...e, t.id]));
                                });
                            },
                            [s, c, a, l],
                        );
                    return i ? (i.length ? t.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: we, items: i, onItemsRendered: m, onNearEnd: e, renderer: d }) : t.createElement(n.Z, { header: "No jobs" })) : null;
                },
                Ce = t.memo(Fe),
                xe = { page: "jobs_list", section: "all" },
                Ie = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Pe = N,
                Me = (e) => {
                    const { query: a, screenName: l, user: r } = e,
                        n = t.useMemo(() => {
                            const e = a?.keyword ? { keyword: a.keyword } : null;
                            return { userId: r.id_str, count: 50, cursor: null, searchParams: e };
                        }, [a, r.id_str]),
                        { data: o, fetchNext: s } = (0, W.C)(Pe, n),
                        i = o?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return i ? t.createElement(J.nO, { namespace: xe }, t.createElement(O.Z, null, t.createElement(t.Fragment, null, t.createElement(U.Z, { title: Ie(l) }), t.createElement(Ce, { fetchNext: s, isViewerFollowsUser: r.following, profileId: r.id_str, slice: i, user: o.data.result })))) : null;
                },
                Te = { context: "UserJobs" },
                Ke = (e) => {
                    const [a] = (0, H.Z)(),
                        l = t.useMemo(() => ({ keyword: a.get("q") }), [a]);
                    return t.createElement(B.H, { errorConfig: Te }, t.createElement(Me, (0, A.Z)({}, e, { query: l })));
                },
                Le = t.memo(Ke);
            var je = l(138099),
                ze = l(154003),
                Ae = l(466818),
                Re = l(985124);
            const Ne = () => {
                    const [e, a] = (0, H.Z)(),
                        l = t.useCallback(
                            (e, l) => {
                                a("t", e);
                            },
                            [a],
                        ),
                        r = t.useMemo(() => e.get("t") ?? "", [e]);
                    return t.createElement(Ae.ZP, { label: "Job category", onChange: l, options: Re.pg, testID: "select-team", value: r, withEmptyOption: !0 });
                },
                Ue = ({ onDismiss: e, screenName: a }) => t.createElement(je.Z, { onMaskClick: e, style: Oe.modalContainer, type: "full", withMask: !0 }, t.createElement(r.Z, { style: Oe.modalContent }, t.createElement(s.ZP, null, "Search jobs")), t.createElement(f.Z, { basePath: `/${a}/jobs` }), t.createElement(Ne, null), t.createElement(ze.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Oe = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Be = t.memo(Ue),
                He = u().b007440a,
                Je = u().c5fb5a1a,
                We = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = S((e) => {
                    const [a, l] = t.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: _ } = e,
                        { viewerUserId: k } = t.useContext(h.rC),
                        v = (0, g.hC)("recruiting_jobs_list_search_enabled"),
                        D = (0, g.hC)("recruiting_job_recommendations_enabled"),
                        S = (0, g.hC)("xprofile_blocked_by_view_enabled");
                    t.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const E = _?.id_str === k,
                        Z = !_ || (_ && (0, b.n5)({ isOwnProfile: E, isSoftBlockEnabled: S, user: _ })),
                        w = t.useCallback(() => {
                            l(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === _?.verified_type || "Square" === _?.profile_image_shape ? "square" : "circle";
                            return t.createElement(r.Z, { style: We.rightControlContainer }, t.createElement(r.Z, null, _ ? t.createElement(o.default, { screenName: u, shape: e, size: "large", uri: _.profile_image_url_https }) : t.createElement(o.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), t.createElement(r.Z, null, t.createElement(s.ZP, { size: "body", weight: "bold" }, He), t.createElement(i.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return Z ? t.createElement(t.Fragment, null, t.createElement(p.Z, { backLocation: "/", history: c, primaryContent: _ ? (!_?.protected || _?.following || E ? t.createElement(t.Fragment, null, v && u ? t.createElement(r.Z, { style: We.rightControlContainer }, t.createElement(r.Z, { style: We.searchContainer }, t.createElement(f.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, t.createElement(Le, { screenName: u, user: _ })) : t.createElement(n.Z, { header: Je })) : null, primaryContentLabel: He, sidebarContent: D ? t.createElement(r.Z, { style: We.sidebarRoot }, t.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), a ? t.createElement(Be, { onDismiss: w, screenName: u }) : null) : t.createElement(y.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        524496: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => k });
            l(136728);
            var t = l(202784),
                r = l(301503),
                n = l(325686),
                o = l(595088),
                s = l(516951),
                i = l(731708),
                d = l(779802),
                c = l(537392),
                u = l(989272),
                m = l(925873),
                p = l(202253),
                h = l(786475),
                g = l(392237),
                b = l(135904);
            const y = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: t.createElement(i.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: t.createElement(i.ZP, null) } },
                f = (0, o.Z)(y).reduce((e, [a, l]) => e.set(a, l), r.DefaultDraftBlockRenderMap);
            let _ = !1;
            const k = t.memo(function (e) {
                    const { componentByType: a, contentState: l, onScribeEvent: o, paragraphFontSizeOverride: i } = e;
                    t.useEffect(() => {
                        _ || (u.fH(b.c, b.n), (_ = !0));
                    }, []);
                    const g = [(0, p.ez)(o, i), p.aF, p.RU];
                    e.disable_entityLinkDecorator || g.push((0, p.NA)(o, i));
                    const y = m.Z.initEditorState(l, { decorators: g });
                    let k = s.Z;
                    return (
                        a &&
                            (k = (e) => {
                                const l = e.getType();
                                return a[l] || null;
                            }),
                        t.createElement(c.ZP, null, ({ containerWidth: e }) => t.createElement(n.Z, { style: v.fontFamily }, t.createElement(r.Editor, { blockRenderMap: f, blockRendererFn: k, blockStyleFn: (0, d.su)(h.Z.isNarrowScreenWidth(e)), editorState: y, onChange: s.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                v = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        466818: (e, a, l) => {
            "use strict";
            l.d(a, { ZP: () => y });
            var t = l(202784),
                r = l(325686),
                n = l(487552),
                o = l(302752),
                s = l(183806),
                i = l(731708),
                d = l(950822),
                c = l(224162),
                u = l(392237);
            const m = t.forwardRef((e, a) => (0, d.Z)("select", { ...e, ref: a })),
                p = (e) => (0, d.Z)("option", e);
            let h = 1;
            class g extends t.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = t.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: a, withEmptyOption: l } = this.props,
                                { selectedIndex: t, value: r } = e.target;
                            a && a(r, t - (l ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: a, errorText: l, hasError: d, helperText: h, options: g, style: y, testID: f, value: _, withEmptyOption: k } = this.props,
                        { isFocused: v } = this.state,
                        D = i.ZP.getLanguage(),
                        S = void 0 === d ? !!l : d,
                        E = new Set();
                    l && E.add(this._errorID), e && E.add(e), h && E.add(this._helperID);
                    const Z = E.size ? [...E].join(" ") : void 0;
                    return t.createElement(
                        t.Fragment,
                        null,
                        t.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === D ? u.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(D) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return t.createElement(
                                r.Z,
                                { style: [s.Z.border, b.container, a && s.Z.disabled, v && s.Z.focusedBorderValid, S && s.Z.invalidBorderColor, v && S && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                t.createElement(
                                    m,
                                    { "aria-describedby": Z, "aria-invalid": S, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: i }, a && s.Z.disabled], testID: f || "", value: _ },
                                    k ? t.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: a, label: l, value: r } = e;
                                        return t.createElement(p, { disabled: a, key: `${l}-${r}`, style: b.option, value: r }, l);
                                    }),
                                ),
                                t.createElement(n.default, { style: [b.dropdownCaret, v && s.Z.validColor, !(!d && !l) && s.Z.invalidColor] }),
                            );
                        }),
                        h ? this._renderHelperText() : null,
                        S && l ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: l } = this.props,
                        { isFocused: r } = this.state;
                    return t.createElement(i.ZP, { color: a || e ? "red500" : r ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, l);
                }
                _renderHelperText() {
                    return t.createElement(r.Z, { "aria-live": "polite" }, t.createElement(i.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return t.createElement(r.Z, { "aria-live": "polite" }, t.createElement(i.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = g;
        },
        280278: (e, a, l) => {
            "use strict";
            l.d(a, { ZP: () => g });
            var t = l(202784),
                r = l(325686),
                n = l(827515),
                o = l(461756),
                s = l(731708),
                i = l(392237);
            const d = "up",
                c = "down",
                u = (e, a, l) => {
                    l((l) => {
                        const t = (0, n.Z)(e) ? (e > (l.count || 0) ? d : c) : d;
                        return { ...l, count: e, oldText: l.text, pendingCount: null, pendingText: null, text: a, transitionDirection: t };
                    });
                },
                m = {};
            [d, c].forEach((e) => {
                const a = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: a, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: a } };
            });
            const p = { position: "absolute" },
                h = i.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: a, containerStyle: l, count: i, ...c } = e,
                        [g, b] = t.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        y = t.useRef(!1);
                    return (
                        t.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.useEffect(() => {
                            if (y.current)
                                if (o.Z.reducedMotionEnabled) b((l) => ({ ...l, oldText: null, text: a, pendingText: null, pendingCount: null, count: e.count }));
                                else if (a !== g.pendingText) {
                                    a === g.text || ((0, n.Z)(e.count) && g.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((l) => ({ ...l, pendingCount: e.count, pendingText: a })), g.animating || u(e.count, a, b));
                                }
                        }, [a]),
                        t.useEffect(() => {
                            y.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, b));
                        }, [g.animating, g.oldText]),
                        t.useMemo(() => {
                            const e = m[g.transitionDirection],
                                a = g.oldText && !o.Z.reducedMotionEnabled,
                                n = !g.animating && g.oldText && !o.Z.reducedMotionEnabled,
                                i = { ...p, ...(g.animating ? e.post : e.active) },
                                d = { ...(n ? e.pre : e.active) };
                            return t.createElement(
                                r.Z,
                                { style: [h.root, l] },
                                a ? t.createElement("span", { style: i }, t.createElement(s.ZP, c, g.oldText)) : null,
                                t.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, a) => {
                                                e && a((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, b),
                                        style: d,
                                    },
                                    t.createElement(s.ZP, c, g.text),
                                ),
                            );
                        }, [l, c, g, y, b])
                    );
                };
        },
        183806: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => t });
            const t = l(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        856661: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, { default: () => i });
            var t = l(202784),
                r = l(890601),
                n = l(783427),
                o = l(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        89085: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, { default: () => i });
            var t = l(202784),
                r = l(890601),
                n = l(783427),
                o = l(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        666536: (e, a, l) => {
            "use strict";
            l.d(a, { Z: () => n });
            var t = l(936386),
                r = l.n(t);
            const n = (e, a, l) => r()(e, a, l);
        },
        936386: (e) => {
            function a(e, a, l) {
                var t, r, n, o, s;
                function i() {
                    var d = Date.now() - o;
                    d < a && d >= 0 ? (t = setTimeout(i, a - d)) : ((t = null), l || ((s = e.apply(n, r)), (n = r = null)));
                }
                null == a && (a = 100);
                var d = function () {
                    (n = this), (r = arguments), (o = Date.now());
                    var d = l && !t;
                    return t || (t = setTimeout(i, a)), d && ((s = e.apply(n, r)), (n = r = null)), s;
                };
                return (
                    (d.clear = function () {
                        t && (clearTimeout(t), (t = null));
                    }),
                    (d.flush = function () {
                        t && ((s = e.apply(n, r)), (n = r = null), clearTimeout(t), (t = null));
                    }),
                    d
                );
            }
            (a.debounce = a), (e.exports = a);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.15013d7a.js.map
