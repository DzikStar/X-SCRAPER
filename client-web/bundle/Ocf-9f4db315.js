"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-9f4db315", "loader.MediaPickerWithPreview"],
    {
        273919: (e, t, i) => {
            i.d(t, { OY: () => c, aw: () => s, z1: () => u });
            var a = i(506899),
                o = i(674132),
                r = i.n(o);
            const n = r().d5568440,
                d = r().d0511fe6,
                l = r().cd24fe60,
                s = new a.fK.Entity("emailValidity", {}, { processStrategy: (e) => ({ valid: e.valid, errorMessage: e.valid ? "" : e.msg }) }),
                c = new a.fK.Entity("passwordValidity", {}, { processStrategy: (e) => ({ valid: e.pass, errorMessage: e.pass ? "" : n }) }),
                u = new a.fK.Entity("phoneNumberValidity", {}, { processStrategy: (e) => ({ valid: e.valid && e.available, errorMessage: e.valid ? (e.available ? "" : d) : l }) });
        },
        121363: (e, t, i) => {
            i.d(t, { Z: () => s });
            var a = i(506899),
                o = i(676145),
                r = i(588960),
                n = i.n(r),
                d = i(318752);
            const l = (e, t, i) => {
                    const a = (0, d.Z)(e, t, i);
                    if (e && "string" == typeof a.vcard) {
                        const e = n().parse(a.vcard),
                            t = (e && e[0]) || null;
                        return { ...a, vcard: t };
                    }
                    return a;
                },
                s = new a.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, o.Z)(e.id) ? e.id : e.id_str), processStrategy: l });
        },
        229333: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                o = i(466999),
                r = i(325686),
                n = i(392237),
                d = i(674132);
            const l = i.n(d)().e5b0063d;
            let s = 0;
            class c extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        i = l({ title: t });
                    return a.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, t), a.createElement(r.Z, { "aria-label": i }, e));
                }
            }
            const u = c;
        },
        625661: (e, t, i) => {
            i.d(t, { ZP: () => p });
            var a = i(202784),
                o = i(614983),
                r = i.n(o),
                n = i(325686),
                d = i(370006),
                l = i(786998),
                s = i(929028),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: o, hideBackButton: r, isFullWidth: n, isLarge: s, leftControl: c, middleControl: p, position: h, rightControl: b, secondaryBar: m, style: f, subtitle: y, title: v, titleDomId: S, titleIconCell: g, titleIconCellSize: w, withBackground: A, withWideContainer: _ } = this.props,
                        { isModal: C } = this.context,
                        D = r ? c : a.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!A, C, !!m);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: n, isLarge: s, leftControl: D, middleControl: p, position: u(h, C, o), rightControl: b, style: f, subtitle: y, title: v, titleDomId: S, titleIconCell: g, titleIconCellSize: w, withBackground: Z, withWideContainer: _ }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = s.Z.getBackgroundStyles();
                    return t ? a.createElement(n.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                o = i(325686),
                r = i(392237);
            class n extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(o.Z, { style: d.root });
                }
            }
            const d = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = n;
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => w });
            var a = i(202784),
                o = i(325686),
                r = i(731708),
                n = i(15038),
                d = i(154003),
                l = i(682474),
                s = i(392237),
                c = i(674132),
                u = i.n(c),
                p = i(293615),
                h = i(837020),
                b = i(219229),
                m = i(373554),
                f = i(304059),
                y = i(751170);
            const v = u().b87ca51a,
                S = u().eebff22c,
                g = a.createElement(p.default, null);
            class w extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: d, mediaItem: l, onAddMediaFiles: s, onCrop: c, onRemove: u, rootStyle: p, withDragDrop: h } = this.props,
                        b = l && !l.uploader,
                        m = a.createElement(a.Fragment, null, this._renderPreview(), b ? null : a.createElement(a.Fragment, null, a.createElement(o.Z, { style: [_.mask, d, A[e]] }), a.createElement(o.Z, { style: [_.overlaidContent, i] }, a.createElement(o.Z, { style: _.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? a.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: _.description }, t) : null)));
                    return a.createElement(o.Z, { style: [_.container, p, A[e]] }, h && s ? a.createElement(n.ZP, { onFilesAdded: s, style: [_.dragDropContainer, A[e]] }, m) : m);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(d.ZP, { "aria-label": v, hoverLabel: { label: v }, icon: a.createElement(h.default, null), onPress: e, size: "large", style: _.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(d.ZP, { "aria-label": S, icon: a.createElement(b.default, null), onPress: e, size: "large", style: _.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: o, multiple: r, onAddMediaFiles: n, onEdit: l } = this.props;
                    return n ? a.createElement(m.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: o, multiple: r, onChange: n, size: "large", style: _.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(d.ZP, { "aria-label": i, icon: o, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: o } = this.props;
                    return o ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: o, style: _.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            w.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: y.A.NONE, icon: g };
            const A = s.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                _ = s.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => m, w: () => h });
            var a = i(202784),
                o = i(325686),
                r = i(108362),
                n = i(386802),
                d = i(392237),
                l = i(652904),
                s = i(555079),
                c = i(625661),
                u = i(449067),
                p = i(715601);
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: n, hideBackButton: d, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: m, rightControl: f, secondaryBar: y, subtitle: v, title: S } = this.props,
                                { isModal: g } = this.context;
                            return a.createElement(o.Z, { style: g ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (g ? "close" : "back"), backLocation: r, centerTitle: n, fixed: !g, hideBackButton: d, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: m, ref: e, rightControl: f, secondaryBar: y, style: [g && b.appBarModal, t], subtitle: v, title: S, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: n, documentTitle: d, isFullWidth: s, isLarge: c, renderHeader: h, title: m, withoutBottomBarMobile: f } = this.props,
                        { isModal: y } = this.context,
                        v = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(u.Z.Configure, { documentTitle: d, headerless: !0, title: m }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, y && b.rootModal] }, !y && v, a.createElement(r.Z, { isFullWidth: s, isLarge: c, style: [b.container, y && b.containerModal, n] }, y ? a.createElement(p.Z, { style: b.viewport }, v, i) : i), t ? a.createElement(o.Z, { style: [b.bottomBarModal, !y && !f && b.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: s, isLarge: c }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = n.Z);
            const b = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = h;
        },
        873637: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(807896),
                o = i(202784),
                r = i(325686),
                n = i(167630),
                d = i(548485),
                l = i(392237),
                s = i(674132),
                c = i.n(s),
                u = i(205074),
                p = i(653843);
            const h = c().gff1f69e;
            class b extends o.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof u.ZP &&
                        (0, p.ZP)(t).then((e) =>
                            new u.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : o.createElement(n.Z, { "aria-label": h, style: m.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: i, media: a, withAspectRatioOptions: n, withZoomControl: l } = this.props,
                        { orientedImage: s } = this.state,
                        { cropData: c, originalMediaFile: u = {} } = a || {};
                    return s ? o.createElement(r.Z, { style: m.cropper }, o.createElement(d.Z, { circle: this.props.circle, defaultAspectRatio: (i && i.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: i || c, image: { src: s.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: n, withZoomControl: l })) : null;
                }
            }
            const m = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                f = o.forwardRef((e, t) => o.createElement(b, (0, a.Z)({}, e, { cropperRef: t })));
        },
        337069: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(202784),
                o = i(325686),
                r = i(187669);
            const n = { threshold: 0.01 },
                d = (e) => {
                    const { children: t, onImpression: i, style: d } = e,
                        l = a.useRef(null),
                        s = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && i();
                            });
                        };
                    return (
                        (0, r.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(s, n),
                                    t = l.current;
                                null != t && e.observe(t);
                                const i = () => {
                                    const t = l.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return i;
                            }
                        }),
                        a.createElement(o.Z, { ref: l, style: d }, t)
                    );
                };
        },
        965245: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(807896),
                o = i(202784),
                r = i(229333),
                n = i(414939),
                d = i(334346);
            const l = ({ accessibilityTitle: e, footer: t = o.createElement(n.Z, null), ...i }) => {
                const l = o.createElement(d.C, (0, a.Z)({}, i, { footer: t }));
                return e ? o.createElement(r.Z, { title: e }, l) : l;
            };
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => y, h: () => m });
            var a = i(807896),
                o = i(202784),
                r = i(449161),
                n = i(392237),
                d = i(674132),
                l = i.n(d),
                s = i(473026),
                c = i(276259),
                u = i(540387);
            const p = "fileInput",
                h = l().b9960f32,
                b = o.createElement(s.default, null),
                m = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? u.jn : []);
            const f = n.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                y = function ({ "aria-label": e = h, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: n = !0, customMimeTypes: d = [], icon: l = b, size: s = "medium", style: c, withIcon: u = !0, ...y }) {
                    const v = m({ acceptGifs: t, acceptImages: i, acceptVideo: n }).concat(d).join(",");
                    return o.createElement(r.Z, (0, a.Z)({}, y, { accept: v, "aria-label": e, icon: u ? l : void 0, size: s, style: [f.root, c], testID: p }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => b, Z: () => v });
            var a = i(202784),
                o = i(325686),
                r = i(167630),
                n = i(992942),
                d = i(392237),
                l = i(674132),
                s = i.n(l),
                c = i(205074),
                u = i(364837),
                p = i(908478);
            const h = s().gff1f69e,
                b = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class m extends a.Component {
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
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: d, resizeMode: l } = this.props,
                        { imagePreviewUrl: s } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !s,
                        u = i.needsProcessing || c,
                        p = [y.root, f[e], u && y.loadingBorder],
                        b = this._getImageSrc();
                    return a.createElement(o.Z, { onClick: d, style: p }, u || !b ? a.createElement(r.Z, { "aria-label": h, style: y.activityIndicator }) : a.createElement(n.Z, { resizeMode: l, source: b, style: y.image }));
                }
            }
            m.defaultProps = { borderRadius: b.NONE, enableGif: !0, resizeMode: "cover" };
            const f = d.default.create((e) => ({ [b.INFINITE]: { borderRadius: e.borderRadii.infinite }, [b.MEDIUM]: { borderRadius: e.borderRadii.small }, [b.NONE]: { borderRadius: e.borderRadii.none } })),
                y = d.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                v = m;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => W });
            var a = i(202784),
                o = i(325686),
                r = i(537392),
                n = i(336961),
                d = i(659651),
                l = i(154003),
                s = i(392237),
                c = i(992942),
                u = i(674132),
                p = i.n(u),
                h = i(678773),
                b = i(597237),
                m = i(254944),
                f = i(837020),
                y = i(276259),
                v = i(443781),
                S = i(10656),
                g = i(716233),
                w = i(946208),
                A = i(540387),
                _ = i(950822),
                C = i(303186),
                D = i(954300);
            class Z extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: o, variants: r, ...n } = this.props,
                        d = (0, C.IM)((0, D.rD)(r), t);
                    return (0, _.Z)("video", { ...n, children: [d.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            Z.defaultProps = { dataSaverMode: !1, variants: [] };
            var E = i(959587),
                B = i(751170),
                P = i(523561),
                k = i(195560);
            const I = (0, P.Z)({
                    loader: () =>
                        Promise.all([
                            i.e("icons.8"),
                            i.e("icons.13"),
                            i.e("icons.1"),
                            i.e("modules.common-e907d115"),
                            i.e("modules.common-e019dbda"),
                            i.e("icons.10"),
                            i.e("icons.17"),
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
                            i.e("icons.29"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
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
                M = p().gd80afba,
                R = p().j322caee,
                V = p().abd845fe,
                F = p().df1b0708,
                x = p().cd959e5c,
                T = p().e68b09b4,
                L = p().add55c98,
                G = p().f350cf46;
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
                                        layout: { height: o, width: r },
                                    },
                                } = e,
                                { height: n, width: d } = a,
                                l = d / n;
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: s, onEditSensitiveWarning: c, onRemove: u, role: p, style: v, withAltTextLabel: g, withCloseButton: w, withDragAndDropIndicator: A, withEditButton: _, withEditIcon: C, withEditSensitiveWarningButton: D } = this.props,
                        { mediaContainerSizeStyle: Z, playGif: B } = this.state,
                        P = i.externalMediaDetails && i.externalMediaDetails.mediaType === y.Re,
                        k = P || (t && i.mediaFile && i.mediaFile.isGif),
                        I = !!i.mediaFile?.isVideo;
                    return a.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== C ? C : !S.Z.isTwoColumnLayout(t);
                        return a.createElement(o.Z, { "aria-label": e || L, onLayout: this._handleMediaPreviewLayout, role: p, style: [v, O.cursor, P && O.gifPlayButton, Z] }, this._renderPreview(), P && !B && a.createElement(n.Z, { "aria-label": F, onPress: this._handleGifClick, size: "small" }), k ? a.createElement(E.ZP, { type: E.AM }) : null, g && !I ? a.createElement(d.Z, { align: "left", altLabel: e }) : null, a.createElement(o.Z, { style: O.editMedia }, A ? a.createElement(l.ZP, { "aria-label": G, hoverLabel: { label: G }, icon: a.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, _ && D ? a.createElement(l.ZP, { "aria-label": R, icon: a.createElement(b.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, _ ? a.createElement(l.ZP, { "aria-label": M, icon: i ? a.createElement(m.default, null) : void 0, onPress: s, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : V) : null), w ? a.createElement(l.ZP, { "aria-label": x, hoverLabel: { label: T }, icon: a.createElement(f.default, null), onPress: u, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            i = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, i);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : a.createElement(o.Z, { style: s.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: i } = this.state,
                        r = { uri: i ? e : t };
                    return a.createElement(o.Z, { onClick: this._handleGifClick, style: s.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: r, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: o, onClick: r } = this.props;
                    return a.createElement(B.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: r, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, o) {
                    const { mediaItem: r } = this.props,
                        n = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof A.ZP) {
                        let n = [];
                        (0, g.TO)(o.fileHandle) && (n = [{ src: t, type: e }]);
                        const d = r.mediaMetadata?.subtitles,
                            l = r?.trimData;
                        return a.createElement(I, { mediaFile: o, mediaId: String(i), mediaItem: r, subtitles: d, trimData: l, variants: n });
                    }
                    {
                        const i = (0, g.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(Z, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof A.ZP ? o.thumbnail : "", style: O.video, variants: i }, n?.upload?.mediaFile instanceof w.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: n.displayName, src: n.upload.mediaFile.vtt, srcLang: n.lang }) : null);
                    }
                }
            }
            (z.contextType = v.rC), (z.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = s.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                W = z;
        },
        983389: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = i(202784),
                o = i(272175);
            const r = ({ description: e }) => a.createElement(o.ql, null, a.createElement("meta", { content: e, name: "description" }));
        },
        218093: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                o = i(420740),
                r = i(674132);
            const n = i.n(r)().b2311b70;
            function d() {
                return a.createElement(o.Z, { onRetry: null, title: n });
            }
            const l = a.memo(d);
        },
        977995: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(202784),
                o = i(637786),
                r = i(325686),
                n = i(731708),
                d = i(154003),
                l = i(392237),
                s = i(674132),
                c = i.n(s);
            const u = "recaptcha",
                p = c().c1df579e,
                h = c().b60eba9e,
                b = c().ba939778,
                m = c().bc6efc72;
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
                    return a.createElement(r.Z, null, a.createElement(n.ZP, { style: y.guideCopy }, h), a.createElement(r.Z, { style: y.button }, a.createElement(d.ZP, { disabled: e, onPress: this._handleConsent, size: "xLarge", type: "brandOutlined" }, p)), a.createElement(n.ZP, { color: "gray700" }, a.createElement(c().I18NFormatMessage, { $i18n: "hc37d3bb" }, a.createElement(n.ZP, { link: "https://policies.google.com/privacy" }, m))));
                }
                _renderRecaptcha() {
                    const { withConsentForm: e } = this.props;
                    return a.createElement(a.Fragment, null, e ? a.createElement(r.Z, { style: y.recaptchaTitle }, a.createElement(n.ZP, { style: y.guideCopy }, b)) : null, a.createElement(r.Z, { style: y.container }, a.createElement(o.Z, { "data-testid": u, onChange: this._handlePass, sitekey: "6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX" })));
                }
                render() {
                    const { withConsentForm: e } = this.props,
                        { termsAccepted: t } = this.state;
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha();
                }
            }
            const y = l.default.create((e) => ({ container: { margin: "auto", transitionProperty: "opacity", transitionDelay: "2s" }, button: { paddingVertical: e.spaces.space20 }, guideCopy: { paddingTop: e.spaces.space12 }, recaptchaTitle: { paddingBottom: e.spaces.space20 } }));
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => p, pX: () => s });
            var a = i(202784),
                o = i(731708),
                r = i(659651),
                n = i(392237),
                d = i(548721);
            const l = "animated_gif",
                s = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let n;
                    if (i === l) n = a.createElement(o.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) n = a.createElement(d.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === s && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        n = a.createElement(o.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return n ? a.createElement(r.Z, { align: "left" }, n) : null;
                },
                u = n.default.create((e) => ({ icon: { color: e.colors.white } })),
                p = a.memo(c);
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => C });
            var a = i(202784),
                o = i(392237),
                r = i(154003),
                n = i(674132),
                d = i.n(n),
                l = i(184605),
                s = i(980407),
                c = i(873637),
                u = i(668214),
                p = i(497294);
            const h = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                b = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                m = (0, u.Z)()
                    .propsFromState(() => ({ media: h, mediaId: b }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                y = d().gd80afba,
                v = d().a753a870;
            class S extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(r.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, v);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: a, mediaId: o, onDone: r, processMedia: n, updateMediaUpload: d } = this.props;
                                this.setState({ isProcessing: !0 });
                                const s = t.getCropData(),
                                    { originalMediaFile: c } = a || {},
                                    u = !c || (0 === s.top && 0 === s.left && s.width === c.width && s.height === c.height);
                                (0, l.Z)(o) &&
                                    (e
                                        ? (e(s), r())
                                        : (d({ id: o, cropData: u ? void 0 : s }),
                                          n(o).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), r();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: o, withZoomControl: r } = this.props,
                        n = this._getMedia();
                    return a.createElement(s.Z, { backButtonType: "back", containerStyle: g.root, documentTitle: i || y, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || y }, a.createElement(c.Z, { defaultAspectRatio: e, media: n, ref: this._cropper, withAspectRatioOptions: o, withZoomControl: r }));
                }
            }
            const g = o.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                w = m(S);
            var A = i(757700);
            const _ = o.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                C = (e) => a.createElement(A.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: _.modal }, a.createElement(w, e));
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => s, default: () => c });
            var a = i(202784),
                o = i(850496),
                r = i(373554),
                n = i(668214),
                d = i(497294);
            const l = (0, n.Z)().propsFromActions(() => ({ addMedia: d.rA, processMultipleMedia: d.G$ }));
            class s extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: o, processMultipleMedia: r } = this.props,
                                n = this._getAcceptedFileInputs(),
                                d = Array.from(e).find((e) => n.includes(e.type));
                            d &&
                                t([d], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), r(e, { onFailure: o });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, r.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: n, currentContent: d, description: l, innerStyle: s, maskStyle: c, mediaItem: u, onCrop: p, onRemove: h, rootStyle: b } = this.props;
                    return a.createElement(o.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: n, currentContent: d, description: l, innerStyle: s, maskStyle: c, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: h, rootStyle: b, withDragDrop: !0 });
                }
            }
            s.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(s);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                o = i(500002),
                r = i(668214),
                n = i(997174),
                d = i(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class s extends a.Component {
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
                            locationKey: d,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const s = o || d;
                    ((s && o !== d) || (!s && i !== r) || a !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, o.ZP)(l(s));
        },
        659492: (e, t, i) => {
            i.r(t), i.d(t, { default: () => u });
            var a = i(202784),
                o = i(99107),
                r = i(107267),
                n = i(125363),
                d = i(205253),
                l = i(390387),
                s = i(466441),
                c = i(443781);
            function u(e) {
                return (0, n.v9)(l.sJ) ? a.createElement(p, null) : a.createElement(s.default, e);
            }
            function p() {
                const e = (0, r.useHistory)(),
                    t = (0, n.I0)(),
                    i = (0, n.v9)(l.sJ),
                    s = (0, n.oR)(),
                    { featureSwitches: u } = (0, c.QZ)();
                return (
                    a.useEffect(() => {
                        if (!i) return;
                        t((0, l.Jm)("/i/conferences-room"));
                        const a = u.isTrue("responsive_web_sso_redirect_enabled") || u.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || u.isTrue("responsive_web_repeat_profile_visits_notifications_enabled");
                        t((0, l.CA)(o.Bm.Google)).then(() => {
                            const t = s.getState(),
                                r = (0, l.yl)(t),
                                { allowCookieUse: n, allowDeviceAccess: c, allowPartnerships: u, allowPersonalization: p } = d.kQ(t),
                                h = d.LP(t).is_eu_country,
                                b = (0, l.V_)(t);
                            e.replace({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: h && { allow_cookie_use: !!n, allow_device_personalization: !!c, allow_partnerships: !!u, allow_ads_personalization: !!p }, requested_variant: JSON.stringify({ id_token: i, provider: o.Bm.Google, state: r[o.Bm.Google], redirect_uri: a ? b : void 0 }) } } });
                        });
                    }, [i, t, u, e, s]),
                    null
                );
            }
        },
        53140: (e, t, i) => {
            i.d(t, { Z: () => y });
            var a = i(202784),
                o = i(325686),
                r = i(392237),
                n = i(674132),
                d = i.n(n),
                l = i(516951),
                s = i(808692),
                c = i(668214),
                u = i(390387);
            const p = (0, c.Z)().propsFromState(() => ({ language: u.VT })),
                h = d().gde8fdd7({ mention: "X" }),
                b = { text: h, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, h.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [h.indexOf("@"), h.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class m extends a.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: i } = this.props;
                    this._tweet = { ...b, ...i, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return a.createElement(o.Z, { "aria-hidden": !0, style: [f.width, e && f.tweetBorder] }, a.createElement(s.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), a.createElement(o.Z, { style: r.default.absoluteFill }));
                }
            }
            m.defaultProps = { tweet: b, withTweetBorder: !1 };
            const f = r.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                y = p(m);
        },
        700613: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(807896),
                o = i(202784),
                r = i(872660),
                n = i(917920);
            const d = (e) => {
                const { onRef: t, ...i } = e;
                return o.createElement(r.Z, (0, a.Z)({ module: n.Z, onRef: t, type: "email" }, i));
            };
        },
        872660: (e, t, i) => {
            i.d(t, { Z: () => p });
            var a = i(202784),
                o = i(855488),
                r = i(666536),
                n = i(908478),
                d = i(71620),
                l = i(668214);
            const s = (e, t) => t.module.selectEntitiesWithFetchStatus(e),
                c = (0, l.Z)()
                    .propsFromState(() => ({ validity: s }))
                    .propsFromActions(({ module: e }) => ({ clearValidity: e.clear, createLocalApiErrorHandler: (0, d.zr)("VALIDITY_FIELD_CONTEXT"), validate: e.validate }));
            class u extends a.Component {
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
                    (this.state = { value: i, isValid: this._getIsValid(e.validity, i) }), (this._validateDebounced = (0, r.Z)(({ value: e, ...t }) => this.props.validate(e, t).catch(this.props.createLocalApiErrorHandler()), 500));
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
                        o = !(0, n.Z)(e.validationParams, this.props.validationParams);
                    a ? this.props.onValidityChange(this.state.isValid) : i && o && (this.props.clearValidity(), this._validateDebounced({ value: i, ...this.props.validationParams }));
                }
                render() {
                    const { autoComplete: e, autoFocus: t, editable: i, label: r, name: n, style: d, type: l, validity: s } = this.props,
                        { value: c } = this.state,
                        u = c && s[c] ? s[c].errorMessage : "";
                    return a.createElement(o.Z, { autoComplete: e, autoFocus: t, editable: i, errorText: u, invalid: !!u, label: r, name: n, onChange: this._handleValueChange, ref: this._setInputRef, style: d, type: l, value: this.state.value });
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
            u.defaultProps = { label: "" };
            const p = c(u);
        },
        102516: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(807896),
                o = i(202784),
                r = i(872660),
                n = i(580134);
            const d = (e) => {
                const { countryCode: t, onRef: i, ...d } = e,
                    l = { country_code: t };
                return o.createElement(r.Z, (0, a.Z)({ module: n.Z, onRef: i, type: "tel", validationParams: l }, d));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-9f4db315.822f135a.js.map
