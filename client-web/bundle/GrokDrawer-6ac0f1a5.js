"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-6ac0f1a5"],
    {
        187268: (e, a, n) => {
            n.d(a, { Ez: () => g, QK: () => k, Sd: () => y, eC: () => M, j: () => _, jU: () => x, ky: () => b, w$: () => v });
            n(543673), n(240753), n(128399);
            var r = n(202784),
                o = n(392237),
                d = n(784732),
                t = n(956272),
                l = n(520913),
                s = n(913315),
                i = n(355586),
                c = n(14284),
                u = n(976898),
                h = n(492244),
                m = n(397159);
            const b = Object.freeze({ CodeExecution: "code_execution", BrowsePage: "browse_page", XSearch: "x_search", WebSearch: "web_search", XKeywordSearch: "x_keyword_search", XSemanticSearch: "x_semantic_search", XUserSearch: "x_user_search", GetXUserTimeline: "get_x_user_timeline", WebSearchWithSnippets: "web_search_with_snippets" }),
                p = /<xai:tool_usage_card>\s*(?:<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>\s*)?<xai:tool_name>([\w-]+)<\/xai:tool_name>\s*(?:<xai:tool_args>([\s\S]*?)<\/xai:tool_args>\s*)<\/xai:tool_usage_card>/g,
                f = /<xai:tool_name>([\w-]+)<\/xai:tool_name>/,
                w = /<xai:tool_args>([\s\S]*?)<\/xai:tool_args>/,
                D = /<xai:tool_usage_card_id>([0-9a-f-]{36})<\/xai:tool_usage_card_id>/;
            function g(e) {
                return e.replace(p, (e) => {
                    const a = (function (e) {
                        const a = e.match(f),
                            n = e.match(w),
                            r = e.match(D),
                            o = a ? a[1] : "",
                            d = n ? n[1] : "",
                            t = r ? r[1] : "";
                        let l = "<tool_usage_card>";
                        return t && (l += `<tool_usage_card_id>${t}</tool_usage_card_id>`), (l += `<tool_name>${o}</tool_name>`), (l += `<tool_args>${d}</tool_args>`), (l += "</tool_usage_card>"), l;
                    })(e);
                    return a ?? e;
                });
            }
            function k(e) {
                const a = e.match(p);
                if (a) {
                    const {
                        args: e,
                        id: n,
                        name: r,
                    } = (function (e) {
                        let a = "",
                            n = "",
                            r = "";
                        const o = e.match(D);
                        o && (a = o[1]);
                        const d = e.match(f);
                        d && (n = d[1]);
                        const t = e.match(w);
                        t && (r = t[1].trim());
                        return { id: a, name: n, args: r };
                    })(a[0]);
                    return y(n, r, e);
                }
                return null;
            }
            function y(e, a, n) {
                const r = n.match(/^<!\[CDATA\[(.*?)\]\]>/ms);
                let o = {};
                if (r)
                    try {
                        o = JSON.parse(r[1]);
                    } catch (e) {
                        o = {};
                    }
                return { id: e, name: a, args: o };
            }
            const M = "Using tools";
            function _(e) {
                switch (e.name) {
                    case b.WebSearch:
                    case b.WebSearchWithSnippets:
                        return m.uk.WebSearchQueryFormatter({ query: e.args.query });
                    case b.XSearch:
                    case b.XKeywordSearch:
                    case b.XSemanticSearch:
                        return m.uk.XSearchQueryFormatter({ query: e.args.query });
                    case b.XUserSearch:
                        return m.uk.XUserSearchFormatter({ query: e.args.query });
                    case b.BrowsePage: {
                        let a = e.args.url || "";
                        try {
                            a = new URL(a).hostname.replace("www.", "");
                        } catch (e) {}
                        return e.args.query ? m.uk.GenericURLQueryFormatter({ url: a, query: e.args.query }) : m.uk.BrowsePageFormatter({ url: a });
                    }
                    case b.GetXUserTimeline:
                        return m.uk.XUsernameQuerySearchFormatter({ query: e.args.query, username: e.args.username });
                    case b.CodeExecution:
                        return m.uk.CodeExecutionFormatter({ ttc_tool_usage_card: "" });
                    default:
                        return e.name ?? M;
                }
            }
            function x(e) {
                switch (e.name) {
                    case b.WebSearch:
                    case b.WebSearchWithSnippets:
                        return m.B2.WebSearchQueryFormatter;
                    case b.XSearch:
                    case b.XKeywordSearch:
                    case b.XSemanticSearch:
                        return m.B2.XSearchQueryFormatter;
                    case b.XUserSearch:
                        return m.B2.XUserSearchFormatter;
                    case b.BrowsePage:
                        return m.B2.BrowsePageFormatter;
                    case b.GetXUserTimeline:
                        return m.B2.XUsernameQuerySearchFormatter;
                    case b.CodeExecution:
                        return m.B2.CodeExecutionFormatter;
                    default:
                        return e.name ?? M;
                }
            }
            function v(e, a) {
                const n = { style: { width: a || o.default.theme.spaces.space16, height: a || o.default.theme.spaces.space16 } };
                switch (e) {
                    case "search_news":
                        return r.createElement(d.default, n);
                    case "web_search":
                        return r.createElement(t.default, n);
                    case "x_search":
                    case "get_x_user_timeline":
                    case "x_keyword_search":
                    case "x_semantic_search":
                    case "x_user_search":
                        return r.createElement(l.default, n);
                    case "call_finance_api":
                        return r.createElement(s.default, n);
                    case "call_sports_api":
                        return r.createElement(i.default, n);
                    case "browse_page":
                        return r.createElement(c.default, n);
                    case "code_execution":
                        return r.createElement(u.default, n);
                    default:
                        return r.createElement(h.default, n);
                }
            }
        },
        357606: (e, a, n) => {
            n.r(a), n.d(a, { default: () => te });
            var r = n(807896),
                o = n(202784),
                d = n(325686),
                t = n(107267),
                l = n(523561),
                s = n(292627),
                i = n(365023),
                c = n(461756),
                u = n(292484),
                h = n(528840),
                m = n(293115),
                b = n(125363),
                p = n(456228),
                f = n(551864),
                w = n(537392),
                D = n(78882);
            var g = n(530732),
                k = n(786998),
                y = n(392237),
                M = n(457566),
                _ = n(725405),
                x = n(550293),
                v = n(511582);
            const A = { header: "GrokDrawerHeader", headerHighlighted: "GrokDrawerHeaderHighlighted", root: "GrokDrawer" };
            var S = n(731708),
                E = n(111677),
                C = n.n(E),
                P = n(952793),
                G = n(389071),
                I = n(189953);
            function N({ children: e, size: a, weight: n }) {
                return o.createElement(d.Z, { style: T.container }, o.createElement(S.ZP, { size: a, style: T.label, weight: n || "normal" }, o.createElement("span", null, e)));
            }
            const T = y.default.create((e) => ({ container: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, label: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } })),
                R = C().h5860a68,
                Z = C().ed93de0c,
                B = C().d1d92e40;
            function X() {
                const e = (0, P.hC)("responsive_web_grok_analyze_animation"),
                    a = (0, b.v9)(G.Es),
                    n = (0, G.f)({ conversationKey: a }),
                    r = -1 !== (0, b.v9)(n.selectPromptSource)?.indexOf("post_analysis"),
                    t = (0, b.v9)(n.selectStatus),
                    l = t === I.Q_.TYPING || t === I.Q_.WAITING;
                return o.createElement(d.Z, { style: F.titleTextRoot }, r && e ? (l ? o.createElement(N, { size: "headline2", weight: "bold" }, `${Z}...`) : o.createElement(S.ZP, { size: "headline2", style: F.animation }, B)) : o.createElement(S.ZP, null, R));
            }
            const F = y.default.create((e) => ({ titleTextRoot: { paddingStart: e.spaces.space2, flexGrow: 1, flexShrink: 1 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(136728);
            var W = n(154003),
                O = n(715614),
                U = n(530243),
                L = n(52735),
                J = n(487552),
                j = n(899667),
                H = n(917270),
                $ = n(807901);
            const z = C().fbc79f6a,
                q = C().a6e89af8,
                Q = C().d227d19e,
                K = C().j7d0e836,
                Y = C().ica55d24,
                V = { label: Y };
            function ee({ conversationUrl: e, handleToggleVisibility: a, isExpanded: n, onClose: r }) {
                const l = (0, t.useHistory)(),
                    [s, i] = o.useState(!1),
                    c = o.useCallback(() => {
                        e && (l.push(e), a());
                    }, [a, e, l]),
                    { canClearConversation: u, handleClearConversationClickWithoutNav: h } = (0, $.Z)();
                return o.createElement(d.Z, { style: ae.rightControls }, o.createElement(W.ZP, { "aria-label": z, hoverLabel: { label: z }, icon: o.createElement(O.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: () => i(!0), type: "primaryText" }), n && e && o.createElement(W.ZP, { "aria-label": q, hoverLabel: { label: q }, icon: o.createElement(U.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: c, type: "primaryText" }), n && u && o.createElement(W.ZP, { "aria-label": Y, disabled: !u, hoverLabel: V, icon: o.createElement(L.default, { style: ae.composeIcon }), onPress: h, type: "primaryText" }), n && o.createElement(W.ZP, { "aria-label": Q, hoverLabel: { label: Q }, icon: o.createElement(J.default, null), onPress: a, type: "primaryText" }), !n && o.createElement(W.ZP, { "aria-label": K, hoverLabel: { label: K }, icon: o.createElement(j.default, null), onPress: a, type: "primaryText" }), s ? o.createElement(H.O, { onDrawerDismiss: () => i(!1) }) : null);
            }
            const ae = y.default.create((e) => ({ rightControls: { flexDirection: "row", alignItems: "center" }, composeIcon: { fill: "none" } }));
            function ne({ conversationUrl: e }) {
                const a = o.createRef(),
                    n = (0, b.I0)(),
                    r = (0, b.v9)(p.kX) === f.j.EXPANDED,
                    t = (0, b.v9)(x.kX) === v.S.EXPANDED,
                    l = o.useCallback(() => {
                        const e = r ? f.j.COLLAPSED : f.j.EXPANDED;
                        e === f.j.EXPANDED && t && n(x.bi(v.S.COLLAPSED)), n(p.bi(e));
                    }, [r, n, t]),
                    s = o.useCallback(() => {
                        n(p.bi(f.j.CLOSED));
                    }, [n]),
                    i = (0, _.Z)();
                return o.createElement(
                    d.Z,
                    { ref: a, style: [re.headerRoot, !r && re.headerBorderClosed, re.cursor], testID: A.header },
                    r
                        ? o.createElement(k.Z, { onMiddleControlClick: l, rightControl: o.createElement(ee, { conversationUrl: e, handleToggleVisibility: l, isExpanded: r, onClose: s }), style: re.roundedAppBarCorners, title: o.createElement(d.Z, { style: re.titleContainer }, o.createElement(M.x1, null), o.createElement(X, null)) })
                        : o.createElement(
                              g.Z,
                              {
                                  onPress: () => {
                                      i.scribe({ element: "grok-bubble", action: "click" }), l();
                                  },
                                  style: [re.collapsedContainer, { alignItems: "center", justifyContent: "center" }],
                              },
                              o.createElement(M.x1, { style: re.icon }),
                          ),
                );
            }
            const re = y.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { height: 55, borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, titleContainer: { height: "100%", alignItems: "center", gap: e.spaces.space4, display: "flex", flexDirection: "row", flexGrow: 1 }, collapsedContainer: { height: "100%", alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1 }, grokText: { fontSize: 8, marginTop: -4 }, icon: { width: 32, height: 32 }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } })),
                oe = { page: "grok-drawer" };
            const de = (0, l.Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.5"),
                        n.e("icons.25"),
                        n.e("icons.22"),
                        n.e("icons.6"),
                        n.e("icons.4"),
                        n.e("icons.9"),
                        n.e("icons.15"),
                        n.e("icons.7"),
                        n.e("icons.3"),
                        n.e("icons.20"),
                        n.e("icons.2"),
                        n.e("icons.18"),
                        n.e("icons.27"),
                        n.e("icons.13"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.0"),
                        n.e("icons.24"),
                        n.e("icons.17"),
                        n.e("icons.12"),
                        n.e("icons.11"),
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
                        n.e("icons.10"),
                        n.e("icons.8"),
                        n.e("icons.26"),
                        n.e("icons.19"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
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
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-e4e3d8bb"),
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
                        n.e("bundle.Grok-bd027025"),
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
                    [n, l] = o.useState(0),
                    g =
                        ((k = n),
                        (0, w.Zx)(({ windowHeight: e }) => {
                            const a = D.I2.find((a) => k <= Math.ceil(e * a));
                            return a ? e * Math.max(a, 0.5) : Math.min(k, Math.ceil(D.T6 * e));
                        }));
                var k;
                const y = (0, b.v9)((e) => p.kX(e)),
                    M = y === f.j.EXPANDED,
                    _ = y === f.j.CLOSED;
                o.useEffect(() => {
                    _ && l(0);
                }, [_]);
                const x = o.useCallback(
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
                    v = o.useMemo(() => [D.ZP.allowPointer, D.ZP.main, M ? { minHeight: g, maxWidth: null } : D.ZP.collapsedSmall], [M, g]);
                return (function () {
                    const e = (0, t.useHistory)(),
                        a = e.getLastNonModalLocationPathname() ?? e.location.pathname;
                    return o.useMemo(() => (0, h.z)(a) || a.startsWith("/i/chat") || a.startsWith("/i/communitynotes") || a.startsWith("/messages") || a.startsWith("/i/radar") || a.startsWith("/i/money") || a.startsWith("/i/verified") || a.startsWith("/i/broadcasts/") || a.startsWith("/compose/articles") || a.startsWith("/i/account_analytics") || a.startsWith("/i/conferences-room") || a.startsWith("/i/premium/hiring") || a.startsWith("/i/grok") || a.endsWith("/live"), [a]);
                })() ||
                    _ ||
                    !a
                    ? null
                    : o.createElement(
                          s.Z.GrokDrawer,
                          null,
                          o.createElement(i.Z, { id: "GrokDrawer" }, (a, t) => o.createElement(m.nO, { namespace: oe }, o.createElement(d.Z, (0, r.Z)({ ref: a() }, t({ style: [D.ZP.denyPointer, D.ZP.root, { width: e, height: n }, c.Z.reducedMotionEnabled && D.ZP.reducedMotion], testID: A.root })), o.createElement(d.Z, { onLayout: x, style: v }, o.createElement(ne, { conversationUrl: "/i/grok" }), M && o.createElement(de, null))))),
                      );
            }
        },
        620988: (e, a, n) => {
            n.d(a, { ZH: () => g, ZP: () => y, x9: () => k });
            n(136728);
            var r = n(202784),
                o = n(726426),
                d = n.n(o),
                t = n(111677),
                l = n.n(t),
                s = n(88656),
                i = n(952793),
                c = n(782642),
                u = n(725405);
            n(571372);
            var h = n(623494),
                m = n(737368);
            const b = 4,
                p = l().h4d7cbcc,
                f = l().j77292b7,
                w = { onGrokFileSelected: (e) => new Promise((e) => e()), onFileSelected: (e, a) => new Promise((e) => e()), selectedFiles: {}, clearSelectedFile: () => {} },
                D = r.createContext(w);
            function g({ children: e }) {
                const [a, n] = r.useState({}),
                    o = (0, c.p)(),
                    t = (0, u.Z)(),
                    l = (0, m.k)(),
                    w = (0, i.JY)("responsive_web_grok_file_upload_max_files", b),
                    g = r.useCallback(
                        (e) => {
                            const r = a[e];
                            r &&
                                (r.abortController?.abort(),
                                n((a) => {
                                    const n = { ...a };
                                    return delete n[e], n;
                                }));
                        },
                        [a, n],
                    ),
                    k = r.useCallback(
                        async (e, a) => {
                            const r = d()(),
                                i = new AbortController(),
                                c = { abortController: i, isUploading: !0, isPendingAutomaticPromptSend: a?.awaitPromptSend, local: e };
                            if (e.type.startsWith("image/"))
                                try {
                                    c.dimensions = await ((u = e),
                                    new Promise((e, a) => {
                                        if (!u.type.startsWith("image/")) return void a(new Error("File is not an image"));
                                        const n = new FileReader();
                                        (n.onload = (n) => {
                                            const r = new Image();
                                            (r.onload = () => {
                                                e({ width: r.width, height: r.height });
                                            }),
                                                (r.onerror = () => {
                                                    a(new Error("Failed to load image"));
                                                }),
                                                (r.src = n.target.result);
                                        }),
                                            (n.onerror = () => {
                                                a(new Error("Failed to read file"));
                                            }),
                                            n.readAsDataURL(u);
                                    }));
                                } catch (e) {}
                            var u;
                            n((e) => (Object.keys(e).length >= w ? (o({ text: f({ count: w }) }), e) : { ...e, [r]: c }));
                            try {
                                const a = await l(e, i);
                                (0, h.Jm)(t), (c.remote = { ...a, dimensions: c.dimensions }), n((e) => (e[r] ? { ...e, [r]: c } : e));
                            } catch (e) {
                                if (e instanceof s.Z && 0 === e.status) return;
                                (0, h.eV)(t, e.message),
                                    o({ text: p }),
                                    n((e) => {
                                        const a = { ...e };
                                        return delete a[r], a;
                                    });
                            } finally {
                                (c.isUploading = !1), n((e) => (e[r] ? { ...e, [r]: c } : e));
                            }
                        },
                        [w, o, l, t],
                    ),
                    y = r.useCallback(
                        async (e) => {
                            const r = d()(),
                                o = { abortController: new AbortController(), isUploading: !1, remote: e };
                            n({ ...a, [r]: o });
                        },
                        [a],
                    );
                return r.createElement(D.Provider, { value: { selectedFiles: a, onFileSelected: k, clearSelectedFile: g, onGrokFileSelected: y } }, e);
            }
            function k() {
                const e = (0, i.hC)("responsive_web_grok_pdf_upload_enabled"),
                    a = (0, i.hC)("responsive_web_grok_text_upload_enabled");
                return r.useMemo(() => {
                    const n = ["image/jpeg", "image/png", "image/webp"];
                    return e && n.push("application/pdf"), a && (n.push("text/plain"), n.push("text/xml"), n.push("text/csv"), n.push("text/markdown"), n.push("text/x-markdown"), n.push("text/md"), n.push("text/calendar"), n.push("text/vcard"), n.push("text/json"), n.push("text/yaml"), n.push("text/x-python"), n.push("text/x-csrc"), n.push("text/x-c++src"), n.push("text/x-csharp"), n.push("text/x-ruby"), n.push("text/x-java-source"), n.push("text/x-go"), n.push("text/x-rust"), n.push("text/x-swift"), n.push("text/x-kotlin"), n.push("text/x-sql"), n.push("text/x-lua"), n.push("text/x-scala"), n.push("text/x-haskell"), n.push("text/x-php"), n.push("text/x-perl"), n.push("text/x-shellscript"), n.push("text/x-rsrc"), n.push("text/x-dart"), n.push("application/markdown"), n.push("application/xml"), n.push("application/json"), n.push("application/x-yaml"), n.push("application/x-latex"), n.push("application/x-sh"), n.push("application/x-msdownload"), n.push("application/x-httpd-php"), n.push("application/sql"), n.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), n.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")), n;
                }, [e, a]);
            }
            function y() {
                return r.useContext(D);
            }
        },
        737368: (e, a, n) => {
            n.d(a, { k: () => w });
            n(571372);
            var r = n(202784),
                o = n(111677),
                d = n.n(o),
                t = n(276259),
                l = n(952793),
                s = n(782642),
                i = n(725516),
                c = n(125363),
                u = n(458810),
                h = n(623494),
                m = n(620988);
            const b = d().c74e87e0,
                p = d().bea50a2a,
                f = (e) => e.toLowerCase().replace(/\/$/, ""),
                w = () => {
                    const e = (0, s.p)(),
                        a = (0, i.z)(),
                        n = (0, c.I0)(),
                        o = (0, m.x9)(),
                        d = (0, l.hC)("responsive_web_grok_file_compression_enabled"),
                        w = (0, l.JY)("responsive_web_grok_file_max_size", 5242880);
                    return r.useCallback(
                        async (r, l) => {
                            let s = r;
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
                                })(o, r.type)
                            )
                                throw (e({ text: p }), (0, h.op)(a, `file has unsupported type: ${r.type}`), new Error());
                            if (d) {
                                let n;
                                try {
                                    n = await (0, t.hv)(r, w);
                                } catch (e) {}
                                if (!n) throw (e({ text: b }), (0, h.op)(a, "failed to compress the file"), new Error());
                                s = n;
                            } else if (r.size > w) throw (e({ text: b }), (0, h.op)(a, "file is too large"), new Error());
                            const i = await n((0, u.t)(s, l));
                            return (0, h.Jm)(a), i;
                        },
                        [e, a, n, d, w, o],
                    );
                };
        },
        654917: (e, a, n) => {
            n.d(a, { ZP: () => p, eX: () => m, uf: () => b });
            var r = n(202784),
                o = n(107267),
                d = n(323265),
                t = n(791632),
                l = n(443781),
                s = n(952793),
                i = n(125363),
                c = n(389071),
                u = n(63538),
                h = n(623494);
            function m() {
                const e = (0, o.useHistory)(),
                    a = (0, i.v9)(c.Es);
                return (0, t.HD)(e) ? (0, t.tT)(e) : a;
            }
            function b() {
                const e = m(),
                    a = (0, i.I0)(),
                    n = (0, i.v9)((a) => (0, c.YJ)(a, e));
                return (0, i.v9)(n.selectIsInitialized) || a((0, c.Ki)(e)), n;
            }
            function p() {
                const { userClaims: e } = (0, l.QZ)(),
                    a = m(),
                    n = b(),
                    o = (0, i.v9)(n.selectMessageIds),
                    t = (0, i.I0)(),
                    p = (0, i.v9)(n.selectFetchConversationIdStatus),
                    f = (0, i.v9)(n.selectFetchConversationIdError),
                    w = (0, i.v9)(n.selectMode),
                    D = (0, i.v9)(n.selectStatus),
                    g = (0, i.v9)(c.Pt),
                    k = (0, i.v9)(n.selectConversationId),
                    y = (0, i.v9)(c.pZ),
                    M = (0, i.v9)(c.uF),
                    _ = (0, i.v9)(c.F9),
                    x = (0, i.v9)(n.selectAnalysisEntityId),
                    v = (0, i.v9)(n.selectUsingExperiment);
                let A = !1;
                const S = (0, s.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (A = "premium") : (S || M) && (A = y.length > 0 ? "restricted" : "free");
                const E = r.useCallback(
                        async (e, a) => {
                            w !== e && (t(n.setMode(e)), d.ZP.isTwitterApp() || (await t((0, u.O)(e, _))), (0, h.RC)(a, e));
                        },
                        [t, n, w, _],
                    ),
                    C = r.useCallback(
                        async (e, a, n) => {
                            e !== _ && (t((0, c.j1)(e, a)), d.ZP.isTwitterApp() || (await t((0, u.O)(w, e))), (0, h.JO)(n, e));
                        },
                        [t, w, _],
                    );
                return { messageIds: o, access: A, status: D, grokSettingsStatus: g, conversationKey: a, conversationId: k, analysisEntityId: x, accessRestrictedReasons: y, fetchConversationIdStatus: p, fetchConversationIdError: f, mode: w, model: _, changeMode: E, changeModel: C, usingExperiment: v };
            }
        },
        305442: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(952793);
            function o(e) {
                return (0, r.JY)("responsive_web_grok_imggen_count", 1);
            }
        },
        623494: (e, a, n) => {
            n.d(a, { DE: () => b, G$: () => l, HO: () => A, HR: () => P, JO: () => w, Jm: () => x, NH: () => G, RC: () => f, S7: () => C, UV: () => N, Uk: () => M, YI: () => c, YW: () => E, ZY: () => p, az: () => s, c3: () => t, dP: () => g, dd: () => m, eS: () => _, eV: () => v, hf: () => D, hq: () => i, kl: () => y, mm: () => h, op: () => k, pv: () => d, qQ: () => R, u1: () => S, y6: () => u, zC: () => I, zX: () => T });
            var r = n(163889);
            function o() {
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
            function m(e, a) {
                Z(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function b(e) {
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
                Z(e)({ element: "api-add-response", action: "error", data: { event_info: `${a.message}\n${a.stack}\n${o()}` } }), (0, r.Hj)(a, { level: "warning", extra: n });
            }
            function M(e, a) {
                Z(e)({ element: "api-add-response", action: "fail", data: { event_info: `${a}\n${o()}` } });
            }
            function _(e, a) {
                Z(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: a ? "first_chunk" : void 0 } });
            }
            function x(e) {
                Z(e)({ element: "file-upload", action: "success" });
            }
            function v(e, a) {
                Z(e)({ element: "file-upload", action: "fail", data: { event_info: a } });
            }
            function A(e, a) {
                Z(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: a ? "post_details" : "timeline" } });
            }
            function S(e, a, n) {
                Z(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: a ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function E(e, a) {
                Z(e)({ element: "grok-drawer-open", action: "success", data: { event_source: a } });
            }
            function C(e, a) {
                Z(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant }) } });
            }
            function P(e, a, n) {
                Z(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant, followUpText: n }) } });
            }
            function G(e) {
                Z(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function I(e, a) {
                Z(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            function N(e, a) {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-6ac0f1a5.def8faea.js.map
