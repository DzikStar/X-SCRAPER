"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-6ac0f1a5"],
    {
        187268: (e, a, n) => {
            n.d(a, { Bv: () => f, Jw: () => D, cU: () => k, eC: () => g, rs: () => p, w$: () => y });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                r = n(392237),
                d = n(956272),
                t = n(520913),
                l = n(913315),
                s = n(355586),
                i = n(14284),
                c = n(492244),
                u = n(397159);
            const h = /<xai:tool_usage_card>\s*(?:<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)*)<\/xai:tool_usage_card>/g,
                b = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                m = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/;
            function p(e) {
                return e.replace(h, (e) => {
                    const a = (function (e) {
                        const { toolArgs: a, toolName: n } = w(e);
                        let o = `<tool_usage_card><tool_name>${n}</tool_name>`;
                        return (o += `<tool_args>${a}</tool_args>`), (o += "</tool_usage_card>"), o;
                    })(e);
                    return a ?? e;
                });
            }
            function f(e) {
                const a = e.match(h);
                if (a) {
                    const { toolArgs: e, toolName: n } = w(a[0]);
                    return D(n, e);
                }
                return null;
            }
            function w(e) {
                let a = "",
                    n = "";
                const o = e.match(b);
                o && (a = o[1]);
                const r = e.match(m);
                return r && (n = r[1].trim()), { toolName: a, toolArgs: n };
            }
            function D(e, a) {
                const n = a.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let o = {};
                if (n)
                    try {
                        o = JSON.parse(n[1]);
                    } catch (e) {
                        o = {};
                    }
                return { name: e, args: o };
            }
            const g = "Using tools";
            function k(e) {
                switch (e.name) {
                    case "web_search":
                        return u.XR.WebSearchQueryFormatter({ query: e.args.query });
                    case "x_search":
                        return u.XR.XSearchQueryFormatter({ query: e.args.query });
                    case "browse_page": {
                        let a = e.args.url || "";
                        try {
                            a = new URL(a).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? u.XR.GenericURLQueryFormatter({ url: a, query: e.args.query }) : u.XR.BrowsePageFormatter({ url: a });
                    }
                    case "get_x_user_timeline":
                        return u.XR.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    default:
                        return e.name ?? g;
                }
            }
            function y(e) {
                const a = { style: { width: r.default.theme.spaces.space16, height: r.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                    case "web_search":
                        return o.createElement(d.default, a);
                    case "x_search":
                    case "get_x_user_timeline":
                        return o.createElement(t.default, a);
                    case "call_finance_api":
                        return o.createElement(l.default, a);
                    case "call_sports_api":
                        return o.createElement(s.default, a);
                    case "browse_page":
                        return o.createElement(i.default, a);
                    default:
                        return o.createElement(c.default, a);
                }
            }
        },
        357606: (e, a, n) => {
            n.r(a), n.d(a, { default: () => te });
            var o = n(807896),
                r = n(202784),
                d = n(325686),
                t = n(107267),
                l = n(523561),
                s = n(292627),
                i = n(365023),
                c = n(461756),
                u = n(292484),
                h = n(528840),
                b = n(293115),
                m = n(125363),
                p = n(456228),
                f = n(551864),
                w = n(537392),
                D = n(78882);
            var g = n(530732),
                k = n(786998),
                y = n(392237),
                M = n(457566),
                v = n(725405),
                x = n(550293),
                A = n(511582);
            const _ = { header: "GrokDrawerHeader", headerHighlighted: "GrokDrawerHeaderHighlighted", root: "GrokDrawer" };
            var E = n(731708),
                S = n(111677),
                C = n.n(S),
                G = n(952793),
                N = n(389071),
                I = n(189953);
            function P({ children: e, size: a, weight: n }) {
                return r.createElement(d.Z, { style: T.container }, r.createElement(E.ZP, { size: a, style: T.label, weight: n || "normal" }, r.createElement("span", null, e)));
            }
            const T = y.default.create((e) => ({ container: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, label: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } })),
                R = C().h5860a68,
                Z = C().ed93de0c,
                B = C().d1d92e40;
            function O() {
                const e = (0, G.hC)("responsive_web_grok_analyze_animation"),
                    a = (0, m.v9)(N.Es),
                    n = (0, N.f)({ conversationKey: a }),
                    o = -1 !== (0, m.v9)(n.selectPromptSource)?.indexOf("post_analysis"),
                    t = (0, m.v9)(n.selectStatus),
                    l = t === I.Q_.TYPING || t === I.Q_.WAITING;
                return r.createElement(d.Z, { style: F.titleTextRoot }, o && e ? (l ? r.createElement(P, { size: "headline2", weight: "bold" }, `${Z}...`) : r.createElement(E.ZP, { size: "headline2", style: F.animation }, B)) : r.createElement(E.ZP, null, R));
            }
            const F = y.default.create((e) => ({ titleTextRoot: { paddingStart: e.spaces.space2, flexGrow: 1, flexShrink: 1 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(136728);
            var J = n(154003),
                L = n(715614),
                W = n(530243),
                H = n(52735),
                X = n(487552),
                $ = n(899667),
                j = n(917270),
                U = n(807901);
            const z = C().fbc79f6a,
                q = C().a6e89af8,
                Q = C().d227d19e,
                Y = C().j7d0e836,
                K = C().ica55d24,
                V = { label: K };
            function ee({ conversationUrl: e, handleToggleVisibility: a, isExpanded: n, onClose: o }) {
                const l = (0, t.useHistory)(),
                    [s, i] = r.useState(!1),
                    c = r.useCallback(() => {
                        e && (l.push(e), a());
                    }, [a, e, l]),
                    { canClearConversation: u, handleClearConversationClickWithoutNav: h } = (0, U.Z)();
                return r.createElement(d.Z, { style: ae.rightControls }, r.createElement(J.ZP, { "aria-label": z, hoverLabel: { label: z }, icon: r.createElement(L.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: () => i(!0), type: "primaryText" }), n && e && r.createElement(J.ZP, { "aria-label": q, hoverLabel: { label: q }, icon: r.createElement(W.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: c, type: "primaryText" }), n && u && r.createElement(J.ZP, { "aria-label": K, disabled: !u, hoverLabel: V, icon: r.createElement(H.default, { style: ae.composeIcon }), onPress: h, type: "primaryText" }), n && r.createElement(J.ZP, { "aria-label": Q, hoverLabel: { label: Q }, icon: r.createElement(X.default, null), onPress: a, type: "primaryText" }), !n && r.createElement(J.ZP, { "aria-label": Y, hoverLabel: { label: Y }, icon: r.createElement($.default, null), onPress: a, type: "primaryText" }), s ? r.createElement(j.O, { onDrawerDismiss: () => i(!1) }) : null);
            }
            const ae = y.default.create((e) => ({ rightControls: { flexDirection: "row", alignItems: "center" }, composeIcon: { fill: "none" } }));
            function ne({ conversationUrl: e }) {
                const a = r.createRef(),
                    n = (0, m.I0)(),
                    o = (0, m.v9)(p.kX) === f.j.EXPANDED,
                    t = (0, m.v9)(x.kX) === A.S.EXPANDED,
                    l = r.useCallback(() => {
                        const e = o ? f.j.COLLAPSED : f.j.EXPANDED;
                        e === f.j.EXPANDED && t && n(x.bi(A.S.COLLAPSED)), n(p.bi(e));
                    }, [o, n, t]),
                    s = r.useCallback(() => {
                        n(p.bi(f.j.CLOSED));
                    }, [n]),
                    i = (0, v.Z)();
                return r.createElement(
                    d.Z,
                    { ref: a, style: [oe.headerRoot, !o && oe.headerBorderClosed, oe.cursor], testID: _.header },
                    o
                        ? r.createElement(k.Z, { onMiddleControlClick: l, rightControl: r.createElement(ee, { conversationUrl: e, handleToggleVisibility: l, isExpanded: o, onClose: s }), style: oe.roundedAppBarCorners, title: r.createElement(d.Z, { style: oe.titleContainer }, r.createElement(M.x1, null), r.createElement(O, null)) })
                        : r.createElement(
                              g.Z,
                              {
                                  onPress: () => {
                                      i.scribe({ element: "grok-bubble", action: "click" }), l();
                                  },
                                  style: [oe.collapsedContainer, { alignItems: "center", justifyContent: "center" }],
                              },
                              r.createElement(M.x1, { style: oe.icon }),
                          ),
                );
            }
            const oe = y.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { height: 55, borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, titleContainer: { height: "100%", alignItems: "center", gap: e.spaces.space4, display: "flex", flexDirection: "row", flexGrow: 1 }, collapsedContainer: { height: "100%", alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1 }, grokText: { fontSize: 8, marginTop: -4 }, icon: { width: 32, height: 32 }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } })),
                re = { page: "grok-drawer" };
            const de = (0, l.Z)({
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
                        n.e("icons.4"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.9"),
                        n.e("icons.7"),
                        n.e("icons.28"),
                        n.e("icons.26"),
                        n.e("icons.24"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("icons.18"),
                        n.e("icons.13"),
                        n.e("icons.29"),
                        n.e("icons.27"),
                        n.e("icons.25"),
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
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader."),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        n.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        n.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        n.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        n.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        n.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        n.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        n.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        n.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        n.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        n.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        n.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        n.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        n.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        n.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok"),
                        n.e("bundle.Grok-6107ac1a"),
                        n.e("bundle.Grok-9f4db315"),
                        n.e("bundle.Grok-65f95f73"),
                        n.e("bundle.Grok-63cb1cc4"),
                        n.e("bundle.Grok-c69e90f3"),
                        n.e("bundle.Grok-16d5f187"),
                        n.e("bundle.Grok-38dc3b4a"),
                        n.e("bundle.Grok-1d830d6b"),
                        n.e("bundle.Grok-7bc92c09"),
                        n.e("bundle.Grok-f8a31592"),
                        n.e("bundle.Grok-7a6ce5c4"),
                        n.e("bundle.Grok-cebf58fc"),
                        n.e("bundle.Grok-29bebf45"),
                        n.e("bundle.Grok-29980aa8"),
                        n.e("bundle.Grok-6ac0f1a5"),
                        n.e("bundle.Grok-3c20ad5c"),
                    ]).then(n.bind(n, 29734)),
            });
            function te({ width: e }) {
                const a = (0, u.cm)(),
                    [n, l] = r.useState(0),
                    g =
                        ((k = n),
                        (0, w.Zx)(({ windowHeight: e }) => {
                            const a = D.I2.find((a) => k <= Math.ceil(e * a));
                            return a ? e * Math.max(a, 0.5) : Math.min(k, Math.ceil(D.T6 * e));
                        }));
                var k;
                const y = (0, m.v9)((e) => p.kX(e)),
                    M = y === f.j.EXPANDED,
                    v = y === f.j.CLOSED;
                r.useEffect(() => {
                    v && l(0);
                }, [v]);
                const x = r.useCallback(
                        (e) => {
                            const {
                                nativeEvent: {
                                    layout: { height: a },
                                },
                            } = e;
                            l(a);
                        },
                        [l],
                    ),
                    A = r.useMemo(() => [D.ZP.allowPointer, D.ZP.main, M ? { minHeight: g, maxWidth: null } : D.ZP.collapsedSmall], [M, g]);
                return (function () {
                    const e = (0, t.useHistory)(),
                        a = e.getLastNonModalLocationPathname() ?? e.location.pathname;
                    return r.useMemo(() => (0, h.z)(a) || a.startsWith("/i/chat") || a.startsWith("/i/communitynotes") || a.startsWith("/messages") || a.startsWith("/i/radar") || a.startsWith("/i/money") || a.startsWith("/i/verified") || a.startsWith("/i/broadcasts/") || a.startsWith("/compose/articles") || a.startsWith("/i/account_analytics") || a.startsWith("/i/conferences-room") || a.startsWith("/i/premium/hiring") || a.startsWith("/i/grok") || a.endsWith("/live"), [a]);
                })() ||
                    v ||
                    !a
                    ? null
                    : r.createElement(
                          s.Z.GrokDrawer,
                          null,
                          r.createElement(i.Z, { id: "GrokDrawer" }, (a, t) => r.createElement(b.nO, { namespace: re }, r.createElement(d.Z, (0, o.Z)({ ref: a() }, t({ style: [D.ZP.denyPointer, D.ZP.root, { width: e, height: n }, c.Z.reducedMotionEnabled && D.ZP.reducedMotion], testID: _.root })), r.createElement(d.Z, { onLayout: x, style: A }, r.createElement(ne, { conversationUrl: "/i/grok" }), M && r.createElement(de, null))))),
                      );
            }
        },
        620988: (e, a, n) => {
            n.d(a, { ZH: () => g, ZP: () => y, x9: () => k });
            n(136728);
            var o = n(202784),
                r = n(726426),
                d = n.n(r),
                t = n(111677),
                l = n.n(t),
                s = n(88656),
                i = n(952793),
                c = n(782642),
                u = n(725405);
            n(571372);
            var h = n(623494),
                b = n(737368);
            const m = 4,
                p = l().h4d7cbcc,
                f = l().j77292b7,
                w = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, a) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                D = o.createContext(w);
            function g({ children: e }) {
                const [a, n] = o.useState({}),
                    r = (0, c.p)(),
                    t = (0, u.Z)(),
                    l = (0, b.k)(),
                    w = (0, i.JY)("responsive_web_grok_file_upload_max_files", m),
                    g = o.useCallback(
                        (e) => {
                            const o = a[e];
                            o &&
                                (o.abortController?.abort(),
                                n((a) => {
                                    const n = { ...a };
                                    return delete n[e], n;
                                }));
                        },
                        [a, n],
                    ),
                    k = o.useCallback(
                        async (e, a) => {
                            const o = d()(),
                                i = new AbortController(),
                                c = { abortController: i, isUploading: !0, isPendingAutomaticPromptSend: a?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    c.dimensions = await ((u = e),
                                    new Promise((e, a) => {
                                        if (!u.type.startsWith("image/")) return void a(new Error("File is not an image"));
                                        const n = new FileReader();
                                        (n.onload = (n) => {
                                            const o = new Image();
                                            (o.onload = () => {
                                                e({ width: o.width, height: o.height });
                                            }),
                                                (o.onerror = () => {
                                                    a(new Error("Failed to load image"));
                                                }),
                                                (o.src = n.target.result);
                                        }),
                                            (n.onerror = () => {
                                                a(new Error("Failed to read file"));
                                            }),
                                            n.readAsDataURL(u);
                                    }));
                                } catch (e) {}
                            var u;
                            n((e) => (Object.keys(e).length >= w ? (r({ text: f({ count: w }) }), e) : { ...e, [o]: c }));
                            try {
                                const a = await l(e, i);
                                (0, h.Jm)(t), (c.remote = { ...a, dimensions: c.dimensions }), n((e) => (e[o] ? { ...e, [o]: c } : e));
                            } catch (e) {
                                if (e instanceof s.Z && 0 === e.status) return;
                                (0, h.eV)(t, e.message),
                                    r({ text: p }),
                                    n((e) => {
                                        const a = { ...e };
                                        return delete a[o], a;
                                    });
                            } finally {
                                (c.isUploading = !1), n((e) => (e[o] ? { ...e, [o]: c } : e));
                            }
                        },
                        [w, r, l, t],
                    ),
                    y = o.useCallback(
                        async (e) => {
                            const o = d()(),
                                r = { abortController: new AbortController(), isUploading: !1, remote: e };
                            n({ ...a, [o]: r });
                        },
                        [a],
                    );
                return o.createElement(D.Provider, { value: { selectedFiles: a, onFileSelected: k, clearSelectedFile: g, onGrokFileSelected: y } }, e);
            }
            function k() {
                const e = (0, i.hC)("responsive_web_grok_pdf_upload_enabled"),
                    a = (0, i.hC)("responsive_web_grok_text_upload_enabled");
                return o.useMemo(() => {
                    const n = ["image/jpeg", "image/png", "image/webp"];
                    return e && n.push("application/pdf"), a && (n.push("text/plain"), n.push("text/xml"), n.push("text/csv"), n.push("text/markdown"), n.push("text/x-markdown"), n.push("text/md"), n.push("text/calendar"), n.push("text/vcard"), n.push("text/json"), n.push("text/yaml"), n.push("text/x-python"), n.push("text/x-csrc"), n.push("text/x-c++src"), n.push("text/x-csharp"), n.push("text/x-ruby"), n.push("text/x-java-source"), n.push("text/x-go"), n.push("text/x-rust"), n.push("text/x-swift"), n.push("text/x-kotlin"), n.push("text/x-sql"), n.push("text/x-lua"), n.push("text/x-scala"), n.push("text/x-haskell"), n.push("text/x-php"), n.push("text/x-perl"), n.push("text/x-shellscript"), n.push("text/x-rsrc"), n.push("text/x-dart"), n.push("application/markdown"), n.push("application/xml"), n.push("application/json"), n.push("application/x-yaml"), n.push("application/x-latex"), n.push("application/x-sh"), n.push("application/x-msdownload"), n.push("application/x-httpd-php"), n.push("application/sql"), n.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), n.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), n;
                }, [e, a]);
            }
            function y() {
                return o.useContext(D);
            }
        },
        737368: (e, a, n) => {
            n.d(a, { k: () => w });
            n(571372);
            var o = n(202784),
                r = n(111677),
                d = n.n(r),
                t = n(276259),
                l = n(952793),
                s = n(782642),
                i = n(725516),
                c = n(125363),
                u = n(458810),
                h = n(623494),
                b = n(620988);
            const m = d().c74e87e0,
                p = d().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                w = () => {
                    const e = (0, s.p)(),
                        a = (0, i.z)(),
                        n = (0, c.I0)(),
                        r = (0, b.x9)(),
                        d = (0, l.hC)("responsive_web_grok_file_compression_enabled"),
                        w = (0, l.JY)("responsive_web_grok_file_max_size", 5242880);
                    return o.useCallback(
                        async (o, l) => {
                            let s = o;
                            if (
                                !((e, a) => {
                                    const n = f(a);
                                    return e.some((e) => {
                                        const a = f(e);
                                        if (a.endsWith("*")) {
                                            const e = a.slice(0, -1);
                                            return n.startsWith(e);
                                        }
                                        return n === a;
                                    });
                                })(r, o.type)
                            )
                                throw (e({ text: p }), (0, h.op)(a, `file has unsupported type: ${o.type}`), new Error());
                            if (d) {
                                let n;
                                try {
                                    n = await (0, t.hv)(o, w);
                                } catch (e) {}
                                if (!n) throw (e({ text: m }), (0, h.op)(a, "failed to compress the file"), new Error());
                                s = n;
                            } else if (o.size > w) throw (e({ text: m }), (0, h.op)(a, "file is too large"), new Error());
                            const i = await n((0, u.t)(s, l));
                            return (0, h.Jm)(a), i;
                        },
                        [e, a, n, d, w, r],
                    );
                };
        },
        654917: (e, a, n) => {
            n.d(a, { ZP: () => p, eX: () => b, uf: () => m });
            var o = n(202784),
                r = n(107267),
                d = n(323265),
                t = n(791632),
                l = n(443781),
                s = n(952793),
                i = n(125363),
                c = n(389071),
                u = n(63538),
                h = n(623494);
            function b() {
                const e = (0, r.useHistory)(),
                    a = (0, i.v9)(c.Es);
                return (0, t.HD)(e) ? (0, t.tT)(e) : a;
            }
            function m() {
                const e = b(),
                    a = (0, i.I0)(),
                    n = (0, i.v9)((a) => (0, c.YJ)(a, e));
                return (0, i.v9)(n.selectIsInitialized) || a((0, c.Ki)(e)), n;
            }
            function p() {
                const { userClaims: e } = (0, l.QZ)(),
                    a = b(),
                    n = m(),
                    r = (0, i.v9)(n.selectMessageIds),
                    t = (0, i.I0)(),
                    p = (0, i.v9)(n.selectFetchConversationIdStatus),
                    f = (0, i.v9)(n.selectFetchConversationIdError),
                    w = (0, i.v9)(n.selectMode),
                    D = (0, i.v9)(n.selectStatus),
                    g = (0, i.v9)(c.Pt),
                    k = (0, i.v9)(n.selectConversationId),
                    y = (0, i.v9)(c.pZ),
                    M = (0, i.v9)(c.uF),
                    v = (0, i.v9)(c.F9),
                    x = (0, i.v9)(n.selectAnalysisEntityId),
                    A = (0, i.v9)(n.selectUsingExperiment);
                let _ = !1;
                const E = (0, s.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (_ = "premium") : (E || M) && (_ = y.length > 0 ? "restricted" : "free");
                const S = o.useCallback(
                        async (e, a) => {
                            w !== e && (t(n.setMode(e)), d.ZP.isTwitterApp() || (await t((0, u.O)(e, v))), (0, h.RC)(a, e));
                        },
                        [t, n, w, v],
                    ),
                    C = o.useCallback(
                        async (e, a, n) => {
                            e !== v && (t((0, c.j1)(e, a)), d.ZP.isTwitterApp() || (await t((0, u.O)(w, e))), (0, h.JO)(n, e));
                        },
                        [t, w, v],
                    );
                return { messageIds: r, access: _, status: D, grokSettingsStatus: g, conversationKey: a, conversationId: k, analysisEntityId: x, accessRestrictedReasons: y, fetchConversationIdStatus: p, fetchConversationIdError: f, mode: w, model: v, changeMode: S, changeModel: C, usingExperiment: A };
            }
        },
        305442: (e, a, n) => {
            n.d(a, { Z: () => r });
            var o = n(952793);
            function r(e) {
                return (0, o.JY)("responsive_web_grok_imggen_count", 1);
            }
        },
        623494: (e, a, n) => {
            n.d(a, { DE: () => m, G$: () => l, HO: () => _, HR: () => G, JO: () => w, Jm: () => x, NH: () => N, RC: () => f, S7: () => C, UV: () => P, Uk: () => M, YI: () => c, YW: () => S, ZY: () => p, az: () => s, c3: () => t, dP: () => g, dd: () => b, eS: () => v, eV: () => A, hf: () => D, hq: () => i, kl: () => y, mm: () => h, op: () => k, pv: () => d, qQ: () => R, u1: () => E, y6: () => u, zC: () => I, zX: () => T });
            var o = n(163889);
            function r() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function d(e, a) {
                Z(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function t(e, a) {
                Z(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function l(e, a) {
                Z(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(a) } });
            }
            function s(e, a, n) {
                Z(e)({ element: "client-home-log", action: a, data: { event_info: JSON.stringify(n) } });
            }
            function i(e, a) {
                Z(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: a.errorMessage }), duration_ms: a.durationMs } });
            }
            function c(e, a) {
                Z(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(a.messageTagCounts), duration_ms: a.durationMs } });
            }
            function u(e, a) {
                Z(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: a } });
            }
            function h(e, a, n) {
                Z(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: a, error: n }) } });
            }
            function b(e, a) {
                Z(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function m(e) {
                Z(e)({ element: "abort", action: "click" });
            }
            function p(e) {
                Z(e)({ element: "clear-conversation", action: "click" });
            }
            function f(e, a) {
                Z(e)({ element: "grok_mode", action: "change", data: { event_info: a } });
            }
            function w(e, a) {
                Z(e)({ element: "grok_model", action: "change", data: { event_info: a } });
            }
            function D(e, a) {
                Z(e)({ element: "tweet-carousel", action: "change", data: { event_info: a.toString() } });
            }
            function g(e, a) {
                Z(e)({ element: "file-attachment", action: "add", data: { event_info: a } });
            }
            function k(e, a) {
                Z(e)({ element: "file-attachment", action: "fail", data: { event_info: a } });
            }
            function y(e, a, n) {
                Z(e)({ element: "api-add-response", action: "error", data: { event_info: `${a.message}\n${a.stack}\n${r()}` } }), (0, o.Hj)(a, { level: "warning", extra: n });
            }
            function M(e, a) {
                Z(e)({ element: "api-add-response", action: "fail", data: { event_info: `${a}\n${r()}` } });
            }
            function v(e, a) {
                Z(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: a ? "first_chunk" : void 0 } });
            }
            function x(e) {
                Z(e)({ element: "file-upload", action: "success" });
            }
            function A(e, a) {
                Z(e)({ element: "file-upload", action: "fail", data: { event_info: a } });
            }
            function _(e, a) {
                Z(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: a ? "post_details" : "timeline" } });
            }
            function E(e, a, n) {
                Z(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: a ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function S(e, a) {
                Z(e)({ element: "grok-drawer-open", action: "success", data: { event_source: a } });
            }
            function C(e, a) {
                Z(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant }) } });
            }
            function G(e, a, n) {
                Z(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant, followUpText: n }) } });
            }
            function N(e) {
                Z(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function I(e, a) {
                Z(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            function P(e, a) {
                Z(e)({ element: "grok-memory-forget", action: "click", data: { event_info: a } });
            }
            function T(e, a, n) {
                Z(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: a, error: n }) } });
            }
            function R(e, a) {
                Z(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            const Z = (e) => (a) => {
                e.scribe({ ...a, data: { url: window.location.href, ...a.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-6ac0f1a5.d9f1b23a.js.map
