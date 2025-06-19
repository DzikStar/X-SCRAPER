"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-9f4db315"],
    {
        273919: (e, t, a) => {
            a.d(t, { OY: () => c, aw: () => d, z1: () => p });
            var i = a(506899),
                s = a(111677),
                n = a.n(s);
            const r = n().d5568440,
                o = n().d0511fe6,
                l = n().cd24fe60,
                d = new i.fK.Entity("emailValidity", {}, { processStrategy: (e) => ({ valid: e.valid, errorMessage: e.valid ? "" : e.msg }) }),
                c = new i.fK.Entity("passwordValidity", {}, { processStrategy: (e) => ({ valid: e.pass, errorMessage: e.pass ? "" : r }) }),
                p = new i.fK.Entity("phoneNumberValidity", {}, { processStrategy: (e) => ({ valid: e.valid && e.available, errorMessage: e.valid ? (e.available ? "" : o) : l }) });
        },
        121363: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(506899),
                s = a(676145),
                n = a(588960),
                r = a.n(n),
                o = a(318752);
            const l = (e, t, a) => {
                    const i = (0, o.Z)(e, t, a);
                    if (e && "string" == typeof i.vcard) {
                        const e = r().parse(i.vcard),
                            t = (e && e[0]) || null;
                        return { ...i, vcard: t };
                    }
                    return i;
                },
                d = new i.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, s.Z)(e.id) ? e.id : e.id_str), processStrategy: l });
        },
        229333: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(202784),
                s = a(466999),
                n = a(325686),
                r = a(392237),
                o = a(111677);
            const l = a.n(o)().e5b0063d;
            let d = 0;
            class c extends i.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = l({ title: t });
                    return i.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, i.createElement(s.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), i.createElement(n.Z, { "aria-label": a }, e));
                }
            }
            const p = c;
        },
        169576: (e, t, a) => {
            a.d(t, { c: () => g, Z: () => f });
            var i = a(202784),
                s = a(325686),
                n = a(392237),
                r = a(530732),
                o = a(992942),
                l = a(731708),
                d = a(154003),
                c = a(725516),
                p = a(111677),
                u = a.n(p);
            const h = a.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = a.p + "MarchMadnessBannerLight.02bf82ca.png",
                b = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: h, lightMode: m } },
                g = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: a, styleOverrides: p, withBackgroundImage: u }) => {
                    const h = (0, c.z)(),
                        m = g[a] || "Occasion",
                        f = u ? `${m}WithBackgroundImage` : m;
                    i.useEffect(() => {
                        h.scribe({ component: f, action: "impression" });
                    }, [h, f]);
                    const v = () => {
                            h.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: y, buttonSize: w, cardWidth: E, marginbottom: P, textcolor: Z } = p ?? {},
                        C = y ? n.default.theme.colors[y] : n.default.theme.colors.gray0,
                        I = Z ? n.default.theme.colors[Z] : n.default.theme.colors.gray900,
                        S = P ? n.default.theme.spaces[P] : n.default.theme.spaces.space16,
                        D = { [g.MarchMadness]: { header: b.header, description: b.description, legalDisclaimer: b.legalDisclaimer, buttonText: b.buttonText, image: b.image } }[a];
                    return u ? i.createElement(r.Z, { interactiveStyles: null, link: t, onPress: v, style: _.bannerContainer }, i.createElement(o.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? D.image.lightMode : D.image.darkMode }, style: { height: 85 } })) : i.createElement(s.Z, { style: [_.card, { backgroundColor: C }, { maxWidth: E }, { marginBottom: S }], testID: "popupCard" }, i.createElement(s.Z, { style: e ? _.horizontalContent : _.verticalContent }, i.createElement(s.Z, { style: e ? _.textContainer : null }, i.createElement(l.ZP, { size: "headline2", style: [_.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, D.header), i.createElement(l.ZP, { size: "subtext1", style: [_.popupDescription, { color: I }] }, D.description, " ", e ? null : D.legalDisclaimer)), i.createElement(s.Z, { style: _.buttonContainer }, i.createElement(d.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: v, size: "medium", style: [_.popupButton, { width: w }] }, D.buttonText), e && i.createElement(l.ZP, { size: "subtext3", style: [_.legalDisclaimer, { color: I }] }, D.legalDisclaimer))));
                },
                _ = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        414939: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                s = a(325686),
                n = a(392237);
            class r extends i.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return i.createElement(s.Z, { style: o.root });
                }
            }
            const o = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = r;
        },
        337069: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                s = a(325686),
                n = a(187669);
            const r = { threshold: 0.01 },
                o = (e) => {
                    const { children: t, onImpression: a, style: o } = e,
                        l = i.useRef(null),
                        d = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && a();
                            });
                        };
                    return (
                        (0, n.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(d, r),
                                    t = l.current;
                                null != t && e.observe(t);
                                const a = () => {
                                    const t = l.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return a;
                            }
                        }),
                        i.createElement(s.Z, { ref: l, style: o }, t)
                    );
                };
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(807896),
                s = a(202784),
                n = a(229333),
                r = a(414939),
                o = a(334346);
            const l = ({ accessibilityTitle: e, footer: t = s.createElement(r.Z, null), ...a }) => {
                const l = s.createElement(o.C, (0, i.Z)({}, a, { footer: t }));
                return e ? s.createElement(n.Z, { title: e }, l) : l;
            };
        },
        373554: (e, t, a) => {
            a.d(t, { Z: () => f, h: () => b });
            var i = a(807896),
                s = a(202784),
                n = a(449161),
                r = a(392237),
                o = a(111677),
                l = a.n(o),
                d = a(473026),
                c = a(276259),
                p = a(540387);
            const u = "fileInput",
                h = l().b9960f32,
                m = s.createElement(d.default, null),
                b = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(a ? p.jn : []);
            const g = r.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = h, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: r = !0, customMimeTypes: o = [], icon: l = m, size: d = "medium", style: c, withIcon: p = !0, ...f }) {
                    const _ = b({ acceptGifs: t, acceptImages: a, acceptVideo: r }).concat(o).join(",");
                    return s.createElement(n.Z, (0, i.Z)({}, f, { accept: _, "aria-label": e, icon: p ? l : void 0, size: d, style: [g.root, c], testID: u }));
                };
        },
        751170: (e, t, a) => {
            a.d(t, { A: () => m, Z: () => _ });
            var i = a(202784),
                s = a(325686),
                n = a(167630),
                r = a(992942),
                o = a(392237),
                l = a(111677),
                d = a.n(l),
                c = a(205074),
                p = a(364837),
                u = a(908478);
            const h = d().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class b extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: a } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? a : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: a } = this.state;
                    e ||
                        a ||
                        (t instanceof c.ZP &&
                            t.isGif &&
                            (0, p.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, u.Z)(e, this.props) || !(0, u.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: o, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !d,
                        p = a.needsProcessing || c,
                        u = [f.root, g[e], p && f.loadingBorder],
                        m = this._getImageSrc();
                    return i.createElement(s.Z, { onClick: o, style: u }, p || !m ? i.createElement(n.Z, { "aria-label": h, style: f.activityIndicator }) : i.createElement(r.Z, { resizeMode: l, source: m, style: f.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const g = o.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                f = o.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                _ = b;
        },
        304059: (e, t, a) => {
            a.d(t, { Z: () => N });
            var i = a(202784),
                s = a(325686),
                n = a(537392),
                r = a(336961),
                o = a(659651),
                l = a(154003),
                d = a(392237),
                c = a(992942),
                p = a(111677),
                u = a.n(p),
                h = a(678773),
                m = a(597237),
                b = a(254944),
                g = a(837020),
                f = a(276259),
                _ = a(443781),
                v = a(10656),
                y = a(716233),
                w = a(946208),
                E = a(540387),
                P = a(950822),
                Z = a(303186),
                C = a(954300);
            class I extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: s, variants: n, ...r } = this.props,
                        o = (0, Z.IM)((0, C.rD)(n), t);
                    return (0, P.Z)("video", { ...r, children: [o.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: s });
                }
            }
            I.defaultProps = { dataSaverMode: !1, variants: [] };
            var S = a(959587),
                D = a(751170),
                x = a(523561),
                V = a(195560);
            const M = (0, x.Z)({
                    loader: () =>
                        Promise.all([a.e("icons.25"), a.e("icons.22"), a.e("icons.6"), a.e("icons.2"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.0"), a.e("modules.audio-6107ac1a"), a.e("modules.audio-b953418a"), a.e("modules.audio-7c51e6a7"), a.e("modules.audio-04db59e9"), a.e("modules.audio-76583d6c"), a.e("modules.audio-b7a8a5fb"), a.e("modules.audio-51f6e793"), a.e("modules.audio-e019dbda"), a.e("modules.audio-262c94d4"), a.e("modules.audio-c6fe4ea4"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), a.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), a.e("loader.MediaPreviewVideoPlayer")])
                            .then(a.bind(a, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(V.Z, { hasError: e, onRetry: t }),
                }),
                k = u().gd80afba,
                T = u().j322caee,
                R = u().abd845fe,
                A = u().df1b0708,
                z = u().cd959e5c,
                B = u().e68b09b4,
                F = u().add55c98,
                O = u().f350cf46;
            class L extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: a } = this.props,
                                i = t.mediaFile || t.externalMediaDetails;
                            if (!i) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: s, width: n },
                                    },
                                } = e,
                                { height: r, width: o } = i,
                                l = o / r;
                            Math.abs(l - n / s) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: s * l } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: n / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: d, onEditSensitiveWarning: c, onRemove: p, role: u, style: _, withAltTextLabel: y, withCloseButton: w, withDragAndDropIndicator: E, withEditButton: P, withEditIcon: Z, withEditSensitiveWarningButton: C } = this.props,
                        { mediaContainerSizeStyle: I, playGif: D } = this.state,
                        x = a.externalMediaDetails && a.externalMediaDetails.mediaType === f.Re,
                        V = x || (t && a.mediaFile && a.mediaFile.isGif),
                        M = !!a.mediaFile?.isVideo;
                    return i.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== Z ? Z : !v.Z.isTwoColumnLayout(t);
                        return i.createElement(s.Z, { "aria-label": e || F, onLayout: this._handleMediaPreviewLayout, role: u, style: [_, G.cursor, x && G.gifPlayButton, I] }, this._renderPreview(), x && !D && i.createElement(r.Z, { "aria-label": A, onPress: this._handleGifClick, size: "small" }), V ? i.createElement(S.ZP, { type: S.AM }) : null, y && !M ? i.createElement(o.Z, { align: "left", altLabel: e }) : null, i.createElement(s.Z, { style: G.editMedia }, E ? i.createElement(l.ZP, { "aria-label": O, hoverLabel: { label: O }, icon: i.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, P && C ? i.createElement(l.ZP, { "aria-label": T, icon: i.createElement(m.default, { style: G.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, P ? i.createElement(l.ZP, { "aria-label": k, icon: a ? i.createElement(b.default, null) : void 0, onPress: d, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : R) : null), w ? i.createElement(l.ZP, { "aria-label": z, hoverLabel: { label: B }, icon: i.createElement(g.default, null), onPress: p, size: "small", style: G.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(s.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        n = { uri: a ? e : t };
                    return i.createElement(s.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: n, style: G.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: s, onClick: n } = this.props;
                    return i.createElement(D.Z, { borderRadius: e, enableGif: t, mediaItem: s, onClick: n, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, s) {
                    const { mediaItem: n } = this.props,
                        r = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && s instanceof E.ZP) {
                        let r = [];
                        (0, y.TO)(s.fileHandle) && (r = [{ src: t, type: e }]);
                        const o = n.mediaMetadata?.subtitles,
                            l = n?.trimData;
                        return i.createElement(M, { mediaFile: s, mediaId: String(a), mediaItem: n, subtitles: o, trimData: l, variants: r });
                    }
                    {
                        const a = (0, y.TO)(s.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(I, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: s instanceof E.ZP ? s.thumbnail : "", style: G.video, variants: a }, r?.upload?.mediaFile instanceof w.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: r.displayName, src: r.upload.mediaFile.vtt, srcLang: r.lang }) : null);
                    }
                }
            }
            (L.contextType = _.rC), (L.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const G = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                N = L;
        },
        983389: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                s = a(272175);
            const n = ({ description: e }) => i.createElement(s.ql, null, i.createElement("meta", { content: e, name: "description" }));
        },
        349035: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                s = a(272175);
            const n = (0, a(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), i.createElement(s.ql, null, i.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                s = a(420740),
                n = a(111677);
            const r = a.n(n)().b2311b70;
            function o() {
                return i.createElement(s.Z, { onRetry: null, title: r });
            }
            const l = i.memo(o);
        },
        977995: (e, t, a) => {
            a.d(t, { Z: () => g });
            var i = a(202784),
                s = a(637786),
                n = a(325686),
                r = a(731708),
                o = a(154003),
                l = a(392237),
                d = a(111677),
                c = a.n(d);
            const p = "recaptcha",
                u = c().c1df579e,
                h = c().b60eba9e,
                m = c().ba939778,
                b = c().bc6efc72;
            class g extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handlePass = (e) => {
                            const { onChange: t } = this.props;
                            t && setTimeout(() => t(e), 1e3);
                        }),
                        (this._handleConsent = () => {
                            const { onConsent: e } = this.props;
                            this.setState({ termsAccepted: !0 }), e && e();
                        }),
                        (this.state = { termsAccepted: !1 }),
                        (a.g.recaptchaOptions = { useRecaptchaNet: !0 });
                }
                _renderConsentForm() {
                    const { nextButtonDisabled: e } = this.props;
                    return i.createElement(n.Z, null, i.createElement(r.ZP, { style: f.guideCopy }, h), i.createElement(n.Z, { style: f.button }, i.createElement(o.ZP, { disabled: e, onPress: this._handleConsent, size: "xLarge", type: "brandOutlined" }, u)), i.createElement(r.ZP, { color: "gray700" }, i.createElement(c().I18NFormatMessage, { $i18n: "hc37d3bb" }, i.createElement(r.ZP, { link: "https://policies.google.com/privacy" }, b))));
                }
                _renderRecaptcha() {
                    const { withConsentForm: e } = this.props;
                    return i.createElement(i.Fragment, null, e ? i.createElement(n.Z, { style: f.recaptchaTitle }, i.createElement(r.ZP, { style: f.guideCopy }, m)) : null, i.createElement(n.Z, { style: f.container }, i.createElement(s.Z, { "data-testid": p, onChange: this._handlePass, sitekey: "6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX" })));
                }
                render() {
                    const { withConsentForm: e } = this.props,
                        { termsAccepted: t } = this.state;
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha();
                }
            }
            const f = l.default.create((e) => ({ container: { margin: "auto", transitionProperty: "opacity", transitionDelay: "2s" }, button: { paddingVertical: e.spaces.space20 }, guideCopy: { paddingTop: e.spaces.space12 }, recaptchaTitle: { paddingBottom: e.spaces.space20 } }));
        },
        959587: (e, t, a) => {
            a.d(t, { AM: () => l, ZP: () => u, pX: () => d });
            var i = a(202784),
                s = a(731708),
                n = a(659651),
                r = a(392237),
                o = a(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let r;
                    if (a === l) r = i.createElement(s.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) r = i.createElement(o.default, { "aria-label": "Vine", style: p.icon });
                    else if (a === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        r = i.createElement(s.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return r ? i.createElement(n.Z, { align: "left" }, r) : null;
                },
                p = r.default.create((e) => ({ icon: { color: e.colors.white } })),
                u = i.memo(c);
        },
        56851: (e, t, a) => {
            a.d(t, { Z: () => b });
            var i = a(202784),
                s = a(420740),
                n = a(108362),
                r = a(731708),
                o = a(154003),
                l = a(392237),
                d = a(111677),
                c = a.n(d),
                p = a(349035);
            const u = "error-detail",
                h = c().e49537c2,
                m = c().a9ae1e78;
            class b extends i.PureComponent {
                render() {
                    return i.createElement(s.Z, { testID: u }, i.createElement(p.Z, null), i.createElement(n.Z, { style: g.root }, i.createElement(r.ZP, { align: "center", color: "gray700", style: g.retryText }, h), i.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const g = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        3196: (e, t, a) => {
            a.d(t, { Z: () => Z });
            a(136728);
            var i = a(202784),
                s = a(99107),
                n = a(688715),
                r = a(154003),
                o = a(111677),
                l = a.n(o),
                d = a(261214),
                c = a(462775),
                p = a(182495),
                u = a(601798),
                h = a(500002),
                m = a(443781),
                b = a(406837),
                g = a(950570),
                f = a(911318);
            const _ = l().ib65b1c6,
                v = l().f55cebb8,
                y = l().dcc304d6,
                w = l().g61ed8a4,
                E = { clientId: f.fp, scope: "name email", usePopup: !0 };
            class P extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, c.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case p.yX.LogIn:
                                    return v;
                                case p.yX.ContinueWith:
                                    return y;
                                default:
                                    return _;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(s.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...E, redirectURI: (0, n.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: a, history: i, loginReturnPath: n, personalizationSettings: r, shouldPropagateP13nSettings: o, ssoInitTokens: l } = this.props,
                                { allowCookieUse: d, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = r || {};
                            t.scribe({ component: "apple_sign_in", element: a, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: a, action: "success" });
                                        const r = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        i.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: o && { allow_cookie_use: !!d, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ display_name: r && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: s.Bm.Apple, state: l[s.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? n : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: i } = this.props,
                                            { error: s } = e;
                                        s !== f.IN ? (t.scribe({ component: "apple_sign_in", element: a, action: "failure" }), i({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        u.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: a } = this.state,
                        s = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : i.createElement(r.ZP, { backgroundColor: "white", borderColor: "gray200", children: s, color: "alwaysBaseGray1100", disabled: !a, fontWeight: "normal", icon: i.createElement(d.default, null), onPress: this._handleOnPress, size: e, style: t, testID: g.Z.apple });
                }
            }
            (P.contextType = m.rC), (P.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const Z = (0, h.ZP)((0, b.Z)(P));
        },
        659492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            var i = a(202784),
                s = a(99107),
                n = a(107267),
                r = a(125363),
                o = a(205253),
                l = a(390387),
                d = a(466441),
                c = a(443781);
            function p(e) {
                return (0, r.v9)(l.sJ) ? i.createElement(u, null) : i.createElement(d.default, e);
            }
            function u() {
                const e = (0, n.useHistory)(),
                    t = (0, r.I0)(),
                    a = (0, r.v9)(l.sJ),
                    d = (0, r.oR)(),
                    { featureSwitches: p } = (0, c.QZ)();
                return (
                    i.useEffect(() => {
                        if (!a) return;
                        t((0, l.Jm)("/i/conferences-room"));
                        const i = p.isTrue("responsive_web_sso_redirect_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_enabled");
                        t((0, l.CA)(s.Bm.Google)).then(() => {
                            const t = d.getState(),
                                n = (0, l.yl)(t),
                                { allowCookieUse: r, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = o.kQ(t),
                                h = o.LP(t).is_eu_country,
                                m = (0, l.V_)(t);
                            e.replace({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: h && { allow_cookie_use: !!r, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ id_token: a, provider: s.Bm.Google, state: n[s.Bm.Google], redirect_uri: i ? m : void 0 }) } } });
                        });
                    }, [a, t, p, e, d]),
                    null
                );
            }
        },
        53140: (e, t, a) => {
            a.d(t, { Z: () => f });
            var i = a(202784),
                s = a(325686),
                n = a(392237),
                r = a(111677),
                o = a.n(r),
                l = a(516951),
                d = a(808692),
                c = a(668214),
                p = a(390387);
            const u = (0, c.Z)().propsFromState(() => ({ language: p.VT })),
                h = o().gde8fdd7({ mention: "X" }),
                m = { text: h, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, h.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [h.indexOf("@"), h.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class b extends i.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: a } = this.props;
                    this._tweet = { ...m, ...a, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return i.createElement(s.Z, { "aria-hidden": !0, style: [g.width, e && g.tweetBorder] }, i.createElement(d.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), i.createElement(s.Z, { style: n.default.absoluteFill }));
                }
            }
            b.defaultProps = { tweet: m, withTweetBorder: !1 };
            const g = n.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                f = u(b);
        },
        700613: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(807896),
                s = a(202784),
                n = a(872660),
                r = a(917920);
            const o = (e) => {
                const { onRef: t, ...a } = e;
                return s.createElement(n.Z, (0, i.Z)({ module: r.Z, onRef: t, type: "email" }, a));
            };
        },
        872660: (e, t, a) => {
            a.d(t, { Z: () => u });
            var i = a(202784),
                s = a(855488),
                n = a(666536),
                r = a(908478),
                o = a(71620),
                l = a(668214);
            const d = (e, t) => t.module.selectEntitiesWithFetchStatus(e),
                c = (0, l.Z)()
                    .propsFromState(() => ({ validity: d }))
                    .propsFromActions(({ module: e }) => ({ clearValidity: e.clear, createLocalApiErrorHandler: (0, o.zr)("VALIDITY_FIELD_CONTEXT"), validate: e.validate }));
            class p extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._setInputRef = (e) => {
                            this._input = e;
                        }),
                        (this._handleValueChange = (e) => {
                            const { onChange: t, validationParams: a } = this.props,
                                i = e.target.value.trim();
                            this._validateDebounced({ value: i, ...a }), this.setState({ value: i }), t && t(e);
                        }),
                        (this._getIsValid = (e, t) => !!(t && e[t] && e[t].valid));
                    const a = e.defaultValue || "";
                    (this.state = { value: a, isValid: this._getIsValid(e.validity, a) }), (this._validateDebounced = (0, n.Z)(({ value: e, ...t }) => this.props.validate(e, t).catch(this.props.createLocalApiErrorHandler()), 500));
                }
                componentWillUnmount() {
                    this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null);
                }
                componentDidMount() {
                    const { defaultValue: e, validationParams: t } = this.props;
                    e && this._validateDebounced({ value: e, ...t }), this.props.onValidityChange(this.state.isValid), this.props.onRef({ clear: () => this.clear(), focus: () => this.focus(), isValid: () => this.isValid(), getValue: () => this.getValue() });
                }
                UNSAFE_componentWillUpdate(e, t) {
                    const { validity: a } = this.props,
                        { value: i } = this.state;
                    if (a !== e.validity || i !== t.value) {
                        const a = this._getIsValid(e.validity, t.value);
                        this.state.isValid !== a && this.setState({ isValid: a });
                    }
                }
                componentDidUpdate(e, t) {
                    const { value: a } = this.state,
                        i = t.isValid !== this.state.isValid,
                        s = !(0, r.Z)(e.validationParams, this.props.validationParams);
                    i ? this.props.onValidityChange(this.state.isValid) : a && s && (this.props.clearValidity(), this._validateDebounced({ value: a, ...this.props.validationParams }));
                }
                render() {
                    const { autoComplete: e, autoFocus: t, editable: a, label: n, name: r, style: o, type: l, validity: d } = this.props,
                        { value: c } = this.state,
                        p = c && d[c] ? d[c].errorMessage : "";
                    return i.createElement(s.Z, { autoComplete: e, autoFocus: t, editable: a, errorText: p, invalid: !!p, label: n, name: r, onChange: this._handleValueChange, ref: this._setInputRef, style: o, type: l, value: this.state.value });
                }
                clear() {
                    this.setState({ value: "", isValid: !1 });
                }
                isValid() {
                    return this.state.isValid;
                }
                getValue() {
                    return this.state.value;
                }
                focus() {
                    this._input && this._input.focus();
                }
            }
            p.defaultProps = { label: "" };
            const u = c(p);
        },
        102516: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(807896),
                s = a(202784),
                n = a(872660),
                r = a(580134);
            const o = (e) => {
                const { countryCode: t, onRef: a, ...o } = e,
                    l = { country_code: t };
                return s.createElement(n.Z, (0, i.Z)({ module: r.Z, onRef: a, type: "tel", validationParams: l }, o));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-9f4db315.70ce7cca.js.map
