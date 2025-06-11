"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        229333: (e, a, o) => {
            o.d(a, { Z: () => u });
            var r = o(202784),
                d = o(466999),
                n = o(325686),
                l = o(392237),
                t = o(111677);
            const s = o.n(t)().e5b0063d;
            let c = 0;
            class i extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        o = s({ title: a });
                    return r.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(d.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, a), r.createElement(n.Z, { "aria-label": o }, e));
                }
            }
            const u = i;
        },
        414939: (e, a, o) => {
            o.d(a, { Z: () => s });
            var r = o(202784),
                d = o(325686),
                n = o(392237);
            class l extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(d.Z, { style: t.root });
                }
            }
            const t = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        856438: (e, a, o) => {
            o.d(a, { Z: () => h });
            var r = o(202784),
                d = o(868634),
                n = o(731708),
                l = o(392237),
                t = o(111677),
                s = o.n(t),
                c = o(262009);
            const i = s().a71d7584,
                u = l.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                h = () => r.createElement(d.ZP, { style: u.label, type: "priority" }, r.createElement(n.ZP, { style: u.featuredLabel }, r.createElement(c.default, { style: u.featuredIcon }), i));
        },
        324948: (e, a, o) => {
            o.d(a, { Z: () => l });
            var r = o(202784),
                d = o(691533);
            const n = (0, o(523561).Z)({
                    loader: () =>
                        Promise.all([
                            o.e("icons.0"),
                            o.e("icons.5"),
                            o.e("icons.12"),
                            o.e("icons.20"),
                            o.e("icons.2"),
                            o.e("icons.21"),
                            o.e("icons.28"),
                            o.e("icons.10"),
                            o.e("icons.17"),
                            o.e("icons.9"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
                            o.e("icons.22"),
                            o.e("icons.25"),
                            o.e("icons.14"),
                            o.e("icons.6"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            o.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                            o.e("loader.WideLayout"),
                        ]).then(o.bind(o, 527969)),
                }),
                l = (e) => r.createElement(d.Z, { hideOnError: !0 }, r.createElement(n, e));
        },
        965245: (e, a, o) => {
            o.d(a, { Z: () => s });
            var r = o(807896),
                d = o(202784),
                n = o(229333),
                l = o(414939),
                t = o(334346);
            const s = ({ accessibilityTitle: e, footer: a = d.createElement(l.Z, null), ...o }) => {
                const s = d.createElement(t.C, (0, r.Z)({}, o, { footer: a }));
                return e ? d.createElement(n.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, o) => {
            o.d(a, { C: () => s, Z: () => t });
            var r = o(807896),
                d = o(202784),
                n = o(524084),
                l = o(768572);
            const t = "stable_sort_index",
                s = d.forwardRef((e, a) => {
                    const o = e.cacheKey;
                    return d.createElement(l.ZP, { identifier: o }, d.createElement(n.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, o) => {
            o.d(a, { Z: () => l });
            var r = o(202784),
                d = o(107267),
                n = o(115553);
            const l = (e) => {
                (0, d.useHistory)();
                return r.createElement(n.A, e);
            };
        },
        652904: (e, a, o) => {
            o.d(a, { Z: () => i });
            var r = o(202784),
                d = o(500002),
                n = o(668214),
                l = o(997174),
                t = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: t.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: o, search: r },
                            locationKey: d,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: t,
                        } = e;
                    let s = !1;
                    a.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && a.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = d || t;
                    ((c && d !== t) || (!c && o !== n) || r !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: o, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), o(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const i = (0, d.ZP)(s(c));
        },
        524084: (e, a, o) => {
            o.d(a, { Z: () => l });
            var r = o(202784),
                d = o(523561),
                n = o(195560);
            const l = (0, d.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, a) => r.createElement(n.Z, { hasError: e, onRetry: a }) });
        },
        985124: (e, a, o) => {
            o.d(a, { $J: () => t, WA: () => j, ZC: () => P, cj: () => T, eo: () => r.eo, hb: () => $, kW: () => s, pg: () => I, rP: () => l, u4: () => W, xk: () => R });
            var r = o(89217),
                d = o(111677),
                n = o.n(d);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                t = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(r.eo).map(([e, a]) => ({ label: String(a), value: e })),
                c = n().d2b8da2c,
                i = n().cd958040,
                u = n().c5760ca2,
                h = n().d31b4a2a,
                D = n().df1b7550,
                m = n().f38959a6,
                b = n().bc78a26c,
                p = n().ec28738e,
                f = n().icb06308,
                M = n().d0b978ec,
                y = n().af19cdc2,
                k = n().e4a51fca,
                w = n().e8ca78ae,
                v = n().c365dcc6,
                P = Object.freeze({ software_engineering: c, data_analytics: i, product: u, design: h, marketing: D, sales_am: m, operations: b, people_hr: p, finance_accounting: f, legal_compliance: M, science_engineering: y, medical: k, construction_trades: w, other: v }),
                I = Object.entries(P).map(([e, a]) => ({ label: String(a), value: e })),
                g = n().e25d75e4,
                Z = n().e89b3f04,
                A = n().h55825dc,
                C = n().cc537386,
                S = n().jfc3cece,
                _ = n().e1b683aa,
                E = n().c4627fda,
                x = n().db75b47c,
                j = Object.freeze({ intern: g, entry_level: Z, junior: A, mid_level: C, senior: S, lead: _, manager: E, executive: x }),
                R = Object.entries(j).map(([e, a]) => ({ label: String(a), value: e })),
                L = n().i312f0ce,
                N = n().b4aff05e,
                O = n().c08b9138,
                B = n().ia5d6422,
                F = n().h97c7f42,
                U = n().ibed2d04,
                T = Object.freeze({ onsite: { label: L, description: B, value: "onsite" }, remote: { label: O, description: U, value: "remote" }, hybrid: { label: N, description: F, value: "hybrid" } }),
                W = Object.keys(T).map((e) => ({ label: T[e].label, value: e, description: T[e].description })),
                $ = Object.keys(r.Qw).map((e) => ({ ...r.Qw[e], value: String(r.Qw[e].value) }));
        },
        943052: (e, a, o) => {
            o.d(a, { Z: () => n });
            o(543673), o(240753), o(128399), o(136728);
            var r = o(202784),
                d = o(107267);
            const n = () => {
                const e = (0, d.useLocation)(),
                    a = (0, d.useHistory)(),
                    [o, n] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    n(new URLSearchParams(e.search));
                }, [e.search]);
                const l = r.useCallback(
                        (r, d) => {
                            const n = new URLSearchParams(o);
                            n.set(r, d), a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, o],
                    ),
                    t = r.useCallback(
                        (r) => {
                            const d = new URLSearchParams(o);
                            for (const e in r) r[e] ? d.set(e, r[e]) : d.delete(e);
                            a.push(`${e.pathname}?${d.toString()}`);
                        },
                        [a, e.pathname, o],
                    );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), l, t];
            };
        },
        127218: (e, a, o) => {
            o.d(a, { C: () => f });
            var r = o(202784),
                d = o(614983),
                n = o.n(d),
                l = o(437429),
                t = o.n(l),
                s = o(57074),
                c = o.n(s),
                i = o(10622),
                u = o.n(i),
                h = o(585488),
                D = o(71620),
                m = o(163889),
                b = o(312771),
                p = o(535338);
            function f(e, a, o) {
                const [d, l] = r.useState(!1),
                    [s, i] = r.useState(null),
                    f = t()(),
                    M = c()(a),
                    y = (0, D.po)(),
                    k = (0, p.p)(e, M, o);
                return r.useMemo(() => {
                    const a = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: o, previous_cursor: r } =
                            (function (e, a) {
                                try {
                                    n()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let o = e;
                                    for (const e of a) n()(!!o, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (o = o?.[e]);
                                    return o;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(k, a) || {},
                        t = (a) => {
                            d ||
                                (l(!0),
                                u()(f, e, { ...M, cursor: a }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), i(e), y(e);
                                    },
                                }));
                        },
                        c = () => {
                            o && t(o);
                        },
                        D = () => {
                            r && t(r);
                        },
                        p = () => {
                            t(void 0);
                        };
                    return s ? { subsequentFetchStatus: b.ZP.FAILED, error: s, fetchNext: c, fetchPrevious: D, refetch: p, data: k, hasNext: Boolean(o), hasPrevious: Boolean(r) } : { subsequentFetchStatus: d ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: D, refetch: p, data: k, hasNext: Boolean(o), hasPrevious: Boolean(r) };
                }, [e, k, d, s, f, M, y]);
            }
        },
        28135: (e, a, o) => {
            o.d(a, { Z: () => C });
            o(136728);
            var r = o(202784),
                d = o(576648),
                n = o(107267),
                l = o(811176),
                t = o(40644),
                s = o(111677),
                c = o.n(s),
                i = o(630715),
                u = o(717160),
                h = o(885724),
                D = o(106186),
                m = o(786272),
                b = o(443781),
                p = o(952793),
                f = o(782642);
            const M = (e) => `/i/jobs/${e}`;
            var y = o(701796);
            const k = c().f508c49c,
                w = c().f88553c8,
                v = c().d6825dce,
                P = c().b9613442,
                I = c().c2b3f0da,
                g = c().c791d3fc,
                Z = { label: c().ifea3114, withDelay: !0 },
                A = ({ iconSize: e = "normal", jobId: a, jobUserId: o }) => {
                    const s = (0, f.p)(),
                        c = (0, n.useHistory)(),
                        { userClaims: A, viewerUserId: C } = (0, b.QZ)(),
                        S = (0, p.hC)("recruiting_jobs_list_share_enabled"),
                        _ = (0, p.hC)("recruiting_pin_job_enabled") && (A.isTrueAndEnabled("subscriptions_feature_premium_jobs") || A.isVerifiedOrg()) && C !== o,
                        E = r.useCallback(() => {
                            c.push({ query: { text: (0, y.w)(M(a)) }, pathname: "/messages/compose" });
                        }, [c, a]),
                        x = r.useCallback(() => {
                            d.Z.setString((0, y.w)(M(a))), s({ text: w });
                        }, [s, a]),
                        j = r.useCallback(() => {
                            c.push({ query: { text: (0, y.w)(M(a)) }, pathname: "/compose/post" });
                        }, [c, a]),
                        R = r.useCallback(() => {
                            c.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: c.location.pathname } });
                        }, [c, a]),
                        L = r.useCallback(() => {
                            const e = [];
                            return d.Z.isAvailable() && e.push({ text: k, onClick: x, Icon: i.default }), C && (e.push(((e) => ({ text: v, onClick: e, Icon: u.default }))(E)), e.push(((e) => ({ text: P, onClick: e, Icon: h.default }))(j))), _ && e.push(((e) => ({ text: I, onClick: e, Icon: D.default }))(R)), e;
                        }, [x, E, R, j, _, C]),
                        N = r.useCallback(
                            (e) => {
                                const a = L();
                                return a.length ? r.createElement(l.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [L],
                        ),
                        O = r.useCallback(() => {}, []);
                    return S ? r.createElement(t.ZP, { Icon: m.default, "aria-label": g, color: "text", hoverLabel: Z, iconSize: e, onPress: O, renderMenu: N, testID: "job-share-action-btn" }) : null;
                },
                C = r.memo(A);
        },
        524496: (e, a, o) => {
            o.d(a, { Z: () => k });
            o(136728);
            var r = o(202784),
                d = o(301503),
                n = o(325686),
                l = o(595088),
                t = o(516951),
                s = o(731708),
                c = o(779802),
                i = o(537392),
                u = o(989272),
                h = o(925873),
                D = o(202253),
                m = o(786475),
                b = o(392237),
                p = o(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                M = (0, l.Z)(f).reduce((e, [a, o]) => e.set(a, o), d.DefaultDraftBlockRenderMap);
            let y = !1;
            const k = r.memo(function (e) {
                    const { componentByType: a, contentState: o, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        y || (u.fH(p.c, p.n), (y = !0));
                    }, []);
                    const b = [(0, D.ez)(l, s), D.aF, D.RU];
                    e.disable_entityLinkDecorator || b.push((0, D.NA)(l, s));
                    const f = h.Z.initEditorState(o, { decorators: b });
                    let k = t.Z;
                    return (
                        a &&
                            (k = (e) => {
                                const o = e.getType();
                                return a[o] || null;
                            }),
                        r.createElement(i.ZP, null, ({ containerWidth: e }) => r.createElement(n.Z, { style: w.fontFamily }, r.createElement(d.Editor, { blockRenderMap: M, blockRendererFn: k, blockStyleFn: (0, c.su)(m.Z.isNarrowScreenWidth(e)), editorState: f, onChange: t.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = b.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        183806: (e, a, o) => {
            o.d(a, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.6f95dcaa.js.map
