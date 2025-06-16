"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetMediaDetail-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconDoubleChevronRight-js", "icons/IconFilter-js"],
    {
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
                p = ({ retryMessage: e, ...t }, o) => {
                    const a = s.Z.isOnline();
                    return i.createElement(r.Z, (0, n.Z)({}, t, { icon: a ? void 0 : i.createElement(d.default, { style: u.icon }), retryMessage: a ? e : h }));
                },
                u = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = i.forwardRef(p);
        },
        300234: (e, t, o) => {
            o.d(t, { Z: () => j });
            var n = o(202784),
                i = o(325686),
                s = o(284702),
                r = o(174326),
                a = o(521812),
                l = o(392237),
                c = o(908478),
                d = o(516951),
                h = o(123751),
                p = o(443781);
            const u = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                g = o(386802),
                _ = o(420740),
                w = o(111677),
                y = o.n(w),
                f = o(965728);
            const v = { startX: 0, startY: 0 };
            class b extends n.Component {
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
                    const { children: e, onDismiss: t, onLayout: o, style: s } = this.props,
                        r = !!t;
                    return n.createElement(i.Z, { onLayout: o, onTouchEnd: r ? this._handleTouchEnd : void 0, onTouchMove: r ? this._handleTouchMove : void 0, onTouchStart: r ? this._handleTouchStart : void 0, style: s, testID: "swipe-to-dismiss" }, e);
                }
            }
            const T = b;
            var C = o(992942),
                Z = o(7022),
                x = o(309854),
                S = o(351686),
                E = o(822399);
            const P = y().b327c12a,
                I = y().gff1f69e;
            class M extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this.state = { loadingVariant: null, imageLoading: !1 }), (this._handleLoadStart = () => this.setState({ imageLoading: !0 })), (this._handleLoadEnd = () => this.setState({ imageLoading: !1 }));
                }
                componentDidMount() {
                    this._mountPromiseForTesting = M._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e }));
                }
                componentDidUpdate(e, t) {
                    (0, c.Z)(e.photo, this.props.photo) || (this.setState({ loadingVariant: null }), M._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e })));
                }
                render() {
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: s, onTap: r, onZoomed: a, photo: l, resetZoom: c, style: d, zoomable: h } = this.props,
                        { loadingVariant: p } = this.state,
                        u = (e && p && Math.max(p.width, p.height) >= 680 ? p.uri : null) || M._selectSource(l);
                    if (!u || null === p) return null;
                    const m = n.createElement(C.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : P, defaultSource: p && p.uri, draggable: !0, onError: p ? void 0 : o, onLoad: s, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: u, style: [D.img, t] });
                    return n.createElement(i.Z, { style: d }, this.state.imageLoading ? k : null, h ? n.createElement(Z.Z, { onTap: r, onZoomed: a, resetZoom: c }, m) : m);
                }
                static _selectCachedVariant(e) {
                    const t = x.Z.getOriginalImage(e);
                    return t ? S.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = x.Z.getOriginalImage(e);
                    return t && S.Z.selectLargestUrl(t);
                }
            }
            M.defaultProps = { zoomable: !1 };
            const D = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                k = n.createElement(E.Z, { ariaValueText: I, indeterminate: !0, style: D.progressBar }),
                B = M;
            var F = o(310453);
            class A extends n.PureComponent {
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
                    return (a.aspectRatio = i / r), n.createElement(F.Z, (0, m.Z)({}, a, { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: e, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const L = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                z = A,
                R = y().ac85c6b2,
                H = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: c, promotedContent: d, videoId: h, ...p } = e,
                        [u, w] = n.useState(null),
                        [y, v] = n.useState({ width: 0, height: 0 }),
                        { isModal: b } = n.useContext(g.Z),
                        { height: C, width: Z } = a.original_info || {},
                        { height: x, width: S } = y,
                        E = b || o ? (0, f.I5)({ mediaWidth: Z, mediaHeight: C, containerWidth: S, containerHeight: x }, o) : V.mediaItem;
                    return n.createElement(
                        T,
                        {
                            onDismiss: l,
                            onLayout:
                                b || o
                                    ? (e) => {
                                          const {
                                              nativeEvent: {
                                                  layout: { height: t, width: o },
                                              },
                                          } = e;
                                          (o === y.width && t === y.height) || v({ width: o, height: t });
                                      }
                                    : void 0,
                            style: V.root,
                        },
                        u
                            ? n.createElement(_.Z, {
                                  onRetry: () => {
                                      w(null);
                                  },
                                  style: V.errorDetail,
                                  title: R,
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
                                      style: E,
                                  },
                                  "photo" === a.type
                                      ? n.createElement(
                                            B,
                                            (0, m.Z)({}, p, {
                                                imageStyle: o && !t && V.avatarImage,
                                                onError: (e) => {
                                                    w(e.nativeEvent.error);
                                                },
                                                onLoad: () => {
                                                    w(null);
                                                },
                                                onTap: c,
                                                photo: a,
                                                style: V.container,
                                                zoomable: !0,
                                            }),
                                        )
                                      : s.Z.isVideo(a) && h
                                        ? n.createElement(z, { isCurrentlyDisplayed: r, promotedContent: d, style: V.container, video: a, videoId: h })
                                        : null,
                              ),
                    );
                },
                V = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                N = n.memo(H, (e, t) => (0, c.Z)(e, t));
            class O extends n.Component {
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
                            const p = s.Z.isVideo(i),
                                u = this._getItemVideoId(i),
                                m = o === h;
                            return p && !u ? null : n.createElement(N, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: h, mediaDetail: r[h], onDismiss: d ? void 0 : a, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: c, resetZoom: o !== h, videoId: u });
                        });
                    return n.createElement(i.Z, { style: W.root }, r.length > 1 ? this._renderCarousel(h) : h);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: c } = this.state,
                        d = s.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [W.dimensions, W.scrollSnap], dominantButtonColor: t, isLocked: c, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: W.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !d, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: c, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (O.contextType = p.rC), (O.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: d.Z, onMediaItemChanged: d.Z });
            const W = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                j = u(O);
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
                p = o(837020),
                u = o(254944),
                m = o(965728),
                g = o(979512);
            const _ = h().ia5e7488,
                w = h().ic76bdf0;
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: h, mediaUrl: g, overlayFooter: y, topRightButton: b } = this.props,
                        { isModal: T } = this.context,
                        C = { backgroundColor: e.rgba, ...m.nk },
                        Z = { backgroundColor: e.rgb, ...m.nk },
                        x = [f.root, T ? C : Z, { position: T || c ? "relative" : "fixed" }],
                        S = h,
                        E = S?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: x }, t, o ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [f.footerButtons, y && C, y && f.footerButtonsAbsolute, d && f.fadeOut] }, n.createElement(s.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [f.buttonWrapper, f.buttonWrapperLeft, m.nk, d && f.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": _, dominantColor: e.rgb, hoverLabel: { label: _ }, icon: n.createElement(p.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: h || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        b ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [f.buttonWrapper, f.buttonWrapperRight, m.nk, d && f.fadeOut] }, b) : null,
                        E
                            ? n.createElement(
                                  i.Z,
                                  { style: [f.buttonWrapperBottomCenter, m.nk, d && f.fadeOut] },
                                  n.createElement(
                                      a.ZP,
                                      {
                                          icon: n.createElement(u.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: E.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      w,
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
            (y.contextType = l.Z), (y.defaultProps = { hideButtons: !1 });
            const f = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
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
        233391: (e, t, o) => {
            o.d(t, { BH: () => N, Qj: () => j, Wc: () => O, sI: () => W });
            var n = o(202784),
                i = o(731708),
                s = o(392237),
                r = o(111677),
                a = o.n(r),
                l = o(911373),
                c = o(761744),
                d = o(98440),
                h = o(720600),
                p = o(125966),
                u = o(544367),
                m = o(452693),
                g = o(971657),
                _ = o(956272),
                w = o(520913);
            const y = a().a17a75da,
                f = a().e7342ed4,
                v = a().b6a43e78,
                b = a().b469e406,
                T = a().b8505290,
                C = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "e1a49407" }, n.createElement(i.ZP, null, e)) : void 0),
                Z = a().ae8b0564,
                x = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "be54ed41" }, n.createElement(i.ZP, null, e)) : void 0),
                S = a().f2adab0e,
                E = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "jb19eb17" }, n.createElement(i.ZP, null, e)) : void 0),
                P = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "bbfee611" }, n.createElement(i.ZP, null, e)) : void 0),
                I = a().b7821a74,
                M = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "af104f2b" }, n.createElement(i.ZP, null, e)) : void 0),
                D = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ccc1f303" }, n.createElement(i.ZP, null, e)) : void 0),
                k = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ce02fabf" }, n.createElement(i.ZP, null, e)) : void 0),
                B = a().e6d43d06,
                F = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "a85608a7" }, n.createElement(i.ZP, null, e)) : void 0),
                A = a().ic848090,
                L = a().f9ebe066,
                z = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "c76865b7" }, n.createElement(i.ZP, null, e)) : void 0),
                R = a().je3d93e2,
                H = a().ea88ce2e,
                V = a().je3d93e2,
                N = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                O = (e, t) => {
                    switch (t) {
                        case N.follow:
                            return { icon: l.default, text: P, subtext: I, iconStyle: U.iconOther };
                        case N.like:
                            return { icon: c.default, text: S, subtext: E, iconStyle: U.iconLike };
                        case N.reply:
                            return { icon: d.default, text: T, subtext: C, iconStyle: U.iconOther };
                        case N.retweet:
                            return { icon: h.default, text: Z, subtext: x, iconStyle: U.iconRetweet };
                        case N.dmshare:
                            return { icon: p.default, text: M, iconStyle: U.iconOther };
                        case N.subscribe:
                            return { icon: u.default, text: D, subtext: k, iconStyle: U.iconOther };
                        case N.topic:
                            return { icon: m.default, text: B, subtext: F, iconStyle: U.iconTopics };
                        case N.community:
                            return { icon: g.default, text: A, subtext: L, iconStyle: U.iconOther };
                        case N.search:
                            return { icon: _.default, text: z, subtext: R, iconStyle: U.iconOther };
                        default:
                            return { icon: w.default, text: H, subtext: V, iconStyle: U.iconTwitter };
                    }
                },
                W = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? y : v),
                j = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? f : b),
                U = s.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => E.BH, ZP: () => A });
            o(875640);
            var n = o(202784),
                i = o(529356),
                s = o(111677),
                r = o.n(s),
                a = o(323265),
                l = o(170542),
                c = o(951790),
                d = o(804027),
                h = o(443781),
                p = o(325686),
                u = o(292627),
                m = o(731708),
                g = o(154003),
                _ = o(392237);
            class w extends n.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: i, secondaryButtonLabel: s, secondaryText: r } = this.props;
                    return n.createElement(u.Z.HalfSheet, null, n.createElement(p.Z, { style: y.sheetContent }, n.createElement(p.Z, { style: y.content }, n.createElement(p.Z, { style: y.header }, n.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, i)), n.createElement(m.ZP, { color: "white", style: y.secondaryText }, r)), n.createElement(p.Z, { style: y.footer }, n.createElement(g.ZP, { onPress: t, size: "medium", style: y.button, type: "onMediaOutlined" }, n.createElement(m.ZP, { numberOfLines: 1 }, s)), n.createElement(g.ZP, { onPress: e, size: "medium", style: y.button, type: "onMediaWhiteFilled" }, n.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const y = _.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: _.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                f = w;
            var v = o(668214),
                b = o(558369),
                T = o(118823),
                C = o(390387),
                Z = o(38562),
                x = o(936572);
            const S = (0, v.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: b.ur, loginPromptShown: Z.fj, loginPromptLastShown: x.ne, startLocation: T.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: Z.Af, setLoginReturnPath: C.Jm, updateSettings: Z.VP }))
                .withAnalytics();
            var E = o(233391);
            o(920099), o(856642), o(782826), o(903019);
            const P = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                I = r().j607bf02,
                M = r().j49fd4e8,
                D = r().hd50e064,
                k = r().a565833e,
                B = r().e919c3bc;
            class F extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = E.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = E.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = E.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = l.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: o, useBottomBanner: n } = this.props,
                                { displayInterval: i } = this.state;
                            if (n && !this._hasMobileAppStore()) return !1;
                            if (o) {
                                if (t) return !1;
                                if (i && Date.now() - e < i) return !1;
                            }
                            return !0;
                        }),
                        (this._handleClose = () => {
                            this._scribeAction("dismiss"), this.props.onClose();
                        }),
                        (this._handleNotNow = () => {
                            this._scribeAction("not_now"), this.props.onClose();
                        }),
                        (this._handleSubmit = (e) => {
                            const { onClose: t, postLoginPath: o, setLoginReturnPath: n } = this.props;
                            this._scribeAction("login"), o && n(o), t();
                        }),
                        (this._handleSignupButtonClick = (e) => {
                            this._scribeAction("signup"), this.props.onClose();
                        }),
                        (this._handleAppInstallButtonClick = (e) => {
                            e.preventDefault(), this._scribeAction("download"), c.Z.goToAppStore("loggedoutprompt");
                        }),
                        (this._getSignupState = () => {
                            const { displayMode: e, tweetId: t, userId: o } = this.props;
                            switch (e) {
                                case E.BH.follow:
                                    return { gatedAction: { action: d.qJ.Follow, user_id: o } };
                                case E.BH.like:
                                    return { gatedAction: { action: d.qJ.Favorite, tweet_id: t, user_id: o } };
                                case E.BH.reply:
                                    return { gatedAction: { action: d.qJ.Reply, tweet_id: t, user_id: o } };
                                case E.BH.retweet:
                                    return { gatedAction: { action: d.qJ.Retweet, tweet_id: t, user_id: o } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => a.ZP.isIOS() || a.ZP.isAndroid());
                    const { useBottomBanner: o } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const n = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        i = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: o ? 864e5 * n : 0, switchToAppLink: P[i] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: o, updateSettings: n } = this.props;
                    !e && t && (o(!0), n({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: o, hideSignUp: s, isFullHeightOnMobile: r, loginLabel: a, useBottomBanner: l, userFullName: c } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: d, iconStyle: h, subtext: p, text: u } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof u ? u({ customText: t, userFullName: c }) : u,
                        g = "function" == typeof p ? p({ customText: t, userFullName: c }) : p,
                        _ = s ? "" : this.props.signupLabel,
                        w = { pathname: "/i/flow/login", state: this._getLoginState() },
                        y = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return l ? n.createElement(f, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: M, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: D, secondaryText: this._getHalfSheetSecondaryText() }) : n.createElement(i.Z, { actionLabel: a, actionLink: w, allowBackNavigation: e, graphic: d, graphicStyle: h, headline: m || "", isFullHeightOnMobile: r, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: _, secondaryActionLink: y, subtext: g || "", tertiaryActionLabel: this._showTertiaryCTA ? I : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: n } = this.props,
                        i = n ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: i, action: e });
                }
            }
            (F.defaultProps = { displayMode: E.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: B, signupLabel: k, onlyShowOnce: !1 }), (F.displayMode = E.BH), (F.contextType = h.rC);
            const A = S(F);
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
            const p = "error-detail",
                u = d().e49537c2,
                m = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(i.Z, { testID: p }, n.createElement(h.Z, null), n.createElement(s.Z, { style: _.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: _.retryText }, u), n.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const _ = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
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
        167496: (e, t, o) => {
            o.d(t, { Z: () => m, r: () => u });
            var n = o(202784),
                i = o(154003),
                s = o(811176),
                r = o(111677),
                a = o.n(r),
                l = o(517747);
            const c = a().d7b8ebaa,
                d = a().d601fc20,
                h = a().j43f99be,
                p = a().ad6e11ac,
                u = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function m({ replyDropdownSelection: e = u.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    r = n.useMemo(
                        () => [
                            { isSelected: u.relevance === e, onClick: o(u.relevance), selectable: !0, text: h },
                            { isSelected: u.recency === e, onClick: o(u.recency), selectable: !0, text: d },
                            { isSelected: u.likes === e, onClick: o(u.likes), selectable: !0, text: c },
                        ],
                        [o, e],
                    );
                return n.createElement(i.ZP, { "aria-haspopup": "menu", icon: n.createElement(l.default, null), renderMenu: (e) => n.createElement(s.Z, { description: p, items: r, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => P, ZP: () => E });
            var n = o(662678),
                i = o(769471),
                s = o(337637),
                r = o(459679),
                a = o(192337),
                l = o(962741),
                c = o(372703),
                d = o(466015),
                h = o(267483),
                p = o(263863),
                u = o(351322),
                m = o(37533),
                g = o(777809),
                _ = o(652815),
                w = o(560520),
                y = o(367991),
                f = o(705638),
                v = o(801184),
                b = o(335632);
            const T = "FocalTweetInlineTombstone",
                C = "More Replies";
            let Z;
            const x = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                S = { ...(0, b.G)({}), [l.ZP.Tweet]: (0, f.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                E = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: s, replyDropdownSelection: r, rootTweetAuthorId: a, tweetTextSize: d, withFocalTweetMedia: f, withRuxInjections: b }) =>
                    (0, i.Z)({}, S, {
                        [l.ZP.SelfThreadTweetComposer]: _.Z,
                        [l.ZP.Tweet]: {
                            handlers: {
                                [p.Z.Tweet]: (0, v.Cw)({
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
                                [p.Z.FocalTweet]: (0, v.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: i, hasModeratedReplies: s },
                                                conversationPosition: l,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: h, promotedContent: p, socialContext: u, topicFollowPrompt: m } = d || {};
                                        return {
                                            contextTweetId: h,
                                            conversationAnnotation: i,
                                            hasModeratedReplies: !!(s && l && l.isStart),
                                            promotedContent: p,
                                            rootTweetAuthorId: a,
                                            socialContext: u,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: f,
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
                                [p.Z.SelfThread]: (0, v.Cw)({ hideReplyContextMode: t }),
                                [p.Z.ReaderMode]: (0, v.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [T]: (0, y._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [h.Z.Inline]: (0, y._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? c.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: u.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === C ? x.TransparentCursor : x.Default))(e, s), handlers: { [x.TransparentCursor]: g.L, [x.Default]: g.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: b }),
                        [l.ZP.ThreadHeader]: w.Z,
                    }),
                P = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: i, showOnlyRelevantReplies: c, socialContext: d, topicFollowPrompt: p }) => {
                    const u = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, s.Z)(o, u);
                        let g = !1;
                        const _ = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let w;
                        return (0, r.Z)(_, (o, n) => {
                            const s = o.type === l.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                r = o.type === l.ZP.Label && o.content.text === C;
                            if (c && (s || r)) return void 0 === w && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (Z = n) : void 0 === w && (w = n), !1;
                            if (c && void 0 !== w && n >= w) return !1;
                            if (c && void 0 === w && n >= Z) return !1;
                            const u = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || u) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const s = !g;
                                if (((g = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return k(o, s);
                                    if (o.type === l.ZP.Tombstone) return B(o, s);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: s, isEnd: !0 };
                                        return o.content.displayType === h.Z.Inline ? M({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: p, conversationPosition: t }) : D({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return I({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: i, topicFollowPrompt: p, conversationPosition: { isStart: s, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                I = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: i, socialContext: s, topicFollowPrompt: r }) => d.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: s, promotedContent: i, topicFollowPrompt: r } }, { displayType: p.Z.FocalTweet }),
                M = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: i }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: T }),
                D = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                k = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                B = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                i = o(111677),
                s = o.n(i),
                r = o(912021),
                a = o(218093),
                l = o(334346),
                c = o(332878),
                d = o(163889),
                h = o(466015),
                p = o(847933),
                u = o(519896),
                m = o(443781),
                g = o(56851),
                _ = o(810641),
                w = o(438965),
                y = o(668214);
            const f = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                v = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                b = (0, y.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: f, contextualClientEventInfo: v }));
            var T = o(519125);
            const C = s().d35d74e4,
                Z = (e) => {
                    switch (e) {
                        case p.Z.NOT_FOUND:
                            return n.createElement(g.Z, null);
                        case p.Z.NOT_ALLOWED:
                            return n.createElement(a.Z, null);
                        default:
                            return (0, d.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                x = () => n.createElement(g.Z, null);
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, r.Z)((e, t, o, n, i, s, r) => (0, T.Mu)({ focalTweetId: i, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: s, promotedContent: n, showOnlyRelevantReplies: r }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: i, topicFollowPrompt: s } = this.props;
                            return this._getMemoizedPreprocessor(i, e, t, n, o, s, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, r.Z)((e, t, o, n, i, s) => {
                            const r = e && n && e === n;
                            return (0, T.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!r, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: i, withRuxInjections: s });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                i = e.replyDropdownSelection,
                                s = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? w.j.CONVERSATION : void 0,
                                r = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, s, i, t, n, r);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: i } = this.props;
                    return n.createElement(_.Z, { anchoring: c.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: i, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: u.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: x, renderUnavailable: Z, title: C });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [h.Se({ id: t, sortIndex: l.Z })] : void 0;
                }
            }
            (S.defaultProps = { withFocalTweetMedia: !0 }), (S.contextType = m.rC);
            const E = b(S);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => s, Hx: () => l, Oj: () => i, P3: () => c, QO: () => a, j: () => r });
            var n = o(942893);
            const i = { component: "tweet" },
                s = { component: "thread" },
                r = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                a =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => n.Z.getTweetURTEntryItem(e),
                c = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                i = o(476984),
                s = o.n(i),
                r = o(143778),
                a = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                p = "none";
            class u extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: i, icon: s, loadingMessage: r, onRequestRetry: d, render: u, renderFailure: m, retryMessage: g, retryable: _ } = this.props;
                    switch (i) {
                        case c:
                            return _ ? n.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : o ? n.createElement(l.m, { failureMessage: o }) : m();
                        case h:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: r });
                        case p:
                            return null;
                        default:
                            return u();
                    }
                }
            }
            u.defaultProps = { renderFailure: r.Z, retryable: !0 };
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
            const d = o(393058).Z.isTouchSupported(),
                h = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                p = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                u = (e, t, o) => Math.min(t, Math.max(e, o)),
                m = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class _ extends n.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = p),
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
                                i = u(o, t, this.state.zoom),
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
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: w.fill },
                        n.createElement(i.y_, { style: r }, ({ zoom: e, zoomCenterX: i, zoomCenterY: r }) => n.createElement(s.Z, { ref: this._ref, style: [w.fill, { transform: [{ scale: e }], transformOrigin: `${o ? i : t.x}px ${o ? r : t.y}px` }] }, this.props.children)),
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
                    let p = 0,
                        u = 0;
                    h - c > 0 && (p = t - n), d - l > 0 && (u = o - i), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - p, 0, c), y: (0, r.Z)(a - u, 0, l) } });
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
                        p = this._lastDistance ? h / this._lastDistance : 1,
                        _ = u(c - d, a + l, i * p),
                        w = g(t[0], t[1]),
                        y = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (w.x - o), 0, t), y: (0, r.Z)(s.y - (w.y - n), 0, e) };
                        })();
                    (this._lastDistance = h), this.setState({ lastX: w.x, lastY: w.y, zoom: _, zoomCenter: y });
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
            const w = c.default.create((e) => ({ fill: { flex: 1 } })),
                y = _;
        },
        610357: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(717683),
                a = o(347101);
            const l = (e = {}) => {
                const t = n.useContext(r.Z),
                    { direction: o } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11.59 12L3.54 3.96l1.42-1.42L14.41 12l-9.45 9.46-1.42-1.42L11.59 12zm7 0l-8.05-8.04 1.42-1.42L21.41 12l-9.45 9.46-1.42-1.42L18.59 12z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        517747: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        648539: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                i = o(890601),
                s = o(783427),
                r = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaDetail-6107ac1a.2ecb03ea.js.map
