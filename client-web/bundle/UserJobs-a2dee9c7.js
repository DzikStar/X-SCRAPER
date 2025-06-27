"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs-a2dee9c7"],
    {
        229333: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n = l(202784),
                r = l(466999),
                t = l(325686),
                o = l(392237),
                s = l(111677);
            const i = l.n(s)().e5b0063d;
            let d = 0;
            class c extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        l = i({ title: a });
                    return n.createElement(t.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, a), n.createElement(t.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        949626: (e, a, l) => {
            l.d(a, { Z: () => r });
            l(202784);
            var n = l(950822);
            const r = (e) => (0, n.Z)("div", e);
        },
        414939: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = l(202784),
                r = l(325686),
                t = l(392237);
            class o extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: s.root });
                }
            }
            const s = t.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = o;
        },
        856438: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(868634),
                t = l(731708),
                o = l(392237),
                s = l(111677),
                i = l.n(s),
                d = l(262009);
            const c = i().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => n.createElement(r.ZP, { style: u.label, type: "priority" }, n.createElement(t.ZP, { style: u.featuredLabel }, n.createElement(d.default, { style: u.featuredIcon }), c));
        },
        150123: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                r = l(691533),
                t = l(402058);
            const o = (e) => n.createElement(r.Z, { hideOnError: !0 }, n.createElement(t.Z, e));
        },
        965245: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = l(807896),
                r = l(202784),
                t = l(229333),
                o = l(414939),
                s = l(334346);
            const i = ({ accessibilityTitle: e, footer: a = r.createElement(o.Z, null), ...l }) => {
                const i = r.createElement(s.C, (0, n.Z)({}, l, { footer: a }));
                return e ? r.createElement(t.Z, { title: e }, i) : i;
            };
        },
        334346: (e, a, l) => {
            l.d(a, { C: () => i, Z: () => s });
            var n = l(807896),
                r = l(202784),
                t = l(524084),
                o = l(768572);
            const s = "stable_sort_index",
                i = r.forwardRef((e, a) => {
                    const l = e.cacheKey;
                    return r.createElement(o.ZP, { identifier: l }, r.createElement(t.Z, (0, n.Z)({ ref: a }, e)));
                });
        },
        252021: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                r = l(107267),
                t = l(115553);
            const o = (e) => {
                (0, r.useHistory)();
                return n.createElement(t.A, e);
            };
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n = l(202784),
                r = l(500002),
                t = l(668214),
                o = l(997174),
                s = l(118823);
            const i = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: t, search: o },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (i = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && l !== t) || n !== o || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: n } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), n(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(i(d));
        },
        524084: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n = l(202784),
                r = l(523561),
                t = l(195560);
            const o = (0, r.Z)({ loader: () => l.e("loader.AbsolutePower").then(l.bind(l, 590136)), renderPlaceholder: (e, a) => n.createElement(t.Z, { hasError: e, onRetry: a }) });
        },
        402058: (e, a, l) => {
            l.d(a, { Z: () => n });
            l(202784);
            const n = (0, l(523561).Z)({
                loader: () =>
                    Promise.all([
                        l.e("icons.21"),
                        l.e("icons.16"),
                        l.e("icons.10"),
                        l.e("icons.19"),
                        l.e("icons.1"),
                        l.e("icons.0"),
                        l.e("icons.8"),
                        l.e("icons.2"),
                        l.e("icons.23"),
                        l.e("icons.3"),
                        l.e("icons.15"),
                        l.e("modules.common-e907d115"),
                        l.e("modules.common-e019dbda"),
                        l.e("icons.9"),
                        l.e("icons.7"),
                        l.e("icons.24"),
                        l.e("icons.29"),
                        l.e("icons.13"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
                        l.e("loader.WideLayout-9f4db315"),
                    ]).then(l.bind(l, 741494)),
            });
        },
        478414: (e, a, l) => {
            l.d(a, { Hx: () => i, K: () => t, bb: () => s, gv: () => o, kg: () => d, yW: () => c });
            var n = l(779802),
                r = l(392237);
            const t = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                s = ({ h1FontSize: e, h2FontSize: a, paragraphFontSize: l }) => [
                    { blockType: n.P7.header1, label: n.et, component: (0, n.LI)({ size: e, children: n.et, extendedWidth: !0 }) },
                    { blockType: n.P7.header2, label: n.PW, component: (0, n.LI)({ size: a, weight: "bold", children: n.PW }) },
                    { blockType: n.P7.paragraph, label: n.$u, component: (0, n.LI)({ size: l, children: n.$u }) },
                ],
                i = "extended-profile",
                d = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: a, h2FontSize: l, paragraphFontSize: n }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[a]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[a]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[l]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[l]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[n]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[n]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[n]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        226298: (e, a, l) => {
            l.d(a, { z: () => n });
            const n = (e) => `/i/jobs/${e}`;
        },
        985124: (e, a, l) => {
            l.d(a, { $J: () => s, WA: () => x, ZC: () => w, cj: () => U, eo: () => n.eo, hb: () => O, kW: () => i, pg: () => v, rP: () => o, u4: () => R, xk: () => z });
            var n = l(89217),
                r = l(111677),
                t = l.n(r);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                s = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(n.eo).map(([e, a]) => ({ label: String(a), value: e })),
                d = t().d2b8da2c,
                c = t().cd958040,
                u = t().c5760ca2,
                m = t().d31b4a2a,
                p = t().df1b7550,
                h = t().f38959a6,
                f = t().bc78a26c,
                g = t().ec28738e,
                b = t().icb06308,
                y = t().d0b978ec,
                k = t().af19cdc2,
                D = t().e4a51fca,
                _ = t().e8ca78ae,
                S = t().c365dcc6,
                w = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: p, sales_am: h, operations: f, people_hr: g, finance_accounting: b, legal_compliance: y, science_engineering: k, medical: D, construction_trades: _, other: S }),
                v = Object.entries(w).map(([e, a]) => ({ label: String(a), value: e })),
                F = t().e25d75e4,
                M = t().e89b3f04,
                I = t().h55825dc,
                Z = t().cc537386,
                P = t().jfc3cece,
                C = t().e1b683aa,
                E = t().c4627fda,
                $ = t().db75b47c,
                x = Object.freeze({ intern: F, entry_level: M, junior: I, mid_level: Z, senior: P, lead: C, manager: E, executive: $ }),
                z = Object.entries(x).map(([e, a]) => ({ label: String(a), value: e })),
                K = t().i312f0ce,
                A = t().b4aff05e,
                L = t().c08b9138,
                j = t().ia5d6422,
                N = t().h97c7f42,
                T = t().ibed2d04,
                U = Object.freeze({ onsite: { label: K, description: j, value: "onsite" }, remote: { label: L, description: T, value: "remote" }, hybrid: { label: A, description: N, value: "hybrid" } }),
                R = Object.keys(U).map((e) => ({ label: U[e].label, value: e, description: U[e].description })),
                O = Object.keys(n.Qw).map((e) => ({ ...n.Qw[e], value: String(n.Qw[e].value) }));
        },
        943052: (e, a, l) => {
            l.d(a, { Z: () => t });
            l(543673), l(240753), l(128399), l(136728);
            var n = l(202784),
                r = l(107267);
            const t = () => {
                const e = (0, r.useLocation)(),
                    a = (0, r.useHistory)(),
                    [l, t] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const o = n.useCallback(
                        (n, r) => {
                            const t = new URLSearchParams(l);
                            t.set(n, r), a.push(`${e.pathname}?${t.toString()}`);
                        },
                        [a, e.pathname, l],
                    ),
                    s = n.useCallback(
                        (n) => {
                            const r = new URLSearchParams(l);
                            for (const e in n) n[e] ? r.set(e, n[e]) : r.delete(e);
                            a.push(`${e.pathname}?${r.toString()}`);
                        },
                        [a, e.pathname, l],
                    );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), o, s];
            };
        },
        42508: (e, a, l) => {
            l.d(a, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, a, l) => {
            l.d(a, { ZP: () => r, n5: () => o });
            var n = l(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: a, isSuspended: l, isWithheld: n, user: r, userProfileInterstitialType: o, viewerUserId: s }) => {
                    const i = !!s && s === r.id_str,
                        d = r.blocked_by,
                        c = r.blocking,
                        u = t({ displaySensitiveMedia: e, isOwnProfile: i, user: r, userProfileInterstitialType: o }),
                        m = (i || !n) && !l;
                    return { avatar: i || (!u && !a && !l && !n), badges: i || !n, description: i || (!c && !d && !u && !l && !n), followButton: !(i || d || u || a || l || n), followersYouKnow: !i && !d && !c && !u && !a && !l && !n && (r.following || !r.protected), followIndicator: !n, fullName: m, label: m, stats: i || (!d && !u && !l && !n), subscriptionsCount: i || !r.has_hidden_subscriptions_on_profile };
                },
                t = ({ displaySensitiveMedia: e, isOwnProfile: a, user: l, userProfileInterstitialType: r }) => (r === n.Z.SensitiveMedia || r === n.Z.OffensiveProfileContent) && !(a || l.following || e),
                o = ({ isOwnProfile: e, user: a }) => {
                    const l = a.protected && !a.following;
                    return e || !l;
                };
        },
        127218: (e, a, l) => {
            l.d(a, { C: () => b });
            var n = l(202784),
                r = l(614983),
                t = l.n(r),
                o = l(437429),
                s = l.n(o),
                i = l(57074),
                d = l.n(i),
                c = l(10622),
                u = l.n(c),
                m = l(585488),
                p = l(71620),
                h = l(163889),
                f = l(312771),
                g = l(535338);
            function b(e, a, l) {
                const [r, o] = n.useState(!1),
                    [i, c] = n.useState(null),
                    b = s()(),
                    y = d()(a),
                    k = (0, p.po)(),
                    D = (0, g.p)(e, y, l);
                return n.useMemo(() => {
                    const a = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    t()(!!a, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: l, previous_cursor: n } =
                            (function (e, a) {
                                try {
                                    t()("slice_info" === a[a.length - 1], "Invalid sliceInfoPath!");
                                    let l = e;
                                    for (const e of a) t()(!!l, "The provided path is invalid."), t()("string" == typeof e, "Unexpected value for path!"), (l = l?.[e]);
                                    return l;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(D, a) || {},
                        s = (a) => {
                            r ||
                                (o(!0),
                                u()(b, e, { ...y, cursor: a }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), k(e);
                                    },
                                }));
                        },
                        d = () => {
                            l && s(l);
                        },
                        p = () => {
                            n && s(n);
                        },
                        g = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: f.ZP.FAILED, error: i, fetchNext: d, fetchPrevious: p, refetch: g, data: D, hasNext: Boolean(l), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: p, refetch: g, data: D, hasNext: Boolean(l), hasPrevious: Boolean(n) };
                }, [e, D, r, i, b, y, k]);
            }
        },
        499102: (e, a, l) => {
            l.d(a, { Z: () => Z });
            l(136728);
            var n = l(202784),
                r = l(576648),
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
                f = l(443781),
                g = l(952793),
                b = l(782642),
                y = l(226298),
                k = l(701796);
            const D = d().f508c49c,
                _ = d().f88553c8,
                S = d().d6825dce,
                w = d().b9613442,
                v = d().c2b3f0da,
                F = d().c791d3fc,
                M = { label: d().ifea3114, withDelay: !0 },
                I = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const i = (0, b.p)(),
                        d = (0, t.useHistory)(),
                        { userClaims: I, viewerUserId: Z } = (0, f.QZ)(),
                        P = (0, g.hC)("recruiting_jobs_list_share_enabled"),
                        C = (0, g.hC)("recruiting_pin_job_enabled") && (I.isTrueAndEnabled("subscriptions_feature_premium_jobs") || I.isVerifiedOrg()) && Z !== l,
                        E = n.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        $ = n.useCallback(() => {
                            r.Z.setString((0, k.w)((0, y.z)(a))), i({ text: _ });
                        }, [i, a]),
                        x = n.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        z = n.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        K = n.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: D, onClick: $, Icon: c.default }), Z && (e.push(((e) => ({ text: S, onClick: e, Icon: u.default }))(E)), e.push(((e) => ({ text: w, onClick: e, Icon: m.default }))(x))), C && e.push(((e) => ({ text: v, onClick: e, Icon: p.default }))(z)), e;
                        }, [$, E, z, x, C, Z]),
                        A = n.useCallback(
                            (e) => {
                                const a = K();
                                return a.length ? n.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [K],
                        ),
                        L = n.useCallback(() => {}, []);
                    return P ? n.createElement(s.ZP, { Icon: h.default, "aria-label": F, color: "text", hoverLabel: M, iconSize: e, onPress: L, renderMenu: A, testID: "job-share-action-btn" }) : null;
                },
                Z = n.memo(I);
        },
        771035: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n = l(202784),
                r = l(107267),
                t = l(371344),
                o = l(956272),
                s = l(666536),
                i = l(943052);
            const d = ({ basePath: e, isCompact: a = !1, resetPageOnSearch: l = !1, styleType: d }) => {
                    const [c, u, m] = (0, i.Z)(),
                        [p, h] = n.useState(c.get("q") || ""),
                        f = (0, r.useHistory)(),
                        g = n.useRef(!1);
                    n.useEffect(
                        () => (
                            (g.current = !0),
                            () => {
                                g.current = !1;
                            }
                        ),
                        [],
                    );
                    const b = n.useCallback(() => {
                            h(""), f.replace(e);
                        }, [e, f]),
                        y = n.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    g.current && (e.length > 0 ? (l ? m({ q: e, p: "1" }) : u("q", e)) : b());
                                }, 1e3),
                            [b, u, m, l],
                        ),
                        k = n.useCallback(
                            (e) => {
                                const { value: a } = e.target;
                                h(a), y(a);
                            },
                            [y],
                        );
                    return n.createElement(t.Z, { Icon: o.default, autoComplete: "off", isCompact: a, leftAligned: !0, onChange: k, onClear: b, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: p, withClearButton: !0 });
                },
                c = n.memo(d);
        },
        736181: (e, a, l) => {
            l.r(a), l.d(a, { default: () => He });
            var n = l(202784),
                r = l(325686),
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
                f = l(952793),
                g = l(835546),
                b = l(615027),
                y = l(771035),
                k = l(668214),
                D = l(919022);
            const _ = (e, a) => a.match.params.screenName || void 0,
                S = (e, a) => {
                    const l = _(0, a);
                    if (l) return D.ZP.selectByScreenName(e, l);
                },
                w = (0, k.Z)()
                    .propsFromState(() => ({ screenName: _, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: D.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                F,
                M,
                I,
                Z,
                P,
                C,
                E,
                $,
                x,
                z,
                K,
                A,
                L,
                j = l(807896),
                N = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (F = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (M = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (I = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: (Z = [
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
                                                (P = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (C = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
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
                                                                (E = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                    args: [($ = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (x = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                        (z = {
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
                        argumentDefinitions: [I, v, F, M],
                        kind: "Operation",
                        name: "UserJobListQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "data",
                                args: Z,
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
                                            P,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    C,
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
                                                    E,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            E,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    P,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (A = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, $]),
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
                                                                                            (L = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            E,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    P,
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
                                                                                                            L,
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
                                                                                    z,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: A, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            L,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            L,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    L,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            K,
                                        ],
                                        storageKey: null,
                                    },
                                    L,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zNjyUs2MiymdZNSapnTINA", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            N.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const T = N;
            l(585488);
            var U = l(38293),
                R = l(652904),
                O = l(736063),
                J = l(943052),
                q = l(293115),
                B = l(127218),
                H = {
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
            const W = H;
            var V = l(277660),
                Q = l.n(V),
                Y = l(965245),
                G = l(725516);
            const X = (e, a, l) => ({ id: e, position: a, is_viewer_follows_user: l }),
                ee = (e, a, l, n) => ({ profile_id: n, items: [X(e, a, l)] });
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
            var ne = l(301503),
                re = l(366635),
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
                fe = l(478414),
                ge = l(499102);
            const be = ({ fallbackName: e, user: a }) => {
                    const l = Q()(he.fR, a);
                    return l && l.core && l.core.name && l.core.screen_name ? n.createElement(re.Z, { avatarSize: "small", isVerified: l.verification?.verified ?? !1, name: l.core.name, nameSize: "subtext2", screenName: l.core.screen_name, screenNameSize: "subtext2", verifiedType: l.verification?.verified_type ?? void 0, weight: "normal" }) : e ? n.createElement(s.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                ye = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                ke = "user-job-list-item-short-description",
                De = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                _e = ({ allowShare: e = !1, companyName: a, createdAt: l, formattedSalary: t, isFeatured: o, isVerifiedOrg: i, jobId: d, jobTitle: c, location: u, onClick: m, profileId: p, redirectUrl: h, salaryInterval: f, shortDescription: g, user: b, withUserInfo: y = !1 }) => {
                    (0, ue.q)(() => {
                        (0, te.fH)((0, fe.yW)(ke, ye), ke);
                    });
                    const k = n.useMemo(() => ({ label: c }), [c]),
                        D = n.useMemo(() => oe.Z.getContentStateFromRaw(g), [g]),
                        _ = n.useMemo(() => D && (0, ne.convertFromRaw)(D).hasText(), [D]),
                        S = n.useMemo(() => `/i/jobs/${d}`, [d]);
                    return n.createElement(se.Z, { interactive: !0, link: i ? { pathname: S, external: !0 } : h || "", onClick: m, style: De.listContainer }, n.createElement(r.Z, { style: De.items }, n.createElement(s.ZP, { hoverLabel: k, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), y ? n.createElement(be, { fallbackName: a, user: b }) : null, n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), t ? n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, ie.M)(t, f)) : null, D && _ ? n.createElement(r.Z, { style: De.shortDescription }, n.createElement(me.Z, { className: ke }, n.createElement(de.Z, { contentState: D, paragraphFontSizeOverride: ye.paragraphFontSize }))) : null), n.createElement(r.Z, { style: De.lastRow }, n.createElement(r.Z, { style: De.itemRow }, n.createElement(r.Z, { style: De.itemRow }, l ? n.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: De.timestamp, timestamp: l }) : null, o ? n.createElement(pe.Z, null) : null), e ? n.createElement(ge.Z, { iconSize: "small", jobId: d, jobUserId: p }) : null)));
                },
                Se = le,
                we = ({ isViewerFollowsUser: e, item: a, jobId: l, jobIndex: r, profileId: t, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Se, a),
                        d = n.useCallback(() => {
                            s.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: t, items: [{ id: l, position: r, is_viewer_follows_user: e }] } });
                        }, [s, e, l, r, t]),
                        c = Boolean(o?.is_verified_organization);
                    return i && i.title && i.location ? n.createElement(_e, { allowShare: c, createdAt: i.created_at, formattedSalary: i.formatted_salary, isFeatured: Boolean(i.featured), isVerifiedOrg: o?.is_verified_organization, jobId: l, jobTitle: i.title, location: i.location, onClick: d, profileId: t, redirectUrl: i.redirect_url || "", salaryInterval: i.salary_interval, salaryMax: i.salary_max, salaryMin: i.salary_min, shortDescription: i.short_description, user: o }) : null;
                },
                ve = n.memo(we),
                Fe = W,
                Me = (e) => e.rest_id,
                Ie = ({ fetchNext: e, isViewerFollowsUser: a, profileId: l, slice: r, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Fe, r).items_results,
                        d = n.useCallback(
                            (e) => {
                                const r = e.result?.core;
                                return r ? n.createElement(ve, { isViewerFollowsUser: a, item: r, jobId: e.rest_id, jobIndex: i.findIndex((a) => a.rest_id === e.rest_id), profileId: l, user: o }) : null;
                            },
                            [a, i, l, o],
                        ),
                        [c, u] = n.useState([]),
                        m = n.useCallback(
                            (e) => {
                                e.positions.forEach((n, r) => {
                                    var t, o, i;
                                    n.rectangle.getTop() + n.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && n.id && !c.includes(n.id) && (s.scribe({ ...((t = "job_list"), (o = "impression"), (i = "job"), { section: "jobs_list", component: t, element: i, action: o }), data: { ...ee(n.id, r, a, l) } }), u((e) => [...e, n.id]));
                                });
                            },
                            [s, c, a, l],
                        );
                    return i ? (i.length ? n.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: Me, items: i, onItemsRendered: m, onNearEnd: e, renderer: d }) : n.createElement(t.Z, { header: "No jobs" })) : null;
                },
                Ze = n.memo(Ie),
                Pe = { page: "jobs_list", section: "all" },
                Ce = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                Ee = T,
                $e = (e) => {
                    const { query: a, screenName: l, user: r } = e,
                        t = n.useMemo(() => {
                            const e = a?.keyword ? { keyword: a.keyword } : null;
                            return { userId: r.id_str, count: 50, cursor: null, searchParams: e };
                        }, [a, r.id_str]),
                        { data: o, fetchNext: s } = (0, B.C)(Ee, t),
                        i = o?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return i ? n.createElement(q.nO, { namespace: Pe }, n.createElement(R.Z, null, n.createElement(n.Fragment, null, n.createElement(U.Z, { title: Ce(l) }), n.createElement(Ze, { fetchNext: s, isViewerFollowsUser: r.following, profileId: r.id_str, slice: i, user: o.data.result })))) : null;
                },
                xe = { context: "UserJobs" },
                ze = (e) => {
                    const [a] = (0, J.Z)(),
                        l = n.useMemo(() => ({ keyword: a.get("q") }), [a]);
                    return n.createElement(O.H, { errorConfig: xe }, n.createElement($e, (0, j.Z)({}, e, { query: l })));
                },
                Ke = n.memo(ze);
            var Ae = l(138099),
                Le = l(154003),
                je = l(466818),
                Ne = l(985124);
            const Te = () => {
                    const [e, a] = (0, J.Z)(),
                        l = n.useCallback(
                            (e, l) => {
                                a("t", e);
                            },
                            [a],
                        ),
                        r = n.useMemo(() => e.get("t") ?? "", [e]);
                    return n.createElement(je.ZP, { label: "Job category", onChange: l, options: Ne.pg, testID: "select-team", value: r, withEmptyOption: !0 });
                },
                Ue = ({ onDismiss: e, screenName: a }) => n.createElement(Ae.Z, { onMaskClick: e, style: Re.modalContainer, type: "full", withMask: !0 }, n.createElement(r.Z, { style: Re.modalContent }, n.createElement(s.ZP, null, "Search jobs")), n.createElement(y.Z, { basePath: `/${a}/jobs` }), n.createElement(Te, null), n.createElement(Le.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Re = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Oe = n.memo(Ue),
                Je = u().b007440a,
                qe = u().c5fb5a1a,
                Be = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                He = w((e) => {
                    const [a, l] = n.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: k } = e,
                        { viewerUserId: D } = n.useContext(h.rC),
                        _ = (0, f.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, f.hC)("recruiting_job_recommendations_enabled");
                    n.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const w = k?.id_str === D,
                        v = !k || (k && (0, g.n5)({ isOwnProfile: w, user: k })),
                        F = n.useCallback(() => {
                            l(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === k?.verified_type || "Square" === k?.profile_image_shape ? "square" : "circle";
                            return n.createElement(r.Z, { style: Be.rightControlContainer }, n.createElement(r.Z, null, k ? n.createElement(o.default, { screenName: u, shape: e, size: "large", uri: k.profile_image_url_https }) : n.createElement(o.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), n.createElement(r.Z, null, n.createElement(s.ZP, { size: "body", weight: "bold" }, Je), n.createElement(i.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return v ? n.createElement(n.Fragment, null, n.createElement(p.Z, { backLocation: "/", history: c, primaryContent: k ? (!k?.protected || k?.following || w ? n.createElement(n.Fragment, null, _ && u ? n.createElement(r.Z, { style: Be.rightControlContainer }, n.createElement(r.Z, { style: Be.searchContainer }, n.createElement(y.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, n.createElement(Ke, { screenName: u, user: k })) : n.createElement(t.Z, { header: qe })) : null, primaryContentLabel: Je, sidebarContent: S ? n.createElement(r.Z, { style: Be.sidebarRoot }, n.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), a ? n.createElement(Oe, { onDismiss: F, screenName: u }) : null) : n.createElement(b.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs-a2dee9c7.a7cbed2a.js.map
