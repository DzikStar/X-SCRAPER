"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsProfile~bundle.Ocf", "loader.MediaPickerWithPreview"],
    {
        625661: (e, t, i) => {
            i.d(t, { ZP: () => p });
            var o = i(202784),
                n = i(614983),
                a = i.n(n),
                r = i(325686),
                s = i(370006),
                l = i(786998),
                d = i(929028),
                c = i(386802);
            function h(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: n, hideBackButton: a, isFullWidth: r, isLarge: d, leftControl: c, middleControl: p, position: u, rightControl: m, secondaryBar: _, style: g, subtitle: E, title: f, titleDomId: y, titleIconCell: b, titleIconCellSize: S, withBackground: C, withWideContainer: v } = this.props,
                        { isModal: w } = this.context,
                        P = a ? c : o.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        R = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!C, w, !!_);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: r, isLarge: d, leftControl: P, middleControl: p, position: h(u, w, n), rightControl: m, style: g, subtitle: E, title: f, titleDomId: y, titleIconCell: b, titleIconCellSize: S, withBackground: R, withWideContainer: v }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? o.createElement(r.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => S });
            var o = i(202784),
                n = i(325686),
                a = i(731708),
                r = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(674132),
                h = i.n(c),
                p = i(293615),
                u = i(837020),
                m = i(219229),
                _ = i(373554),
                g = i(304059),
                E = i(751170);
            const f = h().b87ca51a,
                y = h().eebff22c,
                b = o.createElement(p.default, null);
            class S extends o.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: h, rootStyle: p, withDragDrop: u } = this.props,
                        m = l && !l.uploader,
                        _ = o.createElement(o.Fragment, null, this._renderPreview(), m ? null : o.createElement(o.Fragment, null, o.createElement(n.Z, { style: [v.mask, s, C[e]] }), o.createElement(n.Z, { style: [v.overlaidContent, i] }, o.createElement(n.Z, { style: v.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, h ? this._renderMediaRemove() : null), t ? o.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1", style: v.description }, t) : null)));
                    return o.createElement(n.Z, { style: [v.container, p, C[e]] }, u && d ? o.createElement(r.ZP, { onFilesAdded: d, style: [v.dragDropContainer, C[e]] }, _) : _);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return o.createElement(s.ZP, { "aria-label": f, hoverLabel: { label: f }, icon: o.createElement(u.default, null), onPress: e, size: "large", style: v.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return o.createElement(s.ZP, { "aria-label": y, icon: o.createElement(m.default, null), onPress: e, size: "large", style: v.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: a, onAddMediaFiles: r, onEdit: l } = this.props;
                    return r ? o.createElement(_.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: a, onChange: r, size: "large", style: v.mediaPicker, type: "onMediaDominantColorFilled" }) : o.createElement(s.ZP, { "aria-label": i, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: n } = this.props;
                    return n ? o.createElement(l.Z, { ratio: e }, o.createElement(g.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: v.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            S.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: E.A.NONE, icon: b };
            const C = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                v = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => _, w: () => u });
            var o = i(202784),
                n = i(325686),
                a = i(108362),
                r = i(386802),
                s = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                h = i(449067),
                p = i(715601);
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: a, centerTitle: r, hideBackButton: s, history: l, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: _, rightControl: g, secondaryBar: E, subtitle: f, title: y } = this.props,
                                { isModal: b } = this.context;
                            return o.createElement(n.Z, { style: b ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(c.ZP, { backButtonType: i || (b ? "close" : "back"), backLocation: a, centerTitle: r, fixed: !b, hideBackButton: s, history: l, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: _, ref: e, rightControl: g, secondaryBar: E, style: [b && m.appBarModal, t], subtitle: f, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: r, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: _, withoutBottomBarMobile: g } = this.props,
                        { isModal: E } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: _ }), o.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, E && m.rootModal] }, !E && f, o.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, E && m.containerModal, r] }, E ? o.createElement(p.Z, { style: m.viewport }, f, i) : i), t ? o.createElement(n.Z, { style: [m.bottomBarModal, !E && !g && m.bottomBarMobile] }, o.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = r.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                _ = u;
        },
        873637: (e, t, i) => {
            i.d(t, { Z: () => g });
            var o = i(807896),
                n = i(202784),
                a = i(325686),
                r = i(167630),
                s = i(548485),
                l = i(392237),
                d = i(674132),
                c = i.n(d),
                h = i(205074),
                p = i(653843);
            const u = c().gff1f69e;
            class m extends n.Component {
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
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(r.Z, { "aria-label": u, style: _.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: i, media: o, withAspectRatioOptions: r, withZoomControl: l } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: h = {} } = o || {};
                    return d ? n.createElement(a.Z, { style: _.cropper }, n.createElement(s.Z, { circle: this.props.circle, defaultAspectRatio: (i && i.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: i || c, image: { src: d.url, width: h.width, height: h.height }, ref: e, withAspectRatioOptions: r, withZoomControl: l })) : null;
                }
            }
            const _ = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                g = n.forwardRef((e, t) => n.createElement(m, (0, o.Z)({}, e, { cropperRef: t })));
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => w });
            var o = i(202784),
                n = i(392237),
                a = i(154003),
                r = i(674132),
                s = i.n(r),
                l = i(184605),
                d = i(980407),
                c = i(873637),
                h = i(668214),
                p = i(497294);
            const u = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                _ = (0, h.Z)()
                    .propsFromState(() => ({ media: u, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                g = "applyButton",
                E = s().gd80afba,
                f = s().a753a870;
            class y extends o.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return o.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: g, type: "primaryFilled" }, f);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: o, mediaId: n, onDone: a, processMedia: r, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const d = t.getCropData(),
                                    { originalMediaFile: c } = o || {},
                                    h = !c || (0 === d.top && 0 === d.left && d.width === c.width && d.height === c.height);
                                (0, l.Z)(n) &&
                                    (e
                                        ? (e(d), a())
                                        : (s({ id: n, cropData: h ? void 0 : d }),
                                          r(n).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = o.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: n, withZoomControl: a } = this.props,
                        r = this._getMedia();
                    return o.createElement(d.Z, { backButtonType: "back", containerStyle: b.root, documentTitle: i || E, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || E }, o.createElement(c.Z, { defaultAspectRatio: e, media: r, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: a }));
                }
            }
            const b = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                S = _(y);
            var C = i(757700);
            const v = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                w = (e) => o.createElement(C.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: v.modal }, o.createElement(S, e));
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var o = i(202784),
                n = i(850496),
                a = i(373554),
                r = i(668214),
                s = i(497294);
            const l = (0, r.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: o, onFailure: n, processMultipleMedia: a } = this.props,
                                r = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => r.includes(e.type));
                            s &&
                                t([s], { location: i }).then((e) => {
                                    o && o(e.map((e) => e.id)), a(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: a, borderRadius: r, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onCrop: p, onRemove: u, rootStyle: m } = this.props;
                    return o.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: a, borderRadius: r, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: u, rootStyle: m, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var o = i(202784),
                n = i(500002),
                a = i(668214),
                r = i(997174),
                s = i(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class d extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: a, search: r },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = n || s;
                    ((d && n !== s) || (!d && i !== a) || o !== r || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(l(d));
        },
        508765: (e, t, i) => {
            i.d(t, { C6: () => y, GJ: () => V, HR: () => A, Il: () => D, NJ: () => I, OG: () => N, T_: () => U, Xw: () => P, Ys: () => k, _D: () => v, b4: () => O, ck: () => x, g3: () => L, o8: () => T, u$: () => S, vW: () => b });
            var o = i(226395),
                n = i(499627),
                a = i(917799),
                r = i(56519),
                s = i(497294);
            const l = `${i(291020).Y}/profile`,
                d = `rweb/${l}`,
                c = a.dg(d, "REMOVE_PROFILE_BANNER"),
                h = a.dg(d, "UPDATE_PROFILE"),
                p = a.dg(d, "UPDATE_PROFILE_AVATAR"),
                u = a.dg(d, "UPDATE_PROFILE_BANNER"),
                m = a.dg(d, "UPLOAD_MEDIA"),
                _ = Object.freeze({ REQUEST: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_FAILURE" }),
                f = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null };
            const y = (e) => e[l].avatarMediaId,
                b = (e) => e[l].bannerMediaId,
                S = (e) => e[l].profileSettings,
                C = "rweb/settings/profile/ADD_AVATAR_MEDIA",
                v = (e) => ({ meta: { mediaId: e }, type: C }),
                w = "rweb/settings/profile/REMOVE_AVATAR_MEDIA",
                P = (e) => ({ meta: { mediaId: e }, type: w }),
                R = "rweb/settings/profile/ADD_BANNER_MEDIA",
                I = (e) => ({ meta: { mediaId: e }, type: R }),
                M = "rweb/settings/profile/REMOVE_BANNER_MEDIA",
                A = (e) => ({ meta: { mediaId: e }, type: M }),
                D =
                    () =>
                    (e, t, { api: i }) =>
                        a._O(e, { request: i.withEndpoint(o.Z).fetchUserProfilePhoneState, params: {} })({ actionTypes: E, context: "ACTION_FETCH_VERIFIED_PHONE_LABEL" }, (e) => {
                            if (e) return e;
                        }),
                B = "rweb/settings/profile/PERSIST_PROFILE_SETTINGS",
                L = (e) => ({ meta: { profileSettings: e }, type: B }),
                Z = "rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS",
                k = () => ({ type: Z }),
                T =
                    (e) =>
                    (t, i, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(o.Z).removeProfileBanner })({ actionTypes: c, context: "ACTION_REMOVE_USER_BANNER" }, (e) => {
                            if (e) return [(0, r.dP)({ users: { [e.id_str]: { ...e, profile_banner_url: null } } })];
                        }),
                x =
                    (e) =>
                    (t, i, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(o.Z).updateProfile })({ actionTypes: h, context: "ACTION_UPDATE_PROFILE_SETTINGS" }, (e) => {
                            if (e && e.entities) return [(0, r.dP)(e.entities)];
                        }),
                F =
                    (e, t, i) =>
                    (o) =>
                    (n, l, { api: d }) => {
                        n({ type: m.REQUEST });
                        const c = s.$i(o);
                        return n(c).then(
                            ([o]) => {
                                n([{ type: m.SUCCESS }, { type: e.REQUEST }]);
                                return a._O(n, { params: { media_id: o.uploadId }, request: i(d) })({ actionTypes: h, context: t }, (e) => {
                                    if (e) return [(0, r.dP)({ users: { [e.id_str]: e } })];
                                });
                            },
                            (e) => (n({ type: m.FAILURE }), Promise.reject(e)),
                        );
                    },
                O = F(p, "ACTION_UPDATE_USER_AVATAR", (e) => e.withEndpoint(o.Z).updateProfileAvatar),
                U = F(u, "ACTION_UPDATE_USER_BANNER", (e) => e.withEndpoint(o.Z).updateProfileBanner),
                N =
                    () =>
                    (e, t, { api: i }) =>
                        a._O(e, { request: i.withEndpoint(o.Z).enableVerifiedPhoneLabel, params: {} })({ actionTypes: _, context: "ACTION_ENABLE_VERIFIED_PHONE_LABEL" }),
                V =
                    () =>
                    (e, t, { api: i }) =>
                        a._O(e, { request: i.withEndpoint(o.Z).disableVerifiedPhoneLabel, params: {} })({ actionTypes: g, context: "ACTION_DISABLE_VERIFIED_PHONE_LABEL" });
            n.Z.register({
                [l]: function (e = f, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case C:
                            return { ...e, avatarMediaId: t.meta.mediaId };
                        case w:
                            return { ...e, avatarMediaId: null };
                        case R:
                            return { ...e, bannerMediaId: t.meta.mediaId };
                        case M:
                            return { ...e, bannerMediaId: null };
                        case E.SUCCESS:
                            return { ...e, hasVerifiedPhone: t?.payload?.user_phone_state?.has_verified_phone || !1, labelDisplayOptIn: t?.payload?.user_phone_state?.label_display_opt_in || !1 };
                        case B:
                            return { ...e, profileSettings: t.meta.profileSettings };
                        case Z:
                            return { ...e, profileSettings: null };
                        case m.REQUEST:
                            return { ...e, isUploading: !0 };
                        case m.FAILURE:
                        case m.SUCCESS:
                            return { ...e, isUploading: !1 };
                        default:
                            return e;
                    }
                },
            });
        },
        548485: (e, t, i) => {
            i.d(t, { Z: () => F });
            var o = i(202784),
                n = i(928316),
                a = i(325686),
                r = i(674132),
                s = i.n(r),
                l = i(553007),
                d = i(723951),
                c = i(390587),
                h = i(158910),
                p = i(614991),
                u = i(323265),
                m = i(154003),
                _ = i(992942),
                g = i(782578),
                E = i(173739),
                f = i(392237),
                y = i(393058);
            const b = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                S = ({ circle: e, height: t, width: i }) => o.createElement(a.Z, { pointerEvents: "none", style: [b.mask, { width: i, height: t }, e && b.circle] });
            var C = i(807896),
                v = i(151624),
                w = i(933895);
            class P extends o.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: i, onPinchMove: o, onWheel: n } = this.props;
                            if (e) {
                                (i || t || o) && (this._removeTouchMoveToScrollListener = (0, w.O)(e, this._preventDefaultEvent, !1)), n && (this._removeScrollToScaleListener = (0, w.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: i, onPinchMove: o } = this.props,
                                n = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (o) {
                                    const e = ((a = n[0]), (r = n[1]), Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                                        { pageX: t, pageY: i } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(n[0], n[1]),
                                        s = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? i - this._previousPositionY : 0,
                                        d = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = i), (this._previousTouchDistance = e);
                                    const { x: c, y: h } = this._centerPosition;
                                    o(d, c - t, h - i, s, l);
                                }
                            } else i && i(t.dx, t.dy);
                            var a, r;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: i, deltaX: o, deltaY: n } = e,
                                { x: a, y: r } = this._centerPosition,
                                s = a - t,
                                l = r - i;
                            this.props.onWheel && this.props.onWheel(o, n, s, l);
                        }),
                        (this._panResponder = v.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: i, onPinchMove: n, onWheel: r, ...s } = this.props;
                    return o.createElement(a.Z, (0, C.Z)({}, s, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const R = P,
                I = s().d85bc1b8,
                M = s().f596ace8,
                A = s().df031fca,
                D = s().b40332c6,
                B = s().e547b368,
                L = s().f7571204,
                Z = s().e6e16812,
                k =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class T extends o.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !y.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: i } = this.state,
                                n = e.width / e.height,
                                r = this._shouldShowZoomControl();
                            return t || r ? o.createElement(a.Z, { style: x.controlsContainer }, t ? o.createElement(a.Z, { style: x.ratioContainer }, o.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: i === n ? "primary" : "gray700", hoverLabel: { label: B }, icon: o.createElement(l.default, null), onPress: this._setAspectRatio(n), size: "medium" }), o.createElement(m.ZP, { "aria-label": A, borderColor: "transparent", color: i === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: L }, icon: o.createElement(d.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), o.createElement(m.ZP, { "aria-label": D, borderColor: "transparent", color: 1 === i ? "primary" : "gray700", hoverLabel: { label: Z }, icon: o.createElement(c.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, r ? o.createElement(a.Z, { style: x.zoomContainer }, o.createElement(E.Z, { "aria-label": I, max: this._maxScale, maxIcon: o.createElement(h.default, { style: x.icon }), min: 0, minIcon: o.createElement(p.default, { style: x.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: i, width: o } = this._getMaskDimensions(),
                                { height: n, width: a } = g.Z.getCoverDimensions({ width: o, height: i }, t);
                            return { width: a * Math.pow(2, e), height: n * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: i } = this.state,
                                { height: o, width: n } = g.Z.getContainDimensions({ width: i - 50, height: t - 50 }, e);
                            return { width: n, height: o };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: i } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: i }) : (this.setState({ containerHeight: t, containerWidth: i }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: i } = this._getImageDimensions(),
                                { width: o } = this._getMaskDimensions(),
                                n = i / t.width,
                                a = k(o / (e.width * n));
                            this.setState({ imageScale: a });
                            const { left: r, top: s } = this._getUnscaledCropData();
                            (this._panStyles.top = s - e.top * n * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = r - e.left * n * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, i, o) => {
                            const n = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + n, 0));
                                return (this._panStyles.left += i * (t - e)), (this._panStyles.top += o * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, i, o, n) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const r = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (r - e) + o), (this._panStyles.top += i * (r - e) + n), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: r };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                i = e.left,
                                o = e.top,
                                n = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let r = !1;
                            i < 0 && ((r = !0), (this._panStyles.left += i), (this._previousLeft += i)), o < 0 && ((r = !0), (this._panStyles.top += o), (this._previousTop += o)), n > 0 && ((r = !0), (this._panStyles.left += n), (this._previousLeft += n)), a > 0 && ((r = !0), (this._panStyles.top += a), (this._previousTop += a)), r && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: i } = this.state,
                                o = i?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            o !== a &&
                                (0, n.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: i, width: o } = this._getMaskDimensions(),
                                { left: n, top: a } = this._panStyles;
                            return { top: (e - i) / 2 - a, left: (t - o) / 2 - n, width: o, height: i };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(k(t.width / 150), k(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: i } = this.props,
                        { transformStyle: n } = this.state,
                        { height: r, width: s } = this._getImageDimensions(),
                        { height: l, width: d } = this._getMaskDimensions(),
                        c = this.state.containerWidth && this.state.containerHeight;
                    return o.createElement(a.Z, { style: x.container }, o.createElement(R, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: i ? this._handlePinchMove : void 0, onWheel: i ? this._handleWheel : void 0, style: x.root }, c ? o.createElement(o.Fragment, null, o.createElement(_.Z, { source: { uri: t.src, width: s, height: r }, style: [x.image, n] }), o.createElement(S, { circle: e, height: l, width: d })) : null), c ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        i = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * i.top), left: Math.round(t * i.left), width: Math.round(t * i.width), height: Math.round(t * i.height) };
                }
            }
            T.defaultProps = { circle: !1, withZoomControl: !0 };
            const x = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                F = T;
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => c });
            var o = i(202784),
                n = i(325686),
                a = i(191796),
                r = i(58399),
                s = i(731708),
                l = i(952428),
                d = i(392237);
            const c = (e) => {
                    const { decoration: t, description: i, disabled: c = !1, isActive: p = !1, label: u, link: m, onPress: _, paddingHorizontal: g, renderRightContent: E, role: f = "tab", styleOverride: y, testID: b = "pivot", thumbnail: S, thumbnailSize: C, withoutArrow: v = !1 } = e,
                        w = [h.thumbnailContainer, "medium" === C && h.thumbnailContainerMedium],
                        P = "string" == typeof u ? o.createElement(s.ZP, null, u) : u,
                        R = "object" == typeof m && m.external && !m.openInSameFrame,
                        I = i ? ("string" == typeof i ? o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${b}-description` }, i) : i) : null,
                        M = o.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? d.default.theme.spaces[g] : d.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === f ? p : null, disabled: c, link: c ? void 0 : m, onPress: _, role: f, style: [h.root, M, c && h.disabled, y], testID: b, withInteractiveStyling: !!m || !!_ }, o.createElement(n.Z, { style: h.contentContainer }, S ? o.createElement(n.Z, { style: w }, S) : null, o.createElement(n.Z, { style: h.content }, P, I), E ? E() : null, (!m && !_) || c || v ? null : R ? o.createElement(a.default, { style: h.icon }) : o.createElement(r.default, { style: h.icon })), t);
                },
                h = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, i) => {
            i.d(t, { Z: () => o });
            const o = i(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsProfile~bundle.Ocf.8dfed90a.js.map
