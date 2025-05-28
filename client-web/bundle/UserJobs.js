"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserJobs", "icons/IconChevronDown-js"],
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
                        l.e("icons.23"),
                        l.e("icons.0"),
                        l.e("icons.2"),
                        l.e("icons.16"),
                        l.e("icons.19"),
                        l.e("icons.10"),
                        l.e("icons.13"),
                        l.e("icons.24"),
                        l.e("icons.7"),
                        l.e("icons.22"),
                        l.e("icons.27"),
                        l.e("icons.17"),
                        l.e("modules.common-e907d115"),
                        l.e("modules.common-e019dbda"),
                        l.e("icons.21"),
                        l.e("icons.18"),
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
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        l.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        l.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                        l.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        l.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        l.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        l.e("loader.WideLayout"),
                    ]).then(l.bind(l, 527969)),
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
            l.d(a, { $J: () => s, WA: () => $, ZC: () => w, cj: () => B, eo: () => n.eo, hb: () => U, kW: () => i, pg: () => v, rP: () => o, u4: () => N, xk: () => z });
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
                h = t().df1b7550,
                p = t().f38959a6,
                b = t().bc78a26c,
                g = t().ec28738e,
                f = t().icb06308,
                y = t().d0b978ec,
                k = t().af19cdc2,
                _ = t().e4a51fca,
                D = t().e8ca78ae,
                S = t().c365dcc6,
                w = Object.freeze({ software_engineering: d, data_analytics: c, product: u, design: m, marketing: h, sales_am: p, operations: b, people_hr: g, finance_accounting: f, legal_compliance: y, science_engineering: k, medical: _, construction_trades: D, other: S }),
                v = Object.entries(w).map(([e, a]) => ({ label: String(a), value: e })),
                F = t().e25d75e4,
                C = t().e89b3f04,
                M = t().h55825dc,
                I = t().cc537386,
                E = t().jfc3cece,
                Z = t().e1b683aa,
                x = t().c4627fda,
                P = t().db75b47c,
                $ = Object.freeze({ intern: F, entry_level: C, junior: M, mid_level: I, senior: E, lead: Z, manager: x, executive: P }),
                z = Object.entries($).map(([e, a]) => ({ label: String(a), value: e })),
                T = t().i312f0ce,
                A = t().b4aff05e,
                K = t().c08b9138,
                L = t().ia5d6422,
                R = t().h97c7f42,
                j = t().ibed2d04,
                B = Object.freeze({ onsite: { label: T, description: L, value: "onsite" }, remote: { label: K, description: j, value: "remote" }, hybrid: { label: A, description: R, value: "hybrid" } }),
                N = Object.keys(B).map((e) => ({ label: B[e].label, value: e, description: B[e].description })),
                U = Object.keys(n.Qw).map((e) => ({ ...n.Qw[e], value: String(n.Qw[e].value) }));
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
                o = ({ isOwnProfile: e, isSoftBlockEnabled: a = !1, user: l }) => {
                    const n = l.blocked_by,
                        r = l.protected && !l.following;
                    return a ? e || !r : e || (!r && !n);
                };
        },
        127218: (e, a, l) => {
            l.d(a, { C: () => f });
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
                h = l(71620),
                p = l(163889),
                b = l(312771),
                g = l(535338);
            function f(e, a, l) {
                const [r, o] = n.useState(!1),
                    [i, c] = n.useState(null),
                    f = s()(),
                    y = d()(a),
                    k = (0, h.po)(),
                    _ = (0, g.p)(e, y, l);
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
                                    return void (0, p.ZP)(e.message);
                                }
                            })(_, a) || {},
                        s = (a) => {
                            r ||
                                (o(!0),
                                u()(f, e, { ...y, cursor: a }).subscribe({
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
                        h = () => {
                            n && s(n);
                        },
                        g = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: b.ZP.FAILED, error: i, fetchNext: d, fetchPrevious: h, refetch: g, data: _, hasNext: Boolean(l), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: h, refetch: g, data: _, hasNext: Boolean(l), hasPrevious: Boolean(n) };
                }, [e, _, r, i, f, y, k]);
            }
        },
        499102: (e, a, l) => {
            l.d(a, { Z: () => I });
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
                h = l(106186),
                p = l(786272),
                b = l(443781),
                g = l(952793),
                f = l(782642),
                y = l(226298),
                k = l(701796);
            const _ = d().f508c49c,
                D = d().f88553c8,
                S = d().d6825dce,
                w = d().b9613442,
                v = d().c2b3f0da,
                F = d().c791d3fc,
                C = { label: d().ifea3114, withDelay: !0 },
                M = ({ iconSize: e = "normal", jobId: a, jobUserId: l }) => {
                    const i = (0, f.p)(),
                        d = (0, t.useHistory)(),
                        { userClaims: M, viewerUserId: I } = (0, b.QZ)(),
                        E = (0, g.hC)("recruiting_jobs_list_share_enabled"),
                        Z = (0, g.hC)("recruiting_pin_job_enabled") && (M.isTrueAndEnabled("subscriptions_feature_premium_jobs") || M.isVerifiedOrg()) && I !== l,
                        x = n.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(a)) }, pathname: "/messages/compose" });
                        }, [d, a]),
                        P = n.useCallback(() => {
                            r.Z.setString((0, k.w)((0, y.z)(a))), i({ text: D });
                        }, [i, a]),
                        $ = n.useCallback(() => {
                            d.push({ query: { text: (0, k.w)((0, y.z)(a)) }, pathname: "/compose/post" });
                        }, [d, a]),
                        z = n.useCallback(() => {
                            d.push({ query: { jid: a }, pathname: "/i/share-job", state: { from: d.location.pathname } });
                        }, [d, a]),
                        T = n.useCallback(() => {
                            const e = [];
                            return r.Z.isAvailable() && e.push({ text: _, onClick: P, Icon: c.default }), I && (e.push(((e) => ({ text: S, onClick: e, Icon: u.default }))(x)), e.push(((e) => ({ text: w, onClick: e, Icon: m.default }))($))), Z && e.push(((e) => ({ text: v, onClick: e, Icon: h.default }))(z)), e;
                        }, [P, x, z, $, Z, I]),
                        A = n.useCallback(
                            (e) => {
                                const a = T();
                                return a.length ? n.createElement(o.Z, { items: a, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [T],
                        ),
                        K = n.useCallback(() => {}, []);
                    return E ? n.createElement(s.ZP, { Icon: p.default, "aria-label": F, color: "text", hoverLabel: C, iconSize: e, onPress: K, renderMenu: A, testID: "job-share-action-btn" }) : null;
                },
                I = n.memo(M);
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
                        [h, p] = n.useState(c.get("q") || ""),
                        b = (0, r.useHistory)(),
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
                    const f = n.useCallback(() => {
                            p(""), b.replace(e);
                        }, [e, b]),
                        y = n.useMemo(
                            () =>
                                (0, s.Z)((e) => {
                                    g.current && (e.length > 0 ? (l ? m({ q: e, p: "1" }) : u("q", e)) : f());
                                }, 1e3),
                            [f, u, m, l],
                        ),
                        k = n.useCallback(
                            (e) => {
                                const { value: a } = e.target;
                                p(a), y(a);
                            },
                            [y],
                        );
                    return n.createElement(t.Z, { Icon: o.default, autoComplete: "off", isCompact: a, leftAligned: !0, onChange: k, onClear: f, placeholder: "Search jobs", styleType: d || "pill", testID: "search-jobs-input", value: h, withClearButton: !0 });
                },
                c = n.memo(d);
        },
        736181: (e, a, l) => {
            l.r(a), l.d(a, { default: () => qe });
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
                h = l(252021),
                p = l(443781),
                b = l(952793),
                g = l(835546),
                f = l(615027),
                y = l(771035),
                k = l(668214),
                _ = l(919022);
            const D = (e, a) => a.match.params.screenName || void 0,
                S = (e, a) => {
                    const l = D(0, a);
                    if (l) return _.ZP.selectByScreenName(e, l);
                },
                w = (0, k.Z)()
                    .propsFromState(() => ({ screenName: D, user: S }))
                    .propsFromActions(() => ({ fetchOneUserByScreenNameIfNeeded: _.ZP.fetchOneByScreenNameIfNeeded }));
            var v,
                F,
                C,
                M,
                I,
                E,
                Z,
                x,
                P,
                $,
                z,
                T,
                A,
                K,
                L = l(807896),
                R = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "count" }), (F = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (C = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (M = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                                                (E = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (Z = { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null }),
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
                                                                (x = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                        ($ = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
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
                                                (T = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        argumentDefinitions: [M, v, F, C],
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
                                            E,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    Z,
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
                                                    x,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiRecruitingOrganizationResults",
                                                        kind: "LinkedField",
                                                        name: "recruiting_organization_results",
                                                        plural: !1,
                                                        selections: [
                                                            x,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    E,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: (A = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, P]),
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
                                                                                            x,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    E,
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
                                                                                    $,
                                                                                    z,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: A, filters: ["search_params"], handle: "slice", key: "UserJobListQueryScreen_consumer_job_search_slice", kind: "LinkedHandle", name: "consumer_job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
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
                                            T,
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
            const j = R;
            l(585488);
            var B = l(38293),
                N = l(652904),
                U = l(736063),
                O = l(943052),
                H = l(293115),
                J = l(127218),
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
            const W = q;
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
                he = l(856438),
                pe = l(910113),
                be = l(478414),
                ge = l(499102);
            const fe = ({ fallbackName: e, user: a }) => {
                    const l = Q()(pe.fR, a);
                    return l && l.core && l.core.name && l.core.screen_name ? n.createElement(re.Z, { avatarSize: "small", isVerified: l.verification?.verified ?? !1, name: l.core.name, nameSize: "subtext2", screenName: l.core.screen_name, screenNameSize: "subtext2", verifiedType: l.verification?.verified_type ?? void 0, weight: "normal" }) : e ? n.createElement(s.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                ye = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext2" },
                ke = "user-job-list-item-short-description",
                _e = d.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, itemRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, shortDescription: { color: e.colors.text }, timestamp: { fontSize: e.fontSizes.subtext3 }, lastRow: { marginTop: e.spaces.space4 } })),
                De = ({ allowShare: e = !1, companyName: a, createdAt: l, formattedSalary: t, isFeatured: o, isVerifiedOrg: i, jobId: d, jobTitle: c, location: u, onClick: m, profileId: h, redirectUrl: p, salaryInterval: b, shortDescription: g, user: f, withUserInfo: y = !1 }) => {
                    (0, ue.q)(() => {
                        (0, te.fH)((0, be.yW)(ke, ye), ke);
                    });
                    const k = n.useMemo(() => ({ label: c }), [c]),
                        _ = n.useMemo(() => oe.Z.getContentStateFromRaw(g), [g]),
                        D = n.useMemo(() => _ && (0, ne.convertFromRaw)(_).hasText(), [_]),
                        S = n.useMemo(() => `/i/jobs/${d}`, [d]);
                    return n.createElement(se.Z, { interactive: !0, link: i ? { pathname: S, external: !0 } : p || "", onClick: m, style: _e.listContainer }, n.createElement(r.Z, { style: _e.items }, n.createElement(s.ZP, { hoverLabel: k, numberOfLines: 2, size: "subtext1", weight: "bold" }, c), y ? n.createElement(fe, { fallbackName: a, user: f }) : null, n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, u), t ? n.createElement(s.ZP, { color: "text", size: "subtext2", weight: "normal" }, (0, ie.M)(t, b)) : null, _ && D ? n.createElement(r.Z, { style: _e.shortDescription }, n.createElement(me.Z, { className: ke }, n.createElement(de.Z, { contentState: _, paragraphFontSizeOverride: ye.paragraphFontSize }))) : null), n.createElement(r.Z, { style: _e.lastRow }, n.createElement(r.Z, { style: _e.itemRow }, n.createElement(r.Z, { style: _e.itemRow }, l ? n.createElement(ce.Z, { cutoff: "years", humanReadable: !0, style: _e.timestamp, timestamp: l }) : null, o ? n.createElement(he.Z, null) : null), e ? n.createElement(ge.Z, { iconSize: "small", jobId: d, jobUserId: h }) : null)));
                },
                Se = le,
                we = ({ isViewerFollowsUser: e, item: a, jobId: l, jobIndex: r, profileId: t, user: o }) => {
                    const s = (0, G.z)(),
                        i = Q()(Se, a),
                        d = n.useCallback(() => {
                            s.scribe({ action: "click", component: "job_list_item", element: "job", data: { profile_id: t, items: [{ id: l, position: r, is_viewer_follows_user: e }] } });
                        }, [s, e, l, r, t]),
                        c = Boolean(o?.is_verified_organization);
                    return i && i.title && i.location ? n.createElement(De, { allowShare: c, createdAt: i.created_at, formattedSalary: i.formatted_salary, isFeatured: Boolean(i.featured), isVerifiedOrg: o?.is_verified_organization, jobId: l, jobTitle: i.title, location: i.location, onClick: d, profileId: t, redirectUrl: i.redirect_url || "", salaryInterval: i.salary_interval, salaryMax: i.salary_max, salaryMin: i.salary_min, shortDescription: i.short_description, user: o }) : null;
                },
                ve = n.memo(we),
                Fe = W,
                Ce = (e) => e.rest_id,
                Me = ({ fetchNext: e, isViewerFollowsUser: a, profileId: l, slice: r, user: o }) => {
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
                    return i ? (i.length ? n.createElement(Y.Z, { cacheKey: "userJobList", footer: null, identityFunction: Ce, items: i, onItemsRendered: m, onNearEnd: e, renderer: d }) : n.createElement(t.Z, { header: "No jobs" })) : null;
                },
                Ie = n.memo(Me),
                Ee = { page: "jobs_list", section: "all" },
                Ze = (e = "") => (e ? `Jobs created by ${e}` : "Jobs"),
                xe = j,
                Pe = (e) => {
                    const { query: a, screenName: l, user: r } = e,
                        t = n.useMemo(() => {
                            const e = a?.keyword ? { keyword: a.keyword } : null;
                            return { userId: r.id_str, count: 50, cursor: null, searchParams: e };
                        }, [a, r.id_str]),
                        { data: o, fetchNext: s } = (0, J.C)(xe, t),
                        i = o?.data?.result?.recruiting_organization_results?.result?.consumer_job_search;
                    return i ? n.createElement(H.nO, { namespace: Ee }, n.createElement(N.Z, null, n.createElement(n.Fragment, null, n.createElement(B.Z, { title: Ze(l) }), n.createElement(Ie, { fetchNext: s, isViewerFollowsUser: r.following, profileId: r.id_str, slice: i, user: o.data.result })))) : null;
                },
                $e = { context: "UserJobs" },
                ze = (e) => {
                    const [a] = (0, O.Z)(),
                        l = n.useMemo(() => ({ keyword: a.get("q") }), [a]);
                    return n.createElement(U.H, { errorConfig: $e }, n.createElement(Pe, (0, L.Z)({}, e, { query: l })));
                },
                Te = n.memo(ze);
            var Ae = l(138099),
                Ke = l(154003),
                Le = l(466818),
                Re = l(985124);
            const je = () => {
                    const [e, a] = (0, O.Z)(),
                        l = n.useCallback(
                            (e, l) => {
                                a("t", e);
                            },
                            [a],
                        ),
                        r = n.useMemo(() => e.get("t") ?? "", [e]);
                    return n.createElement(Le.ZP, { label: "Job category", onChange: l, options: Re.pg, testID: "select-team", value: r, withEmptyOption: !0 });
                },
                Be = ({ onDismiss: e, screenName: a }) => n.createElement(Ae.Z, { onMaskClick: e, style: Ne.modalContainer, type: "full", withMask: !0 }, n.createElement(r.Z, { style: Ne.modalContent }, n.createElement(s.ZP, null, "Search jobs")), n.createElement(y.Z, { basePath: `/${a}/jobs` }), n.createElement(je, null), n.createElement(Ke.ZP, { onClick: e, type: "brandFilled" }, "Done")),
                Ne = d.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginTop: e.spaces.space16 }, actions: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconActions: { display: "flex", flexDirection: "row" }, modalContainer: { display: "flex", gap: e.spaces.space32, padding: e.spacesPx.space32 }, modalContent: { display: "flex", gap: e.spaces.space16 }, modalActionsContainer: {} })),
                Ue = n.memo(Be),
                Oe = u().b007440a,
                He = u().c5fb5a1a,
                Je = d.default.create((e) => ({ rightControlContainer: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, searchContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space4, width: "100%" }, titleContent: { flexDirection: "row" }, sidebarRoot: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 } })),
                qe = w((e) => {
                    const [a, l] = n.useState(!1),
                        { fetchOneUserByScreenNameIfNeeded: d, history: c, screenName: u, user: k } = e,
                        { viewerUserId: _ } = n.useContext(p.rC),
                        D = (0, b.hC)("recruiting_jobs_list_search_enabled"),
                        S = (0, b.hC)("recruiting_job_recommendations_enabled"),
                        w = (0, b.hC)("xprofile_blocked_by_view_enabled");
                    n.useEffect(() => {
                        u && d(u);
                    }, [d, u]);
                    const v = k?.id_str === _,
                        F = !k || (k && (0, g.n5)({ isOwnProfile: v, isSoftBlockEnabled: w, user: k })),
                        C = n.useCallback(() => {
                            l(!1);
                        }, []);
                    if (u) {
                        const e = () => {
                            const e = "Business" === k?.verified_type || "Square" === k?.profile_image_shape ? "square" : "circle";
                            return n.createElement(r.Z, { style: Je.rightControlContainer }, n.createElement(r.Z, null, k ? n.createElement(o.default, { screenName: u, shape: e, size: "large", uri: k.profile_image_url_https }) : n.createElement(o.default, { shape: "square", size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" })), n.createElement(r.Z, null, n.createElement(s.ZP, { size: "body", weight: "bold" }, Oe), n.createElement(i.Z, { screenName: u, size: "subtext1", style: { fontWeight: "normal" } })));
                        };
                        return F ? n.createElement(n.Fragment, null, n.createElement(h.Z, { backLocation: "/", history: c, primaryContent: k ? (!k?.protected || k?.following || v ? n.createElement(n.Fragment, null, D && u ? n.createElement(r.Z, { style: Je.rightControlContainer }, n.createElement(r.Z, { style: Je.searchContainer }, n.createElement(y.Z, { basePath: `/${u}/jobs`, styleType: "selection" }))) : null, n.createElement(Te, { screenName: u, user: k })) : n.createElement(t.Z, { header: He })) : null, primaryContentLabel: Oe, sidebarContent: S ? n.createElement(r.Z, { style: Je.sidebarRoot }, n.createElement(m.Z, { isSidebarModule: !0 })) : null, title: e() }), a ? n.createElement(Ue, { onDismiss: C, screenName: u }) : null) : n.createElement(f.Z, { to: `/${u}` });
                    }
                    return null;
                });
        },
        466818: (e, a, l) => {
            l.d(a, { ZP: () => f });
            var n = l(202784),
                r = l(325686),
                t = l(487552),
                o = l(302752),
                s = l(183806),
                i = l(731708),
                d = l(950822),
                c = l(224162),
                u = l(392237);
            const m = n.forwardRef((e, a) => (0, d.Z)("select", { ...e, ref: a })),
                h = (e) => (0, d.Z)("option", e);
            let p = 1;
            class b extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: a, withEmptyOption: l } = this.props,
                                { selectedIndex: n, value: r } = e.target;
                            a && a(r, n - (l ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: a } = this.props;
                            this.setState({ isFocused: !1 }), a && a();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: a } = this.props;
                            this.setState({ isFocused: !0 }), a && a();
                        }),
                        (this._id = `SELECTOR_${p}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (p += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: a, errorText: l, hasError: d, helperText: p, options: b, style: f, testID: y, value: k, withEmptyOption: _ } = this.props,
                        { isFocused: D } = this.state,
                        S = i.ZP.getLanguage(),
                        w = void 0 === d ? !!l : d,
                        v = new Set();
                    l && v.add(this._errorID), e && v.add(e), p && v.add(this._helperID);
                    const F = v.size ? [...v].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === S ? u.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(S) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return n.createElement(
                                r.Z,
                                { style: [s.Z.border, g.container, a && s.Z.disabled, D && s.Z.focusedBorderValid, w && s.Z.invalidBorderColor, D && w && s.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                n.createElement(
                                    m,
                                    { "aria-describedby": F, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: i }, a && s.Z.disabled], testID: y || "", value: k },
                                    _ ? n.createElement(h, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: a, label: l, value: r } = e;
                                        return n.createElement(h, { disabled: a, key: `${l}-${r}`, style: g.option, value: r }, l);
                                    }),
                                ),
                                n.createElement(t.default, { style: [g.dropdownCaret, D && s.Z.validColor, !(!d && !l) && s.Z.invalidColor] }),
                            );
                        }),
                        p ? this._renderHelperText() : null,
                        w && l ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: l } = this.props,
                        { isFocused: r } = this.state;
                    return n.createElement(i.ZP, { color: a || e ? "red500" : r ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, l);
                }
                _renderHelperText() {
                    return n.createElement(r.Z, { "aria-live": "polite" }, n.createElement(i.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(r.Z, { "aria-live": "polite" }, n.createElement(i.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = b;
        },
        183806: (e, a, l) => {
            l.d(a, { Z: () => n });
            const n = l(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, a, l) => {
            l.r(a), l.d(a, { default: () => i });
            var n = l(202784),
                r = l(890601),
                t = l(783427),
                o = l(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, t.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserJobs.c7f1835a.js.map
