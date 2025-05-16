"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReaderMode-6107ac1a"],
    {
        300234: (e, t, o) => {
            o.d(t, { Z: () => G });
            var n = o(202784),
                i = o(325686),
                s = o(284702),
                r = o(174326),
                a = o(521812),
                l = o(392237),
                d = o(908478),
                c = o(516951),
                h = o(123751),
                u = o(443781);
            const p = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                g = o(386802),
                _ = o(420740),
                y = o(332920),
                f = o.n(y),
                w = o(952793),
                C = o(965728);
            const T = { startX: 0, startY: 0 };
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._pullDistanceY = 0),
                        (this._pullInfo = { ...T }),
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
                            this._updatePullPosition(0), (this._pullInfo = { ...T });
                        });
                }
                render() {
                    const { children: e, onDismiss: t, onLayout: o, style: s } = this.props,
                        r = !!t;
                    return n.createElement(i.Z, { onLayout: o, onTouchEnd: r ? this._handleTouchEnd : void 0, onTouchMove: r ? this._handleTouchMove : void 0, onTouchStart: r ? this._handleTouchStart : void 0, style: s, testID: "swipe-to-dismiss" }, e);
                }
            }
            const b = Z;
            var v = o(992942),
                x = o(7022),
                P = o(309854),
                I = o(351686),
                S = o(822399);
            const E = f().b327c12a,
                D = f().gff1f69e;
            class M extends n.PureComponent {
                constructor(...e) {
                    super(...e), (this.state = { loadingVariant: null, imageLoading: !1 }), (this._handleLoadStart = () => this.setState({ imageLoading: !0 })), (this._handleLoadEnd = () => this.setState({ imageLoading: !1 }));
                }
                componentDidMount() {
                    this._mountPromiseForTesting = M._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e }));
                }
                componentDidUpdate(e, t) {
                    (0, d.Z)(e.photo, this.props.photo) || (this.setState({ loadingVariant: null }), M._selectCachedVariant(this.props.photo).then((e) => this.setState({ loadingVariant: e })));
                }
                render() {
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: s, onTap: r, onZoomed: a, photo: l, resetZoom: d, style: c, zoomable: h } = this.props,
                        { loadingVariant: u } = this.state,
                        p = (e && u && Math.max(u.width, u.height) >= 680 ? u.uri : null) || M._selectSource(l);
                    if (!p || null === u) return null;
                    const m = n.createElement(v.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : E, defaultSource: u && u.uri, draggable: !0, onError: u ? void 0 : o, onLoad: s, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: p, style: [k.img, t] });
                    return n.createElement(i.Z, { style: c }, this.state.imageLoading ? F : null, h ? n.createElement(x.Z, { onTap: r, onZoomed: a, resetZoom: d }, m) : m);
                }
                static _selectCachedVariant(e) {
                    const t = P.Z.getOriginalImage(e);
                    return t ? I.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = P.Z.getOriginalImage(e);
                    return t && I.Z.selectLargestUrl(t);
                }
            }
            M.defaultProps = { zoomable: !1 };
            const k = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                F = n.createElement(S.Z, { ariaValueText: D, indeterminate: !0, style: k.progressBar }),
                R = M;
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
                    return n.createElement(i.Z, { style: e }, n.createElement(i.Z, { style: L.root }, this._renderVideo()));
                }
                componentDidUpdate(e) {
                    const { isCurrentlyDisplayed: t } = this.props;
                    this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause());
                }
                _renderVideo() {
                    const { isVerticalVideoNoBlackBars: e, promotedContent: t, video: o, videoId: i } = this.props;
                    return n.createElement(z.Z, (0, m.Z)({}, s.Z.extractVideoProps(i, o, void 0, void 0, !1, e), { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: t, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const L = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                V = B,
                A = f().ac85c6b2,
                W = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: d, promotedContent: c, videoId: h, ...u } = e,
                        [p, y] = n.useState(null),
                        [f, T] = n.useState({ width: 0, height: 0 }),
                        { isModal: Z } = n.useContext(g.Z),
                        { height: v, width: x } = a.original_info || {},
                        { height: P, width: I } = f,
                        S = (0, w.hC)("rweb_video_vertical_aspect_ratio_enabled"),
                        E = S || Z || o ? (0, C.I5)({ mediaWidth: x, mediaHeight: v, containerWidth: I, containerHeight: P }, o) : Y.mediaItem;
                    return n.createElement(
                        b,
                        {
                            onDismiss: l,
                            onLayout:
                                S || Z || o
                                    ? (e) => {
                                          const {
                                              nativeEvent: {
                                                  layout: { height: t, width: o },
                                              },
                                          } = e;
                                          (o === f.width && t === f.height) || T({ width: o, height: t });
                                      }
                                    : void 0,
                            style: Y.root,
                        },
                        p
                            ? n.createElement(_.Z, {
                                  onRetry: () => {
                                      y(null);
                                  },
                                  style: Y.errorDetail,
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
                                            R,
                                            (0, m.Z)({}, u, {
                                                imageStyle: o && !t && Y.avatarImage,
                                                onError: (e) => {
                                                    y(e.nativeEvent.error);
                                                },
                                                onLoad: () => {
                                                    y(null);
                                                },
                                                onTap: d,
                                                photo: a,
                                                style: Y.container,
                                                zoomable: !0,
                                            }),
                                        )
                                      : s.Z.isVideo(a) && h
                                        ? n.createElement(V, { isCurrentlyDisplayed: r, isVerticalVideoNoBlackBars: S, promotedContent: c, style: Y.container, video: a, videoId: h })
                                        : null,
                              ),
                    );
                },
                Y = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                N = n.memo(W, (e, t) => (0, d.Z)(e, t));
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
                    const { businessAvatar: e, dataSaver: t, mediaIndex: o, mediaItems: r, onDismiss: a, onTap: l, promotedContent: d } = this.props,
                        { isZoomed: c } = this.state,
                        h = r.map((i, h) => {
                            const u = s.Z.isVideo(i),
                                p = this._getItemVideoId(i),
                                m = o === h;
                            return u && !p ? null : n.createElement(N, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: h, mediaDetail: r[h], onDismiss: c ? void 0 : a, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: d, resetZoom: o !== h, videoId: p });
                        });
                    return n.createElement(i.Z, { style: X.root }, r.length > 1 ? this._renderCarousel(h) : h);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: d } = this.state,
                        c = s.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [X.dimensions, X.scrollSnap], dominantButtonColor: t, isLocked: d, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: X.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !c, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: d, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (O.contextType = u.rC), (O.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: c.Z, onMediaItemChanged: c.Z });
            const X = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                G = p(O);
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(202784),
                i = o(325686),
                s = o(108362),
                r = o(530732),
                a = o(154003),
                l = o(386802),
                d = o(392237),
                c = o(332920),
                h = o.n(c),
                u = o(837020),
                p = o(254944),
                m = o(965728),
                g = o(979512);
            const _ = h().ia5e7488,
                y = h().ic76bdf0;
            class f extends n.Component {
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: d, hideButtons: c, mediaItem: h, mediaUrl: g, overlayFooter: f, topRightButton: T } = this.props,
                        { isModal: Z } = this.context,
                        b = { backgroundColor: e.rgba, ...m.nk },
                        v = { backgroundColor: e.rgb, ...m.nk },
                        x = [w.root, Z ? b : v, { position: Z || d ? "relative" : "fixed" }],
                        P = h,
                        I = P?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: x }, t, o ? n.createElement(i.Z, { pointerEvents: c ? "none" : void 0, style: [w.footerButtons, f && b, f && w.footerButtonsAbsolute, c && w.fadeOut] }, n.createElement(s.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: c ? "none" : void 0, role: "none", style: [w.buttonWrapper, w.buttonWrapperLeft, m.nk, c && w.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": _, dominantColor: e.rgb, hoverLabel: { label: _ }, icon: n.createElement(u.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: h || g || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        T ? n.createElement(i.Z, { pointerEvents: c ? "none" : void 0, style: [w.buttonWrapper, w.buttonWrapperRight, m.nk, c && w.fadeOut] }, T) : null,
                        I
                            ? n.createElement(
                                  i.Z,
                                  { style: [w.buttonWrapperBottomCenter, m.nk, c && w.fadeOut] },
                                  n.createElement(
                                      a.ZP,
                                      {
                                          icon: n.createElement(p.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: I.prompt, autoSubmit: !0, source: "post_image_annotation" });
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
            (f.contextType = l.Z), (f.defaultProps = { hideButtons: !1 });
            const w = d.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: d.default.iPhoneOffsetBottom, zIndex: 1 } })),
                C = ({ onOpenGrokUpdate: e }) => {
                    const { openGrok: t } = (0, g.Z)();
                    return (
                        n.useEffect(() => {
                            e(t);
                        }, [t]),
                        null
                    );
                };
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(420740),
                s = o(332920);
            const r = o.n(s)().b2311b70;
            function a() {
                return n.createElement(i.Z, { onRetry: null, title: r });
            }
            const l = n.memo(a);
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
                s = (e, t, o) => r(e(o), e(t)),
                r = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                a = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        r = (e) => e && e.doesIntersectWith(o),
                        l = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        d = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            d.length > 0
                                ? a(d, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          a = t.getForItem(o.id);
                                      return i(r, n, a) || s(l, n, a);
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
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                i = o(500002),
                s = o(668214),
                r = o(997174),
                a = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class d extends n.Component {
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
                    const d = i || a;
                    ((d && i !== a) || (!d && o !== s) || n !== r || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, i.ZP)(l(d));
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => S, ZP: () => I });
            var n = o(662678),
                i = o(769471),
                s = o(337637),
                r = o(459679),
                a = o(192337),
                l = o(962741),
                d = o(372703),
                c = o(466015),
                h = o(267483),
                u = o(263863),
                p = o(351322),
                m = o(37533),
                g = o(777809),
                _ = o(652815),
                y = o(560520),
                f = o(367991),
                w = o(705638),
                C = o(801184),
                T = o(335632);
            const Z = "FocalTweetInlineTombstone",
                b = "More Replies";
            let v;
            const x = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                P = { ...(0, T.G)({}), [l.ZP.Tweet]: (0, w.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                I = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: s, replyDropdownSelection: r, rootTweetAuthorId: a, tweetTextSize: c, withFocalTweetMedia: w, withRuxInjections: T }) =>
                    (0, i.Z)({}, P, {
                        [l.ZP.SelfThreadTweetComposer]: _.Z,
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
                                                    t({ entry: e, feedbackKeys: [d.qt] });
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
                                                referringContext: c,
                                            } = t,
                                            { contextTweetId: h, promotedContent: u, socialContext: p, topicFollowPrompt: m } = c || {};
                                        return {
                                            contextTweetId: h,
                                            conversationAnnotation: i,
                                            hasModeratedReplies: !!(s && l && l.isStart),
                                            promotedContent: u,
                                            rootTweetAuthorId: a,
                                            socialContext: p,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: w,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [d.qt] });
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
                                [u.Z.ReaderMode]: (0, C.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [Z]: (0, f._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [h.Z.Inline]: (0, f._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? d.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: p.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === b ? x.TransparentCursor : x.Default))(e, s), handlers: { [x.TransparentCursor]: g.L, [x.Default]: g.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: T }),
                        [l.ZP.ThreadHeader]: y.Z,
                    }),
                S = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: i, showOnlyRelevantReplies: d, socialContext: c, topicFollowPrompt: u }) => {
                    const p = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, s.Z)(o, p);
                        let g = !1;
                        const _ = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let y;
                        return (0, r.Z)(_, (o, n) => {
                            const s = o.type === l.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                r = o.type === l.ZP.Label && o.content.text === b;
                            if (d && (s || r)) return void 0 === y && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (v = n) : void 0 === y && (y = n), !1;
                            if (d && void 0 !== y && n >= y) return !1;
                            if (d && void 0 === y && n >= v) return !1;
                            const p = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || p) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const s = !g;
                                if (((g = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return k(o, s);
                                    if (o.type === l.ZP.Tombstone) return F(o, s);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: s, isEnd: !0 };
                                        return o.content.displayType === h.Z.Inline ? D({ contextTweetId: e, entry: o, socialContext: c, topicFollowPrompt: u, conversationPosition: t }) : M({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return E({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: c, promotedContent: i, topicFollowPrompt: u, conversationPosition: { isStart: s, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                E = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: i, socialContext: s, topicFollowPrompt: r }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: s, promotedContent: i, topicFollowPrompt: r } }, { displayType: u.Z.FocalTweet }),
                D = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: i }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: Z }),
                M = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                k = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                F = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        607015: (e, t, o) => {
            o.d(t, { ZP: () => T });
            var n = o(202784),
                i = o(167630),
                s = o(332920),
                r = o.n(s),
                a = o(218093),
                l = o(332878),
                d = o(163889),
                c = o(87063),
                h = o(847933),
                u = o(231035),
                p = o(519125),
                m = o(810641),
                g = o(668214);
            const _ = (e, t) => t.module.selectInitialFetchStatus(e),
                y = (e, t) => t.module.selectTopFetchStatus(e),
                f = (0, g.Z)().propsFromState(() => ({ moduleInitialFetchStatus: _, moduleTopFetchStatus: y })),
                w = r().c299a6c0,
                C = (e) => (t, o) => t && t.content && !!t.content.id && t.content.id === e,
                T = f(({ focalTweetId: e, module: t, moduleInitialFetchStatus: o, moduleTopFetchStatus: s, rootTweetId: r, tweetTextSize: g }) => {
                    const _ = (0, p.ZP)({ isCurrentUserRootAuthor: !0, withFocalTweetMedia: !0, isTransparentCursorsEnabled: !0, isReaderMode: !0, tweetTextSize: g }),
                        y = (r !== e && o === c.Z.LOADING) || s === c.Z.LOADING;
                    return n.createElement(m.Z, {
                        anchoring: l.Z,
                        entryConfiguration: _,
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
                                    return (0, d.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                            }
                        },
                        title: w,
                    });
                });
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => s });
            var n = o(516951),
                i = o(615656);
            const s = { [i.ZP.OtherUserSuspended]: { customAction: n.Z }, [i.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => y, I5: () => m, K2: () => _, L$: () => d, Rb: () => g, nk: () => p, sI: () => C, xr: () => f });
            var n = o(202784),
                i = o(483677),
                s = o(782578),
                r = o(393058),
                a = o(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && i.Z.getForGallery(e);
                    return t ? { rgb: f(t), rgba: l(t, 0.9) } : u;
                },
                c = a.Z.columnWidths.primary,
                h = (e, t) => Math.min(t, e),
                u = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: o, containerWidth: n, mediaHeight: i, mediaWidth: r } = e,
                        a = r && i ? r / i : 1,
                        l = a > 1,
                        d = t ? 400 : c,
                        u = l && r <= d ? h(n, d) : n,
                        p = !l && i <= d ? h(o, d) : o;
                    return s.Z.getContainDimensions({ width: u, height: p }, a);
                },
                g = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(t);
                },
                _ = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(t);
                },
                y = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                f = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                w = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload?.isZoomed, showControls: !t.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                C = () => {
                    const [e, t] = n.useReducer(w, { isZoomed: !1, showControls: !0 });
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
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(325686),
                s = o(235902),
                r = o(885015),
                a = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? n.createElement(r.Z, { style: !t && d.root, withGutter: !0 }, n.createElement(i.Z, { style: d.gapColumn }, n.createElement(i.Z, { style: [d.gap, c] })), n.createElement(i.Z, { style: d.gapText }, o), n.createElement(i.Z, { style: d.gapColumn }, n.createElement(i.Z, { style: [d.gap, c] }))) : n.createElement(i.Z, { style: [!t && d.root, l() && d.rootRedesign, d.gap, c] });
            }
            const d = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => d });
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
                d = a;
        },
        7022: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(202784),
                i = o(196001),
                s = o(325686),
                r = o(837880),
                a = o(516951),
                l = o(933895),
                d = o(392237);
            const c = o(393058).Z.isTouchSupported(),
                h = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                u = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                p = (e, t, o) => Math.min(t, Math.max(e, o)),
                m = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
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
                                i = p(o, t, this.state.zoom),
                                { zoom: s } = this.state;
                            s !== i && 1 === i ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: i }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : s <= 1 && !this._moved && (this._clickTimer = setTimeout(n, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...h });
                }
                static getDerivedStateFromProps(e, t) {
                    return c && e.resetZoom ? (e.onZoomed(!1), { ...h }) : t;
                }
                render() {
                    if (!c) return this.props.children;
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
                    c && this._updateWindowDimensions();
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
                        { height: l, width: d } = this._windowDimensions,
                        { height: c, width: h } = this._zoomedDimensions;
                    let u = 0,
                        p = 0;
                    h - d > 0 && (u = t - n), c - l > 0 && (p = o - i), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - u, 0, d), y: (0, r.Z)(a - p, 0, l) } });
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
                        { maxZoom: a, maxZoomBounce: l, minZoom: d, minZoomBounce: c } = this.props;
                    if (0 === s.x && 0 === s.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const h = m(t[0], t[1]),
                        u = this._lastDistance ? h / this._lastDistance : 1,
                        _ = p(d - c, a + l, i * u),
                        y = g(t[0], t[1]),
                        f = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (y.x - o), 0, t), y: (0, r.Z)(s.y - (y.y - n), 0, e) };
                        })();
                    (this._lastDistance = h), this.setState({ lastX: y.x, lastY: y.y, zoom: _, zoomCenter: f });
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
            const y = d.default.create((e) => ({ fill: { flex: 1 } })),
                f = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReaderMode-6107ac1a.be1bdeca.js.map
