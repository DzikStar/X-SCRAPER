"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-9f4db315", "loader.MediaPickerWithPreview"],
    {
        990350: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({
                task(t, i) {
                    const { flow_name: a, test_country_code: n, ...o } = t;
                    return e.post("onboarding/bounce", o, { flow_name: a, test_country_code: n }, { ...i, "content-type": "application/json" });
                },
            });
        },
        447281: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({
                task(t, i) {
                    const { flow_name: a, test_country_code: n, ...o } = t;
                    return e.post("report/flow", o, { flow_name: a, test_country_code: n }, { ...i, "content-type": "application/json" });
                },
            });
        },
        183118: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(506899),
                n = i(111677),
                o = i.n(n);
            const s = o().d5568440,
                r = o().d0511fe6,
                l = o().cd24fe60,
                d = new a.fK.Entity("emailValidity", {}, { processStrategy: (e) => ({ valid: e.valid, errorMessage: e.valid ? "" : e.msg }) }),
                c = new a.fK.Entity("passwordValidity", {}, { processStrategy: (e) => ({ valid: e.pass, errorMessage: e.pass ? "" : s }) }),
                p = new a.fK.Entity("phoneNumberValidity", {}, { processStrategy: (e) => ({ valid: e.valid && e.available, errorMessage: e.valid ? (e.available ? "" : r) : l }) }),
                u = ({ apiClient: e, featureSwitches: t }) => ({ fetchPasswordStrength: (t, i) => e.post("account/password_strength", t, {}, i ?? {}).then((e) => ((e) => (0, a.Fv)(e, c))({ ...e, id: t.password })), isPhoneNumberAvailable: (t, i) => e.get("users/phone_number_available", t, i ?? {}).then((e) => ((e) => (0, a.Fv)(e, p))({ ...e, id: t.raw_phone_number })), isEmailAvailable: (t, i) => e.getI("users/email_available", t, i ?? {}).then((e) => ((e) => (0, a.Fv)(e, d))({ ...e, id: t.email })) });
        },
        625661: (e, t, i) => {
            i.d(t, { ZP: () => u });
            var a = i(202784),
                n = i(614983),
                o = i.n(n),
                s = i(325686),
                r = i(370006),
                l = i(786998),
                d = i(929028),
                c = i(386802);
            function p(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            o()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: n, hideBackButton: o, isFullWidth: s, isLarge: d, leftControl: c, middleControl: u, position: h, rightControl: m, secondaryBar: g, style: f, subtitle: b, title: _, titleDomId: y, titleIconCell: v, titleIconCellSize: w, withBackground: C, withWideContainer: P } = this.props,
                        { isModal: E } = this.context,
                        Z = o ? c : a.createElement(r.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!C, E, !!g);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: s, isLarge: d, leftControl: Z, middleControl: u, position: p(h, E, n), rightControl: m, style: f, subtitle: b, title: _, titleDomId: y, titleIconCell: v, titleIconCellSize: w, withBackground: k, withWideContainer: P }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(s.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        169576: (e, t, i) => {
            i.d(t, { c: () => f, Z: () => b });
            var a = i(202784),
                n = i(325686),
                o = i(392237),
                s = i(530732),
                r = i(992942),
                l = i(731708),
                d = i(154003),
                c = i(725516),
                p = i(111677),
                u = i.n(p);
            const h = i.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = i.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: h, lightMode: m } },
                f = Object.freeze({ MarchMadness: "MarchMadness" }),
                b = ({ buttonOnSameLine: e, link: t, occasion: i, styleOverrides: p, withBackgroundImage: u }) => {
                    const h = (0, c.z)(),
                        m = f[i] || "Occasion",
                        b = u ? `${m}WithBackgroundImage` : m;
                    a.useEffect(() => {
                        h.scribe({ component: b, action: "impression" });
                    }, [h, b]);
                    const y = () => {
                            h.scribe({ component: b, action: "click", element: "card" });
                        },
                        { backgroundcolor: v, buttonSize: w, cardWidth: C, marginbottom: P, textcolor: E } = p ?? {},
                        Z = v ? o.default.theme.colors[v] : o.default.theme.colors.gray0,
                        k = E ? o.default.theme.colors[E] : o.default.theme.colors.gray900,
                        I = P ? o.default.theme.spaces[P] : o.default.theme.spaces.space16,
                        M = { [f.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[i];
                    return u ? a.createElement(s.Z, { interactiveStyles: null, link: t, onPress: y, style: _.bannerContainer }, a.createElement(r.Z, { resizeMode: "contain", source: { uri: "light" === o.default.theme.paletteName ? M.image.lightMode : M.image.darkMode }, style: { height: 85 } })) : a.createElement(n.Z, { style: [_.card, { backgroundColor: Z }, { maxWidth: C }, { marginBottom: I }], testID: "popupCard" }, a.createElement(n.Z, { style: e ? _.horizontalContent : _.verticalContent }, a.createElement(n.Z, { style: e ? _.textContainer : null }, a.createElement(l.ZP, { size: "headline2", style: [_.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, M.header), a.createElement(l.ZP, { size: "subtext1", style: [_.popupDescription, { color: k }] }, M.description, " ", e ? null : M.legalDisclaimer)), a.createElement(n.Z, { style: _.buttonContainer }, a.createElement(d.ZP, { backgroundColor: "light" === o.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: y, size: "medium", style: [_.popupButton, { width: w }] }, M.buttonText), e && a.createElement(l.ZP, { size: "subtext3", style: [_.legalDisclaimer, { color: k }] }, M.legalDisclaimer))));
                },
                _ = o.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => w });
            var a = i(202784),
                n = i(325686),
                o = i(731708),
                s = i(15038),
                r = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(111677),
                p = i.n(c),
                u = i(293615),
                h = i(837020),
                m = i(219229),
                g = i(373554),
                f = i(304059),
                b = i(751170);
            const _ = p().b87ca51a,
                y = p().eebff22c,
                v = a.createElement(u.default, null);
            class w extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: r, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: p, rootStyle: u, withDragDrop: h } = this.props,
                        m = l && !l.uploader,
                        g = a.createElement(a.Fragment, null, this._renderPreview(), m ? null : a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [P.mask, r, C[e]] }), a.createElement(n.Z, { style: [P.overlaidContent, i] }, a.createElement(n.Z, { style: P.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? a.createElement(o.ZP, { align: "center", color: "gray700", size: "subtext1", style: P.description }, t) : null)));
                    return a.createElement(n.Z, { style: [P.container, u, C[e]] }, h && d ? a.createElement(s.ZP, { onFilesAdded: d, style: [P.dragDropContainer, C[e]] }, g) : g);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(r.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: a.createElement(h.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(r.ZP, { "aria-label": y, icon: a.createElement(m.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: o, onAddMediaFiles: s, onEdit: l } = this.props;
                    return s ? a.createElement(g.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: o, onChange: s, size: "large", style: P.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(r.ZP, { "aria-label": i, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: n } = this.props;
                    return n ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: P.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            w.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: b.A.NONE, icon: v };
            const C = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                P = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        873637: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(807896),
                n = i(202784),
                o = i(325686),
                s = i(167630),
                r = i(548485),
                l = i(392237),
                d = i(111677),
                c = i.n(d),
                p = i(205074),
                u = i(653843);
            const h = c().gff1f69e;
            class m extends n.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof p.ZP &&
                        (0, u.ZP)(t).then((e) =>
                            new p.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(s.Z, { "aria-label": h, style: g.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: i, media: a, withAspectRatioOptions: s, withZoomControl: l } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: p = {} } = a || {};
                    return d ? n.createElement(o.Z, { style: g.cropper }, n.createElement(r.Z, { circle: this.props.circle, defaultAspectRatio: (i && i.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: i || c, image: { src: d.url, width: p.width, height: p.height }, ref: e, withAspectRatioOptions: s, withZoomControl: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                f = n.forwardRef((e, t) => n.createElement(m, (0, a.Z)({}, e, { cropperRef: t })));
        },
        337069: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = i(202784),
                n = i(325686),
                o = i(187669);
            const s = { threshold: 0.01 },
                r = (e) => {
                    const { children: t, onImpression: i, style: r } = e,
                        l = a.useRef(null),
                        d = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && i();
                            });
                        };
                    return (
                        (0, o.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(d, s),
                                    t = l.current;
                                null != t && e.observe(t);
                                const i = () => {
                                    const t = l.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return i;
                            }
                        }),
                        a.createElement(n.Z, { ref: l, style: r }, t)
                    );
                };
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => b, h: () => g });
            var a = i(807896),
                n = i(202784),
                o = i(449161),
                s = i(392237),
                r = i(111677),
                l = i.n(r),
                d = i(473026),
                c = i(276259),
                p = i(540387);
            const u = "fileInput",
                h = l().b9960f32,
                m = n.createElement(d.default, null),
                g = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? p.jn : []);
            const f = s.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                b = function ({ "aria-label": e = h, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: s = !0, customMimeTypes: r = [], icon: l = m, size: d = "medium", style: c, withIcon: p = !0, ...b }) {
                    const _ = g({ acceptGifs: t, acceptImages: i, acceptVideo: s }).concat(r).join(",");
                    return n.createElement(o.Z, (0, a.Z)({}, b, { accept: _, "aria-label": e, icon: p ? l : void 0, size: d, style: [f.root, c], testID: u }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => _ });
            var a = i(202784),
                n = i(325686),
                o = i(167630),
                s = i(992942),
                r = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(205074),
                p = i(364837),
                u = i(908478);
            const h = d().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class g extends a.Component {
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
                            (0, p.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, u.Z)(e, this.props) || !(0, u.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: r, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        p = i.needsProcessing || c,
                        u = [b.root, f[e], p && b.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(n.Z, { onClick: r, style: u }, p || !m ? a.createElement(o.Z, { "aria-label": h, style: b.activityIndicator }) : a.createElement(s.Z, { resizeMode: l, source: m, style: b.image }));
                }
            }
            g.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const f = r.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                b = r.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                _ = g;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => N });
            var a = i(202784),
                n = i(325686),
                o = i(537392),
                s = i(336961),
                r = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                p = i(111677),
                u = i.n(p),
                h = i(678773),
                m = i(597237),
                g = i(254944),
                f = i(837020),
                b = i(276259),
                _ = i(443781),
                y = i(10656),
                v = i(716233),
                w = i(946208),
                C = i(540387),
                P = i(950822),
                E = i(303186),
                Z = i(954300);
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: n, variants: o, ...s } = this.props,
                        r = (0, E.IM)((0, Z.rD)(o), t);
                    return (0, P.Z)("video", { ...s, children: [r.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            k.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = i(959587),
                M = i(751170),
                S = i(523561),
                D = i(195560);
            const R = (0, S.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.5"), i.e("icons.28"), i.e("icons.17"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.25"), i.e("icons.13"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("icons.4"), i.e("icons.1"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(D.Z, { hasError: e, onRetry: t }),
                }),
                A = u().gd80afba,
                x = u().j322caee,
                F = u().abd845fe,
                B = u().df1b0708,
                V = u().cd959e5c,
                T = u().e68b09b4,
                z = u().add55c98,
                L = u().f350cf46;
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
                                        layout: { height: n, width: o },
                                    },
                                } = e,
                                { height: s, width: r } = a,
                                l = r / s;
                            Math.abs(l - o / n) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: n * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: o / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: p, role: u, style: _, withAltTextLabel: v, withCloseButton: w, withDragAndDropIndicator: C, withEditButton: P, withEditIcon: E, withEditSensitiveWarningButton: Z } = this.props,
                        { mediaContainerSizeStyle: k, playGif: M } = this.state,
                        S = i.externalMediaDetails && i.externalMediaDetails.mediaType === b.Re,
                        D = S || (t && i.mediaFile && i.mediaFile.isGif),
                        R = !!i.mediaFile?.isVideo;
                    return a.createElement(o.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== E ? E : !y.Z.isTwoColumnLayout(t);
                        return a.createElement(n.Z, { "aria-label": e || z, onLayout: this._handleMediaPreviewLayout, role: u, style: [_, O.cursor, S && O.gifPlayButton, k] }, this._renderPreview(), S && !M && a.createElement(s.Z, { "aria-label": B, onPress: this._handleGifClick, size: "small" }), D ? a.createElement(I.ZP, { type: I.AM }) : null, v && !R ? a.createElement(r.Z, { align: "left", altLabel: e }) : null, a.createElement(n.Z, { style: O.editMedia }, C ? a.createElement(l.ZP, { "aria-label": L, hoverLabel: { label: L }, icon: a.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, P && Z ? a.createElement(l.ZP, { "aria-label": x, icon: a.createElement(m.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, P ? a.createElement(l.ZP, { "aria-label": A, icon: i ? a.createElement(g.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : F) : null), w ? a.createElement(l.ZP, { "aria-label": V, hoverLabel: { label: T }, icon: a.createElement(f.default, null), onPress: p, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(n.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        o = { uri: i ? e : t };
                    return a.createElement(n.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: o, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: n, onClick: o } = this.props;
                    return a.createElement(M.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: o, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, n) {
                    const { mediaItem: o } = this.props,
                        s = o.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof C.ZP) {
                        let s = [];
                        (0, v.TO)(n.fileHandle) && (s = [{ src: t, type: e }]);
                        const r = o.mediaMetadata?.subtitles,
                            l = o?.trimData;
                        return a.createElement(R, { mediaFile: n, mediaId: String(i), mediaItem: o, subtitles: r, trimData: l, variants: s });
                    }
                    {
                        const i = (0, v.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(k, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof C.ZP ? n.thumbnail : "", style: O.video, variants: i }, s?.upload?.mediaFile instanceof w.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: s.displayName, src: s.upload.mediaFile.vtt, srcLang: s.lang }) : null);
                    }
                }
            }
            (G.contextType = _.rC), (G.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                N = G;
        },
        983389: (e, t, i) => {
            i.d(t, { Z: () => o });
            var a = i(202784),
                n = i(272175);
            const o = ({ description: e }) => a.createElement(n.ql, null, a.createElement("meta", { content: e, name: "description" }));
        },
        218093: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                n = i(420740),
                o = i(111677);
            const s = i.n(o)().b2311b70;
            function r() {
                return a.createElement(n.Z, { onRetry: null, title: s });
            }
            const l = a.memo(r);
        },
        977995: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(202784),
                n = i(637786),
                o = i(325686),
                s = i(731708),
                r = i(154003),
                l = i(392237),
                d = i(111677),
                c = i.n(d);
            const p = "recaptcha",
                u = c().c1df579e,
                h = c().b60eba9e,
                m = c().ba939778,
                g = c().bc6efc72;
            class f extends a.Component {
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
                        (i.g.recaptchaOptions = { useRecaptchaNet: !0 });
                }
                _renderConsentForm() {
                    const { nextButtonDisabled: e } = this.props;
                    return a.createElement(o.Z, null, a.createElement(s.ZP, { style: b.guideCopy }, h), a.createElement(o.Z, { style: b.button }, a.createElement(r.ZP, { disabled: e, onPress: this._handleConsent, size: "xLarge", type: "brandOutlined" }, u)), a.createElement(s.ZP, { color: "gray700" }, a.createElement(c().I18NFormatMessage, { $i18n: "hc37d3bb" }, a.createElement(s.ZP, { link: "https://policies.google.com/privacy" }, g))));
                }
                _renderRecaptcha() {
                    const { withConsentForm: e } = this.props;
                    return a.createElement(a.Fragment, null, e ? a.createElement(o.Z, { style: b.recaptchaTitle }, a.createElement(s.ZP, { style: b.guideCopy }, m)) : null, a.createElement(o.Z, { style: b.container }, a.createElement(n.Z, { "data-testid": p, onChange: this._handlePass, sitekey: "6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX" })));
                }
                render() {
                    const { withConsentForm: e } = this.props,
                        { termsAccepted: t } = this.state;
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha();
                }
            }
            const b = l.default.create((e) => ({ container: { margin: "auto", transitionProperty: "opacity", transitionDelay: "2s" }, button: { paddingVertical: e.spaces.space20 }, guideCopy: { paddingTop: e.spaces.space12 }, recaptchaTitle: { paddingBottom: e.spaces.space20 } }));
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => u, pX: () => d });
            var a = i(202784),
                n = i(731708),
                o = i(659651),
                s = i(392237),
                r = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let s;
                    if (i === l) s = a.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) s = a.createElement(r.default, { "aria-label": "Vine", style: p.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        s = a.createElement(n.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return s ? a.createElement(o.Z, { align: "left" }, s) : null;
                },
                p = s.default.create((e) => ({ icon: { color: e.colors.white } })),
                u = a.memo(c);
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => E });
            var a = i(202784),
                n = i(392237),
                o = i(154003),
                s = i(111677),
                r = i.n(s),
                l = i(184605),
                d = i(980407),
                c = i(873637),
                p = i(668214),
                u = i(497294);
            const h = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, u.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                g = (0, p.Z)()
                    .propsFromState(() => ({ media: h, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: u.C4, updateMediaUpload: u._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                b = r().gd80afba,
                _ = r().a753a870;
            class y extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(o.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: a, mediaId: n, onDone: o, processMedia: s, updateMediaUpload: r } = this.props;
                                this.setState({ isProcessing: !0 });
                                const d = t.getCropData(),
                                    { originalMediaFile: c } = a || {},
                                    p = !c || (0 === d.top && 0 === d.left && d.width === c.width && d.height === c.height);
                                (0, l.Z)(n) &&
                                    (e
                                        ? (e(d), o())
                                        : (r({ id: n, cropData: p ? void 0 : d }),
                                          s(n).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), o();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: n, withZoomControl: o } = this.props,
                        s = this._getMedia();
                    return a.createElement(d.Z, { backButtonType: "back", containerStyle: v.root, documentTitle: i || b, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || b }, a.createElement(c.Z, { defaultAspectRatio: e, media: s, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: o }));
                }
            }
            const v = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                w = g(y);
            var C = i(757700);
            const P = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                E = (e) => a.createElement(C.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: P.modal }, a.createElement(w, e));
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var a = i(202784),
                n = i(850496),
                o = i(373554),
                s = i(668214),
                r = i(497294);
            const l = (0, s.Z)().propsFromActions(() => ({ addMedia: r.rA, processMultipleMedia: r.G$ }));
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: n, processMultipleMedia: o } = this.props,
                                s = this._getAcceptedFileInputs(),
                                r = Array.from(e).find((e) => s.includes(e.type));
                            r &&
                                t([r], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), o(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, o.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: o, borderRadius: s, currentContent: r, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onCrop: u, onRemove: h, rootStyle: m } = this.props;
                    return a.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: o, borderRadius: s, currentContent: r, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                n = i(500002),
                o = i(668214),
                s = i(997174),
                r = i(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: a },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: s },
                            locationKey: r,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = n || r;
                    ((d && n !== r) || (!d && i !== o) || a !== s || l) && this._performPageUpdates(this.props);
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
            const c = (0, n.ZP)(l(d));
        },
        3196: (e, t, i) => {
            i.d(t, { Z: () => E });
            i(136728);
            var a = i(202784),
                n = i(99107),
                o = i(688715),
                s = i(154003),
                r = i(111677),
                l = i.n(r),
                d = i(261214),
                c = i(462775),
                p = i(182495),
                u = i(601798),
                h = i(500002),
                m = i(443781),
                g = i(406837),
                f = i(950570),
                b = i(911318);
            const _ = l().ib65b1c6,
                y = l().f55cebb8,
                v = l().dcc304d6,
                w = l().g61ed8a4,
                C = { clientId: b.fp, scope: "name email", usePopup: !0 };
            class P extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, c.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case p.yX.LogIn:
                                    return y;
                                case p.yX.ContinueWith:
                                    return v;
                                default:
                                    return _;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(n.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...C, redirectURI: (0, o.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: i, history: a, loginReturnPath: o, personalizationSettings: s, shouldPropagateP13nSettings: r, ssoInitTokens: l } = this.props,
                                { allowCookieUse: d, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = s || {};
                            t.scribe({ component: "apple_sign_in", element: i, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: i, action: "success" });
                                        const s = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        a.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: r && { allow_cookie_use: !!d, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ display_name: s && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: n.Bm.Apple, state: l[n.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? o : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: a } = this.props,
                                            { error: n } = e;
                                        n !== b.IN ? (t.scribe({ component: "apple_sign_in", element: i, action: "failure" }), a({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
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
                        { isScriptLoaded: i } = this.state,
                        n = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : a.createElement(s.ZP, { backgroundColor: "white", borderColor: "gray200", children: n, color: "alwaysBaseGray1100", disabled: !i, fontWeight: "normal", icon: a.createElement(d.default, null), onPress: this._handleOnPress, size: e, style: t, testID: f.Z.apple });
                }
            }
            (P.contextType = m.rC), (P.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const E = (0, h.ZP)((0, g.Z)(P));
        },
        659492: (e, t, i) => {
            i.r(t), i.d(t, { default: () => p });
            var a = i(202784),
                n = i(99107),
                o = i(107267),
                s = i(125363),
                r = i(205253),
                l = i(390387),
                d = i(466441),
                c = i(443781);
            function p(e) {
                return (0, s.v9)(l.sJ) ? a.createElement(u, null) : a.createElement(d.default, e);
            }
            function u() {
                const e = (0, o.useHistory)(),
                    t = (0, s.I0)(),
                    i = (0, s.v9)(l.sJ),
                    d = (0, s.oR)(),
                    { featureSwitches: p } = (0, c.QZ)();
                return (
                    a.useEffect(() => {
                        if (!i) return;
                        t((0, l.Jm)("/i/conferences-room"));
                        const a = p.isTrue("responsive_web_sso_redirect_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_enabled");
                        t((0, l.CA)(n.Bm.Google)).then(() => {
                            const t = d.getState(),
                                o = (0, l.yl)(t),
                                { allowCookieUse: s, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = r.kQ(t),
                                h = r.LP(t).is_eu_country,
                                m = (0, l.V_)(t);
                            e.replace({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: h && { allow_cookie_use: !!s, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ id_token: i, provider: n.Bm.Google, state: o[n.Bm.Google], redirect_uri: a ? m : void 0 }) } } });
                        });
                    }, [i, t, p, e, d]),
                    null
                );
            }
        },
        53140: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                n = i(325686),
                o = i(392237),
                s = i(111677),
                r = i.n(s),
                l = i(516951),
                d = i(808692),
                c = i(668214),
                p = i(390387);
            const u = (0, c.Z)().propsFromState(() => ({ language: p.VT })),
                h = r().gde8fdd7({ mention: "X" }),
                m = { text: h, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, h.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [h.indexOf("@"), h.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class g extends a.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: i } = this.props;
                    this._tweet = { ...m, ...i, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return a.createElement(n.Z, { "aria-hidden": !0, style: [f.width, e && f.tweetBorder] }, a.createElement(d.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), a.createElement(n.Z, { style: o.default.absoluteFill }));
                }
            }
            g.defaultProps = { tweet: m, withTweetBorder: !1 };
            const f = o.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                b = u(g);
        },
        700613: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = i(807896),
                n = i(202784),
                o = i(872660),
                s = i(917920);
            const r = (e) => {
                const { onRef: t, ...i } = e;
                return n.createElement(o.Z, (0, a.Z)({ module: s.Z, onRef: t, type: "email" }, i));
            };
        },
        872660: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                n = i(855488),
                o = i(666536),
                s = i(908478),
                r = i(71620),
                l = i(668214);
            const d = (e, t) => t.module.selectEntitiesWithFetchStatus(e),
                c = (0, l.Z)()
                    .propsFromState(() => ({ validity: d }))
                    .propsFromActions(({ module: e }) => ({ clearValidity: e.clear, createLocalApiErrorHandler: (0, r.zr)("VALIDITY_FIELD_CONTEXT"), validate: e.validate }));
            class p extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._setInputRef = (e) => {
                            this._input = e;
                        }),
                        (this._handleValueChange = (e) => {
                            const { onChange: t, validationParams: i } = this.props,
                                a = e.target.value.trim();
                            this._validateDebounced({ value: a, ...i }), this.setState({ value: a }), t && t(e);
                        }),
                        (this._getIsValid = (e, t) => !!(t && e[t] && e[t].valid));
                    const i = e.defaultValue || "";
                    (this.state = { value: i, isValid: this._getIsValid(e.validity, i) }), (this._validateDebounced = (0, o.Z)(({ value: e, ...t }) => this.props.validate(e, t).catch(this.props.createLocalApiErrorHandler()), 500));
                }
                componentWillUnmount() {
                    this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null);
                }
                componentDidMount() {
                    const { defaultValue: e, validationParams: t } = this.props;
                    e && this._validateDebounced({ value: e, ...t }), this.props.onValidityChange(this.state.isValid), this.props.onRef({ clear: () => this.clear(), focus: () => this.focus(), isValid: () => this.isValid(), getValue: () => this.getValue() });
                }
                UNSAFE_componentWillUpdate(e, t) {
                    const { validity: i } = this.props,
                        { value: a } = this.state;
                    if (i !== e.validity || a !== t.value) {
                        const i = this._getIsValid(e.validity, t.value);
                        this.state.isValid !== i && this.setState({ isValid: i });
                    }
                }
                componentDidUpdate(e, t) {
                    const { value: i } = this.state,
                        a = t.isValid !== this.state.isValid,
                        n = !(0, s.Z)(e.validationParams, this.props.validationParams);
                    a ? this.props.onValidityChange(this.state.isValid) : i && n && (this.props.clearValidity(), this._validateDebounced({ value: i, ...this.props.validationParams }));
                }
                render() {
                    const { autoComplete: e, autoFocus: t, editable: i, label: o, name: s, style: r, type: l, validity: d } = this.props,
                        { value: c } = this.state,
                        p = c && d[c] ? d[c].errorMessage : "";
                    return a.createElement(n.Z, { autoComplete: e, autoFocus: t, editable: i, errorText: p, invalid: !!p, label: o, name: s, onChange: this._handleValueChange, ref: this._setInputRef, style: r, type: l, value: this.state.value });
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
        102516: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = i(807896),
                n = i(202784),
                o = i(872660),
                s = i(580134);
            const r = (e) => {
                const { countryCode: t, onRef: i, ...r } = e,
                    l = { country_code: t };
                return n.createElement(o.Z, (0, a.Z)({ module: s.Z, onRef: i, type: "tel", validationParams: l }, r));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-9f4db315.86fe5a0a.js.map
