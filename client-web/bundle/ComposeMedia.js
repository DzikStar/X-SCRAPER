"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
        625661: (e, t, i) => {
            i.d(t, { ZP: () => h });
            var a = i(202784),
                o = i(614983),
                r = i.n(o),
                s = i(325686),
                l = i(370006),
                n = i(786998),
                d = i(929028),
                c = i(386802);
            function u(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: o, hideBackButton: r, isFullWidth: s, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: f, subtitle: g, title: y, titleDomId: C, titleIconCell: _, titleIconCellSize: v, withBackground: w, withWideContainer: M } = this.props,
                        { isModal: k } = this.context,
                        P = r ? c : a.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!w, k, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(n.Z, { centerTitle: t, centeredLogo: i, isFullWidth: s, isLarge: d, leftControl: P, middleControl: h, position: u(p, k, o), rightControl: m, style: f, subtitle: g, title: y, titleDomId: C, titleIconCell: _, titleIconCellSize: v, withBackground: E, withWideContainer: M }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(s.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => b, w: () => p });
            var a = i(202784),
                o = i(325686),
                r = i(108362),
                s = i(386802),
                l = i(392237),
                n = i(652904),
                d = i(555079),
                c = i(625661),
                u = i(449067),
                h = i(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: s, hideBackButton: l, history: n, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: y, title: C } = this.props,
                                { isModal: _ } = this.context;
                            return a.createElement(o.Z, { style: _ ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (_ ? "close" : "back"), backLocation: r, centerTitle: s, fixed: !_, hideBackButton: l, history: n, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [_ && m.appBarModal, t], subtitle: y, title: C, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: s, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(n.Z, null, a.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && y, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, s] }, g ? a.createElement(h.Z, { style: m.viewport }, y, i) : i), t ? a.createElement(o.Z, { style: [m.bottomBarModal, !g && !f && m.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => y });
            var a = i(202784),
                o = i(325686),
                r = i(167630),
                s = i(992942),
                l = i(392237),
                n = i(111677),
                d = i.n(n),
                c = i(205074),
                u = i(364837),
                h = i(908478);
            const p = d().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class b extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: i } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? i : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: i } = this.state;
                    e ||
                        i ||
                        (t instanceof c.ZP &&
                            t.isGif &&
                            (0, u.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, h.Z)(e, this.props) || !(0, h.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: l, resizeMode: n } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        h = [g.root, f[e], u && g.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(o.Z, { onClick: l, style: h }, u || !m ? a.createElement(r.Z, { "aria-label": p, style: g.activityIndicator }) : a.createElement(s.Z, { resizeMode: n, source: m, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const f = l.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                g = l.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                y = b;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => U });
            var a = i(202784),
                o = i(325686),
                r = i(537392),
                s = i(336961),
                l = i(659651),
                n = i(154003),
                d = i(392237),
                c = i(992942),
                u = i(111677),
                h = i.n(u),
                p = i(678773),
                m = i(597237),
                b = i(254944),
                f = i(837020),
                g = i(276259),
                y = i(443781),
                C = i(10656),
                _ = i(716233),
                v = i(946208),
                w = i(540387),
                M = i(950822),
                k = i(303186),
                P = i(954300);
            class E extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: o, variants: r, ...s } = this.props,
                        l = (0, k.IM)((0, P.rD)(r), t);
                    return (0, M.Z)("video", { ...s, children: [l.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            E.defaultProps = { dataSaverMode: !1, variants: [] };
            var B = i(959587),
                I = i(751170),
                D = i(523561),
                Z = i(195560);
            const x = (0, D.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.21"), i.e("icons.16"), i.e("icons.10"), i.e("icons.4"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.28"), i.e("icons.24"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(Z.Z, { hasError: e, onRetry: t }),
                }),
                S = h().gd80afba,
                T = h().j322caee,
                F = h().abd845fe,
                R = h().df1b0708,
                L = h().cd959e5c,
                V = h().e68b09b4,
                A = h().add55c98,
                G = h().f350cf46;
            class W extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: i } = this.props,
                                a = t.mediaFile || t.externalMediaDetails;
                            if (!a) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: o, width: r },
                                    },
                                } = e,
                                { height: s, width: l } = a,
                                n = l / s;
                            Math.abs(n - r / o) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: o * n } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: r / n } }));
                        }),
                        (this._handleVideoOnPlay = (e) => {
                            this.setState({ isVideoPaused: !1 });
                        }),
                        (this._handleVideoOnPause = (e) => {
                            this.setState({ isVideoPaused: !0 });
                        }),
                        (this._setVideoRef = (e) => {
                            this._video = e;
                        }),
                        (this.playVideo = () => {
                            if (this._video) {
                                const e = this._video.play();
                                void 0 !== e &&
                                    e
                                        .then((e) => {
                                            this._handleVideoOnPlay();
                                        })
                                        .catch();
                            }
                        }),
                        (this.pauseVideo = () => {
                            this._video && (this._video.pause(), this._handleVideoOnPause());
                        });
                }
                render() {
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: h, style: y, withAltTextLabel: _, withCloseButton: v, withDragAndDropIndicator: w, withEditButton: M, withEditIcon: k, withEditSensitiveWarningButton: P } = this.props,
                        { mediaContainerSizeStyle: E, playGif: I } = this.state,
                        D = i.externalMediaDetails && i.externalMediaDetails.mediaType === g.Re,
                        Z = D || (t && i.mediaFile && i.mediaFile.isGif),
                        x = !!i.mediaFile?.isVideo;
                    return a.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== k ? k : !C.Z.isTwoColumnLayout(t);
                        return a.createElement(o.Z, { "aria-label": e || A, onLayout: this._handleMediaPreviewLayout, role: h, style: [y, z.cursor, D && z.gifPlayButton, E] }, this._renderPreview(), D && !I && a.createElement(s.Z, { "aria-label": R, onPress: this._handleGifClick, size: "small" }), Z ? a.createElement(B.ZP, { type: B.AM }) : null, _ && !x ? a.createElement(l.Z, { align: "left", altLabel: e }) : null, a.createElement(o.Z, { style: z.editMedia }, w ? a.createElement(n.ZP, { "aria-label": G, hoverLabel: { label: G }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, M && P ? a.createElement(n.ZP, { "aria-label": T, icon: a.createElement(m.default, { style: z.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, M ? a.createElement(n.ZP, { "aria-label": S, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : F) : null), v ? a.createElement(n.ZP, { "aria-label": L, hoverLabel: { label: V }, icon: a.createElement(f.default, null), onPress: u, size: "small", style: z.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(o.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        r = { uri: i ? e : t };
                    return a.createElement(o.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: r, style: z.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: o, onClick: r } = this.props;
                    return a.createElement(I.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, o) {
                    const { mediaItem: r } = this.props,
                        s = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof w.ZP) {
                        let s = [];
                        (0, _.TO)(o.fileHandle) && (s = [{ src: t, type: e }]);
                        const l = r.mediaMetadata?.subtitles,
                            n = r?.trimData;
                        return a.createElement(x, { mediaFile: o, mediaId: String(i), mediaItem: r, subtitles: l, trimData: n, variants: s });
                    }
                    {
                        const i = (0, _.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(E, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof w.ZP ? o.thumbnail : "", style: z.video, variants: i }, s?.upload?.mediaFile instanceof v.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: s.displayName, src: s.upload.mediaFile.vtt, srcLang: s.lang }) : null);
                    }
                }
            }
            (W.contextType = y.rC), (W.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const z = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = W;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => n, ZP: () => h, pX: () => d });
            var a = i(202784),
                o = i(731708),
                r = i(659651),
                s = i(392237),
                l = i(548721);
            const n = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let s;
                    if (i === n) s = a.createElement(o.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) s = a.createElement(l.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        s = a.createElement(o.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return s ? a.createElement(r.Z, { align: "left" }, s) : null;
                },
                u = s.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = a.memo(c);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                o = i(500002),
                r = i(668214),
                s = i(997174),
                l = i(118823);
            const n = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: l,
                        } = e;
                    let n = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (n = !0));
                    const d = o || l;
                    ((d && o !== l) || (!d && i !== r) || a !== s || n) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, o.ZP)(n(d));
        },
        513313: (e, t, i) => {
            i.d(t, { P: () => a });
            const a = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => b, default: () => f });
            var a = i(807896),
                o = i(202784),
                r = i(443781),
                s = i(536210),
                l = (i(136728), i(668214)),
                n = i(497294),
                d = i(632960);
            const c = (e, t) => {
                    const i = t.location?.state?.showAllMedia;
                    return i ? u(e) : h(e);
                },
                u = (e) => {
                    const t = d.tS(e),
                        i = [];
                    for (const e of t) {
                        const t = e.mediaIds || [];
                        i.push(...t);
                    }
                    return (0, n.m3)(e, i);
                },
                h = (e) => {
                    const t = d.E_(e),
                        i = d.tS(e)[t].mediaIds || [];
                    return (0, n.m3)(e, i);
                },
                p = (e, t) => t.location?.state?.mediaId,
                m = (0, l.Z)()
                    .propsFromState(() => ({ initialMediaId: p, media: c }))
                    .propsFromActions(() => ({ setMediaMetadata: n._B, processMedia: n.C4, updateMediaUpload: n._J }))
                    .withAnalytics({ page: "tabbed_media" });
            class b extends o.Component {
                constructor(e, t) {
                    super(e, t);
                    const { history: i, initialMediaId: a, media: o } = e;
                    (o.length <= 0 || !a) && i.replace("/");
                }
                render() {
                    const e = this.context.featureSwitches.isTrue("sensitive_tweet_warnings_enabled"),
                        { match: t, staticContext: i, ...r } = this.props;
                    return o.createElement(s.Z, (0, a.Z)({}, r, { sensitiveMediaTabEnabled: e }));
                }
            }
            b.contextType = r.rC;
            const f = m(b);
        },
        583813: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => h, default: () => p });
            var a = i(807896),
                o = i(202784),
                r = i(536210),
                s = i(668214),
                l = i(798538),
                n = i(497294);
            const d = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                c = (e, t) => {
                    const i = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, l.W8)(e, i);
                },
                u = (0, s.Z)()
                    .propsFromState(() => ({ media: c, initialMediaId: d }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: n._B, processMedia: n.C4, updateMediaUpload: n._J }))
                    .withAnalytics({ page: "tabbed_media_dm" });
            class h extends o.Component {
                constructor(e) {
                    super(e);
                    const { history: t, initialMediaId: i, media: a } = e;
                    (a.length <= 0 || !i) && t.replace("/");
                }
                render() {
                    const { match: e, staticContext: t, ...i } = this.props;
                    return o.createElement(r.Z, (0, a.Z)({}, i, { sensitiveMediaTabEnabled: !1 }));
                }
            }
            const p = u(h);
        },
        109006: (e, t, i) => {
            i.r(t), i.d(t, { PhotoTagsScreen: () => B, default: () => D });
            var a = i(202784),
                o = i(325686),
                r = i(834324),
                s = i(154003),
                l = i(392237),
                n = i(111677),
                d = i.n(n),
                c = i(47086),
                u = i(908478),
                h = i(625661),
                p = i(980407),
                m = i(597496),
                b = i(339110),
                f = i(161821),
                g = i(668214),
                y = i(632960),
                C = i(104140);
            const _ = (e) => {
                    const t = y.E_(e);
                    return y.tS(e)[t].mediaTags;
                },
                v = (e) => {
                    const t = ((e) => {
                        const t = (0, C.sM)(e),
                            i = (t && (0, f.Z)(t)) || [];
                        return (0, b.It)(i);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                w = (0, g.Z)()
                    .propsFromState(() => ({ existingTags: _, injections: v }))
                    .propsFromActions(() => ({ updateSingleComposer: y.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                M = d().b772cd66,
                k = d().c20dc654,
                P = d().d1175c78,
                E = d().ae0831ab;
            function B(e) {
                const { history: t, injections: i, existingTags: l = [], updateSingleComposer: n } = e,
                    [d, f] = a.useState(l),
                    [g, y] = a.useState(""),
                    C = (e) => {
                        f(d.filter(({ id: t }) => t !== e.id));
                    },
                    _ = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = l.map((e) => e.data.id_str).sort(),
                            i = e.length === t.length && (0, u.Z)(e, t);
                        return a.createElement(o.Z, { style: I.rightColumn }, a.createElement(s.ZP, { disabled: i, onPress: w, size: "small", type: "primaryFilled" }, M));
                    },
                    v = () => {
                        t.goBack();
                    },
                    w = () => {
                        n({ updates: { mediaTags: d } }), t.goBack();
                    };
                return a.createElement(
                    p.Z,
                    { documentTitle: P, history: t, renderHeader: () => a.createElement(h.ZP, { backButtonType: "close", history: t, onBackClick: v, rightControl: _(), title: P }) },
                    a.createElement(m.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = E({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: g ? void 0 : i,
                        onQueryChange: (e) => {
                            y(e);
                        },
                        onRemove: C,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? C(e) : d.length < 10 && f([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? a.createElement(o.Z, { style: I.inlineCallout }, a.createElement(r.Z, { Icon: c.default, headline: k, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const I = l.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                D = w(B);
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                o = i(202784),
                r = i(111677),
                s = i.n(r),
                l = i(154003),
                n = i(950822),
                d = i(392237);
            const c = s().i5450bec,
                u = s().f7432494;
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                i = e.target,
                                a = i.files;
                            a.length && t && t(a), (i.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: i, onChange: r, testID: s, ...d } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, (0, a.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, n.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: s, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
        183806: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = i(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.ca5a23ba.js.map
