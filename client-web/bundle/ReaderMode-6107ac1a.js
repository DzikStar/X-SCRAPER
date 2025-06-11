"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconDrafts-js"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => f, Z: () => y });
            var n = o(202784),
                i = o(325686),
                s = o(392237),
                r = o(530732),
                a = o(992942),
                l = o(731708),
                c = o(154003),
                d = o(725516),
                h = o(111677),
                u = o.n(h);
            const p = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: p, lightMode: m } },
                f = Object.freeze({ MarchMadness: "MarchMadness" }),
                y = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: h, withBackgroundImage: u }) => {
                    const p = (0, d.z)(),
                        m = f[o] || "Occasion",
                        y = u ? `${m}WithBackgroundImage` : m;
                    n.useEffect(() => {
                        p.scribe({ component: y, action: "impression" });
                    }, [p, y]);
                    const v = () => {
                            p.scribe({ component: y, action: "click", element: "card" });
                        },
                        { backgroundcolor: C, buttonSize: _, cardWidth: w, marginbottom: Z, textcolor: T } = h ?? {},
                        x = C ? s.default.theme.colors[C] : s.default.theme.colors.gray0,
                        k = T ? s.default.theme.colors[T] : s.default.theme.colors.gray900,
                        E = Z ? s.default.theme.spaces[Z] : s.default.theme.spaces.space16,
                        S = { [f.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return u ? n.createElement(r.Z, { interactiveStyles: null, link: t, onPress: v, style: b.bannerContainer }, n.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === s.default.theme.paletteName ? S.image.lightMode : S.image.darkMode }, style: { height: 85 } })) : n.createElement(i.Z, { style: [b.card, { backgroundColor: x }, { maxWidth: w }, { marginBottom: E }], testID: "popupCard" }, n.createElement(i.Z, { style: e ? b.horizontalContent : b.verticalContent }, n.createElement(i.Z, { style: e ? b.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [b.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, S.header), n.createElement(l.ZP, { size: "subtext1", style: [b.popupDescription, { color: k }] }, S.description, " ", e ? null : S.legalDisclaimer)), n.createElement(i.Z, { style: b.buttonContainer }, n.createElement(c.ZP, { backgroundColor: "light" === s.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: v, size: "medium", style: [b.popupButton, { width: _ }] }, S.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [b.legalDisclaimer, { color: k }] }, S.legalDisclaimer))));
                },
                b = s.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                i = o(202784),
                s = o(182056),
                r = o(879113),
                a = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const h = c().aa6e3300,
                u = ({ retryMessage: e, ...t }, o) => {
                    const a = s.Z.isOnline();
                    return i.createElement(r.Z, (0, n.Z)({}, t, { icon: a ? void 0 : i.createElement(d.default, { style: p.icon }), retryMessage: a ? e : h }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = i.forwardRef(u);
        },
        300234: (e, t, o) => {
            o.d(t, { Z: () => U });
            var n = o(202784),
                i = o(325686),
                s = o(284702),
                r = o(174326),
                a = o(521812),
                l = o(392237),
                c = o(908478),
                d = o(516951),
                h = o(123751),
                u = o(443781);
            const p = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                g = o(386802),
                f = o(420740),
                y = o(111677),
                b = o.n(y),
                v = o(965728);
            const C = { startX: 0, startY: 0 };
            class _ extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._pullDistanceY = 0),
                        (this._pullInfo = { ...C }),
                        (this._handleTouchStart = (e) => {
                            (this._pullInfo.startX = e.touches[0].clientX), (this._pullInfo.startY = e.touches[0].clientY);
                        }),
                        (this._handleTouchMove = (e) => {
                            if ("number" != typeof this._pullInfo.startX || "number" != typeof this._pullInfo.startY) return;
                            const t = e.touches[0],
                                o = t.clientX - this._pullInfo.startX,
                                n = t.clientY - this._pullInfo.startY;
                            Math.abs(o) > 10 || (e.preventDefault(), this._updatePullPosition(n));
                        }),
                        (this._handleTouchEnd = (e) => {
                            Math.abs(this._pullDistanceY) > 50 ? this._handleDismiss() : this._resetPullInfo();
                        }),
                        (this._updatePullPosition = (e) => {
                            this._pullDistanceY = e;
                        }),
                        (this._handleDismiss = () => {
                            const { onDismiss: e } = this.props;
                            e && e(), this._resetPullInfo();
                        }),
                        (this._resetPullInfo = () => {
                            this._updatePullPosition(0), (this._pullInfo = { ...C });
                        });
                }
                render() {
                    const { children: e, onDismiss: t, onLayout: o, style: s } = this.props,
                        r = !!t;
                    return n.createElement(i.Z, { onLayout: o, onTouchEnd: r ? this._handleTouchEnd : void 0, onTouchMove: r ? this._handleTouchMove : void 0, onTouchStart: r ? this._handleTouchStart : void 0, style: s, testID: "swipe-to-dismiss" }, e);
                }
            }
            const w = _;
            var Z = o(992942),
                T = o(7022),
                x = o(309854),
                k = o(351686),
                E = o(822399);
            const S = b().b327c12a,
                P = b().gff1f69e;
            class I extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this.state = { loadingVariant: null, imageLoading: !1 }), (this._handleLoadStart = () => this.setState({ imageLoading: !0 })), (this._handleLoadEnd = () => this.setState({ imageLoading: !1 }));
                }
                componentDidMount() {
                    this._mountPromiseForTesting = I._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e }));
                }
                componentDidUpdate(e, t) {
                    (0, c.Z)(e.photo, this.props.photo) || (this.setState({ loadingVariant: null }), I._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e })));
                }
                render() {
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: s, onTap: r, onZoomed: a, photo: l, resetZoom: c, style: d, zoomable: h } = this.props,
                        { loadingVariant: u } = this.state,
                        p = (e && u && Math.max(u.width, u.height) >= 680 ? u.uri : null) || I._selectSource(l);
                    if (!p || null === u) return null;
                    const m = n.createElement(Z.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : S, defaultSource: u && u.uri, draggable: !0, onError: u ? void 0 : o, onLoad: s, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: p, style: [D.img, t] });
                    return n.createElement(i.Z, { style: d }, this.state.imageLoading ? M : null, h ? n.createElement(T.Z, { onTap: r, onZoomed: a, resetZoom: c }, m) : m);
                }
                static _selectCachedVariant(e) {
                    const t = x.Z.getOriginalImage(e);
                    return t ? k.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = x.Z.getOriginalImage(e);
                    return t && k.Z.selectLargestUrl(t);
                }
            }
            I.defaultProps = { zoomable: !1 };
            const D = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                M = n.createElement(E.Z, { ariaValueText: P, indeterminate: !0, style: D.progressBar }),
                z = I;
            var R = o(310453);
            class B extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePlaybackStarted = () => {
                            this._player && !this.props.isCurrentlyDisplayed && this._player.pause();
                        }),
                        (this._setPlayer = (e) => {
                            (this._player = e), this._player && this.props.isCurrentlyDisplayed && this._player.play();
                        });
                }
                render() {
                    const { style: e } = this.props;
                    return n.createElement(i.Z, { style: e }, n.createElement(i.Z, { style: F.root }, this._renderVideo()));
                }
                componentDidUpdate(e) {
                    const { isCurrentlyDisplayed: t } = this.props;
                    this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause());
                }
                _renderVideo() {
                    const { promotedContent: e, video: t, videoId: o } = this.props,
                        [i, r] = t.video_info.aspect_ratio,
                        a = s.Z.extractVideoProps(o, t);
                    return (a.aspectRatio = i / r), n.createElement(R.Z, (0, m.Z)({}, a, { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: e, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const F = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                L = B,
                A = b().ac85c6b2,
                V = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: c, promotedContent: d, videoId: h, ...u } = e,
                        [p, y] = n.useState(null),
                        [b, C] = n.useState({ width: 0, height: 0 }),
                        { isModal: _ } = n.useContext(g.Z),
                        { height: Z, width: T } = a.original_info || {},
                        { height: x, width: k } = b,
                        E = _ || o ? (0, v.I5)({ mediaWidth: T, mediaHeight: Z, containerWidth: k, containerHeight: x }, o) : W.mediaItem;
                    return n.createElement(
                        w,
                        {
                            onDismiss: l,
                            onLayout:
                                _ || o
                                    ? (e) => {
                                          const {
                                              nativeEvent: {
                                                  layout: { height: t, width: o },
                                              },
                                          } = e;
                                          (o === b.width && t === b.height) || C({ width: o, height: t });
                                      }
                                    : void 0,
                            style: W.root,
                        },
                        p
                            ? n.createElement(f.Z, {
                                  onRetry: () => {
                                      y(null);
                                  },
                                  style: W.errorDetail,
                                  title: A,
                                  withLightOnDarkColorScheme: !0,
                              })
                            : null,
                        p
                            ? null
                            : n.createElement(
                                  i.Z,
                                  {
                                      onClick: (e) => {
                                          e.stopPropagation();
                                      },
                                      style: E,
                                  },
                                  "photo" === a.type
                                      ? n.createElement(
                                            z,
                                            (0, m.Z)({}, u, {
                                                imageStyle: o && !t && W.avatarImage,
                                                onError: (e) => {
                                                    y(e.nativeEvent.error);
                                                },
                                                onLoad: () => {
                                                    y(null);
                                                },
                                                onTap: c,
                                                photo: a,
                                                style: W.container,
                                                zoomable: !0,
                                            }),
                                        )
                                      : s.Z.isVideo(a) && h
                                        ? n.createElement(L, { isCurrentlyDisplayed: r, promotedContent: d, style: W.container, video: a, videoId: h })
                                        : null,
                              ),
                    );
                },
                W = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                O = n.memo(V, (e, t) => (0, c.Z)(e, t));
            class H extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getV2Key = () => {
                            const { mediaItems: e } = this.props;
                            if (e.length) {
                                const [t] = e,
                                    o = t.expanded_url;
                                if ("string" == typeof o) {
                                    const e = o.split("/");
                                    if (e.length >= 4) return e[3];
                                }
                            }
                        }),
                        (this._handleChangeV2 = ({ index: e, intersectionRatio: t }) => {
                            const { onMediaItemChanged: o } = this.props;
                            1 === t && o && o(e);
                        }),
                        (this._getItemVideoId = (e) => {
                            const { videoId: t } = this.props;
                            if (t) return t;
                            if ("string" == typeof e.expanded_url) {
                                const t = e.expanded_url.split("/");
                                return h.Z.forTweet(t[3]);
                            }
                        }),
                        (this._handleMediaDetailZoomed = (e) => {
                            const { onMediaDetailZoomed: t } = this.props;
                            this.state.isZoomed !== e && this.setState({ isZoomed: e }), t && t(e);
                        }),
                        (this.state = { isZoomed: !1 });
                }
                shouldComponentUpdate(e, t) {
                    return !(0, c.Z)(e, this.props) || !(0, c.Z)(t, this.state);
                }
                componentDidMount() {
                    this._scribeImpression();
                }
                componentDidUpdate() {
                    this._scribeImpression();
                }
                _scribeImpression() {
                    this.context.featureSwitches.isTrue("responsive_web_scribe_media_component") && this.props.analytics.scribe({ element: "photo", action: "show" });
                }
                render() {
                    const { businessAvatar: e, dataSaver: t, mediaIndex: o, mediaItems: r, onDismiss: a, onTap: l, promotedContent: c } = this.props,
                        { isZoomed: d } = this.state,
                        h = r.map((i, h) => {
                            const u = s.Z.isVideo(i),
                                p = this._getItemVideoId(i),
                                m = o === h;
                            return u && !p ? null : n.createElement(O, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: h, mediaDetail: r[h], onDismiss: d ? void 0 : a, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: c, resetZoom: o !== h, videoId: p });
                        });
                    return n.createElement(i.Z, { style: N.root }, r.length > 1 ? this._renderCarousel(h) : h);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: c } = this.state,
                        d = s.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [N.dimensions, N.scrollSnap], dominantButtonColor: t, isLocked: c, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: N.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !d, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: c, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (H.contextType = u.rC), (H.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: d.Z, onMediaItemChanged: d.Z });
            const N = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                U = p(H);
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                i = o(325686),
                s = o(108362),
                r = o(530732),
                a = o(154003),
                l = o(386802),
                c = o(392237),
                d = o(111677),
                h = o.n(d),
                u = o(837020),
                p = o(254944),
                m = o(965728),
                g = o(979512);
            const f = h().ia5e7488,
                y = h().ic76bdf0;
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._openGrok = async () => {}),
                        (this._handleCloseButtonPress = (e) => {
                            e.stopPropagation();
                            const { onCloseButtonPress: t } = this.props;
                            t();
                        }),
                        (this._handleBackgroundPress = () => {
                            const { onCloseButtonPress: e } = this.props,
                                { isModal: t } = this.context;
                            t && e();
                        });
                }
                render() {
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: h, mediaUrl: g, overlayFooter: b, topRightButton: _ } = this.props,
                        { isModal: w } = this.context,
                        Z = { backgroundColor: e.rgba, ...m.nk },
                        T = { backgroundColor: e.rgb, ...m.nk },
                        x = [v.root, w ? Z : T, { position: w || c ? "relative" : "fixed" }],
                        k = h,
                        E = k?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: x }, t, o ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [v.footerButtons, b && Z, b && v.footerButtonsAbsolute, d && v.fadeOut] }, n.createElement(s.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [v.buttonWrapper, v.buttonWrapperLeft, m.nk, d && v.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": f, dominantColor: e.rgb, hoverLabel: { label: f }, icon: n.createElement(u.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: h || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        _ ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [v.buttonWrapper, v.buttonWrapperRight, m.nk, d && v.fadeOut] }, _) : null,
                        E
                            ? n.createElement(
                                  i.Z,
                                  { style: [v.buttonWrapperBottomCenter, m.nk, d && v.fadeOut] },
                                  n.createElement(
                                      a.ZP,
                                      {
                                          icon: n.createElement(p.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: E.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      y,
                                  ),
                                  n.createElement(C, {
                                      onOpenGrokUpdate: (e) => {
                                          this._openGrok = e;
                                      },
                                  }),
                              )
                            : null,
                    );
                }
            }
            (b.contextType = l.Z), (b.defaultProps = { hideButtons: !1 });
            const v = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
                C = ({ onOpenGrokUpdate: e }) => {
                    const { openGrok: t } = (0, g.Z)();
                    return (
                        n.useEffect(() => {
                            e(t);
                        }, [e, t]),
                        null
                    );
                };
        },
        349035: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(272175);
            const s = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(i.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(420740),
                s = o(111677);
            const r = o.n(s)().b2311b70;
            function a() {
                return n.createElement(i.Z, { onRetry: null, title: r });
            }
            const l = n.memo(a);
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => c });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const i = (e, t, o) => {
                    const n = e(t),
                        i = e(o);
                    return !n && i ? -1 : n && !i ? 1 : 0;
                },
                s = (e, t, o) => r(e(o), e(t)),
                r = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                a = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        r = (e) => e && e.doesIntersectWith(o),
                        l = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        d =
                            c.length > 0
                                ? a(c, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          a = t.getForItem(o.id);
                                      return i(r, n, a) || s(l, n, a);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: o, distanceToViewportTop: n, id: i } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(i).getTop() - t;
                        }
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getBottom() + o;
                            return e.getForItem(i).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            o = e.getForViewport().getBottom();
                        return Math.max(0, o - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !n(e))
                            .map(({ id: e, rectangle: o }) => ({ id: e, distanceToViewportTop: o.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const o = l({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        785765: (e, t, o) => {
            o.d(t, { ZP: () => r });
            var n = o(202784),
                i = o(725516);
            function s() {
                const e = (0, i.z)();
                return (
                    n.useEffect(() => {
                        let t = 0;
                        const o = setInterval(() => {
                            t < 8 ? ("visible" === document.visibilityState && e.scribe({ action: "impression", component: "article" }), (t += 1)) : clearInterval(o);
                        }, 3e4);
                        return () => clearInterval(o);
                    }, [e]),
                    null
                );
            }
            const r = n.memo(s);
        },
        890882: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(443781);
            const s = (e) => {
                const { featureSwitches: t, userClaims: o } = n.useContext(i.rC),
                    s = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    r = o.isAnyPremiumSubscriber(),
                    { text: a } = e;
                return r && s ? n.createElement(n.Fragment, null, a) : a;
            };
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                i = o(420740),
                s = o(108362),
                r = o(731708),
                a = o(154003),
                l = o(392237),
                c = o(111677),
                d = o.n(c),
                h = o(349035);
            const u = "error-detail",
                p = d().e49537c2,
                m = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(i.Z, { testID: u }, n.createElement(h.Z, null), n.createElement(s.Z, { style: f.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: f.retryText }, p), n.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const f = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(500002),
                s = o(668214),
                r = o(997174),
                a = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: s, search: r },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = i || a;
                    ((c && i !== a) || (!c && o !== s) || n !== r || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(l(c));
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => E });
            var n = o(662678),
                i = o(769471),
                s = o(337637),
                r = o(459679),
                a = o(192337),
                l = o(962741),
                c = o(372703),
                d = o(466015),
                h = o(267483),
                u = o(263863),
                p = o(351322),
                m = o(37533),
                g = o(777809),
                f = o(652815),
                y = o(560520),
                b = o(367991),
                v = o(705638),
                C = o(801184),
                _ = o(335632);
            const w = "FocalTweetInlineTombstone",
                Z = "More Replies";
            let T;
            const x = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                k = { ...(0, _.G)({}), [l.ZP.Tweet]: (0, v.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                E = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: s, replyDropdownSelection: r, rootTweetAuthorId: a, tweetTextSize: d, withFocalTweetMedia: v, withRuxInjections: _ }) =>
                    (0, i.Z)({}, k, {
                        [l.ZP.SelfThreadTweetComposer]: f.Z,
                        [l.ZP.Tweet]: {
                            handlers: {
                                [u.Z.Tweet]: (0, C.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            i = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = i),
                                            (n.rootTweetAuthorId = a),
                                            o &&
                                                (n.onTweetDismiss = () => {
                                                    t({ entry: e, feedbackKeys: [c.qt] });
                                                }),
                                            n
                                        );
                                    },
                                    dismissable: !0,
                                    hideReplyContextMode: t,
                                    withMuteConversation: !0,
                                }),
                                [u.Z.FocalTweet]: (0, C.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: i, hasModeratedReplies: s },
                                                conversationPosition: l,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: h, promotedContent: u, socialContext: p, topicFollowPrompt: m } = d || {};
                                        return {
                                            contextTweetId: h,
                                            conversationAnnotation: i,
                                            hasModeratedReplies: !!(s && l && l.isStart),
                                            promotedContent: u,
                                            rootTweetAuthorId: a,
                                            socialContext: p,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: v,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [c.qt] });
                                                      },
                                                  }
                                                : {}),
                                            changeDropdownState: e,
                                            replyDropdownSelection: r,
                                        };
                                    },
                                    dismissable: !0,
                                    divider: (e) => ({ top: !1, bottom: !1 }),
                                    hideReplyContextMode: t,
                                }),
                                [u.Z.SelfThread]: (0, C.Cw)({ hideReplyContextMode: t }),
                                [u.Z.ReaderMode]: (0, C.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [w]: (0, b._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [h.Z.Inline]: (0, b._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? c.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: p.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === Z ? x.TransparentCursor : x.Default))(e, s), handlers: { [x.TransparentCursor]: g.L, [x.Default]: g.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: _ }),
                        [l.ZP.ThreadHeader]: y.Z,
                    }),
                S = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: i, showOnlyRelevantReplies: c, socialContext: d, topicFollowPrompt: u }) => {
                    const p = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, s.Z)(o, p);
                        let g = !1;
                        const f = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let y;
                        return (0, r.Z)(f, (o, n) => {
                            const s = o.type === l.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                r = o.type === l.ZP.Label && o.content.text === Z;
                            if (c && (s || r)) return void 0 === y && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (T = n) : void 0 === y && (y = n), !1;
                            if (c && void 0 !== y && n >= y) return !1;
                            if (c && void 0 === y && n >= T) return !1;
                            const p = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || p) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const s = !g;
                                if (((g = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return M(o, s);
                                    if (o.type === l.ZP.Tombstone) return z(o, s);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: s, isEnd: !0 };
                                        return o.content.displayType === h.Z.Inline ? I({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: u, conversationPosition: t }) : D({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return P({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: i, topicFollowPrompt: u, conversationPosition: { isStart: s, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                P = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: i, socialContext: s, topicFollowPrompt: r }) => d.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: s, promotedContent: i, topicFollowPrompt: r } }, { displayType: u.Z.FocalTweet }),
                I = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: i }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: w }),
                D = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                M = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                z = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        607015: (e, t, o) => {
            o.d(t, { ZP: () => _ });
            var n = o(202784),
                i = o(167630),
                s = o(111677),
                r = o.n(s),
                a = o(218093),
                l = o(332878),
                c = o(163889),
                d = o(87063),
                h = o(847933),
                u = o(56851),
                p = o(519125),
                m = o(810641),
                g = o(668214);
            const f = (e, t) => t.module.selectInitialFetchStatus(e),
                y = (e, t) => t.module.selectTopFetchStatus(e),
                b = (0, g.Z)().propsFromState(() => ({ moduleInitialFetchStatus: f, moduleTopFetchStatus: y })),
                v = r().c299a6c0,
                C = (e) => (t, o) => t && t.content && !!t.content.id && t.content.id === e,
                _ = b(({ focalTweetId: e, module: t, moduleInitialFetchStatus: o, moduleTopFetchStatus: s, rootTweetId: r, tweetTextSize: g }) => {
                    const f = (0, p.ZP)({ isCurrentUserRootAuthor: !0, withFocalTweetMedia: !0, isTransparentCursorsEnabled: !0, isReaderMode: !0, tweetTextSize: g }),
                        y = (r !== e && o === d.Z.LOADING) || s === d.Z.LOADING;
                    return n.createElement(m.Z, {
                        anchoring: l.Z,
                        entryConfiguration: f,
                        header: y ? n.createElement(i.Z, null) : void 0,
                        isInitialFocusEntry: r !== e ? C(e) : void 0,
                        key: g,
                        module: t,
                        olderAtTop: !0,
                        renderEmptyState: () => n.createElement(u.Z, null),
                        renderUnavailable: (e) => {
                            switch (e) {
                                case h.Z.NOT_FOUND:
                                    return n.createElement(u.Z, null);
                                case h.Z.NOT_ALLOWED:
                                    return n.createElement(a.Z, null);
                                default:
                                    return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                            }
                        },
                        title: v,
                    });
                });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => T, KV: () => y, LI: () => P, SC: () => Z, Vt: () => C, ed: () => I, op: () => x });
            var n = o(202784),
                i = o(190286),
                s = o(111677),
                r = o.n(s),
                a = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const h = r().cfd2f35e,
                u = r().f9e45cfb,
                p = r().fcd4d489,
                m = r().a6450e84,
                g = r().g353ad73,
                f = r().ad00a739,
                y = r().a9fd20be,
                b = r().j546fb79,
                v = r().c9623eeb,
                C = r().e133be4e,
                _ = r().he43bca4,
                w = r().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                T = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: u({ screenName: e }), label: m, text: t ? f({ screenName: e }) : g({ screenName: e }) }),
                x = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: i, unblockAction: s, unblockSubtext: r, user: a }) => {
                    let l,
                        h = c.Z;
                    const u = P(a, o);
                    switch (n) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            h = () => {
                                a.blocking ? s(u) : e(u);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (h = () => {
                                    a.blocking ? s(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: h, testID: i, shortcutKey: l, Icon: k(a.blocking), text: S(a), subText: E({ user: a, blockSubtext: t, unblockSubtext: r }) };
                },
                k = (e) => (e ? l.default : a.default),
                E = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? v({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                P = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: C, text: t ? w : _ }))(e.screen_name, t) : T(e.screen_name, t)),
                I = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: s, headline: r, label: a, text: l } = e;
                    return n.createElement(i.Z, { cancelButtonLabel: h, confirmButtonLabel: a, confirmButtonType: s, headline: r, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => i });
            var n = o(111677);
            const i = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => s });
            var n = o(516951),
                i = o(615656);
            const s = { [i.ZP.OtherUserSuspended]: { customAction: n.Z }, [i.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => i });
            var n = o(111677);
            const i = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => u, Od: () => d, PN: () => p, uq: () => c, wR: () => g });
            var n = o(251067),
                i = o(522171),
                s = o(111677),
                r = o.n(s),
                a = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: r().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${h} k`, universal: !1 }]), { description: r().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: c.nextItem, universal: !0 }, { description: r().g0048656, keys: c.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: c.refresh, universal: !1 }, { description: r().ha8209bc, keys: c.goHome, universal: !1 }, { description: r().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: r().eb75875e, keys: c.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: r().fa98627a, keys: c.goProfile, universal: !1 }, { description: r().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: r().b0041756, keys: c.goLists, universal: !1 }, { description: r().d4986f86, keys: c.goMessages, universal: !1 }, { description: r().h5860a68, keys: c.goGrok, universal: !1 }, { description: r().bb081ea2, keys: c.goSettings, universal: !1 }, { description: r().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: r().eee2ed92, keys: c.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                h = l.ZP.isMac() ? "⌘" : "CTRL",
                u = () => [
                    { description: r().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${h} Enter`, universal: !1 },
                    { description: r().e736990a, keys: c.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: c.search, universal: !1 },
                    { description: r().fe731016, keys: i.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: i.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: i.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: i.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: c.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: c.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: c.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: i.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: r().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: r().b881560e, keys: c.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = d(e),
                        o = u(),
                        n = p(),
                        i = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      i[t] = e;
                                  })
                                : (i[t] = e);
                        }),
                        JSON.stringify(i)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => y, I5: () => m, K2: () => f, L$: () => c, Rb: () => g, nk: () => p, sI: () => C, xr: () => b });
            var n = o(202784),
                i = o(483677),
                s = o(782578),
                r = o(393058),
                a = o(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && i.Z.getForGallery(e);
                    return t ? { rgb: b(t), rgba: l(t, 0.9) } : u;
                },
                d = a.Z.columnWidths.primary,
                h = (e, t) => Math.min(t, e),
                u = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: o, containerWidth: n, mediaHeight: i, mediaWidth: r } = e,
                        a = r && i ? r / i : 1,
                        l = a > 1,
                        c = t ? 400 : d,
                        u = l && (!r || r <= c) ? h(n, c) : n,
                        p = l || (i && !(i <= c)) ? o : h(o, c);
                    return s.Z.getContainDimensions({ width: u, height: p }, a);
                },
                g = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(t);
                },
                f = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(t);
                },
                y = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(t);
                },
                b = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                v = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                C = () => {
                    const [e, t] = n.useReducer(v, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            r.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                i = o(325686),
                s = o(392237);
            function r({ spacing: e, style: t }) {
                return n.createElement(i.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                i = o(476984),
                s = o.n(i),
                r = o(143778),
                a = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: i, icon: s, loadingMessage: r, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (i) {
                        case c:
                            return f ? n.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : o ? n.createElement(l.m, { failureMessage: o }) : m();
                        case h:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: r });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(325686),
                s = o(235902),
                r = o(885015),
                a = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? n.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] })), n.createElement(i.Z, { style: c.gapText }, o), n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] }))) : n.createElement(i.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                s = o(325686),
                r = o(392237);
            class a extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...r } = this.props,
                        a = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return i.createElement(s.Z, (0, n.Z)({ style: [t, l.root, o && l.withGutter] }, r), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        7022: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                i = o(196001),
                s = o(325686),
                r = o(837880),
                a = o(516951),
                l = o(933895),
                c = o(392237);
            const d = o(393058).Z.isTouchSupported(),
                h = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                u = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                p = (e, t, o) => Math.min(t, Math.max(e, o)),
                m = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class f extends n.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = u),
                        (this._ref = n.createRef()),
                        (this._setTouchableNode = (e) => {
                            this._touchableNode !== e && ((this._touchableNode = e), this._removeTouchListener && this._removeTouchListener(), this._touchableNode && (this._removeTouchListener = (0, l.O)(this._touchableNode, this._handleTouchMove, !1)));
                        }),
                        (this._isTouching = !1),
                        (this._handleTouchStart = (e) => {
                            this._ref.current && (this._zoomedDimensions = this._ref.current.getBoundingClientRect()), (this._moved = !1);
                            const t = e.touches.length;
                            (this._isTouching = !0), 2 === t ? (e.preventDefault(), this._handlePinchStart(e)) : 1 === t && this._handleTapStart(e);
                        }),
                        (this._handleTouchMove = (e) => {
                            const t = e.touches.length;
                            2 === t ? (e.preventDefault(), this._handlePinchMove(e)) : 1 === t && ((this._moved = !0), this._handlePanMove(e));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { maxZoom: t, minZoom: o, onTap: n } = this.props,
                                i = p(o, t, this.state.zoom),
                                { zoom: s } = this.state;
                            s !== i && 1 === i ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: i }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : s <= 1 && !this._moved && (this._clickTimer = setTimeout(n, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...h });
                }
                static getDerivedStateFromProps(e, t) {
                    return d && e.resetZoom ? (e.onZoomed(!1), { ...h }) : t;
                }
                render() {
                    if (!d) return this.props.children;
                    const { zoom: e, zoomCenter: t } = this.state,
                        o = this._moved,
                        r = { zoom: this._isTouching ? e : (0, i.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, i.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, i.ST)(t.y) };
                    return n.createElement(
                        s.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: y.fill },
                        n.createElement(i.y_, { style: r }, ({ zoom: e, zoomCenterX: i, zoomCenterY: r }) => n.createElement(s.Z, { ref: this._ref, style: [y.fill, { transform: [{ scale: e }], transformOrigin: `${o ? i : t.x}px ${o ? r : t.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    d && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: h.zoom });
                }
                _handlePanMove(e) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: t, clientY: o } = e.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: t, lastY: o });
                    const {
                            lastX: n,
                            lastY: i,
                            zoomCenter: { x: s, y: a },
                        } = this.state,
                        { height: l, width: c } = this._windowDimensions,
                        { height: d, width: h } = this._zoomedDimensions;
                    let u = 0,
                        p = 0;
                    h - c > 0 && (u = t - n), d - l > 0 && (p = o - i), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - u, 0, c), y: (0, r.Z)(a - p, 0, l) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = m(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = g(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: o, lastY: n, zoom: i, zoomCenter: s } = this.state,
                        { maxZoom: a, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === s.x && 0 === s.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const h = m(t[0], t[1]),
                        u = this._lastDistance ? h / this._lastDistance : 1,
                        f = p(c - d, a + l, i * u),
                        y = g(t[0], t[1]),
                        b = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (y.x - o), 0, t), y: (0, r.Z)(s.y - (y.y - n), 0, e) };
                        })();
                    (this._lastDistance = h), this.setState({ lastX: y.x, lastY: y.y, zoom: f, zoomCenter: b });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || h.zoomCenter }), o(!0));
                }
                _getZoomCenter(e, t) {
                    this._ref.current && (this._itemDimensions = this._ref.current.getBoundingClientRect());
                    const { left: o, top: n } = this._itemDimensions;
                    return { x: e - o, y: t - n };
                }
                _updateWindowDimensions() {
                    this._windowDimensions = { height: window.innerHeight, width: window.innerWidth };
                }
            }
            f.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const y = c.default.create((e) => ({ fill: { flex: 1 } })),
                b = f;
        },
        266151: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        314948: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => i, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (o, n, i) => {
                        const s = t ? t(n, i, e) : !!n;
                        return s && o[0].push(n), !s && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-6107ac1a.860f5e9a.js.map
