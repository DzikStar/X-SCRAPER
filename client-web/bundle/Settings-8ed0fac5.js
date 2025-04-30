"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-8ed0fac5"],
    {
        670094: (e, t, a) => {
            a.d(t, { d: () => s });
            var n = a(674132),
                r = a.n(n),
                o = a(88656),
                d = a(601576),
                l = a(163889);
            const i = r().a5d4fda0,
                s = (e = i, t = !0) => ({
                    customErrorHandler: (a) => {
                        const { context: n } = a;
                        return (!a) instanceof o.Z && (a.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, l.ZP)(a, { extra: { context: n, isStrato: !0 } }), t ? (0, d.mf)({ text: e }) : [];
                    },
                });
        },
        23478: (e, t, a) => {
            a.d(t, { NK: () => h, Ns: () => p, UD: () => m, VL: () => g, _d: () => D, c: () => S, fm: () => f, n$: () => u });
            var n = a(129270),
                r = a(499627),
                o = a(917799),
                d = a(312771);
            const l = "userData",
                i = `rweb/${l}`,
                s = (0, o.dg)(i, "FETCH_DOWNLOADS"),
                c = (0, o.dg)(i, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                p = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                b = { fetchStatus: d.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [l]: function (e = b, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case s.SUCCESS: {
                            const a = t.payload || [],
                                n = a.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: d.ZP.LOADED, downloads: { ...e.downloads, all: a, nonFailed: n } };
                        }
                        case s.REQUEST:
                            return { ...e, fetchStatus: d.ZP.LOADING };
                        case s.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: d.ZP.FAILED };
                        case c.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case c.FAILURE:
                            return { ...e, fetchStatus: d.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[l].downloads,
                m = (e) => e[l].fetchStatus,
                S = (e) => 503 === e[l].error?.status,
                D =
                    () =>
                    (e, t, { api: a }) =>
                        (0, o._O)(e, { request: a.withEndpoint(n.Z).fetchDownloads })({ actionTypes: s, context: "FETCH_DOWNLOADS" }),
                f =
                    () =>
                    (e, t, { api: a }) =>
                        (0, o._O)(e, { request: a.withEndpoint(n.Z).createDataDownload })({ actionTypes: c, context: "CREATE_DOWNLOAD" }),
                g =
                    (e) =>
                    (t, a, { api: r }) =>
                        (0, o.Vg)(t, { params: e, request: r.withEndpoint(n.Z).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        343697: (e, t, a) => {
            a.r(t), a.d(t, { default: () => b });
            var n = a(807896),
                r = (a(136728), a(202784)),
                o = a(107267),
                d = a(717988),
                l = a(923128),
                i = a(221716),
                s = a(528603),
                c = a(914115),
                u = a(76920);
            const p = (0, d.p)(
                    () =>
                        Promise.all([
                            a.e("icons.10"),
                            a.e("icons.21"),
                            a.e("icons.16"),
                            a.e("icons.1"),
                            a.e("icons.19"),
                            a.e("icons.0"),
                            a.e("icons.8"),
                            a.e("icons.23"),
                            a.e("icons.2"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.7"),
                            a.e("icons.9"),
                            a.e("icons.24"),
                            a.e("icons.15"),
                            a.e("icons.3"),
                            a.e("icons.28"),
                            a.e("modules.audio-6107ac1a"),
                            a.e("modules.audio-b953418a"),
                            a.e("modules.audio-7c51e6a7"),
                            a.e("modules.audio-04db59e9"),
                            a.e("modules.audio-76583d6c"),
                            a.e("modules.audio-b7a8a5fb"),
                            a.e("modules.audio-51f6e793"),
                            a.e("modules.audio-e019dbda"),
                            a.e("modules.audio-262c94d4"),
                            a.e("modules.audio-c6fe4ea4"),
                            a.e("icons.26"),
                            a.e("icons.4"),
                            a.e("icons.13"),
                            a.e("icons.18"),
                            a.e("icons.25"),
                            a.e("icons.29"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
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
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee359ff7"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                            a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                            a.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            a.e("bundle.Settings-e907d115"),
                            a.e("bundle.Settings-9f4db315"),
                            a.e("bundle.Settings-8ed0fac5"),
                        ]).then(a.bind(a, 855632)),
                    { shouldMigrateToX: !0 },
                ),
                b = () => {
                    const e = (0, u.cH)(),
                        t = [];
                    for (const a of e) {
                        t.push(a.getRoute?.(a.path)), a.synonyms.push((0, s.Bz)(a.title));
                        for (const e of a.items) t.push(e.getRoute?.(e.path)), e.synonyms.push((0, s.Bz)(e.title));
                    }
                    const a = r.useCallback(
                        (t) => {
                            const a = e.filter((e) => e.isSearchable).map((e) => ({ ...e, items: e.items.filter((e) => e.isSearchable) }));
                            return r.createElement(p, (0, n.Z)({}, t, { searchIndex: a }));
                        },
                        [e],
                    );
                    return r.createElement(i.Z, { rootComponent: a, rootDetailContent: c.vB }, t, r.createElement(o.Route, { component: l.Z }));
                };
        },
        634238: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            var n = a(807896),
                r = a(202784),
                o = a(107267),
                d = a(202336),
                l = a(923128),
                i = a(300497),
                s = a(221716),
                c = a(1167),
                u = a(903360),
                p = a(430717);
            const b = (e) => r.createElement(c.ZP, (0, n.Z)({}, e, { component: u.N$, subscriptionNames: p.Vt })),
                h = (e) => r.createElement(c.ZP, (0, n.Z)({}, e, { component: u.LY, subscriptionNames: p.Vt })),
                m = (e) => r.createElement(i.Z, (0, n.Z)({}, e, { component: h, fallbackComponent: l.Z, featureSwitchName: "recruiting_promoted_jobs_enabled" })),
                S = () => null,
                D = () => r.createElement(s.Z, { rootComponent: b, rootDetailContent: S }, r.createElement(o.Route, { component: m, key: d.f.JOB_PROMOTION_SETTINGS, path: d.f.JOB_PROMOTION_SETTINGS }), r.createElement(o.Route, { component: l.Z }));
        },
        249546: (e, t, a) => {
            a.r(t), a.d(t, { AppInfo: () => _, SettingsAboutScreen: () => k, default: () => M });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(844685),
                d = a(779610),
                l = a(688715),
                i = a(943401),
                s = a(420412),
                c = a(731708),
                u = a(674132),
                p = a.n(u),
                b = a(393805),
                h = a(443781),
                m = a(652904),
                S = a(725516),
                D = a(264922),
                f = a(267966);
            const g = { aboutScreen: "aboutScreen" },
                A = p().cedbb01c,
                y = p().b4f917d0,
                w = p().bdfa2b8c,
                E = p().b8692262,
                Z = p().c0398892;
            function _(e) {
                const t = [];
                return t.push(n.createElement(o.Z, { text: Z })), t.push(n.createElement(d.Z, { label: Z, link: { external: !0, pathname: (0, l.ju)("https://x.com/i/release_notes") } })), n.Children.toArray(t);
            }
            function k(e) {
                const { location: t } = e,
                    { featureSwitches: a } = (0, h.QZ)(),
                    l = (0, b.ZP)()
                        .filter((e) => !e.excludeOnSettingsPage && (!e.featureSwitch || a.isTrue(e.featureSwitch)))
                        .sort((e, t) => e.text.localeCompare(t.text)),
                    u = l.filter((e) => e.legal && e.link),
                    p = l.filter((e) => !e.legal && e.link),
                    S = l.filter((e) => !e.link);
                return n.createElement(
                    m.Z,
                    null,
                    n.createElement(
                        D.Z,
                        { location: t, screenType: "primaryDetail", title: w },
                        n.createElement(
                            r.Z,
                            { testID: g.aboutScreen },
                            n.createElement(i.Z, { description: E }),
                            n.createElement(_, null),
                            n.createElement(s.Z, null),
                            n.createElement(o.Z, { text: A }),
                            u.map((e, t) => n.createElement(d.Z, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })),
                            S.map((e) => n.createElement(c.ZP, { color: "gray700", key: e.text, size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, e.text)),
                            n.createElement(s.Z, null),
                            n.createElement(o.Z, { text: y }),
                            p.map((e, t) => n.createElement(d.Z, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })),
                        ),
                    ),
                );
            }
            const M = (0, S.Z)(k, { page: "settings", section: "about" });
        },
        337947: (e, t, a) => {
            a.r(t), a.d(t, { AccessibilityScreen: () => W, default: () => q });
            var n = a(202784),
                r = a(325686),
                o = a(688715),
                d = a(461756),
                l = a(392237),
                i = a(943401),
                s = a(844685),
                c = a(954110),
                u = a(420412),
                p = a(779610),
                b = a(674132),
                h = a.n(b),
                m = a(534763),
                S = a(443781),
                D = a(652904),
                f = a(697702),
                g = a(961817),
                A = a(264922),
                y = a(669504),
                w = a(228149),
                E = a(71620),
                Z = a(668214),
                _ = a(38562),
                k = a(88458),
                M = a(659773);
            const C = (0, Z.Z)()
                    .propsFromState(() => ({ altTextNudgeType: k.jW, dataSaverMode: M.IX, reducedMotionEnabled: _.DM, videoAutoplay: M.oO, highContrastEnabled: _.Db }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("ACCESSIBILITY_SETTINGS_SCREEN"), fetchAltTextPromptPreferenceIfNeeded: k.Xd, updateAltTextPromptPreference: k.H1, updateSettings: _.VP }))
                    .withAnalytics({ page: "settings", section: "accessibility" }),
                v = "accessibilityScreen",
                P = h().e3719c16,
                I = h().b833bcde,
                T = h().d5b646be,
                B = h().jfe6a3a0,
                x = h().add55c98,
                N = h().e8c72272,
                L = h().dba2cdd2,
                R = h().d070244e,
                O = h().icfa5e8c,
                F = h().ae41b002,
                z = h().h9d1cfae,
                H = h().c878e9f8,
                V = h().a776eed8,
                U = h().bbd1fc7c,
                G = h().ac865cf0,
                j = (0, o.ju)("https://help.x.com/resources/accessibility");
            class W extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._showAltTextPromptPreferenceSetting = this.context.featureSwitches.allTrue(["responsive_web_alt_text_nudges_enabled", "responsive_web_alt_text_nudges_settings_enabled"])),
                        (this._handleReducedMotionChanged = (e, t) => {
                            this._handleSettingChanged(e, t), d.Z.setReducedMotion(t);
                        }),
                        (this._handleHighContrastChanged = (e, t) => {
                            this._handleSettingChanged(e, t), l.default.setHighContrast(t);
                        }),
                        (this._handleAltTextNudgeTypeChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateAltTextPromptPreference: r } = this.props,
                                o = t ? f.f.Prompt : null;
                            a.scribe({ element: `${e}_${o || "off"}`, action: "selected" }), r(o).catch(n({ showToast: !0 }));
                        }),
                        (this._handleSettingChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateSettings: r } = this.props;
                            a.scribe({ element: e, action: t ? "on" : "off" }), r({ [e]: t }).catch(n({ showToast: !0 }));
                        }),
                        (this._showVideoAutoplaySetting = (0, w.Z)());
                }
                componentDidMount() {
                    const { fetchAltTextPromptPreferenceIfNeeded: e } = this.props;
                    this._showAltTextPromptPreferenceSetting && e({ shouldImpress: !0 });
                }
                render() {
                    const { altTextNudgeType: e, dataSaverMode: t, highContrastEnabled: a, location: o, reducedMotionEnabled: d, videoAutoplay: l } = this.props,
                        b = window.matchMedia && window.matchMedia("(prefers-reduced-motion)").matches,
                        h = this._showAltTextPromptPreferenceSetting,
                        S = l ?? (0, g.i)();
                    return n.createElement(D.Z, null, n.createElement(A.Z, { location: o, screenType: "secondaryDetail", title: P }, n.createElement(r.Z, { testID: v }, n.createElement(i.Z, { description: I }), n.createElement(s.Z, { text: T }), n.createElement(c.Z, { checked: a, helpText: L, label: N, name: "highContrastEnabled", onChange: this._handleHighContrastChanged })), this._showVideoAutoplaySetting ? n.createElement(r.Z, null, n.createElement(u.Z, null), n.createElement(s.Z, { text: B }), n.createElement(c.Z, { checked: d || b, disabled: b, helpText: b ? F : O, label: R, name: "reducedMotionEnabled", onChange: this._handleReducedMotionChanged }), n.createElement(p.Z, { description: y.Z[S], disabled: t, label: V, link: "/settings/autoplay" })) : null, h ? n.createElement(r.Z, null, n.createElement(u.Z, null), n.createElement(s.Z, { text: x }), this._showAltTextPromptPreferenceSetting ? n.createElement(c.Z, { checked: e === f.f.Prompt, helpText: H, label: z, name: "altTextNudgeType", onChange: this._handleAltTextNudgeTypeChanged }) : null) : null, n.createElement(r.Z, null, n.createElement(u.Z, null), n.createElement(s.Z, { text: U }), n.createElement(m.b, { label: G, link: j }))));
                }
            }
            W.contextType = S.rC;
            const q = C(W);
        },
        167783: (e, t, a) => {
            a.r(t), a.d(t, { DataUsageScreen: () => M, default: () => C });
            var n = a(202784),
                r = a(943401),
                o = a(954110),
                d = a(779610),
                l = a(674132),
                i = a.n(l),
                s = a(443781),
                c = a(652904),
                u = a(670094),
                p = a(961817),
                b = a(264922),
                h = a(669504),
                m = a(228149),
                S = a(71620),
                D = a(668214),
                f = a(38562),
                g = a(659773);
            const A = (0, D.Z)()
                    .propsFromState(() => ({ dataSaverMode: g.IX, videoAutoplay: g.oO }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("DATA_USAGE_SETTINGS_SCREEN"), fetchDataUsageSettingsIfNeeded: g.MJ, updateDataSaverMode: g.Nb, updateSettings: f.VP }))
                    .withAnalytics({ page: "settings", section: "data" }),
                y = "dataSaverBooleanItem",
                w = i().eafe3288,
                E = i().cc2973a8,
                Z = i().a57a341c,
                _ = i().ab6505a8,
                k = i().a776eed8;
            class M extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleDataSaverChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateDataSaverMode: r } = this.props;
                            a.scribe({ element: e, action: t ? "on" : "off" }), r({ enabled: t }).catch(n({ ...(0, u.d)(), showToast: !0 }));
                        }),
                        (this._showVideoAutoplaySetting = (0, m.Z)());
                }
                componentDidMount() {
                    const { fetchDataUsageSettingsIfNeeded: e } = this.props;
                    e();
                }
                render() {
                    const { dataSaverMode: e, location: t, videoAutoplay: a } = this.props,
                        l = a ?? (0, p.i)();
                    return n.createElement(c.Z, null, n.createElement(b.Z, { location: t, screenType: "secondaryDetail", title: w }, n.createElement(r.Z, { description: E }), n.createElement(o.Z, { checked: e, helpText: _, label: Z, name: "dataSaverMode", onChange: this._handleDataSaverChanged, testID: y }), this._showVideoAutoplaySetting && n.createElement(d.Z, { description: h.Z[l], disabled: e, label: k, link: "/settings/autoplay" })));
                }
            }
            M.contextType = s.rC;
            const C = A(M);
        },
        145711: (e, t, a) => {
            a.r(t), a.d(t, { DisplayScreen: () => _, default: () => M });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                d = a(420412),
                l = a(844685),
                i = a(392237),
                s = a(674132),
                c = a.n(s),
                u = a(652904),
                p = a(388185),
                b = a(564297),
                h = a(177605),
                m = a(53140),
                S = a(293115),
                D = a(264922);
            const f = "aboutText",
                g = c().c4881c66,
                A = c().a257ecae,
                y = c().ce494bb4,
                w = c().c783d45e,
                E = c().h306a358,
                Z = { page: "settings", section: "display" },
                _ = ({ location: e }) => n.createElement(S.nO, { namespace: Z }, n.createElement(u.Z, null, n.createElement(D.Z, { location: e, screenType: "secondaryDetail", title: g }, n.createElement(o.ZP, { color: "gray700", size: "subtext2", style: k.aboutText, testID: f }, A), n.createElement(m.Z, null), n.createElement(d.Z, null), n.createElement(l.Z, { text: y }), n.createElement(p.Z, null), n.createElement(d.Z, null), n.createElement(l.Z, { text: w }), n.createElement(r.Z, { style: k.colorPicker }, n.createElement(h.Z, null)), n.createElement(d.Z, null), n.createElement(l.Z, { text: E }), n.createElement(r.Z, { style: k.backgroundPicker }, n.createElement(b.Z, null))))),
                k = i.default.create((e) => ({ aboutText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 }, colorPicker: { paddingVertical: e.spaces.space4 } })),
                M = _;
        },
        754393: (e, t, a) => {
            a.d(t, { o: () => i, s: () => s });
            var n = a(674132),
                r = a.n(n);
            const o = r().dae57a42,
                d = r().i7cbc154,
                l = r().e3a761ee,
                i = (e) => {
                    const t = ((e) => Object.keys(e).reduce((t, a) => (e[a] ? t + 1 : t), 0))(e);
                    switch (t) {
                        case Object.keys(e).length:
                            return "all";
                        case 0:
                            return "none";
                        default:
                            return "some";
                    }
                },
                s = (e) => ({ some: d, none: l, all: o })[i(e)];
        },
        177790: (e, t, a) => {
            a.r(t), a.d(t, { DownloadTwitterArchiveDetailedScreen: () => V, default: () => G });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                d = a(154003),
                l = a(392237),
                i = a(674132),
                s = a.n(i),
                c = a(443781),
                u = a(190286),
                p = a(688715),
                b = a(891198),
                h = a(323265),
                m = a(342453);
            const S = s().cfd2f35e,
                D = s().fc5bfd96,
                f = s().gee8110e,
                g = s().c326f156,
                A = s().c9fe9b56,
                y = s().j54b679b,
                w = s().ac63840d,
                E = s().bcd9b0ed;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showConfirmation: !1 }),
                        (this._shouldDisplayConfirmation = !1),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleNeedsConfirmationActionCellPress = () => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleConfirm = (e) => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirm();
                        });
                }
                UNSAFE_componentWillMount() {
                    this._shouldDisplayConfirmation = h.ZP.isMobileOS();
                }
                render() {
                    const {
                            disabled: e,
                            onConfirm: t,
                            url: { size_b: a, url: o },
                        } = this.props,
                        l = y({ size: Z.getSizeLabel(a) }),
                        i = e ? g : f;
                    return n.createElement(r.Z, null, this._shouldDisplayConfirmation ? n.createElement(r.Z, null, n.createElement(d.ZP, { disabled: e, onPress: this._handleNeedsConfirmationActionCellPress, size: "small", style: m.Z.narrowButton, type: "brandFilled" }, i), this.state.showConfirmation && !e ? n.createElement(u.Z, { cancelButtonLabel: S, confirmButtonLabel: D, confirmButtonLink: { pathname: (0, p.ju)(o) || "", external: !0 }, headline: A, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null) : n.createElement(d.ZP, { disabled: e, link: o ? { pathname: (0, p.ju)(o), external: !0 } : void 0, onPress: t, size: "small", style: m.Z.narrowButton, type: "brandFilled" }, i));
                }
            }
            Z.getSizeLabel = (e) => {
                const t = Number(e) / 1024;
                return t < 1024 ? w({ size: b.ZP.getFormattedCount(t) }) : E({ size: b.ZP.getFormattedCount(Math.round(t / 1024)) });
            };
            var _ = a(264922),
                k = a(569291),
                M = a(71620),
                C = a(668214),
                v = a(23478);
            const P = (0, C.Z)()
                    .propsFromState(() => ({ fetchStatus: v.UD, downloads: v.NK }))
                    .propsFromActions(() => ({ fetchDownloads: v._d, createLocalApiErrorHandler: (0, M.zr)("MARK_DATA_AS_DOWNLOADED"), markDataAsDownloaded: v.VL }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "download_data" }),
                I = s().f56af9cc,
                T = s().b2ed92c4,
                B = s().ce5d2c46,
                x = s().bed6a87c,
                N = s().b24b4768,
                L = s().a0c3f812,
                R = s().ba2e82a1,
                O = s().eea30bb5,
                F = s().f2cde471,
                z = s().b7ce9dbf,
                H = s().d3de4c97;
            class V extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const {
                                downloads: { nonFailed: e },
                            } = this.props;
                            return e.length ? n.createElement(r.Z, null, e.map(this._renderDownloadItems)) : this._renderEmptyState();
                        }),
                        (this._renderDownloadItems = (e, t) => n.createElement(r.Z, { key: t }, e.urls && "COMPLETED" === e.status ? e.urls.map(this._renderDownloadButtons.bind(this, e)) : this._renderUnavailableButton(e))),
                        (this._handleConfirm = (e) => () => {
                            const { analytics: t, createLocalApiErrorHandler: a, fetchDownloads: n } = this.props;
                            !e.downloaded_at && e.url && this.props.markDataAsDownloaded({ url: e.url }).then(n).catch(a()), t.scribe({ element: "download_button", action: "click" });
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribePageImpression();
                }
                render() {
                    const { fetchDownloads: e, fetchStatus: t, location: a } = this.props;
                    return n.createElement(_.Z, { location: a, title: I }, n.createElement(k.Z, { fetch: e, fetchStatus: t, renderChildren: this._render }));
                }
                _renderEmptyState() {
                    return n.createElement(r.Z, { style: U.emptyState }, n.createElement(o.ZP, { size: "title4" }, x), n.createElement(o.ZP, { color: "gray700", style: U.emptyStateDescription }, L), n.createElement(d.ZP, { link: "/settings/download_your_data", size: "small", style: m.Z.narrowButton, type: "brandFilled" }, N));
                }
                _renderDownloadButtons(e, t, a, d) {
                    const l = a + 1,
                        i = d.length,
                        s = !!t?.url;
                    return n.createElement(r.Z, { key: `${l}`, style: [m.Z.narrowButtonRow, m.Z.bottomBorder, m.Z.labelContainer] }, n.createElement(r.Z, null, n.createElement(o.ZP, { weight: "bold" }, H({ currentIndex: l, count: i })), e.generated ? n.createElement(o.ZP, { color: "gray700" }, O({ date: R(new Date(e.generated)) })) : null, e.expires ? n.createElement(o.ZP, { color: "gray700" }, F({ date: R(new Date(e.expires)) })) : null, t.size_b ? n.createElement(o.ZP, { color: "gray700" }, z({ size: Z.getSizeLabel(t.size_b) })) : null), n.createElement(Z, { disabled: !s, onConfirm: this._handleConfirm(t), url: t }));
                }
                _renderUnavailableButton(e) {
                    return n.createElement(r.Z, { style: [m.Z.narrowButtonRow, m.Z.bottomBorder, m.Z.labelContainer] }, n.createElement(o.ZP, { weight: "bold" }, H({ currentIndex: 1, count: 1 })), n.createElement(d.ZP, { disabled: !0, size: "small", style: m.Z.narrowButton, type: "brandFilled" }, "INPROGRESS" === e.status ? T : B));
                }
            }
            V.contextType = c.rC;
            const U = l.default.create((e) => ({ emptyState: { display: "flex", paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space40, alignItems: "center" }, emptyStateDescription: { paddingVertical: e.spaces.space20 } })),
                G = P(V);
        },
        342453: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(392237);
            const r = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                o = n.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, titleCase: { textTransform: "capitalize" }, floatingLink: { paddingStart: e.spaces.space20 }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, locationInfo: { alignItems: "center", flexDirection: "row", width: "100%" }, locationIcon: { marginEnd: e.spaces.space12 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space20 }, noLeftPadding: { paddingStart: 0 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { ...r(e) }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, helpTextExtraPadded: { paddingTop: e.spaces.space12 }, featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 }, featureDisabledTitle: { paddingBottom: e.spaces.space4 }, cursor: { cursor: "pointer" } }));
        },
        669504: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(674132),
                r = a.n(n),
                o = a(870976);
            const d = r().g1888dc2,
                l = r().f724d1aa,
                i = r().cf6472c2,
                s = { [o.Z.Off]: d, [o.Z.WiFiOnly]: l, [o.Z.Always]: i };
        },
        924455: (e, t, a) => {
            a.r(t), a.d(t, { SettingsVideoAutoplay: () => M, default: () => C });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(688715),
                d = a(101890),
                l = a(731708),
                i = a(674132),
                s = a.n(i),
                c = a(443781),
                u = a(652904),
                p = a(670094),
                b = a(870976),
                h = a(961817),
                m = a(264922),
                S = a(669504),
                D = a(71620),
                f = a(668214),
                g = a(659773);
            const A = (0, f.Z)()
                .propsFromState(() => ({ videoAutoplay: g.oO, dataSaverMode: g.IX }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("DATA_USAGE_SETTINGS_SCREEN"), updateVideoAutoplay: g.Qo }))
                .withAnalytics({ page: "settings", section: "autoplay" });
            var y = a(228149);
            const w = s().a776eed8,
                E = s().ede134f2,
                Z = s().i859a9d4,
                _ = (0, o.ju)("https://help.x.com/using-twitter/twitter-videos"),
                k = (e) => ({ value: e, label: S.Z[e] });
            class M extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleItemChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateVideoAutoplay: r } = this.props;
                            a.scribe({ element: "videoAutoplay", action: t.toLowerCase() }), r(b.Z[t]).catch(n({ ...(0, p.d)(), showToast: !0 }));
                        });
                }
                componentDidMount() {
                    const { dataSaverMode: e } = this.props;
                    (!e && (0, y.Z)()) || this.props.history.replace("/settings/data");
                }
                _getOptions(e) {
                    const t = [];
                    return t.push(k(b.Z.Always)), (b.P || e === b.Z.WiFiOnly) && t.push(k(b.Z.WiFiOnly)), t.push(k(b.Z.Off)), t;
                }
                render() {
                    const { location: e, videoAutoplay: t } = this.props,
                        a = t ?? (0, h.i)();
                    return n.createElement(u.Z, null, n.createElement(m.Z, { location: e, title: w }, n.createElement(r.Z, null, n.createElement(d.Z, { description: n.createElement(n.Fragment, null, `${E} `, n.createElement(l.ZP, { link: _ }, Z)), label: w, name: "video_autoplay", onChange: this._handleItemChanged, options: this._getOptions(a), value: a }))));
                }
            }
            M.contextType = c.rC;
            const C = A(M);
        },
        228149: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(172459);
            function r() {
                return (0, n.Z)();
            }
        },
        264922: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                r = a(108362),
                o = a(420412),
                d = a(154003),
                l = a(392237),
                i = a(674132),
                s = a.n(i),
                c = a(290402),
                u = a(253493),
                p = a(71620),
                b = a(668214),
                h = a(38562),
                m = a(919022);
            const S = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: h.UD, viewerUser: m.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: h.Sb, createLocalApiErrorHandler: (0, p.zr)("SETTINGS_LOADER") })),
                D = "settingsDetailSave",
                f = s().i2209530;
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return n.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: a, submitLabel: l, submitType: i, withMarginBottom: s } = this.props;
                            return n.createElement(r.Z, { style: [A.contentRoot, s && A.withMarginBottom] }, e, t ? n.createElement(n.Fragment, null, n.createElement(o.Z, null), n.createElement(r.Z, { style: A.buttonContainer }, n.createElement(d.ZP, { disabled: a, onPress: t, style: A.button, testID: D, type: i }, l))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        a = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === a ? "/" : a;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: a, secondaryBar: r, title: o, viewerUser: d, withBottomBorder: l } = this.props,
                        i = this.getBackLocation(),
                        s = d ? `@${d.screen_name}` : void 0;
                    return n.createElement(u.Z, { backLocation: i, onBackClick: e, rightControl: t, screenType: a, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: s, title: o, withBottomBorder: l }, d ? this._renderWithFetchSettings() : this._render());
                }
            }
            g.defaultProps = { submitLabel: f, submitType: "brandFilled", withMarginBottom: !0 };
            const A = l.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${l.default.iPhoneOffsetBottom})` } })),
                y = S(g);
        },
        569291: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(615656),
                o = a(290402),
                d = a(312771),
                l = a(615027),
                i = a(71620),
                s = a(668214);
            const c = (0, s.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("TWO_FACTOR_AUTHENTICATION_GATEWAY") }));
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [r.ZP.GenericForbidden]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        [r.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, renderChildren: t } = this.props,
                        { verificationRequired: a } = this.state,
                        r = e === d.ZP.FAILED && a;
                    return n.createElement(n.Fragment, null, r ? n.createElement(l.Z, { to: "/i/flow/verify_account_ownership" }) : n.createElement(o.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: t }));
                }
            }
            const p = c.forwardRef(u);
        },
        855632: (e, t, a) => {
            a.r(t), a.d(t, { SettingsPage: () => Pe, default: () => Ie });
            var n = a(202784),
                r = a(99107),
                o = a(325686),
                d = a(688715),
                l = a(537392),
                i = a(779610),
                s = a(844685),
                c = a(731708),
                u = a(420412),
                p = a(674132),
                b = a.n(p),
                h = a(290402),
                m = a(306114),
                S = a(741049),
                D = a(443781),
                f = a(664918),
                g = a(652904),
                A = a(880647),
                y = a(918621),
                w = a(528603),
                E = (a(136728), a(107267)),
                Z = a(457311),
                _ = a(392237),
                k = a(666536),
                M = a(934862),
                C = a(655352),
                v = a(339110),
                P = a(725516);
            function I({ results: e, setting: t, type: a }) {
                const n = { id: t.id, type: "setting", data: { text: t.title, location: { pathname: t.path, openInSameFrame: !0 } } };
                "setting" === a ? e.push({ ...n, type: "setting" }) : "setting_group" === a && e.push({ ...n, type: "setting_group" });
            }
            const T = b().d94f12b6,
                B = b().b92a21d9,
                x = b().c170a564,
                N = b().ba8f6f82,
                L = { component: "search", element: "result" },
                R = 500,
                O = 100;
            function F(e) {
                const { isSearching: t, onChange: a, searchIndex: r } = e,
                    d = (0, P.z)(),
                    l = (0, E.useHistory)(),
                    [i, s] = n.useState(""),
                    [u, p] = n.useState(void 0),
                    [b, h] = n.useState(!1),
                    [m, S] = n.useState([]),
                    D = n.useMemo(
                        () =>
                            (0, k.Z)((e) => {
                                d.scribe({ ...L, action: e ? "show" : "empty" });
                            }, R),
                        [d],
                    ),
                    f = i.toLocaleLowerCase().trim(),
                    g = Boolean(f.length);
                n.useEffect(() => {
                    if (g) {
                        const e = [];
                        for (const t of r) {
                            let a = !1;
                            Array.isArray(t.items) &&
                                t.items.forEach((n) => {
                                    (0, w.Ik)(f, n) && (a || ((a = !0), I({ results: e, setting: t, type: "setting_group" })), I({ results: e, setting: n, type: "setting" }));
                                }),
                                !a && (0, w.Ik)(f, t) && I({ results: e, setting: t, type: "setting_group" });
                        }
                        S(e), f !== u && (p(f), D(e.length));
                    } else S([]);
                }, [f, g, r, u, D]);
                const A = n.useCallback(() => {
                        a(!1);
                    }, [a]),
                    y = n.useCallback(() => {
                        a(!0);
                    }, [a]),
                    _ = n.useCallback(() => {
                        i && a(!0);
                    }, [a, i]),
                    F = n.useMemo(
                        () =>
                            (0, k.Z)((e) => {
                                a(!0), s(e);
                            }, O),
                        [a],
                    ),
                    H = n.useCallback(
                        (e) => {
                            !b && e.trim().length && (h(!0), d.scribe({ component: "search", element: "search_box", action: "began_typing" })), F(e);
                        },
                        [b, d, F],
                    );
                return n.createElement(M.Z, {
                    alwaysOpen: t,
                    dropdownPosition: "inline",
                    inputStyle: z.input,
                    items: m,
                    onBackClicked: (0, C.ZP)() ? A : void 0,
                    onClick: y,
                    onFocus: _,
                    onItemClick: (e) => {
                        if ("setting" === e.type || "setting_group" === e.type) {
                            const t = "string" == typeof e.data.location ? e.data.location : e.data.location.pathname;
                            d.scribe({ ...L, action: "click" }), l.push(t, { backLocation: window.location.pathname });
                        }
                    },
                    onQueryChange: H,
                    placeholder: N,
                    renderEmptyState: ({ style: e }) => (g ? n.createElement(Z.Z, { header: B({ query: i }), message: x, style: e }) : n.createElement(o.Z, { style: [e, z.emptyState] }, n.createElement(c.ZP, { align: "center", color: "gray700" }, T))),
                    rounded: !0,
                    shouldRenderEmptyState: t && (!g || 0 === m.length),
                    source: v._4.SearchBox,
                });
            }
            const z = _.default.create((e) => ({ emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 }, input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 } }));
            var H = a(24949),
                V = a(71620),
                U = a(668214),
                G = a(558369),
                j = a(205253),
                W = a(390387),
                q = a(919022),
                $ = a(312771);
            const Y = (0, H.P1)(W.Qb, j.I3, (e, t) => (e ? $.ZP.LOADED : t)),
                Q = (0, U.Z)()
                    .propsFromState(() => ({ fetchStatus: Y, viewerUser: q.ZP.selectViewerUser, isDelegate: W.Lz, delegateRole: W.vd, isActiveCreator: W.WM, isApprovedCreator: W.YT, personalizationPreferences: j.kQ, featureSwitches: G.RI }))
                    .adjustStateProps(({ featureSwitches: e, ...t }) => ({ withEditableFSes: Object.keys(e.debug).length > 0, ...t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, V.zr)("SETTINGS_SCREEN"), fetchPreferencesIfNeeded: j.CP }))
                    .withAnalytics({ page: "settings" });
            var X = a(264922),
                K = a(754393),
                J = a(267966);
            const ee = { loggedOutPrivacySection: "loggedOutPrivacySection", accountLink: "accountLink", accountAccessLink: "accountAccessLink", privacyAndSafetyLink: "privacyAndSafetyLink", notificationsLink: "notificationsLink", accessibilityLink: "accessibilityLink", aboutLink: "aboutLink", displayLink: "displayLink", dataLink: "dataLink", helpCenterLink: "helpCenterLink" },
                te = b().f66d24be,
                ae = b().e3719c16,
                ne = b().cad53944,
                re = b().bb081ea2,
                oe = b().e95b9448,
                de = b().eb75875e,
                le = b().c4881c66,
                ie = b().eafe3288,
                se = b().f458a3b2,
                ce = b().e8f57e08,
                ue = b().j7ad754a,
                pe = b().ja94f34e,
                be = b().d0b74a5a,
                he = b().c05e8024,
                me = b().bdc6f5b8,
                Se = b().f8645654,
                De = b().cf9b166a,
                fe = b().bdfa2b8c,
                ge = b().ea848de8,
                Ae = b().df483b48,
                ye = b().bd05add8,
                we = b().c818c60c,
                Ee = b().d299431c,
                Ze = b().f75d1806,
                _e = b().gaac710a,
                ke = b().c429e3ba,
                Me = { external: !0, pathname: (0, d.ju)("https://support.x.com/") },
                Ce = [
                    { featureSwitch: "dash_region_specific_de_and_tr_media_transparency_items_enabled", text: b().aeede01a, link: { external: !0, pathname: (0, d.ju)("https://legal.x.com/imprint.html") } },
                    { text: b().da137d9a, featureSwitch: "dash_region_specific_de_media_transparency_items_enabled", link: { external: !0, pathname: (0, d.ju)("https://help.x.com/de/using-twitter/twitter-timeline") } },
                ],
                ve = () => {
                    const e = n.useContext(D.rC),
                        t = (0, l.iv)().width,
                        a = A.Z.isOneColumnLayout(t) || A.Z.isOneColumnSquishedLayout(t);
                    return Ce.map((t) => {
                        const { featureSwitch: r, link: o, text: d } = t;
                        if (e.featureSwitches.isTrue(r) && a) return n.createElement(i.Z, { key: d, label: d, link: o });
                    });
                };
            function Pe(e) {
                const t = n.useContext(D.rC),
                    [a, d] = n.useState(!1);
                n.useEffect(() => {
                    e.viewerUser || e.fetchPreferencesIfNeeded().catch(e.createLocalApiErrorHandler());
                }, [e, e.viewerUser]);
                const l = (0, m.Z)(),
                    p = () => {
                        const e = (0, y.Xh)(r.b7, t.featureSwitches);
                        return n.createElement(o.Z, { testID: ee.loggedOutPrivacySection }, n.createElement(s.Z, { text: se }), n.createElement(S.Z, { description: e ? P() : void 0, label: ce, link: "/settings/account/personalization" }), n.createElement(S.Z, { label: ue, link: "/settings/your_twitter_data" }), t.featureSwitches.isTrue("responsive_web_cookie_compliance_banner_enabled") ? n.createElement(S.Z, { description: he, label: be, link: "/settings/cookie_preferences" }) : null, n.createElement(c.ZP, { style: J.Z.descriptionText }, pe), E(), n.createElement(ve, null));
                    },
                    { delegateRole: b } = e,
                    A = () => {
                        const { searchIndex: t } = e;
                        return n.createElement(F, {
                            isSearching: a,
                            onChange: (e) => {
                                d(e);
                            },
                            searchIndex: t,
                        });
                    },
                    E = () => n.createElement(o.Z, null, n.createElement(u.Z, null), n.createElement(s.Z, { text: oe }), Z(), I() ? n.createElement(S.Z, { label: le, link: "/settings/display", testID: ee.displayLink }) : null, I() ? n.createElement(S.Z, { label: ie, link: "/settings/data", testID: ee.dataLink }) : null, I() ? n.createElement(S.Z, { label: ae, link: "/settings/accessibility", testID: ee.accessibilityLink }) : null, n.createElement(S.Z, { label: fe, link: "/settings/about", testID: ee.aboutLink })),
                    Z = () => (e.withEditableFSes ? n.createElement(n.Fragment, null, n.createElement(S.Z, { label: Ae, link: "/settings/feature_switches" }), n.createElement(S.Z, { label: ge, link: "/settings/earlybird_settings" })) : null),
                    _ = () => {
                        const { userClaims: e } = t;
                        return e.hasSubscription("one_dollar") ? n.createElement(S.Z, { label: ye, link: "/settings/not_a_bot" }) : null;
                    },
                    k = () => {
                        const { searchIndex: a } = e,
                            { featureSwitches: r, userClaims: o } = t,
                            d = a.find((e) => e.id === w.VZ.TwitterBlue)?.path;
                        if (o.isAnyPremiumSubscriber() || (!o.isAnyPremiumSubscriber() && r.isTrue("subscriptions_sign_up_enabled"))) return d ? n.createElement(S.Z, { label: Ze, link: d }) : null;
                    },
                    M = (a) => {
                        const { featureSwitches: r } = t,
                            { searchIndex: o } = e,
                            d = o.find((e) => e.id === w.VZ.Analytics)?.path;
                        if (a && r.isTrue("subscriptions_upsells_settings_analytics_upsell_enabled")) return d ? n.createElement(S.Z, { label: we, link: d }) : null;
                    },
                    C = () => {
                        const { searchIndex: a } = e,
                            { featureSwitches: r } = t,
                            o = a.find((e) => e.id === w.VZ.Subscription)?.path;
                        if (r.isTrue("responsive_web_subscriptions_setting_enabled")) return o ? n.createElement(S.Z, { label: ke, link: o }) : null;
                    },
                    v = () => (t.featureSwitches.isTrue("report_center_mvp_r2_enabled") ? n.createElement(S.Z, { label: _e, link: "/settings/report-center" }) : null),
                    P = () => {
                        const { personalizationPreferences: t } = e;
                        return (0, K.s)(t);
                    },
                    I = () => !!e.viewerUser,
                    { fetchStatus: T, isDelegate: B, location: x } = e;
                return n.createElement(
                    g.Z,
                    { locationKey: "settingsRoot" },
                    n.createElement(
                        X.Z,
                        {
                            location: x,
                            onBackClick: () => {
                                const { history: t } = e;
                                a ? d(!1) : t.goBack();
                            },
                            screenType: "root",
                            title: re,
                        },
                        I() || (0, f.D0)(t.featureSwitches) === f.fD.AcceptAllCookies
                            ? n.createElement(h.Z, {
                                  fetchStatus: T,
                                  onRequestRetry: () => {
                                      e.fetchPreferencesIfNeeded().catch(e.createLocalApiErrorHandler());
                                  },
                                  render: t.viewerUserId ? (B ? () => n.createElement(n.Fragment, null, a ? null : n.createElement(o.Z, { role: "tablist" }, "Admin" === b && n.createElement(S.Z, { label: Se, link: "/settings/security_and_account_access", testID: ee.accountAccessLink }))) : () => n.createElement(n.Fragment, null, A(), a ? null : n.createElement(o.Z, { role: "tablist" }, n.createElement(S.Z, { label: me, link: "/settings/account", testID: ee.accountLink }), M(l), n.createElement(S.Z, { label: Ee, link: "/settings/monetization" }), k(), C(), n.createElement(S.Z, { label: Se, link: "/settings/security_and_account_access", testID: ee.accountAccessLink }), n.createElement(S.Z, { label: ne, link: "/settings/privacy_and_safety", testID: ee.privacyAndSafetyLink }), v(), n.createElement(S.Z, { label: de, link: "/settings/notifications", testID: ee.notificationsLink }), n.createElement(S.Z, { label: De, link: "/settings/accessibility_display_and_languages", testID: ee.accessibilityLink }), _(), n.createElement(S.Z, { label: fe, link: "/settings/about", testID: ee.aboutLink }), n.createElement(i.Z, { label: te, link: Me, testID: ee.helpCenterLink }), Z()))) : p,
                              })
                            : p(),
                    ),
                );
            }
            const Ie = Q(Pe);
        },
        267966: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(392237);
            const r = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                o = n.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...r(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-8ed0fac5.48780a0a.js.map
