"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-e019dbda"],
    {
        134642: (e, t, r) => {
            r.d(t, { Z: () => $t });
            r(136728);
            var n = r(202784),
                a = r(325686),
                s = r(457311),
                i = r(420412),
                l = r(731708),
                o = r(868634),
                c = r(992942),
                d = r(108362),
                m = r(392237),
                u = r(674132),
                p = r.n(u),
                h = r(912021),
                b = r(401388),
                g = r(516951),
                f = r(791632),
                _ = r(789831),
                y = r(290402),
                C = r(538884),
                E = r(373981),
                I = r(507651),
                v = r(810430),
                S = r(293115),
                Z = r(899455),
                k = r(519896),
                w = r(730717),
                D = r(312771),
                x = r(650554),
                P = r(443781),
                A = r(32677),
                T = r(144256),
                R = r(810641),
                M = r(530732),
                O = r(618186),
                F = r(823161),
                L = r(473026),
                N = r(937450),
                B = r(853485),
                H = r(668214),
                U = r(919022);
            const V = (0, H.Z)()
                    .propsFromState(() => ({ viewerUser: U.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name }))
                    .withAnalytics(),
                z = p().a609edbe,
                W = p().e349147c;
            class G extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { analytics: t, onClick: r } = this.props;
                            r && r(e), t.scribe({ component: "inline_compose_prompt", action: "click" });
                        });
                }
                render() {
                    const { isDisabled: e, link: t, promptLabel: r, userAvatarURI: s, userName: i, withBorder: o, withComposeIcons: c } = this.props;
                    return n.createElement(M.Z, { "aria-label": z, interactiveStyles: null, link: e ? void 0 : t, onClick: e ? void 0 : this._handleClick, style: [j.root, o && j.borderBottom] }, n.createElement(O.Z, { "aria-label": i, size: F.default.defaultSize, uri: s }), n.createElement(a.Z, { style: [j.column, j.bodyColumn] }, n.createElement(a.Z, { style: [j.fakeInput, e && j.disabled] }, n.createElement(l.ZP, { color: "gray700", numberOfLines: 1 }, r)), c ? n.createElement(n.Fragment, null, n.createElement(L.default, { style: j.icon }), n.createElement(N.default, { style: j.icon }), n.createElement(B.default, { style: j.icon })) : null));
                }
            }
            G.defaultProps = { link: "/compose/post", promptLabel: W, withBorder: !1, withComposeIcons: !0 };
            const j = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, zIndex: 1 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, column: { alignItems: "center", flexBasis: 0, flexDirection: "row", flexShrink: 1, minWidth: 0 }, bodyColumn: { flexGrow: 1, justifyContent: "space-between", marginStart: e.spaces.space12 }, fakeInput: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, disabled: { opacity: 0.5 }, icon: { color: e.colors.primary, height: `calc(${e.spaces.space20} + ${e.spaces.space4})`, marginStart: e.spaces.space12, width: `calc(${e.spaces.space20} + ${e.spaces.space4})` } })),
                K = V(G);
            var q = r(337637),
                Y = r(111685),
                $ = r(954970),
                X = r(514029),
                Q = r(807896),
                J = r(874090),
                ee = r(461756),
                te = r(803224),
                re = r(284702),
                ne = r(366635),
                ae = r(123751),
                se = r(162246),
                ie = r(32788),
                le = r(90890),
                oe = r(390686),
                ce = r(521514),
                de = r(408686),
                me = r(961817),
                ue = r(992720),
                pe = r(511582),
                he = r(78067),
                be = r(117093),
                ge = r(530525),
                fe = r(439592),
                _e = r(522171),
                ye = r(309854),
                Ce = r(933794),
                Ee = r(632658);
            class Ie extends n.Component {
                render() {
                    const { backgroundColor: e, children: t, remindMeButton: r } = this.props,
                        s = this._renderMediaLabel(),
                        i = s || r ? n.createElement(a.Z, { style: [ve.verticalAlignment, ((l = e), { backgroundImage: `linear-gradient(transparent 0%, ${l} 100%)` })] }, n.createElement(a.Z, { style: ve.wrapper }, r, s)) : null;
                    var l;
                    return n.createElement(a.Z, null, i, t);
                }
                _renderMediaLabel() {
                    const { mediaLabel: e } = this.props;
                    return e ? n.createElement(a.Z, { style: ve.mediaLabelWrapper }, n.createElement(l.ZP, { align: "left", color: "white", size: "body", style: ve.mediaLabel }, e)) : null;
                }
            }
            Ie.defaultProps = { backgroundColor: m.default.theme.colors.translucentBlack77 };
            const ve = m.default.create((e) => ({ verticalAlignment: { flexDirection: "column", alignItems: "flex-end", zIndex: 1, height: "25%", width: "100%", bottom: "0", start: "0", position: "absolute" }, wrapper: { flexDirection: "row-reverse", flexWrap: "nowrap", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0", paddingBottom: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mediaLabelWrapper: { justifyContent: "center", flexGrow: 1, flexShrink: 1 }, mediaLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } })),
                Se = Ie,
                Ze = p().f93bb3ee;
            class ke extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldRenderImage: !0 }),
                        (this._getRenderDataSafeImage =
                            ({ mediaItem: e, originalImage: t }) =>
                            ({ resourceSelectionHandler: r, useMinimumData: a }) => {
                                const {
                                        fallbackAccessibilityLabel: s,
                                        slate: { label: i, periscopeVariants: l },
                                    } = this.props,
                                    { expanded_url: o, ext_alt_text: c, original_info: d } = e,
                                    u = c || s,
                                    p = n.createElement(Se, { mediaLabel: a ? void 0 : i }, n.createElement(ge.Z, { "aria-label": u, aspectMode: fe.Z.exact(m.default.theme.aspectRatios.landscape), cropCandidates: d && d.focus_rects, customVariants: l, image: t, onError: this._handleImageError, onVariantSelection: r, previewMode: a }));
                                return o ? n.createElement(Ce.Z, { handlers: { [_e.Z.shortcuts.openMediaModal]: this._handleOpenPhotoModal } }, p) : p;
                            }),
                        (this._handleImageError = () => {
                            this.setState({ shouldRenderImage: !1 });
                        }),
                        (this._handleOpenPhotoModal = () => {
                            const { coverMedia: e, history: t } = this.props;
                            e && e.expanded_url && t.push(e.expanded_url);
                        });
                }
                componentDidUpdate(e) {
                    const { shouldRenderImage: t } = this.state;
                    if (!t) {
                        const { image: t } = this.props.slate,
                            { image: r } = e.slate;
                        t.url !== r.url && this.setState({ shouldRenderImage: !0 });
                    }
                }
                render() {
                    return this.state.shouldRenderImage ? this._renderImage() : null;
                }
                _renderImage() {
                    const e = this._getMediaItem(),
                        t = e && ye.Z.getOriginalImage(e);
                    return e && t ? n.createElement(Ee.Z, { acceptLabel: Ze, renderContent: this._getRenderDataSafeImage({ mediaItem: e, originalImage: t }), resourceId: t.url }) : null;
                }
                _getMediaItem() {
                    const { coverMedia: e, slate: t } = this.props;
                    return (0, v.Qv)(t, e) || void 0;
                }
            }
            const we = ke;
            var De = r(174326),
                xe = r(682474),
                Pe = r(891198),
                Ae = r(819329),
                Te = r(58881),
                Re = r(511323),
                Me = r(449950),
                Oe = r(659773);
            const Fe = (0, H.Z)().propsFromState(() => ({ dataSaverMode: Oe.IX })),
                Le = p().i3f7ff00;
            class Ne extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { hasImageError: !1, currentSlate: void 0 }),
                        (this._handleError = () => {
                            this.setState({ hasImageError: !0 });
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    if (t.currentSlate) {
                        const {
                                image: { url: r },
                            } = t.currentSlate,
                            {
                                image: { url: n },
                            } = e.slate,
                            a = (0, v.r5)(r),
                            s = (0, v.r5)(n),
                            i = "latest.jpg" === s;
                        return a !== s || (!e.dataSaverMode && i) ? { ...t, currentSlate: e.slate } : null;
                    }
                    return { ...t, currentSlate: e.slate };
                }
                componentDidUpdate(e, t) {
                    const { currentSlate: r, hasImageError: n } = this.state,
                        { currentSlate: a } = t;
                    n && r && a && r.image && a.image && r.image.url !== a.image.url && this.setState({ hasImageError: !1 });
                }
                render() {
                    const { currentSlate: e, hasImageError: t } = this.state,
                        { cropCandidates: r, image: s, periscopeVariants: i } = e || {};
                    return s && !t ? n.createElement(Me.Z, { "aria-label": Le, aspectMode: fe.Z.exact(m.default.theme.aspectRatios.landscape), backgroundColor: m.default.theme.colors.gray50, cropCandidates: r, customVariants: i, hideAcceptOverlay: !0, image: s, onError: this._handleError }) : n.createElement(a.Z, { style: Be.fallback });
                }
            }
            const Be = m.default.create((e) => ({ fallback: { backgroundColor: e.colors.gray50 } })),
                He = Fe(Ne);
            var Ue = r(864442),
                Ve = r(62338),
                ze = r(581264);
            const We = p().f2382014,
                Ge = p().g66c8348,
                je = ["views", "viewers"];
            class Ke extends n.Component {
                render() {
                    const { onClick: e } = this.props,
                        t = this._renderImage(),
                        r = this._renderAttribution(),
                        a = this._renderOverlay(t);
                    return n.createElement(M.Z, { focusable: !0, interactiveStyles: Ye, onClick: e, role: "button", style: qe.carouselItem }, a, r);
                }
                _renderAttribution() {
                    const {
                        mediaItem: { carouselItemInfo: e },
                    } = this.props;
                    if (e) {
                        const { is_blue_verified: t, name: r, screenName: a, verified: s } = e;
                        return n.createElement(ne.Z, { isBlueVerified: t, isVerified: s, name: r, screenName: a, style: qe.userAttribution, withStackedLayout: !0 });
                    }
                }
                _renderOverlay(e) {
                    const { isSelected: t } = this.props;
                    return n.createElement(xe.Z, { ratio: m.default.theme.aspectRatios.landscape, style: qe.image }, this._renderSocialProof(e), t && n.createElement(a.Z, { style: qe.selectedOverlay }));
                }
                _renderSocialProof(e) {
                    const {
                            mediaItem: { carouselItemInfo: t },
                        } = this.props,
                        { audiospace: r, playbackDuration: s, socialProof: i, type: c } = t || {},
                        d = i && je.includes(i.type) ? n.createElement(o.ZP, null, n.createElement(a.Z, { style: qe.horizontalContainer }, n.createElement(Re.default, null), n.createElement(l.ZP, null, Pe.ZP.getTruncatedCount(i.count, !0)))) : null,
                        m = (({ audiospace: e, playbackDuration: t, type: r }) => {
                            switch (r) {
                                case v.Tr.LIVE_BROADCAST:
                                    return n.createElement(o.ZP, { type: "live" }, We);
                                case v.Tr.REPLAY_BROADCAST:
                                    return n.createElement(o.ZP, { bold: !0 }, Ge);
                                case v.Tr.VOD:
                                    return n.createElement(o.ZP, null, (0, Ve.y)(t) || "");
                                case v.Tr.GIF:
                                    return n.createElement(o.ZP, { bold: !0 }, "GIF");
                                case v.Tr.AUDIOSPACE: {
                                    const t = (0, ze.F)(e);
                                    return n.createElement(o.ZP, t);
                                }
                                default:
                                    return null;
                            }
                        })({ audiospace: r, playbackDuration: s, type: c });
                    return n.createElement(n.Fragment, null, e, n.createElement(Ae.Z, { align: "left" }, m, d));
                }
                _renderImage() {
                    const {
                        mediaItem: {
                            carouselItemInfo: { audiospace: e },
                            slate: t,
                        },
                    } = this.props;
                    return e && e.hostPalette ? n.createElement(Ue.Z, { avatar_url: e.host.avatar_url, palette: e.hostPalette }) : t ? n.createElement(He, { slate: t }) : null;
                }
            }
            Ke.contextType = P.rC;
            const qe = m.default.create((e) => ({ selectedOverlay: { ...m.default.absoluteFillObject, borderColor: e.colors.primary, borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.large, borderStyle: "solid" }, horizontalContainer: { flexDirection: "row" }, image: { borderRadius: e.borderRadii.small }, carouselItem: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, padding: e.spaces.space2, width: 150 }, userAttribution: { paddingTop: e.spaces.space4 } })),
                Ye = Te.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, customFocusBackgroundColor: m.default.theme.colors.transparent, insetFocusRing: !0 });
            const $e = class {
                    constructor(e) {
                        (this._scribedIndices = new Map()),
                            (this._indiceCallbacks = new Map()),
                            (this._handleScribeImpression = (e) => {
                                this._scribedIndices.set(e, !0), this._scribeImpression(e);
                            }),
                            (this._scribeImpression = e);
                    }
                    destroy() {
                        Array.from(this._indiceCallbacks.values()).forEach((e) => {
                            clearTimeout(e);
                        });
                    }
                    handleVisibilityChange({ index: e, intersectionRatio: t }) {
                        if (this._scribedIndices.has(e)) return;
                        const r = this._indiceCallbacks.has(e);
                        t >= 0.5 && !r
                            ? this._indiceCallbacks.set(
                                  e,
                                  setTimeout(() => this._handleScribeImpression(e), 500),
                              )
                            : t < 0.5 && r && (clearTimeout(this._indiceCallbacks.get(e)), this._indiceCallbacks.delete(e));
                    }
                },
                Xe = Object.freeze({ CarouselImpression: "carousel_impression", TileClick: "tile_click", TileImpression: "tile_impression", TileAutoClick: "tile_auto_click" }),
                Qe = { action: Xe.CarouselImpression },
                Je = { action: Xe.TileAutoClick },
                et = { action: Xe.TileImpression },
                tt = { action: Xe.TileClick };
            class rt extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getHandleOnClickForItem = (e, t) => () => {
                            const { onCarouselScribe: r } = this.props;
                            t(e, () => r(tt));
                        }),
                        (this._handleCarouselChildImpression = (e) => {
                            const { onCarouselScribe: t } = this.props;
                            t(et, { tilePosition: e });
                        }),
                        (this._handleVisibleRangeChange = (e) => {
                            this._impressionTracker.handleVisibilityChange(e);
                        });
                }
                componentDidMount() {
                    const { onCarouselScribe: e } = this.props;
                    (this._impressionTracker = new $e(this._handleCarouselChildImpression)), this._shouldDisplayCarousel() && e(Qe);
                }
                componentWillUnmount() {
                    this._impressionTracker.destroy();
                }
                componentDidUpdate(e) {
                    const { carousel: t } = e,
                        { carousel: r, onCarouselScribe: n } = this.props;
                    this._shouldDisplayCarousel() && r.length !== t.length && n(Qe);
                }
                render() {
                    return this._shouldDisplayCarousel() ? n.createElement(De.Z, { onVisibleRangeChange: this._handleVisibleRangeChange, style: nt.carousel, visibleItemIndex: this.props.selectedItemIndex }, this._renderCarouselItems()) : null;
                }
                _renderCarouselItems() {
                    const { carousel: e, selectedItemIndex: t, setSelectedCarouselIndex: r } = this.props;
                    return e.map((e, a) => n.createElement(Ke, { isSelected: a === t, key: a, mediaItem: e, onClick: this._getHandleOnClickForItem(a, r) }));
                }
                _shouldDisplayCarousel() {
                    const { carousel: e } = this.props;
                    return e.length > 1;
                }
            }
            const nt = m.default.create((e) => ({ carousel: { paddingTop: e.spaces.space16 } })),
                at = rt,
                st = "events-player";
            var it = r(550293);
            const lt = (0, H.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: it.kX, effectiveAutoplay: Oe.AP }))
                    .withAnalytics({ element: "image" }),
                ot = p().b0b38774,
                ct = { autoplayPrioritizationPolicy: de.n8, minimumVisibilityForAutoplay: oe.tB },
                dt = new le.yt(ct),
                mt = { hideFullScreenButton: !0 };
            class ut extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._multiVideoAutoAdvanceEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_enabled")),
                        (this._multiVideoAutoAdvanceDockEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_dock_enabled")),
                        (this._multiVideoAutoAdvanceFullscreenEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_fullscreen_enabled")),
                        (this._dockableAutoplayPolicyEnabled = this.context.featureSwitches.isTrue("responsive_web_dockable_autoplay_policy_enabled")),
                        (this.state = { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
                        (this._getUiStack = (0, h.Z)(
                            (e, t, r, s, i, l) =>
                                ({ containerRef: o, guestsState: c, playerApi: d, playerState: m }) =>
                                    n.createElement(J.Z, {
                                        containerRef: o,
                                        guestsState: c,
                                        isDocked: t,
                                        nextItemInfo: s,
                                        onUpNextComplete: this._getHandleUpNextOverlayComplete(i),
                                        onUpNextReplay: this._handleReplayPress,
                                        playerApi: d,
                                        playerDisplayOptions: e,
                                        playerState: m,
                                        renderUpNextImage: () => {
                                            const e = l?.slate;
                                            return n.createElement(n.Fragment, null, e ? n.createElement(He, { slate: e }) : null, n.createElement(a.Z, { style: pt.backgroundFading }));
                                        },
                                        shouldRenderUpNext: r,
                                    }),
                        )),
                        (this._renderHorizonPlayer = ({ closeRequested: e, dockRequested: t, key: r, playerProps: s }, i) => {
                            if (!s) return null;
                            const { disableFullscreenVideo: l } = this.props,
                                o = this._shouldRenderUpNext(i, t),
                                c = l ? mt : void 0,
                                { carousel: d, selectedItemIndex: m } = this.props,
                                u = this._getNextEligibleCarouselItemIndex(m, d),
                                p = u > -1 && d ? d[u] : void 0,
                                h = p?.carouselItemInfo,
                                b = h ? { playbackDurationMs: h.playbackDuration, name: h.name, screenName: h.screenName, type: h.type, verified: !!h.verified } : void 0,
                                g = this._getUiStack(s.displayOptions, t, !!o, b, u, p);
                            return s ? n.createElement(a.Z, { style: t ? pt.dockedContainerBackground : void 0 }, n.createElement(he.Z, (0, Q.Z)({}, s, { disablePreroll: !0, displayOptions: c, key: r, loopingThresholdMs: 7e3, onProgressChange: this._handleProgressChange, preserveMuteState: !0, uiStack: g }))) : null;
                        }),
                        (this._handleProgressChange = (e, t = !1) => {
                            const { showUpNextPlayerOverlay: r } = this.state;
                            t !== r && this.setState({ showUpNextPlayerOverlay: t });
                        }),
                        (this._getHandleUpNextOverlayComplete = (e) => (t) => {
                            if (e) {
                                const { onChildScribeAction: r, setSelectedCarouselIndex: n } = this.props,
                                    a = { tilePosition: e };
                                n(e), r(t ? tt : Je, a);
                            }
                            this.setState({ showUpNextPlayerOverlay: !1 });
                        }),
                        (this._setPlayer = (e) => {
                            this._playerInstance = e;
                        }),
                        (this._shouldRenderUpNext = (e = !0, t = !1) => {
                            const { carousel: r, effectiveAutoplay: n, isPlayerFullscreen: a, selectedItemIndex: s } = this.props,
                                i = this._getNextEligibleCarouselItemIndex(s, r),
                                l = (0, ue.Z)(n ?? (0, me.i)());
                            return this._multiVideoAutoAdvanceEnabled && l && !ee.Z.reducedMotionEnabled && (!t || this._multiVideoAutoAdvanceDockEnabled) && (!a || this._multiVideoAutoAdvanceFullscreenEnabled) && e && this.state.showUpNextPlayerOverlay && i > -1;
                        }),
                        (this._handleCloseDockComplete = () => {
                            const { showUpNextPlayerOverlay: e } = this.state,
                                { carousel: t, selectedItemIndex: r } = this.props;
                            if (e) {
                                const e = this._getNextEligibleCarouselItemIndex(r, t);
                                this._getHandleUpNextOverlayComplete(e)();
                            } else this._playerInstance && this._playerInstance.pause();
                        }),
                        (this._handleMuteChange = ({ isPlayerMuted: e }) => this.setState({ isPlayerMuted: e })),
                        (this._handleReplayPress = () => {
                            this._playerInstance && this._playerInstance.replay();
                        }),
                        (this._getNextEligibleCarouselItemIndex = (0, h.Z)(v.mZ));
                }
                render() {
                    const { carouselItemInfo: e, isDockingEnabled: t, mediaType: r, onChildScribeAction: s, title: i } = this.props;
                    let l;
                    switch (r) {
                        case v.Tr.AUDIOSPACE:
                            l = this._renderAudioSpace();
                            break;
                        case v.Tr.REPLAY_BROADCAST:
                        case v.Tr.LIVE_BROADCAST:
                        case v.Tr.VOD:
                            l = this._renderVideo();
                            break;
                        case v.Tr.GIF:
                            l = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 });
                            break;
                        case v.Tr.SLATE:
                        default:
                            l = this._renderImage();
                    }
                    const o = t ? this._renderUserSceenName(e) : null;
                    return n.createElement(se.Z, { dockBottomOffset: this._getOffsetForDrawer(), isDisabled: !t, onCloseDockComplete: this._handleCloseDockComplete, onDockingScribeAction: s, subtitle: o, title: i, visibleThreshold: oe.tB }, n.createElement(a.Z, { style: pt.container, testID: st }, l));
                }
                _getOffsetForDrawer() {
                    const { spaces: e } = m.default.theme,
                        { dmDrawerVisibility: t } = this.props,
                        r = parseInt(`${e.space20}`, 10);
                    return t === pe.S.COLLAPSED ? ce.Z.dmDrawerHeight.collapsed + r : t === pe.S.EXPANDED ? ce.Z.dmDrawerHeight.expanded + r : r;
                }
                _renderImage() {
                    const { history: e, mediaDetails: t, slate: r } = this.props;
                    return r ? n.createElement(we, { coverMedia: t.coverMedia, fallbackAccessibilityLabel: ot, history: e, slate: r }) : null;
                }
                _renderAudioSpace() {
                    const { audiospace: e } = this.props.carouselItemInfo;
                    return e ? n.createElement(be.MS, { audioSpaceId: e.id }) : null;
                }
                _renderVideo({ isGif: e = !1, withUpNextOverlay: t = !0 } = {}) {
                    const {
                            eventId: r,
                            mediaDetails: { broadcastId: a, coverMedia: s, coverTweet: i = {}, mediaId: l, promotedContent: o },
                            onFullscreenChange: c,
                            slate: d,
                        } = this.props,
                        { id_str: u } = s || {},
                        { id_str: p } = i,
                        { image: h, periscopeVariants: b } = d || {},
                        g = { "aria-label": ot, aspectRatio: m.default.theme.aspectRatios.landscape, backgroundColor: m.default.theme.colors.gray0, maxLoopCount: e ? void 0 : 3, onFullscreenChange: c, onMuteChange: this._handleMuteChange, promotedContent: o, playbackCoordination: this._dockableAutoplayPolicyEnabled ? le.Tc : dt, playbackPriority: te.W.DOCKABLE, poster: h, customVariants: b, shouldPlayUnmuted: !this.state.isPlayerMuted, setPlayer: this._setPlayer };
                    let f, _;
                    if (a && l) (f = a), (_ = { ...g, videoType: "video", includeBroadcastEventAssociation: !0, source: { contentId: l, eventId: r, variants: [], videoId: ae.Z.forBroadcast(a) } });
                    else if (u && p) {
                        const e = ae.Z.forTweet(p),
                            t = re.Z.getVideoFromCoverMedia(s),
                            n = t && re.Z.extractVideoProps(e, t, r);
                        (f = u), (_ = n ? { ...n, ...g } : void 0);
                    }
                    return n.createElement(ie.Z.Consumer, null, ({ closeRequested: e, dockRequested: r }) => this._renderHorizonPlayer({ closeRequested: e, dockRequested: r, key: f, playerProps: _ }, t));
                }
                _renderUserSceenName(e) {
                    const { accountType: t, name: r, screenName: a, userId: s } = e || {};
                    let i = null;
                    return s && (t === v.tO.TWITTER && a ? (i = n.createElement(ne.Z, { screenName: a, weight: "normal", withLink: !0 })) : t === v.tO.PERISCOPE && r && (i = n.createElement(l.ZP, { color: "gray700", link: `https://pscp.tv/u/${s}` }, r))), i;
                }
            }
            ut.contextType = P.rC;
            const pt = m.default.create((e) => ({ backgroundFading: { ...m.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack30 }, container: { zIndex: 10 }, dockedContainerBackground: { backgroundColor: e.colors.cellBackground } })),
                ht = lt(ut);
            var bt = r(952428),
                gt = r(157396),
                ft = r(187669),
                _t = r(427266),
                yt = r(725405);
            const Ct = r.p + "betmgm-logo-dark.1f69d32a.png",
                Et = r.p + "betmgm-logo-light.2095aafa.png";
            r(571372);
            function It({ children: e }) {
                const { setWidths: t, widths: r } = n.useContext(vt),
                    s = n.useRef(),
                    i = n.useRef(r);
                i.current = r;
                const [l, o] = n.useState(null);
                n.useLayoutEffect(() => {
                    o(i.current.length);
                    const e = i.current.length,
                        r = s.current?.getBoundingClientRect().width ?? 0;
                    return (
                        t((e) => e.concat(r)),
                        () => {
                            t((t) => t.map((t, r) => (r === e ? 0 : t)));
                        }
                    );
                }, [t]);
                const c = n.useCallback(
                        (e) => {
                            if (null !== l) {
                                const r = e.nativeEvent.layout.width;
                                t((e) => e.map((e, t) => (t === l ? r : e)));
                            }
                        },
                        [l, t],
                    ),
                    d = Math.max(0, ...r),
                    m = n.useMemo(() => [{ minWidth: d }, Zt.container], [d]);
                return n.createElement(a.Z, { style: m }, n.createElement(a.Z, { onLayout: c, ref: s }, e));
            }
            const vt = n.createContext({
                widths: [],
                setWidths: () => {
                    throw new Error("EquiContext not initialized");
                },
            });
            function St({ children: e }) {
                const [t, r] = n.useState([]);
                return n.createElement(vt.Provider, { value: { widths: t, setWidths: r } }, e);
            }
            const Zt = m.default.create((e) => ({ container: { alignItems: "center", justifyContent: "center" } })),
                kt = p().ca25ebae,
                wt = p().e749753a,
                Dt = p().c602f5b8,
                xt = p().ea885dec,
                Pt = p().cde48000,
                At = { spread: wt, total: Dt, money_line: xt };
            function Tt({ bettingOdds: { participant_odds: e, url: t } }) {
                const r = ["spread", "total", "money_line"].filter((t) => e.every((e) => e[t])),
                    s = n.useMemo(() => [Ot.table, { gridTemplateColumns: `minmax(max-content, 1fr) repeat(${r.length}, max-content)` }], [r.length]),
                    i = e.map(({ betting_participant: e, ...t }) => ({ participant: e, tableData: r.map((e) => (0, _t.XY)(t[e])) })),
                    { scribeClickHandler: o } = (function () {
                        const e = (0, yt.Z)();
                        (0, ft.q)(() => {
                            e.scribe({ component: Mt, action: "impression" });
                        });
                        const t = n.useCallback(() => {
                            e.scribe({ component: Mt, action: "click" });
                        }, [e]);
                        return { scribeClickHandler: t };
                    })();
                return n.createElement(
                    bt.Z,
                    { link: t, onClick: o, style: Ot.container },
                    n.createElement(
                        a.Z,
                        { style: s },
                        n.createElement(a.Z, { style: Ot.flexAlign }, n.createElement(l.ZP, { weight: "bold" }, kt), n.createElement(Rt, null)),
                        r.map((e, t) => {
                            const r = At[e];
                            return r ? n.createElement(a.Z, { key: r }, n.createElement(l.ZP, { align: "center", color: "gray700", size: "subtext1" }, r)) : n.createElement(a.Z, { key: t });
                        }),
                        i.map(({ participant: { id: e, media_url: t, name: r }, tableData: s }) =>
                            n.createElement(
                                n.Fragment,
                                { key: e },
                                n.createElement(a.Z, { style: Ot.nameColumn }, t && n.createElement(c.Z, { source: t, style: Ot.teamLogo }), r ? n.createElement(l.ZP, { color: "gray900", numberOfLines: 1, style: Ot.teamName }, r) : null),
                                n.createElement(
                                    St,
                                    null,
                                    s.map(({ subtitle: e, title: t }, r) => n.createElement(a.Z, { key: r, style: Ot.tableCell }, n.createElement(It, null, e ? n.createElement(l.ZP, { align: "center", color: "gray900", numberOfLines: 1, size: "subtext1" }, t) : n.createElement(l.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, t), e && n.createElement(l.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, e)))),
                                ),
                            ),
                        ),
                    ),
                    n.createElement(a.Z, { style: Ot.footer }, n.createElement(l.ZP, { color: "gray900", size: "subtext3" }, Pt)),
                );
            }
            function Rt() {
                return n.createElement(c.Z, { "aria-label": "BetMGM", source: m.default.theme.paletteName === gt.default.ThemePaletteNames.light ? Et : Ct, style: Ot.inlineImage });
            }
            const Mt = "bet_mgm_odds";
            const Ot = m.default.create((e) => ({ container: { marginTop: e.spaces.space16 }, table: { display: "grid", gridColumnGap: e.spaces.space2, gridRowGap: e.spaces.space2, marginTop: e.spaces.space4, overflowX: "auto", overflowY: "hidden" }, tableRow: { marginBottom: e.spaces.space4, marginTop: e.spaces.space4 }, nameColumn: { flexDirection: "row", alignItems: "center" }, tableCell: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.small, alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space4 }, footer: { marginTop: e.spaces.space8, alignItems: "end" }, inlineImage: { height: e.lineHeights.body, aspectRatio: "133 / 36", marginStart: e.spaces.space2 }, flexAlign: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1 } }));
            p().f2382014, p().g66c8348;
            class Ft extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._enableMultiVideo = this.context.featureSwitches.isTrue("live_event_multi_video_enabled")),
                        (this._enableDocking = this.context.featureSwitches.isTrue("live_event_docking_enabled")),
                        (this.state = { headerWidth: 0 }),
                        (this._getSelectedItemIndex = (e, t) => (0, q.Z)(e, (e) => e.id === t)),
                        (this._setSelectedCarouselIndex = (e) => {
                            const { carousel: t, setSelectedCarouselItem: r } = this.props,
                                n = t && t[e];
                            n && r(n);
                        });
                }
                render() {
                    const { selectedCarouselItem: e } = this.props;
                    return n.createElement(n.Fragment, null, e && this._renderHeaderMedia(e), this._renderDescription(e), n.createElement(i.Z, null));
                }
                _renderDescription(e) {
                    const {
                            bettingOdds: t,
                            isTOO: r,
                            liveEventDetails: { author: s, category: i, description: l, descriptionEntities: o, timeString: c, title: d },
                        } = this.props,
                        m = e?.mediaDetails?.coverTweet,
                        u = e?.mediaDetails?.coverMedia,
                        p = e?.slate?.imageAttribution;
                    return n.createElement(a.Z, { style: Lt.contentContainer }, d ? n.createElement(Y.Z, { author: s, coverTweet: m, description: l, descriptionEntities: o, imageAttribution: p, isTOO: r, mediaType: u?.type, preTitle: r || !s ? i : "", remindMeButton: this._renderRemindMeButton(), time: c, title: d, withHashflags: !0 }) : null, this._renderScoreCard(), t ? n.createElement(Tt, { bettingOdds: t }) : null, this._enableMultiVideo && e ? this._renderCarousel(e) : null);
                }
                _renderHeaderMedia(e) {
                    const {
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: a,
                            isPlayerFullscreen: s,
                            liveEventDetails: { eventId: i, title: l },
                            onChildScribeAction: o,
                            onFullscreenChange: c,
                        } = this.props,
                        { carouselItemInfo: d, mediaDetails: m, slate: u } = e,
                        { type: p } = d,
                        h = this._getDockingEnabled(p);
                    return n.createElement(ht, { carousel: t, carouselItemInfo: d, disableFullscreenVideo: r, eventId: i, history: a, isDockingEnabled: h, isPlayerFullscreen: s, mediaDetails: m, mediaType: p, onChildScribeAction: o, onFullscreenChange: c, selectedItemIndex: this._getSelectedItemIndex(t || [], e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex, slate: u, title: l });
                }
                _renderRemindMeButton() {
                    const {
                            liveEventDetails: { eventId: e, remindMeSubscription: t },
                            onChildScribeAction: r,
                            remindMeButtonSubscribe: a,
                            remindMeButtonUnsubscribe: s,
                        } = this.props,
                        i = !!this.context.viewerUserId,
                        { toggle_visible: l } = t || {};
                    return i && l && t && a && s ? n.createElement($.Z, { eventId: e, onPress: t.subscribed ? s : a, onRemindButtonScribe: r, remindMeSubscription: t }) : null;
                }
                _renderScoreCard() {
                    const { scoreData: e, withScoreCard: t } = this.props;
                    return e && t ? n.createElement(X.Z, { scoreData: e }) : null;
                }
                _renderCarousel(e) {
                    const { carousel: t, onChildScribeAction: r } = this.props;
                    return t ? n.createElement(at, { carousel: t, onCarouselScribe: r, selectedItemIndex: this._getSelectedItemIndex(t, e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex }) : null;
                }
                _getDockingEnabled(e) {
                    const { isWide: t } = this.props,
                        { viewerUserId: r } = this.context,
                        n = [v.Tr.LIVE_BROADCAST, v.Tr.REPLAY_BROADCAST, v.Tr.VOD];
                    return !!r && this._enableDocking && t && n.includes(e);
                }
            }
            Ft.contextType = P.rC;
            const Lt = m.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
            var Nt = r(769471),
                Bt = r(962741),
                Ht = r(335632);
            const Ut = p().abdcd68a,
                Vt = p().cfb57adb,
                zt = p().b1037710,
                Wt = p().bb980db0,
                Gt = p().e9f1fbcc,
                jt = p().a3b80be6,
                Kt = p().ffd929c1,
                qt = { section: "shop_tab", component: "product_grid" },
                Yt = () => n.createElement(s.Z, { header: Gt, message: jt });
            class $t extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { selectedCarouselItemId: void 0 }),
                        (this._render = () => {
                            const { history: e, interstitialOrderToDisplay: t, onInterstitialSubmit: r } = this.props,
                                a = (0, f.cu)(e);
                            return this._refreshControlWrapper(n.createElement(C.Z, { interstitials: t, onInterstitialSubmit: r }, (e) => n.createElement(n.Fragment, null, a ? null : this._renderHeader(), this._renderInlineCompose(), e || this._renderTimeline())));
                        }),
                        (this._getComposeTimelineDetails = () => this.props.timelineDetails.composeDetails),
                        (this._setSelectedCarouselItem = (e) => {
                            const { onSelectedCarouselItemChange: t } = this.props;
                            t && t(e), this.setState({ selectedCarouselItemId: e.id });
                        }),
                        (this._handleInlineComposeOnClick = (e) => {
                            e.preventDefault();
                            const { history: t } = this.props,
                                r = { pathname: "/compose/post", state: this._getComposeTimelineDetails() };
                            t.push(r);
                        }),
                        (this._getTimelineModuleMemoized = (0, h.Z)((e, t) => (0, w.Z)(e, t))),
                        (this._getLiveCommerceItemsSliceModuleMemoized = (0, h.Z)((e) => (0, Z.Z)(e)));
                    const { timelineMessageOverride: r, withTweetActionsDisabled: a } = e;
                    (this._entryConfiguration = (({ withTweetActionsDisabled: e }) => ({ ...(0, Ht.G)({ withTweetActionsDisabled: e }) }))({ withTweetActionsDisabled: a })),
                        (this._timelinePreprocessor = ((e) => (t) =>
                            e
                                ? t.map((t) => {
                                      if (t.type === Bt.ZP.Message) {
                                          const r = { content: { content: { inlinePrompt: { headerText: e } } } };
                                          return (0, Nt.Z)({}, t, r);
                                      }
                                      return t;
                                  })
                                : t)(r));
                }
                render() {
                    const { fetchStatus: e, liveEventDetails: t, onFetch: r } = this.props;
                    return n.createElement(y.Z, { "aria-label": Ut, fetchStatus: e, key: t.eventId, onRequestRetry: r, render: this._render });
                }
                _renderHeader() {
                    const {
                            bettingOdds: e,
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: a,
                            isPlayerFullscreen: s,
                            isTOO: i,
                            isWide: l,
                            liveEventDetails: o,
                            onChildScribeAction: c,
                            onFullscreenChange: d,
                            remindMeButtonSubscribe: m,
                            remindMeButtonUnsubscribe: u,
                            scoreData: p,
                            timelineDetails: { hashtag: h },
                        } = this.props,
                        { selectedCarouselItemId: b } = this.state,
                        g = (0, v.to)(t, b);
                    return n.createElement(Ft, { bettingOdds: e, carousel: t, disableFullscreenVideo: r, history: a, isPlayerFullscreen: s, isTOO: i, isWide: l, liveEventDetails: o, onChildScribeAction: c, onFullscreenChange: d, remindMeButtonSubscribe: m, remindMeButtonUnsubscribe: u, scoreData: p, selectedCarouselItem: g, setSelectedCarouselItem: this._setSelectedCarouselItem, timelineHashtag: h, withScoreCard: !l });
                }
                _renderInlineCompose() {
                    const {
                            isWide: e,
                            timelineDetails: { hashtag: t },
                        } = this.props,
                        r = t ? Vt({ hashtag: t }) : zt;
                    return e ? n.createElement(n.Fragment, null, n.createElement(K, { onClick: this._handleInlineComposeOnClick, promptLabel: r }), n.createElement(i.Z, null)) : null;
                }
                _renderTimeline() {
                    const {
                            timelineDetails: { timelineId: e },
                        } = this.props,
                        t = this._renderTimelineLinks(),
                        r = e === v.BG.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline();
                    return t.length > 1 || (1 === t.length && t[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(I.Z, { "aria-label": Wt, links: t.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }), n.createElement(a.Z, { style: Xt.timelineContainer }, r)) : r;
                }
                _renderTimelineLinks() {
                    const {
                        timelineDetails: { timelineLinks: e },
                    } = this.props;
                    return e.map(({ customizationInfo: e, label: t, labelType: r, ...a }) => {
                        const s = !(0, b.Z)(e),
                            i = this._renderTimelineLabelAnnotation(r);
                        return { ...a, key: t, label: s && e ? this._renderCustomLabel({ label: t, customizationInfo: e, labelAnnotation: i }) : n.createElement(l.ZP, { weight: "bold" }, t, i), isCustom: s };
                    });
                }
                _renderTimelineLabelAnnotation(e) {
                    return e === v.AJ.New ? n.createElement(o.ZP, { background: "primary", bold: !0, style: Xt.labelAnnotation }, Kt({ ttc_live_event: "" })) : null;
                }
                _renderCustomLabel({ customizationInfo: { badge_media: e, title_color: t }, label: r, labelAnnotation: s }) {
                    return n.createElement(a.Z, { style: Xt.timelineLabel }, e && e.url ? n.createElement(c.Z, { source: e.url, style: Xt.timelineLabelBadge }) : null, n.createElement(l.ZP, { style: { color: t }, weight: "bold" }, r, s));
                }
                _renderRichTimeline() {
                    const {
                            isPlayerFullscreen: e,
                            isWide: t,
                            liveEventDetails: { title: r = Wt },
                            onTimelinePoll: a,
                            pollingIntervalMs: s,
                            timelineDetails: { eventId: i, timelineId: l },
                            withFloatingComposeButton: o,
                        } = this.props,
                        c = this._getTimelineModuleMemoized(i, l),
                        m = !e && !t && o ? this._renderFloatingComposeButton() : null;
                    return n.createElement(_.Z, { component: d.Z, fab: m }, n.createElement(R.Z, { anchoring: E.Z, entryConfiguration: this._entryConfiguration, module: c, onTimelinePoll: a, pollingIntervalMsOverride: s, preprocessEntryList: this._timelinePreprocessor, prerollDisplayLocation: k.Nw.OTHER, refreshControl: null, renderEmptyState: Yt, title: r }));
                }
                _renderCommerceItemSliceTimeline() {
                    const {
                            timelineDetails: { eventId: e },
                        } = this.props,
                        t = this._getLiveCommerceItemsSliceModuleMemoized(e);
                    return n.createElement(S.nO, { namespace: qt }, n.createElement(x.Z, { module: t }));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return n.createElement(A.Z, { getLocationState: this._getComposeTimelineDetails, history: e });
                }
                _refreshControlWrapper(e) {
                    const { onFetch: t, refreshStatus: r } = this.props;
                    return n.createElement(T.Z, { isRefreshing: r === D.ZP.LOADING, onRefresh: t }, e);
                }
            }
            ($t.contextType = P.rC), ($t.defaultProps = { onChildScribeAction: g.Z });
            const Xt = m.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineLabelBadge: { borderRadius: e.borderRadii.infinite, height: e.lineHeights.body, marginEnd: e.spaces.space4, width: e.lineHeights.body }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 } }));
        },
        144256: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(807896),
                a = r(202784),
                s = r(149202),
                i = r(725516);
            class l extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                r = e.contextualScribeNamespace;
                            t(), r && r.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: r, ...i } = this.props;
                    return a.createElement(s.Z, (0, n.Z)({}, i, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const o = (0, i.Z)(l);
        },
        26232: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var n = r(202784),
                a = r(555874),
                s = r(674132),
                i = r.n(s),
                l = r(290402),
                o = r(965245),
                c = r(71620),
                d = r(668214);
            const m = (e, { module: t }) => t.selectFetchStatus(e),
                u = (e, { module: t }) => t.selectItems(e),
                p = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: m, items: u }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = i().i9028824,
                b = (e) => e,
                g = (e) => (t) => e(t.item);
            class f extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: s, onScrollEnd: i, renderer: l, withoutHeadroom: c } = this.props;
                            return !t || s < 1 ? null : 1 === s ? n.createElement(o.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: b, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: i, renderer: l, withoutHeadroom: c }) : n.createElement(a.Z, { ListEmptyComponent: r, data: t, keyExtractor: b, numColumns: s, renderItem: g(l) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: r, fetchIfNeeded: n } = this.props;
                            (e ? r : n)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: r } = this.props;
                    return t ? n.createElement(l.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            f.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const _ = p(f);
        },
        180401: (e, t, r) => {
            r.d(t, { Z: () => N });
            var n = r(202784),
                a = r(325686),
                s = r(457311),
                i = r(731708),
                l = r(392237),
                o = r(674132),
                c = r.n(o),
                d = r(791632),
                m = r(290402),
                u = r(373981),
                p = r(507651),
                h = r(703738),
                b = r(293115),
                g = r(125363),
                f = r(519896),
                _ = r(390387),
                y = r(383675),
                C = r(312771),
                E = r(144256),
                I = r(810641),
                v = r(67369),
                S = r(966886),
                Z = r(766661),
                k = r(420412),
                w = r(971372),
                D = r(443781);
            c().f2382014, c().g66c8348, c().d7071084;
            const x = c().ee2200f4,
                P = l.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical }, disclaimer: { marginTop: e.spaces.space12 }, disclaimerNarrow: { marginTop: e.spaces.space8, marginHorizontal: e.spaces.space4 }, timestamp: { marginTop: e.spaces.space8 } })),
                A = ({ disclaimer: e, trendId: t, trendPrompt: r, title: s, lastUpdatedAt: l, article: o = {}, isWide: d, birdwatchPivot: m }) => {
                    const { text: u, textEntities: p } = o,
                        { featureSwitches: h } = n.useContext(D.rC),
                        b = (0, v.yu)(),
                        g = () => n.createElement(n.Fragment, null, n.createElement(i.ZP, { dir: "auto", size: "title4", style: P.title, weight: "heavy" }, s), l && f(), u ? n.createElement(w.Z, { description: u, descriptionEntities: p }) : null),
                        f = () => {
                            if (!l) return n.createElement(n.Fragment, null);
                            const e = { lastUpdatedElement: n.createElement(S.Z, { humanReadable: !0, timestamp: l }) };
                            return n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: b ? P.disclaimerNarrow : P.timestamp }, n.createElement(c().I18NFormatMessage, { $i18n: "gd67df1d" }, e.lastUpdatedElement));
                        };
                    return n.createElement(n.Fragment, null, n.createElement(a.Z, { style: P.contentContainer }, g(), n.createElement(i.ZP, { align: "left", color: "gray700", size: "subtext2", style: b ? P.disclaimerNarrow : P.disclaimer }, e || x), h.isTrue("responsive_web_trends_ui_community_notes_enabled") && m ? n.createElement(Z.Z, m) : null), n.createElement(k.Z, null));
                },
                T = c().i6212670,
                R = c().c6a07c10,
                M = c().e9f1fbcc,
                O = c().a3b80be6,
                F = c().b0c91a92,
                L = () => n.createElement(s.Z, { header: M, message: O }),
                N = ({ birdwatchPivot: e, disclaimer: t, fetchStatus: r, history: s, id: l, isWide: o, lastUpdatedAt: c, onFetch: v, onTimelinePoll: S, pollingIntervalMs: Z, refreshStatus: k, timelineDetails: w, title: D, trendArticle: x, trendPrompt: P }) => {
                    const M = ((O = w?.timelineId), n.useMemo(() => O && (0, y.R)(O, !1), [O]));
                    var O;
                    const N = (0, g.v9)(_.Qb),
                        H = (0, h.z)(),
                        U = () => (w?.timelineLinks || []).map(({ label: e, ...t }) => ({ ...t, key: e, label: n.createElement(i.ZP, { weight: "bold" }, e), isCustom: !1 })),
                        V = () => {
                            const e = { page: "ai_trend" };
                            if (M) return n.createElement(b.nO, { namespace: e }, n.createElement(I.Z, { anchoring: u.Z, module: M, onTimelinePoll: S, pollingIntervalMsOverride: Z, prerollDisplayLocation: f.Nw.OTHER, refreshControl: null, renderEmptyState: L, title: D }));
                        },
                        z = () => {
                            const e = U();
                            return n.createElement(a.Z, { style: [B.loggedOutCalloutContainer, H && B.withHorizontalMargin] }, ((e) => n.createElement(p.Z, { "aria-label": R, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }))(e), n.createElement(a.Z, { style: B.loggedOutCalloutContent }, n.createElement(i.ZP, { dir: "auto", size: "subtext1", weight: "bold", withHashflags: !1 }, F)));
                        };
                    return n.createElement(m.Z, {
                        "aria-label": T,
                        fetchStatus: r,
                        key: l,
                        onRequestRetry: v,
                        render: () => {
                            const r = (0, d.cu)(s);
                            return (
                                (i = n.createElement(
                                    n.Fragment,
                                    null,
                                    r ? null : n.createElement(A, { article: x, birdwatchPivot: e, disclaimer: t, isWide: o, lastUpdatedAt: c, title: D, trendId: l, trendPrompt: P }),
                                    N
                                        ? (() => {
                                              const e = U(),
                                                  t = V();
                                              return e.length > 1 || (1 === e.length && e[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(p.Z, { "aria-label": R, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })), style: H && B.withHorizontalMargin }), n.createElement(a.Z, { style: B.timelineContainer }, t)) : t;
                                          })()
                                        : null,
                                    N ? null : z(),
                                )),
                                n.createElement(E.Z, { isRefreshing: k === C.ZP.LOADING, onRefresh: v }, i)
                            );
                            var i;
                        },
                    });
                },
                B = l.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 }, loggedOutCalloutContainer: { position: "relative", marginBottom: e.spaces.space4 }, loggedOutCalloutContent: { position: "absolute", top: 0, bottom: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space4, backdropFilter: "blur(10px)", zIndex: 999, minHeight: e.spaces.space24 }, withHorizontalMargin: { marginHorizontal: e.spaces.space16 } }));
        },
        720275: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(457311),
                s = r(674132),
                i = r.n(s),
                l = r(912021),
                o = r(680961),
                c = r(371493),
                d = r(810641);
            const m = i().dd225af8,
                u = () => n.createElement(a.Z, { message: m });
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, l.Z)((e) => (0, c.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return n.createElement(d.Z, { module: this._getModule(), renderUnavailable: u, scroller: o.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const h = p;
        },
        703738: (e, t, r) => {
            r.d(t, { z: () => i });
            var n = r(323265),
                a = r(655352),
                s = r(952793);
            const i = () => (0, s.hC)("rweb_sourcemap_migration") && (0, a.ZP)() && !n.ZP.isMobileOS();
        },
        702001: (e, t, r) => {
            r.d(t, { c: () => s });
            var n = r(516951),
                a = r(615656);
            const s = { [a.ZP.OtherUserSuspended]: { customAction: n.Z }, [a.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        97882: (e, t, r) => {
            r.d(t, { T: () => s, x: () => i });
            var n = r(674132),
                a = r.n(n);
            const s = { AED: a().d857e44d, ALL: a().cb87e3db, ARS: a().a9d5ffd1, AUD: a().a0e8371d, BAM: a().gcc50dc9, BDT: a().a6a43585, BGN: a().a0cc8f2d, BHD: a().i31c32c5, BRL: a().i7dc69e9, BYR: a().c14a6c03, CAD: a().jaa3d537, CHF: a().a824080b, CLP: a().d9c0bedb, CNY: a().bf8c0613, COP: a().i8163625, CZK: a().adb53ba1, DKK: a().iabf697d, DZD: a().a1a0555b, EGP: a().f266f3d9, EUR: a().a9a8652b, GBP: a().dbf40761, GHS: a().b0d993d9, GTQ: a().ac1308e1, HKD: a().a7889ab3, HRK: a().c614f5cd, HUF: a().i55d57e3, IDR: a().e4b6002b, ILS: a().d28e983b, INR: a().e8c9232d, IQD: a().c8994ae1, ISK: a().f821c2a5, JPY: a().j348b9c9, KES: a().i6f93b9b, KRW: a().c6150bd5, KWD: a().i8921e09, KZT: a().ef239279, LBP: a().hecdb149, MAD: a().fdd039b7, MKD: a().f30c2c37, MXN: a().d9ea7bff, MYR: a().ea3df4b7, NGN: a().jaac21bb, NOK: a().hb435ced, NZD: a().ce699d81, PEN: a().bc56d3d7, PHP: a().f8561913, PKR: a().g6485d53, PLN: a().ff561cc1, QAR: a().b42011d3, RON: a().a6660bcd, RSD: a().f9b80449, RUB: a().gdee4d5d, SAR: a().h36f2103, SEK: a().a19ad037, SGD: a().g713f699, THB: a().ff2e39af, TND: a().be34316d, TRY: a().aef81b75, TWD: a().fcce70a5, TZS: a().jc9d352f, UAH: a().be1cb8c5, UGX: a().j9371501, USD: a().j7d4397d, VEF: a().d61441dd, VND: a().e2a99e97, ZAR: a().f7ce19ab, ZMW: a().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: r = 1e6, removeTrailingZeros: n = !1, strictAmount: a = !1 }) => {
                    const i = a ? e : parseInt(e, 10) / r,
                        o = s[t]?.(i);
                    return n ? l(o) : o;
                },
                l = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-e019dbda.24b0dc5a.js.map
