"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-b308cbaf", "loader.MediaPickerWithPreview", "loader.FeedbackSheet"],
    {
        399887: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                n = i(154003),
                r = i(332920),
                o = i.n(r),
                s = i(437358);
            const l = () => {
                const e = o().d2826908,
                    t = o().c80cb4e4;
                return a.createElement(n.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: a.createElement(s.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        625661: (e, t, i) => {
            i.d(t, { ZP: () => p });
            var a = i(202784),
                n = i(614983),
                r = i.n(n),
                o = i(325686),
                s = i(370006),
                l = i(786998),
                d = i(929028),
                c = i(386802);
            function u(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class p extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: n, hideBackButton: r, isFullWidth: o, isLarge: d, leftControl: c, middleControl: p, position: h, rightControl: m, secondaryBar: b, style: f, subtitle: g, title: y, titleDomId: _, titleIconCell: S, titleIconCellSize: v, withBackground: C, withWideContainer: A } = this.props,
                        { isModal: w } = this.context,
                        E = r ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        M = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!C, w, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: o, isLarge: d, leftControl: E, middleControl: p, position: u(h, w, n), rightControl: m, style: f, subtitle: g, title: y, titleDomId: _, titleIconCell: S, titleIconCellSize: v, withBackground: M, withWideContainer: A }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(o.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, i) => {
            i.r(t), i.d(t, { default: () => u });
            i(136728);
            var a = i(202784),
                n = i(811176),
                r = i(190286),
                o = i(332920),
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
                            e.reduce((e, { Icon: n, confirmation: r, disabled: o, excludeFromActionMenu: s, isEmphasized: l, link: d, onClick: c, subText: u, testID: p, text: h, withCancelButton: m }, b) => {
                                if (!s) {
                                    const s = c
                                        ? () => {
                                              r ? (r.render ? a({ cancelCallback: r.onCancel, confirmCallback: c, render: r.render }) : a({ cancelCallback: r.onCancel, confirmCallback: c, text: r.text, headline: r.headline, label: r.label, confirmButtonType: r.confirmButtonType, withCancelButton: r.withCancelButton })) : (c(), i());
                                          }
                                        : i;
                                    e.push({ disabled: o, Icon: n, isEmphasized: l, testID: p, subText: u, text: h, onClick: s, link: d, withBottomBorder: t && t.includes(b) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : a.createElement(n.Z, { cancelButtonLabel: d, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: n, text: o, withCancelButton: s } = e || {};
                        return a.createElement(r.Z, { confirmButtonLabel: n, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: o, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: i } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, i, this._handleConfirm);
                }
            }
            const u = c;
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => v });
            var a = i(202784),
                n = i(325686),
                r = i(731708),
                o = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(332920),
                u = i.n(c),
                p = i(293615),
                h = i(837020),
                m = i(219229),
                b = i(373554),
                f = i(304059),
                g = i(751170);
            const y = u().b87ca51a,
                _ = u().eebff22c,
                S = a.createElement(p.default, null);
            class v extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: u, rootStyle: p, withDragDrop: h } = this.props,
                        m = l && !l.uploader,
                        b = a.createElement(a.Fragment, null, this._renderPreview(), m ? null : a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [A.mask, s, C[e]] }), a.createElement(n.Z, { style: [A.overlaidContent, i] }, a.createElement(n.Z, { style: A.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? a.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: A.description }, t) : null)));
                    return a.createElement(n.Z, { style: [A.container, p, C[e]] }, h && d ? a.createElement(o.ZP, { onFilesAdded: d, style: [A.dragDropContainer, C[e]] }, b) : b);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": y, hoverLabel: { label: y }, icon: a.createElement(h.default, null), onPress: e, size: "large", style: A.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": _, icon: a.createElement(m.default, null), onPress: e, size: "large", style: A.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onAddMediaFiles: o, onEdit: l } = this.props;
                    return o ? a.createElement(b.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onChange: o, size: "large", style: A.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(s.ZP, { "aria-label": i, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: n } = this.props;
                    return n ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: A.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            v.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: S };
            const C = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                A = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => b, w: () => h });
            var a = i(202784),
                n = i(325686),
                r = i(108362),
                o = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                u = i(449067),
                p = i(715601);
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: o, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: y, title: _ } = this.props,
                                { isModal: S } = this.context;
                            return a.createElement(n.Z, { style: S ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (S ? "close" : "back"), backLocation: r, centerTitle: o, fixed: !S, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [S && m.appBarModal, t], subtitle: y, title: _, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: o, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: h, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: b }), a.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && y, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, o] }, g ? a.createElement(p.Z, { style: m.viewport }, y, i) : i), t ? a.createElement(n.Z, { style: [m.bottomBarModal, !g && !f && m.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = o.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => g, h: () => b });
            var a = i(807896),
                n = i(202784),
                r = i(449161),
                o = i(392237),
                s = i(332920),
                l = i.n(s),
                d = i(473026),
                c = i(276259),
                u = i(540387);
            const p = "fileInput",
                h = l().b9960f32,
                m = n.createElement(d.default, null),
                b = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? u.jn : []);
            const f = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                g = function ({ "aria-label": e = h, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: l = m, size: d = "medium", style: c, withIcon: u = !0, ...g }) {
                    const y = b({ acceptGifs: t, acceptImages: i, acceptVideo: o }).concat(s).join(",");
                    return n.createElement(r.Z, (0, a.Z)({}, g, { accept: y, "aria-label": e, icon: u ? l : void 0, size: d, style: [f.root, c], testID: p }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => y });
            var a = i(202784),
                n = i(325686),
                r = i(167630),
                o = i(992942),
                s = i(392237),
                l = i(332920),
                d = i.n(l),
                c = i(205074),
                u = i(364837),
                p = i(908478);
            const h = d().gff1f69e,
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
                    return !(0, p.Z)(e, this.props) || !(0, p.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        u = i.needsProcessing || c,
                        p = [g.root, f[e], u && g.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(n.Z, { onClick: s, style: p }, u || !m ? a.createElement(r.Z, { "aria-label": h, style: g.activityIndicator }) : a.createElement(o.Z, { resizeMode: l, source: m, style: g.image }));
                }
            }
            b.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const f = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                g = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                y = b;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => G });
            var a = i(202784),
                n = i(325686),
                r = i(537392),
                o = i(336961),
                s = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                u = i(332920),
                p = i.n(u),
                h = i(678773),
                m = i(597237),
                b = i(254944),
                f = i(837020),
                g = i(276259),
                y = i(443781),
                _ = i(10656),
                S = i(716233),
                v = i(946208),
                C = i(540387),
                A = i(950822),
                w = i(303186),
                E = i(954300);
            class M extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: n, variants: r, ...o } = this.props,
                        s = (0, w.IM)((0, E.rD)(r), t);
                    return (0, A.Z)("video", { ...o, children: [s.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            M.defaultProps = { dataSaverMode: !1, variants: [] };
            var Z = i(959587),
                B = i(751170),
                I = i(523561),
                k = i(195560);
            const P = (0, I.Z)({
                    loader: () =>
                        Promise.all([
                            i.e("icons.6"),
                            i.e("icons.25"),
                            i.e("icons.22"),
                            i.e("icons.2"),
                            i.e("modules.common-e907d115"),
                            i.e("modules.common-e019dbda"),
                            i.e("icons.0"),
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
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            i.e("loader.MediaPreviewVideoPlayer"),
                        ])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(k.Z, { hasError: e, onRetry: t }),
                }),
                D = p().gd80afba,
                L = p().j322caee,
                x = p().abd845fe,
                R = p().df1b0708,
                F = p().cd959e5c,
                T = p().e68b09b4,
                U = p().add55c98,
                V = p().f350cf46;
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
                                        layout: { height: n, width: r },
                                    },
                                } = e,
                                { height: o, width: s } = a,
                                l = s / o;
                            Math.abs(l - r / n) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: n * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: r / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: p, style: y, withAltTextLabel: S, withCloseButton: v, withDragAndDropIndicator: C, withEditButton: A, withEditIcon: w, withEditSensitiveWarningButton: E } = this.props,
                        { mediaContainerSizeStyle: M, playGif: B } = this.state,
                        I = i.externalMediaDetails && i.externalMediaDetails.mediaType === g.Re,
                        k = I || (t && i.mediaFile && i.mediaFile.isGif),
                        P = !!i.mediaFile?.isVideo;
                    return a.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== w ? w : !_.Z.isTwoColumnLayout(t);
                        return a.createElement(n.Z, { "aria-label": e || U, onLayout: this._handleMediaPreviewLayout, role: p, style: [y, N.cursor, I && N.gifPlayButton, M] }, this._renderPreview(), I && !B && a.createElement(o.Z, { "aria-label": R, onPress: this._handleGifClick, size: "small" }), k ? a.createElement(Z.ZP, { type: Z.AM }) : null, S && !P ? a.createElement(s.Z, { align: "left", altLabel: e }) : null, a.createElement(n.Z, { style: N.editMedia }, C ? a.createElement(l.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: a.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, A && E ? a.createElement(l.ZP, { "aria-label": L, icon: a.createElement(m.default, { style: N.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, A ? a.createElement(l.ZP, { "aria-label": D, icon: i ? a.createElement(b.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : x) : null), v ? a.createElement(l.ZP, { "aria-label": F, hoverLabel: { label: T }, icon: a.createElement(f.default, null), onPress: u, size: "small", style: N.buttonRight, type: "onMediaDominantColorFilled" }) : null);
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
                        r = { uri: i ? e : t };
                    return a.createElement(n.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: r, style: N.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: n, onClick: r } = this.props;
                    return a.createElement(B.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, n) {
                    const { mediaItem: r } = this.props,
                        o = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof C.ZP) {
                        let o = [];
                        (0, S.TO)(n.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = r.mediaMetadata?.subtitles,
                            l = r?.trimData;
                        return a.createElement(P, { mediaFile: n, mediaId: String(i), mediaItem: r, subtitles: s, trimData: l, variants: o });
                    }
                    {
                        const i = (0, S.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(M, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof C.ZP ? n.thumbnail : "", style: N.video, variants: i }, o?.upload?.mediaFile instanceof v.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (z.contextType = y.rC), (z.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const N = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                G = z;
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => p, pX: () => d });
            var a = i(202784),
                n = i(731708),
                r = i(659651),
                o = i(392237),
                s = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let o;
                    if (i === l) o = a.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) o = a.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = a.createElement(n.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return o ? a.createElement(r.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                p = a.memo(c);
        },
        131779: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                n = i(154003),
                r = i(332920),
                o = i.n(r),
                s = i(320588),
                l = i(71620),
                d = i(668214),
                c = i(576469);
            const u = (0, d.Z)()
                    .propsFromActions(() => ({ removeUserFromList: c.Z.removeUserFromList, addUserToList: c.Z.addUserToList, createLocalApiErrorHandler: (0, l.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                p = o().e68b09b4,
                h = o().af40a8e0;
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => a.createElement(n.ZP, { "aria-label": h, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, h)),
                        (this._renderRemoveButton = () => a.createElement(n.ZP, { "aria-label": p, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, p)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: i, onAdd: a, shouldAddUserToList: n, userId: r } = this.props;
                            n()
                                ? (e(i, { userId: r, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          a && a(r);
                                      })
                                      .catch(t(s.Mt)),
                                  this._scribeAction("add"))
                                : a && a(r);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: i, removeUserFromList: a, userId: n } = this.props;
                            a(t, { userId: n, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    i && i(n);
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
            const b = u(m);
        },
        737613: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(202784),
                n = i(325686),
                r = i(834324),
                o = i(392237),
                s = i(332920),
                l = i.n(s),
                d = i(125363),
                c = i(390387),
                u = i(919022);
            const p = l().aacfbe55,
                h = l().ga8627cd,
                m = l().e6d2573f,
                b = l().d37a3e15,
                f = (e) => {
                    const { isReply: t, style: i, type: o } = e,
                        s = (0, d.v9)(c.Lz),
                        l = (0, d.v9)(u.ZP.selectViewerUser),
                        f = s ? l?.screen_name : void 0,
                        y = a.useMemo(() => [g.root, i], [i]);
                    let _ = p({ screenName: f });
                    return "Tweet" === o && t ? (_ = h({ screenName: f })) : "DM" === o ? (_ = m({ screenName: f })) : "List" === o && (_ = b({ screenName: f })), f ? a.createElement(n.Z, { style: y }, a.createElement(r.Z, { text: _ })) : null;
                },
                g = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        841993: (e, t, i) => {
            i.d(t, { Z: () => h });
            var a = i(202784),
                n = i(332920),
                r = i.n(n),
                o = i(437358),
                s = i(725516),
                l = i(387524),
                d = i(635510);
            const c = r().d2826908,
                u = r().c80cb4e4,
                p = a.createElement(o.default, null),
                h = (e) => {
                    const { page: t } = e,
                        i = (0, s.z)(),
                        n = a.useCallback(
                            (e) => {
                                i.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, i],
                        );
                    return a.createElement(l.Z, { "aria-label": c, href: "/i/lists/create", icon: p, label: u, onPress: n, scribeComponent: "floating_list_button", testID: d.Z.createList });
                };
        },
        935167: (e, t, i) => {
            i.d(t, { ZP: () => Y });
            i(136728);
            var a = i(202784),
                n = i(325686),
                r = i(601413),
                o = i(392237),
                s = i(332920),
                l = i.n(s),
                d = i(415506),
                c = i(170397),
                u = i(516951),
                p = i(805104),
                h = i(774426),
                m = i(376293),
                b = i(712816),
                f = i(879596),
                g = i(395067),
                y = i(443781),
                _ = i(688715),
                S = i(907552),
                v = i(668214),
                C = i(576469),
                A = i(601576);
            const w = (e, t) => C.Z.selectListAuthorScreenName(e, t.list.id_str),
                E = (0, v.Z)()
                    .propsFromState(() => ({ author: w }))
                    .propsFromActions(() => ({ addToast: A.fz }))
                    .withAnalytics(),
                M = l().i6da4f7a,
                Z = l().a062ff80;
            const B = E(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: i,
                        } = e,
                        n = ((r = t), (0, _.ju)(`https://x.com/i/lists/${r}`));
                    var r;
                    return a.createElement(S.ZP, { copyLinkShareLabel: Z, externalShareLabel: M, scribeNamespace: i, url: n });
                }),
                I = B;
            var k = i(71620),
                P = i(286e3),
                D = i(390387),
                L = i(919022),
                x = i(510588);
            const R = (0, v.Z)()
                .propsFromState(() => ({ author: x.l1, basePath: x.$5, viewerUserId: D._h, isSubscribed: x.cx, list: x.Fz, useRanked: x._g }))
                .propsFromActions(() => ({ addToast: A.fz, block: L.ZP.block, createLocalApiErrorHandler: (0, k.zr)("LIST_ACTIONS"), toggleMute: C.Z.toggleMute, unblock: L.ZP.unblock, updateRankMode: P.Rc }))
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
                $ = (e) => a.createElement(l().I18NFormatMessage, { $i18n: "aa4026bf" }, a.createElement(r.Z, { screenName: e }));
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
                            return this.props.listId && e.length > 0 ? a.createElement(p.Z, { "aria-label": T, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: q.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return a.createElement(h.default, { actionItems: t, onClose: e });
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
                                n = g.C2.List;
                            if ((0, g.Yw)(a, n)) {
                                const i = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: n, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: W, Icon: d.default, onClick: u.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(i) } } } };
                            }
                            return { text: W, Icon: d.default, onClick: u.Z, link: { pathname: `/i/report/list/${i}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: $, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: H, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: i, list: a, toggleMute: n } = this.props;
                            if (a && i && this._isMutingEnabled) return (0, F.Z)({ list: a, addToast: e, toggleMute: n, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? z : G, Icon: c.default, onClick: this._handleSwitchRankMode, subText: e ? N : O };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: i, block: a, createLocalApiErrorHandler: n } = this.props;
                            i &&
                                (a(i.id_str, { promotedContent: i.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, n(b.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: i, unblock: a } = this.props;
                            t && (a(t.id_str, { promotedContent: t.promoted_content }).catch(i(f.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: i, updateRankMode: a, useRanked: n } = this.props,
                                r = n ? U : V,
                                o = n ? "see_latest" : "see_top";
                            a({ listId: i, useRanked: !n }).then(() => {
                                e({ text: r });
                            }),
                                t.scribe({ action: "click", component: "customize", element: o });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return a.createElement(n.Z, { style: q.rightControl }, e ? a.createElement(I, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            j.contextType = y.rC;
            const q = o.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                Y = R(j);
        },
        527409: (e, t, i) => {
            i.r(t), i.d(t, { ListDetail: () => D, default: () => x, formatNumber: () => I });
            var a = i(202784),
                n = i(272175),
                r = i(325686),
                o = i(98538),
                s = i(530525),
                l = i(439592),
                d = i(392237),
                c = i(682474),
                u = i(731708),
                p = i(366635),
                h = i(154003),
                m = i(332920),
                b = i.n(m),
                f = i(121791),
                g = i(401388),
                y = i(443781),
                _ = i(989816),
                S = i(668214),
                v = i(576469),
                C = i(390387),
                A = i(919022),
                w = i(510588);
            const E = (e, t) => {
                    const { listId: i } = t;
                    return i ? v.Z.select(e, i) : void 0;
                },
                M = (e, t) => {
                    const i = E(e, t),
                        a = i?.user;
                    return a ? A.ZP.select(e, a) : void 0;
                },
                Z = (e, t) => w.tt(e, t.listId),
                B = (0, S.Z)()
                    .propsFromState(() => ({ list: E, user: M, viewerUserId: C._h, media: Z }))
                    .withAnalytics(),
                I = b().d58baa7f,
                k = b().ca5d0a82,
                P = b().j681933e;
            class D extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, g.Z)(t)) {
                                const { url: e } = t;
                                return a.createElement(a.Fragment, null, a.createElement(n.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: e, property: "og:image" })), a.createElement(s.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: d.default.theme.colors.gray300, image: t }));
                            }
                            return a.createElement(c.Z, { ratio: 3 }, a.createElement(r.Z, { style: L.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: i, member_count: o, mode: s, name: l, subscriber_count: d } = e,
                                    c = d || 0,
                                    h = o || 0,
                                    m = "private" === s;
                                return a.createElement(r.Z, { style: L.description }, a.createElement(r.Z, { style: [L.name, L.text] }, a.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), m ? a.createElement(f.default, { "aria-label": P, style: L.iconLock }) : null), i ? a.createElement(a.Fragment, null, a.createElement(n.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: i.trim(), property: "og:description" })), a.createElement(u.ZP, { align: "center", style: L.text }, i.trim())) : null, t ? a.createElement(p.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: L.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(c, h), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: i } = this.props,
                                n = I(e),
                                r = I(t);
                            return a.createElement(o.Z.Group, null, a.createElement(o.Z, { count: t, link: `${i}/members`, onPress: this._handleMembersCountPress }, a.createElement(b().I18NFormatMessage, { $i18n: "b38e130b" }, a.createElement(o.Z.Value, null, b().ibd0106e({ formattedCount: r })), a.createElement(o.Z.Label, null, b().cface2d1({ count: t })))), a.createElement(o.Z, { count: e, link: `${i}/followers`, onPress: this._handleSubscribersCountPress }, ((s = e), (l = n), a.createElement(b().I18NFormatMessage, { $i18n: "d2924acb" }, a.createElement(o.Z.Value, null, b().ec08efe4({ formattedCount: l })), a.createElement(o.Z.Label, null, b().h9f711f0({ count: s }))))));
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
                            const { basePath: e, list: t, user: i, viewerUserId: n, withEditButton: o } = this.props;
                            if (t && t.user) {
                                const s = i?.blocking;
                                return t.user === n && o ? a.createElement(h.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: L.button, type: "primaryOutlined" }, k) : t.user !== n ? a.createElement(r.Z, { style: L.button }, a.createElement(_.Z, { disabled: s, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: i })) : null;
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
                    return e ? a.createElement(r.Z, { style: [L.container, t && L.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (D.contextType = y.rC), (D.defaultProps = { withEditButton: !0 });
            const L = d.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                x = B(D);
        },
        583957: (e, t, i) => {
            i.d(t, { Z: () => H });
            i(136728);
            var a = i(202784),
                n = i(325686),
                r = i(733357),
                o = i(682474),
                s = i(392237),
                l = i(530525),
                d = i(439592),
                c = i(855488),
                u = i(954110),
                p = i(332920),
                h = i.n(p),
                m = i(401388),
                b = i(615656),
                f = i(370111),
                g = i(716233),
                y = i(166677),
                _ = i(538327),
                S = i(443781),
                v = i(199127),
                C = i(184605),
                A = i(71620),
                w = i(668214),
                E = i(576469),
                M = i(497294),
                Z = i(601576),
                B = i(510588);
            const I = (e, t) => {
                    const i = E.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [a] = (0, C.Z)(i) ? M.m3(e, i) : [];
                    return a;
                },
                k = (e, t) => {
                    const { listId: i } = t;
                    return i ? B.tt(e, i) : void 0;
                },
                P = (e, t) => {
                    const { listId: i } = t,
                        a = i && E.Z.select(e, i);
                    return a ? a.defaultBanner : void 0;
                },
                D = (e, t) => t.location.state?.suggestedUser,
                L = (0, w.Z)()
                    .propsFromState(() => ({ suggestedUser: D, uploadedMedia: I, customMedia: k, defaultMedia: P }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, A.zr)(e), addToast: Z.fz, addLocalMediaId: E.Z.addLocalMediaId, createList: E.Z.createList, deleteListMedia: E.Z.deleteListMedia, editList: E.Z.editList, editListMedia: E.Z.editListMedia, removeMediaUpload: M.WU, removeLocalMediaId: E.Z.removeLocalMediaId }))
                    .withAnalytics(),
                x = "public",
                R = "private",
                F = h().d4e220b4,
                T = h().e36287c6,
                U = h().f30edc68,
                V = h().df31d76a,
                z = h().h51a2cf6,
                N = h().bb10280e,
                G = h().h8885a22,
                O = h().f8132984;
            class W extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { list: a } = this.props,
                                n = a?.mode === R;
                            return e !== a?.description || i !== a?.name || t !== n;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: i, shouldDeleteBanner: a } = this.state,
                                { analytics: n, createLocalApiErrorHandler: r, deleteListMedia: o, editList: s, list: l, listId: d } = this.props;
                            this.setState({ isSaving: !0 }), n.scribeAction("save");
                            const c = [];
                            if (a && d) {
                                const e = o(d).catch(r({ defaultToast: { text: z }, showToast: !0 }));
                                c.push(e);
                            }
                            if ((this._hasMediaChanged() && l && c.push(this._handleUploadMedia(l)), this._hasListDataChanged() && d)) {
                                const a = s(d, { description: e, mode: t ? R : x, name: i }).catch(r({ defaultToast: { text: N }, showToast: !0, [b.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                c.push(a);
                            }
                            Promise.all(c).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { analytics: a, createList: n, createLocalApiErrorHandler: r, onError: o, suggestedUser: s } = this.props,
                                l = t ? R : x;
                            this.setState({ isSaving: !0 }),
                                a.scribeAction("create"),
                                n({ name: i, description: e, mode: l }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    i = { pathname: `${e.uri}/members/suggested`, state: { previousStep: _.O.Creation, suggestedUser: s } };
                                                s ? t.push(i) : t.replace(i);
                                            }
                                        }),
                                    (e) => {
                                        o && o(), r({ defaultToast: { text: N }, showToast: !0, [b.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
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
                                { iconCrop: n } = this.state,
                                r = e.id_str;
                            if (a && a.uploader && r) {
                                return t({ listId: r, mediaId: a.id, iconCrop: n }).then(() => (i(a.id), Promise.resolve(e)), this._handleMediaUpdateFailure(a, N));
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
                            const { addToast: a, createLocalApiErrorHandler: n, removeMediaUpload: r } = this.props,
                                o = (0, y.$r)(i);
                            if (o) {
                                const e = (0, y.ZP)(o, t);
                                e && a(e);
                            } else n({ showToast: !0 })(i);
                            r(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || G });
                        });
                    const { list: i } = e,
                        a = i?.name || "",
                        n = i?.description || "",
                        r = i?.mode === R;
                    this.state = { description: n, isPrivate: r, isSaving: !1, name: a, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: i } = this.props;
                    i && (this._clearBannerMedia(i.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: i } = this.props,
                        { isSaving: a, name: n } = this.state;
                    i(!(!!(!n || !n.length || (0, r.Z)(n)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || a));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: i } = this.props,
                        { description: r, isPrivate: p, name: h, nameError: b, shouldDeleteBanner: y } = this.state,
                        _ = !(0, m.Z)(e?.image),
                        S = y || !_ ? t?.image : e?.image,
                        C = a.createElement(o.Z, { ratio: s.default.theme.aspectRatios.profileBanner }, S ? a.createElement(l.Z, { "aria-label": "", aspectMode: d.Z.exact(3), image: S }) : null);
                    return a.createElement(n.Z, null, a.createElement(v.default, { "aria-label": V, aspectRatio: 3, currentContent: C, location: g.vC.ListBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: _ || i ? this._handleBannerMediaRemove : void 0 }), a.createElement(c.Z, { errorText: b, invalid: !!b, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: h }), a.createElement(c.Z, { label: T, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: r }), i ? a.createElement(f.Z, { aspectRatio: 3, media: i, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, a.createElement(u.Z, { checked: p, helpText: O, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            W.contextType = S.rC;
            const H = L.forwardRef(W);
        },
        421730: (e, t, i) => {
            i.d(t, { Z: () => k });
            var a = i(807896),
                n = (i(136728), i(202784)),
                r = i(67369),
                o = i(332920),
                s = i.n(o),
                l = i(339110),
                d = i(500002),
                c = i(874088),
                u = i(325686),
                p = i(731708),
                h = i(392237);
            const m = s().g13ea02c,
                b = n.forwardRef((e, t) => n.createElement(u.Z, { style: [e.style, f.container] }, n.createElement(p.ZP, { align: "center", color: "gray700" }, m))),
                f = h.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = b;
            var y = i(457311);
            const _ = s().d6a23192,
                S = s().hc76e8cd,
                v = s().d872881a;
            function C(e) {
                const { query: t, ...i } = e;
                return n.createElement(u.Z, i, n.createElement(y.Z, { buttonLink: "/i/lists/create", buttonText: _, buttonType: "primaryFilled", header: S({ query: t }), message: v, secondaryButtonType: "primaryOutlined" }));
            }
            var A = i(24949),
                w = i(668214),
                E = i(204744);
            const M = (0, A.P1)(
                    E.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const i = e.filter((e) => e.list);
                        return i.length > t ? i.slice(0, t) : i;
                    },
                ),
                Z = (0, w.Z)()
                    .propsFromState(() => ({ recentSearches: M }))
                    .propsFromActions(() => ({ addQuery: E.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                B = s().j177067a,
                I = [l.my.Lists];
            const k = (0, d.ZP)(
                Z(function (e) {
                    const [t, i] = n.useState(""),
                        o = (0, r.Zz)();
                    return n.createElement(c.default, {
                        filter: I,
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
                        placeholder: B,
                        renderEmptyState: function (e) {
                            return n.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return n.createElement(C, (0, a.Z)({}, e, { query: t }));
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
                n = i(850496),
                r = i(373554),
                o = i(668214),
                s = i(497294);
            const l = (0, o.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: n, processMultipleMedia: r } = this.props,
                                o = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => o.includes(e.type));
                            s &&
                                t([s], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), r(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, r.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: u, onCrop: p, onRemove: h, rootStyle: m } = this.props;
                    return a.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                n = i(500002),
                r = i(668214),
                o = i(997174),
                s = i(118823);
            const l = (0, r.Z)()
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
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = n || s;
                    ((d && n !== s) || (!d && i !== r) || a !== o || l) && this._performPageUpdates(this.props);
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
        836640: (e, t, i) => {
            i.d(t, { J: () => f });
            i(136728);
            var a = i(214636),
                n = i(202784),
                r = i(614983),
                o = i.n(r),
                s = (i(585488), i(277660)),
                l = i.n(s),
                d = i(107267),
                c = i(673510),
                u = i(44527),
                p = i(663550),
                h = i(409438),
                m = i(443781);
            const b = a.Z;
            function f(e) {
                const t = l()(b, e.user),
                    { avatar: i, legacy: a, privacy: r, verification: s } = t,
                    h = t.identity_profile_labels_highlighted_label?.label ? (0, u.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: f, decoration: g, displayMode: y } = e,
                    _ = (function () {
                        const { viewerUserId: e } = n.useContext(m.rC);
                        return o()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    S = (0, d.useHistory)(),
                    v = n.useCallback(() => ("function" == typeof g ? g({ displayMode: y, viewerUserId: _, userId: a?.id_str ?? "" }) : g), [g, _, a, y]),
                    C = n.useCallback(() => {
                        a?.screen_name && S.push({ pathname: `/${a.screen_name}` });
                    }, [S, a]);
                return n.createElement(c.ZP, { affiliateBadgeInfo: h, avatarUri: i?.image_url || "", decoration: v(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: a?.followed_by, isProtected: r?.protected ?? !1, isVerified: s?.verified ?? !1, name: a?.name || "", onCellClick: f ? C : void 0, promotedItemType: p.bj.USER, screenName: a?.screen_name || "", userId: a?.id_str ?? "", verifiedType: s?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            f.defaultProps = { cellClickable: !0, decoration: null, displayMode: h.Z.UserCompact };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-b308cbaf.adae0bda.js.map
