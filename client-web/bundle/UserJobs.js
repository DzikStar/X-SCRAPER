(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs", "icons/IconNumberedList-js", "icons/IconSparkle-js"],
    {
        229333: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var a = n(202784),
                l = n(466999),
                r = n(325686),
                o = n(392237),
                i = n(111677);
            const s = n.n(i)().e5b0063d;
            let d = 0;
            class c extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = s({ title: t });
                    return a.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, t), a.createElement(r.Z, { "aria-label": n }, e));
                }
            }
            const u = c;
        },
        949626: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            n(202784);
            var a = n(950822);
            const l = (e) => (0, a.Z)("div", e);
        },
        414939: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var a = n(202784),
                l = n(325686),
                r = n(392237);
            class o extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(l.Z, { style: i.root });
                }
            }
            const i = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = o;
        },
        856438: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var a = n(202784),
                l = n(868634),
                r = n(731708),
                o = n(392237),
                i = n(111677),
                s = n.n(i),
                d = n(262009);
            const c = s().a71d7584,
                u = o.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                m = () => a.createElement(l.ZP, { style: u.label, type: "priority" }, a.createElement(r.ZP, { style: u.featuredLabel }, a.createElement(d.default, { style: u.featuredIcon }), c));
        },
        150123: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(691533),
                r = n(402058);
            const o = (e) => a.createElement(l.Z, { hideOnError: !0 }, a.createElement(r.Z, e));
        },
        965245: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var a = n(807896),
                l = n(202784),
                r = n(229333),
                o = n(414939),
                i = n(334346);
            const s = ({ accessibilityTitle: e, footer: t = l.createElement(o.Z, null), ...n }) => {
                const s = l.createElement(i.C, (0, a.Z)({}, n, { footer: t }));
                return e ? l.createElement(r.Z, { title: e }, s) : s;
            };
        },
        334346: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => s, Z: () => i });
            var a = n(807896),
                l = n(202784),
                r = n(524084),
                o = n(768572);
            const i = "stable_sort_index",
                s = l.forwardRef((e, t) => {
                    const n = e.cacheKey;
                    return l.createElement(o.ZP, { identifier: n }, l.createElement(r.Z, (0, a.Z)({ ref: t }, e)));
                });
        },
        252021: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(107267),
                r = n(115553);
            const o = (e) => {
                (0, l.useHistory)();
                return a.createElement(r.A, e);
            };
        },
        652904: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var a = n(202784),
                l = n(500002),
                r = n(668214),
                o = n(997174),
                i = n(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: l,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const d = l || i;
                    ((d && l !== i) || (!d && n !== r) || a !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, l.ZP)(s(d));
        },
        524084: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(523561),
                r = n(195560);
            const o = (0, l.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, t) => a.createElement(r.Z, { hasError: e, onRetry: t }) });
        },
        402058: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
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
        478414: (e, t, n) => {
            "use strict";
            n.d(t, { Hx: () => s, K: () => r, bb: () => i, gv: () => o, kg: () => d, yW: () => c });
            var a = n(779802),
                l = n(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                o = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                i = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: a.P7.header1, label: a.et, component: (0, a.LI)({ size: e, children: a.et, extendedWidth: !0 }) },
                    { blockType: a.P7.header2, label: a.PW, component: (0, a.LI)({ size: t, weight: "bold", children: a.PW }) },
                    { blockType: a.P7.paragraph, label: a.$u, component: (0, a.LI)({ size: n, children: a.$u }) },
                ],
                s = "extended-profile",
                d = "extended-profile-mobile-webview",
                c = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: a }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[t]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[t]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${l.default.theme.fontSizes[n]};\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: calc(${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[a]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[a]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[a]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        226298: (e, t, n) => {
            "use strict";
            n.d(t, { z: () => a });
            const a = (e) => `/i/jobs/${e}`;
        },
        985124: (e, t, n) => {
            "use strict";
            n.d(t, { $J: () => i, WA: () => P, ZC: () => w, cj: () => N, eo: () => a.eo, hb: () => O, kW: () => s, pg: () => v, rP: () => o, u4: () => H, xk: () => T });
            var a = n(89217),
                l = n(111677),
                r = n.n(l);
            const o = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                i = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                s = Object.entries(a.eo).map(([e, t]) => ({ label: String(t), value: e })),
                d = r().d2b8da2c,
                c = r().cd958040,
                u = r().c5760ca2,
                m = r().d31b4a2a,
                f = r().df1b7550,
                h = r().f38959a6,
                p = r().bc78a26c,
                g = r().ec28738e,
                b = r().icb06308,
                y = r().d0b978ec,
                k = r().af19cdc2,
                D = r().e4a51fca,
                _ = r().e8ca78ae,
                S = r().c365dcc6,
                w = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: f, sales_am: h, operations: p, people_hr: g, finance_accounting: b, legal_compliance: y, science_engineering: k, medical: D, construction_trades: _, other: S }),
                v = Object.entries(w).map(([e, t]) => ({ label: String(t), value: e })),
                E = r().e25d75e4,
                $ = r().e89b3f04,
                F = r().h55825dc,
                I = r().cc537386,
                Z = r().jfc3cece,
                x = r().e1b683aa,
                z = r().c4627fda,
                C = r().db75b47c,
                P = Object.freeze({ intern: E, entry_level: $, junior: F, mid_level: I, senior: Z, lead: x, manager: z, executive: C }),
                T = Object.entries(P).map(([e, t]) => ({ label: String(t), value: e })),
                M = r().i312f0ce,
                L = r().b4aff05e,
                K = r().c08b9138,
                j = r().ia5d6422,
                R = r().h97c7f42,
                A = r().ibed2d04,
                N = Object.freeze({ onsite: { label: M, description: j, value: "onsite" }, remote: { label: K, description: A, value: "remote" }, hybrid: { label: L, description: R, value: "hybrid" } }),
                H = Object.keys(N).map((e) => ({ label: N[e].label, value: e, description: N[e].description })),
                O = Object.keys(a.Qw).map((e) => ({ ...a.Qw[e], value: String(a.Qw[e].value) }));
        },
        943052: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                l = n(107267);
            const r = () => {
                const e = (0, l.useLocation)(),
                    t = (0, l.useHistory)(),
                    [n, r] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                        (a, l) => {
                            const r = new URLSearchParams(n);
                            r.set(a, l), t.push(`${e.pathname}?${r.toString()}`);
                        },
                        [t, e.pathname, n],
                    ),
                    i = a.useCallback(
                        (a) => {
                            const l = new URLSearchParams(n);
                            for (const e in a) a[e] ? l.set(e, a[e]) : l.delete(e);
                            t.push(`${e.pathname}?${l.toString()}`);
                        },
                        [t, e.pathname, n],
                    );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o, i];
            };
        },
        42508: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            const a = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => l, n5: () => o });
            var a = n(42508);
            const l = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: a, user: l, userProfileInterstitialType: o, viewerUserId: i }) => {
                    const s = !!i && i === l.id_str,
                        d = l.blocked_by,
                        c = l.blocking,
                        u = r({ displaySensitiveMedia: e, isOwnProfile: s, user: l, userProfileInterstitialType: o }),
                        m = (s || !a) && !n;
                    return { avatar: s || (!u && !t && !n && !a), badges: s || !a, description: s || (!c && !d && !u && !n && !a), followButton: !(s || d || u || t || n || a), followersYouKnow: !s && !d && !c && !u && !t && !n && !a && (l.following || !l.protected), followIndicator: !a, fullName: m, label: m, stats: s || (!d && !u && !n && !a), subscriptionsCount: s || !l.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: l }) => (l === a.Z.SensitiveMedia || l === a.Z.OffensiveProfileContent) && !(t || n.following || e),
                o = ({ isOwnProfile: e, user: t }) => {
                    const n = t.protected && !t.following;
                    return e || !n;
                };
        },
        127218: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => b });
            var a = n(202784),
                l = n(614983),
                r = n.n(l),
                o = n(437429),
                i = n.n(o),
                s = n(57074),
                d = n.n(s),
                c = n(10622),
                u = n.n(c),
                m = n(585488),
                f = n(71620),
                h = n(163889),
                p = n(312771),
                g = n(535338);
            function b(e, t, n) {
                const [l, o] = a.useState(!1),
                    [s, c] = a.useState(null),
                    b = i()(),
                    y = d()(t),
                    k = (0, f.po)(),
                    D = (0, g.p)(e, y, n);
                return a.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: a } =
                            (function (e, t) {
                                try {
                                    r()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) r()(!!n, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(D, t) || {},
                        i = (t) => {
                            l ||
                                (o(!0),
                                u()(b, e, { ...y, cursor: t }).subscribe({
                                    complete: () => {
                                        o(!1);
                                    },
                                    error: (e) => {
                                        o(!1), c(e), k(e);
                                    },
                                }));
                        },
                        d = () => {
                            n && i(n);
                        },
                        f = () => {
                            a && i(a);
                        },
                        g = () => {
                            i(void 0);
                        };
                    return s ? { subsequentFetchStatus: p.ZP.FAILED, error: s, fetchNext: d, fetchPrevious: f, refetch: g, data: D, hasNext: Boolean(n), hasPrevious: Boolean(a) } : { subsequentFetchStatus: l ? p.ZP.LOADING : p.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: f, refetch: g, data: D, hasNext: Boolean(n), hasPrevious: Boolean(a) };
                }, [e, D, l, s, b, y, k]);
            }
        },
        499102: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => I });
            n(136728);
            var a = n(202784),
                l = n(576648),
                r = n(107267),
                o = n(811176),
                i = n(40644),
                s = n(111677),
                d = n.n(s),
                c = n(630715),
                u = n(717160),
                m = n(885724),
                f = n(106186),
                h = n(786272),
                p = n(443781),
                g = n(952793),
                b = n(782642),
                y = n(226298),
                k = n(701796);
            const D = d().f508c49c,
                _ = d().f88553c8,
                S = d().d6825dce,
                w = d().b9613442,
                v = d().c2b3f0da,
                E = d().c791d3fc,
                $ = { label: d().ifea3114, withDelay: !0 },
                F = ({ iconSize: e = "normal", jobId: t, jobUserId: n }) => {
                    const s = (0, b.p)(),
                        d = (0, r.useHistory)(),
                        { userClaims: F, viewerUserId: I } = (0, p.QZ)(),
                        Z = (0, g.hC)("recruiting_jobs_list_share_enabled"),
                        x = (0, g.hC)("recruiting_pin_job_enabled") && (F.isTrueAndEnabled("subscriptions_feature_premium_jobs") || F.isVerifiedOrg()) && I !== n,
                        z = a.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(t)) }, pathname: "/messages/compose" });
                        }, [d, t]),
                        C = a.useCallback(() => {
                            l.Z.setString((0, k.w)((0, y.z)(t))), s({ text: _ });
                        }, [s, t]),
                        P = a.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(t)) }, pathname: "/compose/post" });
                        }, [d, t]),
                        T = a.useCallback(() => {
                            d.push({ query: { jid: t }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, t]),
                        M = a.useCallback(() => {
                            const e = [];
                            return l.Z.isAvailable() && e.push({ text: D, onClick: C, Icon: c.default }), I && (e.push(((e) => ({ text: S, onClick: e, Icon: u.default }))(z)), e.push(((e) => ({ text: w, onClick: e, Icon: m.default }))(P))), x && e.push(((e) => ({ text: v, onClick: e, Icon: f.default }))(T)), e;
                        }, [C, z, T, P, x, I]),
                        L = a.useCallback(
                            (e) => {
                                const t = M();
                                return t.length ? a.createElement(o.Z, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [M],
                        ),
                        K = a.useCallback(() => {}, []);
                    return Z ? a.createElement(i.ZP, { Icon: h.default, "aria-label": E, color: "text", hoverLabel: $, iconSize: e, onPress: K, renderMenu: L, testID: "job-share-action-btn" }) : null;
                },
                I = a.memo(F);
        },
        771035: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var a = n(202784),
                l = n(107267),
                r = n(371344),
                o = n(956272),
                i = n(666536),
                s = n(943052);
            const d = ({ basePath: e, isCompact: t = !1, resetPageOnSearch: n = !1, styleType: d }) => {
                    const [c, u, m] = (0, s.Z)(),
                        [f, h] = a.useState(c.get("q") || ""),
                        p = (0, l.useHistory)(),
                        g = a.useRef(!1);
                    a.useEffect(
                        () => (
                            (g.current = !0),
                            () => {
                                g.current = !1;
                            }
                        ),
                        [],
                    );
                    const b = a.useCallback(() => {
                            h(""), p.replace(e);
                        }, [e, p]),
                        y = a.useMemo(
                            () =>
                                (0, i.Z)((e) => {
                                    g.current && (e.length > 0 ? (n ? m({ q: e, p: "1" }) : u("q", e)) : b());
                                }, 1e3),
                            [b, u, m, n],
                        ),
                        k = a.useCallback(
                            (e) => {
                                const { value: t } = e.target;
                                h(t), y(t);
                            },
                            [y],
                        );
                    return a.createElement(r.Z, { Icon: o.default, autoComplete: "off", isCompact: t, leftAligned: !0, onChange: k, onClear: b, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: f, withClearButton: !0 });
                },
                c = a.memo(d);
        },
        736181: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => We });
            var a = n(202784),
                l = n(325686),
                r = n(457311),
                o = n(823161),
                i = n(731708),
                s = n(601413),
                d = n(392237),
                c = n(111677),
                u = n.n(c),
                m = n(150123),
                f = n(252021),
                h = n(443781),
                p = n(952793),
                g = n(835546),
                b = n(615027),
                y = n(771035),
                k = n(668214),
                D = n(919022);
            const _ = (e, t) => t.match.params.screenName || void 0,
                S = (e, t) => {
                    const n = _(0, t);
                    if (n) return D.ZP.selectByScreenName(e, n);
                },
                w = (0, k.Z)()
                    .propsFromState(() => ({ screenName: _, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: D.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                E,
                $,
                F,
                I,
                Z,
                x,
                z,
                C,
                P,
                T,
                M,
                L,
                K,
                j = n(807896),
                R = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (E = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), ($ = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (F = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                                                (Z = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (x = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
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
                                                                (z = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                    args: [(C = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                                                                    concreteType: "JobSearchSlice",
                                                                                    kind: "LinkedField",
                                                                                    name: "__UserJobListQueryScreen_consumer_job_search_slice_slice",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { args: null, kind: "FragmentSpread", name: "UserJobList_jobsSlice" },
                                                                                        (P = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
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
                                                (M = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        argumentDefinitions: [F, v, E, $],
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
                                            Z,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    x,
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
                                                    z,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            z,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    Z,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (L = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, C]),
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
                                                                                            (K = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            z,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    Z,
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
                                                                                                            K,
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
                                                                                    P,
                                                                                    T,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: L, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                                            K,
                                                                        ],
                                                                        type: "ApiRecruitingOrganization",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            K,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    K,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                            M,
                                        ],
                                        storageKey: null,
                                    },
                                    K,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "zNjyUs2MiymdZNSapnTINA", metadata: { sliceInfoPath: ["data", "result", "recruiting_organization_results", "result", "consumer_job_search", "slice_info"] }, name: "UserJobListQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            R.hash = "cf4e007b7ad023aef8084b7aaf88e6a1";
            const A = R;
            n(585488);
            var N = n(38293),
                H = n(652904),
                O = n(736063),
                U = n(943052),
                B = n(293115),
                q = n(127218),
                W = {
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
            const J = W;
            var V = n(277660),
                Q = n.n(V),
                G = n(965245),
                Y = n(725516);
            const X = (e, t, n) => ({ id: e, position: t, is_viewer_follows_user: n }),
                ee = (e, t, n, a) => ({ profile_id: a, items: [X(e, t, n)] });
            var te = {
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
            const ne = te;
            var ae = n(301503),
                le = n(366635),
                re = n(989272),
                oe = n(925873),
                ie = n(952428),
                se = n(457458),
                de = n(524496),
                ce = n(966886),
                ue = n(187669),
                me = n(949626),
                fe = n(856438),
                he = n(910113),
                pe = n(478414),
                ge = n(499102);
            const be = ({ fallbackName: e, user: t }) => {
                    const n = Q()(he.fR, t);
                    return n && n.core && n.core.name && n.core.screen_name ? a.createElement(le.Z, { avatarSize: "small", isVerified: n.verification?.verified ?? !1, name: n.core.name, nameSize: "subtext2", screenName: n.core.screen_name, screenNameSize: "subtext2", verifiedType: n.verification?.verified_type ?? void 0, weight: "normal" }) : e ? a.createElement(i.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                ye = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                ke = "user-job-list-item-short-description",
                De = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                _e = ({ allowShare: e = !1, companyName: t, createdAt: n, formattedSalary: r, isFeatured: o, isVerifiedOrg: s, jobId: d, jobTitle: c, location: u, onClick: m, profileId: f, redirectUrl: h, salaryInterval: p, shortDescription: g, user: b, withUserInfo: y = !1 }) => {
                    (0, ue.q)(() => {
                        (0, re.fH)((0, pe.yW)(ke, ye), ke);
                    });
                    const k = a.useMemo(() => ({ label: c }), [c]),
                        D = a.useMemo(() => oe.Z.getContentStateFromRaw(g), [g]),
                        _ = a.useMemo(() => D && (0, ae.convertFromRaw)(D).hasText(), [D]),
                        S = a.useMemo(() => `/i/jobs/${d}`, [d]);
                    return a.createElement(ie.Z, { interactive: !0, link: s ? { pathname: S, external: !0 } : h || "", onClick: m, style: De.listContainer }, a.createElement(l.Z, { style: De.items }, a.createElement(i.ZP, { hoverLabel: k, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), y ? a.createElement(be, { fallbackName: t, user: b }) : null, a.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), r ? a.createElement(i.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, se.M)(r, p)) : null, D && _ ? a.createElement(l.Z, { style: De.shortDescription }, a.createElement(me.Z, { className: ke }, a.createElement(de.Z, { contentState: D, paragraphFontSizeOverride: ye.paragraphFontSize }))) : null), a.createElement(l.Z, { style: De.lastRow }, a.createElement(l.Z, { style: De.itemRow }, a.createElement(l.Z, { style: De.itemRow }, n ? a.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: De.timestamp, timestamp: n }) : null, o ? a.createElement(fe.Z, null) : null), e ? a.createElement(ge.Z, { iconSize: "small", jobId: d, jobUserId: f }) : null)));
                },
                Se = ne,
                we = ({ isViewerFollowsUser: e, item: t, jobId: n, jobIndex: l, profileId: r, user: o }) => {
                    const i = (0, Y.z)(),
                        s = Q()(Se, t),
                        d = a.useCallback(() => {
                            i.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: r, items: [{ id: n, position: l, is_viewer_follows_user: e }] } });
                        }, [i, e, n, l, r]),
                        c = Boolean(o?.is_verified_organization);
                    return s && s.title && s.location ? a.createElement(_e, { allowShare: c, createdAt: s.created_at, formattedSalary: s.formatted_salary, isFeatured: Boolean(s.featured), isVerifiedOrg: o?.is_verified_organization, jobId: n, jobTitle: s.title, location: s.location, onClick: d, profileId: r, redirectUrl: s.redirect_url || "", salaryInterval: s.salary_interval, salaryMax: s.salary_max, salaryMin: s.salary_min, shortDescription: s.short_description, user: o }) : null;
                },
                ve = a.memo(we),
                Ee = J,
                $e = (e) => e.rest_id,
                Fe = ({ fetchNext: e, isViewerFollowsUser: t, profileId: n, slice: l, user: o }) => {
                    const i = (0, Y.z)(),
                        s = Q()(Ee, l).items_results,
                        d = a.useCallback(
                            (e) => {
                                const l = e.result?.core;
                                return l ? a.createElement(ve, { isViewerFollowsUser: t, item: l, jobId: e.rest_id, jobIndex: s.findIndex((t) => t.rest_id === e.rest_id), profileId: n, user: o }) : null;
                            },
                            [t, s, n, o],
                        ),
                        [c, u] = a.useState([]),
                        m = a.useCallback(
                            (e) => {
                                e.positions.forEach((a, l) => {
                                    var r, o, s;
                                    a.rectangle.getTop() + a.rectangle.getHeight() < e.viewport.getHeight() + e.viewport.getTop() && a.id && !c.includes(a.id) && (i.scribe({ ...((r = "job_list"), (o = "impression"), (s = "job"), { section: "jobs_list", component: r, element: s, action: o }), data: { ...ee(a.id, l, t, n) } }), u((e) => [...e, a.id]));
                                });
                            },
                            [i, c, t, n],
                        );
                    return s ? (s.length ? a.createElement(G.Z, { cacheKey: "userJobList", footer: null, identityFunction: $e, items: s, onItemsRendered: m, onNearEnd: e, renderer: d }) : a.createElement(r.Z, { header: "No jobs" })) : null;
                },
                Ie = a.memo(Fe),
                Ze = { page: "jobs_list", section: "all" },
                xe = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                ze = A,
                Ce = (e) => {
                    const { query: t, screenName: n, user: l } = e,
                        r = a.useMemo(() => {
                            const e = t?.keyword ? { keyword: t.keyword } : null;
                            return { userId: l.id_str, count: 50, cursor: null, searchParams: e };
                        }, [t, l.id_str]),
                        { data: o, fetchNext: i } = (0, q.C)(ze, r),
                        s = o?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return s ? a.createElement(B.nO, { namespace: Ze }, a.createElement(H.Z, null, a.createElement(a.Fragment, null, a.createElement(N.Z, { title: xe(n) }), a.createElement(Ie, { fetchNext: i, isViewerFollowsUser: l.following, profileId: l.id_str, slice: s, user: o.data.result })))) : null;
                },
                Pe = { context: "UserJobs" },
                Te = (e) => {
                    const [t] = (0, U.Z)(),
                        n = a.useMemo(() => ({ keyword: t.get("q") }), [t]);
                    return a.createElement(O.H, { errorConfig: Pe }, a.createElement(Ce, (0, j.Z)({}, e, { query: n })));
                },
                Me = a.memo(Te);
            var Le = n(138099),
                Ke = n(154003),
                je = n(466818),
                Re = n(985124);
            const Ae = () => {
                    const [e, t] = (0, U.Z)(),
                        n = a.useCallback(
                            (e, n) => {
                                t("t", e);
                            },
                            [t],
                        ),
                        l = a.useMemo(() => e.get("t") ?? "", [e]);
                    return a.createElement(je.ZP, { label: "Job category", onChange: n, options: Re.pg, testID: "select-team", value: l, withEmptyOption: !0 });
                },
                Ne = ({ onDismiss: e, screenName: t }) => a.createElement(Le.Z, { onMaskClick: e, style: He.modalContainer, type: "full", withMask: !0 }, a.createElement(l.Z, { style: He.modalContent }, a.createElement(i.ZP, null, "Search jobs")), a.createElement(y.Z, { basePath: `/${t}/jobs` }), a.createElement(Ae, null), a.createElement(Ke.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                He = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Oe = a.memo(Ne),
                Ue = u().b007440a,
                Be = u().c5fb5a1a,
                qe = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                We = w((e) => {
                    const [t, n] = a.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: k } = e,
                        { viewerUserId: D } = a.useContext(h.rC),
                        _ = (0, p.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, p.hC)("recruiting_job_recommendations_enabled");
                    a.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const w = k?.id_str === D,
                        v = !k || (k && (0, g.n5)({ isOwnProfile: w, user: k })),
                        E = a.useCallback(() => {
                            n(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === k?.verified_type || "Square" === k?.profile_image_shape ? "square" : "circle";
                            return a.createElement(l.Z, { style: qe.rightControlContainer }, a.createElement(l.Z, null, k ? a.createElement(o.default, { screenName: u, shape: e, size: "large", uri: k.profile_image_url_https }) : a.createElement(o.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), a.createElement(l.Z, null, a.createElement(i.ZP, { size: "body", weight: "bold" }, Ue), a.createElement(s.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return v ? a.createElement(a.Fragment, null, a.createElement(f.Z, { backLocation: "/", history: c, primaryContent: k ? (!k?.protected || k?.following || w ? a.createElement(a.Fragment, null, _ && u ? a.createElement(l.Z, { style: qe.rightControlContainer }, a.createElement(l.Z, { style: qe.searchContainer }, a.createElement(y.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, a.createElement(Me, { screenName: u, user: k })) : a.createElement(r.Z, { header: Be })) : null, primaryContentLabel: Ue, sidebarContent: S ? a.createElement(l.Z, { style: qe.sidebarRoot }, a.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), t ? a.createElement(Oe, { onDismiss: E, screenName: u }) : null) : a.createElement(b.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        135904: (e, t, n) => {
            "use strict";
            n.d(t, { c: () => r, n: () => l });
            var a = n(392237);
            const l = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${a.default.theme.fontSizes.title2};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${a.default.theme.fontSizes.title3};\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.title2};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${a.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${a.default.theme.fontWeights.heavy};\n        line-height: ${a.default.theme.lineHeights.headline1};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: ${a.default.theme.spaces.space12};\n        margin-left: calc(${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${a.default.theme.fontSizes.headline2};\n        line-height: ${a.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${a.default.theme.spaces.space12} / 2);\n        margin-left: ${a.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${a.default.theme.spaces.space24} + ${a.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${a.default.theme.spaces.space2});\n        padding-left: calc(${a.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${a.default.theme.colors.gray900};\n        border-radius: ${a.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${a.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${a.default.theme.spaces.space28} + ${a.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${a.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => D });
            n(136728);
            var a = n(202784),
                l = n(301503),
                r = n(325686),
                o = n(595088),
                i = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                m = n(925873),
                f = n(202253),
                h = n(786475),
                p = n(392237),
                g = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: a.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: a.createElement(s.ZP, null) } },
                y = (0, o.Z)(b).reduce((e, [t, n]) => e.set(t, n), l.DefaultDraftBlockRenderMap);
            let k = !1;
            const D = a.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: o, paragraphFontSizeOverride: s } = e;
                    a.useEffect(() => {
                        k || (u.fH(g.c, g.n), (k = !0));
                    }, []);
                    const p = [(0, f.ez)(o, s), f.aF, f.RU];
                    e.disable_entityLinkDecorator || p.push((0, f.NA)(o, s));
                    const b = m.Z.initEditorState(n, { decorators: p });
                    let D = i.Z;
                    return (
                        t &&
                            (D = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        a.createElement(c.ZP, null, ({ containerWidth: e }) => a.createElement(r.Z, { style: _.fontFamily }, a.createElement(l.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, d.su)(h.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                _ = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            "use strict";
            n.d(t, { $u: () => v, Ak: () => Z, KJ: () => D, LI: () => E, P7: () => g, PW: () => w, QF: () => b, Qm: () => k, Tr: () => $, b$: () => p, db: () => z, et: () => S, fR: () => h, iH: () => F, lD: () => y, su: () => _, u4: () => x, wX: () => I });
            var a = n(202784),
                l = n(111677),
                r = n.n(l),
                o = n(394123),
                i = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const h = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: o.default, key: h.bold, onPress: e(h.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: h.italic, onPress: e(h.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: h.strikethrough, onPress: e(h.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                k = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
                _ = (e, t) => (n) => {
                    const a = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case g.bulleted:
                            return a("longform-unordered-list-item");
                        case g.blockquote:
                            return a("longform-blockquote");
                        case g.header1:
                            return a("longform-header-one");
                        case g.header2:
                            return a("longform-header-two");
                        case g.numbered:
                            return a("longform-ordered-list-item");
                        case g.paragraph:
                            return a("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                S = r().d5a48014,
                w = r().b92b6156,
                v = r().ec5ed598,
                E = ({ children: e, extendedWidth: t, size: n, weight: l }) => a.createElement(f.ZP, { extendedWidth: t, size: n, weight: l }, e),
                $ = { blockType: g.paragraph, label: v, component: E({ size: "body", children: v }) },
                F = [{ blockType: g.header1, label: S, component: E({ size: "title1", extendedWidth: !0, children: S }) }, { blockType: g.header2, label: w, component: E({ size: "title3", weight: "heavy", children: w }) }, $],
                I = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                z = "decrease-text-size";
        },
        989272: (e, t, n) => {
            "use strict";
            n.d(t, { _i: () => l, fH: () => o, w3: () => r });
            n(136728);
            var a = n(392237);
            const l = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                o(
                    (function () {
                        const e = a.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${l.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    o(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const l = e.contentHorizontalPadding;
                            n || (n = a.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${l ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${l};\n          padding-right: ${l};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function o(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const a = document.head;
                    a && a.insertBefore(n, a.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const d = [];
        },
        466818: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => b });
            var a = n(202784),
                l = n(325686),
                r = n(487552),
                o = n(302752),
                i = n(183806),
                s = n(731708),
                d = n(950822),
                c = n(224162),
                u = n(392237);
            const m = a.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                f = (e) => (0, d.Z)("option", e);
            let h = 1;
            class p extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = a.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: a, value: l } = e.target;
                            t && t(l, a - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
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
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: d, helperText: h, options: p, style: b, testID: y, value: k, withEmptyOption: D } = this.props,
                        { isFocused: _ } = this.state,
                        S = s.ZP.getLanguage(),
                        w = void 0 === d ? !!n : d,
                        v = new Set();
                    n && v.add(this._errorID), e && v.add(e), h && v.add(this._helperID);
                    const E = v.size ? [...v].join(" ") : void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const s = "ja" === S ? u.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(S) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return a.createElement(
                                l.Z,
                                { style: [i.Z.border, g.container, t && i.Z.disabled, _ && i.Z.focusedBorderValid, w && i.Z.invalidBorderColor, _ && w && i.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                a.createElement(
                                    m,
                                    { "aria-describedby": E, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: s }, t && i.Z.disabled], testID: y || "", value: k },
                                    D ? a.createElement(f, { disabled: !0, style: g.option, value: "" }) : null,
                                    p.map((e) => {
                                        const { disabled: t, label: n, value: l } = e;
                                        return a.createElement(f, { disabled: t, key: `${n}-${l}`, style: g.option, value: l }, n);
                                    }),
                                ),
                                a.createElement(r.default, { style: [g.dropdownCaret, _ && i.Z.validColor, !(!d && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        h ? this._renderHelperText() : null,
                        w && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: l } = this.state;
                    return a.createElement(s.ZP, { color: t || e ? "red500" : l ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, n);
                }
                _renderHelperText() {
                    return a.createElement(l.Z, { "aria-live": "polite" }, a.createElement(s.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return a.createElement(l.Z, { "aria-live": "polite" }, a.createElement(s.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            p.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = p;
        },
        183806: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        89085: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        262009: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                l = n(890601),
                r = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var a = n(936386),
                l = n.n(a);
            const r = (e, t, n) => l()(e, t, n);
        },
        936386: (e) => {
            function t(e, t, n) {
                var a, l, r, o, i;
                function s() {
                    var d = Date.now() - o;
                    d < t && d >= 0 ? (a = setTimeout(s, t - d)) : ((a = null), n || ((i = e.apply(r, l)), (r = l = null)));
                }
                null == t && (t = 100);
                var d = function () {
                    (r = this), (l = arguments), (o = Date.now());
                    var d = n && !a;
                    return a || (a = setTimeout(s, t)), d && ((i = e.apply(r, l)), (r = l = null)), i;
                };
                return (
                    (d.clear = function () {
                        a && (clearTimeout(a), (a = null));
                    }),
                    (d.flush = function () {
                        a && ((i = e.apply(r, l)), (r = l = null), clearTimeout(a), (a = null));
                    }),
                    d
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.891de0aa.js.map
