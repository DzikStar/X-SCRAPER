"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7"],
    {
        873637: (e, t, a) => {
            a.d(t, { Z: () => b });
            var i = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(167630),
                l = a(548485),
                o = a(392237),
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
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: i, withAspectRatioOptions: s, withZoomControl: o } = this.props,
                        { orientedImage: d } = this.state,
                        { cropData: c, originalMediaFile: h = {} } = i || {};
                    return d ? n.createElement(r.Z, { style: g.cropper }, n.createElement(l.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || t, defaultCropData: a || c, image: { src: d.url, width: h.width, height: h.height }, ref: e, withAspectRatioOptions: s, withZoomControl: o })) : null;
                }
            }
            const g = o.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                b = n.forwardRef((e, t) => n.createElement(p, (0, i.Z)({}, e, { cropperRef: t })));
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(807896),
                n = a(202784),
                r = a(107267),
                s = a(403556),
                l = a(791632);
            const o = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: a, ...o } = e;
                    return n.createElement(s.Z, (0, i.Z)({}, o, { isCompact: a || (0, l.HD)(t) }));
                },
                d = n.memo(o);
        },
        536210: (e, t, a) => {
            a.d(t, { Z: () => wt });
            var i = a(807896),
                n = a(202784),
                r = a(443781),
                s = (a(136728), a(325686)),
                l = a(154003),
                o = a(731708),
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
                M = a(908478),
                C = a(980407),
                E = a(873637),
                T = a(507651),
                y = a(293115),
                v = a(529356),
                I = a(392237),
                w = a(175856);
            const S = "altTextInput",
                x = "endEditingButton",
                A = "altTextEducationSheetPrimaryAction";
            var k = a(855488),
                D = a(992942),
                Z = a(167630),
                P = a(304059);
            const F = c().gff1f69e;
            const L = I.default.create((e) => ({ activityIndicator: { height: "100%", width: "100%" }, image: { width: "100%", flexGrow: 1 }, mediaContainer: { overflow: "hidden", flexGrow: 1, flexBasis: 0, width: "100%" }, mediaPreviewWrapper: { flexDirection: "column", flexGrow: 1, alignItems: "center", width: "100%", paddingVertical: 25, paddingHorizontal: 25, backgroundColor: e.colors.gray0 } })),
                R = function ({ mediaItem: e, orientedImage: t }) {
                    return n.createElement(s.Z, { style: L.mediaPreviewWrapper }, void 0 === t && e ? n.createElement(P.Z, { imageResizeMode: "contain", mediaItem: e, style: L.mediaContainer, withCloseButton: !1 }) : t ? n.createElement(D.Z, { resizeMode: "contain", source: t.url, style: L.image }) : n.createElement(Z.Z, { "aria-label": F, style: L.activityIndicator }));
                },
                B = I.default.create((e) => ({ formTextInput: { width: "100%", backgroundColor: e.colors.navigationBackground, paddingHorizontal: e.spaces.space12, paddingBottom: 0, borderTopWidth: e.spaces.space1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, attachmentContainer: { width: "100%", height: "100%", flexGrow: 1 }, root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%", flexGrow: 1 } })),
                W = c().feabf2a0,
                V = c().e36287c6,
                O = c().cf565d08;
            class z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderInputHelperText = () => {
                            const { onShowEducation: e } = this.props;
                            return e ? n.createElement(o.ZP, { color: "link", onPress: e, withInteractiveStyling: !0 }, O) : null;
                        }),
                        (this._handleChange = (e) => {
                            const { currentMediaId: t, mediaItem: a, onChange: i } = this.props,
                                { value: n } = e.target;
                            a ? i(n, a.id.toString()) : t && i(n, t);
                        });
                }
                render() {
                    const { autofocus: e, maxLength: t, mediaItem: a, orientedImage: i, value: r } = this.props;
                    return n.createElement(s.Z, { style: B.root }, n.createElement(s.Z, { style: B.attachmentContainer }, n.createElement(R, { mediaItem: a, orientedImage: i }), n.createElement(k.Z, { "aria-label": W, autoFocus: e, helperText: this._renderInputHelperText(), label: V, maxLength: t, maxNumberOfLines: 6, multiline: !0, name: "altTextInput", numberOfLines: 2, onChange: this._handleChange, style: B.formTextInput, testID: S, value: r })));
                }
            }
            var U = a(668214);
            const G = (e, t) => (0, w.t5)(e, w.Fs),
                N = (0, U.Z)()
                    .propsFromState(() => ({ showEducationOnMount: G }))
                    .propsFromActions(() => ({ addFlag: w.pj }))
                    .withAnalytics(),
                H = c().ffe9ec3a,
                K = c().j063b262,
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
                        l = e && e.id.toString();
                    return n.createElement(s.Z, { style: X.root }, r ? n.createElement(v.Z, { actionLabel: Q, headline: H, onAction: this._handleEducationPromptPrimaryAction, onClose: this._handleCloseEducationPrompt, onSecondaryAction: this._handleEducationPromptSecondaryAction, primaryButtonTestID: A, secondaryActionLabel: j, subtext: K }) : null, n.createElement(z, { autofocus: !0, currentMediaId: l, maxLength: 1e3, mediaItem: e, onChange: t, onShowEducation: this._handleOpenEducationPrompt, orientedImage: a, value: i }));
                }
            }
            const X = I.default.create((e) => ({ root: { flexGrow: 1 } })),
                $ = N(q);
            var J = a(352924),
                Y = a(844685),
                ee = a(954110),
                te = a(539432);
            const ae = c().d9f7b32a,
                ie = c().ead1b80a,
                ne = c().faf745fa,
                re = c().b96e6682,
                se = c().h2437f26,
                le = c().g5e1668a,
                oe = c().fdc6a52a;
            function de(e) {
                const { currentWarnings: t, isAllowedVideoDownload: a, mediaItem: i, onWarningChange: r, orientedImage: l, toggleIsAllowedVideoDownload: o } = e,
                    d = [
                        { label: ne, value: "adult_content" },
                        { label: re, value: "graphic_violence" },
                        { label: se, value: "other" },
                    ],
                    c = J.b(),
                    h = n.createElement(R, { mediaItem: i, orientedImage: l }),
                    m = n.useCallback(() => {
                        o?.();
                    }, [o]);
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
                        "boolean" == typeof a && o ? n.createElement(s.Z, { role: "group", style: ce.topBorder }, n.createElement(ee.Z, { checked: a, helpText: oe, label: le, name: "download", onChange: m, type: "switch" })) : null,
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
                Me = c().f96a38a2,
                Ce = c().hac7c548,
                Ee = c().e3dbfba4,
                Te = c().dd4a83a6;
            class ye extends n.Component {
                constructor(e) {
                    super(e),
                        (this._cropper = n.createRef()),
                        (this._getMemoizedTabMetadata = (0, _.Z)((e, t) => (t && e === me.P.SensitiveMedia ? { namespace: ge, title: Te, renderer: this._renderSensitiveMediaTab } : e === me.P.AltText ? { namespace: ue, title: Ee, renderer: this._renderAltTextTab } : { namespace: pe, title: Ce, renderer: this._renderCropTab }))),
                        (this._renderTabContent = (e) => {
                            const { location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getMemoizedTabMetadata(e, a),
                                r = !t.state?.hideTabs,
                                l = r ? this._getTabLinks(e) : [],
                                o = i.renderer();
                            return r && l.length > 1 ? n.createElement(n.Fragment, null, n.createElement(T.Z, { "aria-label": be, links: l }), n.createElement(s.Z, { style: he.segmentedControlChildren }, o)) : o;
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
                            return n.createElement(E.Z, { defaultCropData: e.get(t), key: t, media: a, ref: this._cropper, withAspectRatioOptions: !0 });
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
                            return n.createElement(s.Z, { style: he.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(s.Z, { style: [he.rightControl, he.leftRightButtons] }, n.createElement(l.ZP, { "aria-label": Me, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: he.prevButton, type: "primaryOutlined" }), n.createElement(l.ZP, { "aria-label": fe, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(m.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(l.ZP, { disabled: e, onPress: this._handleEndEditingClick, size: "small", style: he.saveButton, testID: x, type: "primaryFilled" }, _e));
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
                                const l = e.map((e) => (s.get(e.id) ? (n({ id: e.id, cropData: s.get(e.id) }), i(e.id)) : Promise.resolve()));
                                Promise.all(l).then(() => {
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
                                if (e && !(0, M.Z)(i, this.state.cropData.get(a)) && (this.setState((e) => ({ orientedImage: (0, f.Z)([...e.orientedImage, [a, null]]) })), e.originalMediaFile && e.originalMediaFile instanceof g.ZP)) {
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
                    return n.createElement(y.nO, { namespace: i.namespace }, n.createElement(C.Z, { backButtonType: "back", containerStyle: he.root, documentTitle: i.title, history: e, onBackClick: this._handleCancelEditingClick, rightControl: this._renderAppBarRightControl(), title: i.title }, this._renderTabContent(a)));
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
                    return r?.originalMediaFile?.isImage && s.push({ to: { ...a, state: { ...a.state, tab: me.P.Crop } }, label: n.createElement(u.default, null), key: me.P.Crop, "aria-label": Ce, isActive: () => e === me.P.Crop, onClick: () => t.scribePageImpression() }), s.push({ to: { ...a, state: { ...a.state, tab: me.P.AltText } }, label: n.createElement(o.ZP, { weight: "bold" }, "ALT"), key: me.P.AltText, "aria-label": Ee, isActive: () => e === me.P.AltText, onClick: () => this._handleClickTab("alt_text_button") }), i && s.push({ to: { ...a, state: { ...a.state, tab: me.P.SensitiveMedia } }, label: n.createElement(p.default, null), key: me.P.SensitiveMedia, "aria-label": Te, isActive: () => e === me.P.SensitiveMedia, onClick: () => this._handleClickTab("sensitive_media_tab") }), s;
                }
            }
            const ve = ye;
            var Ie = a(815479),
                we = a(926981),
                Se = a(804579),
                xe = a(540387),
                Ae = a(736063);
            var ke = a(449161),
                De = a(38502),
                Ze = a(946208);
            const Pe = "fileInput",
                Fe = n.createElement(De.default, null),
                Le = c().icbec4ae,
                Re = I.default.create((e) => ({ button: { alignSelf: "start" } })),
                Be = (e) => {
                    const { icon: t = Fe, size: a = "medium", style: r, withIcon: l = !0, ...o } = e,
                        d = Ze.Id.join(",");
                    return n.createElement(s.Z, null, n.createElement(ke.Z, (0, i.Z)({}, o, { accept: d, icon: l ? t : void 0, size: a, style: [Re.button, r], testID: Pe, type: "primaryFilled" }), Le));
                };
            var We = a(716233),
                Ve = a(71620),
                Oe = a(661461),
                ze = a(497294),
                Ue = a(390387);
            const Ge = (e) => {
                    const t = (0, Ue.VT)(e);
                    return t && (0, Oe.ug)(e, t);
                },
                Ne = (0, U.Z)()
                    .propsFromState(() => ({ language: Ue.VT, languageName: Ge }))
                    .propsFromActions(() => ({ addMedia: ze.rA, createLocalApiErrorHandler: (0, Ve.zr)("VIDEO_SUBTITLES_UPLOAD"), fetchAvailableLanguagesIfNeeded: Oe.yt, removeMediaUpload: ze.WU }))
                    .withAnalytics(),
                He = c().bf4e9d7a,
                Ke = c().j435467e,
                Qe = c().a6b267fa;
            class je extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtitlesPickerButton = () => n.createElement(Be, { onChange: this._handleAddMediaFiles, type: "brandText" })),
                        (this._renderSubtitlesRemovalButton = () => n.createElement(l.ZP, { onPress: this._handleRemoveSubtitles, type: "destructiveOutlined" }, Qe)),
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
                    return n.createElement(s.Z, { style: qe.root }, n.createElement(s.Z, { style: qe.attachmentContainer }, n.createElement(o.ZP, { size: "title3", style: qe.header, weight: "heavy" }, `${e?.mediaFile?.name || "undefined"}: ${He}`), n.createElement(o.ZP, { size: "body", style: qe.body }, Ke), n.createElement(s.Z, { style: qe.buttonWrapper }, t ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton())));
                }
            }
            const qe = I.default.create((e) => ({ root: { display: "flex", flexDirection: "column", flexWrap: "nowrap", flex: 1 }, attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: "100%" }, body: { marginBottom: e.spaces.space28 }, buttonWrapper: { flexDirection: "row", alignItems: "center" }, header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 } })),
                Xe = Ne(je);
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
                lt = { section: "trimmer" },
                ot = { section: "sensitive_media" },
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
                Mt = me.P.Subtitles,
                Ct = me.P.Trimmer,
                Et = me.P.SensitiveMedia;
            class Tt extends n.Component {
                constructor(e) {
                    super(e),
                        (this._videoTrimmerRef = n.createRef()),
                        (this._getMemoizedCurrentTabMetadata = (0, _.Z)((e, t, a) => {
                            switch (e) {
                                case Ct:
                                    if (t) return { namespace: lt, title: dt, renderer: this._renderTrimmerTab };
                                case Et:
                                    if (a) return { namespace: ot, title: bt, renderer: this._renderSensitiveMediaTab };
                                default:
                                    return { namespace: st, title: ct, renderer: this._renderSubtitlesTab };
                            }
                        })),
                        (this._renderSegmentedControl = () => {
                            const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                                i = this._getSegmentedControlLinks(),
                                r = this._getMemoizedCurrentTabMetadata(t.state?.tab, e, a);
                            return n.createElement(n.Fragment, null, i.length > 1 ? n.createElement(T.Z, { "aria-label": dt, links: i }) : null, n.createElement(s.Z, { style: he.segmentedControlChildren }, r.renderer()));
                        }),
                        (this._renderTrimmerTab = () => {
                            const e = this._getCurrentMediaItem(),
                                { trimData: t } = this.state;
                            if (e?.mediaFile && e.mediaFile instanceof xe.ZP) {
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
                            return n.createElement(s.Z, { style: he.rightControl }, this._hasMediaAtIndex(a) || this._hasMediaAtIndex(t) ? n.createElement(s.Z, { style: [he.rightControl, he.leftRightButtons] }, n.createElement(l.ZP, { "aria-label": ft, disabled: !this._hasMediaAtIndex(a), icon: n.createElement(h.default, null), onPress: this._handleClickToMediaAtIndex(a), size: "small", style: he.prevButton, type: "primaryOutlined" }), n.createElement(l.ZP, { "aria-label": _t, disabled: !this._hasMediaAtIndex(t), icon: n.createElement(m.default, null), onPress: this._handleClickToMediaAtIndex(t), size: "small", type: "primaryOutlined" })) : null, n.createElement(l.ZP, { onPress: this._handleEndEditingClick, size: "small", style: he.saveButton, type: "primaryFilled" }, e ? mt : ut));
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
                    if (t?.mediaFile && t.mediaFile instanceof xe.ZP) {
                        const { mediaFile: a, mediaMetadata: i, trimData: n } = t,
                            r = { endTime: n?.endTime ? 1e3 * n.endTime : 1e3 * a.duration, startTime: n?.startTime ? 1e3 * n.startTime : 0 };
                        this.state = { trimData: r, sensitiveMediaWarning: i?.sensitiveMediaWarning || new Set(), isAllowedDownloadVideo: e.allowDownloadVideoDefault, currentMediaId: t.id };
                    } else this.props.history.replace("/");
                }
                render() {
                    const { history: e, isVideoTrimmerEnabled: t, location: a, sensitiveMediaTabEnabled: i } = this.props,
                        r = this._getMemoizedCurrentTabMetadata(a.state?.tab, t, i);
                    return n.createElement(y.nO, { namespace: r.namespace }, n.createElement(C.Z, { backButtonType: "back", containerStyle: he.root, documentTitle: r.title, history: e, rightControl: this._renderAppBarRightControl(), title: r.title }, this._renderSegmentedControl()));
                }
                _getSegmentedControlLinks() {
                    const { isVideoTrimmerEnabled: e, location: t, sensitiveMediaTabEnabled: a } = this.props,
                        i = this._getCurrentMediaItem(),
                        r = [];
                    return e && i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: Ct } }, label: n.createElement(we.default, null), key: Ct, "aria-label": gt, isActive: () => t.state?.tab === Ct }), i?.originalMediaFile?.isVideo && r.push({ to: { ...t, state: { ...t.state, tab: Mt } }, label: n.createElement(Se.default, null), key: Mt, "aria-label": ht, isActive: () => t.state?.tab === Mt, onClick: this._addTrimDataToState }), a && r.push({ to: { ...t, state: { ...t.state, tab: Et } }, label: n.createElement(p.default, null), key: Et, "aria-label": bt, isActive: () => t.state?.tab === Et, onClick: this._handleClickSensitiveMediaTab }), r;
                }
            }
            const yt = (function (e, t) {
                return n.forwardRef((a, r) => n.createElement(Ae.H, { errorConfig: t }, n.createElement(e, (0, i.Z)({}, a, { ref: r }))));
            })(
                ((vt = Tt),
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
            const It = yt;
            const wt = function (e) {
                const { history: t, initialMediaId: a, media: s } = e,
                    { featureSwitches: l } = n.useContext(r.rC),
                    o = s.filter((e) => e.mediaFile?.isImage || e.mediaFile?.isGif || e.externalMediaDetails),
                    d = s.filter((e) => e.mediaFile?.isVideo),
                    c = s.find((e) => e.id === a),
                    h = !!c?.mediaFile?.isVideo;
                if (s.length <= 0 || !c) return t.replace("/"), null;
                if (h) {
                    const t = l.isTrue("responsive_web_video_trimmer_enabled");
                    return n.createElement(It, (0, i.Z)({}, e, { isVideoTrimmerEnabled: t, media: d }));
                }
                return n.createElement(ve, (0, i.Z)({}, e, { media: o }));
            };
        },
        661461: (e, t, a) => {
            a.d(t, { Nr: () => u, ug: () => p, yt: () => g });
            var i = a(759851),
                n = a(689048),
                r = a(499627),
                s = a(917799),
                l = a(312771),
                o = a(390387);
            const d = "availableLanguages",
                c = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                h = { fetchStatus: l.ZP.NONE, languages: [] };
            function m(e = h, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: l.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: l.ZP.FAILED };
                    case c.SUCCESS: {
                        const { meta: a, payload: i } = t,
                            n = a?.lang ? a.lang : "en",
                            r = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(n),
                            s = r ? (e, t) => r.compare(e.name, t.name) : void 0;
                        return { ...e, languages: i?.slice().sort(s) || [], fetchStatus: l.ZP.LOADED };
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
                g = () => (e, t) => (t()[d].fetchStatus === l.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: a }) =>
                        s._O(e, { request: a.withEndpoint(i.Z).fetchSupportedLanguages })({ actionTypes: c, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, o.VT)(t()) } });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-a2dee9c7.7b7f45ba.js.map
