"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-e019dbda"],
    {
        449950: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(807896),
                n = a(202784),
                o = a(530525),
                l = a(659651),
                s = a(674132),
                i = a.n(s),
                c = a(632658);
            const d = "image",
                u = i().f93bb3ee;
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": a, hideAcceptOverlay: s, shouldShowAltLabel: i, ...c } = this.props;
                            return n.createElement(n.Fragment, null, n.createElement(o.Z, (0, r.Z)({}, c, { "aria-label": a, onVariantSelection: e, previewMode: t, testID: d })), i ? n.createElement(l.Z, { align: "left", altLabel: a }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return n.createElement(c.Z, { acceptLabel: u, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        293988: (e, t, a) => {
            a.d(t, { Z: () => I });
            var r = a(202784),
                n = a(154003),
                o = a(674132),
                l = a.n(o),
                s = a(74514),
                i = a(405303),
                c = a(684511),
                d = a(860174),
                u = a(71620),
                m = a(668214),
                p = a(257166),
                h = a(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                g = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: h.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = l().bdba3e1a,
                y = l().c4da7d28,
                _ = l().j87c21f4,
                D = l().iebc30ca,
                E = l().dc740eb2;
            class C extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: D }, icon: r.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": f, hoverLabel: { label: _ }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: a, userId: r } = this.props;
                    return a(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const I = g(C);
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                l = a(292627),
                s = a(537392),
                i = a(392237),
                c = a(365023),
                d = a(392027),
                u = a(774654),
                m = a(725516),
                p = a(443781);
            const h = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: a, onPress: b, scribeComponent: g, ...f } = e,
                        { loggedInUserId: y } = n.useContext(p.rC),
                        _ = (0, m.z)(),
                        D = n.useCallback(
                            (e) => {
                                _.scribe({ component: g, action: "click" }), b && b(e);
                            },
                            [_, b, g],
                        ),
                        E = u.ZM.useCollapsibleNavBars(),
                        C = [...u.Ah({ elementPosition: "bottom" }), E && h.fabStaysAboveSafeArea];
                    return y
                        ? n.createElement(
                              l.Z.FloatingAction,
                              null,
                              n.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const l = e > i.default.theme.breakpoints.large,
                                      s = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      m = [h.root, s && h.rootMedium, l && h.rootLarge],
                                      p = [h.fab, l && h.fabLarge, u && h.fabMicro, C];
                                  return n.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      n.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, s) => n.createElement(o.Z, (0, r.Z)({ ref: e() }, s({ style: p })), n.createElement(d.Z, (0, r.Z)({}, f, { "aria-label": t, label: l ? a : void 0, onPress: D, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => i });
            a(136728);
            var r = a(202784),
                n = a(387524),
                o = a(635510);
            const l = "/compose/post";
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                r = { pathname: l, state: (t && t()) || {} };
                            a.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: s } = this.props;
                    return r.createElement(n.Z, { "aria-label": e, href: l, icon: t, label: a, onPress: this._handlePress, scribeComponent: s, testID: o.Z.tweet });
                }
            }
            const i = s;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(202784),
                n = a(674132),
                o = a.n(n),
                l = a(186444),
                s = a(355883);
            const i = o().j0179e90,
                c = o().ee69d769({ verb: "" }),
                d = r.createElement(l.default, null),
                u = ({ getLocationState: e, history: t }) => r.createElement(s.Z, { "aria-label": i, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        134642: (e, t, a) => {
            a.d(t, { Z: () => Yt });
            a(136728);
            var r = a(202784),
                n = a(325686),
                o = a(457311),
                l = a(420412),
                s = a(731708),
                i = a(868634),
                c = a(992942),
                d = a(108362),
                u = a(392237),
                m = a(674132),
                p = a.n(m),
                h = a(912021),
                b = a(401388),
                g = a(516951),
                f = a(791632),
                y = a(789831),
                _ = a(290402),
                D = a(538884),
                E = a(373981),
                C = a(507651),
                I = a(810430),
                v = a(293115),
                Z = a(899455),
                w = a(519896),
                P = a(730717),
                S = a(312771),
                M = a(650554),
                k = a(443781),
                A = a(32677),
                x = a(144256),
                T = a(810641),
                R = a(530732),
                F = a(618186),
                O = a(823161),
                L = a(473026),
                B = a(937450),
                N = a(853485),
                U = a(668214),
                H = a(919022);
            const V = (0, U.Z)()
                    .propsFromState(() => ({ viewerUser: H.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name }))
                    .withAnalytics(),
                z = p().a609edbe,
                W = p().e349147c;
            class j extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { analytics: t, onClick: a } = this.props;
                            a && a(e), t.scribe({ component: "inline_compose_prompt", action: "click" });
                        });
                }
                render() {
                    const { isDisabled: e, link: t, promptLabel: a, userAvatarURI: o, userName: l, withBorder: i, withComposeIcons: c } = this.props;
                    return r.createElement(R.Z, { "aria-label": z, interactiveStyles: null, link: e ? void 0 : t, onClick: e ? void 0 : this._handleClick, style: [G.root, i && G.borderBottom] }, r.createElement(F.Z, { "aria-label": l, size: O.default.defaultSize, uri: o }), r.createElement(n.Z, { style: [G.column, G.bodyColumn] }, r.createElement(n.Z, { style: [G.fakeInput, e && G.disabled] }, r.createElement(s.ZP, { color: "gray700", numberOfLines: 1 }, a)), c ? r.createElement(r.Fragment, null, r.createElement(L.default, { style: G.icon }), r.createElement(B.default, { style: G.icon }), r.createElement(N.default, { style: G.icon })) : null));
                }
            }
            j.defaultProps = { link: "/compose/post", promptLabel: W, withBorder: !1, withComposeIcons: !0 };
            const G = u.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, zIndex: 1 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, column: { alignItems: "center", flexBasis: 0, flexDirection: "row", flexShrink: 1, minWidth: 0 }, bodyColumn: { flexGrow: 1, justifyContent: "space-between", marginStart: e.spaces.space12 }, fakeInput: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8 }, disabled: { opacity: 0.5 }, icon: { color: e.colors.primary, height: `calc(${e.spaces.space20} + ${e.spaces.space4})`, marginStart: e.spaces.space12, width: `calc(${e.spaces.space20} + ${e.spaces.space4})` } })),
                K = V(j);
            var $ = a(337637),
                q = a(111685),
                Y = a(954970),
                X = a(514029),
                Q = a(807896),
                J = a(874090),
                ee = a(461756),
                te = a(803224),
                ae = a(284702),
                re = a(366635),
                ne = a(123751),
                oe = a(162246),
                le = a(32788),
                se = a(90890),
                ie = a(390686),
                ce = a(521514),
                de = a(408686),
                ue = a(961817),
                me = a(992720),
                pe = a(511582),
                he = a(310453),
                be = a(117093),
                ge = a(530525),
                fe = a(439592),
                ye = a(522171),
                _e = a(309854),
                De = a(933794),
                Ee = a(632658);
            class Ce extends r.Component {
                render() {
                    const { backgroundColor: e, children: t, remindMeButton: a } = this.props,
                        o = this._renderMediaLabel(),
                        l = o || a ? r.createElement(n.Z, { style: [Ie.verticalAlignment, ((s = e), { backgroundImage: `linear-gradient(transparent 0%, ${s} 100%)` })] }, r.createElement(n.Z, { style: Ie.wrapper }, a, o)) : null;
                    var s;
                    return r.createElement(n.Z, null, l, t);
                }
                _renderMediaLabel() {
                    const { mediaLabel: e } = this.props;
                    return e ? r.createElement(n.Z, { style: Ie.mediaLabelWrapper }, r.createElement(s.ZP, { align: "left", color: "white", size: "body", style: Ie.mediaLabel }, e)) : null;
                }
            }
            Ce.defaultProps = { backgroundColor: u.default.theme.colors.translucentBlack77 };
            const Ie = u.default.create((e) => ({ verticalAlignment: { flexDirection: "column", alignItems: "flex-end", zIndex: 1, height: "25%", width: "100%", bottom: "0", start: "0", position: "absolute" }, wrapper: { flexDirection: "row-reverse", flexWrap: "nowrap", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0", paddingBottom: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mediaLabelWrapper: { justifyContent: "center", flexGrow: 1, flexShrink: 1 }, mediaLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } })),
                ve = Ce,
                Ze = p().f93bb3ee;
            class we extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldRenderImage: !0 }),
                        (this._getRenderDataSafeImage =
                            ({ mediaItem: e, originalImage: t }) =>
                            ({ resourceSelectionHandler: a, useMinimumData: n }) => {
                                const {
                                        fallbackAccessibilityLabel: o,
                                        slate: { label: l, periscopeVariants: s },
                                    } = this.props,
                                    { expanded_url: i, ext_alt_text: c, original_info: d } = e,
                                    m = c || o,
                                    p = r.createElement(ve, { mediaLabel: n ? void 0 : l }, r.createElement(ge.Z, { "aria-label": m, aspectMode: fe.Z.exact(u.default.theme.aspectRatios.landscape), cropCandidates: d && d.focus_rects, customVariants: s, image: t, onError: this._handleImageError, onVariantSelection: a, previewMode: n }));
                                return i ? r.createElement(De.Z, { handlers: { [ye.Z.shortcuts.openMediaModal]: this._handleOpenPhotoModal } }, p) : p;
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
                            { image: a } = e.slate;
                        t.url !== a.url && this.setState({ shouldRenderImage: !0 });
                    }
                }
                render() {
                    return this.state.shouldRenderImage ? this._renderImage() : null;
                }
                _renderImage() {
                    const e = this._getMediaItem(),
                        t = e && _e.Z.getOriginalImage(e);
                    return e && t ? r.createElement(Ee.Z, { acceptLabel: Ze, renderContent: this._getRenderDataSafeImage({ mediaItem: e, originalImage: t }), resourceId: t.url }) : null;
                }
                _getMediaItem() {
                    const { coverMedia: e, slate: t } = this.props;
                    return (0, I.Qv)(t, e) || void 0;
                }
            }
            const Pe = we;
            var Se = a(174326),
                Me = a(682474),
                ke = a(891198),
                Ae = a(819329),
                xe = a(58881),
                Te = a(511323),
                Re = a(449950),
                Fe = a(659773);
            const Oe = (0, U.Z)().propsFromState(() => ({ dataSaverMode: Fe.IX })),
                Le = p().i3f7ff00;
            class Be extends r.Component {
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
                                image: { url: a },
                            } = t.currentSlate,
                            {
                                image: { url: r },
                            } = e.slate,
                            n = (0, I.r5)(a),
                            o = (0, I.r5)(r),
                            l = "latest.jpg" === o;
                        return n !== o || (!e.dataSaverMode && l) ? { ...t, currentSlate: e.slate } : null;
                    }
                    return { ...t, currentSlate: e.slate };
                }
                componentDidUpdate(e, t) {
                    const { currentSlate: a, hasImageError: r } = this.state,
                        { currentSlate: n } = t;
                    r && a && n && a.image && n.image && a.image.url !== n.image.url && this.setState({ hasImageError: !1 });
                }
                render() {
                    const { currentSlate: e, hasImageError: t } = this.state,
                        { cropCandidates: a, image: o, periscopeVariants: l } = e || {};
                    return o && !t ? r.createElement(Re.Z, { "aria-label": Le, aspectMode: fe.Z.exact(u.default.theme.aspectRatios.landscape), backgroundColor: u.default.theme.colors.gray50, cropCandidates: a, customVariants: l, hideAcceptOverlay: !0, image: o, onError: this._handleError }) : r.createElement(n.Z, { style: Ne.fallback });
                }
            }
            const Ne = u.default.create((e) => ({ fallback: { backgroundColor: e.colors.gray50 } })),
                Ue = Oe(Be);
            var He = a(864442),
                Ve = a(62338),
                ze = a(581264);
            const We = p().f2382014,
                je = p().g66c8348,
                Ge = ["views", "viewers"];
            class Ke extends r.Component {
                render() {
                    const { onClick: e } = this.props,
                        t = this._renderImage(),
                        a = this._renderAttribution(),
                        n = this._renderOverlay(t);
                    return r.createElement(R.Z, { focusable: !0, interactiveStyles: qe, onClick: e, role: "button", style: $e.carouselItem }, n, a);
                }
                _renderAttribution() {
                    const {
                        mediaItem: { carouselItemInfo: e },
                    } = this.props;
                    if (e) {
                        const { is_blue_verified: t, name: a, screenName: n, verified: o } = e;
                        return r.createElement(re.Z, { isBlueVerified: t, isVerified: o, name: a, screenName: n, style: $e.userAttribution, withStackedLayout: !0 });
                    }
                }
                _renderOverlay(e) {
                    const { isSelected: t } = this.props;
                    return r.createElement(Me.Z, { ratio: u.default.theme.aspectRatios.landscape, style: $e.image }, this._renderSocialProof(e), t && r.createElement(n.Z, { style: $e.selectedOverlay }));
                }
                _renderSocialProof(e) {
                    const {
                            mediaItem: { carouselItemInfo: t },
                        } = this.props,
                        { audiospace: a, playbackDuration: o, socialProof: l, type: c } = t || {},
                        d = l && Ge.includes(l.type) ? r.createElement(i.ZP, null, r.createElement(n.Z, { style: $e.horizontalContainer }, r.createElement(Te.default, null), r.createElement(s.ZP, null, ke.ZP.getTruncatedCount(l.count, !0)))) : null,
                        u = (({ audiospace: e, playbackDuration: t, type: a }) => {
                            switch (a) {
                                case I.Tr.LIVE_BROADCAST:
                                    return r.createElement(i.ZP, { type: "live" }, We);
                                case I.Tr.REPLAY_BROADCAST:
                                    return r.createElement(i.ZP, { bold: !0 }, je);
                                case I.Tr.VOD:
                                    return r.createElement(i.ZP, null, (0, Ve.y)(t) || "");
                                case I.Tr.GIF:
                                    return r.createElement(i.ZP, { bold: !0 }, "GIF");
                                case I.Tr.AUDIOSPACE: {
                                    const t = (0, ze.F)(e);
                                    return r.createElement(i.ZP, t);
                                }
                                default:
                                    return null;
                            }
                        })({ audiospace: a, playbackDuration: o, type: c });
                    return r.createElement(r.Fragment, null, e, r.createElement(Ae.Z, { align: "left" }, u, d));
                }
                _renderImage() {
                    const {
                        mediaItem: {
                            carouselItemInfo: { audiospace: e },
                            slate: t,
                        },
                    } = this.props;
                    return e && e.hostPalette ? r.createElement(He.Z, { avatar_url: e.host.avatar_url, palette: e.hostPalette }) : t ? r.createElement(Ue, { slate: t }) : null;
                }
            }
            Ke.contextType = k.rC;
            const $e = u.default.create((e) => ({ selectedOverlay: { ...u.default.absoluteFillObject, borderColor: e.colors.primary, borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.large, borderStyle: "solid" }, horizontalContainer: { flexDirection: "row" }, image: { borderRadius: e.borderRadii.small }, carouselItem: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, padding: e.spaces.space2, width: 150 }, userAttribution: { paddingTop: e.spaces.space4 } })),
                qe = xe.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customFocusBackgroundColor: u.default.theme.colors.transparent, insetFocusRing: !0 });
            const Ye = class {
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
                        const a = this._indiceCallbacks.has(e);
                        t >= 0.5 && !a
                            ? this._indiceCallbacks.set(
                                  e,
                                  setTimeout(() => this._handleScribeImpression(e), 500),
                              )
                            : t < 0.5 && a && (clearTimeout(this._indiceCallbacks.get(e)), this._indiceCallbacks.delete(e));
                    }
                },
                Xe = Object.freeze({ CarouselImpression: "carousel_impression", TileClick: "tile_click", TileImpression: "tile_impression", TileAutoClick: "tile_auto_click" }),
                Qe = { action: Xe.CarouselImpression },
                Je = { action: Xe.TileAutoClick },
                et = { action: Xe.TileImpression },
                tt = { action: Xe.TileClick };
            class at extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getHandleOnClickForItem = (e, t) => () => {
                            const { onCarouselScribe: a } = this.props;
                            t(e, () => a(tt));
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
                    (this._impressionTracker = new Ye(this._handleCarouselChildImpression)), this._shouldDisplayCarousel() && e(Qe);
                }
                componentWillUnmount() {
                    this._impressionTracker.destroy();
                }
                componentDidUpdate(e) {
                    const { carousel: t } = e,
                        { carousel: a, onCarouselScribe: r } = this.props;
                    this._shouldDisplayCarousel() && a.length !== t.length && r(Qe);
                }
                render() {
                    return this._shouldDisplayCarousel() ? r.createElement(Se.Z, { onVisibleRangeChange: this._handleVisibleRangeChange, style: rt.carousel, visibleItemIndex: this.props.selectedItemIndex }, this._renderCarouselItems()) : null;
                }
                _renderCarouselItems() {
                    const { carousel: e, selectedItemIndex: t, setSelectedCarouselIndex: a } = this.props;
                    return e.map((e, n) => r.createElement(Ke, { isSelected: n === t, key: n, mediaItem: e, onClick: this._getHandleOnClickForItem(n, a) }));
                }
                _shouldDisplayCarousel() {
                    const { carousel: e } = this.props;
                    return e.length > 1;
                }
            }
            const rt = u.default.create((e) => ({ carousel: { paddingTop: e.spaces.space16 } })),
                nt = at,
                ot = "events-player";
            var lt = a(550293);
            const st = (0, U.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: lt.kX, effectiveAutoplay: Fe.AP }))
                    .withAnalytics({ element: "image" }),
                it = p().b0b38774,
                ct = { autoplayPrioritizationPolicy: de.n8, minimumVisibilityForAutoplay: ie.tB },
                dt = new se.yt(ct),
                ut = { hideFullScreenButton: !0 };
            class mt extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._multiVideoAutoAdvanceEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_enabled")),
                        (this._multiVideoAutoAdvanceDockEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_dock_enabled")),
                        (this._multiVideoAutoAdvanceFullscreenEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_fullscreen_enabled")),
                        (this._dockableAutoplayPolicyEnabled = this.context.featureSwitches.isTrue("responsive_web_dockable_autoplay_policy_enabled")),
                        (this.state = { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
                        (this._getUiStack = (0, h.Z)(
                            (e, t, a, o, l, s) =>
                                ({ containerRef: i, guestsState: c, playerApi: d, playerState: u }) =>
                                    r.createElement(J.Z, {
                                        containerRef: i,
                                        guestsState: c,
                                        isDocked: t,
                                        nextItemInfo: o,
                                        onUpNextComplete: this._getHandleUpNextOverlayComplete(l),
                                        onUpNextReplay: this._handleReplayPress,
                                        playerApi: d,
                                        playerDisplayOptions: e,
                                        playerState: u,
                                        renderUpNextImage: () => {
                                            const e = s?.slate;
                                            return r.createElement(r.Fragment, null, e ? r.createElement(Ue, { slate: e }) : null, r.createElement(n.Z, { style: pt.backgroundFading }));
                                        },
                                        shouldRenderUpNext: a,
                                    }),
                        )),
                        (this._renderHorizonPlayer = ({ closeRequested: e, dockRequested: t, key: a, playerProps: o }, l) => {
                            if (!o) return null;
                            const { disableFullscreenVideo: s } = this.props,
                                i = this._shouldRenderUpNext(l, t),
                                c = s ? ut : void 0,
                                { carousel: d, selectedItemIndex: u } = this.props,
                                m = this._getNextEligibleCarouselItemIndex(u, d),
                                p = m > -1 && d ? d[m] : void 0,
                                h = p?.carouselItemInfo,
                                b = h ? { playbackDurationMs: h.playbackDuration, name: h.name, screenName: h.screenName, type: h.type, verified: !!h.verified } : void 0,
                                g = this._getUiStack(o.displayOptions, t, !!i, b, m, p);
                            return o ? r.createElement(n.Z, { style: t ? pt.dockedContainerBackground : void 0 }, r.createElement(he.Z, (0, Q.Z)({}, o, { disablePreroll: !0, displayOptions: c, key: a, loopingThresholdMs: 7e3, onProgressChange: this._handleProgressChange, preserveMuteState: !0, uiStack: g }))) : null;
                        }),
                        (this._handleProgressChange = (e, t = !1) => {
                            const { showUpNextPlayerOverlay: a } = this.state;
                            t !== a && this.setState({ showUpNextPlayerOverlay: t });
                        }),
                        (this._getHandleUpNextOverlayComplete = (e) => (t) => {
                            if (e) {
                                const { onChildScribeAction: a, setSelectedCarouselIndex: r } = this.props,
                                    n = { tilePosition: e };
                                r(e), a(t ? tt : Je, n);
                            }
                            this.setState({ showUpNextPlayerOverlay: !1 });
                        }),
                        (this._setPlayer = (e) => {
                            this._playerInstance = e;
                        }),
                        (this._shouldRenderUpNext = (e = !0, t = !1) => {
                            const { carousel: a, effectiveAutoplay: r, isPlayerFullscreen: n, selectedItemIndex: o } = this.props,
                                l = this._getNextEligibleCarouselItemIndex(o, a),
                                s = (0, me.Z)(r ?? (0, ue.i)());
                            return this._multiVideoAutoAdvanceEnabled && s && !ee.Z.reducedMotionEnabled && (!t || this._multiVideoAutoAdvanceDockEnabled) && (!n || this._multiVideoAutoAdvanceFullscreenEnabled) && e && this.state.showUpNextPlayerOverlay && l > -1;
                        }),
                        (this._handleCloseDockComplete = () => {
                            const { showUpNextPlayerOverlay: e } = this.state,
                                { carousel: t, selectedItemIndex: a } = this.props;
                            if (e) {
                                const e = this._getNextEligibleCarouselItemIndex(a, t);
                                this._getHandleUpNextOverlayComplete(e)();
                            } else this._playerInstance && this._playerInstance.pause();
                        }),
                        (this._handleMuteChange = ({ isPlayerMuted: e }) => this.setState({ isPlayerMuted: e })),
                        (this._handleReplayPress = () => {
                            this._playerInstance && this._playerInstance.replay();
                        }),
                        (this._getNextEligibleCarouselItemIndex = (0, h.Z)(I.mZ));
                }
                render() {
                    const { carouselItemInfo: e, isDockingEnabled: t, mediaType: a, onChildScribeAction: o, title: l } = this.props;
                    let s;
                    switch (a) {
                        case I.Tr.AUDIOSPACE:
                            s = this._renderAudioSpace();
                            break;
                        case I.Tr.REPLAY_BROADCAST:
                        case I.Tr.LIVE_BROADCAST:
                        case I.Tr.VOD:
                            s = this._renderVideo();
                            break;
                        case I.Tr.GIF:
                            s = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 });
                            break;
                        case I.Tr.SLATE:
                        default:
                            s = this._renderImage();
                    }
                    const i = t ? this._renderUserSceenName(e) : null;
                    return r.createElement(oe.Z, { dockBottomOffset: this._getOffsetForDrawer(), isDisabled: !t, onCloseDockComplete: this._handleCloseDockComplete, onDockingScribeAction: o, subtitle: i, title: l, visibleThreshold: ie.tB }, r.createElement(n.Z, { style: pt.container, testID: ot }, s));
                }
                _getOffsetForDrawer() {
                    const { spaces: e } = u.default.theme,
                        { dmDrawerVisibility: t } = this.props,
                        a = parseInt(`${e.space20}`, 10);
                    return t === pe.S.COLLAPSED ? ce.Z.dmDrawerHeight.collapsed + a : t === pe.S.EXPANDED ? ce.Z.dmDrawerHeight.expanded + a : a;
                }
                _renderImage() {
                    const { history: e, mediaDetails: t, slate: a } = this.props;
                    return a ? r.createElement(Pe, { coverMedia: t.coverMedia, fallbackAccessibilityLabel: it, history: e, slate: a }) : null;
                }
                _renderAudioSpace() {
                    const { audiospace: e } = this.props.carouselItemInfo;
                    return e ? r.createElement(be.MS, { audioSpaceId: e.id }) : null;
                }
                _renderVideo({ isGif: e = !1, withUpNextOverlay: t = !0 } = {}) {
                    const {
                            eventId: a,
                            mediaDetails: { broadcastId: n, coverMedia: o, coverTweet: l = {}, mediaId: s, promotedContent: i },
                            onFullscreenChange: c,
                            slate: d,
                        } = this.props,
                        { id_str: m } = o || {},
                        { id_str: p } = l,
                        { image: h, periscopeVariants: b } = d || {},
                        g = { "aria-label": it, aspectRatio: u.default.theme.aspectRatios.landscape, backgroundColor: u.default.theme.colors.gray0, maxLoopCount: e ? void 0 : 3, onFullscreenChange: c, onMuteChange: this._handleMuteChange, promotedContent: i, playbackCoordination: this._dockableAutoplayPolicyEnabled ? se.Tc : dt, playbackPriority: te.W.DOCKABLE, poster: h, customVariants: b, shouldPlayUnmuted: !this.state.isPlayerMuted, setPlayer: this._setPlayer };
                    let f, y;
                    if (n && s) (f = n), (y = { ...g, videoType: "video", includeBroadcastEventAssociation: !0, source: { contentId: s, eventId: a, variants: [], videoId: ne.Z.forBroadcast(n) } });
                    else if (m && p) {
                        const e = ne.Z.forTweet(p),
                            t = ae.Z.getVideoFromCoverMedia(o),
                            r = t && ae.Z.extractVideoProps(e, t, a);
                        (f = m), (y = r ? { ...r, ...g } : void 0);
                    }
                    return r.createElement(le.Z.Consumer, null, ({ closeRequested: e, dockRequested: a }) => this._renderHorizonPlayer({ closeRequested: e, dockRequested: a, key: f, playerProps: y }, t));
                }
                _renderUserSceenName(e) {
                    const { accountType: t, name: a, screenName: n, userId: o } = e || {};
                    let l = null;
                    return o && (t === I.tO.TWITTER && n ? (l = r.createElement(re.Z, { screenName: n, weight: "normal", withLink: !0 })) : t === I.tO.PERISCOPE && a && (l = r.createElement(s.ZP, { color: "gray700", link: `https://pscp.tv/u/${o}` }, a))), l;
                }
            }
            mt.contextType = k.rC;
            const pt = u.default.create((e) => ({ backgroundFading: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack30 }, container: { zIndex: 10 }, dockedContainerBackground: { backgroundColor: e.colors.cellBackground } })),
                ht = st(mt);
            var bt = a(952428),
                gt = a(157396),
                ft = a(187669),
                yt = a(427266),
                _t = a(725405);
            const Dt = a.p + "betmgm-logo-dark.1f69d32a.png",
                Et = a.p + "betmgm-logo-light.2095aafa.png";
            a(571372);
            function Ct({ children: e }) {
                const { setWidths: t, widths: a } = r.useContext(It),
                    o = r.useRef(),
                    l = r.useRef(a);
                l.current = a;
                const [s, i] = r.useState(null);
                r.useLayoutEffect(() => {
                    i(l.current.length);
                    const e = l.current.length,
                        a = o.current?.getBoundingClientRect().width ?? 0;
                    return (
                        t((e) => e.concat(a)),
                        () => {
                            t((t) => t.map((t, a) => (a === e ? 0 : t)));
                        }
                    );
                }, [t]);
                const c = r.useCallback(
                        (e) => {
                            if (null !== s) {
                                const a = e.nativeEvent.layout.width;
                                t((e) => e.map((e, t) => (t === s ? a : e)));
                            }
                        },
                        [s, t],
                    ),
                    d = Math.max(0, ...a),
                    u = r.useMemo(() => [{ minWidth: d }, Zt.container], [d]);
                return r.createElement(n.Z, { style: u }, r.createElement(n.Z, { onLayout: c, ref: o }, e));
            }
            const It = r.createContext({
                widths: [],
                setWidths: () => {
                    throw new Error("EquiContext not initialized");
                },
            });
            function vt({ children: e }) {
                const [t, a] = r.useState([]);
                return r.createElement(It.Provider, { value: { widths: t, setWidths: a } }, e);
            }
            const Zt = u.default.create((e) => ({ container: { alignItems: "center", justifyContent: "center" } })),
                wt = p().ca25ebae,
                Pt = p().e749753a,
                St = p().c602f5b8,
                Mt = p().ea885dec,
                kt = p().cde48000,
                At = { spread: Pt, total: St, money_line: Mt };
            function xt({ bettingOdds: { participant_odds: e, url: t } }) {
                const a = ["spread", "total", "money_line"].filter((t) => e.every((e) => e[t])),
                    o = r.useMemo(() => [Ft.table, { gridTemplateColumns: `minmax(max-content, 1fr) repeat(${a.length}, max-content)` }], [a.length]),
                    l = e.map(({ betting_participant: e, ...t }) => ({ participant: e, tableData: a.map((e) => (0, yt.XY)(t[e])) })),
                    { scribeClickHandler: i } = (function () {
                        const e = (0, _t.Z)();
                        (0, ft.q)(() => {
                            e.scribe({ component: Rt, action: "impression" });
                        });
                        const t = r.useCallback(() => {
                            e.scribe({ component: Rt, action: "click" });
                        }, [e]);
                        return { scribeClickHandler: t };
                    })();
                return r.createElement(
                    bt.Z,
                    { link: t, onClick: i, style: Ft.container },
                    r.createElement(
                        n.Z,
                        { style: o },
                        r.createElement(n.Z, { style: Ft.flexAlign }, r.createElement(s.ZP, { weight: "bold" }, wt), r.createElement(Tt, null)),
                        a.map((e, t) => {
                            const a = At[e];
                            return a ? r.createElement(n.Z, { key: a }, r.createElement(s.ZP, { align: "center", color: "gray700", size: "subtext1" }, a)) : r.createElement(n.Z, { key: t });
                        }),
                        l.map(({ participant: { id: e, media_url: t, name: a }, tableData: o }) =>
                            r.createElement(
                                r.Fragment,
                                { key: e },
                                r.createElement(n.Z, { style: Ft.nameColumn }, t && r.createElement(c.Z, { source: t, style: Ft.teamLogo }), a ? r.createElement(s.ZP, { color: "gray900", numberOfLines: 1, style: Ft.teamName }, a) : null),
                                r.createElement(
                                    vt,
                                    null,
                                    o.map(({ subtitle: e, title: t }, a) => r.createElement(n.Z, { key: a, style: Ft.tableCell }, r.createElement(Ct, null, e ? r.createElement(s.ZP, { align: "center", color: "gray900", numberOfLines: 1, size: "subtext1" }, t) : r.createElement(s.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, t), e && r.createElement(s.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, e)))),
                                ),
                            ),
                        ),
                    ),
                    r.createElement(n.Z, { style: Ft.footer }, r.createElement(s.ZP, { color: "gray900", size: "subtext3" }, kt)),
                );
            }
            function Tt() {
                return r.createElement(c.Z, { "aria-label": "BetMGM", source: u.default.theme.paletteName === gt.default.ThemePaletteNames.light ? Et : Dt, style: Ft.inlineImage });
            }
            const Rt = "bet_mgm_odds";
            const Ft = u.default.create((e) => ({ container: { marginTop: e.spaces.space16 }, table: { display: "grid", gridColumnGap: e.spaces.space2, gridRowGap: e.spaces.space2, marginTop: e.spaces.space4, overflowX: "auto", overflowY: "hidden" }, tableRow: { marginBottom: e.spaces.space4, marginTop: e.spaces.space4 }, nameColumn: { flexDirection: "row", alignItems: "center" }, tableCell: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.small, alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space4 }, footer: { marginTop: e.spaces.space8, alignItems: "end" }, inlineImage: { height: e.lineHeights.body, aspectRatio: "133 / 36", marginStart: e.spaces.space2 }, flexAlign: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1 } }));
            p().f2382014, p().g66c8348;
            class Ot extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._enableMultiVideo = this.context.featureSwitches.isTrue("live_event_multi_video_enabled")),
                        (this._enableDocking = this.context.featureSwitches.isTrue("live_event_docking_enabled")),
                        (this.state = { headerWidth: 0 }),
                        (this._getSelectedItemIndex = (e, t) => (0, $.Z)(e, (e) => e.id === t)),
                        (this._setSelectedCarouselIndex = (e) => {
                            const { carousel: t, setSelectedCarouselItem: a } = this.props,
                                r = t && t[e];
                            r && a(r);
                        });
                }
                render() {
                    const { selectedCarouselItem: e } = this.props;
                    return r.createElement(r.Fragment, null, e && this._renderHeaderMedia(e), this._renderDescription(e), r.createElement(l.Z, null));
                }
                _renderDescription(e) {
                    const {
                            bettingOdds: t,
                            isTOO: a,
                            liveEventDetails: { author: o, category: l, description: s, descriptionEntities: i, timeString: c, title: d },
                        } = this.props,
                        u = e?.mediaDetails?.coverTweet,
                        m = e?.mediaDetails?.coverMedia,
                        p = e?.slate?.imageAttribution;
                    return r.createElement(n.Z, { style: Lt.contentContainer }, d ? r.createElement(q.Z, { author: o, coverTweet: u, description: s, descriptionEntities: i, imageAttribution: p, isTOO: a, mediaType: m?.type, preTitle: a || !o ? l : "", remindMeButton: this._renderRemindMeButton(), time: c, title: d, withHashflags: !0 }) : null, this._renderScoreCard(), t ? r.createElement(xt, { bettingOdds: t }) : null, this._enableMultiVideo && e ? this._renderCarousel(e) : null);
                }
                _renderHeaderMedia(e) {
                    const {
                            carousel: t,
                            disableFullscreenVideo: a,
                            history: n,
                            isPlayerFullscreen: o,
                            liveEventDetails: { eventId: l, title: s },
                            onChildScribeAction: i,
                            onFullscreenChange: c,
                        } = this.props,
                        { carouselItemInfo: d, mediaDetails: u, slate: m } = e,
                        { type: p } = d,
                        h = this._getDockingEnabled(p);
                    return r.createElement(ht, { carousel: t, carouselItemInfo: d, disableFullscreenVideo: a, eventId: l, history: n, isDockingEnabled: h, isPlayerFullscreen: o, mediaDetails: u, mediaType: p, onChildScribeAction: i, onFullscreenChange: c, selectedItemIndex: this._getSelectedItemIndex(t || [], e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex, slate: m, title: s });
                }
                _renderRemindMeButton() {
                    const {
                            liveEventDetails: { eventId: e, remindMeSubscription: t },
                            onChildScribeAction: a,
                            remindMeButtonSubscribe: n,
                            remindMeButtonUnsubscribe: o,
                        } = this.props,
                        l = !!this.context.viewerUserId,
                        { toggle_visible: s } = t || {};
                    return l && s && t && n && o ? r.createElement(Y.Z, { eventId: e, onPress: t.subscribed ? o : n, onRemindButtonScribe: a, remindMeSubscription: t }) : null;
                }
                _renderScoreCard() {
                    const { scoreData: e, withScoreCard: t } = this.props;
                    return e && t ? r.createElement(X.Z, { scoreData: e }) : null;
                }
                _renderCarousel(e) {
                    const { carousel: t, onChildScribeAction: a } = this.props;
                    return t ? r.createElement(nt, { carousel: t, onCarouselScribe: a, selectedItemIndex: this._getSelectedItemIndex(t, e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex }) : null;
                }
                _getDockingEnabled(e) {
                    const { isWide: t } = this.props,
                        { viewerUserId: a } = this.context,
                        r = [I.Tr.LIVE_BROADCAST, I.Tr.REPLAY_BROADCAST, I.Tr.VOD];
                    return !!a && this._enableDocking && t && r.includes(e);
                }
            }
            Ot.contextType = k.rC;
            const Lt = u.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
            var Bt = a(769471),
                Nt = a(962741),
                Ut = a(335632);
            const Ht = p().abdcd68a,
                Vt = p().cfb57adb,
                zt = p().b1037710,
                Wt = p().bb980db0,
                jt = p().e9f1fbcc,
                Gt = p().a3b80be6,
                Kt = p().ffd929c1,
                $t = { section: "shop_tab", component: "product_grid" },
                qt = () => r.createElement(o.Z, { header: jt, message: Gt });
            class Yt extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { selectedCarouselItemId: void 0 }),
                        (this._render = () => {
                            const { history: e, interstitialOrderToDisplay: t, onInterstitialSubmit: a } = this.props,
                                n = (0, f.cu)(e);
                            return this._refreshControlWrapper(r.createElement(D.Z, { interstitials: t, onInterstitialSubmit: a }, (e) => r.createElement(r.Fragment, null, n ? null : this._renderHeader(), this._renderInlineCompose(), e || this._renderTimeline())));
                        }),
                        (this._getComposeTimelineDetails = () => this.props.timelineDetails.composeDetails),
                        (this._setSelectedCarouselItem = (e) => {
                            const { onSelectedCarouselItemChange: t } = this.props;
                            t && t(e), this.setState({ selectedCarouselItemId: e.id });
                        }),
                        (this._handleInlineComposeOnClick = (e) => {
                            e.preventDefault();
                            const { history: t } = this.props,
                                a = { pathname: "/compose/post", state: this._getComposeTimelineDetails() };
                            t.push(a);
                        }),
                        (this._getTimelineModuleMemoized = (0, h.Z)((e, t) => (0, P.Z)(e, t))),
                        (this._getLiveCommerceItemsSliceModuleMemoized = (0, h.Z)((e) => (0, Z.Z)(e)));
                    const { timelineMessageOverride: a, withTweetActionsDisabled: n } = e;
                    (this._entryConfiguration = (({ withTweetActionsDisabled: e }) => ({ ...(0, Ut.G)({ withTweetActionsDisabled: e }) }))({ withTweetActionsDisabled: n })),
                        (this._timelinePreprocessor = ((e) => (t) =>
                            e
                                ? t.map((t) => {
                                      if (t.type === Nt.ZP.Message) {
                                          const a = { content: { content: { inlinePrompt: { headerText: e } } } };
                                          return (0, Bt.Z)({}, t, a);
                                      }
                                      return t;
                                  })
                                : t)(a));
                }
                render() {
                    const { fetchStatus: e, liveEventDetails: t, onFetch: a } = this.props;
                    return r.createElement(_.Z, { "aria-label": Ht, fetchStatus: e, key: t.eventId, onRequestRetry: a, render: this._render });
                }
                _renderHeader() {
                    const {
                            bettingOdds: e,
                            carousel: t,
                            disableFullscreenVideo: a,
                            history: n,
                            isPlayerFullscreen: o,
                            isTOO: l,
                            isWide: s,
                            liveEventDetails: i,
                            onChildScribeAction: c,
                            onFullscreenChange: d,
                            remindMeButtonSubscribe: u,
                            remindMeButtonUnsubscribe: m,
                            scoreData: p,
                            timelineDetails: { hashtag: h },
                        } = this.props,
                        { selectedCarouselItemId: b } = this.state,
                        g = (0, I.to)(t, b);
                    return r.createElement(Ot, { bettingOdds: e, carousel: t, disableFullscreenVideo: a, history: n, isPlayerFullscreen: o, isTOO: l, isWide: s, liveEventDetails: i, onChildScribeAction: c, onFullscreenChange: d, remindMeButtonSubscribe: u, remindMeButtonUnsubscribe: m, scoreData: p, selectedCarouselItem: g, setSelectedCarouselItem: this._setSelectedCarouselItem, timelineHashtag: h, withScoreCard: !s });
                }
                _renderInlineCompose() {
                    const {
                            isWide: e,
                            timelineDetails: { hashtag: t },
                        } = this.props,
                        a = t ? Vt({ hashtag: t }) : zt;
                    return e ? r.createElement(r.Fragment, null, r.createElement(K, { onClick: this._handleInlineComposeOnClick, promptLabel: a }), r.createElement(l.Z, null)) : null;
                }
                _renderTimeline() {
                    const {
                            timelineDetails: { timelineId: e },
                        } = this.props,
                        t = this._renderTimelineLinks(),
                        a = e === I.BG.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline();
                    return t.length > 1 || (1 === t.length && t[0].isCustom) ? r.createElement(r.Fragment, null, r.createElement(C.Z, { "aria-label": Wt, links: t.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }), r.createElement(n.Z, { style: Xt.timelineContainer }, a)) : a;
                }
                _renderTimelineLinks() {
                    const {
                        timelineDetails: { timelineLinks: e },
                    } = this.props;
                    return e.map(({ customizationInfo: e, label: t, labelType: a, ...n }) => {
                        const o = !(0, b.Z)(e),
                            l = this._renderTimelineLabelAnnotation(a);
                        return { ...n, key: t, label: o && e ? this._renderCustomLabel({ label: t, customizationInfo: e, labelAnnotation: l }) : r.createElement(s.ZP, { weight: "bold" }, t, l), isCustom: o };
                    });
                }
                _renderTimelineLabelAnnotation(e) {
                    return e === I.AJ.New ? r.createElement(i.ZP, { background: "primary", bold: !0, style: Xt.labelAnnotation }, Kt({ ttc_live_event: "" })) : null;
                }
                _renderCustomLabel({ customizationInfo: { badge_media: e, title_color: t }, label: a, labelAnnotation: o }) {
                    return r.createElement(n.Z, { style: Xt.timelineLabel }, e && e.url ? r.createElement(c.Z, { source: e.url, style: Xt.timelineLabelBadge }) : null, r.createElement(s.ZP, { style: { color: t }, weight: "bold" }, a, o));
                }
                _renderRichTimeline() {
                    const {
                            isPlayerFullscreen: e,
                            isWide: t,
                            liveEventDetails: { title: a = Wt },
                            onTimelinePoll: n,
                            pollingIntervalMs: o,
                            timelineDetails: { eventId: l, timelineId: s },
                            withFloatingComposeButton: i,
                        } = this.props,
                        c = this._getTimelineModuleMemoized(l, s),
                        u = !e && !t && i ? this._renderFloatingComposeButton() : null;
                    return r.createElement(y.Z, { component: d.Z, fab: u }, r.createElement(T.Z, { anchoring: E.Z, entryConfiguration: this._entryConfiguration, module: c, onTimelinePoll: n, pollingIntervalMsOverride: o, preprocessEntryList: this._timelinePreprocessor, prerollDisplayLocation: w.Nw.OTHER, refreshControl: null, renderEmptyState: qt, title: a }));
                }
                _renderCommerceItemSliceTimeline() {
                    const {
                            timelineDetails: { eventId: e },
                        } = this.props,
                        t = this._getLiveCommerceItemsSliceModuleMemoized(e);
                    return r.createElement(v.nO, { namespace: $t }, r.createElement(M.Z, { module: t }));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return r.createElement(A.Z, { getLocationState: this._getComposeTimelineDetails, history: e });
                }
                _refreshControlWrapper(e) {
                    const { onFetch: t, refreshStatus: a } = this.props;
                    return r.createElement(x.Z, { isRefreshing: a === S.ZP.LOADING, onRefresh: t }, e);
                }
            }
            (Yt.contextType = k.rC), (Yt.defaultProps = { onChildScribeAction: g.Z });
            const Xt = u.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineLabelBadge: { borderRadius: e.borderRadii.infinite, height: e.lineHeights.body, marginEnd: e.spaces.space4, width: e.lineHeights.body }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 } }));
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(500002),
                o = a(668214),
                l = a(997174),
                s = a(118823);
            const i = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: l },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const c = n || s;
                    ((c && n !== s) || (!c && a !== o) || r !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(i(c));
        },
        144256: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(807896),
                n = a(202784),
                o = a(149202),
                l = a(725516);
            class s extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                a = e.contextualScribeNamespace;
                            t(), a && a.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: a, ...l } = this.props;
                    return n.createElement(o.Z, (0, r.Z)({}, l, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const i = (0, l.Z)(s);
        },
        26232: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                n = a(555874),
                o = a(674132),
                l = a.n(o),
                s = a(290402),
                i = a(965245),
                c = a(71620),
                d = a(668214);
            const u = (e, { module: t }) => t.selectFetchStatus(e),
                m = (e, { module: t }) => t.selectItems(e),
                p = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: m }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = l().i9028824,
                b = (e) => e,
                g = (e) => (t) => e(t.item);
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: a, numColumns: o, onScrollEnd: l, renderer: s, withoutHeadroom: c } = this.props;
                            return !t || o < 1 ? null : 1 === o ? r.createElement(i.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: b, items: t, noItemsRenderer: a, onNearEnd: this._handleNearEnd, onScrollEnd: l, renderer: s, withoutHeadroom: c }) : r.createElement(n.Z, { ListEmptyComponent: a, data: t, keyExtractor: b, numColumns: o, renderItem: g(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: a, fetchIfNeeded: r } = this.props;
                            (e ? a : r)().catch(t());
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
                    const { fetchStatus: e, module: t, retryMessage: a } = this.props;
                    return t ? r.createElement(s.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: a, retryable: !0 }) : null;
                }
            }
            f.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const y = p(f);
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => x });
            var r = a(202784),
                n = a(576648),
                o = a(325686),
                l = a(154003),
                s = a(138099),
                i = a(731708),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(652255),
                p = a(376180),
                h = a(502940),
                b = a(70962),
                g = a(933340),
                f = a(321264),
                y = a(208340),
                _ = a(707305),
                D = a(748138),
                E = a(837020),
                C = a(125363),
                I = a(601576),
                v = a(919022);
            const Z = u().ia5e7488,
                w = { label: Z },
                P = u().j33d8902,
                S = { label: P },
                M = u().a8ab3d08,
                k = u().d740d2d9,
                A = { bandcamp_handle: { icon: r.createElement(m.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(p.default, null), label: u().d876e67e }, cash_app_handle: { icon: r.createElement(h.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(b.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: r.createElement(g.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(f.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(y.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(_.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function x({ style: e, userId: t }) {
                const a = (0, C.I0)(),
                    [c, d] = r.useState(!1),
                    u = (0, C.v9)((e) => v.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: m } = u;
                if (!m) return null;
                const { is_enabled: p, ...h } = m;
                if (!1 === p || !Object.keys(h).length) return null;
                function b() {
                    d(!1);
                }
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(l.ZP, {
                        "aria-label": P,
                        hoverLabel: S,
                        icon: r.createElement(D.default, null),
                        onPress: function () {
                            d((e) => !e);
                        },
                        style: e,
                    }),
                    c
                        ? r.createElement(
                              s.Z,
                              { onMaskClick: b, style: T.sheet, type: "bottom", withMask: !0 },
                              r.createElement(l.ZP, { "aria-label": Z, hoverLabel: w, icon: r.createElement(E.default, null), onPress: b, style: T.close, type: "primaryText" }),
                              r.createElement(o.Z, { style: T.header }, r.createElement(i.ZP, { weight: "bold" }, M), r.createElement(i.ZP, null, `@${u.screen_name}`)),
                              Object.entries(h)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = A[e];
                                      if (o) {
                                          const l = o.url
                                                  ? void 0
                                                  : function () {
                                                        n.Z.setString(String(t)), a((0, I.fz)({ text: k({ service: o.label }) }));
                                                    },
                                              s = o.url ? `${o.url}${String(t)}` : void 0;
                                          return r.createElement(i.ZP, { color: "text", key: e, link: s, onPress: l, style: T.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const T = c.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        180401: (e, t, a) => {
            a.d(t, { Z: () => B });
            var r = a(202784),
                n = a(325686),
                o = a(457311),
                l = a(731708),
                s = a(392237),
                i = a(674132),
                c = a.n(i),
                d = a(791632),
                u = a(290402),
                m = a(373981),
                p = a(507651),
                h = a(703738),
                b = a(293115),
                g = a(125363),
                f = a(519896),
                y = a(390387),
                _ = a(383675),
                D = a(312771),
                E = a(144256),
                C = a(810641),
                I = a(67369),
                v = a(966886),
                Z = a(766661),
                w = a(420412),
                P = a(971372),
                S = a(443781);
            c().f2382014, c().g66c8348, c().d7071084;
            const M = c().ee2200f4,
                k = s.default.create((e) => ({ title: { alignItems: "center", flexDirection: "row", paddingTop: e.spaces.space4 }, contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical }, disclaimer: { marginTop: e.spaces.space12 }, disclaimerNarrow: { marginTop: e.spaces.space8, marginHorizontal: e.spaces.space4 }, timestamp: { marginTop: e.spaces.space8 } })),
                A = ({ disclaimer: e, trendId: t, trendPrompt: a, title: o, lastUpdatedAt: s, article: i = {}, isWide: d, birdwatchPivot: u }) => {
                    const { text: m, textEntities: p } = i,
                        { featureSwitches: h } = r.useContext(S.rC),
                        b = (0, I.yu)(),
                        g = () => r.createElement(r.Fragment, null, r.createElement(l.ZP, { dir: "auto", size: "title4", style: k.title, weight: "heavy" }, o), s && f(), m ? r.createElement(P.Z, { description: m, descriptionEntities: p }) : null),
                        f = () => {
                            if (!s) return r.createElement(r.Fragment, null);
                            const e = { lastUpdatedElement: r.createElement(v.Z, { humanReadable: !0, timestamp: s }) };
                            return r.createElement(l.ZP, { color: "gray700", size: "subtext2", style: b ? k.disclaimerNarrow : k.timestamp }, r.createElement(c().I18NFormatMessage, { $i18n: "gd67df1d" }, e.lastUpdatedElement));
                        };
                    return r.createElement(r.Fragment, null, r.createElement(n.Z, { style: k.contentContainer }, g(), r.createElement(l.ZP, { align: "left", color: "gray700", size: "subtext2", style: b ? k.disclaimerNarrow : k.disclaimer }, e || M), h.isTrue("responsive_web_trends_ui_community_notes_enabled") && u ? r.createElement(Z.Z, u) : null), r.createElement(w.Z, null));
                },
                x = c().i6212670,
                T = c().c6a07c10,
                R = c().e9f1fbcc,
                F = c().a3b80be6,
                O = c().b0c91a92,
                L = () => r.createElement(o.Z, { header: R, message: F }),
                B = ({ birdwatchPivot: e, disclaimer: t, fetchStatus: a, history: o, id: s, isWide: i, lastUpdatedAt: c, onFetch: I, onTimelinePoll: v, pollingIntervalMs: Z, refreshStatus: w, timelineDetails: P, title: S, trendArticle: M, trendPrompt: k }) => {
                    const R = ((F = P?.timelineId), r.useMemo(() => F && (0, _.R)(F, !1), [F]));
                    var F;
                    const B = (0, g.v9)(y.Qb),
                        U = (0, h.z)(),
                        H = () => (P?.timelineLinks || []).map(({ label: e, ...t }) => ({ ...t, key: e, label: r.createElement(l.ZP, { weight: "bold" }, e), isCustom: !1 })),
                        V = () => {
                            const e = { page: "ai_trend" };
                            if (R) return r.createElement(b.nO, { namespace: e }, r.createElement(C.Z, { anchoring: m.Z, module: R, onTimelinePoll: v, pollingIntervalMsOverride: Z, prerollDisplayLocation: f.Nw.OTHER, refreshControl: null, renderEmptyState: L, title: S }));
                        },
                        z = () => {
                            const e = H();
                            return r.createElement(n.Z, { style: [N.loggedOutCalloutContainer, U && N.withHorizontalMargin] }, ((e) => r.createElement(p.Z, { "aria-label": T, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }))(e), r.createElement(n.Z, { style: N.loggedOutCalloutContent }, r.createElement(l.ZP, { dir: "auto", size: "subtext1", weight: "bold", withHashflags: !1 }, O)));
                        };
                    return r.createElement(u.Z, {
                        "aria-label": x,
                        fetchStatus: a,
                        key: s,
                        onRequestRetry: I,
                        render: () => {
                            const a = (0, d.cu)(o);
                            return (
                                (l = r.createElement(
                                    r.Fragment,
                                    null,
                                    a ? null : r.createElement(A, { article: M, birdwatchPivot: e, disclaimer: t, isWide: i, lastUpdatedAt: c, title: S, trendId: s, trendPrompt: k }),
                                    B
                                        ? (() => {
                                              const e = H(),
                                                  t = V();
                                              return e.length > 1 || (1 === e.length && e[0].isCustom) ? r.createElement(r.Fragment, null, r.createElement(p.Z, { "aria-label": T, links: e.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })), style: U && N.withHorizontalMargin }), r.createElement(n.Z, { style: N.timelineContainer }, t)) : t;
                                          })()
                                        : null,
                                    B ? null : z(),
                                )),
                                r.createElement(E.Z, { isRefreshing: w === D.ZP.LOADING, onRefresh: I }, l)
                            );
                            var l;
                        },
                    });
                },
                N = s.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 }, loggedOutCalloutContainer: { position: "relative", marginBottom: e.spaces.space4 }, loggedOutCalloutContent: { position: "absolute", top: 0, bottom: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space4, backdropFilter: "blur(10px)", zIndex: 999, minHeight: e.spaces.space24 }, withHorizontalMargin: { marginHorizontal: e.spaces.space16 } }));
        },
        720275: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(457311),
                o = a(674132),
                l = a.n(o),
                s = a(912021),
                i = a(680961),
                c = a(371493),
                d = a(810641);
            const u = l().dd225af8,
                m = () => r.createElement(n.Z, { message: u });
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedModule = (0, s.Z)((e) => (0, c.Jj)(e))),
                        (this._getModule = () => {
                            const { trendId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    return r.createElement(d.Z, { module: this._getModule(), renderUnavailable: m, scroller: i.Z, showLoadingFooter: !1, title: "Relevant people", withKeyboardShortcuts: !1 });
                }
            }
            const h = p;
        },
        703738: (e, t, a) => {
            a.d(t, { z: () => l });
            var r = a(323265),
                n = a(655352),
                o = a(952793);
            const l = () => (0, o.hC)("rweb_sourcemap_migration") && (0, n.ZP)() && !r.ZP.isMobileOS();
        },
        684511: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(202784);
            const r = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("loader.PushNotificationsPrompt"),
                    ]).then(a.bind(a, 529629)),
            });
        },
        702001: (e, t, a) => {
            a.d(t, { c: () => o });
            var r = a(516951),
                n = a(615656);
            const o = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
        860174: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(615656),
                n = a(51525);
            const o = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => o, x: () => l });
            var r = a(674132),
                n = a.n(r);
            const o = { AED: n().d857e44d, ALL: n().cb87e3db, ARS: n().a9d5ffd1, AUD: n().a0e8371d, BAM: n().gcc50dc9, BDT: n().a6a43585, BGN: n().a0cc8f2d, BHD: n().i31c32c5, BRL: n().i7dc69e9, BYR: n().c14a6c03, CAD: n().jaa3d537, CHF: n().a824080b, CLP: n().d9c0bedb, CNY: n().bf8c0613, COP: n().i8163625, CZK: n().adb53ba1, DKK: n().iabf697d, DZD: n().a1a0555b, EGP: n().f266f3d9, EUR: n().a9a8652b, GBP: n().dbf40761, GHS: n().b0d993d9, GTQ: n().ac1308e1, HKD: n().a7889ab3, HRK: n().c614f5cd, HUF: n().i55d57e3, IDR: n().e4b6002b, ILS: n().d28e983b, INR: n().e8c9232d, IQD: n().c8994ae1, ISK: n().f821c2a5, JPY: n().j348b9c9, KES: n().i6f93b9b, KRW: n().c6150bd5, KWD: n().i8921e09, KZT: n().ef239279, LBP: n().hecdb149, MAD: n().fdd039b7, MKD: n().f30c2c37, MXN: n().d9ea7bff, MYR: n().ea3df4b7, NGN: n().jaac21bb, NOK: n().hb435ced, NZD: n().ce699d81, PEN: n().bc56d3d7, PHP: n().f8561913, PKR: n().g6485d53, PLN: n().ff561cc1, QAR: n().b42011d3, RON: n().a6660bcd, RSD: n().f9b80449, RUB: n().gdee4d5d, SAR: n().h36f2103, SEK: n().a19ad037, SGD: n().g713f699, THB: n().ff2e39af, TND: n().be34316d, TRY: n().aef81b75, TWD: n().fcce70a5, TZS: n().jc9d352f, UAH: n().be1cb8c5, UGX: n().j9371501, USD: n().j7d4397d, VEF: n().d61441dd, VND: n().e2a99e97, ZAR: n().f7ce19ab, ZMW: n().b2a0213f },
                l = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: r = !1, strictAmount: n = !1 }) => {
                    const l = n ? e : parseInt(e, 10) / a,
                        i = o[t]?.(l);
                    return r ? s(i) : i;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-e019dbda.7fca47ea.js.map
