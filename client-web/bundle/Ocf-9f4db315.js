"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-9f4db315", "loader.MediaPickerWithPreview"],
    {
        273919: (e, t, i) => {
            i.d(t, { OY: () => c, aw: () => d, z1: () => p });
            var a = i(506899),
                o = i(111677),
                n = i.n(o);
            const r = n().d5568440,
                s = n().d0511fe6,
                l = n().cd24fe60,
                d = new a.fK.Entity("emailValidity", {}, { processStrategy: (e) => ({ valid: e.valid, errorMessage: e.valid ? "" : e.msg }) }),
                c = new a.fK.Entity("passwordValidity", {}, { processStrategy: (e) => ({ valid: e.pass, errorMessage: e.pass ? "" : r }) }),
                p = new a.fK.Entity("phoneNumberValidity", {}, { processStrategy: (e) => ({ valid: e.valid && e.available, errorMessage: e.valid ? (e.available ? "" : s) : l }) });
        },
        121363: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(506899),
                o = i(676145),
                n = i(588960),
                r = i.n(n),
                s = i(318752);
            const l = (e, t, i) => {
                    const a = (0, s.Z)(e, t, i);
                    if (e && "string" == typeof a.vcard) {
                        const e = r().parse(a.vcard),
                            t = (e && e[0]) || null;
                        return { ...a, vcard: t };
                    }
                    return a;
                },
                d = new a.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, o.Z)(e.id) ? e.id : e.id_str), processStrategy: l });
        },
        229333: (e, t, i) => {
            i.d(t, { Z: () => p });
            var a = i(202784),
                o = i(466999),
                n = i(325686),
                r = i(392237),
                s = i(111677);
            const l = i.n(s)().e5b0063d;
            let d = 0;
            class c extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        i = l({ title: t });
                    return a.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), a.createElement(n.Z, { "aria-label": i }, e));
                }
            }
            const p = c;
        },
        625661: (e, t, i) => {
            i.d(t, { ZP: () => u });
            var a = i(202784),
                o = i(614983),
                n = i.n(o),
                r = i(325686),
                s = i(370006),
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
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: o, hideBackButton: n, isFullWidth: r, isLarge: d, leftControl: c, middleControl: u, position: h, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: _, titleIconCell: v, titleIconCellSize: w, withBackground: C, withWideContainer: Z } = this.props,
                        { isModal: E } = this.context,
                        P = n ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!C, E, !!g);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: r, isLarge: d, leftControl: P, middleControl: u, position: p(h, E, o), rightControl: m, style: b, subtitle: f, title: y, titleDomId: _, titleIconCell: v, titleIconCellSize: w, withBackground: k, withWideContainer: Z }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? a.createElement(r.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        169576: (e, t, i) => {
            i.d(t, { c: () => b, Z: () => f });
            var a = i(202784),
                o = i(325686),
                n = i(392237),
                r = i(530732),
                s = i(992942),
                l = i(731708),
                d = i(154003),
                c = i(725516),
                p = i(111677),
                u = i.n(p);
            const h = i.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = i.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: h, lightMode: m } },
                b = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: i, styleOverrides: p, withBackgroundImage: u }) => {
                    const h = (0, c.z)(),
                        m = b[i] || "Occasion",
                        f = u ? `${m}WithBackgroundImage` : m;
                    a.useEffect(() => {
                        h.scribe({ component: f, action: "impression" });
                    }, [h, f]);
                    const _ = () => {
                            h.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: v, buttonSize: w, cardWidth: C, marginbottom: Z, textcolor: E } = p ?? {},
                        P = v ? n.default.theme.colors[v] : n.default.theme.colors.gray0,
                        k = E ? n.default.theme.colors[E] : n.default.theme.colors.gray900,
                        I = Z ? n.default.theme.spaces[Z] : n.default.theme.spaces.space16,
                        M = { [b.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[i];
                    return u ? a.createElement(r.Z, { interactiveStyles: null, link: t, onPress: _, style: y.bannerContainer }, a.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? M.image.lightMode : M.image.darkMode }, style: { height: 85 } })) : a.createElement(o.Z, { style: [y.card, { backgroundColor: P }, { maxWidth: C }, { marginBottom: I }], testID: "popupCard" }, a.createElement(o.Z, { style: e ? y.horizontalContent : y.verticalContent }, a.createElement(o.Z, { style: e ? y.textContainer : null }, a.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, M.header), a.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: k }] }, M.description, " ", e ? null : M.legalDisclaimer)), a.createElement(o.Z, { style: y.buttonContainer }, a.createElement(d.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: _, size: "medium", style: [y.popupButton, { width: w }] }, M.buttonText), e && a.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: k }] }, M.legalDisclaimer))));
                },
                y = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        414939: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                o = i(325686),
                n = i(392237);
            class r extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(o.Z, { style: s.root });
                }
            }
            const s = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = r;
        },
        290402: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                o = i(202784),
                n = i(182056),
                r = i(879113),
                s = i(392237),
                l = i(111677),
                d = i.n(l),
                c = i(968478);
            const p = d().aa6e3300,
                u = ({ retryMessage: e, ...t }, i) => {
                    const s = n.Z.isOnline();
                    return o.createElement(r.Z, (0, a.Z)({}, t, { icon: s ? void 0 : o.createElement(c.default, { style: h.icon }), retryMessage: s ? e : p }));
                },
                h = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = o.forwardRef(u);
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => w });
            var a = i(202784),
                o = i(325686),
                n = i(731708),
                r = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(111677),
                p = i.n(c),
                u = i(293615),
                h = i(837020),
                m = i(219229),
                g = i(373554),
                b = i(304059),
                f = i(751170);
            const y = p().b87ca51a,
                _ = p().eebff22c,
                v = a.createElement(u.default, null);
            class w extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: p, rootStyle: u, withDragDrop: h } = this.props,
                        m = l && !l.uploader,
                        g = a.createElement(a.Fragment, null, this._renderPreview(), m ? null : a.createElement(a.Fragment, null, a.createElement(o.Z, { style: [Z.mask, s, C[e]] }), a.createElement(o.Z, { style: [Z.overlaidContent, i] }, a.createElement(o.Z, { style: Z.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? a.createElement(n.ZP, { align: "center", color: "gray700", size: "subtext1", style: Z.description }, t) : null)));
                    return a.createElement(o.Z, { style: [Z.container, u, C[e]] }, h && d ? a.createElement(r.ZP, { onFilesAdded: d, style: [Z.dragDropContainer, C[e]] }, g) : g);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": y, hoverLabel: { label: y }, icon: a.createElement(h.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": _, icon: a.createElement(m.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: o, multiple: n, onAddMediaFiles: r, onEdit: l } = this.props;
                    return r ? a.createElement(g.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: o, multiple: n, onChange: r, size: "large", style: Z.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(s.ZP, { "aria-label": i, icon: o, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: o } = this.props;
                    return o ? a.createElement(l.Z, { ratio: e }, a.createElement(b.Z, { borderRadius: t, enableGif: !1, mediaItem: o, style: Z.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            w.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.A.NONE, icon: v };
            const C = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                Z = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => g, w: () => h });
            var a = i(202784),
                o = i(325686),
                n = i(108362),
                r = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                p = i(449067),
                u = i(715601);
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: n, centerTitle: r, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: _ } = this.props,
                                { isModal: v } = this.context;
                            return a.createElement(o.Z, { style: v ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (v ? "close" : "back"), backLocation: n, centerTitle: r, fixed: !v, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [v && m.appBarModal, t], subtitle: y, title: _, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: r, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: h, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: g }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && y, a.createElement(n.Z, { isFullWidth: d, isLarge: c, style: [m.container, f && m.containerModal, r] }, f ? a.createElement(u.Z, { style: m.viewport }, y, i) : i), t ? a.createElement(o.Z, { style: [m.bottomBarModal, !f && !b && m.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = r.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = h;
        },
        873637: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(807896),
                o = i(202784),
                n = i(325686),
                r = i(167630),
                s = i(548485),
                l = i(392237),
                d = i(111677),
                c = i.n(d),
                p = i(205074),
                u = i(653843);
            const h = c().gff1f69e;
            class m extends o.Component {
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
                    return this.state.orientedImage ? this._renderCropper() : o.createElement(r.Z, { "aria-label": h, style: g.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: i, media: a, withAspectRatioOptions: r, withZoomControl: l } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: p = {} } = a || {};
                    return d ? o.createElement(n.Z, { style: g.cropper }, o.createElement(s.Z, { circle: this.props.circle, defaultAspectRatio: (i && i.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: i || c, image: { src: d.url, width: p.width, height: p.height }, ref: e, withAspectRatioOptions: r, withZoomControl: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                b = o.forwardRef((e, t) => o.createElement(m, (0, a.Z)({}, e, { cropperRef: t })));
        },
        337069: (e, t, i) => {
            i.d(t, { Z: () => s });
            var a = i(202784),
                o = i(325686),
                n = i(187669);
            const r = { threshold: 0.01 },
                s = (e) => {
                    const { children: t, onImpression: i, style: s } = e,
                        l = a.useRef(null),
                        d = (e) => {
                            e.forEach((e) => {
                                e.isIntersecting && i();
                            });
                        };
                    return (
                        (0, n.q)(() => {
                            if ("IntersectionObserver" in window) {
                                const e = new IntersectionObserver(d, r),
                                    t = l.current;
                                null != t && e.observe(t);
                                const i = () => {
                                    const t = l.current;
                                    null != t && e.unobserve(t), e.disconnect();
                                };
                                return i;
                            }
                        }),
                        a.createElement(o.Z, { ref: l, style: s }, t)
                    );
                };
        },
        965245: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(807896),
                o = i(202784),
                n = i(229333),
                r = i(414939),
                s = i(334346);
            const l = ({ accessibilityTitle: e, footer: t = o.createElement(r.Z, null), ...i }) => {
                const l = o.createElement(s.C, (0, a.Z)({}, i, { footer: t }));
                return e ? o.createElement(n.Z, { title: e }, l) : l;
            };
        },
        373554: (e, t, i) => {
            i.d(t, { Z: () => f, h: () => g });
            var a = i(807896),
                o = i(202784),
                n = i(449161),
                r = i(392237),
                s = i(111677),
                l = i.n(s),
                d = i(473026),
                c = i(276259),
                p = i(540387);
            const u = "fileInput",
                h = l().b9960f32,
                m = o.createElement(d.default, null),
                g = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: i }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(i ? p.jn : []);
            const b = r.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = h, acceptGifs: t = !0, acceptImages: i = !0, acceptVideo: r = !0, customMimeTypes: s = [], icon: l = m, size: d = "medium", style: c, withIcon: p = !0, ...f }) {
                    const y = g({ acceptGifs: t, acceptImages: i, acceptVideo: r }).concat(s).join(",");
                    return o.createElement(n.Z, (0, a.Z)({}, f, { accept: y, "aria-label": e, icon: p ? l : void 0, size: d, style: [b.root, c], testID: u }));
                };
        },
        751170: (e, t, i) => {
            i.d(t, { A: () => m, Z: () => y });
            var a = i(202784),
                o = i(325686),
                n = i(167630),
                r = i(992942),
                s = i(392237),
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
                    const { borderRadius: e, enableGif: t, mediaItem: i, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = i.mediaFile && i.mediaFile.isGif && !t && !d,
                        p = i.needsProcessing || c,
                        u = [f.root, b[e], p && f.loadingBorder],
                        m = this._getImageSrc();
                    return a.createElement(o.Z, { onClick: s, style: u }, p || !m ? a.createElement(n.Z, { "aria-label": h, style: f.activityIndicator }) : a.createElement(r.Z, { resizeMode: l, source: m, style: f.image }));
                }
            }
            g.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const b = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                f = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                y = g;
        },
        304059: (e, t, i) => {
            i.d(t, { Z: () => W });
            var a = i(202784),
                o = i(325686),
                n = i(537392),
                r = i(336961),
                s = i(659651),
                l = i(154003),
                d = i(392237),
                c = i(992942),
                p = i(111677),
                u = i.n(p),
                h = i(678773),
                m = i(597237),
                g = i(254944),
                b = i(837020),
                f = i(276259),
                y = i(443781),
                _ = i(10656),
                v = i(716233),
                w = i(946208),
                C = i(540387),
                Z = i(950822),
                E = i(303186),
                P = i(954300);
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: i, style: o, variants: n, ...r } = this.props,
                        s = (0, E.IM)((0, P.rD)(n), t);
                    return (0, Z.Z)("video", { ...r, children: [s.map((e) => a.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: o });
                }
            }
            k.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = i(959587),
                M = i(751170),
                x = i(523561),
                B = i(195560);
            const S = (0, x.Z)({
                    loader: () =>
                        Promise.all([i.e("icons.0"), i.e("icons.16"), i.e("icons.10"), i.e("icons.13"), i.e("icons.22"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("icons.26"), i.e("modules.audio-6107ac1a"), i.e("modules.audio-b953418a"), i.e("modules.audio-7c51e6a7"), i.e("modules.audio-04db59e9"), i.e("modules.audio-76583d6c"), i.e("modules.audio-b7a8a5fb"), i.e("modules.audio-51f6e793"), i.e("modules.audio-e019dbda"), i.e("modules.audio-262c94d4"), i.e("modules.audio-c6fe4ea4"), i.e("icons.4"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), i.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), i.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), i.e("loader.MediaPreviewVideoPlayer")])
                            .then(i.bind(i, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => a.createElement(B.Z, { hasError: e, onRetry: t }),
                }),
                R = u().gd80afba,
                D = u().j322caee,
                A = u().abd845fe,
                V = u().df1b0708,
                F = u().cd959e5c,
                T = u().e68b09b4,
                L = u().add55c98,
                z = u().f350cf46;
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
                                        layout: { height: o, width: n },
                                    },
                                } = e,
                                { height: r, width: s } = a,
                                l = s / r;
                            Math.abs(l - n / o) > 0.05 && ("width" === i ? this.setState({ mediaContainerSizeStyle: { width: o * l } }) : "height" === i && this.setState({ mediaContainerSizeStyle: { height: n / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: i, onEdit: d, onEditSensitiveWarning: c, onRemove: p, role: u, style: y, withAltTextLabel: v, withCloseButton: w, withDragAndDropIndicator: C, withEditButton: Z, withEditIcon: E, withEditSensitiveWarningButton: P } = this.props,
                        { mediaContainerSizeStyle: k, playGif: M } = this.state,
                        x = i.externalMediaDetails && i.externalMediaDetails.mediaType === f.Re,
                        B = x || (t && i.mediaFile && i.mediaFile.isGif),
                        S = !!i.mediaFile?.isVideo;
                    return a.createElement(n.ZP, null, ({ windowWidth: t }) => {
                        const i = void 0 !== E ? E : !_.Z.isTwoColumnLayout(t);
                        return a.createElement(o.Z, { "aria-label": e || L, onLayout: this._handleMediaPreviewLayout, role: u, style: [y, O.cursor, x && O.gifPlayButton, k] }, this._renderPreview(), x && !M && a.createElement(r.Z, { "aria-label": V, onPress: this._handleGifClick, size: "small" }), B ? a.createElement(I.ZP, { type: I.AM }) : null, v && !S ? a.createElement(s.Z, { align: "left", altLabel: e }) : null, a.createElement(o.Z, { style: O.editMedia }, C ? a.createElement(l.ZP, { "aria-label": z, hoverLabel: { label: z }, icon: a.createElement(h.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, Z && P ? a.createElement(l.ZP, { "aria-label": D, icon: a.createElement(m.default, { style: O.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, Z ? a.createElement(l.ZP, { "aria-label": R, icon: i ? a.createElement(g.default, null) : void 0, onPress: d, size: i ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, i ? void 0 : A) : null), w ? a.createElement(l.ZP, { "aria-label": F, hoverLabel: { label: T }, icon: a.createElement(b.default, null), onPress: p, size: "small", style: O.buttonRight, type: "onMediaDominantColorFilled" }) : null);
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
                        n = { uri: i ? e : t };
                    return a.createElement(o.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, a.createElement(c.Z, { resizeMode: "cover", source: n, style: O.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: i, mediaItem: o, onClick: n } = this.props;
                    return a.createElement(M.Z, { borderRadius: e, enableGif: t, mediaItem: o, onClick: n, resizeMode: i });
                }
                _renderVideoPreview(e, t, i, o) {
                    const { mediaItem: n } = this.props,
                        r = n.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && o instanceof C.ZP) {
                        let r = [];
                        (0, v.TO)(o.fileHandle) && (r = [{ src: t, type: e }]);
                        const s = n.mediaMetadata?.subtitles,
                            l = n?.trimData;
                        return a.createElement(S, { mediaFile: o, mediaId: String(i), mediaItem: n, subtitles: s, trimData: l, variants: r });
                    }
                    {
                        const i = (0, v.TO)(o.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return a.createElement(k, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: o instanceof C.ZP ? o.thumbnail : "", style: O.video, variants: i }, r?.upload?.mediaFile instanceof w.ZP ? a.createElement("track", { default: !0, kind: "subtitles", label: r.displayName, src: r.upload.mediaFile.vtt, srcLang: r.lang }) : null);
                    }
                }
            }
            (G.contextType = y.rC), (G.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const O = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                W = G;
        },
        983389: (e, t, i) => {
            i.d(t, { Z: () => n });
            var a = i(202784),
                o = i(272175);
            const n = ({ description: e }) => a.createElement(o.ql, null, a.createElement("meta", { content: e, name: "description" }));
        },
        349035: (e, t, i) => {
            i.d(t, { Z: () => n });
            var a = i(202784),
                o = i(272175);
            const n = (0, i(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(o.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, i) => {
            i.d(t, { Z: () => l });
            var a = i(202784),
                o = i(420740),
                n = i(111677);
            const r = i.n(n)().b2311b70;
            function s() {
                return a.createElement(o.Z, { onRetry: null, title: r });
            }
            const l = a.memo(s);
        },
        977995: (e, t, i) => {
            i.d(t, { Z: () => b });
            var a = i(202784),
                o = i(637786),
                n = i(325686),
                r = i(731708),
                s = i(154003),
                l = i(392237),
                d = i(111677),
                c = i.n(d);
            const p = "recaptcha",
                u = c().c1df579e,
                h = c().b60eba9e,
                m = c().ba939778,
                g = c().bc6efc72;
            class b extends a.Component {
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
                    return a.createElement(n.Z, null, a.createElement(r.ZP, { style: f.guideCopy }, h), a.createElement(n.Z, { style: f.button }, a.createElement(s.ZP, { disabled: e, onPress: this._handleConsent, size: "xLarge", type: "brandOutlined" }, u)), a.createElement(r.ZP, { color: "gray700" }, a.createElement(c().I18NFormatMessage, { $i18n: "hc37d3bb" }, a.createElement(r.ZP, { link: "https://policies.google.com/privacy" }, g))));
                }
                _renderRecaptcha() {
                    const { withConsentForm: e } = this.props;
                    return a.createElement(a.Fragment, null, e ? a.createElement(n.Z, { style: f.recaptchaTitle }, a.createElement(r.ZP, { style: f.guideCopy }, m)) : null, a.createElement(n.Z, { style: f.container }, a.createElement(o.Z, { "data-testid": p, onChange: this._handlePass, sitekey: "6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX" })));
                }
                render() {
                    const { withConsentForm: e } = this.props,
                        { termsAccepted: t } = this.state;
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha();
                }
            }
            const f = l.default.create((e) => ({ container: { margin: "auto", transitionProperty: "opacity", transitionDelay: "2s" }, button: { paddingVertical: e.spaces.space20 }, guideCopy: { paddingTop: e.spaces.space12 }, recaptchaTitle: { paddingBottom: e.spaces.space20 } }));
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => u, pX: () => d });
            var a = i(202784),
                o = i(731708),
                n = i(659651),
                r = i(392237),
                s = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let r;
                    if (i === l) r = a.createElement(o.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) r = a.createElement(s.default, { "aria-label": "Vine", style: p.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        r = a.createElement(o.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return r ? a.createElement(n.Z, { align: "left" }, r) : null;
                },
                p = r.default.create((e) => ({ icon: { color: e.colors.white } })),
                u = a.memo(c);
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => E });
            var a = i(202784),
                o = i(392237),
                n = i(154003),
                r = i(111677),
                s = i.n(r),
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
                b = "applyButton",
                f = s().gd80afba,
                y = s().a753a870;
            class _ extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(n.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: b, type: "primaryFilled" }, y);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: a, mediaId: o, onDone: n, processMedia: r, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const d = t.getCropData(),
                                    { originalMediaFile: c } = a || {},
                                    p = !c || (0 === d.top && 0 === d.left && d.width === c.width && d.height === c.height);
                                (0, l.Z)(o) &&
                                    (e
                                        ? (e(d), n())
                                        : (s({ id: o, cropData: p ? void 0 : d }),
                                          r(o).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), n();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: o, withZoomControl: n } = this.props,
                        r = this._getMedia();
                    return a.createElement(d.Z, { backButtonType: "back", containerStyle: v.root, documentTitle: i || f, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || f }, a.createElement(c.Z, { defaultAspectRatio: e, media: r, ref: this._cropper, withAspectRatioOptions: o, withZoomControl: n }));
                }
            }
            const v = o.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                w = g(_);
            var C = i(757700);
            const Z = o.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                E = (e) => a.createElement(C.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: Z.modal }, a.createElement(w, e));
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var a = i(202784),
                o = i(850496),
                n = i(373554),
                r = i(668214),
                s = i(497294);
            const l = (0, r.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: o, processMultipleMedia: n } = this.props,
                                r = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => r.includes(e.type));
                            s &&
                                t([s], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), n(e, { onFailure: o });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, n.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: n, borderRadius: r, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onCrop: u, onRemove: h, rootStyle: m } = this.props;
                    return a.createElement(o.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: n, borderRadius: r, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        56851: (e, t, i) => {
            i.d(t, { Z: () => g });
            var a = i(202784),
                o = i(420740),
                n = i(108362),
                r = i(731708),
                s = i(154003),
                l = i(392237),
                d = i(111677),
                c = i.n(d),
                p = i(349035);
            const u = "error-detail",
                h = c().e49537c2,
                m = c().a9ae1e78;
            class g extends a.PureComponent {
                render() {
                    return a.createElement(o.Z, { testID: u }, a.createElement(p.Z, null), a.createElement(n.Z, { style: b.root }, a.createElement(r.ZP, { align: "center", color: "gray700", style: b.retryText }, h), a.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                o = i(500002),
                n = i(668214),
                r = i(997174),
                s = i(118823);
            const l = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
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
                            location: { pathname: n, search: r },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = o || s;
                    ((d && o !== s) || (!d && i !== n) || a !== r || l) && this._performPageUpdates(this.props);
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
        3196: (e, t, i) => {
            i.d(t, { Z: () => E });
            i(136728);
            var a = i(202784),
                o = i(99107),
                n = i(688715),
                r = i(154003),
                s = i(111677),
                l = i.n(s),
                d = i(261214),
                c = i(462775),
                p = i(182495),
                u = i(601798),
                h = i(500002),
                m = i(443781),
                g = i(406837),
                b = i(950570),
                f = i(911318);
            const y = l().ib65b1c6,
                _ = l().f55cebb8,
                v = l().dcc304d6,
                w = l().g61ed8a4,
                C = { clientId: f.fp, scope: "name email", usePopup: !0 };
            class Z extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, c.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case p.yX.LogIn:
                                    return _;
                                case p.yX.ContinueWith:
                                    return v;
                                default:
                                    return y;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(o.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...C, redirectURI: (0, n.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: i, history: a, loginReturnPath: n, personalizationSettings: r, shouldPropagateP13nSettings: s, ssoInitTokens: l } = this.props,
                                { allowCookieUse: d, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = r || {};
                            t.scribe({ component: "apple_sign_in", element: i, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: i, action: "success" });
                                        const r = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        a.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: s && { allow_cookie_use: !!d, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ display_name: r && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: o.Bm.Apple, state: l[o.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? n : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: a } = this.props,
                                            { error: o } = e;
                                        o !== f.IN ? (t.scribe({ component: "apple_sign_in", element: i, action: "failure" }), a({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
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
                        o = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : a.createElement(r.ZP, { backgroundColor: "white", borderColor: "gray200", children: o, color: "alwaysBaseGray1100", disabled: !i, fontWeight: "normal", icon: a.createElement(d.default, null), onPress: this._handleOnPress, size: e, style: t, testID: b.Z.apple });
                }
            }
            (Z.contextType = m.rC), (Z.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const E = (0, h.ZP)((0, g.Z)(Z));
        },
        659492: (e, t, i) => {
            i.r(t), i.d(t, { default: () => p });
            var a = i(202784),
                o = i(99107),
                n = i(107267),
                r = i(125363),
                s = i(205253),
                l = i(390387),
                d = i(466441),
                c = i(443781);
            function p(e) {
                return (0, r.v9)(l.sJ) ? a.createElement(u, null) : a.createElement(d.default, e);
            }
            function u() {
                const e = (0, n.useHistory)(),
                    t = (0, r.I0)(),
                    i = (0, r.v9)(l.sJ),
                    d = (0, r.oR)(),
                    { featureSwitches: p } = (0, c.QZ)();
                return (
                    a.useEffect(() => {
                        if (!i) return;
                        t((0, l.Jm)("/i/conferences-room"));
                        const a = p.isTrue("responsive_web_sso_redirect_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || p.isTrue("responsive_web_repeat_profile_visits_notifications_enabled");
                        t((0, l.CA)(o.Bm.Google)).then(() => {
                            const t = d.getState(),
                                n = (0, l.yl)(t),
                                { allowCookieUse: r, allowDeviceAccess: c, allowPartnerships: p, allowPersonalization: u } = s.kQ(t),
                                h = s.LP(t).is_eu_country,
                                m = (0, l.V_)(t);
                            e.replace({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: h && { allow_cookie_use: !!r, allow_device_personalization: !!c, allow_partnerships: !!p, allow_ads_personalization: !!u }, requested_variant: JSON.stringify({ id_token: i, provider: o.Bm.Google, state: n[o.Bm.Google], redirect_uri: a ? m : void 0 }) } } });
                        });
                    }, [i, t, p, e, d]),
                    null
                );
            }
        },
        53140: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(202784),
                o = i(325686),
                n = i(392237),
                r = i(111677),
                s = i.n(r),
                l = i(516951),
                d = i(808692),
                c = i(668214),
                p = i(390387);
            const u = (0, c.Z)().propsFromState(() => ({ language: p.VT })),
                h = s().gde8fdd7({ mention: "X" }),
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
                    return a.createElement(o.Z, { "aria-hidden": !0, style: [b.width, e && b.tweetBorder] }, a.createElement(d.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), a.createElement(o.Z, { style: n.default.absoluteFill }));
                }
            }
            g.defaultProps = { tweet: m, withTweetBorder: !1 };
            const b = n.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                f = u(g);
        },
        700613: (e, t, i) => {
            i.d(t, { Z: () => s });
            var a = i(807896),
                o = i(202784),
                n = i(872660),
                r = i(917920);
            const s = (e) => {
                const { onRef: t, ...i } = e;
                return o.createElement(n.Z, (0, a.Z)({ module: r.Z, onRef: t, type: "email" }, i));
            };
        },
        872660: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                o = i(855488),
                n = i(666536),
                r = i(908478),
                s = i(71620),
                l = i(668214);
            const d = (e, t) => t.module.selectEntitiesWithFetchStatus(e),
                c = (0, l.Z)()
                    .propsFromState(() => ({ validity: d }))
                    .propsFromActions(({ module: e }) => ({ clearValidity: e.clear, createLocalApiErrorHandler: (0, s.zr)("VALIDITY_FIELD_CONTEXT"), validate: e.validate }));
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
                    (this.state = { value: i, isValid: this._getIsValid(e.validity, i) }), (this._validateDebounced = (0, n.Z)(({ value: e, ...t }) => this.props.validate(e, t).catch(this.props.createLocalApiErrorHandler()), 500));
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
                        o = !(0, r.Z)(e.validationParams, this.props.validationParams);
                    a ? this.props.onValidityChange(this.state.isValid) : i && o && (this.props.clearValidity(), this._validateDebounced({ value: i, ...this.props.validationParams }));
                }
                render() {
                    const { autoComplete: e, autoFocus: t, editable: i, label: n, name: r, style: s, type: l, validity: d } = this.props,
                        { value: c } = this.state,
                        p = c && d[c] ? d[c].errorMessage : "";
                    return a.createElement(o.Z, { autoComplete: e, autoFocus: t, editable: i, errorText: p, invalid: !!p, label: n, name: r, onChange: this._handleValueChange, ref: this._setInputRef, style: s, type: l, value: this.state.value });
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
            i.d(t, { Z: () => s });
            var a = i(807896),
                o = i(202784),
                n = i(872660),
                r = i(580134);
            const s = (e) => {
                const { countryCode: t, onRef: i, ...s } = e,
                    l = { country_code: t };
                return o.createElement(n.Z, (0, a.Z)({ module: r.Z, onRef: i, type: "tel", validationParams: l }, s));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-9f4db315.bebce00a.js.map
