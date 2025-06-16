"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconBook-js"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => f, Z: () => y });
            var n = o(202784),
                s = o(325686),
                i = o(392237),
                r = o(530732),
                a = o(992942),
                l = o(731708),
                c = o(154003),
                d = o(725516),
                u = o(111677),
                h = o.n(u);
            const p = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: p, lightMode: m } },
                f = Object.freeze({ MarchMadness: "MarchMadness" }),
                y = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: u, withBackgroundImage: h }) => {
                    const p = (0, d.z)(),
                        m = f[o] || "Occasion",
                        y = h ? `${m}WithBackgroundImage` : m;
                    n.useEffect(() => {
                        p.scribe({ component: y, action: "impression" });
                    }, [p, y]);
                    const C = () => {
                            p.scribe({ component: y, action: "click", element: "card" });
                        },
                        { backgroundcolor: v, buttonSize: _, cardWidth: w, marginbottom: T, textcolor: Z } = u ?? {},
                        x = v ? i.default.theme.colors[v] : i.default.theme.colors.gray0,
                        k = Z ? i.default.theme.colors[Z] : i.default.theme.colors.gray900,
                        E = T ? i.default.theme.spaces[T] : i.default.theme.spaces.space16,
                        S = { [f.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return h ? n.createElement(r.Z, { interactiveStyles: null, link: t, onPress: C, style: b.bannerContainer }, n.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === i.default.theme.paletteName ? S.image.lightMode : S.image.darkMode }, style: { height: 85 } })) : n.createElement(s.Z, { style: [b.card, { backgroundColor: x }, { maxWidth: w }, { marginBottom: E }], testID: "popupCard" }, n.createElement(s.Z, { style: e ? b.horizontalContent : b.verticalContent }, n.createElement(s.Z, { style: e ? b.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [b.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, S.header), n.createElement(l.ZP, { size: "subtext1", style: [b.popupDescription, { color: k }] }, S.description, " ", e ? null : S.legalDisclaimer)), n.createElement(s.Z, { style: b.buttonContainer }, n.createElement(c.ZP, { backgroundColor: "light" === i.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: C, size: "medium", style: [b.popupButton, { width: _ }] }, S.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [b.legalDisclaimer, { color: k }] }, S.legalDisclaimer))));
                },
                b = i.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                s = o(202784),
                i = o(182056),
                r = o(879113),
                a = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const a = i.Z.isOnline();
                    return s.createElement(r.Z, (0, n.Z)({}, t, { icon: a ? void 0 : s.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = s.forwardRef(h);
        },
        300234: (e, t, o) => {
            o.d(t, { Z: () => H });
            var n = o(202784),
                s = o(325686),
                i = o(284702),
                r = o(174326),
                a = o(521812),
                l = o(392237),
                c = o(908478),
                d = o(516951),
                u = o(123751),
                h = o(443781);
            const p = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                g = o(386802),
                f = o(420740),
                y = o(111677),
                b = o.n(y),
                C = o(965728);
            const v = { startX: 0, startY: 0 };
            class _ extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._pullDistanceY = 0),
                        (this._pullInfo = { ...v }),
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
                            this._updatePullPosition(0), (this._pullInfo = { ...v });
                        });
                }
                render() {
                    const { children: e, onDismiss: t, onLayout: o, style: i } = this.props,
                        r = !!t;
                    return n.createElement(s.Z, { onLayout: o, onTouchEnd: r ? this._handleTouchEnd : void 0, onTouchMove: r ? this._handleTouchMove : void 0, onTouchStart: r ? this._handleTouchStart : void 0, style: i, testID: "swipe-to-dismiss" }, e);
                }
            }
            const w = _;
            var T = o(992942),
                Z = o(7022),
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
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: i, onTap: r, onZoomed: a, photo: l, resetZoom: c, style: d, zoomable: u } = this.props,
                        { loadingVariant: h } = this.state,
                        p = (e && h && Math.max(h.width, h.height) >= 680 ? h.uri : null) || I._selectSource(l);
                    if (!p || null === h) return null;
                    const m = n.createElement(T.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : S, defaultSource: h && h.uri, draggable: !0, onError: h ? void 0 : o, onLoad: i, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: p, style: [D.img, t] });
                    return n.createElement(s.Z, { style: d }, this.state.imageLoading ? M : null, u ? n.createElement(Z.Z, { onTap: r, onZoomed: a, resetZoom: c }, m) : m);
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
                R = I;
            var z = o(310453);
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
                    return n.createElement(s.Z, { style: e }, n.createElement(s.Z, { style: F.root }, this._renderVideo()));
                }
                componentDidUpdate(e) {
                    const { isCurrentlyDisplayed: t } = this.props;
                    this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause());
                }
                _renderVideo() {
                    const { promotedContent: e, video: t, videoId: o } = this.props,
                        [s, r] = t.video_info.aspect_ratio,
                        a = i.Z.extractVideoProps(o, t);
                    return (a.aspectRatio = s / r), n.createElement(z.Z, (0, m.Z)({}, a, { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: e, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const F = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                L = B,
                A = b().ac85c6b2,
                V = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: c, promotedContent: d, videoId: u, ...h } = e,
                        [p, y] = n.useState(null),
                        [b, v] = n.useState({ width: 0, height: 0 }),
                        { isModal: _ } = n.useContext(g.Z),
                        { height: T, width: Z } = a.original_info || {},
                        { height: x, width: k } = b,
                        E = _ || o ? (0, C.I5)({ mediaWidth: Z, mediaHeight: T, containerWidth: k, containerHeight: x }, o) : W.mediaItem;
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
                                          (o === b.width && t === b.height) || v({ width: o, height: t });
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
                                  s.Z,
                                  {
                                      onClick: (e) => {
                                          e.stopPropagation();
                                      },
                                      style: E,
                                  },
                                  "photo" === a.type
                                      ? n.createElement(
                                            R,
                                            (0, m.Z)({}, h, {
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
                                      : i.Z.isVideo(a) && u
                                        ? n.createElement(L, { isCurrentlyDisplayed: r, promotedContent: d, style: W.container, video: a, videoId: u })
                                        : null,
                              ),
                    );
                },
                W = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                O = n.memo(V, (e, t) => (0, c.Z)(e, t));
            class N extends n.Component {
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
                                return u.Z.forTweet(t[3]);
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
                        u = r.map((s, u) => {
                            const h = i.Z.isVideo(s),
                                p = this._getItemVideoId(s),
                                m = o === u;
                            return h && !p ? null : n.createElement(O, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: u, mediaDetail: r[u], onDismiss: d ? void 0 : a, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: c, resetZoom: o !== u, videoId: p });
                        });
                    return n.createElement(s.Z, { style: U.root }, r.length > 1 ? this._renderCarousel(u) : u);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: s, onMediaItemChanged: l } = this.props,
                        { isZoomed: c } = this.state,
                        d = i.Z.isVideo(s[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [U.dimensions, U.scrollSnap], dominantButtonColor: t, isLocked: c, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: U.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !d, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: c, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (N.contextType = h.rC), (N.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: d.Z, onMediaItemChanged: d.Z });
            const U = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                H = p(N);
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                s = o(325686),
                i = o(108362),
                r = o(530732),
                a = o(154003),
                l = o(386802),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                h = o(837020),
                p = o(254944),
                m = o(965728),
                g = o(979512);
            const f = u().ia5e7488,
                y = u().ic76bdf0;
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: u, mediaUrl: g, overlayFooter: b, topRightButton: _ } = this.props,
                        { isModal: w } = this.context,
                        T = { backgroundColor: e.rgba, ...m.nk },
                        Z = { backgroundColor: e.rgb, ...m.nk },
                        x = [C.root, w ? T : Z, { position: w || c ? "relative" : "fixed" }],
                        k = u,
                        E = k?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(s.Z, { onClick: this._handleBackgroundPress, style: x }, t, o ? n.createElement(s.Z, { pointerEvents: d ? "none" : void 0, style: [C.footerButtons, b && T, b && C.footerButtonsAbsolute, d && C.fadeOut] }, n.createElement(i.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [C.buttonWrapper, C.buttonWrapperLeft, m.nk, d && C.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": f, dominantColor: e.rgb, hoverLabel: { label: f }, icon: n.createElement(h.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: u || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        _ ? n.createElement(s.Z, { pointerEvents: d ? "none" : void 0, style: [C.buttonWrapper, C.buttonWrapperRight, m.nk, d && C.fadeOut] }, _) : null,
                        E
                            ? n.createElement(
                                  s.Z,
                                  { style: [C.buttonWrapperBottomCenter, m.nk, d && C.fadeOut] },
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
                                  n.createElement(v, {
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
            const C = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
                v = ({ onOpenGrokUpdate: e }) => {
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
            o.d(t, { Z: () => i });
            var n = o(202784),
                s = o(272175);
            const i = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(s.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                s = o(420740),
                i = o(111677);
            const r = o.n(i)().b2311b70;
            function a() {
                return n.createElement(s.Z, { onRetry: null, title: r });
            }
            const l = n.memo(a);
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => c });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const s = (e, t, o) => {
                    const n = e(t),
                        s = e(o);
                    return !n && s ? -1 : n && !s ? 1 : 0;
                },
                i = (e, t, o) => r(e(o), e(t)),
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
                                      return s(r, n, a) || i(l, n, a);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: o, distanceToViewportTop: n, id: s } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(s).getTop() - t;
                        }
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getBottom() + o;
                            return e.getForItem(s).getBottom() - t;
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
                s = o(725516);
            function i() {
                const e = (0, s.z)();
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
            const r = n.memo(i);
        },
        890882: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                s = o(443781);
            const i = (e) => {
                const { featureSwitches: t, userClaims: o } = n.useContext(s.rC),
                    i = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    r = o.isAnyPremiumSubscriber(),
                    { text: a } = e;
                return r && i ? n.createElement(n.Fragment, null, a) : a;
            };
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                s = o(420740),
                i = o(108362),
                r = o(731708),
                a = o(154003),
                l = o(392237),
                c = o(111677),
                d = o.n(c),
                u = o(349035);
            const h = "error-detail",
                p = d().e49537c2,
                m = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(s.Z, { testID: h }, n.createElement(u.Z, null), n.createElement(i.Z, { style: f.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: f.retryText }, p), n.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const f = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                s = o(500002),
                i = o(668214),
                r = o(997174),
                a = o(118823);
            const l = (0, i.Z)()
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
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = s || a;
                    ((c && s !== a) || (!c && o !== i) || n !== r || l) && this._performPageUpdates(this.props);
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
            const d = (0, s.ZP)(l(c));
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => E });
            var n = o(662678),
                s = o(769471),
                i = o(337637),
                r = o(459679),
                a = o(192337),
                l = o(962741),
                c = o(372703),
                d = o(466015),
                u = o(267483),
                h = o(263863),
                p = o(351322),
                m = o(37533),
                g = o(777809),
                f = o(652815),
                y = o(560520),
                b = o(367991),
                C = o(705638),
                v = o(801184),
                _ = o(335632);
            const w = "FocalTweetInlineTombstone",
                T = "More Replies";
            let Z;
            const x = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                k = { ...(0, _.G)({}), [l.ZP.Tweet]: (0, C.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                E = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: i, replyDropdownSelection: r, rootTweetAuthorId: a, tweetTextSize: d, withFocalTweetMedia: C, withRuxInjections: _ }) =>
                    (0, s.Z)({}, k, {
                        [l.ZP.SelfThreadTweetComposer]: f.Z,
                        [l.ZP.Tweet]: {
                            handlers: {
                                [h.Z.Tweet]: (0, v.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            s = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = s),
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
                                [h.Z.FocalTweet]: (0, v.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: s, hasModeratedReplies: i },
                                                conversationPosition: l,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: u, promotedContent: h, socialContext: p, topicFollowPrompt: m } = d || {};
                                        return {
                                            contextTweetId: u,
                                            conversationAnnotation: s,
                                            hasModeratedReplies: !!(i && l && l.isStart),
                                            promotedContent: h,
                                            rootTweetAuthorId: a,
                                            socialContext: p,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: C,
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
                                [h.Z.SelfThread]: (0, v.Cw)({ hideReplyContextMode: t }),
                                [h.Z.ReaderMode]: (0, v.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [w]: (0, b._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [u.Z.Inline]: (0, b._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? c.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: p.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === T ? x.TransparentCursor : x.Default))(e, i), handlers: { [x.TransparentCursor]: g.L, [x.Default]: g.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: _ }),
                        [l.ZP.ThreadHeader]: y.Z,
                    }),
                S = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: s, showOnlyRelevantReplies: c, socialContext: d, topicFollowPrompt: h }) => {
                    const p = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, i.Z)(o, p);
                        let g = !1;
                        const f = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let y;
                        return (0, r.Z)(f, (o, n) => {
                            const i = o.type === l.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                r = o.type === l.ZP.Label && o.content.text === T;
                            if (c && (i || r)) return void 0 === y && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (Z = n) : void 0 === y && (y = n), !1;
                            if (c && void 0 !== y && n >= y) return !1;
                            if (c && void 0 === y && n >= Z) return !1;
                            const p = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || p) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const i = !g;
                                if (((g = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return M(o, i);
                                    if (o.type === l.ZP.Tombstone) return R(o, i);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: i, isEnd: !0 };
                                        return o.content.displayType === u.Z.Inline ? I({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: h, conversationPosition: t }) : D({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return P({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: s, topicFollowPrompt: h, conversationPosition: { isStart: i, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                P = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: s, socialContext: i, topicFollowPrompt: r }) => d.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: i, promotedContent: s, topicFollowPrompt: r } }, { displayType: h.Z.FocalTweet }),
                I = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: s }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: w }),
                D = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                M = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                R = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        607015: (e, t, o) => {
            o.d(t, { ZP: () => _ });
            var n = o(202784),
                s = o(167630),
                i = o(111677),
                r = o.n(i),
                a = o(218093),
                l = o(332878),
                c = o(163889),
                d = o(87063),
                u = o(847933),
                h = o(56851),
                p = o(519125),
                m = o(810641),
                g = o(668214);
            const f = (e, t) => t.module.selectInitialFetchStatus(e),
                y = (e, t) => t.module.selectTopFetchStatus(e),
                b = (0, g.Z)().propsFromState(() => ({ moduleInitialFetchStatus: f, moduleTopFetchStatus: y })),
                C = r().c299a6c0,
                v = (e) => (t, o) => t && t.content && !!t.content.id && t.content.id === e,
                _ = b(({ focalTweetId: e, module: t, moduleInitialFetchStatus: o, moduleTopFetchStatus: i, rootTweetId: r, tweetTextSize: g }) => {
                    const f = (0, p.ZP)({ isCurrentUserRootAuthor: !0, withFocalTweetMedia: !0, isTransparentCursorsEnabled: !0, isReaderMode: !0, tweetTextSize: g }),
                        y = (r !== e && o === d.Z.LOADING) || i === d.Z.LOADING;
                    return n.createElement(m.Z, {
                        anchoring: l.Z,
                        entryConfiguration: f,
                        header: y ? n.createElement(s.Z, null) : void 0,
                        isInitialFocusEntry: r !== e ? v(e) : void 0,
                        key: g,
                        module: t,
                        olderAtTop: !0,
                        renderEmptyState: () => n.createElement(h.Z, null),
                        renderUnavailable: (e) => {
                            switch (e) {
                                case u.Z.NOT_FOUND:
                                    return n.createElement(h.Z, null);
                                case u.Z.NOT_ALLOWED:
                                    return n.createElement(a.Z, null);
                                default:
                                    return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                            }
                        },
                        title: C,
                    });
                });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => Z, KV: () => y, LI: () => P, SC: () => T, Vt: () => v, ed: () => I, op: () => x });
            var n = o(202784),
                s = o(190286),
                i = o(111677),
                r = o.n(i),
                a = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const u = r().cfd2f35e,
                h = r().f9e45cfb,
                p = r().fcd4d489,
                m = r().a6450e84,
                g = r().g353ad73,
                f = r().ad00a739,
                y = r().a9fd20be,
                b = r().j546fb79,
                C = r().c9623eeb,
                v = r().e133be4e,
                _ = r().he43bca4,
                w = r().f5f01af6,
                T = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                Z = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? f({ screenName: e }) : g({ screenName: e }) }),
                x = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: s, unblockAction: i, unblockSubtext: r, user: a }) => {
                    let l,
                        u = c.Z;
                    const h = P(a, o);
                    switch (n) {
                        case T.PROFILE:
                        case T.LIST_DETAIL:
                        case T.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? i(h) : e(h);
                            };
                            break;
                        case T.TWEET:
                        case T.TWEET_CARET:
                        case T.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? i(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: s, shortcutKey: l, Icon: k(a.blocking), text: S(a), subText: E({ user: a, blockSubtext: t, unblockSubtext: r }) };
                },
                k = (e) => (e ? l.default : a.default),
                E = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? C({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                P = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: v, text: t ? w : _ }))(e.screen_name, t) : Z(e.screen_name, t)),
                I = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: i, headline: r, label: a, text: l } = e;
                    return n.createElement(s.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: i, headline: r, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => i });
            var n = o(516951),
                s = o(615656);
            const i = { [s.ZP.OtherUserSuspended]: { customAction: n.Z }, [s.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => d, PN: () => p, uq: () => c, wR: () => g });
            var n = o(251067),
                s = o(522171),
                i = o(111677),
                r = o.n(i),
                a = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: r().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: r().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: c.nextItem, universal: !0 }, { description: r().g0048656, keys: c.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: c.refresh, universal: !1 }, { description: r().ha8209bc, keys: c.goHome, universal: !1 }, { description: r().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: r().eb75875e, keys: c.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: r().fa98627a, keys: c.goProfile, universal: !1 }, { description: r().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: r().b0041756, keys: c.goLists, universal: !1 }, { description: r().d4986f86, keys: c.goMessages, universal: !1 }, { description: r().h5860a68, keys: c.goGrok, universal: !1 }, { description: r().bb081ea2, keys: c.goSettings, universal: !1 }, { description: r().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: r().eee2ed92, keys: c.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: r().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: r().e736990a, keys: c.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: c.search, universal: !1 },
                    { description: r().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: c.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: c.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: c.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
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
                        o = h(),
                        n = p(),
                        s = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => y, I5: () => m, K2: () => f, L$: () => c, Rb: () => g, nk: () => p, sI: () => v, xr: () => b });
            var n = o(202784),
                s = o(483677),
                i = o(782578),
                r = o(393058),
                a = o(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && s.Z.getForGallery(e);
                    return t ? { rgb: b(t), rgba: l(t, 0.9) } : h;
                },
                d = a.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: o, containerWidth: n, mediaHeight: s, mediaWidth: r } = e,
                        a = r && s ? r / s : 1,
                        l = a > 1,
                        c = t ? 400 : d,
                        h = l && (!r || r <= c) ? u(n, c) : n,
                        p = l || (s && !(s <= c)) ? o : u(o, c);
                    return i.Z.getContainDimensions({ width: h, height: p }, a);
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
                C = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                v = () => {
                    const [e, t] = n.useReducer(C, { isZoomed: !1, showControls: !0 });
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
                s = o(325686),
                i = o(392237);
            function r({ spacing: e, style: t }) {
                return n.createElement(s.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                s = o(476984),
                i = o.n(s),
                r = o(143778),
                a = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: s, icon: i, loadingMessage: r, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: f } = this.props;
                    switch (s) {
                        case c:
                            return f ? n.createElement(a.Z, { icon: i, onRequestRetry: d, retryMessage: g }) : o ? n.createElement(l.m, { failureMessage: o }) : m();
                        case u:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: r });
                        case h:
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
                s = o(325686),
                i = o(235902),
                r = o(885015),
                a = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? n.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(s.Z, { style: c.gapColumn }, n.createElement(s.Z, { style: [c.gap, d] })), n.createElement(s.Z, { style: c.gapText }, o), n.createElement(s.Z, { style: c.gapColumn }, n.createElement(s.Z, { style: [c.gap, d] }))) : n.createElement(s.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                s = o(202784),
                i = o(325686),
                r = o(392237);
            class a extends s.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...r } = this.props,
                        a = s.Children.map(e, (e) => e && s.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return s.createElement(i.Z, (0, n.Z)({ style: [t, l.root, o && l.withGutter] }, r), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        7022: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                s = o(196001),
                i = o(325686),
                r = o(837880),
                a = o(516951),
                l = o(933895),
                c = o(392237);
            const d = o(393058).Z.isTouchSupported(),
                u = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                h = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                p = (e, t, o) => Math.min(t, Math.max(e, o)),
                m = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class f extends n.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = h),
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
                                s = p(o, t, this.state.zoom),
                                { zoom: i } = this.state;
                            i !== s && 1 === s ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: s }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : i <= 1 && !this._moved && (this._clickTimer = setTimeout(n, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...u });
                }
                static getDerivedStateFromProps(e, t) {
                    return d && e.resetZoom ? (e.onZoomed(!1), { ...u }) : t;
                }
                render() {
                    if (!d) return this.props.children;
                    const { zoom: e, zoomCenter: t } = this.state,
                        o = this._moved,
                        r = { zoom: this._isTouching ? e : (0, s.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, s.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, s.ST)(t.y) };
                    return n.createElement(
                        i.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: y.fill },
                        n.createElement(s.y_, { style: r }, ({ zoom: e, zoomCenterX: s, zoomCenterY: r }) => n.createElement(i.Z, { ref: this._ref, style: [y.fill, { transform: [{ scale: e }], transformOrigin: `${o ? s : t.x}px ${o ? r : t.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    d && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: u.zoom });
                }
                _handlePanMove(e) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: t, clientY: o } = e.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: t, lastY: o });
                    const {
                            lastX: n,
                            lastY: s,
                            zoomCenter: { x: i, y: a },
                        } = this.state,
                        { height: l, width: c } = this._windowDimensions,
                        { height: d, width: u } = this._zoomedDimensions;
                    let h = 0,
                        p = 0;
                    u - c > 0 && (h = t - n), d - l > 0 && (p = o - s), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(i - h, 0, c), y: (0, r.Z)(a - p, 0, l) } });
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
                        { lastX: o, lastY: n, zoom: s, zoomCenter: i } = this.state,
                        { maxZoom: a, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === i.x && 0 === i.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const u = m(t[0], t[1]),
                        h = this._lastDistance ? u / this._lastDistance : 1,
                        f = p(c - d, a + l, s * h),
                        y = g(t[0], t[1]),
                        b = (() => {
                            if (!this._windowDimensions || !o) return i;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(i.x - (y.x - o), 0, t), y: (0, r.Z)(i.y - (y.y - n), 0, e) };
                        })();
                    (this._lastDistance = u), this.setState({ lastX: y.x, lastY: y.y, zoom: f, zoomCenter: b });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || u.zoomCenter }), o(!0));
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
        899174: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                s = o(890601),
                i = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9.909 4.14C9.541 4.05 9.157 4 8.766 4H1.002v16h8.146c.758 0 1.45.43 1.789 1.11l.065.13V5.76c0-.73-.388-1.44-1.093-1.62zM8 15H4v-2h4v2zm0-4H4V9h4v2zm7.238-7c-.391 0-.774.05-1.143.14-.705.18-1.093.89-1.093 1.62v15.49c.461-.82 1.076-1.25 1.854-1.25h8.146V4h-7.764zM20 15h-4v-2h4v2zm0-4h-4V9h4v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => s, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return s(e, t);
            };
            function s(e, t) {
                return e.reduce(
                    (o, n, s) => {
                        const i = t ? t(n, s, e) : !!n;
                        return i && o[0].push(n), !i && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-6107ac1a.1151cc0a.js.map
