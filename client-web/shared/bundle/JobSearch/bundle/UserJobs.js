"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.JobSearch~bundle.UserJobs"],
    {
        229333: (e, n, a) => {
            a.d(n, { Z: () => u });
            var o = a(202784),
                t = a(466999),
                r = a(325686),
                l = a(392237),
                d = a(674132);
            const i = a.n(d)().e5b0063d;
            let c = 0;
            class s extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: n } = this.props,
                        a = i({ title: n });
                    return o.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(t.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, n), o.createElement(r.Z, { "aria-label": a }, e));
                }
            }
            const u = s;
        },
        949626: (e, n, a) => {
            a.d(n, { Z: () => t });
            a(202784);
            var o = a(950822);
            const t = (e) => (0, o.Z)("div", e);
        },
        414939: (e, n, a) => {
            a.d(n, { Z: () => i });
            var o = a(202784),
                t = a(325686),
                r = a(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(t.Z, { style: d.root });
                }
            }
            const d = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = l;
        },
        856438: (e, n, a) => {
            a.d(n, { Z: () => b });
            var o = a(202784),
                t = a(868634),
                r = a(731708),
                l = a(392237),
                d = a(674132),
                i = a.n(d),
                c = a(262009);
            const s = i().a71d7584,
                u = l.default.create((e) => ({ label: { alignSelf: "auto" }, featuredLabel: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, featuredIcon: { height: e.spaces.space12 } })),
                b = () => o.createElement(t.ZP, { style: u.label, type: "priority" }, o.createElement(r.ZP, { style: u.featuredLabel }, o.createElement(c.default, { style: u.featuredIcon }), s));
        },
        324948: (e, n, a) => {
            a.d(n, { Z: () => l });
            var o = a(202784),
                t = a(691533);
            const r = (0, a(523561).Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.24"),
                            a.e("icons.2"),
                            a.e("icons.10"),
                            a.e("icons.15"),
                            a.e("icons.27"),
                            a.e("icons.12"),
                            a.e("icons.16"),
                            a.e("icons.7"),
                            a.e("icons.5"),
                            a.e("icons.29"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.22"),
                            a.e("icons.4"),
                            a.e("icons.19"),
                            a.e("icons.17"),
                            a.e("icons.14"),
                            a.e("icons.26"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                            a.e("loader.WideLayout"),
                        ]).then(a.bind(a, 527969)),
                }),
                l = (e) => o.createElement(t.Z, { hideOnError: !0 }, o.createElement(r, e));
        },
        965245: (e, n, a) => {
            a.d(n, { Z: () => i });
            var o = a(807896),
                t = a(202784),
                r = a(229333),
                l = a(414939),
                d = a(334346);
            const i = ({ accessibilityTitle: e, footer: n = t.createElement(l.Z, null), ...a }) => {
                const i = t.createElement(d.C, (0, o.Z)({}, a, { footer: n }));
                return e ? t.createElement(r.Z, { title: e }, i) : i;
            };
        },
        652904: (e, n, a) => {
            a.d(n, { Z: () => s });
            var o = a(202784),
                t = a(500002),
                r = a(668214),
                l = a(997174),
                d = a(118823);
            const i = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: n },
                            location: { pathname: a, search: o },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: r, search: l },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    n.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && n.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const c = t || d;
                    ((c && t !== d) || (!c && a !== r) || o !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: n, updateLocation: a, updateTweetDetailNav: o } = e;
                    n.scribePageImpression(), a(n.contextualScribeNamespace, n.contextualScribeData), o(n.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const s = (0, t.ZP)(i(c));
        },
        478414: (e, n, a) => {
            a.d(n, { Hx: () => i, K: () => r, bb: () => d, gv: () => l, kg: () => c, yW: () => s });
            var o = a(779802),
                t = a(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                l = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                d = ({ h1FontSize: e, h2FontSize: n, paragraphFontSize: a }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: n, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: a, children: o.$u }) },
                ],
                i = "extended-profile",
                c = "extended-profile-mobile-webview",
                s = (e, { h1FontSize: n, h2FontSize: a, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[n]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${t.default.theme.fontFamilies.chirpExtended};\n        font-size: ${t.default.theme.fontSizes[n]};\n        line-height: ${t.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${t.default.theme.fontSizes[a]};\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${t.default.theme.fontSizes[a]} + 1px);\n        font-weight: ${t.default.theme.fontWeights.bold};\n        line-height: ${t.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: calc(${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${t.default.theme.fontSizes[o]};\n        line-height: ${t.default.theme.lineHeights.headline1};\n        margin-bottom: ${t.default.theme.spaces.space2};\n        margin-left: ${t.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${t.default.theme.spaces.space2});\n        padding-left: calc(${t.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${t.default.theme.colors.gray900};\n        border-radius: ${t.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${t.default.theme.spaces.space20} + ${t.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${t.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        985124: (e, n, a) => {
            a.d(n, { $J: () => d, WA: () => C, ZC: () => k, cj: () => R, eo: () => o.eo, hb: () => j, kW: () => i, pg: () => $, rP: () => l, u4: () => W, xk: () => _ });
            var o = a(89217),
                t = a(674132),
                r = a.n(t);
            const l = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                d = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                i = Object.entries(o.eo).map(([e, n]) => ({ label: String(n), value: e })),
                c = r().d2b8da2c,
                s = r().cd958040,
                u = r().c5760ca2,
                b = r().d31b4a2a,
                h = r().df1b7550,
                f = r().f38959a6,
                m = r().bc78a26c,
                p = r().ec28738e,
                D = r().icb06308,
                g = r().d0b978ec,
                S = r().af19cdc2,
                y = r().e4a51fca,
                w = r().e8ca78ae,
                A = r().c365dcc6,
                k = Object.freeze({ software_engineering: c, data_analytics: s, product: u, design: b, marketing: h, sales_am: f, operations: m, people_hr: p, finance_accounting: D, legal_compliance: g, science_engineering: S, medical: y, construction_trades: w, other: A }),
                $ = Object.entries(k).map(([e, n]) => ({ label: String(n), value: e })),
                v = r().e25d75e4,
                M = r().e89b3f04,
                P = r().h55825dc,
                I = r().cc537386,
                z = r().jfc3cece,
                x = r().e1b683aa,
                E = r().c4627fda,
                B = r().db75b47c,
                C = Object.freeze({ intern: v, entry_level: M, junior: P, mid_level: I, senior: z, lead: x, manager: E, executive: B }),
                _ = Object.entries(C).map(([e, n]) => ({ label: String(n), value: e })),
                Z = r().i312f0ce,
                T = r().b4aff05e,
                F = r().c08b9138,
                L = r().ia5d6422,
                q = r().h97c7f42,
                H = r().ibed2d04,
                R = Object.freeze({ onsite: { label: Z, description: L, value: "onsite" }, remote: { label: F, description: H, value: "remote" }, hybrid: { label: T, description: q, value: "hybrid" } }),
                W = Object.keys(R).map((e) => ({ label: R[e].label, value: e, description: R[e].description })),
                j = Object.keys(o.Qw).map((e) => ({ ...o.Qw[e], value: String(o.Qw[e].value) }));
        },
        943052: (e, n, a) => {
            a.d(n, { Z: () => r });
            a(543673), a(240753), a(128399), a(136728);
            var o = a(202784),
                t = a(107267);
            const r = () => {
                const e = (0, t.useLocation)(),
                    n = (0, t.useHistory)(),
                    [a, r] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const l = o.useCallback(
                        (o, t) => {
                            const r = new URLSearchParams(a);
                            r.set(o, t), n.push(`${e.pathname}?${r.toString()}`);
                        },
                        [n, e.pathname, a],
                    ),
                    d = o.useCallback(
                        (o) => {
                            const t = new URLSearchParams(a);
                            for (const e in o) o[e] ? t.set(e, o[e]) : t.delete(e);
                            n.push(`${e.pathname}?${t.toString()}`);
                        },
                        [n, e.pathname, a],
                    );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), l, d];
            };
        },
        127218: (e, n, a) => {
            a.d(n, { C: () => D });
            var o = a(202784),
                t = a(614983),
                r = a.n(t),
                l = a(437429),
                d = a.n(l),
                i = a(57074),
                c = a.n(i),
                s = a(10622),
                u = a.n(s),
                b = a(585488),
                h = a(71620),
                f = a(163889),
                m = a(312771),
                p = a(535338);
            function D(e, n, a) {
                const [t, l] = o.useState(!1),
                    [i, s] = o.useState(null),
                    D = d()(),
                    g = c()(n),
                    S = (0, h.po)(),
                    y = (0, p.p)(e, g, a);
                return o.useMemo(() => {
                    const n = (0, b.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!n, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: a, previous_cursor: o } =
                            (function (e, n) {
                                try {
                                    r()("slice_info" === n[n.length - 1], "Invalid sliceInfoPath!");
                                    let a = e;
                                    for (const e of n) r()(!!a, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (a = a?.[e]);
                                    return a;
                                } catch (e) {
                                    return void (0, f.ZP)(e.message);
                                }
                            })(y, n) || {},
                        d = (n) => {
                            t ||
                                (l(!0),
                                u()(D, e, { ...g, cursor: n }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), s(e), S(e);
                                    },
                                }));
                        },
                        c = () => {
                            a && d(a);
                        },
                        h = () => {
                            o && d(o);
                        },
                        p = () => {
                            d(void 0);
                        };
                    return i ? { subsequentFetchStatus: m.ZP.FAILED, error: i, fetchNext: c, fetchPrevious: h, refetch: p, data: y, hasNext: Boolean(a), hasPrevious: Boolean(o) } : { subsequentFetchStatus: t ? m.ZP.LOADING : m.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: h, refetch: p, data: y, hasNext: Boolean(a), hasPrevious: Boolean(o) };
                }, [e, y, t, i, D, g, S]);
            }
        },
        28135: (e, n, a) => {
            a.d(n, { Z: () => I });
            a(136728);
            var o = a(202784),
                t = a(576648),
                r = a(107267),
                l = a(811176),
                d = a(40644),
                i = a(674132),
                c = a.n(i),
                s = a(630715),
                u = a(717160),
                b = a(885724),
                h = a(106186),
                f = a(786272),
                m = a(443781),
                p = a(952793),
                D = a(782642);
            const g = (e) => `/i/jobs/${e}`;
            var S = a(701796);
            const y = c().f508c49c,
                w = c().f88553c8,
                A = c().d6825dce,
                k = c().b9613442,
                $ = c().c2b3f0da,
                v = c().c791d3fc,
                M = { label: c().ifea3114, withDelay: !0 },
                P = ({ iconSize: e = "normal", jobId: n, jobUserId: a }) => {
                    const i = (0, D.p)(),
                        c = (0, r.useHistory)(),
                        { userClaims: P, viewerUserId: I } = (0, m.QZ)(),
                        z = (0, p.hC)("recruiting_jobs_list_share_enabled"),
                        x = (0, p.hC)("recruiting_pin_job_enabled") && (P.isTrueAndEnabled("subscriptions_feature_premium_jobs") || P.isVerifiedOrg()) && I !== a,
                        E = o.useCallback(() => {
                            c.push({ query: { text: (0, S.w)(g(n)) }, pathname: "/messages/compose" });
                        }, [c, n]),
                        B = o.useCallback(() => {
                            t.Z.setString((0, S.w)(g(n))), i({ text: w });
                        }, [i, n]),
                        C = o.useCallback(() => {
                            c.push({ query: { text: (0, S.w)(g(n)) }, pathname: "/compose/post" });
                        }, [c, n]),
                        _ = o.useCallback(() => {
                            c.push({ query: { jid: n }, pathname: "/i/share-job", state: { from: c.location.pathname } });
                        }, [c, n]),
                        Z = o.useCallback(() => {
                            const e = [];
                            return t.Z.isAvailable() && e.push({ text: y, onClick: B, Icon: s.default }), I && (e.push(((e) => ({ text: A, onClick: e, Icon: u.default }))(E)), e.push(((e) => ({ text: k, onClick: e, Icon: b.default }))(C))), x && e.push(((e) => ({ text: $, onClick: e, Icon: h.default }))(_)), e;
                        }, [B, E, _, C, x, I]),
                        T = o.useCallback(
                            (e) => {
                                const n = Z();
                                return n.length ? o.createElement(l.Z, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 }) : null;
                            },
                            [Z],
                        ),
                        F = o.useCallback(() => {}, []);
                    return z ? o.createElement(d.ZP, { Icon: f.default, "aria-label": v, color: "text", hoverLabel: M, iconSize: e, onPress: F, renderMenu: T, testID: "job-share-action-btn" }) : null;
                },
                I = o.memo(P);
        },
        135904: (e, n, a) => {
            a.d(n, { c: () => r, n: () => t });
            var o = a(392237);
            const t = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, n, a) => {
            a.d(n, { Z: () => y });
            a(136728);
            var o = a(202784),
                t = a(301503),
                r = a(325686),
                l = a(595088),
                d = a(516951),
                i = a(731708),
                c = a(779802),
                s = a(537392),
                u = a(989272),
                b = a(925873),
                h = a(202253),
                f = a(786475),
                m = a(392237),
                p = a(135904);
            const D = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(i.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(i.ZP, null) } },
                g = (0, l.Z)(D).reduce((e, [n, a]) => e.set(n, a), t.DefaultDraftBlockRenderMap);
            let S = !1;
            const y = o.memo(function (e) {
                    const { componentByType: n, contentState: a, onScribeEvent: l, paragraphFontSizeOverride: i } = e;
                    o.useEffect(() => {
                        S || (u.fH(p.c, p.n), (S = !0));
                    }, []);
                    const m = [(0, h.ez)(l, i), h.aF, h.RU];
                    e.disable_entityLinkDecorator || m.push((0, h.NA)(l, i));
                    const D = b.Z.initEditorState(a, { decorators: m });
                    let y = d.Z;
                    return (
                        n &&
                            (y = (e) => {
                                const a = e.getType();
                                return n[a] || null;
                            }),
                        o.createElement(s.ZP, null, ({ containerWidth: e }) => o.createElement(r.Z, { style: w.fontFamily }, o.createElement(t.Editor, { blockRenderMap: g, blockRendererFn: y, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: D, onChange: d.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                w = m.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, n, a) => {
            a.d(n, { $u: () => $, Ak: () => z, KJ: () => y, LI: () => v, P7: () => p, PW: () => k, QF: () => D, Qm: () => S, Tr: () => M, b$: () => m, db: () => E, et: () => A, fR: () => f, iH: () => P, lD: () => g, su: () => w, u4: () => x, wX: () => I });
            var o = a(202784),
                t = a(674132),
                r = a.n(t),
                l = a(394123),
                d = a(856661),
                i = a(69893),
                c = a(474761),
                s = a(428259),
                u = a(89085),
                b = a(630715),
                h = a(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                m = (e) => [
                    { buttonTestId: "btn-bold", Icon: l.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: d.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: i.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                p = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                D = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: p.blockquote, onPress: e(p.blockquote) }],
                g = (e) => [
                    { buttonTestId: "btn-ul", Icon: s.default, key: p.bulleted, onPress: e(p.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: p.numbered, onPress: e(p.numbered) },
                ],
                S = "LINK",
                y = (e) => [{ buttonTestId: "btn-link", Icon: b.default, key: S, onPress: e }],
                w = (e, n) => (a) => {
                    const o = (n) => (e ? `${n}-narrow` : n);
                    switch (a.getType()) {
                        case p.bulleted:
                            return o("longform-unordered-list-item");
                        case p.blockquote:
                            return o("longform-blockquote");
                        case p.header1:
                            return o("longform-header-one");
                        case p.header2:
                            return o("longform-header-two");
                        case p.numbered:
                            return o("longform-ordered-list-item");
                        case p.paragraph:
                            return o("longform-unstyled");
                        default:
                            return n?.(a) || "";
                    }
                },
                A = r().d5a48014,
                k = r().b92b6156,
                $ = r().ec5ed598,
                v = ({ children: e, extendedWidth: n, size: a, weight: t }) => o.createElement(h.ZP, { extendedWidth: n, size: a, weight: t }, e),
                M = { blockType: p.paragraph, label: $, component: v({ size: "body", children: $ }) },
                P = [{ blockType: p.header1, label: A, component: v({ size: "title1", extendedWidth: !0, children: A }) }, { blockType: p.header2, label: k, component: v({ size: "title3", weight: "heavy", children: k }) }, M],
                I = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                z = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                E = "decrease-text-size";
        },
        989272: (e, n, a) => {
            a.d(n, { _i: () => t, fH: () => l, w3: () => r });
            a(136728);
            var o = a(392237);
            const t = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                l(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${t.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${t.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${t.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    d,
                );
                const n = i(e);
                return (
                    l(
                        (function (e) {
                            const n = i(e);
                            let a = e.placeholderTextColor;
                            const t = e.contentHorizontalPadding;
                            a || (a = o.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${a};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${a};\n    }\n\n    ${t ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${t};\n          padding-right: ${t};\n        }\n      ` : ""}\n  `;
                        })(e),
                        n,
                    ),
                    n
                );
            }
            function l(e, n) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(n)
                ) {
                    const a = document.createElement("style");
                    a.setAttribute("id", n), (a.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(a, o.firstChild);
                }
            }
            const d = "draftjs-styles";
            function i(e) {
                const n = (function (e) {
                    for (let n = 0; n < c.length; n++) {
                        if (c[n] === e) return String(n);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${d}_${n}`;
            }
            const c = [];
        },
        183806: (e, n, a) => {
            a.d(n, { Z: () => o });
            const o = a(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.JobSearch~bundle.UserJobs.4924e6ca.js.map
