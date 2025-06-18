"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1", "loader.directMessagesData-63cb1cc4"],
    {
        904940: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, a) => e.post("media/metadata/create", t, {}, { ...a, "content-type": "application/json" }), attachSubtitles: (t, a) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...a, "content-type": "application/json" }) });
        },
        708482: (e, t, a) => {
            a.d(t, { s: () => i });
            var r = a(10622),
                o = a.n(r);
            function i(e, t, a, r) {
                return o()(e, t, a, r ? { networkCacheConfig: { metadata: { isFatalError: r } } } : void 0).toPromise();
            }
        },
        335923: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(202784);
            const r = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.21"),
                        a.e("icons.16"),
                        a.e("icons.10"),
                        a.e("icons.1"),
                        a.e("icons.19"),
                        a.e("icons.0"),
                        a.e("icons.23"),
                        a.e("icons.8"),
                        a.e("icons.2"),
                        a.e("icons.3"),
                        a.e("icons.15"),
                        a.e("icons.4"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.9"),
                        a.e("icons.7"),
                        a.e("icons.28"),
                        a.e("icons.26"),
                        a.e("icons.24"),
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
                        a.e("icons.18"),
                        a.e("icons.13"),
                        a.e("icons.29"),
                        a.e("icons.27"),
                        a.e("icons.25"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
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
                        a.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader."),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        a.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        a.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        a.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        a.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        a.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        a.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        a.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        a.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        a.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        a.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        a.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        a.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        a.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        a.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        a.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        a.e("loader.Markdown"),
                    ]).then(a.bind(a, 312778)),
            });
        },
        715601: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(807896),
                o = a(202784),
                i = a(325686),
                d = a(666305),
                n = a(912021),
                s = a(443781),
                l = a(794175),
                u = a(427266),
                c = a(224175);
            class m extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._unmounted = !1),
                        (this._handleResize = () => {
                            const { viewport: e } = this.state;
                            e && e instanceof c.Z && e.notifyRectChanged();
                        }),
                        (this._handleViewRef = (e) => {
                            const { onViewportSet: t } = this.props;
                            e &&
                                this._lastRef !== e &&
                                window.requestAnimationFrame(() => {
                                    if (!this._unmounted) {
                                        d.Z.unobserveAll(this._lastRef), (this._lastRef = e), d.Z.observe(e, this._handleResize);
                                        const a = this._getViewport(e);
                                        this.setState({ viewport: a }), t && t(a);
                                    }
                                });
                        }),
                        (this._getDataSet = (0, n.Z)((e = {}) => ({ ...e, viewportview: "true" }))),
                        (this.state = { viewport: void 0 });
                }
                render() {
                    const { children: e, dataSet: t, onViewportSet: a, ...d } = this.props,
                        { viewport: n } = this.state,
                        s = n ? o.createElement(l.ZP, { viewport: n }, e) : null;
                    return o.createElement(i.Z, (0, r.Z)({ ref: this._handleViewRef }, d, { dataSet: this._getDataSet((0, u.dW)(t)) }), s);
                }
                componentWillUnmount() {
                    (this._unmounted = !0), d.Z.unobserveAll(this._lastRef);
                }
                _getViewport(e) {
                    return new c.Z(e);
                }
            }
            m.contextType = s.rC;
        },
        224175: (e, t, a) => {
            a.d(t, { Z: () => d });
            a(136728);
            var r = a(503882),
                o = a(781268),
                i = a(700534);
            class d {
                constructor(e) {
                    (this._offsetTop = 0),
                        (this._handleIntersectionChange = (e, t) => {
                            (0, i.pd)(e, t, this._observedElementsMap);
                        }),
                        (this._domNode = e),
                        (this._programmaticScrollListeners = []),
                        (this._rectChangeListeners = []),
                        (this._suppressListeners = !1),
                        (this._observedElementsMap = new Map());
                }
                notifyRectChanged() {
                    this._rectChangeListeners.forEach((e) => e());
                }
                getRect() {
                    const e = this._domNode.getBoundingClientRect();
                    return new r.Z(e.top + this._offsetTop, e.height);
                }
                getRect2D() {
                    const e = this._domNode.getBoundingClientRect();
                    return new o.Z(e.left, e.top + this._offsetTop, e.width, e.height);
                }
                getWidth() {
                    return this._domNode.getBoundingClientRect().width;
                }
                getViewport() {
                    return this._domNode;
                }
                scrollBy(e, t) {
                    t ? this._domNode.scrollBy({ top: e, behavior: t }) : (this._domNode.scrollTop += e), this._programmaticScrollListeners.forEach((t) => t(e));
                }
                scrollTo(e, t, a) {
                    const r = t - this.scrollY();
                    a ? this._domNode.scrollTo({ top: e, left: t, behavior: a }) : ((this._domNode.scrollLeft = e), (this._domNode.scrollTop = t)), this._programmaticScrollListeners.forEach((e) => e(r));
                }
                scrollToBottom() {
                    this.scrollBy(this._domNode.clientHeight - this.scrollY());
                }
                scrollToTop(e) {
                    this.scrollTo(0, 0, e);
                }
                scrollX() {
                    return this._domNode.scrollLeft;
                }
                scrollY() {
                    return this._domNode.scrollTop;
                }
                setOffsetBottom(e) {}
                setOffsetTop(e) {
                    this._offsetTop = e;
                }
                getOffsetTop() {
                    return this._offsetTop;
                }
                getOffsetBottom() {
                    return 0;
                }
                addProgrammaticScrollListener(e) {
                    return this._programmaticScrollListeners.indexOf(e) < 0 && this._programmaticScrollListeners.push(e), () => this.removeProgrammaticScrollListener(e);
                }
                removeProgrammaticScrollListener(e) {
                    const t = this._programmaticScrollListeners.indexOf(e);
                    t > -1 && this._programmaticScrollListeners.splice(t, 1);
                }
                addRectChangeListener(e) {
                    return this._rectChangeListeners.indexOf(e) < 0 && this._rectChangeListeners.push(e), () => this.removeRectChangeListener(e);
                }
                removeRectChangeListener(e) {
                    const t = this._rectChangeListeners.indexOf(e);
                    t > -1 && this._rectChangeListeners.splice(t, 1);
                }
                addScrollListener(e) {
                    return this._addListener("scroll", () => {
                        this._suppressListeners || e();
                    });
                }
                temporarilySuppressScrollListeners(e) {
                    (this._suppressListeners = !0),
                        window.setTimeout(() => {
                            this._suppressListeners = !1;
                        }, e);
                }
                addIntersectionObserverListener(e, t, a) {
                    if (!this._intersectionObserver) {
                        this._intersectionThreshold = a;
                        const e = this._getIOConfigOptions();
                        this._intersectionObserver = (0, i.wE)(e, this._observedElementsMap, this._handleIntersectionChange);
                    }
                    if (this._intersectionObserver) {
                        return (0, i.D1)(this._intersectionObserver, this._observedElementsMap, t, e);
                    }
                }
                getRootMargin() {
                    const e = getComputedStyle(this._domNode).paddingBottom,
                        t = getComputedStyle(this._domNode).paddingLeft,
                        a = getComputedStyle(this._domNode).paddingRight;
                    return `${getComputedStyle(this._domNode).paddingTop} ${a} ${e} ${t}`;
                }
                _getIOConfigOptions() {
                    return { root: this._domNode, rootMargin: this.getRootMargin(), threshold: this._intersectionThreshold };
                }
                _addListener(e, t) {
                    const a = () => t();
                    this._domNode.addEventListener(e, a);
                    return () => {
                        this._domNode.removeEventListener(e, a);
                    };
                }
            }
        },
        944681: (e, t, a) => {
            a.d(t, { k: () => o, Q: () => i });
            const r = (e, t, a) => {
                    const r = new Date();
                    let o = r.getFullYear() - e;
                    const i = r.getMonth() + 1 - t;
                    if (i < 0) o -= 1;
                    else if (0 === i) {
                        r.getDate() - a < 0 && (o -= 1);
                    }
                    return o;
                },
                o = (e, t, a, o = !1) => (e && t && a ? r(e, t, a) < 18 : o),
                i = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, a) => {
            a.d(t, { $r: () => K, O9: () => W, ZP: () => q, vK: () => J });
            var r = a(688715),
                o = a(111677),
                i = a.n(o),
                d = a(653843),
                n = a(122123),
                s = a(417144),
                l = a(884495),
                u = a(716233),
                c = a(540387);
            const m = i().b8098028,
                h = i().b36f4170,
                p = i().hab3781e,
                b = i().f6c4fb02,
                _ = i().g0af3dd2,
                f = i().b8c8b0be,
                g = i().ica6d718,
                w = i().b28d44f7({ limit: 15 }),
                D = i().i1db7d13,
                M = i().baac0ed7,
                A = D({ limit: 512 }),
                S = i().a22385bb,
                v = i().be0440bf,
                y = S({ limit: 140 }),
                I = i().feeba512,
                T = i().db123c02,
                E = i().db6001e7({ limit: 5 }),
                O = i().eb96d952,
                N = i().i859a9d4,
                L = i().b3880588,
                k = i().ca058b68,
                x = i().id24379c,
                P = i().h4d7cbcc,
                C = (0, r.ju)("https://support.x.com/articles/20156423"),
                U = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos"),
                F = (e) => ({ text: e }),
                G = (e) => ({ text: e, action: { label: N, link: C } }),
                B = (e) => ({ text: e, action: { label: N, link: U } }),
                R = { [d.Y7.GIF_IS_TOO_LARGE]: F(w), [d.Y7.CANNOT_BE_PROCESSED]: F(m), [d.Y7.FILE_IS_NOT_AN_IMAGE]: F(p) },
                z = { [s.d.ZERO_FILE_LENGTH]: F(h), [s.d.TIMEOUT]: F(L) },
                V = { ...z, [s.d.FILE_TOO_LARGE]: F(E), [s.d.UNSUPPORTED_MEDIA]: G(T), [s.d.INVALID_MEDIA]: G(I) },
                Z = { ...z, [s.d.FILE_TOO_LARGE]: F(w), [s.d.UNSUPPORTED_MEDIA]: G(_), [s.d.INVALID_MEDIA]: G(b) },
                $ = { ...z, [s.d.FILE_TOO_LARGE]: F(A), [s.d.UNSUPPORTED_MEDIA]: B(g), [s.d.INVALID_MEDIA]: B(f) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                H = 1073741824,
                W = (e) => Object.values(j).includes(e.type),
                Y = (e) => {
                    const { code: t, limit: a, type: r } = e;
                    if (t)
                        switch (r) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? F(w) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== a ? F(a >= H ? M({ limit: Math.round(a / H) }) : D({ limit: Math.round(a / X) })) : F(A);
                            case j.MAXDURATION:
                                return void 0 !== a ? (a > 140 ? F(v({ limit: Math.round(a / 60) })) : { text: S({ limit: Math.round(a) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : F(y);
                            case j.RESIZE:
                                return R[t];
                            case j.UPLOAD:
                                if (e.isImage) return V[t];
                                if (e.isGif) return Z[t];
                                if (e.isVideo) return $[t];
                                break;
                            case j.METADATA:
                                return F(P);
                        }
                },
                K = (e) => {
                    if (W(e)) return e;
                };
            function q(e, t = x) {
                const a = K(e);
                if (a) {
                    const r = e.message ? `${t} ${e.message}` : t;
                    return Y(a) || F(r);
                }
            }
            function J(e, t = k) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? F(O) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? B(f) : F(t);
            }
        },
        221562: (e, t, a) => {
            a.d(t, { BX: () => _, Uk: () => c, Xj: () => m, ZP: () => S });
            var r = a(468811),
                o = a.n(r),
                i = a(595088),
                d = a(161821),
                n = a(184605),
                s = a(716233),
                l = a(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                h = (e) => (e ? p(e) : void 0),
                p = (e) =>
                    (0, i.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, a]) => ("object" == typeof a ? `${t}=${b(e[t])}` : `${t}=${String(a)}`))
                        .join(";"),
                b = (e) =>
                    (0, d.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                _ = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                f = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                g = { [_.SruUpload]: f.SruUpload, [_.UploadSubmitUntilSruFinish]: f.UploadSubmitUntilSruFinish },
                w = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                D = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                M = () => (window.performance ? window.performance.now() : Date.now()),
                A = (e, t) => (e === s.xz.DMGif || e === s.xz.TweetGif ? w.All : (e !== s.xz.DMVideo && e !== s.xz.TweetVideo && e !== s.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? w.Short : t < 20 ? w.Medium : t < 45 ? w.Long : t < 90 ? w.XLong : t < 140 ? w.L90to140s : t < 300 ? w.L140to300s : t < 600 ? w.L300to600s : t < 1200 ? w.L600to1200s : t < 1800 ? w.L1200to1800s : t < 2700 ? w.L1800to2700s : t < 3600 ? w.L2700to3600s : t < 4500 ? w.L3600to4500s : t < 5400 ? w.L4500to5400s : t < 6300 ? w.L5400to6300s : t < 7200 ? w.L6300to7200s : t < 10800 ? w.L7200to10800s : t < 14400 ? w.L10800to14400s : w.LGT14400s);
            class S {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = o().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: a, videoDuration: r } = e;
                            return `${t ? u.Remote : u.LocalFile}:${a}:${A(a, r)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let a = D(this._startTimes[e], M());
                        if (this._keyPrefix && void 0 !== a) {
                            void 0 !== this._pausedDuration[e] && (a -= this._pausedDuration[e]);
                            const r = this._getKey(e, t);
                            this._record(r, a, e === _.Full ? this._metadata : e === _.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = M()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = D(this._startTimes[_.Full], M());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[_.Full] && (e -= this._pausedDuration[_.Full]);
                        const t = this._getKey(_.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = M();
                    else if (!t) {
                        const t = D(this._pauseTimes[e], M());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const a = (this._eagerUploadDisabled && g[e]) || e;
                    return `${this._keyPrefix}:${a}:${t}`;
                }
                _record(e, t, a) {
                    const r = { duration_ms: t, impression_id: this._impressionId, metadata: h(a) };
                    l.IM(e, r, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, a) => {
            a.d(t, { BW: () => _, SB: () => A, TO: () => v, Tz: () => g, U$: () => M, ff: () => f, vC: () => D, vn: () => S, xz: () => w, y$: () => p });
            var r = a(182056),
                o = a(323265),
                i = a(540387);
            const d = 1024,
                n = 1024 * d,
                s = 1,
                l = 4096,
                u = 2048,
                c = 400,
                m = 1500,
                h = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                p = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                b = 600,
                _ = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                f = { VIDEO_IS_TOO_LONG: 1 },
                g = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                w = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                D = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                M = (e) => {
                    const { height: t, left: a, width: r } = e,
                        o = Math.round(t / 2);
                    return `&salient_rect=${Math.round(a + r / 2)},${o},1,1`;
                };
            function A(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    a = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || a ? 1 : 0;
            }
            function S(e, t, a, _, f) {
                const g = _?.location,
                    w = A({ featureSwitches: e, userClaims: t });
                let M, S;
                if (a.isSubtitles) M = 0;
                else if (a.isGif)
                    switch (g) {
                        case D.Avatar:
                            M = e.getNumberValue("media_async_upload_max_avatar_gif_size", h.Avatar_Gif) * n;
                            break;
                        case D.Dm:
                        case D.Tweet:
                        default:
                            M = e.getNumberValue("media_async_upload_max_gif_size", h.Gif) * n;
                    }
                else {
                    if (!(a instanceof i.ZP))
                        return (function (e, t, a) {
                            let i;
                            switch (t) {
                                case D.Avatar:
                                    i = c;
                                    break;
                                case D.CommunityBanner:
                                case D.ListBanner:
                                case D.ProfileBanner:
                                    i = m;
                                    break;
                                default:
                                    i = o.ZP.isDesktopOS() ? l : u;
                            }
                            const s = e.getNumberValue("media_async_upload_max_image_size", h.Image) * n;
                            return r.Z.getConnectionInfo().then(
                                (r) => {
                                    let n = s;
                                    return "slow-2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * d) : a || "2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * d) : "3g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * d) : "4g" !== r.effectiveType || o.ZP.isDesktopOS() || t !== D.Tweet || (i = l), { maxDimension: i, maxFileSize: Math.min(s, n) };
                                },
                                () => ({ maxDimension: i, maxFileSize: s }),
                            );
                        })(e, g, f);
                    if (1 === w) {
                        if ("dm" === g) S = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", b);
                        else S = e.getNumberValue("media_async_upload_longer_video_max_video_duration", p.Duration[w]) * s;
                        M = e.getNumberValue("media_async_upload_longer_video_max_video_size", p.Size[w]) * n;
                    } else (S = e.getNumberValue("media_async_upload_max_video_duration", p.Duration[w]) * s), (M = e.getNumberValue("media_async_upload_max_video_size", p.Size[w]) * n);
                }
                return Promise.resolve({ maxFileSize: M, maxDuration: S });
            }
            function v(e) {
                return !(o.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, a) => {
            a.d(t, { Id: () => r, ZP: () => d, h_: () => o });
            a(543673), a(240753), a(128399);
            const r = [".srt", "text/plain", ""],
                o = (e) => -1 !== r.indexOf(e.type),
                i = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class d {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([i(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        540387: (e, t, a) => {
            a.d(t, { Wv: () => o, ZP: () => d, hb: () => i, jn: () => r });
            a(571372), a(543673), a(240753), a(128399);
            const r = ["video/mp4", "video/quicktime"],
                o = (e) => -1 !== r.indexOf(e.type),
                i = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class d {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((a, r) => {
                            const o = (e, t) => {
                                    const a = new Error(e);
                                    (a.code = t), (a.type = i.type), r(a);
                                },
                                d = document.createElement("video");
                            (d.onloadedmetadata = () => {
                                t || (d.videoWidth && d.videoHeight) ? a(d) : o("Video lacks height or width", i.NO_DIMENSIONS);
                            }),
                                (d.onerror = () => {
                                    o("Error loading image", i.LOAD_FAILED);
                                }),
                                (d.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: a, videoWidth: r } = e;
                        return (this.width = r), (this.height = a), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === a || 0 === r)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        537052: (e, t, a) => {
            a.d(t, { Hf: () => d, OA: () => o, mL: () => i });
            a(571372);
            var r = a(837880);
            function o(e, t) {
                const a = (0, r.Z)(t / 100, 0, 1),
                    o = n[e],
                    i = a * (o.max - o.min);
                return l(o.min + i, 3);
            }
            function i(e) {
                const t = (0, r.Z)(e, 0, 1);
                for (let e = 0; e < s.length; e++) {
                    const a = s[e];
                    if ((0 === e && t <= a.min) || (e === s.length - 1 && t >= a.max) || (t >= a.min && t < a.max)) {
                        let e = u(t, a.min, a.max);
                        return (e = l(e, 3)), [a.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const d = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [d.uploading]: { name: d.uploading, min: 0, max: 0.5 }, [d.processing]: { name: d.processing, min: 0.5, max: 1 } },
                s = [n.uploading, n.processing];
            function l(e, t) {
                const a = Math.pow(10, t);
                return Math.round(e * a) / a;
            }
            function u(e, t, a) {
                return (e - t) / (a - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const a of s) {
                    if (((t += a.max - a.min), a.max <= a.min)) {
                        const e = JSON.stringify({ stage: a });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (a.min < 0) {
                        const e = JSON.stringify({ stage: a });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (a.max > 1) {
                        const e = JSON.stringify({ stage: a });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && a.min !== e.max) {
                        const t = JSON.stringify({ stage: a, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = a;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, a) => {
            a.d(t, { EM: () => c, K3: () => u, Xp: () => m });
            var r = a(882127),
                o = a(498510),
                i = (a(585488), a(277660)),
                d = a.n(i),
                n = a(708482),
                s = a(944681),
                l = a(535338);
            function u(e) {
                return (function (e) {
                    return (0, n.s)(e, p, {});
                })(e).then(
                    (e) =>
                        !h(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return h((0, l.p)(p, {}));
            }
            function m(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: a, year: r } = e;
                            return (0, s.k)(r, a, t, !0);
                        }
                    }
                    return !0;
                })(d()(b, e));
            }
            function h(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: a, year: r } = e;
                        return (0, s.k)(r, a, t, !0);
                    }
                }
                return !0;
            }
            const p = o.Z,
                b = r.Z;
        },
        497294: (e, t, a) => {
            a.d(t, { $i: () => me, C4: () => Y, G$: () => K, Q6: () => H, TU: () => J, WU: () => Q, _B: () => oe, _J: () => ae, _T: () => V, dD: () => re, gz: () => R, m3: () => z, o6: () => ne, oZ: () => he, pJ: () => ue, rA: () => X });
            a(571372), a(136728);
            var r = a(99107),
                o = a(411916),
                i = a.n(o),
                d = a(10622),
                n = a.n(d),
                s = a(111677),
                l = a.n(s),
                u = a(205074),
                c = a(653843),
                m = a(514354),
                h = a(908478),
                p = a(417144),
                b = a(904940),
                _ = a(918621),
                f = a(829053),
                g = a(716233),
                w = a(166677),
                D = a(221562),
                M = a(755296),
                A = a(946208),
                S = a(540387),
                v = a(653798),
                y = a(499627),
                I = a(917799),
                T = a(390387),
                E = a(38562),
                O = a(601576),
                N = a(111531),
                L = a(537052);
            const k = l().g40ff2b4,
                x = "mediaUpload",
                P = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                C = `rweb/${x}`,
                U = [],
                F = "upload";
            class G extends Error {
                constructor(e, { code: t, isGif: a, isImage: r, isVideo: o, type: i }) {
                    super(e), (this.code = t), (this.type = i), (this.isGif = !!a), (this.isImage = !!r), (this.isVideo = !!o);
                }
            }
            function B(e, t, a) {
                let o = null,
                    i = {},
                    d = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (d = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, M.s)().isLoggedIn)) {
                    const e = (0, _.ej)({ cookieName: r.qj, featureSwitches: t });
                    if (e) {
                        const t = a?.actAsUserId;
                        d.sruHeaders = { ...(0, f.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, r.Oj)(!1), [r.d4]: e };
                    }
                }
                return (
                    a?.useLongVideoEndpoint && (d.uploadUrl = P),
                    {
                        upload(t) {
                            (o = new p.Z(e, d)), (i = t), o.upload(i);
                        },
                        amendUpload(e) {
                            (i = { ...i, ...e }), o && o.upload(i);
                        },
                        uploadExternalMedia(t, a, r, i) {
                            (o = new p.Z(e, d)), o.uploadExternalMedia(t, a, r, i);
                        },
                        cancel() {
                            o && o.cancel();
                        },
                    }
                );
            }
            const R = (e) => e[x],
                z = (e, t) => {
                    const a = Array.isArray(t) ? t : [t];
                    return e[x].filter((e) => a.some((t) => t === e.id));
                },
                V = (e, t) => {
                    const a = z(e, t);
                    if (!a.length) return 0;
                    const r = a.reduce((e, t) => e + (t.uploadProgress || 0), 0) / a.length;
                    return Math.min(r, 1);
                },
                Z = "rweb/mediaUpload/ADD_MEDIA",
                $ = (e) => ({ payload: e, type: Z });
            let j = 1;
            function X(e, t) {
                return (a, r, { featureSwitches: o, relayEnvironment: i }) => {
                    const d = Array.from(e, (e) => {
                            if ((0, S.Wv)(e)) {
                                const a = new S.ZP(e, t.isAmplify);
                                if ((0, g.TO)(e)) {
                                    const e = o.isTrue("responsive_web_hevc_upload_preview_enabled") && o.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return a.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(a);
                            }
                            return (0, A.h_)(e) ? Promise.resolve(new A.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        s = a((e, t, { relayEnvironment: a }) =>
                            n()(a, v.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, N.K3)(i));
                    return Promise.all(d)
                        .then(
                            (e) => {
                                const r = a(
                                    (function (e, t) {
                                        return (a, r, { featureSwitches: o, userClaims: i }) => {
                                            const { uploadIds: d = [], altTexts: n = [] } = t,
                                                s = (0, E.IX)(r()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const m = o.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let h;
                                                    t.location && (h = pe(t.location, e, !1, { featureSwitches: o, userClaims: i }));
                                                    const p = e instanceof S.ZP ? e.duration : void 0,
                                                        b = e instanceof u.ZP ? e.orientation : void 0,
                                                        _ = m && h ? new D.ZP({ isExternal: !1, mediaCategory: h, videoDuration: p }, s) : void 0,
                                                        f = o.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        w = o.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof S.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const a = document.createElement("canvas"),
                                                                            { height: r, width: o } = e;
                                                                        (a.width = o), (a.height = r);
                                                                        a.getContext("2d").drawImage(t, 0, 0, o, r), (e.thumbnail = a.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        _?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: p, width: e.width, height: e.height, orientation: b }),
                                                        (0, g.vn)(o, i, e, t, s).then(({ maxDimension: s, maxFileSize: m }) => {
                                                            const h = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: m, maxDimension: s, jpgPixelsPerByteForResize: w }),
                                                                p = (0, g.SB)({ featureSwitches: o, userClaims: i }),
                                                                b = { useLongVideoEndpoint: e.isVideo && p >= 1, actAsUserId: (0, T.dY)(r()) },
                                                                D = h ? void 0 : B(e.fileHandle, o, b),
                                                                M = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: f ? void 0 : null, needsProcessing: h, location: t.location, uploadId: d[l] ?? "", reporter: _, uploader: D, mediaMetadata: { altText: n[l] }, abortController: f ? new AbortController() : void 0 });
                                                            return f && _e(a, r, M.id, e.fileHandle, M.reporter, M.abortController), M;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (a($(e)), e));
                                        };
                                    })(e, t),
                                );
                                return r;
                            },
                            (e) => {
                                const t = (0, w.vK)(e);
                                return t && a((0, O.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            s
                                .then((t) => {
                                    if (t) for (const t of e) a(oe(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const H =
                ({ height: e, mediaCategory: t, mediaType: a, previewMediaType: r, previewUrl: o, sourceUrl: i, stillMediaUrl: d, width: n }) =>
                (s, l, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new D.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(D.BX.Full, !0);
                    const m = { actAsUserId: (0, T.dY)(l()) },
                        h = W({ externalMediaDetails: { mediaCategory: t, mediaType: a, previewUrl: o || i, previewMediaType: r || a, sourceUrl: i, stillMediaUrl: d, width: n, height: e }, reporter: c, uploader: B(null, u, m) });
                    return s($(h)), c?.toggleOperationPaused(D.BX.Full, !0), [h];
                };
            function W(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const Y =
                    (e) =>
                    (t, a, { featureSwitches: r, userClaims: o }) => {
                        const [i] = z(a(), e);
                        if (!i) return Promise.reject(new Error("media item not found"));
                        const { abortController: d, cropData: n, id: s, location: l, mediaFile: m, needsProcessing: h, originalMediaFile: p } = i;
                        if (!p) return Promise.reject(new Error("media item not found"));
                        const b = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            _ = (0, E.IX)(a()),
                            f = { location: l };
                        return (0, g.vn)(r, o, p, f, _).then((e) => {
                            const o = { cropData: n, jpgPixelsPerByteForResize: b, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                _ = e.maxDuration || 0;
                            if (p.isImage && p instanceof u.ZP)
                                return h
                                    ? (0, c.ZP)(p, o)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (d?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              p !== m && m && m.dispose(), i.uploader && i.uploader.cancel && i.uploader.cancel();
                                              const o = { actAsUserId: (0, T.dY)(a()) },
                                                  d = B(e.fileHandle, r, o),
                                                  n = t(ae({ id: s, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: d }));
                                              return (i.uploadId || i.uploading) && t(me([s])), n;
                                          })
                                    : Promise.resolve(i);
                            if (p.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", p.isGif ? g.BW.GIF_IS_TOO_LARGE : g.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (p.isVideo && p instanceof S.ZP && p.duration > _) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", g.ff.VIDEO_IS_TOO_LONG, _]), Promise.reject(e);
                            }
                            return Promise.resolve(i);
                        });
                    },
                K = (e, t) => (a, r) => {
                    const { onFailure: o } = t,
                        d = [];
                    return new Promise((t, r) => {
                        const n = (e) => {
                            if (!e.length) return t(d);
                            const [r] = e;
                            i()(() => {
                                r.reporter?.reportOperationStart(D.BX.Full, !0),
                                    r.reporter?.reportOperationStart([D.BX.Processing, D.BX.Metadata]),
                                    r.reporter?.reportOperationComplete(D.BX.Metadata, D.Uk.Complete),
                                    a(Y(r.id)).then(
                                        (t) => {
                                            d.push(t), t?.reporter?.reportOperationComplete(D.BX.Processing, D.Uk.Success), t?.reporter?.toggleOperationPaused(D.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const i = (0, w.ZP)(t, k);
                                            i && a((0, O.fz)(i));
                                            const { code: d, message: s, name: l, type: u } = t;
                                            r.reporter?.setMetadata({ reason: { name: l, message: s, code: d } });
                                            const m = "maxsize" === u || "maxduration" === u || ("resize" === u && (d === c.Y7.FILE_IS_NOT_AN_IMAGE || d === c.Y7.GIF_IS_TOO_LARGE)) ? D.Uk.Invalid : D.Uk.Failure;
                                            r.reporter?.reportOperationComplete([D.BX.Full, D.BX.Processing], m), o && o(r.id), n(e.slice(1));
                                        },
                                    );
                            });
                        };
                        n(e);
                    });
                },
                q = "rweb/mediaUpload/REMOVE_MEDIA",
                J = (e) => ({ payload: Array.isArray(e) ? e : [e], type: q });
            function Q(e) {
                return (t, a) => {
                    z(a(), e).forEach((e) => {
                        const { abortController: t, mediaFile: a, originalMediaFile: r, reporter: o, uploader: i } = e;
                        t?.abort(), i && i.cancel && i.cancel(), o?.reportOperationComplete(D.BX.Full, D.Uk.Cancel), a && a.dispose(), r && r.dispose();
                    }),
                        t(J(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ae(e) {
                return (t, a) => {
                    t(te(e));
                    const [r] = z(a(), e.id);
                    return r;
                };
            }
            function re(e) {
                return (t, a) => {
                    const [r] = z(a(), e);
                    r.uploader?.cancel(), t(me(e));
                };
            }
            function oe(e, t) {
                return (a) => a(ae({ id: e, mediaMetadata: t }));
            }
            const ie = "SEND_METADATA",
                de = I.dg(C, ie);
            function ne(e) {
                return (t, a, { api: r }) => I._O(t, { params: e, request: r.withEndpoint(b.Z).metadataCreate })({ actionTypes: de, context: ie });
            }
            const se = "ATTACH_SUBTITLES",
                le = I.dg(C, se);
            function ue(e) {
                return (t, a, r) => {
                    const { subtitlesDisplayName: o, subtitlesLang: i, subtitlesMediaUploadId: d, videoMediaUploadId: n } = e,
                        { api: s, featureSwitches: l, userClaims: u } = r,
                        c = be(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return I._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: c, subtitlesLang: i, subtitlesMediaUploadId: d, subtitlesDisplayName: o }, request: s.withEndpoint(b.Z).attachSubtitles })({ actionTypes: le, context: se });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (a, r, { featureSwitches: o, userClaims: i }) => {
                        const d = z(r(), e),
                            n = (e) => a(ae(e));
                        function s(e, a = !1) {
                            const r = o.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: d, id: l, mediaFile: c, mediaFileHash: m, reporter: h, uploader: b } = e,
                                _ = r && c && c.isImage && c instanceof u.ZP,
                                f = void 0 === m;
                            return (
                                h?.toggleOperationPaused(D.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (h?.reportOperationStart(D.BX.UploadSubmitUntilSruFinish), h?.reportUploadSubmit(), _ && f && d?.abort(), e.uploading && b && b.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : b
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: a, mediaItem: r, updateMediaItem: o, uploadMediaItem: i, uploadOptions: d, userClaims: n } = e,
                                                      { abortController: s, externalMediaDetails: l, id: u, reporter: c, uploader: m } = r,
                                                      h = new Promise((e, h) => {
                                                          const b = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([D.BX.Full, D.BX.UploadSubmitUntilSruFinish], D.Uk.Success), e(o({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              _ = (e, t, a) => {
                                                                  c?.setMetadata({ mediaId: a }), "uploading" === t ? (o({ id: u, uploadProgress: L.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(D.BX.SruUpload, D.Uk.Success)) : "processing" === t && o({ id: u, uploadProgress: L.OA("processing", e) });
                                                              },
                                                              f = () => {
                                                                  c?.toggleOperationPaused(D.BX.Full, !0);
                                                              },
                                                              w = (t) => {
                                                                  const { code: d, detail_message: n, maxSizeBytes: l, mediaId: b, message: _, name: f } = t;
                                                                  if (r.mediaFile?.isGif && !a && d === g.Tz.INVALID_MEDIA_CODE) m?.amendUpload({ pauseBeforeFinalize: !1 }), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), i(r, !0).then(e).catch(h);
                                                                  else {
                                                                      s?.abort(), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: d, message: _, detail_message: n, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new G(_ ? `${_}` : `Media upload failed [Error code: ${d}]${b ? ` ${b}` : ""}`, { code: d, type: F, isGif: !!r.externalMediaDetails || (r.mediaFile && r.mediaFile.isGif), isImage: r.mediaFile && r.mediaFile.isImage, isVideo: r.mediaFile && r.mediaFile instanceof S.ZP && r.mediaFile.isVideo }),
                                                                          t = d === p.d.CANCELED ? D.Uk.Cancel : D.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: f, message: _, code: d } }), c?.reportOperationComplete([D.BX.Full, D.BX.SruUpload, D.BX.UploadSubmitUntilSruFinish], t), h(e);
                                                                  }
                                                              };
                                                          if (l && r.uploader) r.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: b, progress: _, error: w, mediaItem: r });
                                                          else if (r.uploader) {
                                                              const { extraInitParams: e = "", preUpload: o = !1 } = d,
                                                                  { enable_1080p_variant: i, mediaFile: s, mediaFileHash: l } = r,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  m = s && s.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  h = be(r, a, { featureSwitches: t, userClaims: n }),
                                                                  p = h ? `&media_category=${h}` : "";
                                                              c?.reportOperationStart(D.BX.SruUpload), r.uploader?.upload({ success: b, progress: _, pause: f, error: w, extraInitParams: e + p, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ce(r), pauseBeforeFinalize: o, withMultiRequests: m, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", s && s.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || i, mediaItem: r });
                                                          }
                                                      });
                                                  return o({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: h }), h;
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: s, gifAsStaticImage: a, uploadOptions: t, featureSwitches: o, userClaims: i })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = d.map((e) => s(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = F), e);
                        });
                    },
                he = (e, t) => {
                    const a = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        a(...e).catch((e) => {
                            if (e.code !== p.d.CANCELED) throw e;
                        });
                };
            function pe(e, t, a, r) {
                const o = e === g.vC.Tweet || e === g.vC.TwitterArticle,
                    i = e === g.vC.TwitterArticle;
                if (t.isSubtitles) return g.xz.Subtitles;
                if (t.isGif && !a) return o ? g.xz.TweetGif : g.xz.DMGif;
                if (t.isAmplify) return g.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: a, userClaims: d } = r,
                        n = (0, g.SB)({ featureSwitches: a, userClaims: d }),
                        s = a.getNumberValue("media_async_upload_amplify_duration_threshold", g.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > s ? g.xz.AmplifyVideo : i ? g.xz.TweetVideo : o ? g.xz.AmplifyVideo : g.xz.DMVideo;
                }
                return o ? g.xz.TweetImage : g.xz.DMImage;
            }
            function be(e, t, a) {
                const { location: r, mediaFile: o } = e;
                if (!r || !o) return null;
                switch (r) {
                    case g.vC.Tweet:
                    case g.vC.Dm:
                    case g.vC.TwitterArticle:
                        return pe(r, o, t, a);
                    case g.vC.CommunityBanner:
                        return g.xz.CommunityBanner;
                    case g.vC.ListBanner:
                        return g.xz.ListBanner;
                    case g.vC.ProfileBanner:
                        return g.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const _e = (e, t, a, r, o, i) => {
                o?.reportOperationStart(D.BX.Hash, !0),
                    o?.setMetadata({ hashState: D.Xj.InProgress }),
                    (0, m.Q)(r, i)
                        .then((r) => {
                            const [i] = z(t(), a);
                            if (!i) {
                                throw new G("Media item was removed", { code: m.S.HASHING_ABORTED, type: F, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ae({ id: a, mediaFileHash: r, abortController: void 0 }));
                            const { uploadPromise: d, uploader: n, uploading: s } = i;
                            d && s && n && n.amendUpload({ extraFinalizeParams: r ? `&original_md5=${r}` : void 0 }), o?.setMetadata({ hashState: D.Xj.Complete }), o?.reportOperationComplete(D.BX.Hash, D.Uk.Success);
                        })
                        .catch((r) => {
                            const [i] = z(t(), a);
                            i && e(ae({ id: a, mediaFileHash: null, abortController: void 0 })), r.code === m.S.HASHING_ABORTED ? (o?.setMetadata({ hashState: D.Xj.Canceled }), o?.reportOperationComplete(D.BX.Hash, D.Uk.Cancel)) : (o?.setMetadata({ hashState: D.Xj.Failure }), o?.reportOperationComplete(D.BX.Hash, D.Uk.Failure));
                        });
            };
            y.Z.register({
                [x]: function (e = U, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case Z:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const a = t.payload;
                            return a && a.length ? e.filter((e) => -1 === a.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const a = t.payload;
                            return a
                                ? e.map((e) => {
                                      if (e.id === a.id) {
                                          const t = e.needsProcessing || (a.hasOwnProperty("cropData") && !(0, h.Z)(a.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...a };
                                      }
                                      return e;
                                  })
                                : e;
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        653798: (e, t, a) => {
            a.d(t, { S: () => o });
            var r = a(326439);
            a(585488);
            const o = r.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1.cba3860a.js.map
