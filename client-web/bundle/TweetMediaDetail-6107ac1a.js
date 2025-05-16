"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetMediaDetail-6107ac1a"],
    {
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
                p = o(123751),
                h = o(443781);
            const u = (0, o(668214).Z)().withAnalytics({ component: "gallery" });
            var m = o(807896),
                _ = o(386802),
                g = o(420740),
                w = o(674132),
                y = o.n(w),
                f = o(952793),
                b = o(965728);
            const T = { startX: 0, startY: 0 };
            class C extends n.Component {
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
            const Z = C;
            var x = o(992942),
                S = o(7022),
                v = o(309854),
                P = o(351686),
                E = o(822399);
            const I = y().b327c12a,
                D = y().gff1f69e;
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
                    const { dataSaver: e, imageStyle: t, onError: o, onLoad: s, onTap: r, onZoomed: a, photo: l, resetZoom: c, style: d, zoomable: p } = this.props,
                        { loadingVariant: h } = this.state,
                        u = (e && h && Math.max(h.width, h.height) >= 680 ? h.uri : null) || M._selectSource(l);
                    if (!u || null === h) return null;
                    const m = n.createElement(x.Z, { "aria-label": l.ext_alt_text ? l.ext_alt_text : I, defaultSource: h && h.uri, draggable: !0, onError: h ? void 0 : o, onLoad: s, onLoadEnd: this._handleLoadEnd, onLoadStart: this._handleLoadStart, resizeMode: "contain", source: u, style: [A.img, t] });
                    return n.createElement(i.Z, { style: d }, this.state.imageLoading ? k : null, p ? n.createElement(S.Z, { onTap: r, onZoomed: a, resetZoom: c }, m) : m);
                }
                static _selectCachedVariant(e) {
                    const t = v.Z.getOriginalImage(e);
                    return t ? P.Z.selectLargestCachedVariant(t) : Promise.resolve();
                }
                static _selectSource(e) {
                    const t = v.Z.getOriginalImage(e);
                    return t && P.Z.selectLargestUrl(t);
                }
            }
            M.defaultProps = { zoomable: !1 };
            const A = l.default.create((e) => ({ img: { ...l.default.absoluteFillObject, height: "auto", margin: "auto", maxHeight: "100%", maxWidth: "100%", width: "auto" }, progressBar: { position: "absolute", top: 0, zIndex: 1 } })),
                k = n.createElement(E.Z, { ariaValueText: D, indeterminate: !0, style: A.progressBar }),
                B = M;
            var F = o(310453);
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
                    return n.createElement(i.Z, { style: e }, n.createElement(i.Z, { style: R.root }, this._renderVideo()));
                }
                componentDidUpdate(e) {
                    const { isCurrentlyDisplayed: t } = this.props;
                    this._player && t !== e.isCurrentlyDisplayed && (t ? this._player.play() : this._player.pause());
                }
                _renderVideo() {
                    const { isVerticalVideoNoBlackBars: e, promotedContent: t, video: o, videoId: i } = this.props;
                    return n.createElement(F.Z, (0, m.Z)({}, s.Z.extractVideoProps(i, o, void 0, void 0, !1, e), { onPlaybackStarted: this._handlePlaybackStarted, playbackCoordination: null, promotedContent: t, setPlayer: this._setPlayer, withPostPlayback: !0 }));
                }
            }
            const R = l.default.create({ root: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center" } }),
                z = L,
                N = y().ac85c6b2,
                O = (e) => {
                    const { businessAvatar: t = !1, isAvatar: o, isCurrentlyDisplayed: r, mediaDetail: a, onDismiss: l, onTap: c, promotedContent: d, videoId: p, ...h } = e,
                        [u, w] = n.useState(null),
                        [y, T] = n.useState({ width: 0, height: 0 }),
                        { isModal: C } = n.useContext(_.Z),
                        { height: x, width: S } = a.original_info || {},
                        { height: v, width: P } = y,
                        E = (0, f.hC)("rweb_video_vertical_aspect_ratio_enabled"),
                        I = E || C || o ? (0, b.I5)({ mediaWidth: S, mediaHeight: x, containerWidth: P, containerHeight: v }, o) : V.mediaItem;
                    return n.createElement(
                        Z,
                        {
                            onDismiss: l,
                            onLayout:
                                E || C || o
                                    ? (e) => {
                                          const {
                                              nativeEvent: {
                                                  layout: { height: t, width: o },
                                              },
                                          } = e;
                                          (o === y.width && t === y.height) || T({ width: o, height: t });
                                      }
                                    : void 0,
                            style: V.root,
                        },
                        u
                            ? n.createElement(g.Z, {
                                  onRetry: () => {
                                      w(null);
                                  },
                                  style: V.errorDetail,
                                  title: N,
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
                                      style: I,
                                  },
                                  "photo" === a.type
                                      ? n.createElement(
                                            B,
                                            (0, m.Z)({}, h, {
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
                                      : s.Z.isVideo(a) && p
                                        ? n.createElement(z, { isCurrentlyDisplayed: r, isVerticalVideoNoBlackBars: E, promotedContent: d, style: V.container, video: a, videoId: p })
                                        : null,
                              ),
                    );
                },
                V = l.default.create((e) => ({ root: { flexGrow: 1, justifyContent: "center", alignItems: "center", flexShrink: 1 }, mediaItem: { flexGrow: 1, width: "100%", height: "100%" }, container: { height: "100%", position: "absolute", width: "100%" }, errorDetail: { alignItems: "center", alignSelf: "center", justifyContent: "center", position: "absolute", height: "100%", maxWidth: 400 }, avatarImage: { borderRadius: e.borderRadii.infinite, margin: e.spaces.space16 } })),
                H = n.memo(O, (e, t) => (0, c.Z)(e, t));
            class W extends n.Component {
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
                        p = r.map((i, p) => {
                            const h = s.Z.isVideo(i),
                                u = this._getItemVideoId(i),
                                m = o === p;
                            return h && !u ? null : n.createElement(H, { businessAvatar: e, dataSaver: t, isAvatar: this.props.isAvatar, isCurrentlyDisplayed: m, key: p, mediaDetail: r[p], onDismiss: d ? void 0 : a, onTap: l, onZoomed: m ? this._handleMediaDetailZoomed : void 0, promotedContent: c, resetZoom: o !== p, videoId: u });
                        });
                    return n.createElement(i.Z, { style: U.root }, r.length > 1 ? this._renderCarousel(p) : p);
                }
                _renderCarousel(e) {
                    const { dominantColor: t, mediaIndex: o, mediaItems: i, onMediaItemChanged: l } = this.props,
                        { isZoomed: c } = this.state,
                        d = s.Z.isVideo(i[o]);
                    return this.context.featureSwitches.isTrue("responsive_web_carousel_v2_media_detail_enabled") ? n.createElement(r.Z, { childrenStyle: [U.dimensions, U.scrollSnap], dominantButtonColor: t, isLocked: c, key: this._getV2Key(), onVisibleRangeChange: this._handleChangeV2, scrollToCenter: !0, style: U.dimensions, swipeablePaddingLeft: 0, swipeablePaddingRight: 0, visibleItemIndex: o, withAddedNavButtonClickArea: !d, withGlobalKeyboardNavigation: !0, withWraparound: !1 }, e) : n.createElement(a.ZP, { currentSlide: o, dominantColor: t, locked: c, onChange: l, shouldAlwaysEnableKeyboardNavigation: !0 }, e);
                }
            }
            (W.contextType = h.rC), (W.defaultProps = { mediaIndex: 0, onMediaDetailZoomed: d.Z, onMediaItemChanged: d.Z });
            const U = l.default.create((e) => ({ root: { flex: 1, zIndex: 1 }, dimensions: { height: "100%", width: "100%" }, scrollSnap: { scrollSnapAlign: "center", scrollSnapStop: "always" } })),
                j = u(W);
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
                d = o(674132),
                p = o.n(d),
                h = o(837020),
                u = o(254944),
                m = o(965728),
                _ = o(979512);
            const g = p().ia5e7488,
                w = p().ic76bdf0;
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: p, mediaUrl: _, overlayFooter: y, topRightButton: T } = this.props,
                        { isModal: C } = this.context,
                        Z = { backgroundColor: e.rgba, ...m.nk },
                        x = { backgroundColor: e.rgb, ...m.nk },
                        S = [f.root, C ? Z : x, { position: C || c ? "relative" : "fixed" }],
                        v = p,
                        P = v?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(i.Z, { onClick: this._handleBackgroundPress, style: S }, t, o ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [f.footerButtons, y && Z, y && f.footerButtonsAbsolute, d && f.fadeOut] }, n.createElement(s.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(r.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [f.buttonWrapper, f.buttonWrapperLeft, m.nk, d && f.fadeOut] }, (t) => n.createElement(a.ZP, { "aria-label": g, dominantColor: e.rgb, hoverLabel: { label: g }, icon: n.createElement(h.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: p || _ || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        T ? n.createElement(i.Z, { pointerEvents: d ? "none" : void 0, style: [f.buttonWrapper, f.buttonWrapperRight, m.nk, d && f.fadeOut] }, T) : null,
                        P
                            ? n.createElement(
                                  i.Z,
                                  { style: [f.buttonWrapperBottomCenter, m.nk, d && f.fadeOut] },
                                  n.createElement(
                                      a.ZP,
                                      {
                                          icon: n.createElement(u.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: P.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      w,
                                  ),
                                  n.createElement(b, {
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
                b = ({ onOpenGrokUpdate: e }) => {
                    const { openGrok: t } = (0, _.Z)();
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
                s = o(674132);
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
            o.d(t, { BH: () => V, Qj: () => U, Wc: () => H, sI: () => W });
            var n = o(202784),
                i = o(731708),
                s = o(392237),
                r = o(674132),
                a = o.n(r),
                l = o(911373),
                c = o(761744),
                d = o(98440),
                p = o(720600),
                h = o(125966),
                u = o(544367),
                m = o(452693),
                _ = o(971657),
                g = o(956272),
                w = o(520913);
            const y = a().a17a75da,
                f = a().e7342ed4,
                b = a().b6a43e78,
                T = a().b469e406,
                C = a().b8505290,
                Z = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "e1a49407" }, n.createElement(i.ZP, null, e)) : void 0),
                x = a().ae8b0564,
                S = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "be54ed41" }, n.createElement(i.ZP, null, e)) : void 0),
                v = a().f2adab0e,
                P = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "jb19eb17" }, n.createElement(i.ZP, null, e)) : void 0),
                E = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "bbfee611" }, n.createElement(i.ZP, null, e)) : void 0),
                I = a().b7821a74,
                D = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "af104f2b" }, n.createElement(i.ZP, null, e)) : void 0),
                M = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ccc1f303" }, n.createElement(i.ZP, null, e)) : void 0),
                A = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "ce02fabf" }, n.createElement(i.ZP, null, e)) : void 0),
                k = a().e6d43d06,
                B = ({ customText: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "a85608a7" }, n.createElement(i.ZP, null, e)) : void 0),
                F = a().ic848090,
                L = a().f9ebe066,
                R = ({ userFullName: e }) => (e ? n.createElement(a().I18NFormatMessage, { $i18n: "c76865b7" }, n.createElement(i.ZP, null, e)) : void 0),
                z = a().je3d93e2,
                N = a().ea88ce2e,
                O = a().je3d93e2,
                V = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                H = (e, t) => {
                    switch (t) {
                        case V.follow:
                            return { icon: l.default, text: E, subtext: I, iconStyle: j.iconOther };
                        case V.like:
                            return { icon: c.default, text: v, subtext: P, iconStyle: j.iconLike };
                        case V.reply:
                            return { icon: d.default, text: C, subtext: Z, iconStyle: j.iconOther };
                        case V.retweet:
                            return { icon: p.default, text: x, subtext: S, iconStyle: j.iconRetweet };
                        case V.dmshare:
                            return { icon: h.default, text: D, iconStyle: j.iconOther };
                        case V.subscribe:
                            return { icon: u.default, text: M, subtext: A, iconStyle: j.iconOther };
                        case V.topic:
                            return { icon: m.default, text: k, subtext: B, iconStyle: j.iconTopics };
                        case V.community:
                            return { icon: _.default, text: F, subtext: L, iconStyle: j.iconOther };
                        case V.search:
                            return { icon: g.default, text: R, subtext: z, iconStyle: j.iconOther };
                        default:
                            return { icon: w.default, text: N, subtext: O, iconStyle: j.iconTwitter };
                    }
                },
                W = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? y : b),
                U = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? f : T),
                j = s.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => P.BH, ZP: () => F });
            o(875640);
            var n = o(202784),
                i = o(529356),
                s = o(674132),
                r = o.n(s),
                a = o(323265),
                l = o(170542),
                c = o(951790),
                d = o(804027),
                p = o(443781),
                h = o(325686),
                u = o(292627),
                m = o(731708),
                _ = o(154003),
                g = o(392237);
            class w extends n.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: i, secondaryButtonLabel: s, secondaryText: r } = this.props;
                    return n.createElement(u.Z.HalfSheet, null, n.createElement(h.Z, { style: y.sheetContent }, n.createElement(h.Z, { style: y.content }, n.createElement(h.Z, { style: y.header }, n.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, i)), n.createElement(m.ZP, { color: "white", style: y.secondaryText }, r)), n.createElement(h.Z, { style: y.footer }, n.createElement(_.ZP, { onPress: t, size: "medium", style: y.button, type: "onMediaOutlined" }, n.createElement(m.ZP, { numberOfLines: 1 }, s)), n.createElement(_.ZP, { onPress: e, size: "medium", style: y.button, type: "onMediaWhiteFilled" }, n.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const y = g.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: g.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                f = w;
            var b = o(668214),
                T = o(558369),
                C = o(118823),
                Z = o(390387),
                x = o(38562),
                S = o(936572);
            const v = (0, b.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: T.ur, loginPromptShown: x.fj, loginPromptLastShown: S.ne, startLocation: C.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: x.Af, setLoginReturnPath: Z.Jm, updateSettings: x.VP }))
                .withAnalytics();
            var P = o(233391);
            o(920099), o(856642), o(782826), o(903019);
            const E = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                I = r().j607bf02,
                D = r().j49fd4e8,
                M = r().hd50e064,
                A = r().a565833e,
                k = r().e919c3bc;
            class B extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = P.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = P.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = P.Qj.bind(null, this.context.featureSwitches)),
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
                                case P.BH.follow:
                                    return { gatedAction: { action: d.qJ.Follow, user_id: o } };
                                case P.BH.like:
                                    return { gatedAction: { action: d.qJ.Favorite, tweet_id: t, user_id: o } };
                                case P.BH.reply:
                                    return { gatedAction: { action: d.qJ.Reply, tweet_id: t, user_id: o } };
                                case P.BH.retweet:
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
                    this.state = { displayInterval: o ? 864e5 * n : 0, switchToAppLink: E[i] };
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
                    const { icon: d, iconStyle: p, subtext: h, text: u } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof u ? u({ customText: t, userFullName: c }) : u,
                        _ = "function" == typeof h ? h({ customText: t, userFullName: c }) : h,
                        g = s ? "" : this.props.signupLabel,
                        w = { pathname: "/i/flow/login", state: this._getLoginState() },
                        y = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return l ? n.createElement(f, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: D, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: M, secondaryText: this._getHalfSheetSecondaryText() }) : n.createElement(i.Z, { actionLabel: a, actionLink: w, allowBackNavigation: e, graphic: d, graphicStyle: p, headline: m || "", isFullHeightOnMobile: r, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: g, secondaryActionLink: y, subtext: _ || "", tertiaryActionLabel: this._showTertiaryCTA ? I : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: n } = this.props,
                        i = n ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: i, action: e });
                }
            }
            (B.defaultProps = { displayMode: P.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: k, signupLabel: A, onlyShowOnce: !1 }), (B.displayMode = P.BH), (B.contextType = p.rC);
            const F = v(B);
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
                r = o(674132),
                a = o.n(r),
                l = o(517747);
            const c = a().d7b8ebaa,
                d = a().d601fc20,
                p = a().j43f99be,
                h = a().ad6e11ac,
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
                            { isSelected: u.relevance === e, onClick: o(u.relevance), selectable: !0, text: p },
                            { isSelected: u.recency === e, onClick: o(u.recency), selectable: !0, text: d },
                            { isSelected: u.likes === e, onClick: o(u.likes), selectable: !0, text: c },
                        ],
                        [o, e],
                    );
                return n.createElement(i.ZP, { "aria-haspopup": "menu", icon: n.createElement(l.default, null), renderMenu: (e) => n.createElement(s.Z, { description: h, items: r, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => E, ZP: () => P });
            var n = o(662678),
                i = o(769471),
                s = o(337637),
                r = o(459679),
                a = o(192337),
                l = o(962741),
                c = o(372703),
                d = o(466015),
                p = o(267483),
                h = o(263863),
                u = o(351322),
                m = o(37533),
                _ = o(777809),
                g = o(652815),
                w = o(560520),
                y = o(367991),
                f = o(705638),
                b = o(801184),
                T = o(335632);
            const C = "FocalTweetInlineTombstone",
                Z = "More Replies";
            let x;
            const S = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                v = { ...(0, T.G)({}), [l.ZP.Tweet]: (0, f.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                P = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: s, replyDropdownSelection: r, rootTweetAuthorId: a, tweetTextSize: d, withFocalTweetMedia: f, withRuxInjections: T }) =>
                    (0, i.Z)({}, v, {
                        [l.ZP.SelfThreadTweetComposer]: g.Z,
                        [l.ZP.Tweet]: {
                            handlers: {
                                [h.Z.Tweet]: (0, b.Cw)({
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
                                [h.Z.FocalTweet]: (0, b.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: i, hasModeratedReplies: s },
                                                conversationPosition: l,
                                                referringContext: d,
                                            } = t,
                                            { contextTweetId: p, promotedContent: h, socialContext: u, topicFollowPrompt: m } = d || {};
                                        return {
                                            contextTweetId: p,
                                            conversationAnnotation: i,
                                            hasModeratedReplies: !!(s && l && l.isStart),
                                            promotedContent: h,
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
                                [h.Z.SelfThread]: (0, b.Cw)({ hideReplyContextMode: t }),
                                [h.Z.ReaderMode]: (0, b.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: d, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [C]: (0, y._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [p.Z.Inline]: (0, y._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? c.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: u.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === Z ? S.TransparentCursor : S.Default))(e, s), handlers: { [S.TransparentCursor]: _.L, [S.Default]: _.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: T }),
                        [l.ZP.ThreadHeader]: w.Z,
                    }),
                E = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: i, showOnlyRelevantReplies: c, socialContext: d, topicFollowPrompt: h }) => {
                    const u = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, s.Z)(o, u);
                        let _ = !1;
                        const g = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let w;
                        return (0, r.Z)(g, (o, n) => {
                            const s = o.type === l.ZP.TimelineCursor && (o.content.cursorType === a.CursorType.ShowMoreThreads || o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt),
                                r = o.type === l.ZP.Label && o.content.text === Z;
                            if (c && (s || r)) return void 0 === w && o.content.cursorType === a.CursorType.ShowMoreThreadsPrompt ? (x = n) : void 0 === w && (w = n), !1;
                            if (c && void 0 !== w && n >= w) return !1;
                            if (c && void 0 === w && n >= x) return !1;
                            const u = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || u) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const s = !_;
                                if (((_ = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return A(o, s);
                                    if (o.type === l.ZP.Tombstone) return k(o, s);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: s, isEnd: !0 };
                                        return o.content.displayType === p.Z.Inline ? D({ contextTweetId: e, entry: o, socialContext: d, topicFollowPrompt: h, conversationPosition: t }) : M({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return I({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: d, promotedContent: i, topicFollowPrompt: h, conversationPosition: { isStart: s, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                I = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: i, socialContext: s, topicFollowPrompt: r }) => d.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: s, promotedContent: i, topicFollowPrompt: r } }, { displayType: h.Z.FocalTweet }),
                D = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: i }) => d.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: C }),
                M = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                A = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                k = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => P });
            var n = o(202784),
                i = o(674132),
                s = o.n(i),
                r = o(912021),
                a = o(218093),
                l = o(334346),
                c = o(332878),
                d = o(163889),
                p = o(466015),
                h = o(847933),
                u = o(519896),
                m = o(443781),
                _ = o(231035),
                g = o(810641),
                w = o(438965),
                y = o(668214);
            const f = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                b = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                T = (0, y.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: f, contextualClientEventInfo: b }));
            var C = o(519125);
            const Z = s().d35d74e4,
                x = (e) => {
                    switch (e) {
                        case h.Z.NOT_FOUND:
                            return n.createElement(_.Z, null);
                        case h.Z.NOT_ALLOWED:
                            return n.createElement(a.Z, null);
                        default:
                            return (0, d.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                S = () => n.createElement(_.Z, null);
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, r.Z)((e, t, o, n, i, s, r) => (0, C.Mu)({ focalTweetId: i, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: s, promotedContent: n, showOnlyRelevantReplies: r }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: i, topicFollowPrompt: s } = this.props;
                            return this._getMemoizedPreprocessor(i, e, t, n, o, s, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, r.Z)((e, t, o, n, i, s) => {
                            const r = e && n && e === n;
                            return (0, C.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!r, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: i, withRuxInjections: s });
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
                    return n.createElement(g.Z, { anchoring: c.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: i, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: u.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: S, renderUnavailable: x, title: Z });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [p.Se({ id: t, sortIndex: l.Z })] : void 0;
                }
            }
            (v.defaultProps = { withFocalTweetMedia: !0 }), (v.contextType = m.rC);
            const P = T(v);
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
        340179: (e, t, o) => {
            o.d(t, { i: () => r });
            var n = o(516951),
                i = o(615656),
                s = o(51525);
            const r = (e = "") => ({
                [i.ZP.GenericNotFound]: { customAction: n.Z },
                [i.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, s.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [i.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, s.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => s });
            var n = o(516951),
                i = o(615656);
            const s = { [i.ZP.OtherUserSuspended]: { customAction: n.Z }, [i.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => w, I5: () => m, K2: () => g, L$: () => c, Rb: () => _, nk: () => u, sI: () => b, xr: () => y });
            var n = o(202784),
                i = o(483677),
                s = o(782578),
                r = o(393058),
                a = o(521514);
            const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                c = (e) => {
                    const t = e && i.Z.getForGallery(e);
                    return t ? { rgb: y(t), rgba: l(t, 0.9) } : h;
                },
                d = a.Z.columnWidths.primary,
                p = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                u = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: o, containerWidth: n, mediaHeight: i, mediaWidth: r } = e,
                        a = r && i ? r / i : 1,
                        l = a > 1,
                        c = t ? 400 : d,
                        h = l && r <= c ? p(n, c) : n,
                        u = !l && i <= c ? p(o, c) : o;
                    return s.Z.getContainDimensions({ width: h, height: u }, a);
                },
                _ = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(t);
                },
                g = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(t);
                },
                w = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(t);
                },
                y = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                f = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload?.isZoomed, showControls: !t.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                b = () => {
                    const [e, t] = n.useReducer(f, { isZoomed: !1, showControls: !0 });
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
        951790: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(323265);
            const i = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = s(e),
                            o = [t.android, t.ios],
                            n = o.find((e) => e.matches());
                        return n ? [n] : o;
                    },
                    getiOSAppStoreLink(e) {
                        const t = s(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = s(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && i.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        i.setLocation(e);
                    },
                },
                s = (e = "rwoiah") => ({ android: { platform: "android", matches: () => n.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => n.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                r = i;
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
                p = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                h = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                u = (e, t, o) => Math.min(t, Math.max(e, o)),
                m = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                _ = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class g extends n.Component {
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
                                i = u(o, t, this.state.zoom),
                                { zoom: s } = this.state;
                            s !== i && 1 === i ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: i }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : s <= 1 && !this._moved && (this._clickTimer = setTimeout(n, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...p });
                }
                static getDerivedStateFromProps(e, t) {
                    return d && e.resetZoom ? (e.onZoomed(!1), { ...p }) : t;
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
                    this.props.onZoomed(!1), this.setState({ zoom: p.zoom });
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
                        { height: d, width: p } = this._zoomedDimensions;
                    let h = 0,
                        u = 0;
                    p - c > 0 && (h = t - n), d - l > 0 && (u = o - i), this.setState({ lastX: t, lastY: o, zoomCenter: { x: (0, r.Z)(s - h, 0, c), y: (0, r.Z)(a - u, 0, l) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = m(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = _(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: o, lastY: n, zoom: i, zoomCenter: s } = this.state,
                        { maxZoom: a, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === s.x && 0 === s.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const p = m(t[0], t[1]),
                        h = this._lastDistance ? p / this._lastDistance : 1,
                        g = u(c - d, a + l, i * h),
                        w = _(t[0], t[1]),
                        y = (() => {
                            if (!this._windowDimensions || !o) return s;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, r.Z)(s.x - (w.x - o), 0, t), y: (0, r.Z)(s.y - (w.y - n), 0, e) };
                        })();
                    (this._lastDistance = p), this.setState({ lastX: w.x, lastY: w.y, zoom: g, zoomCenter: y });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: o } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || p.zoomCenter }), o(!0));
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
            g.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: a.Z, onZoomed: a.Z, resetZoom: !1 };
            const w = c.default.create((e) => ({ fill: { flex: 1 } })),
                y = g;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaDetail-6107ac1a.c8a5a61a.js.map
