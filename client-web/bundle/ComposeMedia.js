"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia", "icons/IconCropSquare-js", "icons/IconDraggable-js"],
    {
        625661: (e, t, i) => {
            i.d(t, { ZP: () => h });
            var a = i(202784),
                o = i(614983),
                r = i.n(o),
                n = i(325686),
                s = i(370006),
                l = i(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: o, hideBackButton: r, isFullWidth: n, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: g, subtitle: f, title: y, titleDomId: v, titleIconCell: C, titleIconCellSize: _, withBackground: w, withWideContainer: P } = this.props,
                        { isModal: E } = this.context,
                        M = r ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!w, E, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: n, isLarge: d, leftControl: M, middleControl: h, position: u(p, E, o), rightControl: m, style: g, subtitle: f, title: y, titleDomId: v, titleIconCell: C, titleIconCellSize: _, withBackground: B, withWideContainer: P }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(n.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => b, w: () => p });
            var a = i(202784),
                o = i(325686),
                r = i(108362),
                n = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                u = i(449067),
                h = i(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: n, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: y, title: v } = this.props,
                                { isModal: C } = this.context;
                            return a.createElement(o.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (C ? "close" : "back"), backLocation: r, centerTitle: n, fixed: !C, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [C && m.appBarModal, t], subtitle: y, title: v, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: n, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: b }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && y, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [m.container, f && m.containerModal, n] }, f ? a.createElement(h.Z, { style: m.viewport }, y, i) : i), t ? a.createElement(o.Z, { style: [m.bottomBarModal, !f && !g && m.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = n.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => y });
            var a = i(202784),
                o = i(325686),
                r = i(167630),
                n = i(992942),
                s = i(392237),
                l = i(111677),
                d = i.n(l),
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
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        h = [f.root, g[e], u && f.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(o.Z, { onClick: s, style: h }, u || !m ? a.createElement(r.Z, { "aria-label": p, style: f.activityIndicator }) : a.createElement(n.Z, { resizeMode: l, source: m, style: f.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const g = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                f = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                y = b;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => U });
            var a = i(202784),
                o = i(325686),
                r = i(537392),
                n = i(336961),
                s = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                u = i(111677),
                h = i.n(u),
                p = i(678773),
                m = i(597237),
                b = i(254944),
                g = i(837020),
                f = i(276259),
                y = i(443781),
                v = i(10656),
                C = i(716233),
                _ = i(946208),
                w = i(540387),
                P = i(950822),
                E = i(303186),
                M = i(954300);
            class B extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: o, variants: r, ...n } = this.props,
                        s = (0, E.IM)((0, M.rD)(r), t);
                    return (0, P.Z)("video", { ...n, children: [s.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            B.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = i(959587),
                Z = i(751170),
                k = i(523561),
                x = i(195560);
            const S = (0, k.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.25"), i.e("icons.22"), i.e("icons.6"), i.e("icons.2"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.0"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(x.Z, { hasError: e, onRetry: t }),
                }),
                T = h().gd80afba,
                F = h().j322caee,
                R = h().abd845fe,
                D = h().df1b0708,
                L = h().cd959e5c,
                V = h().e68b09b4,
                z = h().add55c98,
                A = h().f350cf46;
            class G extends a.Component {
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
                                { height: n, width: s } = a,
                                l = s / n;
                            Math.abs(l - r / o) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: o * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: r / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: h, style: y, withAltTextLabel: C, withCloseButton: _, withDragAndDropIndicator: w, withEditButton: P, withEditIcon: E, withEditSensitiveWarningButton: M } = this.props,
                        { mediaContainerSizeStyle: B, playGif: Z } = this.state,
                        k = i.externalMediaDetails && i.externalMediaDetails.mediaType === f.Re,
                        x = k || (t && i.mediaFile && i.mediaFile.isGif),
                        S = !!i.mediaFile?.isVideo;
                    return a.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== E ? E : !v.Z.isTwoColumnLayout(t);
                        return a.createElement(o.Z, { "aria-label": e || z, onLayout: this._handleMediaPreviewLayout, role: h, style: [y, W.cursor, k && W.gifPlayButton, B] }, this._renderPreview(), k && !Z && a.createElement(n.Z, { "aria-label": D, onPress: this._handleGifClick, size: "small" }), x ? a.createElement(I.ZP, { type: I.AM }) : null, C && !S ? a.createElement(s.Z, { align: "left", altLabel: e }) : null, a.createElement(o.Z, { style: W.editMedia }, w ? a.createElement(l.ZP, { "aria-label": A, hoverLabel: { label: A }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, P && M ? a.createElement(l.ZP, { "aria-label": F, icon: a.createElement(m.default, { style: W.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, P ? a.createElement(l.ZP, { "aria-label": T, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : R) : null), _ ? a.createElement(l.ZP, { "aria-label": L, hoverLabel: { label: V }, icon: a.createElement(g.default, null), onPress: u, size: "small", style: W.buttonRight, type: "onMediaDominantColorFilled" }) : null);
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
                    return a.createElement(o.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: r, style: W.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: o, onClick: r } = this.props;
                    return a.createElement(Z.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, o) {
                    const { mediaItem: r } = this.props,
                        n = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof w.ZP) {
                        let n = [];
                        (0, C.TO)(o.fileHandle) && (n = [{ src: t, type: e }]);
                        const s = r.mediaMetadata?.subtitles,
                            l = r?.trimData;
                        return a.createElement(S, { mediaFile: o, mediaId: String(i), mediaItem: r, subtitles: s, trimData: l, variants: n });
                    }
                    {
                        const i = (0, C.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(B, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof w.ZP ? o.thumbnail : "", style: W.video, variants: i }, n?.upload?.mediaFile instanceof _.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: n.displayName, src: n.upload.mediaFile.vtt, srcLang: n.lang }) : null);
                    }
                }
            }
            (G.contextType = y.rC), (G.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const W = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = G;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => h, pX: () => d });
            var a = i(202784),
                o = i(731708),
                r = i(659651),
                n = i(392237),
                s = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let n;
                    if (i === l) n = a.createElement(o.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) n = a.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        n = a.createElement(o.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return n ? a.createElement(r.Z, { align: "left" }, n) : null;
                },
                u = n.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = a.memo(c);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                o = i(500002),
                r = i(668214),
                n = i(997174),
                s = i(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
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
                            location: { pathname: r, search: n },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = o || s;
                    ((d && o !== s) || (!d && i !== r) || a !== n || l) && this._performPageUpdates(this.props);
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
            const c = (0, o.ZP)(l(d));
        },
        513313: (e, t, i) => {
            i.d(t, { P: () => a });
            const a = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => b, default: () => g });
            var a = i(807896),
                o = i(202784),
                r = i(443781),
                n = i(536210),
                s = (i(136728), i(668214)),
                l = i(497294),
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
                    return (0, l.m3)(e, i);
                },
                h = (e) => {
                    const t = d.E_(e),
                        i = d.tS(e)[t].mediaIds || [];
                    return (0, l.m3)(e, i);
                },
                p = (e, t) => t.location?.state?.mediaId,
                m = (0, s.Z)()
                    .propsFromState(() => ({ initialMediaId: p, media: c }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
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
                    return o.createElement(n.Z, (0, a.Z)({}, r, { sensitiveMediaTabEnabled: e }));
                }
            }
            b.contextType = r.rC;
            const g = m(b);
        },
        583813: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => h, default: () => p });
            var a = i(807896),
                o = i(202784),
                r = i(536210),
                n = i(668214),
                s = i(798538),
                l = i(497294);
            const d = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                c = (e, t) => {
                    const i = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, s.W8)(e, i);
                },
                u = (0, n.Z)()
                    .propsFromState(() => ({ media: c, initialMediaId: d }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
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
            i.r(t), i.d(t, { PhotoTagsScreen: () => I, default: () => k });
            var a = i(202784),
                o = i(325686),
                r = i(834324),
                n = i(154003),
                s = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(47086),
                u = i(908478),
                h = i(625661),
                p = i(980407),
                m = i(597496),
                b = i(339110),
                g = i(161821),
                f = i(668214),
                y = i(632960),
                v = i(104140);
            const C = (e) => {
                    const t = y.E_(e);
                    return y.tS(e)[t].mediaTags;
                },
                _ = (e) => {
                    const t = ((e) => {
                        const t = (0, v.sM)(e),
                            i = (t && (0, g.Z)(t)) || [];
                        return (0, b.It)(i);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                w = (0, f.Z)()
                    .propsFromState(() => ({ existingTags: C, injections: _ }))
                    .propsFromActions(() => ({ updateSingleComposer: y.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                P = d().b772cd66,
                E = d().c20dc654,
                M = d().d1175c78,
                B = d().ae0831ab;
            function I(e) {
                const { history: t, injections: i, existingTags: s = [], updateSingleComposer: l } = e,
                    [d, g] = a.useState(s),
                    [f, y] = a.useState(""),
                    v = (e) => {
                        g(d.filter(({ id: t }) => t !== e.id));
                    },
                    C = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = s.map((e) => e.data.id_str).sort(),
                            i = e.length === t.length && (0, u.Z)(e, t);
                        return a.createElement(o.Z, { style: Z.rightColumn }, a.createElement(n.ZP, { disabled: i, onPress: w, size: "small", type: "primaryFilled" }, P));
                    },
                    _ = () => {
                        t.goBack();
                    },
                    w = () => {
                        l({ updates: { mediaTags: d } }), t.goBack();
                    };
                return a.createElement(
                    p.Z,
                    { documentTitle: M, history: t, renderHeader: () => a.createElement(h.ZP, { backButtonType: "close", history: t, onBackClick: _, rightControl: C(), title: M }) },
                    a.createElement(m.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = B({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: f ? void 0 : i,
                        onQueryChange: (e) => {
                            y(e);
                        },
                        onRemove: v,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? v(e) : d.length < 10 && g([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? a.createElement(o.Z, { style: Z.inlineCallout }, a.createElement(r.Z, { Icon: c.default, headline: E, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const Z = s.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                k = w(I);
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                o = i(202784),
                r = i(111677),
                n = i.n(r),
                s = i(154003),
                l = i(950822),
                d = i(392237);
            const c = n().i5450bec,
                u = n().f7432494;
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
                    const { accept: e, disabled: t, multiple: i, onChange: r, testID: n, ...d } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(s.ZP, (0, a.Z)({ hoverLabel: e ? { label: h ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: n, type: "file" }));
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
        390587: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var a = i(202784),
                o = i(890601),
                r = i(783427),
                n = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        678773: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var a = i(202784),
                o = i(890601),
                r = i(783427),
                n = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.86129a4a.js.map
