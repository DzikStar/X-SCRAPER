"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-9f4db315", "loader.FeedbackSheet"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: u, rightControl: m, secondaryBar: f, style: g, subtitle: C, title: b, titleDomId: k, titleIconCell: B, titleIconCellSize: w, withBackground: y, withWideContainer: x } = this.props,
                        { isModal: Z } = this.context,
                        _ = i ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!y, Z, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: _, middleControl: h, position: p(u, Z, r), rightControl: m, style: g, subtitle: C, title: b, titleDomId: k, titleIconCell: B, titleIconCellSize: w, withBackground: E, withWideContainer: x }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, o) => {
            o.r(t), o.d(t, { default: () => p });
            o(136728);
            var n = o(202784),
                r = o(811176),
                i = o(190286),
                a = o(674132),
                s = o.n(a),
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
                            e.reduce((e, { Icon: r, confirmation: i, disabled: a, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: p, testID: h, text: u, withCancelButton: m }, f) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              i ? (i.render ? n({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : n({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), o());
                                          }
                                        : o;
                                    e.push({ disabled: a, Icon: r, isEmphasized: l, testID: h, subText: p, text: u, onClick: s, link: c, withBottomBorder: t && t.includes(f) });
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
                        const { confirmButtonType: t, headline: o, label: r, text: a, withCancelButton: s } = e || {};
                        return n.createElement(i.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: o, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: s });
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
            o.d(t, { Z: () => f, w: () => u });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, rightControl: g, secondaryBar: C, subtitle: b, title: k } = this.props,
                                { isModal: B } = this.context;
                            return n.createElement(r.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !B, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, ref: e, rightControl: g, secondaryBar: C, style: [B && m.appBarModal, t], subtitle: b, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: u, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: C } = this.context,
                        b = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, C && m.rootModal] }, !C && b, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, C && m.containerModal, a] }, C ? n.createElement(h.Z, { style: m.viewport }, b, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !C && !g && m.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = u;
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
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(530732),
                s = o(154003),
                l = o(386802),
                c = o(392237),
                d = o(674132),
                p = o.n(d),
                h = o(837020),
                u = o(254944),
                m = o(965728),
                f = o(979512);
            const g = p().ia5e7488,
                C = p().ic76bdf0;
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
                    const { backgroundColor: e, children: t, footerButtons: o, forceDominantButtonColor: l, forceModalStyle: c, hideButtons: d, mediaItem: p, mediaUrl: f, overlayFooter: b, topRightButton: w } = this.props,
                        { isModal: y } = this.context,
                        x = { backgroundColor: e.rgba, ...m.nk },
                        Z = { backgroundColor: e.rgb, ...m.nk },
                        _ = [k.root, y ? x : Z, { position: y || c ? "relative" : "fixed" }],
                        E = p,
                        v = E?.media_results?.result?.grok_image_annotation;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { onClick: this._handleBackgroundPress, style: _ }, t, o ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [k.footerButtons, b && x, b && k.footerButtonsAbsolute, d && k.fadeOut] }, n.createElement(i.Z, { withGutter: !0 }, o)) : null),
                        n.createElement(a.Z, { interactiveStyles: null, onClick: this._handleCloseButtonPress, pointerEvents: d ? "none" : void 0, role: "none", style: [k.buttonWrapper, k.buttonWrapperLeft, m.nk, d && k.fadeOut] }, (t) => n.createElement(s.ZP, { "aria-label": g, dominantColor: e.rgb, hoverLabel: { label: g }, icon: n.createElement(h.default, null), interactivityState: t, onClick: this._handleCloseButtonPress, type: p || f || l ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" })),
                        w ? n.createElement(r.Z, { pointerEvents: d ? "none" : void 0, style: [k.buttonWrapper, k.buttonWrapperRight, m.nk, d && k.fadeOut] }, w) : null,
                        v
                            ? n.createElement(
                                  r.Z,
                                  { style: [k.buttonWrapperBottomCenter, m.nk, d && k.fadeOut] },
                                  n.createElement(
                                      s.ZP,
                                      {
                                          icon: n.createElement(u.default, null),
                                          onClick: () => {
                                              this._openGrok({ text: v.prompt, autoSubmit: !0, source: "post_image_annotation" });
                                          },
                                          size: "small",
                                          type: "brandFilled",
                                      },
                                      C,
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
            (b.contextType = l.Z), (b.defaultProps = { hideButtons: !1 });
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
                i = o(107267),
                a = o(403556),
                s = o(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)();
                    return r.createElement(a.Z, (0, n.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = r.memo(l);
        },
        348707: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(979512);
            function i({ onOpenGrokUpdate: e }) {
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
                i = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== i) || n !== a || l) && this._performPageUpdates(this.props);
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
                i = o(174326),
                a = o(392237),
                s = o(908478),
                l = o(323265),
                c = o(293115),
                d = o(125363),
                p = o(836255),
                h = o(301758);
            const u = (0, o(668214).Z)().propsFromActions(() => ({ fetchTweetIfNeeded: p.Z.fetchOneIfNeeded, fetchTweetsIfNeeded: p.Z.fetchMultiple })),
                m = { element: "tweet-carousel" };
            const f = a.default.create((e) => ({ carousel: { width: "100%" }, child: { alignSelf: "center", marginEnd: e.spaces.space8, scrollSnapAlign: "center", width: `calc(100% - ${e.spaces.space72})` } })),
                g = u(({ carouselProps: e, childrenStyle: t, fetchTweetIfNeeded: o, fetchTweetsIfNeeded: a, shouldShowBorder: u = !0, style: g, tweetIds: C }) => {
                    r.useEffect(() => {
                        C.length > 1 && a(C), 1 === C.length && o(C[0]);
                    }, [o, a, C]);
                    const b = (function ({ tweetIds: e }) {
                        const t = r.useRef();
                        return (0, d.v9)((o) => {
                            const n = t.current,
                                r = e.filter((e) => p.Z.selectHydrated(o, e));
                            return n && (0, s.Z)(n, r) ? n : ((t.current = r), r);
                        });
                    })({ tweetIds: C });
                    return b && b.length
                        ? r.createElement(
                              i.Z,
                              (0, n.Z)({}, e, { childrenStyle: [f.child, t], style: [f.carousel, g] }),
                              b.map((e) =>
                                  r.createElement(
                                      c.nO,
                                      { key: e, namespace: m },
                                      r.createElement(h.Z, {
                                          isCondensed: !0,
                                          onPress: (t) => {
                                              l.ZP.isTwitterApp() && (l.ZP.isAndroid() || (t.preventDefault(), (window.location.pathname = `/i/status/${e}`)));
                                          },
                                          shouldShowBorder: u,
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
            o.d(t, { Z: () => i });
            o(543673), o(240753), o(128399), o(136728);
            var n = o(202784),
                r = o(107267);
            const i = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [o, i] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    i(new URLSearchParams(e.search));
                }, [e.search]);
                const a = n.useCallback(
                    (n, r) => {
                        const i = new URLSearchParams(o);
                        i.set(n, r), t.push(`${e.pathname}?${i.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), a];
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-9f4db315.1a3639ba.js.map
