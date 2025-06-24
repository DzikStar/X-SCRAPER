"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        229333: (e, a, r) => {
            r.d(a, { Z: () => u });
            var o = r(202784),
                d = r(466999),
                n = r(325686),
                l = r(392237),
                t = r(111677);
            const s = r.n(t)().e5b0063d;
            let c = 0;
            class i extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        r = s({ title: a });
                    return o.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(d.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, a), o.createElement(n.Z, { "aria-label": r }, e));
                }
            }
            const u = i;
        },
        414939: (e, a, r) => {
            r.d(a, { Z: () => s });
            var o = r(202784),
                d = r(325686),
                n = r(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(d.Z, { style: t.root });
                }
            }
            const t = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        856438: (e, a, r) => {
            r.d(a, { Z: () => h });
            var o = r(202784),
                d = r(868634),
                n = r(731708),
                l = r(392237),
                t = r(111677),
                s = r.n(t),
                c = r(262009);
            const i = s().a71d7584,
                u = l.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                h = () => o.createElement(d.ZP, { style: u.label, type: "priority" }, o.createElement(n.ZP, { style: u.featuredLabel }, o.createElement(c.default, { style: u.featuredIcon }), i));
        },
        324948: (e, a, r) => {
            r.d(a, { Z: () => l });
            var o = r(202784),
                d = r(691533);
            const n = (0, r(523561).Z)({
                    loader: () =>
                        Promise.all([
                            r.e("icons.0"),
                            r.e("icons.5"),
                            r.e("icons.12"),
                            r.e("icons.20"),
                            r.e("icons.2"),
                            r.e("icons.21"),
                            r.e("icons.28"),
                            r.e("icons.10"),
                            r.e("icons.17"),
                            r.e("icons.9"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("icons.22"),
                            r.e("icons.14"),
                            r.e("icons.25"),
                            r.e("icons.6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
                            r.e("loader.WideLayout-9f4db315"),
                        ]).then(r.bind(r, 741494)),
                }),
                l = (e) => o.createElement(d.Z, { hideOnError: !0 }, o.createElement(n, e));
        },
        965245: (e, a, r) => {
            r.d(a, { Z: () => s });
            var o = r(807896),
                d = r(202784),
                n = r(229333),
                l = r(414939),
                t = r(334346);
            const s = ({ accessibilityTitle: e, footer: a = d.createElement(l.Z, null), ...r }) => {
                const s = d.createElement(t.C, (0, o.Z)({}, r, { footer: a }));
                return e ? d.createElement(n.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, r) => {
            r.d(a, { C: () => s, Z: () => t });
            var o = r(807896),
                d = r(202784),
                n = r(524084),
                l = r(768572);
            const t = "stable_sort_index",
                s = d.forwardRef((e, a) => {
                    const r = e.cacheKey;
                    return d.createElement(l.ZP, { identifier: r }, d.createElement(n.Z, (0, o.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, r) => {
            r.d(a, { Z: () => l });
            var o = r(202784),
                d = r(107267),
                n = r(115553);
            const l = (e) => {
                (0, d.useHistory)();
                return o.createElement(n.A, e);
            };
        },
        652904: (e, a, r) => {
            r.d(a, { Z: () => i });
            var o = r(202784),
                d = r(500002),
                n = r(668214),
                l = r(997174),
                t = r(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: t.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: r, search: o },
                            locationKey: d,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: t,
                        } = e;
                    let s = !1;
                    a.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && a.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const c = d || t;
                    ((c && d !== t) || (!c && r !== n) || o !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: r, updateTweetDetailNav: o } = e;
                    a.scribePageImpression(), r(a.contextualScribeNamespace, a.contextualScribeData), o(a.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const i = (0, d.ZP)(s(c));
        },
        524084: (e, a, r) => {
            r.d(a, { Z: () => l });
            var o = r(202784),
                d = r(523561),
                n = r(195560);
            const l = (0, d.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, a) => o.createElement(n.Z, { hasError: e, onRetry: a }) });
        },
        985124: (e, a, r) => {
            r.d(a, { $J: () => t, WA: () => j, ZC: () => v, cj: () => T, eo: () => o.eo, hb: () => $, kW: () => s, pg: () => I, rP: () => l, u4: () => W, xk: () => L });
            var o = r(89217),
                d = r(111677),
                n = r.n(d);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                t = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(o.eo).map(([e, a]) => ({ label: String(a), value: e })),
                c = n().d2b8da2c,
                i = n().cd958040,
                u = n().c5760ca2,
                h = n().d31b4a2a,
                m = n().df1b7550,
                D = n().f38959a6,
                b = n().bc78a26c,
                p = n().ec28738e,
                f = n().icb06308,
                M = n().d0b978ec,
                y = n().af19cdc2,
                P = n().e4a51fca,
                k = n().e8ca78ae,
                w = n().c365dcc6,
                v = Object.freeze({ software_engineering: c, data_analytics: i, product: u, design: h, marketing: m, sales_am: D, operations: b, people_hr: p, finance_accounting: f, legal_compliance: M, science_engineering: y, medical: P, construction_trades: k, other: w }),
                I = Object.entries(v).map(([e, a]) => ({ label: String(a), value: e })),
                g = n().e25d75e4,
                Z = n().e89b3f04,
                C = n().h55825dc,
                _ = n().cc537386,
                A = n().jfc3cece,
                S = n().e1b683aa,
                E = n().c4627fda,
                x = n().db75b47c,
                j = Object.freeze({ intern: g, entry_level: Z, junior: C, mid_level: _, senior: A, lead: S, manager: E, executive: x }),
                L = Object.entries(j).map(([e, a]) => ({ label: String(a), value: e })),
                R = n().i312f0ce,
                N = n().b4aff05e,
                O = n().c08b9138,
                F = n().ia5d6422,
                U = n().h97c7f42,
                B = n().ibed2d04,
                T = Object.freeze({ onsite: { label: R, description: F, value: "onsite" }, remote: { label: O, description: B, value: "remote" }, hybrid: { label: N, description: U, value: "hybrid" } }),
                W = Object.keys(T).map((e) => ({ label: T[e].label, value: e, description: T[e].description })),
                $ = Object.keys(o.Qw).map((e) => ({ ...o.Qw[e], value: String(o.Qw[e].value) }));
        },
        943052: (e, a, r) => {
            r.d(a, { Z: () => n });
            r(543673), r(240753), r(128399), r(136728);
            var o = r(202784),
                d = r(107267);
            const n = () => {
                const e = (0, d.useLocation)(),
                    a = (0, d.useHistory)(),
                    [r, n] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    n(new URLSearchParams(e.search));
                }, [e.search]);
                const l = o.useCallback(
                        (o, d) => {
                            const n = new URLSearchParams(r);
                            n.set(o, d), a.push(`${e.pathname}?${n.toString()}`);
                        },
                        [a, e.pathname, r],
                    ),
                    t = o.useCallback(
                        (o) => {
                            const d = new URLSearchParams(r);
                            for (const e in o) o[e] ? d.set(e, o[e]) : d.delete(e);
                            a.push(`${e.pathname}?${d.toString()}`);
                        },
                        [a, e.pathname, r],
                    );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), l, t];
            };
        },
        127218: (e, a, r) => {
            r.d(a, { C: () => f });
            var o = r(202784),
                d = r(614983),
                n = r.n(d),
                l = r(437429),
                t = r.n(l),
                s = r(57074),
                c = r.n(s),
                i = r(10622),
                u = r.n(i),
                h = r(585488),
                m = r(71620),
                D = r(163889),
                b = r(312771),
                p = r(535338);
            function f(e, a, r) {
                const [d, l] = o.useState(!1),
                    [s, i] = o.useState(null),
                    f = t()(),
                    M = c()(a),
                    y = (0, m.po)(),
                    P = (0, p.p)(e, M, r);
                return o.useMemo(() => {
                    const a = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, a) {
                                try {
                                    n()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of a) n()(!!r, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, D.ZP)(e.message);
                                }
                            })(P, a) || {},
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
                            r && t(r);
                        },
                        m = () => {
                            o && t(o);
                        },
                        p = () => {
                            t(void 0);
                        };
                    return s ? { subsequentFetchStatus: b.ZP.FAILED, error: s, fetchNext: c, fetchPrevious: m, refetch: p, data: P, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: d ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: m, refetch: p, data: P, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, P, d, s, f, M, y]);
            }
        },
        28135: (e, a, r) => {
            r.d(a, { Z: () => _ });
            r(136728);
            var o = r(202784),
                d = r(576648),
                n = r(107267),
                l = r(811176),
                t = r(40644),
                s = r(111677),
                c = r.n(s),
                i = r(630715),
                u = r(717160),
                h = r(885724),
                m = r(106186),
                D = r(786272),
                b = r(443781),
                p = r(952793),
                f = r(782642);
            const M = (e) => `/i/jobs/${e}`;
            var y = r(701796);
            const P = c().f508c49c,
                k = c().f88553c8,
                w = c().d6825dce,
                v = c().b9613442,
                I = c().c2b3f0da,
                g = c().c791d3fc,
                Z = { label: c().ifea3114, withDelay: !0 },
                C = ({ iconSize: e = "normal", jobId: a, jobUserId: r }) => {
                    const s = (0, f.p)(),
                        c = (0, n.useHistory)(),
                        { userClaims: C, viewerUserId: _ } = (0, b.QZ)(),
                        A = (0, p.hC)("recruiting_jobs_list_share_enabled"),
                        S = (0, p.hC)("recruiting_pin_job_enabled") && (C.isTrueAndEnabled("subscriptions_feature_premium_jobs") || C.isVerifiedOrg()) && _ !== r,
                        E = o.useCallback(() => {
                            c.push({ query: { text: (0, y.w)(M(a)) }, pathname: "/messages/compose" });
                        }, [c, a]),
                        x = o.useCallback(() => {
                            d.Z.setString((0, y.w)(M(a))), s({ text: k });
                        }, [s, a]),
                        j = o.useCallback(() => {
                            c.push({ query: { text: (0, y.w)(M(a)) }, pathname: "/compose/post" });
                        }, [c, a]),
                        L = o.useCallback(() => {
                            c.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: c.location.pathname } });
                        }, [c, a]),
                        R = o.useCallback(() => {
                            const e = [];
                            return d.Z.isAvailable() && e.push({ text: P, onClick: x, Icon: i.default }), _ && (e.push(((e) => ({ text: w, onClick: e, Icon: u.default }))(E)), e.push(((e) => ({ text: v, onClick: e, Icon: h.default }))(j))), S && e.push(((e) => ({ text: I, onClick: e, Icon: m.default }))(L)), e;
                        }, [x, E, L, j, S, _]),
                        N = o.useCallback(
                            (e) => {
                                const a = R();
                                return a.length ? o.createElement(l.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [R],
                        ),
                        O = o.useCallback(() => {}, []);
                    return A ? o.createElement(t.ZP, { Icon: D.default, "aria-label": g, color: "text", hoverLabel: Z, iconSize: e, onPress: O, renderMenu: N, testID: "job-share-action-btn" }) : null;
                },
                _ = o.memo(C);
        },
        524496: (e, a, r) => {
            r.d(a, { Z: () => P });
            r(136728);
            var o = r(202784),
                d = r(301503),
                n = r(325686),
                l = r(595088),
                t = r(516951),
                s = r(731708),
                c = r(779802),
                i = r(537392),
                u = r(989272),
                h = r(925873),
                m = r(202253),
                D = r(786475),
                b = r(392237),
                p = r(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                M = (0, l.Z)(f).reduce((e, [a, r]) => e.set(a, r), d.DefaultDraftBlockRenderMap);
            let y = !1;
            const P = o.memo(function (e) {
                    const { componentByType: a, contentState: r, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        y || (u.fH(p.c, p.n), (y = !0));
                    }, []);
                    const b = [(0, m.ez)(l, s), m.aF, m.RU];
                    e.disable_entityLinkDecorator || b.push((0, m.NA)(l, s));
                    const f = h.Z.initEditorState(r, { decorators: b });
                    let P = t.Z;
                    return (
                        a &&
                            (P = (e) => {
                                const r = e.getType();
                                return a[r] || null;
                            }),
                        o.createElement(i.ZP, null, ({ containerWidth: e }) => o.createElement(n.Z, { style: k.fontFamily }, o.createElement(d.Editor, { blockRenderMap: M, blockRendererFn: P, blockStyleFn: (0, c.su)(D.Z.isNarrowScreenWidth(e)), editorState: f, onChange: t.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = b.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        183806: (e, a, r) => {
            r.d(a, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.f0c0121a.js.map
