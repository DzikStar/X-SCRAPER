"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-9f4db315", "loader.FeedbackSheet"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                i = o(325686),
                s = o(370006),
                l = o(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: f, style: g, subtitle: b, title: C, titleDomId: k, titleIconCell: B, titleIconCellSize: x, withBackground: w, withWideContainer: y } = this.props,
                        { isModal: Z } = this.context,
                        _ = a ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, Z, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: _, middleControl: u, position: p(h, Z, r), rightControl: m, style: g, subtitle: b, title: C, titleDomId: k, titleIconCell: B, titleIconCellSize: x, withBackground: E, withWideContainer: y }), f || null);
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
        774426: (e, t, o) => {
            o.r(t), o.d(t, { default: () => p });
            o(136728);
            var n = o(202784),
                r = o(811176),
                a = o(190286),
                i = o(674132),
                s = o.n(i),
                l = o(912021);
            const c = s().cfd2f35e;
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, o, n) =>
                            e.reduce((e, { Icon: r, confirmation: a, disabled: i, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: p, testID: u, text: h, withCancelButton: m }, f) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              a ? (a.render ? n({ cancelCallback: a.onCancel, confirmCallback: d, render: a.render }) : n({ cancelCallback: a.onCancel, confirmCallback: d, text: a.text, headline: a.headline, label: a.label, confirmButtonType: a.confirmButtonType, withCancelButton: a.withCancelButton })) : (d(), o());
                                          }
                                        : o;
                                    e.push({ disabled: i, Icon: r, isEmphasized: l, testID: u, subText: p, text: h, onClick: s, link: c, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: o, label: r, text: i, withCancelButton: s } = e || {};
                        return n.createElement(a.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: o, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: i, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: o } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, o, this._handleConfirm);
                }
            }
            const p = d;
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => h });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, rightControl: g, secondaryBar: b, subtitle: C, title: k } = this.props,
                                { isModal: B } = this.context;
                            return n.createElement(r.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !B, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, ref: e, rightControl: g, secondaryBar: b, style: [B && m.appBarModal, t], subtitle: C, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: h, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: b } = this.context,
                        C = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && C, n.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, i] }, b ? n.createElement(u.Z, { style: m.viewport }, C, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !b && !g && m.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = h;
        },
        123702: (e, t, o) => {
            o.d(t, { K: () => n });
            const n = function (e, t = {}) {
                const o = { listUnicodeChar: t.listUnicodeChar ?? void 0, stripListLeaders: t.stripListLeaders ?? !0, gfm: t.gfm ?? !0, useImgAltText: t.useImgAltText ?? !0, abbr: t.abbr ?? !1, replaceLinksWithURL: t.replaceLinksWithURL ?? !1, htmlTagsToSkip: t.htmlTagsToSkip ?? [], throwError: t.throwError ?? !1 };
                let n = e || "";
                n = n.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, "");
                try {
                    o.stripListLeaders && (n = o.listUnicodeChar ? n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, `${o.listUnicodeChar} $1`) : n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")),
                        o.gfm &&
                            (n = n
                                .replace(/\n={2,}/g, "\n")
                                .replace(/~{3}.*\n/g, "")
                                .replace(/~~/g, "")
                                .replace(/`{3}.*\n/g, "")),
                        o.abbr && (n = n.replace(/\*\[.*\]:.*\n/, "")),
                        (n = n.replace(/<[^>]*>/g, ""));
                    let e = new RegExp("<[^>]*>", "g");
                    if (o.htmlTagsToSkip.length > 0) {
                        const t = `(?!${o.htmlTagsToSkip.join("|")})`;
                        e = new RegExp(`<${t}[^>]*>`, "ig");
                    }
                    n = n
                        .replace(e, "")
                        .replace(/^[=\-]{2,}\s*$/g, "")
                        .replace(/\[\^.+?\](\: .*?$)?/g, "")
                        .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
                        .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, o.useImgAltText ? "$1" : "")
                        .replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g, o.replaceLinksWithURL ? "$2" : "$1")
                        .replace(/^(\n)?\s{0,3}>\s?/gm, "$1")
                        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
                        .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6")
                        .replace(/([\*]+)(\S)(.*?\S)??\1/g, "$2$3")
                        .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5")
                        .replace(/(`{3,})(.*?)\1/gm, "$2")
                        .replace(/`(.+?)`/g, "$1")
                        .replace(/~(.*?)~/g, "$1");
                } catch (t) {
                    if (o.throwError) throw t;
                    return e;
                }
                return n;
            };
        },
        827094: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(530732),
                s = o(154003),
                l = o(386802),
                c = o(392237),
                d = o(674132),
                p = o.n(d),
                u = o(837020),
                h = o(254944),
                m = o(965728),
                f = o(979512);
            const g = p().ia5e7488,
                b = p().ic76bdf0;
            class C extends n.Component {
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: p, mediaUrl: f, overlayFooter: C, topRightButton: x } = this.props,
                        { isModal: w } = this.context,
                        y = { backgroundColor: e.rgba, ...m.nk },
                        Z = { backgroundColor: e.rgb, ...m.nk },
                        _ = [k.root, w ? y : Z, { position: w || c ? "relative" : "fixed" }],
                        E = p,
                        v = E?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { onClick: this._handleBackgroundPress, style: _ }, t, o ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [k.footerButtons, C && y, C && k.footerButtonsAbsolute, d && k.fadeOut] }, n.createElement(a.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(i.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [k.buttonWrapper, k.buttonWrapperLeft, m.nk, d && k.fadeOut] }, (t) => n.createElement(s.ZP, { "aria-label": g, dominantColor: e.rgb, hoverLabel: { label: g }, icon: n.createElement(u.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: p || f || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        x ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [k.buttonWrapper, k.buttonWrapperRight, m.nk, d && k.fadeOut] }, x) : null,
                        v
                            ? n.createElement(
                                  r.Z,
                                  { style: [k.buttonWrapperBottomCenter, m.nk, d && k.fadeOut] },
                                  n.createElement(
                                      s.ZP,
                                      {
                                          icon: n.createElement(h.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: v.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      b,
                                  ),
                                  n.createElement(B, {
                                      onOpenGrokUpdate: (e) => {
                                          this._openGrok = e;
                                      },
                                  }),
                              )
                            : null,
                    );
                }
            }
            (C.contextType = l.Z), (C.defaultProps = { hideButtons: !1 });
            const k = c.default.create((e) => ({ root: { overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%" }, buttonWrapper: { position: "absolute", top: 0, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", cursor: "pointer" }, buttonWrapperLeft: { start: 0 }, buttonWrapperRight: { end: 0 }, buttonWrapperBottomCenter: { width: "100%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "center", cursor: "pointer" }, fadeOut: { opacity: 0 }, footerButtons: { width: "100%", alignSelf: "center" }, footerButtonsAbsolute: { position: "absolute", bottom: 0, paddingBottom: c.default.iPhoneOffsetBottom, zIndex: 1 } })),
                B = ({ onOpenGrokUpdate: e }) => {
                    const { openGrok: t } = (0, f.Z)();
                    return (
                        n.useEffect(() => {
                            e(t);
                        }, [t]),
                        null
                    );
                };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                a = o(107267),
                i = o(403556),
                s = o(791632);
            const l = (e) => {
                    const t = (0, a.useHistory)();
                    return r.createElement(i.Z, (0, n.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = r.memo(l);
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
                    }, [t]),
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
                s = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
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
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== a) || n !== i || l) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(l(c));
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
            o.d(t, { Z: () => g });
            var n = o(807896),
                r = o(202784),
                a = o(174326),
                i = o(392237),
                s = o(908478),
                l = o(323265),
                c = o(293115),
                d = o(125363),
                p = o(836255),
                u = o(301758);
            const h = (0, o(668214).Z)().propsFromActions(() => ({ fetchTweetIfNeeded: p.Z.fetchOneIfNeeded, fetchTweetsIfNeeded: p.Z.fetchMultiple })),
                m = { element: "tweet-carousel" };
            const f = i.default.create((e) => ({ carousel: { width: "100%" }, child: { alignSelf: "center", marginEnd: e.spaces.space8, scrollSnapAlign: "center", width: `calc(100% - ${e.spaces.space72})` } })),
                g = h(({ carouselProps: e, childrenStyle: t, fetchTweetIfNeeded: o, fetchTweetsIfNeeded: i, shouldShowBorder: h = !0, style: g, tweetIds: b }) => {
                    r.useEffect(() => {
                        b.length > 1 && i(b), 1 === b.length && o(b[0]);
                    }, [o, i, b]);
                    const C = (function ({ tweetIds: e }) {
                        const t = r.useRef();
                        return (0, d.v9)((o) => {
                            const n = t.current,
                                r = e.filter((e) => p.Z.selectHydrated(o, e));
                            return n && (0, s.Z)(n, r) ? n : ((t.current = r), r);
                        });
                    })({ tweetIds: b });
                    return C && C.length
                        ? r.createElement(
                              a.Z,
                              (0, n.Z)({}, e, { childrenStyle: [f.child, t], style: [f.carousel, g] }),
                              C.map((e) =>
                                  r.createElement(
                                      c.nO,
                                      { key: e, namespace: m },
                                      r.createElement(u.Z, {
                                          isCondensed: !0,
                                          onPress: (t) => {
                                              l.ZP.isTwitterApp() && (l.ZP.isAndroid() || (t.preventDefault(), (window.location.pathname = `/i/status/${e}`)));
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
        246851: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784);
            function r(e) {
                const t = n.useRef();
                return (
                    n.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
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
        886728: (e, t, o) => {
            e.exports = o.p + "astronaut.ab9b505a.jpg";
        },
        922411: (e, t, o) => {
            e.exports = o.p + "astronaut@2x.6e72b7da.jpg";
        },
        537938: (e, t, o) => {
            e.exports = o.p + "cat.d8a321da.jpg";
        },
        880469: (e, t, o) => {
            e.exports = o.p + "cat@2x.f9560d1a.jpg";
        },
        371625: (e, t, o) => {
            e.exports = o.p + "fuji.f7fe9dfa.jpg";
        },
        35752: (e, t, o) => {
            e.exports = o.p + "fuji@2x.dea0fc4a.jpg";
        },
        227249: (e, t, o) => {
            e.exports = o.p + "northern-lights.20ac162a.jpg";
        },
        795644: (e, t, o) => {
            e.exports = o.p + "northern-lights@2x.a97f8cea.jpg";
        },
        5605: (e, t, o) => {
            e.exports = o.p + "roadster.97675bfa.jpg";
        },
        934271: (e, t, o) => {
            e.exports = o.p + "roadster@2x.70ead61a.jpg";
        },
        416700: (e, t, o) => {
            e.exports = o.p + "robot.604c0e9a.jpg";
        },
        333164: (e, t, o) => {
            e.exports = o.p + "robot@2x.0418fcca.jpg";
        },
        552803: (e, t, o) => {
            e.exports = o.p + "solarpunk.84db2d2a.jpg";
        },
        409433: (e, t, o) => {
            e.exports = o.p + "solarpunk@2x.e21cdbba.jpg";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-9f4db315.bc70fb1a.js.map
