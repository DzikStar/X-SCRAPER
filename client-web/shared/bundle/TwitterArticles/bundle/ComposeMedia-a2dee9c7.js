"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => m });
            var i = a(202784),
                n = a(614983),
                r = a.n(n),
                s = a(325686),
                o = a(370006),
                l = a(786998),
                d = a(929028),
                c = a(386802);
            function h(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class m extends i.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: n, hideBackButton: r, isFullWidth: s, isLarge: d, leftControl: c, middleControl: m, position: u, rightControl: p, secondaryBar: g, style: b, subtitle: _, title: f, titleDomId: C, titleIconCell: M, titleIconCellSize: y, withBackground: E, withWideContainer: T } = this.props,
                        { isModal: v } = this.context,
                        I = r ? c : i.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        w = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!E, v, !!g);
                    return i.createElement(i.Fragment, null, i.createElement(l.Z, { centerTitle: t, centeredLogo: a, isFullWidth: s, isLarge: d, leftControl: I, middleControl: m, position: h(u, v, n), rightControl: p, style: b, subtitle: _, title: f, titleDomId: C, titleIconCell: M, titleIconCellSize: y, withBackground: w, withWideContainer: T }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = d.Z.getBackgroundStyles();
                    return t ? i.createElement(s.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = c.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        873637: (e, t, a) => {
            a.d(t, { Z: () => b });
            var i = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(167630),
                o = a(548485),
                l = a(392237),
                d = a(111677),
                c = a.n(d),
                h = a(205074),
                m = a(653843);
            const u = c().gff1f69e;
            class p extends n.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof h.ZP &&
                        (0, m.ZP)(t).then((e) =>
                            new h.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(s.Z, { "aria-label": u, style: g.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: i, withAspectRatioOptions: s, withZoomControl: l } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: h = {} } = i || {};
                    return d ? n.createElement(r.Z, { style: g.cropper }, n.createElement(o.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: a || c, image: { src: d.url, width: h.width, height: h.height }, ref: e, withAspectRatioOptions: s, withZoomControl: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                b = n.forwardRef((e, t) => n.createElement(p, (0, i.Z)({}, e, { cropperRef: t })));
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(807896),
                n = a(202784),
                r = a(107267),
                s = a(403556),
                o = a(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: a, ...l } = e;
                    return n.createElement(s.Z, (0, i.Z)({}, l, { isCompact: a || (0, o.HD)(t) }));
                },
                d = n.memo(l);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(202784),
                n = a(500002),
                r = a(668214),
                s = a(997174),
                o = a(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: i },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: s },
                            locationKey: o,
                        } = e;
                    let l = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (l = !0));
                    const d = n || o;
                    ((d && n !== o) || (!d && a !== r) || i !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(l(d));
        },
        536210: (e, t, a) => {
            a.d(t, { Z: () => wt });
            var i = a(807896),
                n = a(202784),
                r = a(443781),
                s = (a(136728), a(325686)),
                o = a(154003),
                l = a(731708),
                d = a(111677),
                c = a.n(d),
                h = a(894966),
                m = a(568320),
                u = a(219229),
                p = a(415506),
                g = a(205074),
                b = a(653843),
                _ = a(912021),
                f = a(193089),
                C = a(908478),
                M = a(980407),
                y = a(873637),
                E = a(507651),
                T = a(293115),
                v = a(529356),
                I = a(392237),
                w = a(175856);
            const x = "altTextInput",
                S = "endEditingButton",
                k = "altTextEducationSheetPrimaryAction";
            var A = a(855488),
                D = a(992942),
                Z = a(167630),
                P = a(304059);
            const F = c().gff1f69e;
            const B = I.default.create((e) => ({ activityIndicator: { height: "100%", width: "100%" }, image: { width: "100%", flexGrow: 1 }, mediaContainer: { overflow: "hidden", flexGrow: 1, flexBasis: 0, width: "100%" }, mediaPreviewWrapper: { flexDirection: "column", flexGrow: 1, alignItems: "center", width: "100%", paddingVertical: 25, paddingHorizontal: 25, backgroundColor: e.colors.gray0 } })),
                L = function ({ mediaItem: e, orientedImage: t }) {
                    return n.createElement(s.Z, { style: B.mediaPreviewWrapper }, void 0 === t && e ? n.createElement(P.Z, { imageResizeMode: "contain", mediaItem: e, style: B.mediaContainer, withCloseButton: !1 }) : t ? n.createElement(D.Z, { resizeMode: "contain", source: t.url, style: B.image }) : n.createElement(Z.Z, { "aria-label": F, style: B.activityIndicator }));
                },
                R = I.default.create((e) => ({ formTextInput: { width: "100%", backgroundColor: e.colors.navigationBackground, paddingHorizontal: e.spaces.space12, paddingBottom: 0, borderTopWidth: e.spaces.space1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, attachmentContainer: { width: "100%", height: "100%", flexGrow: 1 }, root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%", flexGrow: 1 } })),
                W = c().feabf2a0,
                V = c().e36287c6,
                O = c().cf565d08;
            class N extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderInputHelperText = () => {
                            const { onShowEducation: e } = this.props;
                            return e ? n.createElement(l.ZP, { color: "link", onPress: e, withInteractiveStyling: !0 }, O) : null;
                        }),
                        (this._handleChange = (e) => {
                            const { currentMediaId: t, mediaItem: a, onChange: i } = this.props,
                                { value: n } = e.target;
                            a ? i(n, a.id.toString()) : t && i(n, t);
                        });
                }
                render() {
                    const { autofocus: e, maxLength: t, mediaItem: a, orientedImage: i, value: r } = this.props;
                    return n.createElement(s.Z, { style: R.root }, n.createElement(s.Z, { style: R.attachmentContainer }, n.createElement(L, { mediaItem: a, orientedImage: i }), n.createElement(A.Z, { "aria-label": W, autoFocus: e, helperText: this._renderInputHelperText(), label: V, maxLength: t, maxNumberOfLines: 6, multiline: !0, name: "altTextInput", numberOfLines: 2, onChange: this._handleChange, style: R.formTextInput, testID: x, value: r })));
                }
            }
            var U = a(668214);
            const z = (e, t) => (0, w.t5)(e, w.Fs),
                G = (0, U.Z)()
                    .propsFromState(() => ({ showEducationOnMount: z }))
                    .propsFromActions(() => ({ addFlag: w.pj }))
                    .withAnalytics(),
                K = c().ffe9ec3a,
                H = c().j063b262,
                Q = c().e57144f0,
                j = c().f9f9210c;
            class q extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showAltTextEducationSheet: !1 }),
                        (this._handleOpenEducationPrompt = () => {
                            const { analytics: e } = this.props;
                            this.setState({ showAltTextEducationSheet: !0 }), e.scribe({ component: "education", action: "click" });
                        }),
                        (this._handleCloseEducationPrompt = () => {
                            this.setState({ showAltTextEducationSheet: !1 });
                        }),
                        (this._handleEducationPromptPrimaryAction = () => {
                            const { analytics: e } = this.props;
                            this._handleCloseEducationPrompt(), e.scribe({ component: "education", element: "alt_text_button", action: "click" });
                        }),
                        (this._handleEducationPromptSecondaryAction = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        });
                }
                componentDidMount() {
                    const { addFlag: e, analytics: t, showEducationOnMount: a } = this.props;
                    a && (this.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: "education", action: "open" }), e(w.Fs));
                }
                render() {
                    const { mediaItem: e, onAltTextChange: t, orientedImage: a, value: i } = this.props,
                        { showAltTextEducationSheet: r } = this.state,
                        o = e && e.id.toString();
                    return n.createElement(s.Z, { style: X.root }, r ? n.createElement(v.Z, { actionLabel: Q, headline: K, onAction: this._handleEducationPromptPrimaryAction, onClose: this._handleCloseEducationPrompt, onSecondaryAction: this._handleEducationPromptSecondaryAction, primaryButtonTestID: k, secondaryActionLabel: j, subtext: H }) : null, n.createElement(N, { autofocus: !0, currentMediaId: o, maxLength: 1e3, mediaItem: e, onChange: t, onShowEducation: this._handleOpenEducationPrompt, orientedImage: a, value: i }));
                }
            }
            const X = I.default.create((e) => ({ root: { flexGrow: 1 } })),
                $ = G(q);
            var J = a(352924),
                Y = a(844685),
                ee = a(954110),
                te = a(539432);
            const ae = c().d9f7b32a,
                ie = c().ead1b80a,
                ne = c().faf745fa,
                re = c().b96e6682,
                se = c().h2437f26,
                oe = c().g5e1668a,
                le = c().fdc6a52a;
            function de(e) {
                const { currentWarnings: t, isAllowedVideoDownload: a, mediaItem: i, onWarningChange: r, orientedImage: o, toggleIsAllowedVideoDownload: l } = e,
                    d = [
                        { label: ne, value: "adult_content" },
                        { label: re, value: "graphic_violence" },
                        { label: se, value: "other" },
                    ],
                    c = J.b(),
                    h = n.createElement(L, { mediaItem: i, orientedImage: o }),
                    m = n.useCallback(() => {
                        l?.();
                    }, [l]);
                return n.createElement(
                    s.Z,
                    { style: ce.root },
                    n.createElement(
                        s.Z,
                        { style: ce.modalContainer },
                        t?.size ? n.createElement(te.ZP, { revealableTombstoneConfig: te.ui, sensitiveMediaWarnings: t, withRoundedCorners: !1 }, h) : h,
                        n.createElement(Y.Z, { id: c, subtext: ie, text: ae }),
                        n.createElement(
                            s.Z,
                            { "aria-labelledby": c, role: "group" },
                            d.map(({ label: e, value: a }) => n.createElement(ee.Z, { checked: t && t.has(a), key: a, label: e, name: a, onChange: r })),
                        ),
                        n.createElement(s.Z, null),
                        "boolean" == typeof a && l ? n.createElement(s.Z, { role: "group", style: ce.topBorder }, n.createElement(ee.Z, { checked: a, helpText: le, label: oe, name: "download", onChange: m, type: "switch" })) : null,
                    ),
                );
            }
            const ce = I.default.create((e) => ({ modalContainer: { width: "100%", height: "100%", flexGrow: 1 }, root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%", flexGrow: 1 }, topBorder: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px" } })),
                he = I.default.create((e) => ({ root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 }, rightControl: { display: "flex", flexDirection: "row" }, prevButton: { marginEnd: e.spaces.space2 }, saveButton: { marginStart: e.spaces.space12 }, segmentedControlChildren: { flexGrow: 1 }, leftRightButtons: { alignItems: "center" }, videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 } }));
            var me = a(513313);
            const ue = { section: "alt_text" },
                pe = { section: "crop" },
                ge = { section: "sensitive_media" },
                be = c().e070024a,
                _e = c().i2209530,
                fe = c().i7d24b36,
                Ce = c().f96a38a2,
                Me = c().hac7c548,
                ye = c().e3dbfba4,
                Ee = c().dd4a83a6;
            class Te extends n.Component {
                constructor(e) {
                    super(e),
                        (this._cropper = n.createRef()),
                        (this._getMemoizedTabMetadata = (0, _.Z)((e, t) => (t && e === me.P.SensitiveMedia ? { namespace: ge, title: Ee, renderer: this._renderSensitiveMediaTab } : e === me.P.AltText ? { namespace: ue, title: ye, renderer: this._renderAltTextTab } : { namespace: pe, title: Me, renderer: this._renderCropTab }))),
                        (this._renderTabContent = (e) => {
                            const { location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getMemoizedTabMetadata(e, a),
                                r = !t.state?.hideTabs,
                                o = r ? this._getTabLinks(e) : [],
                                l = i.renderer();
                            return r && o.length > 1 ? n.createElement(n.Fragment, null, n.createElement(E.Z, { "aria-label": be, links: o }), n.createElement(s.Z, { style: he.segmentedControlChildren }, l)) : l;
                        }),
                        (this._renderAltTextTab = () => {
                            const { history: e } = this.props,
                                { currentMediaId: t, mediaMetadata: a, orientedImage: i } = this.state,
                                r = this._getCurrentMediaItem(),
                                s = a[t] && a[t].altText;
                            return n.createElement($, { history: e, key: t, mediaItem: r, onAltTextChange: this._handleAltTextChange, orientedImage: i.get(t), value: s });
                        }),
                        (this._renderCropTab = () => {
                            const { cropData: e, currentMediaId: t } = this.state,
                                a = this._getCurrentMediaItem();
                            return n.createElement(y.Z, { defaultCropData: e.get(t), key: t, media: a, ref: this._cropper, withAspectRatioOptions: !0 });
                        }),
                        (this._renderSensitiveMediaTab = () => {
                            const { currentMediaId: e, mediaMetadata: t, orientedImage: a } = this.state,
                                i = this._getCurrentMediaItem(),
                                r = t[e] && t[e].sensitiveMediaWarning;
                            return n.createElement(de, { currentWarnings: r, key: e, mediaItem: i, onWarningChange: this._handleSensitiveWarningChange, orientedImage: a.get(e) });
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state,
                                t = this._getNextMediaIndex(1),
                                a = this._getNextMediaIndex(-1);
                            return n.createElement(s.Z, { style: he.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(s.Z, { style: [he.rightControl, he.leftRightButtons] }, n.createElement(o.ZP, { "aria-label": Ce, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: he.prevButton, type: "primaryOutlined" }), n.createElement(o.ZP, { "aria-label": fe, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(m.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(o.ZP, { disabled: e, onPress: this._handleEndEditingClick, size: "small", style: he.saveButton, testID: S, type: "primaryFilled" }, _e));
                        }),
                        (this._handleCancelEditingClick = (e) => {
                            this._scribeWithNamespace({ action: "cancel" }), e();
                        }),
                        (this._handleClickTab = (e) => {
                            const { analytics: t } = this.props;
                            this._handleSaveCropData(), this._scribeWithNamespace({ element: e, action: "click" }), t.scribePageImpression();
                        }),
                        (this._getCurrentMediaItem = () => {
                            const { media: e } = this.props,
                                { currentMediaId: t } = this.state;
                            return e.find((e) => e.id === t);
                        }),
                        (this._getNextMediaIndex = (e) => {
                            const { media: t } = this.props,
                                a = this._getCurrentMediaItem();
                            return t.indexOf(a) + e;
                        }),
                        (this._hasMediaAtIndex = (e) => {
                            const { media: t } = this.props;
                            return e >= 0 && e < t.length;
                        }),
                        (this._handleClickToMediaAtIndex = (e) => () => {
                            const { location: t, media: a } = this.props;
                            if (this._hasMediaAtIndex(e)) {
                                this._handleSaveCropData();
                                const i = a[e],
                                    n = i.mediaFile?.isGif || i.externalMediaDetails,
                                    r = this._getCurrentTab();
                                if (n && r === me.P.Crop) {
                                    const e = me.P.AltText;
                                    t.state = { ...t.state, tab: e };
                                }
                                this.setState({ currentMediaId: i.id });
                            }
                        }),
                        (this._saveMediaMetadata = () => {
                            const { media: e, setMediaMetadata: t } = this.props,
                                { mediaMetadata: a } = this.state;
                            e.forEach((e) => {
                                t(e.id, a[e.id]);
                            });
                        }),
                        (this._handleEndEditingClick = () => {
                            const { history: e } = this.props,
                                t = this._cropper && this._cropper.current,
                                { cropData: a } = this.state;
                            if (t || a.size) {
                                const { media: e, processMedia: i, updateMediaUpload: n } = this.props,
                                    { currentMediaId: r } = this.state;
                                this.setState({ isProcessing: !0 });
                                let s = a;
                                this._getCurrentMediaItem()?.mediaFile?.isImage && t && (s = (0, f.Z)([...a, [r, t.getCropData()]]));
                                const o = e.map((e) => (s.get(e.id) ? (n({ id: e.id, cropData: s.get(e.id) }), i(e.id)) : Promise.resolve()));
                                Promise.all(o).then(() => {
                                    this._scribeWithNamespace({ action: "done" });
                                });
                            }
                            this._saveMediaMetadata(), e.goBack();
                        }),
                        (this._handleAltTextChange = (e) => {
                            this.setState((t) => ({ mediaMetadata: { ...t.mediaMetadata, [t.currentMediaId]: { ...t.mediaMetadata[t.currentMediaId], altText: e } } }));
                        }),
                        (this._handleSensitiveWarningChange = (e, t) => {
                            this.setState((a) => {
                                const i = (a.mediaMetadata[a.currentMediaId] && a.mediaMetadata[a.currentMediaId].sensitiveMediaWarning) || new Set();
                                return t ? i.add(e) : i.delete(e), { mediaMetadata: { ...a.mediaMetadata, [a.currentMediaId]: { ...a.mediaMetadata[a.currentMediaId], sensitiveMediaWarning: i } } };
                            });
                        }),
                        (this._handleSaveCropData = () => {
                            const e = this._getCurrentMediaItem();
                            if (!e?.mediaFile?.isImage) return;
                            const t = this._cropper && this._cropper.current;
                            if (t) {
                                const { currentMediaId: a } = this.state,
                                    i = t.getCropData();
                                if (e && !(0, C.Z)(i, this.state.cropData.get(a)) && (this.setState((e) => ({ orientedImage: (0, f.Z)([...e.orientedImage, [a, null]]) })), e.originalMediaFile && e.originalMediaFile instanceof g.ZP)) {
                                    const { cropData: t } = e;
                                    (0, b.ZP)(e.originalMediaFile, { cropData: i || t })
                                        .then((e) =>
                                            new g.ZP(e).withDimensionsAndOrientation().then((e) => {
                                                this.setState((t) => ({ orientedImage: (0, f.Z)([...t.orientedImage, [a, e]]), cropData: (0, f.Z)([...t.cropData, [a, i]]) }));
                                            }),
                                        )
                                        .catch(() => {
                                            this.setState((e) => ({ orientedImage: (0, f.Z)([...e.orientedImage, [a, void 0]]) }));
                                        });
                                }
                                this.setState((e) => ({ cropData: (0, f.Z)([...e.cropData, [a, i]]) }));
                            }
                        }),
                        (this._scribeWithNamespace = (e) => {
                            const { analytics: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getCurrentTab(),
                                n = this._getMemoizedTabMetadata(i, a);
                            t.scribe({ ...n.namespace, ...e });
                        }),
                        (this._getMediaMetadata = (e) => {
                            const t = {};
                            return e.forEach((e) => (t[e.id] = e.mediaMetadata)), t;
                        });
                    const { initialMediaId: t, media: a } = e,
                        i = this._getMediaMetadata(a);
                    this.state = { cropData: new Map(), isProcessing: !1, mediaMetadata: i, currentMediaId: t || -1, orientedImage: new Map() };
                }
                render() {
                    const { history: e, sensitiveMediaTabEnabled: t } = this.props,
                        a = this._getCurrentTab(),
                        i = this._getMemoizedTabMetadata(a, t);
                    return n.createElement(T.nO, { namespace: i.namespace }, n.createElement(M.Z, { backButtonType: "back", containerStyle: he.root, documentTitle: i.title, history: e, onBackClick: this._handleCancelEditingClick, rightControl: this._renderAppBarRightControl(), title: i.title }, this._renderTabContent(a)));
                }
                _getCurrentTab() {
                    const { location: e, sensitiveMediaTabEnabled: t } = this.props,
                        a = e.state?.tab;
                    return t && a === me.P.SensitiveMedia ? me.P.SensitiveMedia : a === me.P.AltText ? me.P.AltText : me.P.Crop;
                }
                _getTabLinks(e) {
                    const { analytics: t, location: a, sensitiveMediaTabEnabled: i } = this.props,
                        r = this._getCurrentMediaItem(),
                        s = [];
                    return r?.originalMediaFile?.isImage && s.push({ to: { ...a, state: { ...a.state, tab: me.P.Crop } }, label: n.createElement(u.default, null), key: me.P.Crop, "aria-label": Me, isActive: () => e === me.P.Crop, onClick: () => t.scribePageImpression() }), s.push({ to: { ...a, state: { ...a.state, tab: me.P.AltText } }, label: n.createElement(l.ZP, { weight: "bold" }, "ALT"), key: me.P.AltText, "aria-label": ye, isActive: () => e === me.P.AltText, onClick: () => this._handleClickTab("alt_text_button") }), i && s.push({ to: { ...a, state: { ...a.state, tab: me.P.SensitiveMedia } }, label: n.createElement(p.default, null), key: me.P.SensitiveMedia, "aria-label": Ee, isActive: () => e === me.P.SensitiveMedia, onClick: () => this._handleClickTab("sensitive_media_tab") }), s;
                }
            }
            const ve = Te;
            var Ie = a(815479),
                we = a(926981),
                xe = a(804579),
                Se = a(540387),
                ke = a(736063);
            var Ae = a(449161),
                De = a(38502),
                Ze = a(946208);
            const Pe = "fileInput",
                Fe = n.createElement(De.default, null),
                Be = c().icbec4ae,
                Le = I.default.create((e) => ({ button: { alignSelf: "start" } })),
                Re = (e) => {
                    const { icon: t = Fe, size: a = "medium", style: r, withIcon: o = !0, ...l } = e,
                        d = Ze.Id.join(",");
                    return n.createElement(s.Z, null, n.createElement(Ae.Z, (0, i.Z)({}, l, { accept: d, icon: o ? t : void 0, size: a, style: [Le.button, r], testID: Pe, type: "primaryFilled" }), Be));
                };
            var We = a(716233),
                Ve = a(71620),
                Oe = a(661461),
                Ne = a(497294),
                Ue = a(390387);
            const ze = (e) => {
                    const t = (0, Ue.VT)(e);
                    return t && (0, Oe.ug)(e, t);
                },
                Ge = (0, U.Z)()
                    .propsFromState(() => ({ language: Ue.VT, languageName: ze }))
                    .propsFromActions(() => ({ addMedia: Ne.rA, createLocalApiErrorHandler: (0, Ve.zr)("VIDEO_SUBTITLES_UPLOAD"), fetchAvailableLanguagesIfNeeded: Oe.yt, removeMediaUpload: Ne.WU }))
                    .withAnalytics(),
                Ke = c().bf4e9d7a,
                He = c().j435467e,
                Qe = c().a6b267fa;
            class je extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtitlesPickerButton = () => n.createElement(Re, { onChange: this._handleAddMediaFiles, type: "brandText" })),
                        (this._renderSubtitlesRemovalButton = () => n.createElement(o.ZP, { onPress: this._handleRemoveSubtitles, type: "destructiveOutlined" }, Qe)),
                        (this._handleRemoveSubtitles = () => {
                            const { onRemove: e } = this.props;
                            e();
                        }),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, analytics: a, language: i, languageName: n, onChange: r } = this.props;
                            a.scribe({ element: "subtitles_upload", action: "click" }),
                                t(e, { location: We.vC.Tweet }).then((e) => {
                                    r(e[0], i, n);
                                });
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAvailableLanguagesIfNeeded: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { mediaItem: e, subtitles: t } = this.props;
                    return n.createElement(s.Z, { style: qe.root }, n.createElement(s.Z, { style: qe.attachmentContainer }, n.createElement(l.ZP, { size: "title3", style: qe.header, weight: "heavy" }, `${e?.mediaFile?.name || "undefined"}: ${Ke}`), n.createElement(l.ZP, { size: "body", style: qe.body }, He), n.createElement(s.Z, { style: qe.buttonWrapper }, t ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton())));
                }
            }
            const qe = I.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", flex: 1 }, attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: "100%" }, body: { marginBottom: e.spaces.space28 }, buttonWrapper: { flexDirection: "row", alignItems: "center" }, header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 } })),
                Xe = Ge(je);
            var $e,
                Je,
                Ye,
                et = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "withAllowVideoDownloadDefaultQuery",
                        selections: [
                            { kind: "RequiredField", field: ($e = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            { kind: "RequiredField", field: { alias: "viewer", args: (Je = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "fetchDownloadSettingAllowed_viewer" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "withAllowVideoDownloadDefaultQuery",
                        selections: [
                            $e,
                            {
                                alias: "viewer",
                                args: Je,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (Ye = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            Ye,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "JDeOuPXWR_b1gp1KozHQ0g", metadata: {}, name: "withAllowVideoDownloadDefaultQuery", operationKind: "query", text: null },
                };
            et.hash = "113710a51cd9d43a9e5b6849142d36cf";
            const tt = et;
            a(585488);
            var at = a(712696),
                it = a.n(at),
                nt = a(111531);
            const rt = tt,
                st = { section: "subtitles" },
                ot = { section: "trimmer" },
                lt = { section: "sensitive_media" },
                dt = c().c91f83ae,
                ct = c().icbec4ae,
                ht = c().e0342f98,
                mt = c().i2209530,
                ut = c().b772cd66,
                pt = c().e0342f98,
                gt = c().e7048e74,
                bt = c().dd4a83a6,
                _t = c().ga408160,
                ft = c().dc402134,
                Ct = me.P.Subtitles,
                Mt = me.P.Trimmer,
                yt = me.P.SensitiveMedia;
            class Et extends n.Component {
                constructor(e) {
                    super(e),
                        (this._videoTrimmerRef = n.createRef()),
                        (this._getMemoizedCurrentTabMetadata = (0, _.Z)((e, t, a) => {
                            switch (e) {
                                case Mt:
                                    if (t) return { namespace: ot, title: dt, renderer: this._renderTrimmerTab };
                                case yt:
                                    if (a) return { namespace: lt, title: bt, renderer: this._renderSensitiveMediaTab };
                                default:
                                    return { namespace: st, title: ct, renderer: this._renderSubtitlesTab };
                            }
                        })),
                        (this._renderSegmentedControl = () => {
                            const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getSegmentedControlLinks(),
                                r = this._getMemoizedCurrentTabMetadata(t.state?.tab, e, a);
                            return n.createElement(n.Fragment, null, i.length > 1 ? n.createElement(E.Z, { "aria-label": dt, links: i }) : null, n.createElement(s.Z, { style: he.segmentedControlChildren }, r.renderer()));
                        }),
                        (this._renderTrimmerTab = () => {
                            const e = this._getCurrentMediaItem(),
                                { trimData: t } = this.state;
                            if (e?.mediaFile && e.mediaFile instanceof Se.ZP) {
                                const { mediaFile: a } = e,
                                    i = { duration: 1e3 * a.duration, height: a.height, variants: [{ src: a.url, type: a.type }], width: a.width };
                                return n.createElement(s.Z, { style: he.videoTrimmerWrapper }, n.createElement(Ie.Z, { defaultTrimData: t, ref: this._videoTrimmerRef, video: i }));
                            }
                        }),
                        (this._addTrimDataToState = () => {
                            const e = this._videoTrimmerRef.current?.getTrimData();
                            e?.endTime && e?.startTime && this.setState({ trimData: { endTime: e.endTime, startTime: e.startTime } });
                        }),
                        (this._saveTrimData = () => {
                            const { processMedia: e, updateMediaUpload: t } = this.props,
                                a = this._getCurrentMediaItem(),
                                i = this._videoTrimmerRef.current?.getTrimData() || this.state.trimData;
                            i && a && (t({ ...a, trimData: { endTime: i.endTime / 1e3, startTime: i.startTime / 1e3 } }), e(a.id));
                        }),
                        (this._renderSubtitlesTab = () => {
                            const { history: e, initialMediaId: t } = this.props,
                                a = this._getCurrentMediaItem(),
                                i = a?.mediaMetadata || { subtitles: void 0 },
                                r = i?.subtitles;
                            return n.createElement(Xe, { history: e, key: t, mediaItem: a, onChange: this._handleSubtitlesChange, onRemove: this._handleSubtitlesRemove, subtitles: r });
                        }),
                        (this._renderSensitiveMediaTab = () => {
                            const { isUnder18: e } = this.props,
                                { isAllowedDownloadVideo: t, sensitiveMediaWarning: a } = this.state,
                                r = this._getCurrentMediaItem(),
                                s = !e && r?.mediaMetadata?.allowDownloadStatus ? { isAllowedVideoDownload: t, toggleIsAllowedVideoDownload: this._handleToggleAllowVideoDownload } : null;
                            return n.createElement(de, (0, i.Z)({ currentWarnings: a, mediaItem: r, onWarningChange: this._handleSensitiveWarningChange }, s));
                        }),
                        (this._hasMediaAtIndex = (e) => {
                            const { media: t } = this.props;
                            return e >= 0 && e < t.length;
                        }),
                        (this._getNextMediaIndex = (e) => {
                            const { media: t } = this.props,
                                a = this._getCurrentMediaItem();
                            return t.indexOf(a) + e;
                        }),
                        (this._handleClickToMediaAtIndex = (e) => () => {
                            const { media: t } = this.props;
                            if (this._hasMediaAtIndex(e)) {
                                const a = t[e].id;
                                this.setState({ currentMediaId: a });
                            }
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isVideoTrimmerEnabled: e } = this.props,
                                t = this._getNextMediaIndex(1),
                                a = this._getNextMediaIndex(-1);
                            return n.createElement(s.Z, { style: he.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(s.Z, { style: [he.rightControl, he.leftRightButtons] }, n.createElement(o.ZP, { "aria-label": ft, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: he.prevButton, type: "primaryOutlined" }), n.createElement(o.ZP, { "aria-label": _t, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(m.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(o.ZP, { onPress: this._handleEndEditingClick, size: "small", style: he.saveButton, type: "primaryFilled" }, e ? mt : ut));
                        }),
                        (this._getCurrentMediaItem = () => {
                            const { initialMediaId: e, media: t } = this.props,
                                a = this.state?.currentMediaId || e;
                            return t.find((e) => e.id === a);
                        }),
                        (this._handleEndEditingClick = () => {
                            const { history: e, isVideoTrimmerEnabled: t, sensitiveMediaTabEnabled: a } = this.props;
                            t && this._saveTrimData(), a && this._saveSensitiveMediaMetadata(), e.goBack();
                        }),
                        (this._saveSubtitles = (e) => {
                            const { setMediaMetadata: t } = this.props,
                                a = this._getCurrentMediaItem();
                            if (!a) return;
                            const i = a?.mediaMetadata || { subtitles: void 0 };
                            t(a.id, { ...i, subtitles: e });
                        }),
                        (this._handleSubtitlesChange = (e, t, a) => {
                            const { analytics: i } = this.props;
                            i.scribe({ element: "subtitles_upload", action: "add" }), this._saveSubtitles({ lang: t, upload: e, displayName: a || pt });
                        }),
                        (this._handleSubtitlesRemove = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "subtitles_upload", action: "remove" }), this._saveSubtitles(void 0);
                        }),
                        (this._saveSensitiveMediaMetadata = () => {
                            const { setMediaMetadata: e } = this.props,
                                { isAllowedDownloadVideo: t, sensitiveMediaWarning: a } = this.state,
                                i = this._getCurrentMediaItem();
                            i && e(i.id, { ...i.mediaMetadata, sensitiveMediaWarning: a, allowDownloadStatus: { allowDownload: t } });
                        }),
                        (this._handleSensitiveWarningChange = (e, t) => {
                            this.setState((a) => {
                                const i = a.sensitiveMediaWarning;
                                return t ? i.add(e) : i.delete(e), { sensitiveMediaWarning: i };
                            });
                        }),
                        (this._handleToggleAllowVideoDownload = () => {
                            this.setState((e) => ({ isAllowedDownloadVideo: !e.isAllowedDownloadVideo }));
                        }),
                        (this._handleClickSensitiveMediaTab = () => {
                            const { analytics: e } = this.props;
                            this._addTrimDataToState(), e.scribePageImpression();
                        });
                    const t = this._getCurrentMediaItem();
                    if (t?.mediaFile && t.mediaFile instanceof Se.ZP) {
                        const { mediaFile: a, mediaMetadata: i, trimData: n } = t,
                            r = { endTime: n?.endTime ? 1e3 * n.endTime : 1e3 * a.duration, startTime: n?.startTime ? 1e3 * n.startTime : 0 };
                        this.state = { trimData: r, sensitiveMediaWarning: i?.sensitiveMediaWarning || new Set(), isAllowedDownloadVideo: e.allowDownloadVideoDefault, currentMediaId: t.id };
                    } else this.props.history.replace("/");
                }
                render() {
                    const { history: e, isVideoTrimmerEnabled: t, location: a, sensitiveMediaTabEnabled: i } = this.props,
                        r = this._getMemoizedCurrentTabMetadata(a.state?.tab, t, i);
                    return n.createElement(T.nO, { namespace: r.namespace }, n.createElement(M.Z, { backButtonType: "back", containerStyle: he.root, documentTitle: r.title, history: e, rightControl: this._renderAppBarRightControl(), title: r.title }, this._renderSegmentedControl()));
                }
                _getSegmentedControlLinks() {
                    const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                        i = this._getCurrentMediaItem(),
                        r = [];
                    return e && i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: Mt } }, label: n.createElement(we.default, null), key: Mt, "aria-label": gt, isActive: () => t.state?.tab === Mt }), i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: Ct } }, label: n.createElement(xe.default, null), key: Ct, "aria-label": ht, isActive: () => t.state?.tab === Ct, onClick: this._addTrimDataToState }), a && r.push({ to: { ...t, state: { ...t.state, tab: yt } }, label: n.createElement(p.default, null), key: yt, "aria-label": bt, isActive: () => t.state?.tab === yt, onClick: this._handleClickSensitiveMediaTab }), r;
                }
            }
            const Tt = (function (e, t) {
                return n.forwardRef((a, r) => n.createElement(ke.H, { errorConfig: t }, n.createElement(e, (0, i.Z)({}, a, { ref: r }))));
            })(
                ((vt = Et),
                n.forwardRef((e, t) => {
                    const {
                            user_preferences: { allow_video_downloads: a },
                            viewer: r,
                        } = it()(rt, {}),
                        s = (0, nt.Xp)(r);
                    return n.createElement(vt, (0, i.Z)({}, e, { allowDownloadVideoDefault: a ?? !0, isUnder18: s, ref: t }));
                })),
                { context: "TABBED_VIDEO_EDIT" },
            );
            var vt;
            const It = Tt;
            const wt = function (e) {
                const { history: t, initialMediaId: a, media: s } = e,
                    { featureSwitches: o } = n.useContext(r.rC),
                    l = s.filter((e) => e.mediaFile?.isImage || e.mediaFile?.isGif || e.externalMediaDetails),
                    d = s.filter((e) => e.mediaFile?.isVideo),
                    c = s.find((e) => e.id === a),
                    h = !!c?.mediaFile?.isVideo;
                if (s.length <= 0 || !c) return t.replace("/"), null;
                if (h) {
                    const t = o.isTrue("responsive_web_video_trimmer_enabled");
                    return n.createElement(It, (0, i.Z)({}, e, { isVideoTrimmerEnabled: t, media: d }));
                }
                return n.createElement(ve, (0, i.Z)({}, e, { media: l }));
            };
        },
        661461: (e, t, a) => {
            a.d(t, { Nr: () => u, ug: () => p, yt: () => g });
            var i = a(759851),
                n = a(689048),
                r = a(499627),
                s = a(917799),
                o = a(312771),
                l = a(390387);
            const d = "availableLanguages",
                c = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                h = { fetchStatus: o.ZP.NONE, languages: [] };
            function m(e = h, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case c.SUCCESS: {
                        const { meta: a, payload: i } = t,
                            n = a?.lang ? a.lang : "en",
                            r = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(n),
                            s = r ? (e, t) => r.compare(e.name, t.name) : void 0;
                        return { ...e, languages: i?.slice().sort(s) || [], fetchStatus: o.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            r.Z.register({ [d]: m });
            const u = (e) => e[d].languages,
                p = (e, t) => {
                    const a = (0, n.o)(t).toLowerCase(),
                        i = e[d].languages.find((e) => e.code === a);
                    return i?.name;
                },
                g = () => (e, t) => (t()[d].fetchStatus === o.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: a }) =>
                        s._O(e, { request: a.withEndpoint(i.Z).fetchSupportedLanguages })({ actionTypes: c, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, l.VT)(t()) } });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7.f3778dea.js.map
