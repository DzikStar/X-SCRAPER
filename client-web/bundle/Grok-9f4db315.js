"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-9f4db315"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                i = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: g, style: f, subtitle: b, title: k, titleDomId: B, titleIconCell: y, titleIconCellSize: C, withBackground: w, withWideContainer: Z } = this.props,
                        { isModal: E } = this.context,
                        x = a ? d : n.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, E, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: x, middleControl: u, position: p(h, E, r), rightControl: m, style: f, subtitle: b, title: k, titleDomId: B, titleIconCell: y, titleIconCellSize: C, withBackground: v, withWideContainer: Z }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => h });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, rightControl: f, secondaryBar: b, subtitle: k, title: B } = this.props,
                                { isModal: y } = this.context;
                            return n.createElement(r.Z, { style: y ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !y, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, ref: e, rightControl: f, secondaryBar: b, style: [y && m.appBarModal, t], subtitle: k, title: B, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: g, withoutBottomBarMobile: f } = this.props,
                        { isModal: b } = this.context,
                        k = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: g }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && k, n.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, i] }, b ? n.createElement(u.Z, { style: m.viewport }, k, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !b && !f && m.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = h;
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => k });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(530732),
                l = o(154003),
                s = o(386802),
                c = o(392237),
                d = o(111677),
                p = o.n(d),
                u = o(837020),
                h = o(254944),
                m = o(965728),
                g = o(979512);
            const f = p().ia5e7488,
                b = p().ic76bdf0;
            class k extends n.Component {
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: s, forceModalStyle: c, hideButtons: d, mediaItem: p, mediaUrl: g, overlayFooter: k, topRightButton: C } = this.props,
                        { isModal: w } = this.context,
                        Z = { backgroundColor: e.rgba, ...m.nk },
                        E = { backgroundColor: e.rgb, ...m.nk },
                        x = [B.root, w ? Z : E, { position: w || c ? "relative" : "fixed" }],
                        v = p,
                        _ = v?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { onClick: this._handleBackgroundPress, style: x }, t, o ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [B.footerButtons, k && Z, k && B.footerButtonsAbsolute, d && B.fadeOut] }, n.createElement(a.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(i.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [B.buttonWrapper, B.buttonWrapperLeft, m.nk, d && B.fadeOut] }, (t) => n.createElement(l.ZP, { "aria-label": f, dominantColor: e.rgb, hoverLabel: { label: f }, icon: n.createElement(u.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: p || g || s ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        C ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [B.buttonWrapper, B.buttonWrapperRight, m.nk, d && B.fadeOut] }, C) : null,
                        _
                            ? n.createElement(
                                  r.Z,
                                  { style: [B.buttonWrapperBottomCenter, m.nk, d && B.fadeOut] },
                                  n.createElement(
                                      l.ZP,
                                      {
                                          icon: n.createElement(h.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: _.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      b,
                                  ),
                                  n.createElement(y, {
                                      onOpenGrokUpdate: (e) => {
                                          this._openGrok = e;
                                      },
                                  }),
                              )
                            : null,
                    );
                }
            }
            (k.contextType = s.Z), (k.defaultProps = { hideButtons: !1 });
            const B = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
                y = ({ onOpenGrokUpdate: e }) => {
                    const { openGrok: t } = (0, g.Z)();
                    return (
                        n.useEffect(() => {
                            e(t);
                        }, [e, t]),
                        null
                    );
                };
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: i, imageH: l, imageType: s, imageW: c, title: d, ttl: p, type: u } = e;
                return n.createElement(r.ql, null, u ? n.createElement("meta", { content: u, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, d ? n.createElement("meta", { content: d, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), a ? n.createElement("meta", { content: a, property: "og:image" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:height" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:alt" }) : null, p ? n.createElement("meta", { content: p, property: "og:ttl" }) : null);
            };
        },
        252021: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(107267),
                a = o(115553);
            const i = (e) => {
                (0, r.useHistory)();
                return n.createElement(a.A, e);
            };
        },
        348707: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var n = o(202784),
                r = o(979512);
            function a({ onOpenGrokUpdate: e }) {
                const { openGrok: t } = (0, r.Z)();
                return (
                    n.useEffect(() => {
                        e(t);
                    }, [e, t]),
                    null
                );
            }
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                i = o(997174),
                l = o(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== a) || n !== i || s) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(s(c));
        },
        734907: (e, t, o) => {
            o.d(t, { I: () => r });
            var n = o(173396);
            const r = (e) => {
                if (/^\d+$/.test(e)) return e;
                const t = /(status|article)\/(\d+)/g.exec(e) || [];
                return (0, n.Z)(t);
            };
        },
        353644: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(807896),
                r = o(202784),
                a = o(174326),
                i = o(392237),
                l = o(908478),
                s = o(323265),
                c = o(293115),
                d = o(125363),
                p = o(836255),
                u = o(301758);
            const h = (0, o(668214).Z)().propsFromActions(() => ({ fetchTweetIfNeeded: p.Z.fetchOneIfNeeded, fetchTweetsIfNeeded: p.Z.fetchMultiple })),
                m = { element: "tweet-carousel" };
            const g = i.default.create((e) => ({ carousel: { width: "100%" }, child: { alignSelf: "center", marginEnd: e.spaces.space8, scrollSnapAlign: "center", width: `calc(100% - ${e.spaces.space72})` } })),
                f = h(({ carouselProps: e, childrenStyle: t, fetchTweetIfNeeded: o, fetchTweetsIfNeeded: i, shouldShowBorder: h = !0, style: f, tweetIds: b }) => {
                    r.useEffect(() => {
                        b.length > 1 && i(b), 1 === b.length && o(b[0]);
                    }, [o, i, b]);
                    const k = (function ({ tweetIds: e }) {
                        const t = r.useRef();
                        return (0, d.v9)((o) => {
                            const n = t.current,
                                r = e.filter((e) => p.Z.selectHydrated(o, e));
                            return n && (0, l.Z)(n, r) ? n : ((t.current = r), r);
                        });
                    })({ tweetIds: b });
                    return k && k.length
                        ? r.createElement(
                              a.Z,
                              (0, n.Z)({}, e, { childrenStyle: [g.child, t], style: [g.carousel, f] }),
                              k.map((e) =>
                                  r.createElement(
                                      c.nO,
                                      { key: e, namespace: m },
                                      r.createElement(u.Z, {
                                          isCondensed: !0,
                                          onPress: (t) => {
                                              s.ZP.isTwitterApp() && (s.ZP.isAndroid() || (t.preventDefault(), (window.location.pathname = `/i/status/${e}`)));
                                          },
                                          shouldShowBorder: h,
                                          tweetId: e,
                                          withBirdwatchPivot: !1,
                                          withLink: !0,
                                          withUserHoverCard: !1,
                                      }),
                                  ),
                              ),
                          )
                        : null;
                });
        },
        292546: (e, t, o) => {
            o.d(t, { Z: () => a });
            o(543673), o(240753), o(128399), o(136728);
            var n = o(202784),
                r = o(107267);
            const a = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [o, a] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    a(new URLSearchParams(e.search));
                }, [e.search]);
                const i = n.useCallback(
                    (n, r) => {
                        const a = new URLSearchParams(o);
                        a.set(n, r), t.push(`${e.pathname}?${a.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        480241: (e, t, o) => {
            e.exports = o.p + "grok-grid.623bdb5a.png";
        },
        623130: (e, t, o) => {
            e.exports = o.p + "grok-image-gen.2408790a.png";
        },
        144199: (e, t, o) => {
            e.exports = o.p + "grok-image-gen@2x.a99fa41a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-9f4db315.839d027a.js.map
