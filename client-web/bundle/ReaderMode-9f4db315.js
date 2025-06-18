"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-9f4db315"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => f, Z: () => b });
            var n = o(202784),
                i = o(325686),
                r = o(392237),
                a = o(530732),
                s = o(992942),
                l = o(731708),
                d = o(154003),
                c = o(725516),
                p = o(111677),
                h = o.n(p);
            const u = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: u, lightMode: m } },
                f = Object.freeze({ MarchMadness: "MarchMadness" }),
                b = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: p, withBackgroundImage: h }) => {
                    const u = (0, c.z)(),
                        m = f[o] || "Occasion",
                        b = h ? `${m}WithBackgroundImage` : m;
                    n.useEffect(() => {
                        u.scribe({ component: b, action: "impression" });
                    }, [u, b]);
                    const _ = () => {
                            u.scribe({ component: b, action: "click", element: "card" });
                        },
                        { backgroundcolor: C, buttonSize: v, cardWidth: Z, marginbottom: w, textcolor: x } = p ?? {},
                        I = C ? r.default.theme.colors[C] : r.default.theme.colors.gray0,
                        E = x ? r.default.theme.colors[x] : r.default.theme.colors.gray900,
                        k = w ? r.default.theme.spaces[w] : r.default.theme.spaces.space16,
                        P = { [f.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return h ? n.createElement(a.Z, { interactiveStyles: null, link: t, onPress: _, style: y.bannerContainer }, n.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === r.default.theme.paletteName ? P.image.lightMode : P.image.darkMode }, style: { height: 85 } })) : n.createElement(i.Z, { style: [y.card, { backgroundColor: I }, { maxWidth: Z }, { marginBottom: k }], testID: "popupCard" }, n.createElement(i.Z, { style: e ? y.horizontalContent : y.verticalContent }, n.createElement(i.Z, { style: e ? y.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, P.header), n.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: E }] }, P.description, " ", e ? null : P.legalDisclaimer)), n.createElement(i.Z, { style: y.buttonContainer }, n.createElement(d.ZP, { backgroundColor: "light" === r.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: _, size: "medium", style: [y.popupButton, { width: v }] }, P.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: E }] }, P.legalDisclaimer))));
                },
                y = r.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        300234: (e, t, o) => {
            o.d(t, { Z: () => N });
            var n = o(202784),
                i = o(325686),
                r = o(284702),
                a = o(174326),
                s = o(521812),
                l = o(392237),
                d = o(908478),
                c = o(516951),
                p = o(123751),
                h = o(443781);
            const u = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                g = o(386802),
                f = o(420740),
                b = o(111677),
                y = o.n(b),
                _ = o(965728);
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
                    const { children: e, onDismiss: t, onLayout: o, style: r } = this.props,
                        a = !!t;
                    return n.createElement(i.Z, { onLayout: o, onTouchEnd: a ? this._handleTouchEnd : void 0, onTouchMove: a ? this._handleTouchMove : void 0, onTouchStart: a ? this._handleTouchStart : void 0, style: r, testID: "swipe-to-dismiss" }, e);
                }
            }
            const Z = v;
            var w = o(992942),
                x = o(7022),
                I = o(309854),
                E = o(351686),
                k = o(822399);
            const P = y().b327c12a,
                S = y().gff1f69e;
            class T extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this.state = { loadingVariant: null, imageLoading: !1 }), (this._handleLoadStart = () => this.setState({ imageLoading: !0 })), (this._handleLoadEnd = () => this.setState({ imageLoading: !1 }));
                }
                componentDidMount() {
                    this._mountPromiseForTesting = T._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e }));
                }
                componentDidUpdate(e, t) {
                    (0, d.Z)(e.photo, this.props.photo) || (this.setState({ loadingVariant: null }), T._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e })));
                }
                render() {
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: r, onTap: a, onZoomed: s, photo: l, resetZoom: d, style: c, zoomable: p } = this.props,
                        { loadingVariant: h } = this.state,
                        u = (e && h && Math.max(h.width, h.height) >= 680 ? h.uri : null) || T._selectSource(l);
                    if (!u || null === h) return null;
                    const m = n.createElement(w.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : P, defaultSource: h && h.uri, draggable: !0, onError: h ? void 0 : o, onLoad: r, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: u, style: [D.img, t] });
                    return n.createElement(i.Z, { style: c }, this.state.imageLoading ? B : null, p ? n.createElement(x.Z, { onTap: a, onZoomed: s, resetZoom: d }, m) : m);
                }
                static _selectCachedVariant(e) {
                    const t = I.Z.getOriginalImage(e);
                    return t ? E.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = I.Z.getOriginalImage(e);
                    return t && E.Z.selectLargestUrl(t);
                }
            }
            T.defaultProps = { zoomable: !1 };
            const D = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                B = n.createElement(k.Z, { ariaValueText: S, indeterminate: !0, style: D.progressBar }),
                M = T;
            var V = o(310453);
            class L extends n.PureComponent {
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
                        [i, a] = t.video_info.aspect_ratio,
                        s = r.Z.extractVideoProps(o, t);
                    return (s.aspectRatio = i / a), n.createElement(V.Z, (0, m.Z)({}, s, { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: e, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const F = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                W = L,
                A = y().ac85c6b2,
                z = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: a, mediaDetail: s, onDismiss: l, onTap: d, promotedContent: c, videoId: p, ...h } = e,
                        [u, b] = n.useState(null),
                        [y, C] = n.useState({ width: 0, height: 0 }),
                        { isModal: v } = n.useContext(g.Z),
                        { height: w, width: x } = s.original_info || {},
                        { height: I, width: E } = y,
                        k = v || o ? (0, _.I5)({ mediaWidth: x, mediaHeight: w, containerWidth: E, containerHeight: I }, o) : R.mediaItem;
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
                            style: R.root,
                        },
                        u
                            ? n.createElement(f.Z, {
                                  onRetry: () => {
                                      b(null);
                                  },
                                  style: R.errorDetail,
                                  title: A,
                                  withLightOnDarkColorScheme: !0,
                              })
                            : null,
                        u
                            ? null
                            : n.createElement(
                                  i.Z,
                                  {
                                      onClick: (e) => {
                                          e.stopPropagation();
                                      },
                                      style: k,
                                  },
                                  "photo" === s.type
                                      ? n.createElement(
                                            M,
                                            (0, m.Z)({}, h, {
                                                imageStyle: o && !t && R.avatarImage,
                                                onError: (e) => {
                                                    b(e.nativeEvent.error);
                                                },
                                                onLoad: () => {
                                                    b(null);
                                                },
                                                onTap: d,
                                                photo: s,
                                                style: R.container,
                                                zoomable: !0,
                                            }),
                                        )
                                      : r.Z.isVideo(s) && p
                                        ? n.createElement(W, { isCurrentlyDisplayed: a, promotedContent: c, style: R.container, video: s, videoId: p })
                                        : null,
                              ),
                    );
                },
                R = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                O = n.memo(z, (e, t) => (0, d.Z)(e, t));
            class G extends n.Component {
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
                                return p.Z.forTweet(t[3]);
                            }
                        }),
                        (this._handleMediaDetailZoomed = (e) => {
                            const { onMediaDetailZoomed: t } = this.props;
                            this.state.isZoomed !== e && this.setState({ isZoomed: e }), t && t(e);
                        }),
                        (this.state = { isZoomed: !1 });
                }
                shouldComponentUpdate(e, t) {
                    return !(0, d.Z)(e, this.props) || !(0, d.Z)(t, this.state);
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
                    const { businessAvatar: e, dataSaver: t, mediaIndex: o, mediaItems: a, onDismiss: s, onTap: l, promotedContent: d } = this.props,
                        { isZoomed: c } = this.state,
                        p = a.map((i, p) => {
                            const h = r.Z.isVideo(i),
                                u = this._getItemVideoId(i),
                                m = o === p;
                            return h && !u ? null : n.createElement(O, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: p, mediaDetail: a[p], onDismiss: c ? void 0 : s, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: d, resetZoom: o !== p, videoId: u });
                        });
                    return n.createElement(i.Z, { style: Y.root }, a.length > 1 ? this._renderCarousel(p) : p);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: d } = this.state,
                        c = r.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(a.Z, { childrenStyle: [Y.dimensions, Y.scrollSnap], dominantButtonColor: t, isLocked: d, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: Y.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !c, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(s.ZP, { currentSlide: o, dominantColor: t, locked: d, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (G.contextType = h.rC), (G.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: c.Z, onMediaItemChanged: c.Z });
            const Y = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                N = u(G);
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                i = o(325686),
                r = o(108362),
                a = o(530732),
                s = o(154003),
                l = o(386802),
                d = o(392237),
                c = o(111677),
                p = o.n(c),
                h = o(837020),
                u = o(254944),
                m = o(965728),
                g = o(979512);
            const f = p().ia5e7488,
                b = p().ic76bdf0;
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: d, hideButtons: c, mediaItem: p, mediaUrl: g, overlayFooter: y, topRightButton: v } = this.props,
                        { isModal: Z } = this.context,
                        w = { backgroundColor: e.rgba, ...m.nk },
                        x = { backgroundColor: e.rgb, ...m.nk },
                        I = [_.root, Z ? w : x, { position: Z || d ? "relative" : "fixed" }],
                        E = p,
                        k = E?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: I }, t, o ? n.createElement(i.Z, { pointerEvents: c ? "none" : void 0, style: [_.footerButtons, y && w, y && _.footerButtonsAbsolute, c && _.fadeOut] }, n.createElement(r.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(a.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: c ? "none" : void 0, role: "none", style: [_.buttonWrapper, _.buttonWrapperLeft, m.nk, c && _.fadeOut] }, (t) => n.createElement(s.ZP, { "aria-label": f, dominantColor: e.rgb, hoverLabel: { label: f }, icon: n.createElement(h.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: p || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        v ? n.createElement(i.Z, { pointerEvents: c ? "none" : void 0, style: [_.buttonWrapper, _.buttonWrapperRight, m.nk, c && _.fadeOut] }, v) : null,
                        k
                            ? n.createElement(
                                  i.Z,
                                  { style: [_.buttonWrapperBottomCenter, m.nk, c && _.fadeOut] },
                                  n.createElement(
                                      s.ZP,
                                      {
                                          icon: n.createElement(u.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: k.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      b,
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
            const _ = d.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: d.default.iPhoneOffsetBottom, zIndex: 1 } })),
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
            o.d(t, { Z: () => r });
            var n = o(202784),
                i = o(272175);
            const r = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(i.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(420740),
                r = o(111677);
            const a = o.n(r)().b2311b70;
            function s() {
                return n.createElement(i.Z, { onRetry: null, title: a });
            }
            const l = n.memo(s);
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => d });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const i = (e, t, o) => {
                    const n = e(t),
                        i = e(o);
                    return !n && i ? -1 : n && !i ? 1 : 0;
                },
                r = (e, t, o) => a(e(o), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                s = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(o),
                        l = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        d = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            d.length > 0
                                ? s(d, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          s = t.getForItem(o.id);
                                      return i(a, n, s) || r(l, n, s);
                                  })
                                : null;
                    return c && c.id;
                },
                d = {
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
            o.d(t, { ZP: () => a });
            var n = o(202784),
                i = o(725516);
            function r() {
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
            const a = n.memo(r);
        },
        890882: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                i = o(443781);
            const r = (e) => {
                const { featureSwitches: t, userClaims: o } = n.useContext(i.rC),
                    r = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    a = o.isAnyPremiumSubscriber(),
                    { text: s } = e;
                return a && r ? n.createElement(n.Fragment, null, s) : s;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-9f4db315.79831c6a.js.map
