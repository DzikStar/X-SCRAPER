"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfile-e019dbda"],
    {
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
            function h(e, t, i) {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: n, hideBackButton: r, isFullWidth: o, isLarge: d, leftControl: c, middleControl: p, position: u, rightControl: _, secondaryBar: m, style: f, subtitle: b, title: E, titleDomId: g, titleIconCell: C, titleIconCellSize: S, withBackground: B, withWideContainer: P } = this.props,
                        { isModal: y } = this.context,
                        v = r ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        w = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!B, y, !!m);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: o, isLarge: d, leftControl: v, middleControl: p, position: h(u, y, n), rightControl: _, style: f, subtitle: b, title: E, titleDomId: g, titleIconCell: C, titleIconCellSize: S, withBackground: w, withWideContainer: P }), m || null);
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
        850496: (e, t, i) => {
            i.d(t, { Z: () => S });
            var a = i(202784),
                n = i(325686),
                r = i(731708),
                o = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(111677),
                h = i.n(c),
                p = i(293615),
                u = i(837020),
                _ = i(219229),
                m = i(373554),
                f = i(304059),
                b = i(751170);
            const E = h().b87ca51a,
                g = h().eebff22c,
                C = a.createElement(p.default, null);
            class S extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: h, rootStyle: p, withDragDrop: u } = this.props,
                        _ = l && !l.uploader,
                        m = a.createElement(a.Fragment, null, this._renderPreview(), _ ? null : a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [P.mask, s, B[e]] }), a.createElement(n.Z, { style: [P.overlaidContent, i] }, a.createElement(n.Z, { style: P.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, h ? this._renderMediaRemove() : null), t ? a.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: P.description }, t) : null)));
                    return a.createElement(n.Z, { style: [P.container, p, B[e]] }, u && d ? a.createElement(o.ZP, { onFilesAdded: d, style: [P.dragDropContainer, B[e]] }, m) : m);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": E, hoverLabel: { label: E }, icon: a.createElement(u.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": g, icon: a.createElement(_.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onAddMediaFiles: o, onEdit: l } = this.props;
                    return o ? a.createElement(m.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onChange: o, size: "large", style: P.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(s.ZP, { "aria-label": i, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: n } = this.props;
                    return n ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: P.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            S.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: b.A.NONE, icon: C };
            const B = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                P = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => m, w: () => u });
            var a = i(202784),
                n = i(325686),
                r = i(108362),
                o = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                h = i(449067),
                p = i(715601);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: o, hideBackButton: s, history: l, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, rightControl: f, secondaryBar: b, subtitle: E, title: g } = this.props,
                                { isModal: C } = this.context;
                            return a.createElement(n.Z, { style: C ? [_.childViewAppBarRoot, _.appBarZindex] : _.appBarZindex }, a.createElement(c.ZP, { backButtonType: i || (C ? "close" : "back"), backLocation: r, centerTitle: o, fixed: !C, hideBackButton: s, history: l, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: m, ref: e, rightControl: f, secondaryBar: b, style: [C && _.appBarModal, t], subtitle: E, title: g, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: o, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: m, withoutBottomBarMobile: f } = this.props,
                        { isModal: b } = this.context,
                        E = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(l.Z, null, a.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: m }), a.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [_.root, b && _.rootModal] }, !b && E, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [_.container, b && _.containerModal, o] }, b ? a.createElement(p.Z, { style: _.viewport }, E, i) : i), t ? a.createElement(n.Z, { style: [_.bottomBarModal, !b && !f && _.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = o.Z);
            const _ = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = u;
        },
        873637: (e, t, i) => {
            i.d(t, { Z: () => f });
            var a = i(807896),
                n = i(202784),
                r = i(325686),
                o = i(167630),
                s = i(548485),
                l = i(392237),
                d = i(111677),
                c = i.n(d),
                h = i(205074),
                p = i(653843);
            const u = c().gff1f69e;
            class _ extends n.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof h.ZP &&
                        (0, p.ZP)(t).then((e) =>
                            new h.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(o.Z, { "aria-label": u, style: m.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: i, media: a, withAspectRatioOptions: o, withZoomControl: l } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: h = {} } = a || {};
                    return d ? n.createElement(r.Z, { style: m.cropper }, n.createElement(s.Z, { circle: this.props.circle, defaultAspectRatio: (i && i.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: i || c, image: { src: d.url, width: h.width, height: h.height }, ref: e, withAspectRatioOptions: o, withZoomControl: l })) : null;
                }
            }
            const m = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                f = n.forwardRef((e, t) => n.createElement(_, (0, a.Z)({}, e, { cropperRef: t })));
        },
        160664: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                n = i(111677),
                r = i.n(n);
            const o = (e, t, i) => new Date(e, t, i),
                s = r().a46f80ab,
                l = r().c7905f89,
                d = r().ba2e82a1,
                c = r().da44942d,
                h = r().d7d71245;
            function p({ birthdate: e, withBornPrefixText: t }) {
                const { day: i, month: a, year: n } = e,
                    r = !!n,
                    p = !!a,
                    u = !!i,
                    _ = !r && p && u,
                    m = r && (!p || !u),
                    f =
                        r && p && u
                            ? (function (e, t, i, a) {
                                  const n = o(e, t - 1, i);
                                  return a ? s({ birthdate: d(n) }) : d(n);
                              })(Number(n), Number(a), Number(i), t)
                            : _
                              ? (function (e, t, i) {
                                    const a = o(0, e - 1, t);
                                    return i ? s({ birthdate: c(a) }) : c(a);
                                })(Number(a), Number(i), t)
                              : m
                                ? (function (e, t) {
                                      const i = o(e, 0, 1);
                                      return t ? l({ year: h(i) }) : h(i);
                                  })(Number(n), t)
                                : null;
                return f;
            }
            const u = a.memo(p);
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => y });
            var a = i(202784),
                n = i(392237),
                r = i(154003),
                o = i(111677),
                s = i.n(o),
                l = i(184605),
                d = i(980407),
                c = i(873637),
                h = i(668214),
                p = i(497294);
            const u = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                _ = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                m = (0, h.Z)()
                    .propsFromState(() => ({ media: u, mediaId: _ }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                b = s().gd80afba,
                E = s().a753a870;
            class g extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(r.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, E);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: a, mediaId: n, onDone: r, processMedia: o, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const d = t.getCropData(),
                                    { originalMediaFile: c } = a || {},
                                    h = !c || (0 === d.top && 0 === d.left && d.width === c.width && d.height === c.height);
                                (0, l.Z)(n) &&
                                    (e
                                        ? (e(d), r())
                                        : (s({ id: n, cropData: h ? void 0 : d }),
                                          o(n).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), r();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: n, withZoomControl: r } = this.props,
                        o = this._getMedia();
                    return a.createElement(d.Z, { backButtonType: "back", containerStyle: C.root, documentTitle: i || b, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || b }, a.createElement(c.Z, { defaultAspectRatio: e, media: o, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: r }));
                }
            }
            const C = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                S = m(g);
            var B = i(757700);
            const P = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                y = (e) => a.createElement(B.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: P.modal }, a.createElement(S, e));
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
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onCrop: p, onRemove: u, rootStyle: _ } = this.props;
                    return a.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: u, rootStyle: _, withDragDrop: !0 });
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
        747576: (e, t, i) => {
            i.d(t, { m: () => a });
            const a = Object.freeze({ SELF: "self", MUTUAL_FOLLOW: "mutualfollow", FOLLOWING: "following", FOLLOWERS: "followers", PUBLIC: "public" });
        },
        72130: (e, t, i) => {
            i.d(t, { Ak: () => s, MA: () => o, Rz: () => a, Zi: () => r, he: () => n });
            const a = () => ({ component: "extended_profile_settings", action: "click" }),
                n = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                o = (e, t, i) => ({ component: "rich_text_editor", element: e, action: t, data: i }),
                s = (e, t, i) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...i } });
        },
        656520: (e, t, i) => {
            function a() {
                return { section: "category_label", action: "impression" };
            }
            function n() {
                return { section: "category_label", action: "click" };
            }
            function r() {
                return { component: "professional_conversion", action: "click" };
            }
            function o() {
                return { component: "professional_settings", action: "click" };
            }
            i.d(t, { Lr: () => r, _L: () => a, ti: () => o, yL: () => n });
        },
        508765: (e, t, i) => {
            i.d(t, { C6: () => g, GJ: () => V, HR: () => A, Il: () => I, NJ: () => R, OG: () => O, T_: () => N, Xw: () => v, Ys: () => Z, _D: () => P, b4: () => F, ck: () => k, g3: () => T, o8: () => x, u$: () => S, vW: () => C });
            var a = i(226395),
                n = i(499627),
                r = i(917799),
                o = i(56519),
                s = i(497294);
            const l = `${i(291020).Y}/profile`,
                d = `rweb/${l}`,
                c = r.dg(d, "REMOVE_PROFILE_BANNER"),
                h = r.dg(d, "UPDATE_PROFILE"),
                p = r.dg(d, "UPDATE_PROFILE_AVATAR"),
                u = r.dg(d, "UPDATE_PROFILE_BANNER"),
                _ = r.dg(d, "UPLOAD_MEDIA"),
                m = Object.freeze({ REQUEST: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                f = Object.freeze({ REQUEST: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                b = Object.freeze({ REQUEST: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_FAILURE" }),
                E = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null };
            const g = (e) => e[l].avatarMediaId,
                C = (e) => e[l].bannerMediaId,
                S = (e) => e[l].profileSettings,
                B = "rweb/settings/profile/ADD_AVATAR_MEDIA",
                P = (e) => ({ meta: { mediaId: e }, type: B }),
                y = "rweb/settings/profile/REMOVE_AVATAR_MEDIA",
                v = (e) => ({ meta: { mediaId: e }, type: y }),
                w = "rweb/settings/profile/ADD_BANNER_MEDIA",
                R = (e) => ({ meta: { mediaId: e }, type: w }),
                M = "rweb/settings/profile/REMOVE_BANNER_MEDIA",
                A = (e) => ({ meta: { mediaId: e }, type: M }),
                I =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).fetchUserProfilePhoneState, params: {} })({ actionTypes: b, context: "ACTION_FETCH_VERIFIED_PHONE_LABEL" }, (e) => {
                            if (e) return e;
                        }),
                L = "rweb/settings/profile/PERSIST_PROFILE_SETTINGS",
                T = (e) => ({ meta: { profileSettings: e }, type: L }),
                D = "rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS",
                Z = () => ({ type: D }),
                x =
                    (e) =>
                    (t, i, { api: n }) =>
                        r._O(t, { params: e, request: n.withEndpoint(a.Z).removeProfileBanner })({ actionTypes: c, context: "ACTION_REMOVE_USER_BANNER" }, (e) => {
                            if (e) return [(0, o.dP)({ users: { [e.id_str]: { ...e, profile_banner_url: null } } })];
                        }),
                k =
                    (e) =>
                    (t, i, { api: n }) =>
                        r._O(t, { params: e, request: n.withEndpoint(a.Z).updateProfile })({ actionTypes: h, context: "ACTION_UPDATE_PROFILE_SETTINGS" }, (e) => {
                            if (e && e.entities) return [(0, o.dP)(e.entities)];
                        }),
                U =
                    (e, t, i) =>
                    (a) =>
                    (n, l, { api: d }) => {
                        n({ type: _.REQUEST });
                        const c = s.$i(a);
                        return n(c).then(
                            ([a]) => {
                                n([{ type: _.SUCCESS }, { type: e.REQUEST }]);
                                return r._O(n, { params: { media_id: a.uploadId }, request: i(d) })({ actionTypes: h, context: t }, (e) => {
                                    if (e) return [(0, o.dP)({ users: { [e.id_str]: e } })];
                                });
                            },
                            (e) => (n({ type: _.FAILURE }), Promise.reject(e)),
                        );
                    },
                F = U(p, "ACTION_UPDATE_USER_AVATAR", (e) => e.withEndpoint(a.Z).updateProfileAvatar),
                N = U(u, "ACTION_UPDATE_USER_BANNER", (e) => e.withEndpoint(a.Z).updateProfileBanner),
                O =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).enableVerifiedPhoneLabel, params: {} })({ actionTypes: m, context: "ACTION_ENABLE_VERIFIED_PHONE_LABEL" }),
                V =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).disableVerifiedPhoneLabel, params: {} })({ actionTypes: f, context: "ACTION_DISABLE_VERIFIED_PHONE_LABEL" });
            n.Z.register({
                [l]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case B:
                            return { ...e, avatarMediaId: t.meta.mediaId };
                        case y:
                            return { ...e, avatarMediaId: null };
                        case w:
                            return { ...e, bannerMediaId: t.meta.mediaId };
                        case M:
                            return { ...e, bannerMediaId: null };
                        case b.SUCCESS:
                            return { ...e, hasVerifiedPhone: t?.payload?.user_phone_state?.has_verified_phone || !1, labelDisplayOptIn: t?.payload?.user_phone_state?.label_display_opt_in || !1 };
                        case L:
                            return { ...e, profileSettings: t.meta.profileSettings };
                        case D:
                            return { ...e, profileSettings: null };
                        case _.REQUEST:
                            return { ...e, isUploading: !0 };
                        case _.FAILURE:
                        case _.SUCCESS:
                            return { ...e, isUploading: !1 };
                        default:
                            return e;
                    }
                },
            });
        },
        561563: (e, t, i) => {
            i.r(t), i.d(t, { DEFAULT_BIRTHDAY: () => Ne, ProfileScreen: () => We, default: () => ze, stylizedCharHelperText: () => Ve });
            i(136728);
            var a = i(202784),
                n = i(325686),
                r = i(823161),
                o = i(682474),
                s = i(392237),
                l = i(992942),
                d = i(733357),
                c = i(154003),
                h = i(855488),
                p = i(190286),
                u = i(720283),
                _ = i(310452),
                m = i(731708),
                f = i(779610),
                b = i(111677),
                E = i.n(b),
                g = i(908478),
                C = i(323265),
                S = i(88656),
                B = i(980407),
                P = i(751170),
                y = i(160664),
                v = i(443781),
                w = i(330815),
                R = i(199127),
                M = i(96206),
                A = i(747576),
                I = i(716233),
                L = i(166677),
                T = i(656520),
                D = i(620482),
                Z = i(660703),
                x = (i(585488), i(712696)),
                k = i.n(x),
                U = i(40610);
            const F = Z.Z,
                N = ({ onCancel: e, onConfirm: t, showBadgeRemovalWarning: i = !1 }) => {
                    const { blue_profile_edit_warning_message_config: n } = k()(F, {}),
                        { label: r, link: o, text: s } = n?.callout || {},
                        { cancel_button_label: l, confirm_button_label: d, headline: c, text: h } = n?.confirmation || {};
                    return i && !c && t(), n ? a.createElement(a.Fragment, null, r && o && s && a.createElement(U.Z.Primary, { action: { label: r, link: o }, text: s }), i && c && a.createElement(p.Z, { cancelButtonLabel: l, confirmButtonLabel: d, headline: c, onCancel: e, onConfirm: t, text: h })) : null;
                };
            var O = i(184605),
                V = i(71620),
                W = i(668214),
                H = i(497294),
                z = i(508765),
                G = i(601576),
                j = i(919022);
            const $ = (e, t) => {
                    const i = z.C6(e);
                    if ((0, O.Z)(i)) return H.m3(e, i)?.[0];
                },
                Q = (e, t) => {
                    const i = z.vW(e);
                    if ((0, O.Z)(i)) return H.m3(e, i)?.[0];
                },
                q = (0, W.Z)()
                    .propsFromState(() => ({ viewerUser: j.ZP.selectViewerUser, avatarMedia: $, bannerMedia: Q, persistedProfileSettings: z.u$ }))
                    .propsFromActions(() => ({ addAvatarMedia: z._D, addBannerMedia: z.NJ, enableVerifiedPhoneLabel: z.OG, disableVerifiedPhoneLabel: z.GJ, fetchUserProfilePhoneState: z.Il, addToast: G.fz, createLocalApiErrorHandler: (0, V.zr)("SETTINGS_PROFILE_SCREEN"), persistProfileSettings: z.g3, removeAvatarMedia: z.Xw, removeBannerMedia: z.HR, removeMediaUpload: H.WU, resetPersistedProfileSettings: z.Ys, removeProfileBanner: z.o8, updateProfile: z.ck, updateProfileAvatar: z.b4, updateProfileBanner: z.T_ }))
                    .withAnalytics({ page: "settings", section: "profile" });
            var Y = i(72130),
                J = i(462166),
                K = i(535338),
                X = i(529048);
            const ee = E().bfe8d1a2,
                te = E().e1ec926e,
                ie = ({ analytics: e, hasProfileBlocks: t }) => {
                    const i = a.useCallback(() => {
                            e.scribe({ ...(0, Y.Rz)() });
                        }, [e]),
                        n = a.useMemo(() => a.createElement(m.ZP, { size: "headline1" }, t ? ee : te), [t]);
                    return a.createElement(f.Z, { label: n, link: "/settings/bio", onPress: i, testID: X.Z.editExtendedProfile });
                },
                ae = (e) => {
                    const { user_result_by_screen_name: t } = (0, K.p)(J.NG, { screenName: e.screenName }),
                        i = t?.result,
                        n = (i?.expanded_profile_results?.result?.profile_sections?.total_count ?? 0) > 0;
                    return i ? a.createElement(ie, { analytics: e.analytics, hasProfileBlocks: n }) : null;
                };
            var ne = i(124964),
                re = i(523561),
                oe = i(195560);
            const se = (0, re.Z)({ loader: () => Promise.all([i.e("icons.10"), i.e("icons.19"), i.e("ondemand.EditBirthdate")]).then(i.bind(i, 416482)), renderPlaceholder: (e, t) => a.createElement(oe.Z, { hasError: e, onRetry: t }) }),
                le = E().c119dee8,
                de = E().cfd2f35e,
                ce = E().bbf0afc8,
                he = { headline: E().f98d367e, text: E().d3f43300, confirmButtonLabel: E().abd845fe };
            class pe extends a.Component {
                constructor(e) {
                    super(e),
                        (this._handleModalCancel = () => {
                            this.setState({ showConfirmationModal: !1 });
                        }),
                        (this._handleModalConfirmed = () => {
                            this.setState({ isEditing: !0, showConfirmationModal: !1 });
                        }),
                        (this._handleEditPress = () => {
                            this.setState({ showConfirmationModal: !0 });
                        }),
                        (this._handleRemoveBirthdate = () => {
                            const { onRemoveBirthdate: e } = this.props;
                            this.setState({ isEditing: !1 }), e();
                        }),
                        (this._handleCancelEditPress = () => {
                            this.props.onCancelEditBirthdate(), this.setState({ isEditing: !1 });
                        }),
                        (this.state = { isEditing: !1, showConfirmationModal: !1 });
                }
                render() {
                    const { isEditing: e, showConfirmationModal: t } = this.state,
                        { birthdate: i, errors: r, onChange: o, showBirthdateRemoveButton: s } = this.props,
                        l = i.month && i.day && i.year;
                    return e ? a.createElement(n.Z, { style: ue.root }, a.createElement(n.Z, { style: ue.container }, a.createElement(m.ZP, { weight: "bold" }, le), a.createElement(ne.Z, null), a.createElement(m.ZP, { color: "link", onPress: this._handleCancelEditPress, role: "button", withInteractiveStyling: !0 }, de)), a.createElement(se, { birthdate: i, errors: r, onChange: o, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: s })) : a.createElement(a.Fragment, null, a.createElement(f.Z, { description: l ? a.createElement(y.Z, { birthdate: i }) : ce, label: le, onPress: this._handleEditPress, role: "button" }), t ? a.createElement(p.Z, { confirmButtonLabel: he.confirmButtonLabel, headline: he.headline, onCancel: this._handleModalCancel, onConfirm: this._handleModalConfirmed, text: he.text, withForwardFocusOnConfirm: !0 }) : null);
                }
            }
            const ue = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, container: { flexDirection: "row" }, containerItem: { marginStart: e.spaces.space4 } }));
            var _e = i(954110),
                me = i(688715);
            const fe = E().e9603d88,
                be = E().ada99498;
            const Ee = function (e) {
                const { onChange: t, verifiedPhoneStatus: i } = e;
                return a.createElement(_e.Z, { checked: i, helpText: be, label: fe, learnMoreLink: (0, me.ju)("https://help.x.com/rules-and-policies/twitter-india"), name: "verified_phone_status_toggle", onChange: t, testID: "Verified_Phone_Status", type: "switch" });
            };
            var ge = i(161821);
            const Ce = Object.freeze({ SUPERSCRIPT_AND_SUBSCRIPT: "superscript_and_subscript", CURRENCY: "currency", LETTER_LIKE: "letter_like", NUMBER_FORMS: "number_forms", ARROWS: "arrows", MATHEMATICAL: "mathematical", GENERAL_PUNCTUATION: "general_punctuation", ENCLOSED_ALPHANUMERICS: "enclosed_alphanumerics", BOX: "box", GEOMETRIC: "geometric", SPACING_MODIFIER: "spacing_modifier", PUNCTUATION: "punctuation", MISC: "miscellaneous" }),
                Se = (0, ge.Z)(Ce),
                Be = { [Ce.SUPERSCRIPT_AND_SUBSCRIPT]: { base: "[⁰-ⁱ]|[⁴-₎]|[ₐ-ₜ]", specialChars: {} }, [Ce.CURRENCY]: { base: "[₠-₿]", specialChars: { $: "[$]" } }, [Ce.LETTER_LIKE]: { base: "[℀-⅏]", specialChars: {} }, [Ce.NUMBER_FORMS]: { base: "[⅐-↋]", specialChars: {} }, [Ce.ARROWS]: { base: "[←-⇿]", specialChars: {} }, [Ce.MATHEMATICAL]: { base: "[∀-⋿]|[⊓-⊕]|[⨀-⫿]|[⟀-⟯]|[⦀-⧿]", specialChars: {} }, [Ce.GENERAL_PUNCTUATION]: { base: "[ -⁯]|[⸀-⹿]", specialChars: {} }, [Ce.ENCLOSED_ALPHANUMERICS]: { base: "[①-⓿]", specialChars: {} }, [Ce.BOX]: { base: "[─-╿]|[▀-▟]", specialChars: {} }, [Ce.GEOMETRIC]: { base: "[■-▩]|[▬-▵]|[▷-▿]|[◁-◺]|[◿]", specialChars: {} }, [Ce.SPACING_MODIFIER]: { base: "[ʰ-˿]", specialChars: {} }, [Ce.PUNCTUATION]: { base: "[ -⁯]", specialChars: {} }, [Ce.MISC]: { base: "[⌀-⌙]|[⌜-⌧]|[〈-⏎]|[⏐-⏨]|[⏴-⏷]|[⏻-⏿]|[★-☐]|[☒-☓]|[☖-☗]|[☙-☜]|[☞-☟]|[☡]|[☤-☥]|[☧-☩]|[☫-☭]|[☰-☷]|[☻-☿]|[♁]|[♃-♇]|[♔-♞]|[♡-♢]|[♤]|[♧]|[♩-♺]|[♼-♽]|[⚀-⚑]|[⚘]|[⚚]|[⚝-⚟]|[⚢-⚦]|[⚨-⚩]|[⚬-⚯]|[⚲-⚼]|[⚿-⛃]|[⛆-⛇]|[⛉-⛍]|[⛐]|[⛒]|[⛕-⛨]|[⛫-⛯]|[⛶]|[⛻-⛼]|[⛾-⛿]", specialChars: {} } },
                Pe = ({ text: e, keys: t = Se, includeSpecialChars: i = !0 }) => {
                    const a = t
                        .map((e) =>
                            ((e, t = !0) => {
                                const i = Be[e];
                                let a = `${i.base}`;
                                if (t) {
                                    const { specialChars: e } = i;
                                    for (const t in e) a += `|${e[t]}`;
                                }
                                return a;
                            })(e, i),
                        )
                        .reduce((e, t) => `${e}|${t}`);
                    return new RegExp(a, "g").test(e);
                },
                ye = E().g7088266,
                ve = E().d4e220b4,
                we = E().d9d293b8,
                Re = E().a990900c,
                Me = E().jaaa8984,
                Ae = E().i2209530,
                Ie = E().cb469ff6,
                Le = E().e784846c,
                Te = E().g511f468,
                De = E().ec3a116e,
                Ze = E().j94599ec,
                xe = E().df31d76a,
                ke = { confirmButtonLabel: E().g9677c6e, headline: E().c01a0e1a },
                Ue = { switchToProfessionalLabel: E().df2c469a, editProfessionalProfileLabel: E().e1f76978 },
                Fe = { headline: E().e554f642, text: E().ic04a6f6, confirmLabel: E().d4ab68e2 },
                Ne = { visibility: A.m.MUTUAL_FOLLOW, year_visibility: A.m.SELF },
                Oe = { birthdate: Ne, description: void 0, location: void 0, name: void 0, shouldDeleteBanner: !1, url: void 0, user_phone_state: { has_verified_phone: !1, label_display_opt_in: !1 } },
                Ve = E().addbe8e8;
            class We extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handlePhoneStatusChange = (e, t) => {
                            this.setState((e) => (e.profileSettings.user_phone_state ? { ...e, profileSettings: { ...e.profileSettings, user_phone_state: { ...e.profileSettings.user_phone_state, label_display_opt_in: t } } } : e));
                        }),
                        (this._firstUnicodeCharDetected = !1),
                        (this._unicodeDetectionScribed = !1),
                        (this._handleDismiss = () => {
                            const { history: e, resetPersistedProfileSettings: t, viewerUser: i } = this.props;
                            t(), i || e.goBack({ backLocation: "/login" }), e.goBackThroughModals();
                        }),
                        (this._handleCancel = () => {
                            this._shouldShowDiscardConfirmation() ? this.setState({ showDiscardConfirmation: !0 }) : this._handleDismiss();
                        }),
                        (this._handleSubmit = () => {
                            const e = this._getBirthdateErrors();
                            Object.keys(e).length ? this.setState({ errors: e }) : this._shouldShowBirthdateConfirmationModal() ? this.setState({ showBirthdateConfirmationModal: !0 }) : this._shouldShowBadgeRemovalWarning() ? this.setState({ showBadgeRemovalWarning: !0 }) : (this._saveChanges(), this._displayNameUnicodeScribingOnSave());
                        }),
                        (this._handleBlueVerifiedSaveConfirmation = () => {
                            this.setState({ showBadgeRemovalWarning: !1 }), this._saveChanges(), this._displayNameUnicodeScribingOnSave();
                        }),
                        (this._handleConfirmDiscardSettings = () => {
                            this.setState({ showDiscardConfirmation: !1 }), this._handleDismiss();
                        }),
                        (this._handleCancelDiscardSettings = () => {
                            this.setState({ showDiscardConfirmation: !1 });
                        }),
                        (this._handleCancelBadgeRemovalWarning = () => {
                            this.setState({ showBadgeRemovalWarning: !1 });
                        }),
                        (this._handleProfessionalConversionClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...T.Lr() });
                        }),
                        (this._handleProfessionalSettingsClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...T.ti() });
                        }),
                        (this._displayNameUnicodeScribingOnSave = () => {
                            const { analytics: e } = this.props;
                            if (this._firstUnicodeCharDetected) {
                                const t = this.state.isStylizedUnicodeDisplayName ? "contains_unicode_symbols" : "no_unicode_symbols";
                                e.scribe({ component: "unicode_detector", element: t, action: "save" });
                            }
                        }),
                        (this._getBirthdateErrors = () => {
                            const { birthdate: e } = this.state.profileSettings,
                                t = {};
                            return (
                                e !== Ne &&
                                    ["day", "month", "year"].forEach((i) => {
                                        e[i] || (t[i] = !0);
                                    }),
                                t
                            );
                        }),
                        (this._shouldShowBirthdateConfirmationModal = () => {
                            const { viewerUser: e } = this.props,
                                { birthdate: t } = this.state.profileSettings,
                                i = ["day", "month", "year"].every((e) => !!t[e]),
                                a = (e && e.birthdate) || Ne,
                                n = !(0, g.Z)(a, t);
                            return i && n;
                        }),
                        (this._shouldShowDiscardConfirmation = () => {
                            const { profileSettings: e } = this.state;
                            return !(0, g.Z)(e, this._initialProfileSettings);
                        }),
                        (this._shouldShowBadgeRemovalWarning = () => {
                            const { avatarMedia: e, viewerUser: t } = this.props,
                                i = t?.is_blue_verified,
                                a = this._initialProfileSettings.name !== this.state.profileSettings.name;
                            return !!i && (!!e || a);
                        }),
                        (this._handleBirthdateModalCancel = () => {
                            this.setState({ showBirthdateConfirmationModal: !1 });
                        }),
                        (this._handleBirthdateModalConfirm = () => {
                            this.setState({ showBirthdateConfirmationModal: !1 }), this._scribeBirthdateAddOrEdit(), this._saveChanges();
                        }),
                        (this._handleBirthdateChange = (e) => {
                            const { errors: t, profileSettings: i } = this.state,
                                a = { ...t };
                            Object.keys(t).forEach((i) => {
                                e[i] && t[i] && delete a[i];
                            }),
                                this.setState({ profileSettings: { ...i, birthdate: { ...i.birthdate, ...e } }, errors: a });
                        }),
                        (this._handleResetBirthdate = () => {
                            const { profileSettings: e } = this.state,
                                t = this.props.viewerUser && this.props.viewerUser.birthdate;
                            this.setState({ profileSettings: { ...e, birthdate: t || Ne }, errors: {} });
                        }),
                        (this._handleRemoveBirthdate = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, updateProfile: i } = this.props,
                                { profileSettings: a } = this.state;
                            e.scribe({ component: "birthdate", action: "remove" }),
                                i({ birthdate_day: 0, birthdate_month: 0, birthdate_year: 0 })
                                    .then(() => {
                                        this.setState({ profileSettings: { ...a, birthdate: Ne }, errors: {} });
                                    })
                                    .catch(t({ showToast: !0 }));
                        }),
                        (this._handleAvatarMediaChange = ([e]) => {
                            const { addAvatarMedia: t, avatarMedia: i } = this.props;
                            i && this._clearAvatarMedia(i.id), t(e), this.setState({ showAvatarCropper: !0 });
                        }),
                        (this._handleAvatarCropDone = () => this.setState({ showAvatarCropper: !1 })),
                        (this._handleAvatarCropCancel = () => this._handleAvatarCropDone()),
                        (this._handleBannerMediaChange = ([e]) => {
                            const { addBannerMedia: t, bannerMedia: i } = this.props;
                            i && this._clearBannerMedia(i.id), t(e), this.setState({ showBannerCropper: !0 });
                        }),
                        (this._handleBannerCropDone = () => this.setState({ showBannerCropper: !1 })),
                        (this._handleBannerCropCancel = () => this._handleBannerCropDone()),
                        (this._handleBannerMediaRemove = () => {
                            const { bannerMedia: e } = this.props,
                                { profileSettings: t } = this.state;
                            e ? this._clearBannerMedia(e.id) : this.setState({ profileSettings: { ...t, shouldDeleteBanner: !0 } });
                        }),
                        (this._handleAvatarMediaFailure = (e) => {
                            this._clearAvatarMedia(e);
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._handleMediaUpdateFailureFactory = (e, t) => (i) => {
                            const { addToast: a, createLocalApiErrorHandler: n, removeMediaUpload: r } = this.props,
                                o = (0, L.$r)(i);
                            if (o) {
                                const e = (0, L.ZP)(o, t);
                                e && a(e);
                            } else i instanceof S.Z && i.errors && "Denied by user validation." === i.errors[0]?.message && "ACTION_UPDATE_USER_AVATAR" === i.context?.action && this._isBlueVerifiedEditProfileErrorMessageEnabled ? a({ text: Le }) : n({ showToast: !0 })(i);
                            r(e.id);
                        }),
                        (this._renderInputHelperText = () => (this.state.isStylizedUnicodeDisplayName ? Ve : null)),
                        (this._handleChangeDisplayName = (e) => {
                            const { profileSettings: t } = this.state,
                                {
                                    currentTarget: { value: i },
                                } = e,
                                a = Pe({ text: i });
                            if (((this._firstUnicodeCharDetected = this._firstUnicodeCharDetected || a), this.setState({ profileSettings: { ...t, name: i }, isStylizedUnicodeDisplayName: a }), this._firstUnicodeCharDetected && !this._unicodeDetectionScribed)) {
                                this._unicodeDetectionScribed = !0;
                                const { analytics: e } = this.props;
                                e.scribe({ component: "unicode_detector", action: "unicode_detected" });
                            }
                        }),
                        (this._handleChangeDescription = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, description: e.currentTarget.value } });
                        }),
                        (this._handleChangeLocation = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, location: e.currentTarget.value } });
                        }),
                        (this._handleChangeURL = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, url: e.currentTarget.value } });
                        }),
                        (this._scribeEditedFields = () => {
                            const { analytics: e } = this.props,
                                { description: t, location: i, name: a, url: n } = this.state.profileSettings,
                                { description: r, location: o, name: s, url: l } = this._initialProfileSettings,
                                d = "edit";
                            t !== r && e.scribe({ component: "bio", action: d }), i !== o && e.scribe({ component: "location", action: d }), a !== s && e.scribe({ component: "name", action: d }), n !== l && e.scribe({ component: "url", action: d });
                        });
                    const { persistedProfileSettings: i, viewerUser: a } = e;
                    (this._initialProfileSettings = (a && this._getInitialProfileSettings(a)) || Oe), (this._isProfessionalHomeEnabled = this.context.featureSwitches.isTrue("professional_launchpad_m1_enabled")), (this._isExtendedProfileEnabled = this.context.featureSwitches.isTrue("xprofile_editing_enabled") && !C.ZP.isTwitterApp()), (this._isVerifiedPhoneLabelEnabled = this.context.featureSwitches.isTrue("verified_phone_label_enabled")), (this._isBlueVerifiedEditProfileErrorMessageEnabled = this.context.featureSwitches.isTrue("subscriptions_blue_verified_edit_profile_error_message_enabled"));
                    const n = i || this._initialProfileSettings;
                    this.state = { displayNameMaxLength: this.context.featureSwitches.getNumberValue("user_display_name_max_limit", 20), profileSettings: n, showBirthdateConfirmationModal: !1, errors: {}, showAvatarCropper: !1, showBannerCropper: !1, showDiscardConfirmation: !1, showBadgeRemovalWarning: !1, isStylizedUnicodeDisplayName: !1 };
                }
                componentDidMount() {
                    const { fetchUserProfilePhoneState: e, history: t, viewerUser: i } = this.props;
                    if (i) {
                        if (((this._unlockReload = M.Z.acquire()), this._isVerifiedPhoneLabelEnabled)) {
                            const { profileSettings: t } = this.state;
                            e().then((e) => {
                                const i = e?.user_phone_state;
                                (this._initialProfileSettings.user_phone_state = i), this.setState({ profileSettings: { ...t, user_phone_state: i } });
                            });
                        }
                    } else t.push("/login");
                }
                componentDidUpdate(e, t) {
                    const { persistProfileSettings: i } = this.props,
                        { profileSettings: a } = this.state,
                        { profileSettings: n } = t;
                    (0, g.Z)(n, a) || i(a);
                }
                componentWillUnmount() {
                    const { avatarMedia: e, bannerMedia: t } = this.props;
                    e && this._clearAvatarMedia(e.id), t && this._clearBannerMedia(t.id), this._unlockReload();
                }
                render() {
                    const { viewerUser: e } = this.props;
                    return e ? this._render(e) : null;
                }
                _render(e) {
                    const { avatarMedia: t, bannerMedia: i, history: u } = this.props,
                        {
                            displayNameMaxLength: _,
                            errors: m,
                            profileSettings: { description: f, location: b, name: E, shouldDeleteBanner: g, url: C },
                            showAvatarCropper: S,
                            showBadgeRemovalWarning: y,
                            showBannerCropper: v,
                            showDiscardConfirmation: M,
                        } = this.state,
                        A = a.createElement(r.default, { size: "custom", uri: e.profile_image_url_https }),
                        L = i || (e.profile_banner_url && !g),
                        T = a.createElement(o.Z, { ratio: s.default.theme.aspectRatios.profileBanner }, L ? a.createElement(l.Z, { source: { uri: e.profile_banner_url }, style: He.banner }) : null),
                        D = void 0 !== E && (0, d.Z)(E),
                        Z = !!((t && !t.uploader) || (i && !i.uploader)) || !!Object.keys(m).length || D,
                        x = a.createElement(c.ZP, { disabled: Z, onPress: this._handleSubmit, size: "small", testID: X.Z.save, type: "primaryFilled" }, Ae);
                    return a.createElement(
                        B.Z,
                        { history: u, onBackClick: this._handleCancel, rightControl: x, title: ye },
                        a.createElement(n.Z, { style: He.container }, a.createElement(R.default, { "aria-label": xe, aspectRatio: 3, currentContent: T, location: I.vC.ProfileBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: L ? this._handleBannerMediaRemove : void 0, rootStyle: He.bannerContainer }), a.createElement(R.default, { "aria-label": Ze, borderRadius: P.A.INFINITE, currentContent: A, location: I.vC.Avatar, mediaItem: t, onChange: this._handleAvatarMediaChange, onFailure: this._handleAvatarMediaFailure, rootStyle: He.avatarContainer }), a.createElement(h.Z, { autoComplete: "off", defaultValue: E, errorText: Ie, helperText: this._renderInputHelperText(), invalid: D, label: ve, maxLength: _, name: "displayName", onChange: this._handleChangeDisplayName }), a.createElement(N, { onCancel: this._handleCancelBadgeRemovalWarning, onConfirm: this._handleBlueVerifiedSaveConfirmation, showBadgeRemovalWarning: y }), a.createElement(h.Z, { defaultValue: f, label: Re, maxLength: 160, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleChangeDescription }), a.createElement(h.Z, { defaultValue: b, label: Me, maxLength: 30, name: "location", onChange: this._handleChangeLocation }), a.createElement(h.Z, { defaultValue: C || "", label: we, maxLength: 100, name: "url", onChange: this._handleChangeURL }), this._renderProfileBirthdate(), this._renderBirthdateConfirmationModal(), this._isExtendedProfileEnabled ? this._renderEditExtendedProfilesButton() : null, this._renderProfessionalProfilesButton(), this._isVerifiedPhoneLabelEnabled && this.state.profileSettings.user_phone_state?.has_verified_phone ? this._renderEditPhoneStatus() : null),
                        S ? a.createElement(w.Z, { circle: !0, defaultAspectRatio: 1, media: t, onCancel: this._handleAvatarCropCancel, onDone: this._handleAvatarCropDone }) : null,
                        v ? a.createElement(w.Z, { defaultAspectRatio: 3, media: i, onCancel: this._handleBannerCropCancel, onDone: this._handleBannerCropDone }) : null,
                        M ? a.createElement(p.Z, { confirmButtonLabel: Fe.confirmLabel, confirmButtonType: "destructiveFilled", headline: Fe.headline, onCancel: this._handleCancelDiscardSettings, onConfirm: this._handleConfirmDiscardSettings, text: Fe.text }) : null,
                        this.props.__dangerousTestProp && this.state.profileSettings.user_phone_state ? a.createElement("div", { "data-testid": "didFetchPhoneState", style: { display: "none" } }) : null,
                    );
                }
                _getInitialProfileSettings(e) {
                    const { description: t, entities: i } = u.H({ description: e.description, entities: e.entities, withheldDescription: e.withheld_description, withheldEntities: e.withheld_entities });
                    let a = t;
                    if (null !== a) {
                        _.ZP.descriptionTextParts(a, i).forEach((e) => {
                            "url" === e.entityType && (a = a.replace(e.url, e.expandedUrl));
                        });
                    }
                    const n = e.entities.url,
                        r = n?.urls?.[0].expanded_url;
                    return { birthdate: e.birthdate || Ne, description: a, location: e.location, name: e.name, shouldDeleteBanner: !1, url: r };
                }
                _renderProfileBirthdate() {
                    const {
                            errors: e,
                            profileSettings: { birthdate: t },
                        } = this.state,
                        { viewerUser: i } = this.props;
                    return a.createElement(pe, { birthdate: t, errors: e, onCancelEditBirthdate: this._handleResetBirthdate, onChange: this._handleBirthdateChange, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: !(!i || !i.birthdate) });
                }
                _renderBirthdateConfirmationModal() {
                    return this.state.showBirthdateConfirmationModal ? a.createElement(p.Z, { confirmButtonLabel: ke.confirmButtonLabel, headline: ke.headline, onCancel: this._handleBirthdateModalCancel, onConfirm: this._handleBirthdateModalConfirm, text: this._getBirthdateConfirmationModalText() }) : null;
                }
                _getBirthdateConfirmationModalText() {
                    const { day: e, month: t, year: i } = this.state.profileSettings.birthdate;
                    return a.createElement(E().I18NFormatMessage, { $i18n: "e9dec56f" }, a.createElement(y.Z, { birthdate: { day: e, month: t, year: i } }));
                }
                _renderEditPhoneStatus() {
                    return a.createElement(Ee, { onChange: this._handlePhoneStatusChange, verifiedPhoneStatus: Boolean(this.state.profileSettings.user_phone_state?.label_display_opt_in) });
                }
                _renderProfessionalProfilesButton() {
                    const { viewerUser: e } = this.props;
                    return e?.professional ? this._renderEditProfessionalProfileButton() : this._renderSwitchToProfessionalButton();
                }
                _renderSwitchToProfessionalButton() {
                    const e = a.createElement(m.ZP, { size: "headline1" }, Ue.switchToProfessionalLabel),
                        t = "editprofile" + (this._isProfessionalHomeEnabled ? "-professionalHomeEnabled" : "");
                    return a.createElement(f.Z, { label: e, link: { pathname: "/i/flow/convert_to_professional", state: { input: { requested_variant: t } }, method: "push" }, onPress: this._handleProfessionalConversionClick, testID: X.Z.switchToProfessional });
                }
                _renderEditProfessionalProfileButton() {
                    const e = a.createElement(m.ZP, { size: "headline1" }, Ue.editProfessionalProfileLabel);
                    return a.createElement(f.Z, { label: e, link: "/settings/professional_profile", onPress: this._handleProfessionalSettingsClick, testID: X.Z.editProfessionalProfile });
                }
                _renderEditExtendedProfilesButton() {
                    const { analytics: e, viewerUser: t } = this.props;
                    return t?.screen_name ? a.createElement(ae, { analytics: e, screenName: t?.screen_name }) : null;
                }
                _saveChanges() {
                    const { analytics: e, avatarMedia: t, bannerMedia: i, createLocalApiErrorHandler: a, disableVerifiedPhoneLabel: n, enableVerifiedPhoneLabel: r, removeMediaUpload: o, removeProfileBanner: s, updateProfile: l, updateProfileAvatar: d, updateProfileBanner: c } = this.props;
                    if (t) {
                        const i = t.id;
                        d(i).then(
                            () => {
                                e.scribe({ component: "avatar", action: "edit" }), o(i);
                            },
                            this._handleMediaUpdateFailureFactory(t, Te),
                        );
                    }
                    i
                        ? c(i.id).then(
                              () => {
                                  e.scribe({ component: "banner", action: "edit" }), o(i.id);
                              },
                              this._handleMediaUpdateFailureFactory(i, De),
                          )
                        : this.state.profileSettings.shouldDeleteBanner &&
                          s()
                              .then(() => e.scribe({ component: "banner", action: "remove" }))
                              .catch(a({ showToast: !0 }));
                    const h = this._initialProfileSettings.user_phone_state,
                        p = this.state.profileSettings.user_phone_state?.label_display_opt_in;
                    h?.label_display_opt_in !== p &&
                        (p
                            ? r()
                                  .then(() => {
                                      e.scribe({ component: "profile_verified_phone_label", action: "add" });
                                  })
                                  .catch(a({ showToast: !0 }))
                            : n()
                                  .then(() => {
                                      e.scribe({ component: "profile_verified_phone_label", action: "remove" });
                                  })
                                  .catch(a({ showToast: !0 })));
                    l(this._getFormattedState())
                        .then(() => {
                            this._scribeEditedFields(), D.Z.refreshHTMLCache(), this._handleDismiss();
                        })
                        .catch(a({ showToast: !0 }));
                }
                _getFormattedState() {
                    const {
                            displayNameMaxLength: e,
                            profileSettings: { birthdate: t, description: i, location: a, name: n, url: r, user_phone_state: o },
                        } = this.state,
                        { day: s, month: l, visibility: d, year: c, year_visibility: h } = t;
                    return { ...(s && l && c ? { birthdate_day: s, birthdate_month: l, birthdate_year: c, birthdate_visibility: d, birthdate_year_visibility: h } : {}), displayNameMaxLength: e, url: r, name: n, description: i, location: a, user_phone_state: o };
                }
                _scribeBirthdateAddOrEdit() {
                    const { analytics: e, viewerUser: t } = this.props,
                        i = t && t.birthdate,
                        a = i && i.month && i.day && i.year ? "edit" : "add";
                    e.scribe({ component: "birthdate", action: a });
                }
                _clearAvatarMedia(e) {
                    const { avatarMedia: t, removeAvatarMedia: i, removeMediaUpload: a } = this.props;
                    (t && t.uploading) || a(e), i(e);
                }
                _clearBannerMedia(e) {
                    const { bannerMedia: t, removeBannerMedia: i, removeMediaUpload: a } = this.props;
                    (t && t.uploading) || a(e), i(e);
                }
            }
            We.contextType = v.rC;
            const He = s.default.create((e) => ({ avatarContainer: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.medium, borderColor: e.colors.cellBackground, borderStyle: "solid", marginStart: "1rem", marginTop: "-3rem", maxWidth: "8rem", width: "25%" }, banner: { height: "100%" }, bannerContainer: { maxHeight: "200px" }, container: { paddingBottom: e.spaces.space64 }, blueVerifiedCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                ze = q(We);
        },
        529048: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = { birthdate: "ProfileBirthdate", cancel: "ProfileBirthdate_Cancel_Button", dayMonthVisibility: "ProfileBirthdate_Day_Month_Visibility", daySelector: "ProfileBirthdate_Day_Selector", edit: "ProfileBirthdate_Edit_Button", editProfessionalProfile: "ProfessionalButton_Edit_Professional_Profile", editExtendedProfile: "ExtendedButton_Edit_Extended_Profile", missingBirthdate: "ProfileBirthdate_Missing_Birthdate", monthSelector: "ProfileBirthdate_Month_Selector", remove: "ProfileBirthdate_Remove_Button", save: "Profile_Save_Button", bio: "Profile_Bio", switchToProfessional: "ProfessionalButton_Switch_To_Professional", yearSelector: "ProfileBirthdate_Year_Selector", yearVisibility: "ProfileBirthdate_Year_Visibility" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfile-e019dbda.86df1d3a.js.map
