"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
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
                m = i(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: s, hideBackButton: l, history: n, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: y, title: v } = this.props,
                                { isModal: _ } = this.context;
                            return a.createElement(o.Z, { style: _ ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (_ ? "close" : "back"), backLocation: r, centerTitle: s, fixed: !_, hideBackButton: l, history: n, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [_ && h.appBarModal, t], subtitle: y, title: v, titleDomId: d.Q_ }));
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
                    return a.createElement(n.Z, null, a.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, g && h.rootModal] }, !g && y, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [h.container, g && h.containerModal, s] }, g ? a.createElement(m.Z, { style: h.viewport }, y, i) : i), t ? a.createElement(o.Z, { style: [h.bottomBarModal, !g && !f && h.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => h, Z: () => y });
            var a = i(202784),
                o = i(325686),
                r = i(167630),
                s = i(992942),
                l = i(392237),
                n = i(111677),
                d = i.n(n),
                c = i(205074),
                u = i(364837),
                m = i(908478);
            const p = d().gff1f69e,
                h = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
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
                    return !(0, m.Z)(e, this.props) || !(0, m.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: l, resizeMode: n } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        m = [g.root, f[e], u && g.loadingBorder],
                        h = this._getImageSrc();
                    return a.createElement(o.Z, { onClick: l, style: m }, u || !h ? a.createElement(r.Z, { "aria-label": p, style: g.activityIndicator }) : a.createElement(s.Z, { resizeMode: n, source: h, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: h.NONE, enableGif: !0, resizeMode: "cover" };
            const f = l.default.create((e) => ({ [h.INFINITE]: { borderRadius: e.borderRadii.infinite }, [h.MEDIUM]: { borderRadius: e.borderRadii.small }, [h.NONE]: { borderRadius: e.borderRadii.none } })),
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
                m = i.n(u),
                p = i(678773),
                h = i(597237),
                b = i(254944),
                f = i(837020),
                g = i(276259),
                y = i(443781),
                v = i(10656),
                _ = i(716233),
                w = i(946208),
                C = i(540387),
                M = i(950822),
                P = i(303186),
                E = i(954300);
            class I extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: o, variants: r, ...s } = this.props,
                        l = (0, P.IM)((0, E.rD)(r), t);
                    return (0, M.Z)("video", { ...s, children: [l.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            I.defaultProps = { dataSaverMode: !1, variants: [] };
            var Z = i(959587),
                B = i(751170),
                x = i(523561),
                S = i(195560);
            const k = (0, x.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.0"), i.e("icons.10"), i.e("icons.20"), i.e("icons.14"), i.e("icons.24"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("icons.26"), i.e("icons.3"), i.e("icons.9"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(S.Z, { hasError: e, onRetry: t }),
                }),
                R = m().gd80afba,
                T = m().j322caee,
                F = m().abd845fe,
                D = m().df1b0708,
                V = m().cd959e5c,
                z = m().e68b09b4,
                L = m().add55c98,
                G = m().f350cf46;
            class A extends a.Component {
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: m, style: y, withAltTextLabel: _, withCloseButton: w, withDragAndDropIndicator: C, withEditButton: M, withEditIcon: P, withEditSensitiveWarningButton: E } = this.props,
                        { mediaContainerSizeStyle: I, playGif: B } = this.state,
                        x = i.externalMediaDetails && i.externalMediaDetails.mediaType === g.Re,
                        S = x || (t && i.mediaFile && i.mediaFile.isGif),
                        k = !!i.mediaFile?.isVideo;
                    return a.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== P ? P : !v.Z.isTwoColumnLayout(t);
                        return a.createElement(o.Z, { "aria-label": e || L, onLayout: this._handleMediaPreviewLayout, role: m, style: [y, W.cursor, x && W.gifPlayButton, I] }, this._renderPreview(), x && !B && a.createElement(s.Z, { "aria-label": D, onPress: this._handleGifClick, size: "small" }), S ? a.createElement(Z.ZP, { type: Z.AM }) : null, _ && !k ? a.createElement(l.Z, { align: "left", altLabel: e }) : null, a.createElement(o.Z, { style: W.editMedia }, C ? a.createElement(n.ZP, { "aria-label": G, hoverLabel: { label: G }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, M && E ? a.createElement(n.ZP, { "aria-label": T, icon: a.createElement(h.default, { style: W.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, M ? a.createElement(n.ZP, { "aria-label": R, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : F) : null), w ? a.createElement(n.ZP, { "aria-label": V, hoverLabel: { label: z }, icon: a.createElement(f.default, null), onPress: u, size: "small", style: W.buttonRight, type: "onMediaDominantColorFilled" }) : null);
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
                    return a.createElement(B.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, o) {
                    const { mediaItem: r } = this.props,
                        s = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof C.ZP) {
                        let s = [];
                        (0, _.TO)(o.fileHandle) && (s = [{ src: t, type: e }]);
                        const l = r.mediaMetadata?.subtitles,
                            n = r?.trimData;
                        return a.createElement(k, { mediaFile: o, mediaId: String(i), mediaItem: r, subtitles: l, trimData: n, variants: s });
                    }
                    {
                        const i = (0, _.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(I, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof C.ZP ? o.thumbnail : "", style: W.video, variants: i }, s?.upload?.mediaFile instanceof w.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: s.displayName, src: s.upload.mediaFile.vtt, srcLang: s.lang }) : null);
                    }
                }
            }
            (A.contextType = y.rC), (A.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const W = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = A;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => n, ZP: () => m, pX: () => d });
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
                m = a.memo(c);
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
                    return i ? u(e) : m(e);
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
                m = (e) => {
                    const t = d.E_(e),
                        i = d.tS(e)[t].mediaIds || [];
                    return (0, n.m3)(e, i);
                },
                p = (e, t) => t.location?.state?.mediaId,
                h = (0, l.Z)()
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
            const f = h(b);
        },
        583813: (e, t, i) => {
            i.r(t), i.d(t, { TabbedMediaEditScreen: () => m, default: () => p });
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
            class m extends o.Component {
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
            const p = u(m);
        },
        109006: (e, t, i) => {
            i.r(t), i.d(t, { PhotoTagsScreen: () => Z, default: () => x });
            var a = i(202784),
                o = i(325686),
                r = i(834324),
                s = i(154003),
                l = i(392237),
                n = i(111677),
                d = i.n(n),
                c = i(47086),
                u = i(908478),
                m = i(625661),
                p = i(980407),
                h = i(597496),
                b = i(339110),
                f = i(161821),
                g = i(668214),
                y = i(632960),
                v = i(104140);
            const _ = (e) => {
                    const t = y.E_(e);
                    return y.tS(e)[t].mediaTags;
                },
                w = (e) => {
                    const t = ((e) => {
                        const t = (0, v.sM)(e),
                            i = (t && (0, f.Z)(t)) || [];
                        return (0, b.It)(i);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                C = (0, g.Z)()
                    .propsFromState(() => ({ existingTags: _, injections: w }))
                    .propsFromActions(() => ({ updateSingleComposer: y.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                M = d().b772cd66,
                P = d().c20dc654,
                E = d().d1175c78,
                I = d().ae0831ab;
            function Z(e) {
                const { history: t, injections: i, existingTags: l = [], updateSingleComposer: n } = e,
                    [d, f] = a.useState(l),
                    [g, y] = a.useState(""),
                    v = (e) => {
                        f(d.filter(({ id: t }) => t !== e.id));
                    },
                    _ = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = l.map((e) => e.data.id_str).sort(),
                            i = e.length === t.length && (0, u.Z)(e, t);
                        return a.createElement(o.Z, { style: B.rightColumn }, a.createElement(s.ZP, { disabled: i, onPress: C, size: "small", type: "primaryFilled" }, M));
                    },
                    w = () => {
                        t.goBack();
                    },
                    C = () => {
                        n({ updates: { mediaTags: d } }), t.goBack();
                    };
                return a.createElement(
                    p.Z,
                    { documentTitle: E, history: t, renderHeader: () => a.createElement(m.ZP, { backButtonType: "close", history: t, onBackClick: w, rightControl: _(), title: E }) },
                    a.createElement(h.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = I({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: g ? void 0 : i,
                        onQueryChange: (e) => {
                            y(e);
                        },
                        onRemove: v,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? v(e) : d.length < 10 && f([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? a.createElement(o.Z, { style: B.inlineCallout }, a.createElement(r.Z, { Icon: c.default, headline: P, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const B = l.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                x = C(Z);
        },
        449161: (e, t, i) => {
            i.d(t, { Z: () => h });
            var a = i(807896),
                o = i(202784),
                r = i(111677),
                s = i.n(r),
                l = i(154003),
                n = i(950822),
                d = i(392237);
            const c = s().i5450bec,
                u = s().f7432494;
            class m extends o.Component {
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
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, (0, a.Z)({ hoverLabel: e ? { label: m ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, n.Z)("input", { accept: e, disabled: t, multiple: i, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: s, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const p = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                h = m;
        },
        183806: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = i(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        41065: (e, t, i) => {
            i.r(t), i.d(t, { default: () => n });
            var a = i(202784),
                o = i(890601),
                r = i(783427),
                s = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const n = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.cb9ddeca.js.map
