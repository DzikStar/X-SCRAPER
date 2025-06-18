"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-b308cbaf", "loader.FeedbackSheet"],
    {
        399887: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                r = i(154003),
                n = i(111677),
                o = i.n(n),
                s = i(437358);
            const l = () => {
                const e = o().d2826908,
                    t = o().c80cb4e4;
                return a.createElement(r.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: a.createElement(s.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        625661: (e, t, i) => {
            i.d(t, { ZP: () => u });
            var a = i(202784),
                r = i(614983),
                n = i.n(r),
                o = i(325686),
                s = i(370006),
                l = i(786998),
                d = i(929028),
                c = i(386802);
            function h(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: r, hideBackButton: n, isFullWidth: o, isLarge: d, leftControl: c, middleControl: u, position: p, rightControl: m, secondaryBar: b, style: f, subtitle: g, title: _, titleDomId: y, titleIconCell: C, titleIconCellSize: v, withBackground: M, withWideContainer: E } = this.props,
                        { isModal: k } = this.context,
                        Z = n ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        w = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!M, k, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: o, isLarge: d, leftControl: Z, middleControl: u, position: h(p, k, r), rightControl: m, style: f, subtitle: g, title: _, titleDomId: y, titleIconCell: C, titleIconCellSize: v, withBackground: w, withWideContainer: E }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(o.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, i) => {
            i.r(t), i.d(t, { default: () => h });
            i(136728);
            var a = i(202784),
                r = i(811176),
                n = i(190286),
                o = i(111677),
                s = i.n(o),
                l = i(912021);
            const d = s().cfd2f35e;
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, i, a) =>
                            e.reduce((e, { Icon: r, confirmation: n, disabled: o, excludeFromActionMenu: s, isEmphasized: l, link: d, onClick: c, subText: h, testID: u, text: p, withCancelButton: m }, b) => {
                                if (!s) {
                                    const s = c
                                        ? () => {
                                              n ? (n.render ? a({ cancelCallback: n.onCancel, confirmCallback: c, render: n.render }) : a({ cancelCallback: n.onCancel, confirmCallback: c, text: n.text, headline: n.headline, label: n.label, confirmButtonType: n.confirmButtonType, withCancelButton: n.withCancelButton })) : (c(), i());
                                          }
                                        : i;
                                    e.push({ disabled: o, Icon: r, isEmphasized: l, testID: u, subText: h, text: p, onClick: s, link: d, withBottomBorder: t && t.includes(b) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : a.createElement(r.Z, { cancelButtonLabel: d, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: r, text: o, withCancelButton: s } = e || {};
                        return a.createElement(n.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: o, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: i } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, i, this._handleConfirm);
                }
            }
            const h = c;
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => v });
            var a = i(202784),
                r = i(325686),
                n = i(731708),
                o = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(111677),
                h = i.n(c),
                u = i(293615),
                p = i(837020),
                m = i(219229),
                b = i(373554),
                f = i(304059),
                g = i(751170);
            const _ = h().b87ca51a,
                y = h().eebff22c,
                C = a.createElement(u.default, null);
            class v extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: h, rootStyle: u, withDragDrop: p } = this.props,
                        m = l && !l.uploader,
                        b = a.createElement(a.Fragment, null, this._renderPreview(), m ? null : a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [E.mask, s, M[e]] }), a.createElement(r.Z, { style: [E.overlaidContent, i] }, a.createElement(r.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, h ? this._renderMediaRemove() : null), t ? a.createElement(n.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return a.createElement(r.Z, { style: [E.container, u, M[e]] }, p && d ? a.createElement(o.ZP, { onFilesAdded: d, style: [E.dragDropContainer, M[e]] }, b) : b);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: a.createElement(p.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": y, icon: a.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: r, multiple: n, onAddMediaFiles: o, onEdit: l } = this.props;
                    return o ? a.createElement(b.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: r, multiple: n, onChange: o, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(s.ZP, { "aria-label": i, icon: r, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: r } = this.props;
                    return r ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: r, style: E.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            v.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: C };
            const M = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => b, w: () => p });
            var a = i(202784),
                r = i(325686),
                n = i(108362),
                o = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                h = i(449067),
                u = i(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: n, centerTitle: o, hideBackButton: s, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: _, title: y } = this.props,
                                { isModal: C } = this.context;
                            return a.createElement(r.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (C ? "close" : "back"), backLocation: n, centerTitle: o, fixed: !C, hideBackButton: s, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [C && m.appBarModal, t], subtitle: _, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: o, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        _ = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && _, a.createElement(n.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, o] }, g ? a.createElement(u.Z, { style: m.viewport }, _, i) : i), t ? a.createElement(r.Z, { style: [m.bottomBarModal, !g && !f && m.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = o.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => g, h: () => b });
            var a = i(807896),
                r = i(202784),
                n = i(449161),
                o = i(392237),
                s = i(111677),
                l = i.n(s),
                d = i(473026),
                c = i(276259),
                h = i(540387);
            const u = "fileInput",
                p = l().b9960f32,
                m = r.createElement(d.default, null),
                b = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? h.jn : []);
            const f = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                g = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: l = m, size: d = "medium", style: c, withIcon: h = !0, ...g }) {
                    const _ = b({ acceptGifs: t, acceptImages: i, acceptVideo: o }).concat(s).join(",");
                    return r.createElement(n.Z, (0, a.Z)({}, g, { accept: _, "aria-label": e, icon: h ? l : void 0, size: d, style: [f.root, c], testID: u }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => _ });
            var a = i(202784),
                r = i(325686),
                n = i(167630),
                o = i(992942),
                s = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(205074),
                h = i(364837),
                u = i(908478);
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
                            (0, h.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, u.Z)(e, this.props) || !(0, u.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        h = i.needsProcessing || c,
                        u = [g.root, f[e], h && g.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(r.Z, { onClick: s, style: u }, h || !m ? a.createElement(n.Z, { "aria-label": p, style: g.activityIndicator }) : a.createElement(o.Z, { resizeMode: l, source: m, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const f = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                g = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                _ = b;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => G });
            var a = i(202784),
                r = i(325686),
                n = i(537392),
                o = i(336961),
                s = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                h = i(111677),
                u = i.n(h),
                p = i(678773),
                m = i(597237),
                b = i(254944),
                f = i(837020),
                g = i(276259),
                _ = i(443781),
                y = i(10656),
                C = i(716233),
                v = i(946208),
                M = i(540387),
                E = i(950822),
                k = i(303186),
                Z = i(954300);
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: r, variants: n, ...o } = this.props,
                        s = (0, k.IM)((0, Z.rD)(n), t);
                    return (0, E.Z)("video", { ...o, children: [s.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: r });
                }
            }
            w.defaultProps = { dataSaverMode: !1, variants: [] };
            var P = i(959587),
                I = i(751170),
                B = i(523561),
                L = i(195560);
            const S = (0, B.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.21"), i.e("icons.16"), i.e("icons.10"), i.e("icons.4"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.28"), i.e("icons.24"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), i.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(L.Z, { hasError: e, onRetry: t }),
                }),
                x = u().gd80afba,
                D = u().j322caee,
                R = u().abd845fe,
                A = u().df1b0708,
                F = u().cd959e5c,
                T = u().e68b09b4,
                U = u().add55c98,
                V = u().f350cf46;
            class z extends a.Component {
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
                                        layout: { height: r, width: n },
                                    },
                                } = e,
                                { height: o, width: s } = a,
                                l = s / o;
                            Math.abs(l - n / r) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: r * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: n / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: h, role: u, style: _, withAltTextLabel: C, withCloseButton: v, withDragAndDropIndicator: M, withEditButton: E, withEditIcon: k, withEditSensitiveWarningButton: Z } = this.props,
                        { mediaContainerSizeStyle: w, playGif: I } = this.state,
                        B = i.externalMediaDetails && i.externalMediaDetails.mediaType === g.Re,
                        L = B || (t && i.mediaFile && i.mediaFile.isGif),
                        S = !!i.mediaFile?.isVideo;
                    return a.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== k ? k : !y.Z.isTwoColumnLayout(t);
                        return a.createElement(r.Z, { "aria-label": e || U, onLayout: this._handleMediaPreviewLayout, role: u, style: [_, N.cursor, B && N.gifPlayButton, w] }, this._renderPreview(), B && !I && a.createElement(o.Z, { "aria-label": A, onPress: this._handleGifClick, size: "small" }), L ? a.createElement(P.ZP, { type: P.AM }) : null, C && !S ? a.createElement(s.Z, { align: "left", altLabel: e }) : null, a.createElement(r.Z, { style: N.editMedia }, M ? a.createElement(l.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: a.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, E && Z ? a.createElement(l.ZP, { "aria-label": D, icon: a.createElement(m.default, { style: N.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, E ? a.createElement(l.ZP, { "aria-label": x, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : R) : null), v ? a.createElement(l.ZP, { "aria-label": F, hoverLabel: { label: T }, icon: a.createElement(f.default, null), onPress: h, size: "small", style: N.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(r.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        n = { uri: i ? e : t };
                    return a.createElement(r.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: n, style: N.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: r, onClick: n } = this.props;
                    return a.createElement(I.Z, { borderRadius: e, enableGif: t, mediaItem: r, onClick: n, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, r) {
                    const { mediaItem: n } = this.props,
                        o = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && r instanceof M.ZP) {
                        let o = [];
                        (0, C.TO)(r.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = n.mediaMetadata?.subtitles,
                            l = n?.trimData;
                        return a.createElement(S, { mediaFile: r, mediaId: String(i), mediaItem: n, subtitles: s, trimData: l, variants: o });
                    }
                    {
                        const i = (0, C.TO)(r.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(w, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: r instanceof M.ZP ? r.thumbnail : "", style: N.video, variants: i }, o?.upload?.mediaFile instanceof v.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (z.contextType = _.rC), (z.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const N = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                G = z;
        },
        349035: (e, t, i) => {
            i.d(t, { Z: () => n });
            var a = i(202784),
                r = i(272175);
            const n = (0, i(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(r.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => u, pX: () => d });
            var a = i(202784),
                r = i(731708),
                n = i(659651),
                o = i(392237),
                s = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let o;
                    if (i === l) o = a.createElement(r.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) o = a.createElement(s.default, { "aria-label": "Vine", style: h.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = a.createElement(r.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return o ? a.createElement(n.Z, { align: "left" }, o) : null;
                },
                h = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                u = a.memo(c);
        },
        131779: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                r = i(154003),
                n = i(111677),
                o = i.n(n),
                s = i(320588),
                l = i(71620),
                d = i(668214),
                c = i(576469);
            const h = (0, d.Z)()
                    .propsFromActions(() => ({ removeUserFromList: c.Z.removeUserFromList, addUserToList: c.Z.addUserToList, createLocalApiErrorHandler: (0, l.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                u = o().e68b09b4,
                p = o().af40a8e0;
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => a.createElement(r.ZP, { "aria-label": p, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, p)),
                        (this._renderRemoveButton = () => a.createElement(r.ZP, { "aria-label": u, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, u)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: i, onAdd: a, shouldAddUserToList: r, userId: n } = this.props;
                            r()
                                ? (e(i, { userId: n, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          a && a(n);
                                      })
                                      .catch(t(s.Mt)),
                                  this._scribeAction("add"))
                                : a && a(n);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: i, removeUserFromList: a, userId: r } = this.props;
                            a(t, { userId: r, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    i && i(r);
                                })
                                .catch(e()),
                                this._scribeAction("remove");
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: e, action: "click" });
                        });
                }
                render() {
                    const { getIsMember: e, userId: t } = this.props;
                    return e(t) ? this._renderRemoveButton() : this._renderAddButton();
                }
            }
            const b = h(m);
        },
        737613: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(202784),
                r = i(325686),
                n = i(834324),
                o = i(392237),
                s = i(111677),
                l = i.n(s),
                d = i(125363),
                c = i(390387),
                h = i(919022);
            const u = l().aacfbe55,
                p = l().ga8627cd,
                m = l().e6d2573f,
                b = l().d37a3e15,
                f = (e) => {
                    const { isReply: t, style: i, type: o } = e,
                        s = (0, d.v9)(c.Lz),
                        l = (0, d.v9)(h.ZP.selectViewerUser),
                        f = s ? l?.screen_name : void 0,
                        _ = a.useMemo(() => [g.root, i], [i]);
                    let y = u({ screenName: f });
                    return "Tweet" === o && t ? (y = p({ screenName: f })) : "DM" === o ? (y = m({ screenName: f })) : "List" === o && (y = b({ screenName: f })), f ? a.createElement(r.Z, { style: _ }, a.createElement(n.Z, { text: y })) : null;
                },
                g = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        841993: (e, t, i) => {
            i.d(t, { Z: () => p });
            var a = i(202784),
                r = i(111677),
                n = i.n(r),
                o = i(437358),
                s = i(725516),
                l = i(387524),
                d = i(635510);
            const c = n().d2826908,
                h = n().c80cb4e4,
                u = a.createElement(o.default, null),
                p = (e) => {
                    const { page: t } = e,
                        i = (0, s.z)(),
                        r = a.useCallback(
                            (e) => {
                                i.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, i],
                        );
                    return a.createElement(l.Z, { "aria-label": c, href: "/i/lists/create", icon: u, label: h, onPress: r, scribeComponent: "floating_list_button", testID: d.Z.createList });
                };
        },
        935167: (e, t, i) => {
            i.d(t, { ZP: () => Y });
            i(136728);
            var a = i(202784),
                r = i(325686),
                n = i(601413),
                o = i(392237),
                s = i(111677),
                l = i.n(s),
                d = i(415506),
                c = i(170397),
                h = i(516951),
                u = i(805104),
                p = i(774426),
                m = i(376293),
                b = i(712816),
                f = i(879596),
                g = i(395067),
                _ = i(443781),
                y = i(688715),
                C = i(907552),
                v = i(668214),
                M = i(576469),
                E = i(601576);
            const k = (e, t) => M.Z.selectListAuthorScreenName(e, t.list.id_str),
                Z = (0, v.Z)()
                    .propsFromState(() => ({ author: k }))
                    .propsFromActions(() => ({ addToast: E.fz }))
                    .withAnalytics(),
                w = l().i6da4f7a,
                P = l().a062ff80;
            const I = Z(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: i,
                        } = e,
                        r = ((n = t), (0, y.ju)(`https://x.com/i/lists/${n}`));
                    var n;
                    return a.createElement(C.ZP, { copyLinkShareLabel: P, externalShareLabel: w, scribeNamespace: i, url: r });
                }),
                B = I;
            var L = i(71620),
                S = i(286e3),
                x = i(390387),
                D = i(919022),
                R = i(510588);
            const A = (0, v.Z)()
                .propsFromState(() => ({ author: R.l1, basePath: R.$5, viewerUserId: x._h, isSubscribed: R.cx, list: R.Fz, useRanked: R._g }))
                .propsFromActions(() => ({ addToast: E.fz, block: D.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: M.Z.toggleMute, unblock: D.ZP.unblock, updateRankMode: S.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var F = i(638537);
            l().a9ca06d2;
            const T = l().h63a5c3c,
                U = l().a367dc9a,
                V = l().dd438748,
                z = l().fe7e217c,
                N = l().ce78b698,
                G = l().i5a1628a,
                O = l().f333a93e,
                W = l().c7294984,
                H = l().g6340998,
                $ = (e) => a.createElement(l().I18NFormatMessage, { $i18n: "aa4026bf" }, a.createElement(n.Z, { screenName: e }));
            class j extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._isMutingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_detail_page_muting_enabled")),
                        (this._isSwitchRankingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_ranking_mode_control_enabled")),
                        (this._isOwnList = () => {
                            const { author: e, viewerUserId: t } = this.props;
                            return e && e.id_str === t;
                        }),
                        (this._renderOverflowMenu = () => {
                            const e = this._getActionMenuItems();
                            return this.props.listId && e.length > 0 ? a.createElement(u.Z, { "aria-label": T, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: q.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return a.createElement(p.default, { actionItems: t, onClose: e });
                        }),
                        (this._getActionMenuItems = () => {
                            const { author: e, viewerUserId: t } = this.props,
                                i = [];
                            if (t) {
                                if (!this._isOwnList() && e) {
                                    const e = this._getReportListAction(),
                                        t = this._getUserBlockAction();
                                    e && i.push(e), t && i.push(t);
                                }
                                if (this._isSwitchRankingEnabled) {
                                    const e = this._getSwitchRankModeAction();
                                    i.push(e);
                                }
                                const t = this._getMuteToggleAction();
                                t && i.push(t);
                            }
                            return i;
                        }),
                        (this._getReportListAction = () => {
                            const { analytics: e, list: t, listId: i } = this.props,
                                { featureSwitches: a } = this.context,
                                r = g.C2.List;
                            if ((0, g.Yw)(a, r)) {
                                const i = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: r, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: W, Icon: d.default, onClick: h.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(i) } } } };
                            }
                            return { text: W, Icon: d.default, onClick: h.Z, link: { pathname: `/i/report/list/${i}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: $, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: H, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: i, list: a, toggleMute: r } = this.props;
                            if (a && i && this._isMutingEnabled) return (0, F.Z)({ list: a, addToast: e, toggleMute: r, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? z : G, Icon: c.default, onClick: this._handleSwitchRankMode, subText: e ? N : O };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: i, block: a, createLocalApiErrorHandler: r } = this.props;
                            i &&
                                (a(i.id_str, { promotedContent: i.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, r(b.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: i, unblock: a } = this.props;
                            t && (a(t.id_str, { promotedContent: t.promoted_content }).catch(i(f.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: i, updateRankMode: a, useRanked: r } = this.props,
                                n = r ? U : V,
                                o = r ? "see_latest" : "see_top";
                            a({ listId: i, useRanked: !r }).then(() => {
                                e({ text: n });
                            }),
                                t.scribe({ action: "click", component: "customize", element: o });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return a.createElement(r.Z, { style: q.rightControl }, e ? a.createElement(B, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            j.contextType = _.rC;
            const q = o.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                Y = A(j);
        },
        527409: (e, t, i) => {
            i.r(t), i.d(t, { ListDetail: () => x, default: () => R, formatNumber: () => B });
            var a = i(202784),
                r = i(272175),
                n = i(325686),
                o = i(98538),
                s = i(530525),
                l = i(439592),
                d = i(392237),
                c = i(682474),
                h = i(731708),
                u = i(366635),
                p = i(154003),
                m = i(111677),
                b = i.n(m),
                f = i(121791),
                g = i(401388),
                _ = i(443781),
                y = i(989816),
                C = i(668214),
                v = i(576469),
                M = i(390387),
                E = i(919022),
                k = i(510588);
            const Z = (e, t) => {
                    const { listId: i } = t;
                    return i ? v.Z.select(e, i) : void 0;
                },
                w = (e, t) => {
                    const i = Z(e, t),
                        a = i?.user;
                    return a ? E.ZP.select(e, a) : void 0;
                },
                P = (e, t) => k.tt(e, t.listId),
                I = (0, C.Z)()
                    .propsFromState(() => ({ list: Z, user: w, viewerUserId: M._h, media: P }))
                    .withAnalytics(),
                B = b().d58baa7f,
                L = b().ca5d0a82,
                S = b().j681933e;
            class x extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, g.Z)(t)) {
                                const { url: e } = t;
                                return a.createElement(a.Fragment, null, a.createElement(r.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: e, property: "og:image" })), a.createElement(s.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: d.default.theme.colors.gray300, image: t }));
                            }
                            return a.createElement(c.Z, { ratio: 3 }, a.createElement(n.Z, { style: D.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: i, member_count: o, mode: s, name: l, subscriber_count: d } = e,
                                    c = d || 0,
                                    p = o || 0,
                                    m = "private" === s;
                                return a.createElement(n.Z, { style: D.description }, a.createElement(n.Z, { style: [D.name, D.text] }, a.createElement(h.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), m ? a.createElement(f.default, { "aria-label": S, style: D.iconLock }) : null), i ? a.createElement(a.Fragment, null, a.createElement(r.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: i.trim(), property: "og:description" })), a.createElement(h.ZP, { align: "center", style: D.text }, i.trim())) : null, t ? a.createElement(u.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: D.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(c, p), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: i } = this.props,
                                r = B(e),
                                n = B(t);
                            return a.createElement(o.Z.Group, null, a.createElement(o.Z, { count: t, link: `${i}/members`, onPress: this._handleMembersCountPress }, a.createElement(b().I18NFormatMessage, { $i18n: "b38e130b" }, a.createElement(o.Z.Value, null, b().ibd0106e({ formattedCount: n })), a.createElement(o.Z.Label, null, b().cface2d1({ count: t })))), a.createElement(o.Z, { count: e, link: `${i}/followers`, onPress: this._handleSubscribersCountPress }, ((s = e), (l = r), a.createElement(b().I18NFormatMessage, { $i18n: "d2924acb" }, a.createElement(o.Z.Value, null, b().ec08efe4({ formattedCount: l })), a.createElement(o.Z.Label, null, b().h9f711f0({ count: s }))))));
                            var s, l;
                        }),
                        (this._handleEditPress = () => {
                            this._scribe({ element: "edit", action: "click" });
                        }),
                        (this._handleUserNamePress = () => {
                            this._scribe({ element: "user", action: "click" });
                        }),
                        (this._handleMembersCountPress = () => {
                            this._scribe({ element: "list_member", action: "click" });
                        }),
                        (this._handleSubscribersCountPress = () => {
                            this._scribe({ element: "list_subscribed", action: "click" });
                        }),
                        (this._renderActionButton = () => {
                            const { basePath: e, list: t, user: i, viewerUserId: r, withEditButton: o } = this.props;
                            if (t && t.user) {
                                const s = i?.blocking;
                                return t.user === r && o ? a.createElement(p.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: D.button, type: "primaryOutlined" }, L) : t.user !== r ? a.createElement(n.Z, { style: D.button }, a.createElement(y.Z, { disabled: s, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: i })) : null;
                            }
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        });
                }
                componentDidMount() {
                    this._scribe({ action: "impression" });
                }
                render() {
                    const { list: e, withRoundedCorners: t } = this.props;
                    return e ? a.createElement(n.Z, { style: [D.container, t && D.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (x.contextType = _.rC), (x.defaultProps = { withEditButton: !0 });
            const D = d.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                R = I(x);
        },
        583957: (e, t, i) => {
            i.d(t, { Z: () => H });
            i(136728);
            var a = i(202784),
                r = i(325686),
                n = i(733357),
                o = i(682474),
                s = i(392237),
                l = i(530525),
                d = i(439592),
                c = i(855488),
                h = i(954110),
                u = i(111677),
                p = i.n(u),
                m = i(401388),
                b = i(615656),
                f = i(370111),
                g = i(716233),
                _ = i(166677),
                y = i(538327),
                C = i(443781),
                v = i(199127),
                M = i(184605),
                E = i(71620),
                k = i(668214),
                Z = i(576469),
                w = i(497294),
                P = i(601576),
                I = i(510588);
            const B = (e, t) => {
                    const i = Z.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [a] = (0, M.Z)(i) ? w.m3(e, i) : [];
                    return a;
                },
                L = (e, t) => {
                    const { listId: i } = t;
                    return i ? I.tt(e, i) : void 0;
                },
                S = (e, t) => {
                    const { listId: i } = t,
                        a = i && Z.Z.select(e, i);
                    return a ? a.defaultBanner : void 0;
                },
                x = (e, t) => t.location.state?.suggestedUser,
                D = (0, k.Z)()
                    .propsFromState(() => ({ suggestedUser: x, uploadedMedia: B, customMedia: L, defaultMedia: S }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, E.zr)(e), addToast: P.fz, addLocalMediaId: Z.Z.addLocalMediaId, createList: Z.Z.createList, deleteListMedia: Z.Z.deleteListMedia, editList: Z.Z.editList, editListMedia: Z.Z.editListMedia, removeMediaUpload: w.WU, removeLocalMediaId: Z.Z.removeLocalMediaId }))
                    .withAnalytics(),
                R = "public",
                A = "private",
                F = p().d4e220b4,
                T = p().e36287c6,
                U = p().f30edc68,
                V = p().df31d76a,
                z = p().h51a2cf6,
                N = p().bb10280e,
                G = p().h8885a22,
                O = p().f8132984;
            class W extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { list: a } = this.props,
                                r = a?.mode === A;
                            return e !== a?.description || i !== a?.name || t !== r;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: i, shouldDeleteBanner: a } = this.state,
                                { analytics: r, createLocalApiErrorHandler: n, deleteListMedia: o, editList: s, list: l, listId: d } = this.props;
                            this.setState({ isSaving: !0 }), r.scribeAction("save");
                            const c = [];
                            if (a && d) {
                                const e = o(d).catch(n({ defaultToast: { text: z }, showToast: !0 }));
                                c.push(e);
                            }
                            if ((this._hasMediaChanged() && l && c.push(this._handleUploadMedia(l)), this._hasListDataChanged() && d)) {
                                const a = s(d, { description: e, mode: t ? A : R, name: i }).catch(n({ defaultToast: { text: N }, showToast: !0, [b.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                c.push(a);
                            }
                            Promise.all(c).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { analytics: a, createList: r, createLocalApiErrorHandler: n, onError: o, suggestedUser: s } = this.props,
                                l = t ? A : R;
                            this.setState({ isSaving: !0 }),
                                a.scribeAction("create"),
                                r({ name: i, description: e, mode: l }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    i = { pathname: `${e.uri}/members/suggested`, state: { previousStep: y.O.Creation, suggestedUser: s } };
                                                s ? t.push(i) : t.replace(i);
                                            }
                                        }),
                                    (e) => {
                                        o && o(), n({ defaultToast: { text: N }, showToast: !0, [b.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
                                    },
                                ),
                                this.setState({ isSaving: !1 });
                        }),
                        (this._goBackToListDetail = () => {
                            const { history: e, listId: t } = this.props,
                                i = t && `/i/lists/${t}`;
                            e.goBack({ backLocation: i, shouldReplaceOnFallback: !0 });
                        }),
                        (this._handleUploadMedia = (e) => {
                            const { editListMedia: t, removeMediaUpload: i, uploadedMedia: a } = this.props,
                                { iconCrop: r } = this.state,
                                n = e.id_str;
                            if (a && a.uploader && n) {
                                return t({ listId: n, mediaId: a.id, iconCrop: r }).then(() => (i(a.id), Promise.resolve(e)), this._handleMediaUpdateFailure(a, N));
                            }
                            return Promise.resolve(e);
                        }),
                        (this._handleIconCropCancel = () => {
                            this.setState({ iconCrop: void 0 });
                        }),
                        (this._handleIconCropDone = (e) => {
                            const { analytics: t } = this.props;
                            (0, m.Z)(e) || this.setState({ iconCrop: e }), t.scribe({ element: "banner_image", action: "select" });
                        }),
                        (this._handlePrivacyChange = (e, t) => {
                            this.setState({ isPrivate: t });
                        }),
                        (this._handleNameChange = (e) => {
                            this.setState({ name: e.target.value, nameError: void 0 });
                        }),
                        (this._handleDescriptionChange = (e) => {
                            this.setState({ description: e.target.value });
                        }),
                        (this._handleBannerMediaRemove = () => {
                            const { analytics: e, uploadedMedia: t } = this.props;
                            e.scribe({ element: "banner_image", action: "remove" }), t ? this._clearBannerMedia(t.id) : this.setState({ shouldDeleteBanner: !0 });
                        }),
                        (this._handleBannerMediaChange = ([e]) => {
                            const { addLocalMediaId: t, listId: i, uploadedMedia: a } = this.props;
                            a && this._clearBannerMedia(a.id), t({ listId: i || "-1", mediaId: e });
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._clearBannerMedia = (e) => {
                            const { removeMediaUpload: t, uploadedMedia: i } = this.props;
                            (i && i.uploading) || t(e), this.setState({ mediaId: void 0 });
                        }),
                        (this._handleMediaUpdateFailure = (e, t) => (i) => {
                            const { addToast: a, createLocalApiErrorHandler: r, removeMediaUpload: n } = this.props,
                                o = (0, _.$r)(i);
                            if (o) {
                                const e = (0, _.ZP)(o, t);
                                e && a(e);
                            } else r({ showToast: !0 })(i);
                            n(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || G });
                        });
                    const { list: i } = e,
                        a = i?.name || "",
                        r = i?.description || "",
                        n = i?.mode === A;
                    this.state = { description: r, isPrivate: n, isSaving: !1, name: a, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: i } = this.props;
                    i && (this._clearBannerMedia(i.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: i } = this.props,
                        { isSaving: a, name: r } = this.state;
                    i(!(!!(!r || !r.length || (0, n.Z)(r)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || a));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: i } = this.props,
                        { description: n, isPrivate: u, name: p, nameError: b, shouldDeleteBanner: _ } = this.state,
                        y = !(0, m.Z)(e?.image),
                        C = _ || !y ? t?.image : e?.image,
                        M = a.createElement(o.Z, { ratio: s.default.theme.aspectRatios.profileBanner }, C ? a.createElement(l.Z, { "aria-label": "", aspectMode: d.Z.exact(3), image: C }) : null);
                    return a.createElement(r.Z, null, a.createElement(v.default, { "aria-label": V, aspectRatio: 3, currentContent: M, location: g.vC.ListBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: y || i ? this._handleBannerMediaRemove : void 0 }), a.createElement(c.Z, { errorText: b, invalid: !!b, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: p }), a.createElement(c.Z, { label: T, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: n }), i ? a.createElement(f.Z, { aspectRatio: 3, media: i, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, a.createElement(h.Z, { checked: u, helpText: O, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            W.contextType = C.rC;
            const H = D.forwardRef(W);
        },
        421730: (e, t, i) => {
            i.d(t, { Z: () => L });
            var a = i(807896),
                r = (i(136728), i(202784)),
                n = i(67369),
                o = i(111677),
                s = i.n(o),
                l = i(339110),
                d = i(500002),
                c = i(874088),
                h = i(325686),
                u = i(731708),
                p = i(392237);
            const m = s().g13ea02c,
                b = r.forwardRef((e, t) => r.createElement(h.Z, { style: [e.style, f.container] }, r.createElement(u.ZP, { align: "center", color: "gray700" }, m))),
                f = p.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = b;
            var _ = i(457311);
            const y = s().d6a23192,
                C = s().hc76e8cd,
                v = s().d872881a;
            function M(e) {
                const { query: t, ...i } = e;
                return r.createElement(h.Z, i, r.createElement(_.Z, { buttonLink: "/i/lists/create", buttonText: y, buttonType: "primaryFilled", header: C({ query: t }), message: v, secondaryButtonType: "primaryOutlined" }));
            }
            var E = i(24949),
                k = i(668214),
                Z = i(204744);
            const w = (0, E.P1)(
                    Z.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const i = e.filter((e) => e.list);
                        return i.length > t ? i.slice(0, t) : i;
                    },
                ),
                P = (0, k.Z)()
                    .propsFromState(() => ({ recentSearches: w }))
                    .propsFromActions(() => ({ addQuery: Z.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                I = s().j177067a,
                B = [l.my.Lists];
            const L = (0, d.ZP)(
                P(function (e) {
                    const [t, i] = r.useState(""),
                        o = (0, n.Zz)();
                    return r.createElement(c.default, {
                        filter: B,
                        initialValue: e.initialValue,
                        isCompact: o,
                        maxLists: e.maxItems ?? 20,
                        onItemClick: function (t) {
                            t.type === l.El.List && e.history.push(`/i/lists/${t.id}`);
                        },
                        onQueryChange: function (e) {
                            i(e);
                        },
                        onSubmit: function () {
                            e.history.push(`/i/lists/search?q=${t}`);
                        },
                        placeholder: I,
                        renderEmptyState: function (e) {
                            return r.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return r.createElement(M, (0, a.Z)({}, e, { query: t }));
                        },
                        rounded: !0,
                        source: l._4.ListManagementPage,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                    });
                }),
            );
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var a = i(202784),
                r = i(850496),
                n = i(373554),
                o = i(668214),
                s = i(497294);
            const l = (0, o.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: r, processMultipleMedia: n } = this.props,
                                o = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => o.includes(e.type));
                            s &&
                                t([s], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), n(e, { onFailure: r });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, n.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: n, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onCrop: u, onRemove: p, rootStyle: m } = this.props;
                    return a.createElement(r.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: n, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: p, rootStyle: m, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        56851: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                r = i(420740),
                n = i(108362),
                o = i(731708),
                s = i(154003),
                l = i(392237),
                d = i(111677),
                c = i.n(d),
                h = i(349035);
            const u = "error-detail",
                p = c().e49537c2,
                m = c().a9ae1e78;
            class b extends a.PureComponent {
                render() {
                    return a.createElement(r.Z, { testID: u }, a.createElement(h.Z, null), a.createElement(n.Z, { style: f.root }, a.createElement(o.ZP, { align: "center", color: "gray700", style: f.retryText }, p), a.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const f = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                r = i(500002),
                n = i(668214),
                o = i(997174),
                s = i(118823);
            const l = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: o },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && i !== n) || a !== o || l) && this._performPageUpdates(this.props);
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
            const c = (0, r.ZP)(l(d));
        },
        836640: (e, t, i) => {
            i.d(t, { J: () => f });
            i(136728);
            var a = i(214636),
                r = i(202784),
                n = i(614983),
                o = i.n(n),
                s = (i(585488), i(277660)),
                l = i.n(s),
                d = i(107267),
                c = i(673510),
                h = i(44527),
                u = i(663550),
                p = i(409438),
                m = i(443781);
            const b = a.Z;
            function f(e) {
                const t = l()(b, e.user),
                    { avatar: i, core: a, legacy: n, privacy: s, relationship_perspectives: p, verification: f } = t,
                    g = t.identity_profile_labels_highlighted_label?.label ? (0, h.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: y, displayMode: C } = e,
                    v = (function () {
                        const { viewerUserId: e } = r.useContext(m.rC);
                        return o()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    M = (0, d.useHistory)(),
                    E = r.useCallback(() => ("function" == typeof y ? y({ displayMode: C, viewerUserId: v, userId: n?.id_str ?? "" }) : y), [y, v, n, C]),
                    k = r.useCallback(() => {
                        a?.screen_name && M.push({ pathname: `/${a.screen_name}` });
                    }, [M, a]);
                return r.createElement(c.ZP, { affiliateBadgeInfo: g, avatarUri: i?.image_url || "", decoration: E(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: p?.followed_by ?? !1, isProtected: s?.protected ?? !1, isVerified: f?.verified ?? !1, name: a?.name || "", onCellClick: _ ? k : void 0, promotedItemType: u.bj.USER, screenName: a?.screen_name || "", userId: n?.id_str ?? "", verifiedType: f?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            f.defaultProps = { cellClickable: !0, decoration: null, displayMode: p.Z.UserCompact };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-b308cbaf.01e2e78a.js.map
