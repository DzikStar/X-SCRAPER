"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconDrafts-js"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => _, Z: () => f });
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
            const m = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                p = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: m, lightMode: p } },
                _ = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: h, withBackgroundImage: u }) => {
                    const m = (0, d.z)(),
                        p = _[o] || "Occasion",
                        f = u ? `${p}WithBackgroundImage` : p;
                    n.useEffect(() => {
                        m.scribe({ component: f, action: "impression" });
                    }, [m, f]);
                    const b = () => {
                            m.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: C, buttonSize: v, cardWidth: Z, marginbottom: w, textcolor: x } = h ?? {},
                        T = C ? s.default.theme.colors[C] : s.default.theme.colors.gray0,
                        E = x ? s.default.theme.colors[x] : s.default.theme.colors.gray900,
                        D = w ? s.default.theme.spaces[w] : s.default.theme.spaces.space16,
                        S = { [_.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return u ? n.createElement(r.Z, { interactiveStyles: null, link: t, onPress: b, style: y.bannerContainer }, n.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === s.default.theme.paletteName ? S.image.lightMode : S.image.darkMode }, style: { height: 85 } })) : n.createElement(i.Z, { style: [y.card, { backgroundColor: T }, { maxWidth: Z }, { marginBottom: D }], testID: "popupCard" }, n.createElement(i.Z, { style: e ? y.horizontalContent : y.verticalContent }, n.createElement(i.Z, { style: e ? y.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, S.header), n.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: E }] }, S.description, " ", e ? null : S.legalDisclaimer)), n.createElement(i.Z, { style: y.buttonContainer }, n.createElement(c.ZP, { backgroundColor: "light" === s.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: b, size: "medium", style: [y.popupButton, { width: v }] }, S.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: E }] }, S.legalDisclaimer))));
                },
                y = s.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        300234: (e, t, o) => {
            o.d(t, { Z: () => G });
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
            const m = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var p = o(807896),
                g = o(386802),
                _ = o(420740),
                f = o(111677),
                y = o.n(f),
                b = o(965728);
            const C = { startX: 0, startY: 0 };
            class v extends n.Component {
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
            const Z = v;
            var w = o(992942),
                x = o(7022),
                T = o(309854),
                E = o(351686),
                D = o(822399);
            const S = y().b327c12a,
                z = y().gff1f69e;
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
                        m = (e && u && Math.max(u.width, u.height) >= 680 ? u.uri : null) || I._selectSource(l);
                    if (!m || null === u) return null;
                    const p = n.createElement(w.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : S, defaultSource: u && u.uri, draggable: !0, onError: u ? void 0 : o, onLoad: s, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: m, style: [P.img, t] });
                    return n.createElement(i.Z, { style: d }, this.state.imageLoading ? k : null, h ? n.createElement(x.Z, { onTap: r, onZoomed: a, resetZoom: c }, p) : p);
                }
                static _selectCachedVariant(e) {
                    const t = T.Z.getOriginalImage(e);
                    return t ? E.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = T.Z.getOriginalImage(e);
                    return t && E.Z.selectLargestUrl(t);
                }
            }
            I.defaultProps = { zoomable: !1 };
            const P = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                k = n.createElement(D.Z, { ariaValueText: z, indeterminate: !0, style: P.progressBar }),
                M = I;
            var B = o(310453);
            class V extends n.PureComponent {
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
                    return n.createElement(i.Z, { style: e }, n.createElement(i.Z, { style: L.root }, this._renderVideo()));
                }
                componentDidUpdate(e) {
                    const { isCurrentlyDisplayed: t } = this.props;
                    this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause());
                }
                _renderVideo() {
                    const { promotedContent: e, video: t, videoId: o } = this.props,
                        [i, r] = t.video_info.aspect_ratio,
                        a = s.Z.extractVideoProps(o, t);
                    return (a.aspectRatio = i / r), n.createElement(B.Z, (0, p.Z)({}, a, { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: e, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const L = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                W = V,
                F = y().ac85c6b2,
                Y = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: c, promotedContent: d, videoId: h, ...u } = e,
                        [m, f] = n.useState(null),
                        [y, C] = n.useState({ width: 0, height: 0 }),
                        { isModal: v } = n.useContext(g.Z),
                        { height: w, width: x } = a.original_info || {},
                        { height: T, width: E } = y,
                        D = v || o ? (0, b.I5)({ mediaWidth: x, mediaHeight: w, containerWidth: E, containerHeight: T }, o) : X.mediaItem;
                    return n.createElement(
                        Z,
                        {
                            onDismiss: l,
                            onLayout:
                                v || o
                                    ? (e) => {
                                          const {
                                              nativeEvent: {
                                                  layout: { height: t, width: o },
                                              },
                                          } = e;
                                          (o === y.width && t === y.height) || C({ width: o, height: t });
                                      }
                                    : void 0,
                            style: X.root,
                        },
                        m
                            ? n.createElement(_.Z, {
                                  onRetry: () => {
                                      f(null);
                                  },
                                  style: X.errorDetail,
                                  title: F,
                                  withLightOnDarkColorScheme: !0,
                              })
                            : null,
                        m
                            ? null
                            : n.createElement(
                                  i.Z,
                                  {
                                      onClick: (e) => {
                                          e.stopPropagation();
                                      },
                                      style: D,
                                  },
                                  "photo" === a.type
                                      ? n.createElement(
                                            M,
                                            (0, p.Z)({}, u, {
                                                imageStyle: o && !t && X.avatarImage,
                                                onError: (e) => {
                                                    f(e.nativeEvent.error);
                                                },
                                                onLoad: () => {
                                                    f(null);
                                                },
                                                onTap: c,
                                                photo: a,
                                                style: X.container,
                                                zoomable: !0,
                                            }),
                                        )
                                      : s.Z.isVideo(a) && h
                                        ? n.createElement(W, { isCurrentlyDisplayed: r, promotedContent: d, style: X.container, video: a, videoId: h })
                                        : null,
                              ),
                    );
                },
                X = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                H = n.memo(Y, (e, t) => (0, c.Z)(e, t));
            class R extends n.Component {
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
                                m = this._getItemVideoId(i),
                                p = o === h;
                            return u && !m ? null : n.createElement(H, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: p, key: h, mediaDetail: r[h], onDismiss: d ? void 0 : a, onTap: l, onZoomed: p ? this._handleMediaDetailZoomed : void 0, promotedContent: c, resetZoom: o !== h, videoId: m });
                        });
                    return n.createElement(i.Z, { style: A.root }, r.length > 1 ? this._renderCarousel(h) : h);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: c } = this.state,
                        d = s.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [A.dimensions, A.scrollSnap], dominantButtonColor: t, isLocked: c, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: A.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !d, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: c, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (R.contextType = u.rC), (R.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: d.Z, onMediaItemChanged: d.Z });
            const A = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                G = m(R);
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => y });
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
                m = o(254944),
                p = o(965728),
                g = o(979512);
            const _ = h().ia5e7488,
                f = h().ic76bdf0;
            class y extends n.Component {
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: h, mediaUrl: g, overlayFooter: y, topRightButton: v } = this.props,
                        { isModal: Z } = this.context,
                        w = { backgroundColor: e.rgba, ...p.nk },
                        x = { backgroundColor: e.rgb, ...p.nk },
                        T = [b.root, Z ? w : x, { position: Z || c ? "relative" : "fixed" }],
                        E = h,
                        D = E?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: T }, t, o ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [b.footerButtons, y && w, y && b.footerButtonsAbsolute, d && b.fadeOut] }, n.createElement(s.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [b.buttonWrapper, b.buttonWrapperLeft, p.nk, d && b.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": _, dominantColor: e.rgb, hoverLabel: { label: _ }, icon: n.createElement(u.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: h || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        v ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [b.buttonWrapper, b.buttonWrapperRight, p.nk, d && b.fadeOut] }, v) : null,
                        D
                            ? n.createElement(
                                  i.Z,
                                  { style: [b.buttonWrapperBottomCenter, p.nk, d && b.fadeOut] },
                                  n.createElement(
                                      a.ZP,
                                      {
                                          icon: n.createElement(m.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: D.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      f,
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
            (y.contextType = l.Z), (y.defaultProps = { hideButtons: !1 });
            const b = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
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
            o.d(t, { Z: () => y });
            var n = o(202784),
                i = o(196001),
                s = o(325686),
                r = o(837880),
                a = o(516951),
                l = o(933895),
                c = o(392237);
            const d = o(401339).Z.isTouchSupported(),
                h = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                u = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                m = (e, t, o) => Math.min(t, Math.max(e, o)),
                p = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class _ extends n.Component {
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
                                i = m(o, t, this.state.zoom),
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
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: f.fill },
                        n.createElement(i.y_, { style: r }, ({ zoom: e, zoomCenterX: i, zoomCenterY: r }) => n.createElement(s.Z, { ref: this._ref, style: [f.fill, { transform: [{ scale: e }], transformOrigin: `${o ? i : t.x}px ${o ? r : t.y}px` }] }, this.props.children)),
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
                        m = 0;
                    h - c > 0 && (u = t - n), d - l > 0 && (m = o - i), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - u, 0, c), y: (0, r.Z)(a - m, 0, l) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = p(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = g(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: o, lastY: n, zoom: i, zoomCenter: s } = this.state,
                        { maxZoom: a, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === s.x && 0 === s.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const h = p(t[0], t[1]),
                        u = this._lastDistance ? h / this._lastDistance : 1,
                        _ = m(c - d, a + l, i * u),
                        f = g(t[0], t[1]),
                        y = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (f.x - o), 0, t), y: (0, r.Z)(s.y - (f.y - n), 0, e) };
                        })();
                    (this._lastDistance = h), this.setState({ lastX: f.x, lastY: f.y, zoom: _, zoomCenter: y });
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
            _.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const f = c.default.create((e) => ({ fill: { flex: 1 } })),
                y = _;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-6107ac1a.308154ba.js.map
