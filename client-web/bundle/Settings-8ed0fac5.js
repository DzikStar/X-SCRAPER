"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-8ed0fac5"],
    {
        670094: (e, t, a) => {
            a.d(t, { d: () => i });
            var n = a(111677),
                o = a.n(n),
                r = a(88656),
                l = a(601576),
                d = a(163889);
            const s = o().a5d4fda0,
                i = (e = s, t = !0) => ({
                    customErrorHandler: (a) => {
                        const { context: n } = a;
                        return (!a) instanceof r.Z && (a.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, d.ZP)(a, { extra: { context: n, isStrato: !0 } }), t ? (0, l.mf)({ text: e }) : [];
                    },
                });
        },
        23478: (e, t, a) => {
            a.d(t, { NK: () => m, Ns: () => p, UD: () => b, VL: () => S, _d: () => D, c: () => g, fm: () => f, n$: () => u });
            var n = a(129270),
                o = a(499627),
                r = a(917799),
                l = a(312771);
            const d = "userData",
                s = `rweb/${d}`,
                i = (0, r.dg)(s, "FETCH_DOWNLOADS"),
                c = (0, r.dg)(s, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                p = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                h = { fetchStatus: l.ZP.None, downloads: { all: [], nonFailed: [] } };
            o.Z.register({
                [d]: function (e = h, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case i.SUCCESS: {
                            const a = t.payload || [],
                                n = a.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: l.ZP.LOADED, downloads: { ...e.downloads, all: a, nonFailed: n } };
                        }
                        case i.REQUEST:
                            return { ...e, fetchStatus: l.ZP.LOADING };
                        case i.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: l.ZP.FAILED };
                        case c.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case c.FAILURE:
                            return { ...e, fetchStatus: l.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const m = (e) => e[d].downloads,
                b = (e) => e[d].fetchStatus,
                g = (e) => 503 === e[d].error?.status,
                D =
                    () =>
                    (e, t, { api: a }) =>
                        (0, r._O)(e, { request: a.withEndpoint(n.Z).fetchDownloads })({ actionTypes: i, context: "FETCH_DOWNLOADS" }),
                f =
                    () =>
                    (e, t, { api: a }) =>
                        (0, r._O)(e, { request: a.withEndpoint(n.Z).createDataDownload })({ actionTypes: c, context: "CREATE_DOWNLOAD" }),
                S =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, r.Vg)(t, { params: e, request: o.withEndpoint(n.Z).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        343697: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var n = a(807896),
                o = (a(136728), a(202784)),
                r = a(107267),
                l = a(717988),
                d = a(923128),
                s = a(221716),
                i = a(528603),
                c = a(914115),
                u = a(76920);
            const p = (0, l.p)(
                    () =>
                        Promise.all([
                            a.e("icons.0"),
                            a.e("icons.13"),
                            a.e("icons.22"),
                            a.e("icons.29"),
                            a.e("icons.5"),
                            a.e("icons.7"),
                            a.e("icons.1"),
                            a.e("icons.15"),
                            a.e("icons.25"),
                            a.e("icons.10"),
                            a.e("icons.20"),
                            a.e("icons.14"),
                            a.e("icons.11"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.24"),
                            a.e("icons.16"),
                            a.e("icons.17"),
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
                            a.e("icons.6"),
                            a.e("icons.23"),
                            a.e("icons.26"),
                            a.e("icons.3"),
                            a.e("icons.28"),
                            a.e("icons.9"),
                            a.e("icons.8"),
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
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                            a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            a.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                            a.e("bundle.Settings-e907d115"),
                            a.e("bundle.Settings-9f4db315"),
                            a.e("bundle.Settings-8ed0fac5"),
                        ]).then(a.bind(a, 855632)),
                    { shouldMigrateToX: !0 },
                ),
                h = () => {
                    const e = (0, u.cH)(),
                        t = [];
                    for (const a of e) {
                        t.push(a.getRoute?.(a.path)), a.synonyms.push((0, i.Bz)(a.title));
                        for (const e of a.items) t.push(e.getRoute?.(e.path)), e.synonyms.push((0, i.Bz)(e.title));
                    }
                    const a = o.useCallback(
                        (t) => {
                            const a = e.filter((e) => e.isSearchable).map((e) => ({ ...e, items: e.items.filter((e) => e.isSearchable) }));
                            return o.createElement(p, (0, n.Z)({}, t, { searchIndex: a }));
                        },
                        [e],
                    );
                    return o.createElement(s.Z, { rootComponent: a, rootDetailContent: c.vB }, t, o.createElement(r.Route, { component: d.Z }));
                };
        },
        634238: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            var n = a(807896),
                o = a(202784),
                r = a(107267),
                l = a(202336),
                d = a(923128),
                s = a(300497),
                i = a(221716),
                c = a(1167),
                u = a(903360),
                p = a(430717);
            const h = (e) => o.createElement(c.ZP, (0, n.Z)({}, e, { component: u.N$, subscriptionNames: p.Vt })),
                m = (e) => o.createElement(c.ZP, (0, n.Z)({}, e, { component: u.LY, subscriptionNames: p.Vt })),
                b = (e) => o.createElement(s.Z, (0, n.Z)({}, e, { component: m, fallbackComponent: d.Z, featureSwitchName: "recruiting_promoted_jobs_enabled" })),
                g = () => null,
                D = () => o.createElement(i.Z, { rootComponent: h, rootDetailContent: g }, o.createElement(r.Route, { component: b, key: l.f.JOB_PROMOTION_SETTINGS, path: l.f.JOB_PROMOTION_SETTINGS }), o.createElement(r.Route, { component: d.Z }));
        },
        249546: (e, t, a) => {
            a.r(t), a.d(t, { AppInfo: () => A, SettingsAboutScreen: () => k, default: () => M });
            a(136728);
            var n = a(202784),
                o = a(325686),
                r = a(844685),
                l = a(779610),
                d = a(688715),
                s = a(943401),
                i = a(420412),
                c = a(731708),
                u = a(111677),
                p = a.n(u),
                h = a(393805),
                m = a(443781),
                b = a(652904),
                g = a(725516),
                D = a(264922),
                f = a(267966);
            const S = { aboutScreen: "aboutScreen" },
                E = p().cedbb01c,
                y = p().b4f917d0,
                w = p().bdfa2b8c,
                Z = p().b8692262,
                _ = p().c0398892;
            function A(e) {
                const t = [];
                return t.push(n.createElement(r.Z, { text: _ })), t.push(n.createElement(l.Z, { label: _, link: { external: !0, pathname: (0, d.ju)("https://x.com/i/release_notes") } })), n.Children.toArray(t);
            }
            function k(e) {
                const { location: t } = e,
                    { featureSwitches: a } = (0, m.QZ)(),
                    d = (0, h.ZP)()
                        .filter((e) => !e.excludeOnSettingsPage && (!e.featureSwitch || a.isTrue(e.featureSwitch)))
                        .sort((e, t) => e.text.localeCompare(t.text)),
                    u = d.filter((e) => e.legal && e.link),
                    p = d.filter((e) => !e.legal && e.link),
                    g = d.filter((e) => !e.link);
                return n.createElement(
                    b.Z,
                    null,
                    n.createElement(
                        D.Z,
                        { location: t, screenType: "primaryDetail", title: w },
                        n.createElement(
                            o.Z,
                            { testID: S.aboutScreen },
                            n.createElement(s.Z, { description: Z }),
                            n.createElement(A, null),
                            n.createElement(i.Z, null),
                            n.createElement(r.Z, { text: E }),
                            u.map((e, t) => n.createElement(l.Z, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })),
                            g.map((e) => n.createElement(c.ZP, { color: "gray700", key: e.text, size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, e.text)),
                            n.createElement(i.Z, null),
                            n.createElement(r.Z, { text: y }),
                            p.map((e, t) => n.createElement(l.Z, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })),
                        ),
                    ),
                );
            }
            const M = (0, g.Z)(k, { page: "settings", section: "about" });
        },
        337947: (e, t, a) => {
            a.r(t), a.d(t, { AccessibilityScreen: () => W, default: () => q });
            var n = a(202784),
                o = a(325686),
                r = a(688715),
                l = a(461756),
                d = a(392237),
                s = a(943401),
                i = a(844685),
                c = a(954110),
                u = a(420412),
                p = a(779610),
                h = a(111677),
                m = a.n(h),
                b = a(534763),
                g = a(443781),
                D = a(652904),
                f = a(697702),
                S = a(961817),
                E = a(264922),
                y = a(669504),
                w = a(228149),
                Z = a(71620),
                _ = a(668214),
                A = a(38562),
                k = a(88458),
                M = a(659773);
            const C = (0, _.Z)()
                    .propsFromState(() => ({ altTextNudgeType: k.jW, dataSaverMode: M.IX, reducedMotionEnabled: A.DM, videoAutoplay: M.oO, highContrastEnabled: A.Db }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("ACCESSIBILITY_SETTINGS_SCREEN"), fetchAltTextPromptPreferenceIfNeeded: k.Xd, updateAltTextPromptPreference: k.H1, updateSettings: A.VP }))
                    .withAnalytics({ page: "settings", section: "accessibility" }),
                P = "accessibilityScreen",
                I = m().e3719c16,
                T = m().b833bcde,
                x = m().d5b646be,
                v = m().jfe6a3a0,
                N = m().add55c98,
                L = m().e8c72272,
                B = m().dba2cdd2,
                R = m().d070244e,
                O = m().icfa5e8c,
                F = m().ae41b002,
                z = m().h9d1cfae,
                H = m().c878e9f8,
                V = m().a776eed8,
                U = m().bbd1fc7c,
                G = m().ac865cf0,
                j = (0, r.ju)("https://help.x.com/resources/accessibility");
            class W extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._showAltTextPromptPreferenceSetting = this.context.featureSwitches.allTrue(["responsive_web_alt_text_nudges_enabled", "responsive_web_alt_text_nudges_settings_enabled"])),
                        (this._handleReducedMotionChanged = (e, t) => {
                            this._handleSettingChanged(e, t), l.Z.setReducedMotion(t);
                        }),
                        (this._handleHighContrastChanged = (e, t) => {
                            this._handleSettingChanged(e, t), d.default.setHighContrast(t);
                        }),
                        (this._handleAltTextNudgeTypeChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateAltTextPromptPreference: o } = this.props,
                                r = t ? f.f.Prompt : null;
                            a.scribe({ element: `${e}_${r || "off"}`, action: "selected" }), o(r).catch(n({ showToast: !0 }));
                        }),
                        (this._handleSettingChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateSettings: o } = this.props;
                            a.scribe({ element: e, action: t ? "on" : "off" }), o({ [e]: t }).catch(n({ showToast: !0 }));
                        }),
                        (this._showVideoAutoplaySetting = (0, w.Z)());
                }
                componentDidMount() {
                    const { fetchAltTextPromptPreferenceIfNeeded: e } = this.props;
                    this._showAltTextPromptPreferenceSetting && e({ shouldImpress: !0 });
                }
                render() {
                    const { altTextNudgeType: e, dataSaverMode: t, highContrastEnabled: a, location: r, reducedMotionEnabled: l, videoAutoplay: d } = this.props,
                        h = window.matchMedia && window.matchMedia("(prefers-reduced-motion)").matches,
                        m = this._showAltTextPromptPreferenceSetting,
                        g = d ?? (0, S.i)();
                    return n.createElement(D.Z, null, n.createElement(E.Z, { location: r, screenType: "secondaryDetail", title: I }, n.createElement(o.Z, { testID: P }, n.createElement(s.Z, { description: T }), n.createElement(i.Z, { text: x }), n.createElement(c.Z, { checked: a, helpText: B, label: L, name: "highContrastEnabled", onChange: this._handleHighContrastChanged })), this._showVideoAutoplaySetting ? n.createElement(o.Z, null, n.createElement(u.Z, null), n.createElement(i.Z, { text: v }), n.createElement(c.Z, { checked: l || h, disabled: h, helpText: h ? F : O, label: R, name: "reducedMotionEnabled", onChange: this._handleReducedMotionChanged }), n.createElement(p.Z, { description: y.Z[g], disabled: t, label: V, link: "/settings/autoplay" })) : null, m ? n.createElement(o.Z, null, n.createElement(u.Z, null), n.createElement(i.Z, { text: N }), this._showAltTextPromptPreferenceSetting ? n.createElement(c.Z, { checked: e === f.f.Prompt, helpText: H, label: z, name: "altTextNudgeType", onChange: this._handleAltTextNudgeTypeChanged }) : null) : null, n.createElement(o.Z, null, n.createElement(u.Z, null), n.createElement(i.Z, { text: U }), n.createElement(b.b, { label: G, link: j }))));
                }
            }
            W.contextType = g.rC;
            const q = C(W);
        },
        167783: (e, t, a) => {
            a.r(t), a.d(t, { DataUsageScreen: () => M, default: () => C });
            var n = a(202784),
                o = a(943401),
                r = a(954110),
                l = a(779610),
                d = a(111677),
                s = a.n(d),
                i = a(443781),
                c = a(652904),
                u = a(670094),
                p = a(961817),
                h = a(264922),
                m = a(669504),
                b = a(228149),
                g = a(71620),
                D = a(668214),
                f = a(38562),
                S = a(659773);
            const E = (0, D.Z)()
                    .propsFromState(() => ({ dataSaverMode: S.IX, videoAutoplay: S.oO }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("DATA_USAGE_SETTINGS_SCREEN"), fetchDataUsageSettingsIfNeeded: S.MJ, updateDataSaverMode: S.Nb, updateSettings: f.VP }))
                    .withAnalytics({ page: "settings", section: "data" }),
                y = "dataSaverBooleanItem",
                w = s().eafe3288,
                Z = s().cc2973a8,
                _ = s().a57a341c,
                A = s().ab6505a8,
                k = s().a776eed8;
            class M extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleDataSaverChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateDataSaverMode: o } = this.props;
                            a.scribe({ element: e, action: t ? "on" : "off" }), o({ enabled: t }).catch(n({ ...(0, u.d)(), showToast: !0 }));
                        }),
                        (this._showVideoAutoplaySetting = (0, b.Z)());
                }
                componentDidMount() {
                    const { fetchDataUsageSettingsIfNeeded: e } = this.props;
                    e();
                }
                render() {
                    const { dataSaverMode: e, location: t, videoAutoplay: a } = this.props,
                        d = a ?? (0, p.i)();
                    return n.createElement(c.Z, null, n.createElement(h.Z, { location: t, screenType: "secondaryDetail", title: w }, n.createElement(o.Z, { description: Z }), n.createElement(r.Z, { checked: e, helpText: A, label: _, name: "dataSaverMode", onChange: this._handleDataSaverChanged, testID: y }), this._showVideoAutoplaySetting && n.createElement(l.Z, { description: m.Z[d], disabled: e, label: k, link: "/settings/autoplay" })));
                }
            }
            M.contextType = i.rC;
            const C = E(M);
        },
        145711: (e, t, a) => {
            a.r(t), a.d(t, { DisplayScreen: () => A, default: () => M });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                l = a(420412),
                d = a(844685),
                s = a(392237),
                i = a(111677),
                c = a.n(i),
                u = a(652904),
                p = a(388185),
                h = a(564297),
                m = a(177605),
                b = a(53140),
                g = a(293115),
                D = a(264922);
            const f = "aboutText",
                S = c().c4881c66,
                E = c().a257ecae,
                y = c().ce494bb4,
                w = c().c783d45e,
                Z = c().h306a358,
                _ = { page: "settings", section: "display" },
                A = ({ location: e }) => n.createElement(g.nO, { namespace: _ }, n.createElement(u.Z, null, n.createElement(D.Z, { location: e, screenType: "secondaryDetail", title: S }, n.createElement(r.ZP, { color: "gray700", size: "subtext2", style: k.aboutText, testID: f }, E), n.createElement(b.Z, null), n.createElement(l.Z, null), n.createElement(d.Z, { text: y }), n.createElement(p.Z, null), n.createElement(l.Z, null), n.createElement(d.Z, { text: w }), n.createElement(o.Z, { style: k.colorPicker }, n.createElement(m.Z, null)), n.createElement(l.Z, null), n.createElement(d.Z, { text: Z }), n.createElement(o.Z, { style: k.backgroundPicker }, n.createElement(h.Z, null))))),
                k = s.default.create((e) => ({ aboutText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 }, colorPicker: { paddingVertical: e.spaces.space4 } })),
                M = A;
        },
        754393: (e, t, a) => {
            a.d(t, { o: () => s, s: () => i });
            var n = a(111677),
                o = a.n(n);
            const r = o().dae57a42,
                l = o().i7cbc154,
                d = o().e3a761ee,
                s = (e) => {
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
                i = (e) => ({ some: l, none: d, all: r })[s(e)];
        },
        177790: (e, t, a) => {
            a.r(t), a.d(t, { DownloadTwitterArchiveDetailedScreen: () => V, default: () => G });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                l = a(154003),
                d = a(392237),
                s = a(111677),
                i = a.n(s),
                c = a(443781),
                u = a(190286),
                p = a(688715),
                h = a(891198),
                m = a(323265),
                b = a(342453);
            const g = i().cfd2f35e,
                D = i().fc5bfd96,
                f = i().gee8110e,
                S = i().c326f156,
                E = i().c9fe9b56,
                y = i().j54b679b,
                w = i().ac63840d,
                Z = i().bcd9b0ed;
            class _ extends n.Component {
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
                    this._shouldDisplayConfirmation = m.ZP.isMobileOS();
                }
                render() {
                    const {
                            disabled: e,
                            onConfirm: t,
                            url: { size_b: a, url: r },
                        } = this.props,
                        d = y({ size: _.getSizeLabel(a) }),
                        s = e ? S : f;
                    return n.createElement(o.Z, null, this._shouldDisplayConfirmation ? n.createElement(o.Z, null, n.createElement(l.ZP, { disabled: e, onPress: this._handleNeedsConfirmationActionCellPress, size: "small", style: b.Z.narrowButton, type: "brandFilled" }, s), this.state.showConfirmation && !e ? n.createElement(u.Z, { cancelButtonLabel: g, confirmButtonLabel: D, confirmButtonLink: { pathname: (0, p.ju)(r) || "", external: !0 }, headline: E, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: d }) : null) : n.createElement(l.ZP, { disabled: e, link: r ? { pathname: (0, p.ju)(r), external: !0 } : void 0, onPress: t, size: "small", style: b.Z.narrowButton, type: "brandFilled" }, s));
                }
            }
            _.getSizeLabel = (e) => {
                const t = Number(e) / 1024;
                return t < 1024 ? w({ size: h.ZP.getFormattedCount(t) }) : Z({ size: h.ZP.getFormattedCount(Math.round(t / 1024)) });
            };
            var A = a(264922),
                k = a(569291),
                M = a(71620),
                C = a(668214),
                P = a(23478);
            const I = (0, C.Z)()
                    .propsFromState(() => ({ fetchStatus: P.UD, downloads: P.NK }))
                    .propsFromActions(() => ({ fetchDownloads: P._d, createLocalApiErrorHandler: (0, M.zr)("MARK_DATA_AS_DOWNLOADED"), markDataAsDownloaded: P.VL }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "download_data" }),
                T = i().f56af9cc,
                x = i().b2ed92c4,
                v = i().ce5d2c46,
                N = i().bed6a87c,
                L = i().b24b4768,
                B = i().a0c3f812,
                R = i().ba2e82a1,
                O = i().eea30bb5,
                F = i().f2cde471,
                z = i().b7ce9dbf,
                H = i().d3de4c97;
            class V extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const {
                                downloads: { nonFailed: e },
                            } = this.props;
                            return e.length ? n.createElement(o.Z, null, e.map(this._renderDownloadItems)) : this._renderEmptyState();
                        }),
                        (this._renderDownloadItems = (e, t) => n.createElement(o.Z, { key: t }, e.urls && "COMPLETED" === e.status ? e.urls.map(this._renderDownloadButtons.bind(this, e)) : this._renderUnavailableButton(e))),
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
                    return n.createElement(A.Z, { location: a, title: T }, n.createElement(k.Z, { fetch: e, fetchStatus: t, renderChildren: this._render }));
                }
                _renderEmptyState() {
                    return n.createElement(o.Z, { style: U.emptyState }, n.createElement(r.ZP, { size: "title4" }, N), n.createElement(r.ZP, { color: "gray700", style: U.emptyStateDescription }, B), n.createElement(l.ZP, { link: "/settings/download_your_data", size: "small", style: b.Z.narrowButton, type: "brandFilled" }, L));
                }
                _renderDownloadButtons(e, t, a, l) {
                    const d = a + 1,
                        s = l.length,
                        i = !!t?.url;
                    return n.createElement(o.Z, { key: `${d}`, style: [b.Z.narrowButtonRow, b.Z.bottomBorder, b.Z.labelContainer] }, n.createElement(o.Z, null, n.createElement(r.ZP, { weight: "bold" }, H({ currentIndex: d, count: s })), e.generated ? n.createElement(r.ZP, { color: "gray700" }, O({ date: R(new Date(e.generated)) })) : null, e.expires ? n.createElement(r.ZP, { color: "gray700" }, F({ date: R(new Date(e.expires)) })) : null, t.size_b ? n.createElement(r.ZP, { color: "gray700" }, z({ size: _.getSizeLabel(t.size_b) })) : null), n.createElement(_, { disabled: !i, onConfirm: this._handleConfirm(t), url: t }));
                }
                _renderUnavailableButton(e) {
                    return n.createElement(o.Z, { style: [b.Z.narrowButtonRow, b.Z.bottomBorder, b.Z.labelContainer] }, n.createElement(r.ZP, { weight: "bold" }, H({ currentIndex: 1, count: 1 })), n.createElement(l.ZP, { disabled: !0, size: "small", style: b.Z.narrowButton, type: "brandFilled" }, "INPROGRESS" === e.status ? x : v));
                }
            }
            V.contextType = c.rC;
            const U = d.default.create((e) => ({ emptyState: { display: "flex", paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space40, alignItems: "center" }, emptyStateDescription: { paddingVertical: e.spaces.space20 } })),
                G = I(V);
        },
        342453: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(392237);
            const o = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                r = n.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, titleCase: { textTransform: "capitalize" }, floatingLink: { paddingStart: e.spaces.space20 }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, locationInfo: { alignItems: "center", flexDirection: "row", width: "100%" }, locationIcon: { marginEnd: e.spaces.space12 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space20 }, noLeftPadding: { paddingStart: 0 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { ...o(e) }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, helpTextExtraPadded: { paddingTop: e.spaces.space12 }, featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 }, featureDisabledTitle: { paddingBottom: e.spaces.space4 }, cursor: { cursor: "pointer" } }));
        },
        669504: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(111677),
                o = a.n(n),
                r = a(870976);
            const l = o().g1888dc2,
                d = o().f724d1aa,
                s = o().cf6472c2,
                i = { [r.Z.Off]: l, [r.Z.WiFiOnly]: d, [r.Z.Always]: s };
        },
        924455: (e, t, a) => {
            a.r(t), a.d(t, { SettingsVideoAutoplay: () => M, default: () => C });
            a(136728);
            var n = a(202784),
                o = a(325686),
                r = a(688715),
                l = a(101890),
                d = a(731708),
                s = a(111677),
                i = a.n(s),
                c = a(443781),
                u = a(652904),
                p = a(670094),
                h = a(870976),
                m = a(961817),
                b = a(264922),
                g = a(669504),
                D = a(71620),
                f = a(668214),
                S = a(659773);
            const E = (0, f.Z)()
                .propsFromState(() => ({ videoAutoplay: S.oO, dataSaverMode: S.IX }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("DATA_USAGE_SETTINGS_SCREEN"), updateVideoAutoplay: S.Qo }))
                .withAnalytics({ page: "settings", section: "autoplay" });
            var y = a(228149);
            const w = i().a776eed8,
                Z = i().ede134f2,
                _ = i().i859a9d4,
                A = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos"),
                k = (e) => ({ value: e, label: g.Z[e] });
            class M extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleItemChanged = (e, t) => {
                            const { analytics: a, createLocalApiErrorHandler: n, updateVideoAutoplay: o } = this.props;
                            a.scribe({ element: "videoAutoplay", action: t.toLowerCase() }), o(h.Z[t]).catch(n({ ...(0, p.d)(), showToast: !0 }));
                        });
                }
                componentDidMount() {
                    const { dataSaverMode: e } = this.props;
                    (!e && (0, y.Z)()) || this.props.history.replace("/settings/data");
                }
                _getOptions(e) {
                    const t = [];
                    return t.push(k(h.Z.Always)), (h.P || e === h.Z.WiFiOnly) && t.push(k(h.Z.WiFiOnly)), t.push(k(h.Z.Off)), t;
                }
                render() {
                    const { location: e, videoAutoplay: t } = this.props,
                        a = t ?? (0, m.i)();
                    return n.createElement(u.Z, null, n.createElement(b.Z, { location: e, title: w }, n.createElement(o.Z, null, n.createElement(l.Z, { description: n.createElement(n.Fragment, null, `${Z} `, n.createElement(d.ZP, { link: A }, _)), label: w, name: "video_autoplay", onChange: this._handleItemChanged, options: this._getOptions(a), value: a }))));
                }
            }
            M.contextType = c.rC;
            const C = E(M);
        },
        228149: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(172459);
            function o() {
                return (0, n.Z)();
            }
        },
        264922: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                o = a(108362),
                r = a(420412),
                l = a(154003),
                d = a(392237),
                s = a(111677),
                i = a.n(s),
                c = a(290402),
                u = a(253493),
                p = a(71620),
                h = a(668214),
                m = a(38562),
                b = a(919022);
            const g = (0, h.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, p.zr)("SETTINGS_LOADER") })),
                D = "settingsDetailSave",
                f = i().i2209530;
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return n.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: a, submitLabel: d, submitType: s, withMarginBottom: i } = this.props;
                            return n.createElement(o.Z, { style: [E.contentRoot, i && E.withMarginBottom] }, e, t ? n.createElement(n.Fragment, null, n.createElement(r.Z, null), n.createElement(o.Z, { style: E.buttonContainer }, n.createElement(l.ZP, { disabled: a, onPress: t, style: E.button, testID: D, type: s }, d))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: a, secondaryBar: o, title: r, viewerUser: l, withBottomBorder: d } = this.props,
                        s = this.getBackLocation(),
                        i = l ? `@${l.screen_name}` : void 0;
                    return n.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: a, secondaryBar: o, showSubtitleOnWideDetail: !1, subtitle: i, title: r, withBottomBorder: d }, l ? this._renderWithFetchSettings() : this._render());
                }
            }
            S.defaultProps = { submitLabel: f, submitType: "brandFilled", withMarginBottom: !0 };
            const E = d.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${d.default.iPhoneOffsetBottom})` } })),
                y = g(S);
        },
        569291: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(615656),
                r = a(290402),
                l = a(312771),
                d = a(615027),
                s = a(71620),
                i = a(668214);
            const c = (0, i.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, s.zr)("TWO_FACTOR_AUTHENTICATION_GATEWAY") }));
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
                                        [o.ZP.GenericForbidden]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        [o.ZP.PasswordVerificationRequired]: {
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
                        o = e === l.ZP.FAILED && a;
                    return n.createElement(n.Fragment, null, o ? n.createElement(d.Z, { to: "/i/flow/verify_account_ownership" }) : n.createElement(r.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: t }));
                }
            }
            const p = c.forwardRef(u);
        },
        855632: (e, t, a) => {
            a.r(t), a.d(t, { SettingsPage: () => Ie, default: () => Te });
            var n = a(202784),
                o = a(99107),
                r = a(325686),
                l = a(688715),
                d = a(537392),
                s = a(779610),
                i = a(844685),
                c = a(731708),
                u = a(420412),
                p = a(111677),
                h = a.n(p),
                m = a(290402),
                b = a(306114),
                g = a(741049),
                D = a(443781),
                f = a(664918),
                S = a(652904),
                E = a(880647),
                y = a(918621),
                w = a(528603),
                Z = (a(136728), a(107267)),
                _ = a(457311),
                A = a(392237),
                k = a(666536),
                M = a(934862),
                C = a(655352),
                P = a(339110),
                I = a(725516);
            function T({ results: e, setting: t, type: a }) {
                const n = { id: t.id, type: "setting", data: { text: t.title, location: { pathname: t.path, openInSameFrame: !0 } } };
                "setting" === a ? e.push({ ...n, type: "setting" }) : "setting_group" === a && e.push({ ...n, type: "setting_group" });
            }
            const x = h().d94f12b6,
                v = h().b92a21d9,
                N = h().c170a564,
                L = h().ba8f6f82,
                B = { component: "search", element: "result" },
                R = 500,
                O = 100;
            function F(e) {
                const { isSearching: t, onChange: a, searchIndex: o } = e,
                    l = (0, I.z)(),
                    d = (0, Z.useHistory)(),
                    [s, i] = n.useState(""),
                    [u, p] = n.useState(void 0),
                    [h, m] = n.useState(!1),
                    [b, g] = n.useState([]),
                    D = n.useMemo(
                        () =>
                            (0, k.Z)((e) => {
                                l.scribe({ ...B, action: e ? "show" : "empty" });
                            }, R),
                        [l],
                    ),
                    f = s.toLocaleLowerCase().trim(),
                    S = Boolean(f.length);
                n.useEffect(() => {
                    if (S) {
                        const e = [];
                        for (const t of o) {
                            let a = !1;
                            Array.isArray(t.items) &&
                                t.items.forEach((n) => {
                                    (0, w.Ik)(f, n) && (a || ((a = !0), T({ results: e, setting: t, type: "setting_group" })), T({ results: e, setting: n, type: "setting" }));
                                }),
                                !a && (0, w.Ik)(f, t) && T({ results: e, setting: t, type: "setting_group" });
                        }
                        g(e), f !== u && (p(f), D(e.length));
                    } else g([]);
                }, [f, S, o, u, D]);
                const E = n.useCallback(() => {
                        a(!1);
                    }, [a]),
                    y = n.useCallback(() => {
                        a(!0);
                    }, [a]),
                    A = n.useCallback(() => {
                        s && a(!0);
                    }, [a, s]),
                    F = n.useMemo(
                        () =>
                            (0, k.Z)((e) => {
                                a(!0), i(e);
                            }, O),
                        [a],
                    ),
                    H = n.useCallback(
                        (e) => {
                            !h && e.trim().length && (m(!0), l.scribe({ component: "search", element: "search_box", action: "began_typing" })), F(e);
                        },
                        [h, l, F],
                    );
                return n.createElement(M.Z, {
                    alwaysOpen: t,
                    dropdownPosition: "inline",
                    inputStyle: z.input,
                    items: b,
                    onBackClicked: (0, C.ZP)() ? E : void 0,
                    onClick: y,
                    onFocus: A,
                    onItemClick: (e) => {
                        if ("setting" === e.type || "setting_group" === e.type) {
                            const t = "string" == typeof e.data.location ? e.data.location : e.data.location.pathname;
                            l.scribe({ ...B, action: "click" }), d.push(t, { backLocation: window.location.pathname });
                        }
                    },
                    onQueryChange: H,
                    placeholder: L,
                    renderEmptyState: ({ style: e }) => (S ? n.createElement(_.Z, { header: v({ query: s }), message: N, style: e }) : n.createElement(r.Z, { style: [e, z.emptyState] }, n.createElement(c.ZP, { align: "center", color: "gray700" }, x))),
                    rounded: !0,
                    shouldRenderEmptyState: t && (!S || 0 === b.length),
                    source: P._4.SearchBox,
                });
            }
            const z = A.default.create((e) => ({ emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 }, input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 } }));
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
                te = h().f66d24be,
                ae = h().e3719c16,
                ne = h().cad53944,
                oe = h().bb081ea2,
                re = h().e95b9448,
                le = h().eb75875e,
                de = h().c4881c66,
                se = h().eafe3288,
                ie = h().f458a3b2,
                ce = h().e8f57e08,
                ue = h().j7ad754a,
                pe = h().ja94f34e,
                he = h().d0b74a5a,
                me = h().c05e8024,
                be = h().bdc6f5b8,
                ge = h().f8645654,
                De = h().cf9b166a,
                fe = h().bdfa2b8c,
                Se = h().ea848de8,
                Ee = h().df483b48,
                ye = h().bd05add8,
                we = h().c818c60c,
                Ze = h().d299431c,
                _e = h().f75d1806,
                Ae = h().gaac710a,
                ke = h().c429e3ba,
                Me = { external: !0, pathname: (0, l.ju)("https://support.x.com/") },
                Ce = [
                    { featureSwitch: "dash_region_specific_de_and_tr_media_transparency_items_enabled", text: h().aeede01a, link: { external: !0, pathname: (0, l.ju)("https://legal.x.com/imprint.html") } },
                    { text: h().da137d9a, featureSwitch: "dash_region_specific_de_media_transparency_items_enabled", link: { external: !0, pathname: (0, l.ju)("https://help.x.com/de/using-twitter/twitter-timeline") } },
                ],
                Pe = () => {
                    const e = n.useContext(D.rC),
                        t = (0, d.iv)().width,
                        a = E.Z.isOneColumnLayout(t) || E.Z.isOneColumnSquishedLayout(t);
                    return Ce.map((t) => {
                        const { featureSwitch: o, link: r, text: l } = t;
                        if (e.featureSwitches.isTrue(o) && a) return n.createElement(s.Z, { key: l, label: l, link: r });
                    });
                };
            function Ie(e) {
                const t = n.useContext(D.rC),
                    [a, l] = n.useState(!1);
                n.useEffect(() => {
                    e.viewerUser || e.fetchPreferencesIfNeeded().catch(e.createLocalApiErrorHandler());
                }, [e, e.viewerUser]);
                const d = (0, b.Z)(),
                    p = () => {
                        const e = (0, y.Xh)(o.b7, t.featureSwitches);
                        return n.createElement(r.Z, { testID: ee.loggedOutPrivacySection }, n.createElement(i.Z, { text: ie }), n.createElement(g.Z, { description: e ? I() : void 0, label: ce, link: "/settings/account/personalization" }), n.createElement(g.Z, { label: ue, link: "/settings/your_twitter_data" }), t.featureSwitches.isTrue("responsive_web_cookie_compliance_banner_enabled") ? n.createElement(g.Z, { description: me, label: he, link: "/settings/cookie_preferences" }) : null, n.createElement(c.ZP, { style: J.Z.descriptionText }, pe), Z(), n.createElement(Pe, null));
                    },
                    { delegateRole: h } = e,
                    E = () => {
                        const { searchIndex: t } = e;
                        return n.createElement(F, {
                            isSearching: a,
                            onChange: (e) => {
                                l(e);
                            },
                            searchIndex: t,
                        });
                    },
                    Z = () => n.createElement(r.Z, null, n.createElement(u.Z, null), n.createElement(i.Z, { text: re }), _(), T() ? n.createElement(g.Z, { label: de, link: "/settings/display", testID: ee.displayLink }) : null, T() ? n.createElement(g.Z, { label: se, link: "/settings/data", testID: ee.dataLink }) : null, T() ? n.createElement(g.Z, { label: ae, link: "/settings/accessibility", testID: ee.accessibilityLink }) : null, n.createElement(g.Z, { label: fe, link: "/settings/about", testID: ee.aboutLink })),
                    _ = () => (e.withEditableFSes ? n.createElement(n.Fragment, null, n.createElement(g.Z, { label: Ee, link: "/settings/feature_switches" }), n.createElement(g.Z, { label: Se, link: "/settings/earlybird_settings" })) : null),
                    A = () => {
                        const { userClaims: e } = t;
                        return e.hasSubscription("one_dollar") ? n.createElement(g.Z, { label: ye, link: "/settings/not_a_bot" }) : null;
                    },
                    k = () => {
                        const { searchIndex: a } = e,
                            { featureSwitches: o, userClaims: r } = t,
                            l = a.find((e) => e.id === w.VZ.TwitterBlue)?.path;
                        if (r.isAnyPremiumSubscriber() || (!r.isAnyPremiumSubscriber() && o.isTrue("subscriptions_sign_up_enabled"))) return l ? n.createElement(g.Z, { label: _e, link: l }) : null;
                    },
                    M = (a) => {
                        const { featureSwitches: o } = t,
                            { searchIndex: r } = e,
                            l = r.find((e) => e.id === w.VZ.Analytics)?.path;
                        if (a && o.isTrue("subscriptions_upsells_settings_analytics_upsell_enabled")) return l ? n.createElement(g.Z, { label: we, link: l }) : null;
                    },
                    C = () => {
                        const { searchIndex: a } = e,
                            { featureSwitches: o } = t,
                            r = a.find((e) => e.id === w.VZ.Subscription)?.path;
                        if (o.isTrue("responsive_web_subscriptions_setting_enabled")) return r ? n.createElement(g.Z, { label: ke, link: r }) : null;
                    },
                    P = () => (t.featureSwitches.isTrue("report_center_mvp_r2_enabled") ? n.createElement(g.Z, { label: Ae, link: "/settings/report-center" }) : null),
                    I = () => {
                        const { personalizationPreferences: t } = e;
                        return (0, K.s)(t);
                    },
                    T = () => !!e.viewerUser,
                    { fetchStatus: x, isDelegate: v, location: N } = e;
                return n.createElement(
                    S.Z,
                    { locationKey: "settingsRoot" },
                    n.createElement(
                        X.Z,
                        {
                            location: N,
                            onBackClick: () => {
                                const { history: t } = e;
                                a ? l(!1) : t.goBack();
                            },
                            screenType: "root",
                            title: oe,
                        },
                        T() || (0, f.D0)(t.featureSwitches) === f.fD.AcceptAllCookies
                            ? n.createElement(m.Z, {
                                  fetchStatus: x,
                                  onRequestRetry: () => {
                                      e.fetchPreferencesIfNeeded().catch(e.createLocalApiErrorHandler());
                                  },
                                  render: t.viewerUserId ? (v ? () => n.createElement(n.Fragment, null, a ? null : n.createElement(r.Z, { role: "tablist" }, "Admin" === h && n.createElement(g.Z, { label: ge, link: "/settings/security_and_account_access", testID: ee.accountAccessLink }))) : () => n.createElement(n.Fragment, null, E(), a ? null : n.createElement(r.Z, { role: "tablist" }, n.createElement(g.Z, { label: be, link: "/settings/account", testID: ee.accountLink }), M(d), n.createElement(g.Z, { label: Ze, link: "/settings/monetization" }), k(), C(), n.createElement(g.Z, { label: ge, link: "/settings/security_and_account_access", testID: ee.accountAccessLink }), n.createElement(g.Z, { label: ne, link: "/settings/privacy_and_safety", testID: ee.privacyAndSafetyLink }), P(), n.createElement(g.Z, { label: le, link: "/settings/notifications", testID: ee.notificationsLink }), n.createElement(g.Z, { label: De, link: "/settings/accessibility_display_and_languages", testID: ee.accessibilityLink }), A(), n.createElement(g.Z, { label: fe, link: "/settings/about", testID: ee.aboutLink }), n.createElement(s.Z, { label: te, link: Me, testID: ee.helpCenterLink }), _()))) : p,
                              })
                            : p(),
                    ),
                );
            }
            const Te = Q(Ie);
        },
        267966: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(392237);
            const o = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                r = n.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...o(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-8ed0fac5.63f7780a.js.map
