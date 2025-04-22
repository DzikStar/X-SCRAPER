"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-b308cbaf"],
    {
        415725: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(325686),
                i = o(392237),
                l = o(822228);
            const a = "activeRoute",
                s = i.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...i.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => r.createElement(l.Z, t, (t) => r.createElement(n.Z, { style: t && s.activeRoot, testID: a }, "function" == typeof e ? e(t) : e, t ? r.createElement(n.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => m });
            var r = o(202784),
                n = o(614983),
                i = o.n(n),
                l = o(325686),
                a = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class m extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: i, isFullWidth: l, isLarge: c, leftControl: d, middleControl: m, position: h, rightControl: p, secondaryBar: g, style: C, subtitle: b, title: f, titleDomId: y, titleIconCell: w, titleIconCellSize: Z, withBackground: x, withWideContainer: E } = this.props,
                        { isModal: _ } = this.context,
                        B = i ? d : r.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, _, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: c, leftControl: B, middleControl: m, position: u(h, _, n), rightControl: p, style: C, subtitle: b, title: f, titleDomId: y, titleIconCell: w, titleIconCellSize: Z, withBackground: k, withWideContainer: E }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                i = o(182056),
                l = o(879113),
                a = o(392237),
                s = o(674132),
                c = o.n(s),
                d = o(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const a = i.Z.isOnline();
                    return n.createElement(l.Z, (0, r.Z)({}, t, { icon: a ? void 0 : n.createElement(d.default, { style: h.icon }), retryMessage: a ? e : u }));
                },
                h = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        959658: (e, t, o) => {
            o.d(t, { b: () => b });
            var r = o(807896),
                n = o(202784),
                i = o(325686),
                l = o(292627),
                a = o(365023),
                s = o(664064),
                c = o(392237);
            const d = n.createContext({ query: null });
            var u = o(687103),
                m = o(461756),
                h = o(925885),
                p = o(952793);
            function g() {
                const e = (0, p.hC)("hashfetti_enabled"),
                    t = (0, p.hC)("hashfetti_all_hashflags"),
                    o = (0, p.D2)("hashfetti_duration_ms").getNumberValue(4e3),
                    r = (0, p.D2)("hashfetti_particle_count").getNumberValue(30),
                    { query: i } = n.useContext(d),
                    l = (0, u.C)();
                if (!e || !i || m.Z.reducedMotionEnabled) return null;
                const a = (0, h.Z)(i);
                let s;
                for (const e of a) {
                    const t = l.getBrandedHashtag(e.hashtag);
                    if (t) {
                        s = t;
                        break;
                    }
                }
                const c = s?.url;
                return c && (s?.hashfetti || t) ? { url: c, duration_ms: o, count: r } : null;
            }
            function C() {
                const e = g();
                if (!e) return null;
                const t = f.container;
                return n.createElement(
                    l.Z.Hashfetti,
                    null,
                    n.createElement(a.Z, { id: "Hashfetti" }, (o, l) => n.createElement(i.Z, (0, r.Z)({ ref: o() }, l({ style: t })), n.createElement(s.Z, { autoplay: !0, count: e.count, duration: e.duration_ms, image_url: e.url, max_rotation: 0.125 * Math.PI, type: "image" }))),
                );
            }
            C.Provider = function (e) {
                const { query: t } = e;
                return n.createElement(d.Provider, { value: { query: t } }, e.children);
            };
            const b = C,
                f = c.default.create((e) => ({ container: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0 } }));
        },
        253493: (e, t, o) => {
            o.d(t, { Z: () => w });
            var r = o(202784),
                n = o(107267),
                i = o(791632),
                l = o(325686),
                a = o(537392),
                s = o(10656),
                c = o(655352),
                d = o(555079),
                u = o(500002),
                m = o(625661),
                h = o(449067),
                p = o(655543),
                g = o(715601),
                C = o(392237);
            const b = C.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...C.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? r.createElement(l.Z, { style: b.fill }, r.createElement(g.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return r.createElement(a.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: n, showSubtitleOnRoot: i, showSubtitleOnWideDetail: l, withBottomBorder: a, withDetailOpen: s, ...d } = this.props;
                    return r.createElement(r.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : r.createElement(h.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return r.createElement(r.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: n, backLocation: i, documentTitle: a, headerless: s, history: c, leftControl: u, middleControl: p, onBackClick: g, rightControl: C, screenType: f, searchBoxOptions: y, secondaryBar: w, showSubtitleOnRoot: Z, showSubtitleOnWideDetail: x, subtitle: E, title: _, titleIconCell: B, titleIconCellSize: k, withDetailOpen: v, withSearchBox: T, withTweetButton: F, withWideContainer: S } = this.props,
                        I = "root" === f,
                        L = "secondaryRoot" === f,
                        P = "primaryDetail" === f,
                        D = (P && x) || (I && Z),
                        V = I || (P && e),
                        z = I ? d.ey : P ? d.vX : void 0,
                        O = r.createElement(l.Z, { style: b.appBarContainer }, r.createElement(m.ZP, { backLocation: i, fixed: !1, hideBackButton: V, history: c, leftControl: u, middleControl: p, onBackClick: g, rightControl: C, secondaryBar: w, style: n, subtitle: D ? E : void 0, title: _, titleDomId: z, titleIconCell: B, titleIconCellSize: k, withWideContainer: S })),
                        W = I || (L && v) ? null : r.createElement(h.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: i, documentTitle: a, headerless: s, middleControl: p, onBackClick: g, rightControl: C, searchBoxOptions: y, subtitle: E, title: _, withSearchBox: T, withTweetButton: F });
                    return r.createElement(r.Fragment, null, W, O);
                }
            }
            (f.contextType = p.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const y = (0, u.ZP)(f),
                w = (e) => {
                    const t = (0, n.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : r.createElement(y, e);
                };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => s, Z: () => a });
            var r = o(807896),
                n = o(202784),
                i = o(524084),
                l = o(768572);
            const a = "stable_sort_index",
                s = n.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return n.createElement(l.ZP, { identifier: o }, n.createElement(i.Z, (0, r.Z)({ ref: t }, e)));
                });
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => c });
            function r(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const n = (e, t, o) => {
                    const r = e(t),
                        n = e(o);
                    return !r && n ? -1 : r && !n ? 1 : 0;
                },
                i = (e, t, o) => l(e(o), e(t)),
                l = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                a = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        l = (e) => e && e.doesIntersectWith(o),
                        s = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: o }) => !r(o) && t.isRendered(o) && e.isRendered(o)),
                        d =
                            c.length > 0
                                ? a(c, (e, o) => {
                                      const r = t.getForItem(e.id),
                                          a = t.getForItem(o.id);
                                      return n(l, r, a) || i(s, r, a);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: o, distanceToViewportTop: r, id: n } = t;
                        if ("number" == typeof r) {
                            const t = e.getForViewport().getTop() + r;
                            return e.getForItem(n).getTop() - t;
                        }
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getBottom() + o;
                            return e.getForItem(n).getBottom() - t;
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
                            .filter(({ id: e }) => !r(e))
                            .map(({ id: e, rectangle: o }) => ({ id: e, distanceToViewportTop: o.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const o = s({ prevPos: e, nextPos: t });
                        if (o) {
                            const r = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - r;
                        }
                        return 0;
                    },
                };
        },
        674530: (e, t, o) => {
            o.d(t, { m: () => r });
            o(202784);
            const r = Object.freeze({ Carousel: "Carousel", CompactCarousel: "CompactCarousel", GridCarousel: "GridCarousel", PagedCarousel: "PagedCarousel", Vertical: "Vertical" });
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                i = o(107267),
                l = o(403556),
                a = o(791632);
            const s = (e) => {
                    const t = (0, i.useHistory)();
                    return n.createElement(l.Z, (0, r.Z)({}, e, { isCompact: (0, a.HD)(t) }));
                },
                c = n.memo(s);
        },
        890882: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(443781);
            const i = (e) => {
                const { featureSwitches: t, userClaims: o } = r.useContext(n.rC),
                    i = t.isTrue("subscriptions_blue_premium_labeling_enabled"),
                    l = o.isAnyPremiumSubscriber(),
                    { text: a } = e;
                return l && i ? r.createElement(r.Fragment, null, a) : a;
            };
        },
        376843: (e, t, o) => {
            o.d(t, { Z: () => L });
            var r = o(202784),
                n = o(325686),
                i = o(638009),
                l = o(352924),
                a = o(470397),
                s = o(731708),
                c = o(966886),
                d = o(154003),
                u = o(682474),
                m = o(392237),
                h = o(530525),
                p = o(439592),
                g = o(126962),
                C = o(952428),
                b = o(530732),
                f = o(674132),
                y = o.n(f),
                w = o(490359),
                Z = o(769471),
                x = o(415725),
                E = o(725405),
                _ = o(500002),
                B = o(71620),
                k = o(668214),
                v = o(749925);
            const T = (e, t) => v.Z.select(e, t.id.toString()),
                F = (0, k.Z)()
                    .propsFromState(() => ({ article: T }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("ARTICLE_SUMMARY") })),
                S = y().afb7e8f8,
                I = m.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                L = (0, _.ZP)(
                    F(({ article: e, createLocalApiErrorHandler: t, id: o, location: f, socialContext: y, withInternalLink: _ }) => {
                        const B = (0, E.Z)(),
                            k = r.useContext(i.ZP),
                            { article_url: v, description: T, domain: F, image_url: L, publish_date: P, title: D } = e || {},
                            V = { domain: l.b(), timestamp: l.b(), title: l.b(), description: l.b(), adFree: l.b(), socialContext: l.b() },
                            z = [V.domain, V.timestamp, V.title, V.description, V.socialContext],
                            O = r.useMemo(() => {
                                const e = (0, w.Z)(B.contextualScribeData.items || []) || {};
                                return { url: v, items: [(0, Z.Z)({}, e, { article_details: { publisher_name: F, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [B.contextualScribeData.items, v, F]),
                            W = r.useCallback(() => {
                                B.scribe({ action: "impression", data: O });
                            }, [B, O]);
                        if (
                            (r.useEffect(() => {
                                W();
                            }, [W]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: R, landingUrl: H, text: A } = y || {},
                            N = L ? { url: L, height: 750, width: 1250 } : void 0,
                            M = { pathname: v, external: !0 },
                            U = (e) => {
                                B.scribe({ element: _ ? "read_article" : "article_header", action: "open_link", data: O });
                            },
                            q = () => {
                                B.scribe({ element: "conversation_view", action: "click", data: O });
                            },
                            j = H ? k.getLinkFromUrtUrl(H) : void 0,
                            G = j ? k.withAnchorless(j) : void 0,
                            Y = G
                                ? {
                                      ...G,
                                      pathname: `${G.pathname}?time_window=${(() => {
                                          const e = f?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            $ = r.createElement(r.Fragment, null, r.createElement(n.Z, { style: I.horizontalContainer }, r.createElement(n.Z, { style: I.textContainer }, r.createElement(a.Z, { style: I.middotGroup }, F && r.createElement(s.ZP, { color: "gray700", id: V.domain, size: "subtext2", weight: "bold" }, F), P && r.createElement(s.ZP, { color: "gray700", id: V.timestamp, size: "subtext2" }, r.createElement(c.Z, { timestamp: P }))), r.createElement(s.ZP, { color: "text", id: V.title, link: Y, numberOfLines: 3, size: "headline2", style: I.text, weight: "bold", withInteractiveStyling: !1 }, D), T ? r.createElement(s.ZP, { id: V.description, numberOfLines: 2 }, T) : null, _ ? r.createElement(n.Z, { style: I.buttonContainer }, r.createElement(d.ZP, { link: M, onClick: U, size: "xSmall", type: "primaryOutlined" }, S)) : null), N ? r.createElement(n.Z, { style: I.imageContainer }, r.createElement(u.Z, { ratio: m.default.theme.aspectRatios.square }, r.createElement(h.Z, { "aria-label": "", aspectMode: p.Z.SQUARE, image: N }))) : null), r.createElement(g.Z, { contextType: "Facepile", iconSize: "large", id: V.socialContext, text: A, textSize: "subtext2", userAvatarUrls: R, withLeftPadding: !1, withTextCentered: !0 }));
                        return _ ? r.createElement(x.Z, { exact: !1, path: Y?.pathname || "" }, (e) => r.createElement(C.Z, { "aria-labelledby": z.join(" "), "aria-selected": e, link: Y, onClick: q, role: "article", style: I.container }, $)) : r.createElement(b.Z, { link: M, onClick: U, style: [I.container, I.bottomBorder] }, $);
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-b308cbaf.8abc64fa.js.map
