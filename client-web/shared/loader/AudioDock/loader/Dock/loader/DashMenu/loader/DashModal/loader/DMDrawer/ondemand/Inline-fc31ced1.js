"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1", "loader.directMessagesData-63cb1cc4"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => o });
            var a = i(10622),
                r = i.n(a);
            function o(e, t, i, a) {
                return r()(e, t, i, a ? { networkCacheConfig: { metadata: { isFatalError: a } } } : void 0).toPromise();
            }
        },
        335923: (e, t, i) => {
            i.d(t, { Z: () => a });
            i(202784);
            const a = (0, i(523561).Z)({
                loader: () =>
                    Promise.all([
                        i.e("modules.common-e907d115"),
                        i.e("modules.common-e019dbda"),
                        i.e("modules.audio-6107ac1a"),
                        i.e("modules.audio-b953418a"),
                        i.e("modules.audio-7c51e6a7"),
                        i.e("modules.audio-04db59e9"),
                        i.e("modules.audio-76583d6c"),
                        i.e("modules.audio-b7a8a5fb"),
                        i.e("modules.audio-51f6e793"),
                        i.e("modules.audio-e019dbda"),
                        i.e("modules.audio-262c94d4"),
                        i.e("modules.audio-c6fe4ea4"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        i.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        i.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        i.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        i.e("shared~bundle.Grok~loader.Markdown"),
                        i.e("loader.Markdown"),
                    ]).then(i.bind(i, 312778)),
            });
        },
        715601: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                r = i(202784),
                o = i(325686),
                s = i(666305),
                n = i(912021),
                d = i(443781),
                l = i(794175),
                u = i(427266),
                c = i(224175);
            class m extends r.Component {
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
                                        s.Z.unobserveAll(this._lastRef), (this._lastRef = e), s.Z.observe(e, this._handleResize);
                                        const i = this._getViewport(e);
                                        this.setState({ viewport: i }), t && t(i);
                                    }
                                });
                        }),
                        (this._getDataSet = (0, n.Z)((e = {}) => ({ ...e, viewportview: "true" }))),
                        (this.state = { viewport: void 0 });
                }
                render() {
                    const { children: e, dataSet: t, onViewportSet: i, ...s } = this.props,
                        { viewport: n } = this.state,
                        d = n ? r.createElement(l.ZP, { viewport: n }, e) : null;
                    return r.createElement(o.Z, (0, a.Z)({ ref: this._handleViewRef }, s, { dataSet: this._getDataSet((0, u.dW)(t)) }), d);
                }
                componentWillUnmount() {
                    (this._unmounted = !0), s.Z.unobserveAll(this._lastRef);
                }
                _getViewport(e) {
                    return new c.Z(e);
                }
            }
            m.contextType = d.rC;
        },
        782642: (e, t, i) => {
            i.d(t, { p: () => s });
            var a = i(202784),
                r = i(125363),
                o = i(601576);
            const s = () => {
                    const e = (0, r.I0)(),
                        t = n(),
                        i = a.useRef(null);
                    return (
                        a.useEffect(() => () => clearTimeout(i.current), [t]),
                        a.useCallback(
                            (a) => {
                                e((0, o.fz)(a)), (i.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                n = () => {
                    const e = (0, r.I0)();
                    return a.useCallback(() => e((0, o.RS)()), [e]);
                };
        },
        224175: (e, t, i) => {
            i.d(t, { Z: () => s });
            i(136728);
            var a = i(503882),
                r = i(781268),
                o = i(700534);
            class s {
                constructor(e) {
                    (this._offsetTop = 0),
                        (this._handleIntersectionChange = (e, t) => {
                            (0, o.pd)(e, t, this._observedElementsMap);
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
                    return new a.Z(e.top + this._offsetTop, e.height);
                }
                getRect2D() {
                    const e = this._domNode.getBoundingClientRect();
                    return new r.Z(e.left, e.top + this._offsetTop, e.width, e.height);
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
                scrollTo(e, t, i) {
                    const a = t - this.scrollY();
                    i ? this._domNode.scrollTo({ top: e, left: t, behavior: i }) : ((this._domNode.scrollLeft = e), (this._domNode.scrollTop = t)), this._programmaticScrollListeners.forEach((e) => e(a));
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
                addIntersectionObserverListener(e, t, i) {
                    if (!this._intersectionObserver) {
                        this._intersectionThreshold = i;
                        const e = this._getIOConfigOptions();
                        this._intersectionObserver = (0, o.wE)(e, this._observedElementsMap, this._handleIntersectionChange);
                    }
                    if (this._intersectionObserver) {
                        return (0, o.D1)(this._intersectionObserver, this._observedElementsMap, t, e);
                    }
                }
                getRootMargin() {
                    const e = getComputedStyle(this._domNode).paddingBottom,
                        t = getComputedStyle(this._domNode).paddingLeft,
                        i = getComputedStyle(this._domNode).paddingRight;
                    return `${getComputedStyle(this._domNode).paddingTop} ${i} ${e} ${t}`;
                }
                _getIOConfigOptions() {
                    return { root: this._domNode, rootMargin: this.getRootMargin(), threshold: this._intersectionThreshold };
                }
                _addListener(e, t) {
                    const i = () => t();
                    this._domNode.addEventListener(e, i);
                    return () => {
                        this._domNode.removeEventListener(e, i);
                    };
                }
            }
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => o });
            const a = (e, t, i) => {
                    const a = new Date();
                    let r = a.getFullYear() - e;
                    const o = a.getMonth() + 1 - t;
                    if (o < 0) r -= 1;
                    else if (0 === o) {
                        a.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? a(e, t, i) < 18 : r),
                o = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => K, O9: () => W, ZP: () => q, vK: () => J });
            var a = i(688715),
                r = i(111677),
                o = i.n(r),
                s = i(653843),
                n = i(122123),
                d = i(417144),
                l = i(884495),
                u = i(716233),
                c = i(540387);
            const m = o().b8098028,
                p = o().b36f4170,
                h = o().hab3781e,
                _ = o().f6c4fb02,
                f = o().g0af3dd2,
                g = o().b8c8b0be,
                b = o().ica6d718,
                w = o().b28d44f7({ limit: 15 }),
                D = o().i1db7d13,
                M = o().baac0ed7,
                S = D({ limit: 512 }),
                v = o().a22385bb,
                I = o().be0440bf,
                A = v({ limit: 140 }),
                y = o().feeba512,
                T = o().db123c02,
                O = o().db6001e7({ limit: 5 }),
                E = o().eb96d952,
                L = o().i859a9d4,
                P = o().b3880588,
                C = o().ca058b68,
                x = o().id24379c,
                U = o().h4d7cbcc,
                N = (0, a.ju)("https://support.x.com/articles/20156423"),
                F = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                R = (e) => ({ text: e }),
                B = (e) => ({ text: e, action: { label: L, link: N } }),
                z = (e) => ({ text: e, action: { label: L, link: F } }),
                k = { [s.Y7.GIF_IS_TOO_LARGE]: R(w), [s.Y7.CANNOT_BE_PROCESSED]: R(m), [s.Y7.FILE_IS_NOT_AN_IMAGE]: R(h) },
                V = { [d.d.ZERO_FILE_LENGTH]: R(p), [d.d.TIMEOUT]: R(P) },
                Z = { ...V, [d.d.FILE_TOO_LARGE]: R(O), [d.d.UNSUPPORTED_MEDIA]: B(T), [d.d.INVALID_MEDIA]: B(y) },
                G = { ...V, [d.d.FILE_TOO_LARGE]: R(w), [d.d.UNSUPPORTED_MEDIA]: B(f), [d.d.INVALID_MEDIA]: B(_) },
                $ = { ...V, [d.d.FILE_TOO_LARGE]: R(S), [d.d.UNSUPPORTED_MEDIA]: z(b), [d.d.INVALID_MEDIA]: z(g) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                H = 1073741824,
                W = (e) => Object.values(j).includes(e.type),
                Y = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? R(w) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? R(i >= H ? M({ limit: Math.round(i / H) }) : D({ limit: Math.round(i / X) })) : R(S);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? R(I({ limit: Math.round(i / 60) })) : { text: v({ limit: Math.round(i) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : R(A);
                            case j.RESIZE:
                                return k[t];
                            case j.UPLOAD:
                                if (e.isImage) return Z[t];
                                if (e.isGif) return G[t];
                                if (e.isVideo) return $[t];
                                break;
                            case j.METADATA:
                                return R(U);
                        }
                },
                K = (e) => {
                    if (W(e)) return e;
                };
            function q(e, t = x) {
                const i = K(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return Y(i) || R(a);
                }
            }
            function J(e, t = C) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? R(E) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? z(g) : R(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => c, Xj: () => m, ZP: () => v });
            var a = i(468811),
                r = i.n(a),
                o = i(595088),
                s = i(161821),
                n = i(184605),
                d = i(716233),
                l = i(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? h(e) : void 0),
                h = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${_(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                _ = (e) =>
                    (0, s.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                b = { [f.SruUpload]: g.SruUpload, [f.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                w = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                D = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                M = () => (window.performance ? window.performance.now() : Date.now()),
                S = (e, t) => (e === d.xz.DMGif || e === d.xz.TweetGif ? w.All : (e !== d.xz.DMVideo && e !== d.xz.TweetVideo && e !== d.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? w.Short : t < 20 ? w.Medium : t < 45 ? w.Long : t < 90 ? w.XLong : t < 140 ? w.L90to140s : t < 300 ? w.L140to300s : t < 600 ? w.L300to600s : t < 1200 ? w.L600to1200s : t < 1800 ? w.L1200to1800s : t < 2700 ? w.L1800to2700s : t < 3600 ? w.L2700to3600s : t < 4500 ? w.L3600to4500s : t < 5400 ? w.L4500to5400s : t < 6300 ? w.L5400to6300s : t < 7200 ? w.L6300to7200s : t < 10800 ? w.L7200to10800s : t < 14400 ? w.L10800to14400s : w.LGT14400s);
            class v {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? u.Remote : u.LocalFile}:${i}:${S(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = D(this._startTimes[e], M());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
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
                    let e = D(this._startTimes[f.Full], M());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const t = this._getKey(f.Full, "submit");
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
                    const i = (this._eagerUploadDisabled && b[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: p(i) };
                    l.IM(e, a, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => f, SB: () => S, TO: () => I, Tz: () => b, U$: () => M, ff: () => g, vC: () => D, vn: () => v, xz: () => w, y$: () => h });
            var a = i(182056),
                r = i(323265),
                o = i(540387);
            const s = 1024,
                n = 1024 * s,
                d = 1,
                l = 4096,
                u = 2048,
                c = 400,
                m = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                h = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                _ = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                b = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                w = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                D = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                M = (e) => {
                    const { height: t, left: i, width: a } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${r},1,1`;
                };
            function S(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function v(e, t, i, f, g) {
                const b = f?.location,
                    w = S({ featureSwitches: e, userClaims: t });
                let M, v;
                if (i.isSubtitles) M = 0;
                else if (i.isGif)
                    switch (b) {
                        case D.Avatar:
                            M = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * n;
                            break;
                        case D.Dm:
                        case D.Tweet:
                        default:
                            M = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * n;
                    }
                else {
                    if (!(i instanceof o.ZP))
                        return (function (e, t, i) {
                            let o;
                            switch (t) {
                                case D.Avatar:
                                    o = c;
                                    break;
                                case D.CommunityBanner:
                                case D.ListBanner:
                                case D.ProfileBanner:
                                    o = m;
                                    break;
                                default:
                                    o = r.ZP.isDesktopOS() ? l : u;
                            }
                            const d = e.getNumberValue("media_async_upload_max_image_size", p.Image) * n;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let n = d;
                                    return "slow-2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * s) : i || "2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * s) : "3g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * s) : "4g" !== a.effectiveType || r.ZP.isDesktopOS() || t !== D.Tweet || (o = l), { maxDimension: o, maxFileSize: Math.min(d, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: d }),
                            );
                        })(e, b, g);
                    if (1 === w) {
                        if ("dm" === b) v = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", _);
                        else v = e.getNumberValue("media_async_upload_longer_video_max_video_duration", h.Duration[w]) * d;
                        M = e.getNumberValue("media_async_upload_longer_video_max_video_size", h.Size[w]) * n;
                    } else (v = e.getNumberValue("media_async_upload_max_video_duration", h.Duration[w]) * d), (M = e.getNumberValue("media_async_upload_max_video_size", h.Size[w]) * n);
                }
                return Promise.resolve({ maxFileSize: M, maxDuration: v });
            }
            function I(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => a, ZP: () => s, h_: () => r });
            i(543673), i(240753), i(128399);
            const a = [".srt", "text/plain", ""],
                r = (e) => -1 !== a.indexOf(e.type),
                o = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class s {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([o(e)], { type: "text/plain charset=UTF-8" }));
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
        540387: (e, t, i) => {
            i.d(t, { Wv: () => r, ZP: () => s, hb: () => o, jn: () => a });
            i(571372), i(543673), i(240753), i(128399);
            const a = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== a.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class s {
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
                        new Promise((i, a) => {
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = o.type), a(i);
                                },
                                s = document.createElement("video");
                            (s.onloadedmetadata = () => {
                                t || (s.videoWidth && s.videoHeight) ? i(s) : r("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (s.onerror = () => {
                                    r("Error loading image", o.LOAD_FAILED);
                                }),
                                (s.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: a } = e;
                        return (this.width = a), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === a)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        537052: (e, t, i) => {
            i.d(t, { Hf: () => s, OA: () => r, mL: () => o });
            i(571372);
            var a = i(837880);
            function r(e, t) {
                const i = (0, a.Z)(t / 100, 0, 1),
                    r = n[e],
                    o = i * (r.max - r.min);
                return l(r.min + o, 3);
            }
            function o(e) {
                const t = (0, a.Z)(e, 0, 1);
                for (let e = 0; e < d.length; e++) {
                    const i = d[e];
                    if ((0 === e && t <= i.min) || (e === d.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = u(t, i.min, i.max);
                        return (e = l(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const s = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [s.uploading]: { name: s.uploading, min: 0, max: 0.5 }, [s.processing]: { name: s.processing, min: 0.5, max: 1 } },
                d = [n.uploading, n.processing];
            function l(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function u(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of d) {
                    if (((t += i.max - i.min), i.max <= i.min)) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (i.min < 0) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (i.max > 1) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && i.min !== e.max) {
                        const t = JSON.stringify({ stage: i, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = i;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, i) => {
            i.d(t, { EM: () => c, K3: () => u, Xp: () => m });
            var a = i(882127),
                r = i(498510),
                o = (i(585488), i(277660)),
                s = i.n(o),
                n = i(708482),
                d = i(944681),
                l = i(535338);
            function u(e) {
                return (function (e) {
                    return (0, n.s)(e, h, {});
                })(e).then(
                    (e) =>
                        !p(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return p((0, l.p)(h, {}));
            }
            function m(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: a } = e;
                            return (0, d.k)(a, i, t, !0);
                        }
                    }
                    return !0;
                })(s()(_, e));
            }
            function p(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: a } = e;
                        return (0, d.k)(a, i, t, !0);
                    }
                }
                return !0;
            }
            const h = r.Z,
                _ = a.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => Y, G$: () => K, Q6: () => H, TU: () => J, WU: () => Q, _B: () => re, _J: () => ie, _T: () => Z, dD: () => ae, gz: () => k, m3: () => V, o6: () => ne, oZ: () => pe, pJ: () => ue, rA: () => X });
            i(571372), i(136728);
            var a = i(99107),
                r = i(411916),
                o = i.n(r),
                s = i(10622),
                n = i.n(s),
                d = i(111677),
                l = i.n(d),
                u = i(205074),
                c = i(653843),
                m = i(514354),
                p = i(908478),
                h = i(417144),
                _ = i(904940),
                f = i(918621),
                g = i(829053),
                b = i(716233),
                w = i(166677),
                D = i(221562),
                M = i(755296),
                S = i(946208),
                v = i(540387),
                I = i(653798),
                A = i(499627),
                y = i(917799),
                T = i(390387),
                O = i(38562),
                E = i(601576),
                L = i(111531),
                P = i(537052);
            const C = l().g40ff2b4,
                x = "mediaUpload",
                U = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                N = `rweb/${x}`,
                F = [],
                R = "upload";
            class B extends Error {
                constructor(e, { code: t, isGif: i, isImage: a, isVideo: r, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!i), (this.isImage = !!a), (this.isVideo = !!r);
                }
            }
            function z(e, t, i) {
                let r = null,
                    o = {},
                    s = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (s = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, M.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: a.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        s.sruHeaders = { ...(0, g.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, a.Oj)(!1), [a.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (s.uploadUrl = U),
                    {
                        upload(t) {
                            (r = new h.Z(e, s)), (o = t), r.upload(o);
                        },
                        amendUpload(e) {
                            (o = { ...o, ...e }), r && r.upload(o);
                        },
                        uploadExternalMedia(t, i, a, o) {
                            (r = new h.Z(e, s)), r.uploadExternalMedia(t, i, a, o);
                        },
                        cancel() {
                            r && r.cancel();
                        },
                    }
                );
            }
            const k = (e) => e[x],
                V = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[x].filter((e) => i.some((t) => t === e.id));
                },
                Z = (e, t) => {
                    const i = V(e, t);
                    if (!i.length) return 0;
                    const a = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(a, 1);
                },
                G = "rweb/mediaUpload/ADD_MEDIA",
                $ = (e) => ({ payload: e, type: G });
            let j = 1;
            function X(e, t) {
                return (i, a, { featureSwitches: r, relayEnvironment: o }) => {
                    const s = Array.from(e, (e) => {
                            if ((0, v.Wv)(e)) {
                                const i = new v.ZP(e, t.isAmplify);
                                if ((0, b.TO)(e)) {
                                    const e = r.isTrue("responsive_web_hevc_upload_preview_enabled") && r.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, S.h_)(e) ? Promise.resolve(new S.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = i((e, t, { relayEnvironment: i }) =>
                            n()(i, I.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, L.K3)(o));
                    return Promise.all(s)
                        .then(
                            (e) => {
                                const a = i(
                                    (function (e, t) {
                                        return (i, a, { featureSwitches: r, userClaims: o }) => {
                                            const { uploadIds: s = [], altTexts: n = [] } = t,
                                                d = (0, O.IX)(a()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const m = r.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let p;
                                                    t.location && (p = he(t.location, e, !1, { featureSwitches: r, userClaims: o }));
                                                    const h = e instanceof v.ZP ? e.duration : void 0,
                                                        _ = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = m && p ? new D.ZP({ isExternal: !1, mediaCategory: p, videoDuration: h }, d) : void 0,
                                                        g = r.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        w = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof v.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: a, width: r } = e;
                                                                        (i.width = r), (i.height = a);
                                                                        i.getContext("2d").drawImage(t, 0, 0, r, a), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: h, width: e.width, height: e.height, orientation: _ }),
                                                        (0, b.vn)(r, o, e, t, d).then(({ maxDimension: d, maxFileSize: m }) => {
                                                            const p = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: m, maxDimension: d, jpgPixelsPerByteForResize: w }),
                                                                h = (0, b.SB)({ featureSwitches: r, userClaims: o }),
                                                                _ = { useLongVideoEndpoint: e.isVideo && h >= 1, actAsUserId: (0, T.dY)(a()) },
                                                                D = p ? void 0 : z(e.fileHandle, r, _),
                                                                M = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: g ? void 0 : null, needsProcessing: p, location: t.location, uploadId: s[l] ?? "", reporter: f, uploader: D, mediaMetadata: { altText: n[l] }, abortController: g ? new AbortController() : void 0 });
                                                            return g && fe(i, a, M.id, e.fileHandle, M.reporter, M.abortController), M;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (i($(e)), e));
                                        };
                                    })(e, t),
                                );
                                return a;
                            },
                            (e) => {
                                const t = (0, w.vK)(e);
                                return t && i((0, E.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            d
                                .then((t) => {
                                    if (t) for (const t of e) i(re(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const H =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: a, previewUrl: r, sourceUrl: o, stillMediaUrl: s, width: n }) =>
                (d, l, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new D.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(D.BX.Full, !0);
                    const m = { actAsUserId: (0, T.dY)(l()) },
                        p = W({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: r || o, previewMediaType: a || i, sourceUrl: o, stillMediaUrl: s, width: n, height: e }, reporter: c, uploader: z(null, u, m) });
                    return d($(p)), c?.toggleOperationPaused(D.BX.Full, !0), [p];
                };
            function W(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const Y =
                    (e) =>
                    (t, i, { featureSwitches: a, userClaims: r }) => {
                        const [o] = V(i(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: s, cropData: n, id: d, location: l, mediaFile: m, needsProcessing: p, originalMediaFile: h } = o;
                        if (!h) return Promise.reject(new Error("media item not found"));
                        const _ = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, O.IX)(i()),
                            g = { location: l };
                        return (0, b.vn)(a, r, h, g, f).then((e) => {
                            const r = { cropData: n, jpgPixelsPerByteForResize: _, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (h.isImage && h instanceof u.ZP)
                                return p
                                    ? (0, c.ZP)(h, r)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (s?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              h !== m && m && m.dispose(), o.uploader && o.uploader.cancel && o.uploader.cancel();
                                              const r = { actAsUserId: (0, T.dY)(i()) },
                                                  s = z(e.fileHandle, a, r),
                                                  n = t(ie({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: s }));
                                              return (o.uploadId || o.uploading) && t(me([d])), n;
                                          })
                                    : Promise.resolve(o);
                            if (h.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", h.isGif ? b.BW.GIF_IS_TOO_LARGE : b.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (h.isVideo && h instanceof v.ZP && h.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", b.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(o);
                        });
                    },
                K = (e, t) => (i, a) => {
                    const { onFailure: r } = t,
                        s = [];
                    return new Promise((t, a) => {
                        const n = (e) => {
                            if (!e.length) return t(s);
                            const [a] = e;
                            o()(() => {
                                a.reporter?.reportOperationStart(D.BX.Full, !0),
                                    a.reporter?.reportOperationStart([D.BX.Processing, D.BX.Metadata]),
                                    a.reporter?.reportOperationComplete(D.BX.Metadata, D.Uk.Complete),
                                    i(Y(a.id)).then(
                                        (t) => {
                                            s.push(t), t?.reporter?.reportOperationComplete(D.BX.Processing, D.Uk.Success), t?.reporter?.toggleOperationPaused(D.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, w.ZP)(t, C);
                                            o && i((0, E.fz)(o));
                                            const { code: s, message: d, name: l, type: u } = t;
                                            a.reporter?.setMetadata({ reason: { name: l, message: d, code: s } });
                                            const m = "maxsize" === u || "maxduration" === u || ("resize" === u && (s === c.Y7.FILE_IS_NOT_AN_IMAGE || s === c.Y7.GIF_IS_TOO_LARGE)) ? D.Uk.Invalid : D.Uk.Failure;
                                            a.reporter?.reportOperationComplete([D.BX.Full, D.BX.Processing], m), r && r(a.id), n(e.slice(1));
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
                return (t, i) => {
                    V(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: a, reporter: r, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), r?.reportOperationComplete(D.BX.Full, D.Uk.Cancel), i && i.dispose(), a && a.dispose();
                    }),
                        t(J(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ie(e) {
                return (t, i) => {
                    t(te(e));
                    const [a] = V(i(), e.id);
                    return a;
                };
            }
            function ae(e) {
                return (t, i) => {
                    const [a] = V(i(), e);
                    a.uploader?.cancel(), t(me(e));
                };
            }
            function re(e, t) {
                return (i) => i(ie({ id: e, mediaMetadata: t }));
            }
            const oe = "SEND_METADATA",
                se = y.dg(N, oe);
            function ne(e) {
                return (t, i, { api: a }) => y._O(t, { params: e, request: a.withEndpoint(_.Z).metadataCreate })({ actionTypes: se, context: oe });
            }
            const de = "ATTACH_SUBTITLES",
                le = y.dg(N, de);
            function ue(e) {
                return (t, i, a) => {
                    const { subtitlesDisplayName: r, subtitlesLang: o, subtitlesMediaUploadId: s, videoMediaUploadId: n } = e,
                        { api: d, featureSwitches: l, userClaims: u } = a,
                        c = _e(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return y._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: c, subtitlesLang: o, subtitlesMediaUploadId: s, subtitlesDisplayName: r }, request: d.withEndpoint(_.Z).attachSubtitles })({ actionTypes: le, context: de });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, a, { featureSwitches: r, userClaims: o }) => {
                        const s = V(a(), e),
                            n = (e) => i(ie(e));
                        function d(e, i = !1) {
                            const a = r.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: s, id: l, mediaFile: c, mediaFileHash: m, reporter: p, uploader: _ } = e,
                                f = a && c && c.isImage && c instanceof u.ZP,
                                g = void 0 === m;
                            return (
                                p?.toggleOperationPaused(D.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (p?.reportOperationStart(D.BX.UploadSubmitUntilSruFinish), p?.reportUploadSubmit(), f && g && s?.abort(), e.uploading && _ && _.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : _
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: a, updateMediaItem: r, uploadMediaItem: o, uploadOptions: s, userClaims: n } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: c, uploader: m } = a,
                                                      p = new Promise((e, p) => {
                                                          const _ = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([D.BX.Full, D.BX.UploadSubmitUntilSruFinish], D.Uk.Success), e(r({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (r({ id: u, uploadProgress: P.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(D.BX.SruUpload, D.Uk.Success)) : "processing" === t && r({ id: u, uploadProgress: P.OA("processing", e) });
                                                              },
                                                              g = () => {
                                                                  c?.toggleOperationPaused(D.BX.Full, !0);
                                                              },
                                                              w = (t) => {
                                                                  const { code: s, detail_message: n, maxSizeBytes: l, mediaId: _, message: f, name: g } = t;
                                                                  if (a.mediaFile?.isGif && !i && s === b.Tz.INVALID_MEDIA_CODE) m?.amendUpload({ pauseBeforeFinalize: !1 }), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(a, !0).then(e).catch(p);
                                                                  else {
                                                                      d?.abort(), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: s, message: f, detail_message: n, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new B(f ? `${f}` : `Media upload failed [Error code: ${s}]${_ ? ` ${_}` : ""}`, { code: s, type: R, isGif: !!a.externalMediaDetails || (a.mediaFile && a.mediaFile.isGif), isImage: a.mediaFile && a.mediaFile.isImage, isVideo: a.mediaFile && a.mediaFile instanceof v.ZP && a.mediaFile.isVideo }),
                                                                          t = s === h.d.CANCELED ? D.Uk.Cancel : D.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: g, message: f, code: s } }), c?.reportOperationComplete([D.BX.Full, D.BX.SruUpload, D.BX.UploadSubmitUntilSruFinish], t), p(e);
                                                                  }
                                                              };
                                                          if (l && a.uploader) a.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: _, progress: f, error: w, mediaItem: a });
                                                          else if (a.uploader) {
                                                              const { extraInitParams: e = "", preUpload: r = !1 } = s,
                                                                  { enable_1080p_variant: o, mediaFile: d, mediaFileHash: l } = a,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  m = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  p = _e(a, i, { featureSwitches: t, userClaims: n }),
                                                                  h = p ? `&media_category=${p}` : "";
                                                              c?.reportOperationStart(D.BX.SruUpload), a.uploader?.upload({ success: _, progress: f, pause: g, error: w, extraInitParams: e + h, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ce(a), pauseBeforeFinalize: r, withMultiRequests: m, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", d && d.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || o, mediaItem: a });
                                                          }
                                                      });
                                                  return r({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: p }), p;
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: d, gifAsStaticImage: i, uploadOptions: t, featureSwitches: r, userClaims: o })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = s.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = R), e);
                        });
                    },
                pe = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== h.d.CANCELED) throw e;
                        });
                };
            function he(e, t, i, a) {
                const r = e === b.vC.Tweet || e === b.vC.TwitterArticle,
                    o = e === b.vC.TwitterArticle;
                if (t.isSubtitles) return b.xz.Subtitles;
                if (t.isGif && !i) return r ? b.xz.TweetGif : b.xz.DMGif;
                if (t.isAmplify) return b.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: s } = a,
                        n = (0, b.SB)({ featureSwitches: i, userClaims: s }),
                        d = i.getNumberValue("media_async_upload_amplify_duration_threshold", b.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > d ? b.xz.AmplifyVideo : o ? b.xz.TweetVideo : r ? b.xz.AmplifyVideo : b.xz.DMVideo;
                }
                return r ? b.xz.TweetImage : b.xz.DMImage;
            }
            function _e(e, t, i) {
                const { location: a, mediaFile: r } = e;
                if (!a || !r) return null;
                switch (a) {
                    case b.vC.Tweet:
                    case b.vC.Dm:
                    case b.vC.TwitterArticle:
                        return he(a, r, t, i);
                    case b.vC.CommunityBanner:
                        return b.xz.CommunityBanner;
                    case b.vC.ListBanner:
                        return b.xz.ListBanner;
                    case b.vC.ProfileBanner:
                        return b.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const fe = (e, t, i, a, r, o) => {
                r?.reportOperationStart(D.BX.Hash, !0),
                    r?.setMetadata({ hashState: D.Xj.InProgress }),
                    (0, m.Q)(a, o)
                        .then((a) => {
                            const [o] = V(t(), i);
                            if (!o) {
                                throw new B("Media item was removed", { code: m.S.HASHING_ABORTED, type: R, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ie({ id: i, mediaFileHash: a, abortController: void 0 }));
                            const { uploadPromise: s, uploader: n, uploading: d } = o;
                            s && d && n && n.amendUpload({ extraFinalizeParams: a ? `&original_md5=${a}` : void 0 }), r?.setMetadata({ hashState: D.Xj.Complete }), r?.reportOperationComplete(D.BX.Hash, D.Uk.Success);
                        })
                        .catch((a) => {
                            const [o] = V(t(), i);
                            o && e(ie({ id: i, mediaFileHash: null, abortController: void 0 })), a.code === m.S.HASHING_ABORTED ? (r?.setMetadata({ hashState: D.Xj.Canceled }), r?.reportOperationComplete(D.BX.Hash, D.Uk.Cancel)) : (r?.setMetadata({ hashState: D.Xj.Failure }), r?.reportOperationComplete(D.BX.Hash, D.Uk.Failure));
                        });
            };
            A.Z.register({
                [x]: function (e = F, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case G:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, p.Z)(i.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...i };
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
        653798: (e, t, i) => {
            i.d(t, { S: () => r });
            var a = i(326439);
            i(585488);
            const r = a.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1.f3a5983a.js.map
