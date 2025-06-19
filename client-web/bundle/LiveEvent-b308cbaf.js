"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-b308cbaf"],
    {
        514029: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                s = r(325686),
                a = r(844685),
                i = r(731708),
                o = r(992942),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                m = r(152957);
            const u = "scorecard",
                p = d().eaaca5dc,
                h = ({ id: e = "", isLive: t, status: r }) => {
                    const n = "44" === e.split(":")[0],
                        s = r === m.I.UPCOMING || r === m.I.DELAYED;
                    return (n && t) || s;
                };
            class g extends n.Component {
                render() {
                    const { scoreData: e } = this.props,
                        t = ((e) => {
                            const { moments: t } = e;
                            if (t) {
                                const { id: e, participant_scores: r, progress_strings: n, status: s, winner_id: a } = t,
                                    i = s === m.I.LIVE;
                                return { isLive: i, progressStrings: h({ id: e, status: s, isLive: i }) ? n.join(" ") : n[0], participantScores: r, winnerId: a };
                            }
                        })(e);
                    return t ? this._renderScoreCardWithHeader(t) : null;
                }
                _renderScoreCardWithHeader(e) {
                    const { withHeader: t } = this.props;
                    return n.createElement(n.Fragment, null, t ? n.createElement(a.Z, { text: p }) : null, this._renderScoresAndMatchStatus(e));
                }
                _renderScoresAndMatchStatus(e) {
                    const { withContainer: t } = this.props,
                        { isLive: r, participantScores: a, progressStrings: o, winnerId: l } = e,
                        c = a.map((e) => this._renderTeamRow(e, l, r));
                    return n.createElement(s.Z, { style: [b.teamDisplay, t && b.container] }, n.createElement(s.Z, { style: b.teamRows }, c), n.createElement(i.ZP, { style: b.matchStatusText }, o));
                }
                _renderTeamRow(e, t, r) {
                    const {
                            participant: { id: a, media: l, name: c },
                            score: d,
                            secondaryScore: m,
                        } = e,
                        p = a === t,
                        h = r || p ? "bold" : "normal",
                        g = m ? `${d.split(" ")[0]} ${m}` : d;
                    return n.createElement(s.Z, { key: a, style: b.teamRow, testID: u }, n.createElement(o.Z, { source: l.url, style: b.teamLogo }), n.createElement(i.ZP, { align: "left", numberOfLines: 1, style: b.teamName }, c), n.createElement(i.ZP, { style: b.teamScore, weight: h }, g), n.createElement(s.Z, { style: [b.winnerContainer, p && b.winner] }));
                }
            }
            const b = l.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, teamDisplay: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, teamRows: { flexGrow: 1, flexShrink: 1, borderEndWidth: 1, borderEndStyle: "solid", borderEndColor: e.colors.gray200, gap: e.spaces.space8 }, teamRow: { alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1, whiteSpace: "normal" }, teamScore: { flexShrink: 0, marginStart: e.spaces.space12 }, winnerContainer: { width: e.spaces.space12 }, winner: { borderBottomWidth: 4, borderBottomColor: "transparent", borderBottomStyle: "solid", borderEndWidth: 5, borderEndStyle: "solid", borderEndColor: e.colors.text, borderTopWidth: 4, borderTopStyle: "solid", borderTopColor: "transparent" }, matchStatusText: { paddingStart: e.spaces.space12 } }));
        },
        373981: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = { ...r(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, r) => {
            r.d(t, { Z: () => c });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const s = (e, t, r) => {
                    const n = e(t),
                        s = e(r);
                    return !n && s ? -1 : n && !s ? 1 : 0;
                },
                a = (e, t, r) => i(e(r), e(t)),
                i = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                o = (e, t) => {
                    if (e.length) return e.reduce((e, r) => (t(r, e) > 0 ? r : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const r = t.getForViewport(),
                        i = (e) => e && e.doesIntersectWith(r),
                        l = (e) => (e ? Math.abs(r.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: r }) => !n(r) && t.isRendered(r) && e.isRendered(r)),
                        d =
                            c.length > 0
                                ? o(c, (e, r) => {
                                      const n = t.getForItem(e.id),
                                          o = t.getForItem(r.id);
                                      return s(i, n, o) || a(l, n, o);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: r, distanceToViewportTop: n, id: s } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(s).getTop() - t;
                        }
                        if ("number" == typeof r) {
                            const t = e.getForViewport().getBottom() + r;
                            return e.getForItem(s).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            r = e.getForViewport().getBottom();
                        return Math.max(0, r - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !n(e))
                            .map(({ id: e, rectangle: r }) => ({ id: e, distanceToViewportTop: r.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const r = l({ prevPos: e, nextPos: t });
                        if (r) {
                            const n = e.getForItem(r).getTop() - e.getForViewport().getTop();
                            return t.getForItem(r).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                s = r(202784),
                a = r(107267),
                i = r(403556),
                o = r(791632);
            const l = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: r, ...l } = e;
                    return s.createElement(i.Z, (0, n.Z)({}, l, { isCompact: r || (0, o.HD)(t) }));
                },
                c = s.memo(l);
        },
        971372: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                s = r(325686),
                a = r(392237),
                i = r(310452),
                o = r(731708),
                l = r(354149);
            const c = a.default.create((e) => ({ description: { marginTop: e.spaces.space8 } })),
                d = ({ description: e, descriptionEntities: t, pivotText: r }) => {
                    const a = e ? e.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(t),
                        m = a ? i.ZP.descriptionTextParts(a, d) : [];
                    return n.createElement(
                        s.Z,
                        { style: c.description },
                        m.length
                            ? n.createElement(
                                  o.ZP,
                                  null,
                                  m.map((e, t) => n.createElement(l.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        r ? n.createElement(o.ZP, { color: "gray700" }, r) : null,
                    );
                };
        },
        449950: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(807896),
                s = r(202784),
                a = r(530525),
                i = r(659651),
                o = r(111677),
                l = r.n(o),
                c = r(632658);
            const d = "image",
                m = l().f93bb3ee;
            class u extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: o, shouldShowAltLabel: l, ...c } = this.props;
                            return s.createElement(s.Fragment, null, s.createElement(a.Z, (0, n.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: d })), l ? s.createElement(i.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return s.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                s = r(202784),
                a = r(325686),
                i = r(292627),
                o = r(537392),
                l = r(392237),
                c = r(365023),
                d = r(392027),
                m = r(774654),
                u = r(725516),
                p = r(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${m.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                g = (e) => {
                    const { "aria-label": t, label: r, onPress: g, scribeComponent: b, ..._ } = e,
                        { loggedInUserId: y } = s.useContext(p.rC),
                        f = (0, u.z)(),
                        C = s.useCallback(
                            (e) => {
                                f.scribe({ component: b, action: "click" }), g && g(e);
                            },
                            [f, g, b],
                        ),
                        I = m.ZM.useCollapsibleNavBars(),
                        E = [...m.Ah({ elementPosition: "bottom" }), I && h.fabStaysAboveSafeArea];
                    return y
                        ? s.createElement(
                              i.Z.FloatingAction,
                              null,
                              s.createElement(o.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > l.default.theme.breakpoints.large,
                                      o = e > l.default.theme.breakpoints.medium,
                                      m = e < l.default.theme.breakpoints.micro,
                                      u = [h.root, o && h.rootMedium, i && h.rootLarge],
                                      p = [h.fab, i && h.fabLarge, m && h.fabMicro, E];
                                  return s.createElement(
                                      a.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      s.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, o) => s.createElement(a.Z, (0, n.Z)({ ref: e() }, o({ style: p })), s.createElement(d.Z, (0, n.Z)({}, _, { "aria-label": t, label: i ? r : void 0, onPress: C, style: m && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => l });
            r(136728);
            var n = r(202784),
                s = r(387524),
                a = r(635510);
            const i = "/compose/post";
            class o extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                n = { pathname: i, state: (t && t()) || {} };
                            r.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: o } = this.props;
                    return n.createElement(s.Z, { "aria-label": e, href: i, icon: t, label: r, onPress: this._handlePress, scribeComponent: o, testID: a.Z.tweet });
                }
            }
            const l = o;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                s = r(111677),
                a = r.n(s),
                i = r(186444),
                o = r(355883);
            const l = a().j0179e90,
                c = a().ee69d769({ verb: "" }),
                d = n.createElement(i.default, null),
                m = ({ getLocationState: e, history: t }) => n.createElement(o.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        5530: (e, t, r) => {
            r.d(t, { Z: () => Qt });
            r(136728);
            var n = r(202784),
                s = r(325686),
                a = r(457311),
                i = r(420412),
                o = r(731708),
                l = r(868634),
                c = r(992942),
                d = r(108362),
                m = r(392237),
                u = r(111677),
                p = r.n(u),
                h = r(912021),
                g = r(401388),
                b = r(516951),
                _ = r(791632),
                y = r(789831),
                f = r(290402),
                C = r(538884),
                I = r(373981),
                E = r(507651),
                v = r(810430),
                S = r(293115),
                Z = r(899455),
                w = r(519896),
                k = r(730717),
                x = r(312771),
                T = r(337069),
                D = r(942893),
                P = r(725516),
                A = r(208560),
                M = r(668214),
                R = r(256727);
            const O = (e, t) => (t.commerceItemId ? R.Z.select(e, t.commerceItemId) : void 0),
                F = (0, M.Z)().propsFromState(() => ({ commerceItem: O }))((e) => {
                    const { commerceItem: t, onClick: r } = e;
                    if ("CommerceProduct" === t?.__typename) {
                        const { __typename: e, ...s } = t;
                        return n.createElement(A.Z, { commerceProduct: s, onClick: r });
                    }
                    return null;
                });
            var L = r(26232);
            const B = (e, t) =>
                    t.module
                        .selectItems(e)
                        .map((t) => (t ? R.Z.select(e, t) : void 0))
                        .filter(Boolean),
                V = (0, M.Z)().propsFromState((e) => ({ commerceItems: B })),
                N = p().e9f1fbcc,
                H = p().c9b302f8,
                U = () => n.createElement(a.Z, { header: N, message: H }),
                W = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 }, cell: { marginHorizontal: "1%", marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: "48%" } })),
                z = (0, P.Z)(
                    V((e) => {
                        const { analytics: t, commerceItems: r, module: a } = e,
                            i = t.contextualScribeData;
                        n.useEffect(() => {
                            t.scribe({ action: "impression", data: i });
                        }, [t, i]);
                        const o = (e, n) => {
                                const s = D.Z.addCommerceDetailsToItems(i, r, e);
                                t.scribe({ element: "product", action: n, data: s });
                            },
                            l = (e) => () => {
                                o(e, "impression");
                            },
                            c = (e) => () => {
                                o(e, "click");
                            };
                        return n.createElement(s.Z, { style: W.root }, n.createElement(L.Z, { module: a, noItemsRenderer: U, numColumns: 2, renderer: (e) => n.createElement(T.Z, { onImpression: l(e), style: W.cell }, n.createElement(F, { commerceItemId: e, onClick: c(e) })) }));
                    }),
                );
            var G = r(443781),
                j = r(32677),
                $ = r(144256),
                q = r(810641),
                Y = r(586534),
                X = r(337637),
                J = r(111685),
                K = r(954970),
                Q = r(514029),
                ee = r(807896),
                te = r(874090),
                re = r(461756),
                ne = r(803224),
                se = r(284702),
                ae = r(366635),
                ie = r(123751),
                oe = r(162246),
                le = r(32788),
                ce = r(90890),
                de = r(390686),
                me = r(521514),
                ue = r(408686),
                pe = r(961817),
                he = r(992720),
                ge = r(511582),
                be = r(310453),
                _e = r(117093),
                ye = r(530525),
                fe = r(439592),
                Ce = r(522171),
                Ie = r(309854),
                Ee = r(933794),
                ve = r(632658);
            class Se extends n.Component {
                render() {
                    const { backgroundColor: e, children: t, remindMeButton: r } = this.props,
                        a = this._renderMediaLabel(),
                        i = a || r ? n.createElement(s.Z, { style: [Ze.verticalAlignment, ((o = e), { backgroundImage: `linear-gradient(transparent 0%, ${o} 100%)` })] }, n.createElement(s.Z, { style: Ze.wrapper }, r, a)) : null;
                    var o;
                    return n.createElement(s.Z, null, i, t);
                }
                _renderMediaLabel() {
                    const { mediaLabel: e } = this.props;
                    return e ? n.createElement(s.Z, { style: Ze.mediaLabelWrapper }, n.createElement(o.ZP, { align: "left", color: "white", size: "body", style: Ze.mediaLabel }, e)) : null;
                }
            }
            Se.defaultProps = { backgroundColor: m.default.theme.colors.translucentBlack77 };
            const Ze = m.default.create((e) => ({ verticalAlignment: { flexDirection: "column", alignItems: "flex-end", zIndex: 1, height: "25%", width: "100%", bottom: "0", start: "0", position: "absolute" }, wrapper: { flexDirection: "row-reverse", flexWrap: "nowrap", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0", paddingBottom: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mediaLabelWrapper: { justifyContent: "center", flexGrow: 1, flexShrink: 1 }, mediaLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } })),
                we = Se,
                ke = p().f93bb3ee;
            class xe extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldRenderImage: !0 }),
                        (this._getRenderDataSafeImage =
                            ({ mediaItem: e, originalImage: t }) =>
                            ({ resourceSelectionHandler: r, useMinimumData: s }) => {
                                const {
                                        fallbackAccessibilityLabel: a,
                                        slate: { label: i, periscopeVariants: o },
                                    } = this.props,
                                    { expanded_url: l, ext_alt_text: c, original_info: d } = e,
                                    u = c || a,
                                    p = n.createElement(we, { mediaLabel: s ? void 0 : i }, n.createElement(ye.Z, { "aria-label": u, aspectMode: fe.Z.exact(m.default.theme.aspectRatios.landscape), cropCandidates: d && d.focus_rects, customVariants: o, image: t, onError: this._handleImageError, onVariantSelection: r, previewMode: s }));
                                return l ? n.createElement(Ee.Z, { handlers: { [Ce.Z.shortcuts.openMediaModal]: this._handleOpenPhotoModal } }, p) : p;
                            }),
                        (this._handleImageError = () => {
                            this.setState({ shouldRenderImage: !1 });
                        }),
                        (this._handleOpenPhotoModal = () => {
                            const { coverMedia: e, history: t } = this.props;
                            e && e.expanded_url && t.push(e.expanded_url);
                        });
                }
                componentDidUpdate(e) {
                    const { shouldRenderImage: t } = this.state;
                    if (!t) {
                        const { image: t } = this.props.slate,
                            { image: r } = e.slate;
                        t.url !== r.url && this.setState({ shouldRenderImage: !0 });
                    }
                }
                render() {
                    return this.state.shouldRenderImage ? this._renderImage() : null;
                }
                _renderImage() {
                    const e = this._getMediaItem(),
                        t = e && Ie.Z.getOriginalImage(e);
                    return e && t ? n.createElement(ve.Z, { acceptLabel: ke, renderContent: this._getRenderDataSafeImage({ mediaItem: e, originalImage: t }), resourceId: t.url }) : null;
                }
                _getMediaItem() {
                    const { coverMedia: e, slate: t } = this.props;
                    return (0, v.Qv)(t, e) || void 0;
                }
            }
            const Te = xe;
            var De = r(174326),
                Pe = r(530732),
                Ae = r(682474),
                Me = r(891198),
                Re = r(819329),
                Oe = r(58881),
                Fe = r(511323),
                Le = r(449950),
                Be = r(659773);
            const Ve = (0, M.Z)().propsFromState(() => ({ dataSaverMode: Be.IX })),
                Ne = p().i3f7ff00;
            class He extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { hasImageError: !1, currentSlate: void 0 }),
                        (this._handleError = () => {
                            this.setState({ hasImageError: !0 });
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    if (t.currentSlate) {
                        const {
                                image: { url: r },
                            } = t.currentSlate,
                            {
                                image: { url: n },
                            } = e.slate,
                            s = (0, v.r5)(r),
                            a = (0, v.r5)(n),
                            i = "latest.jpg" === a;
                        return s !== a || (!e.dataSaverMode && i) ? { ...t, currentSlate: e.slate } : null;
                    }
                    return { ...t, currentSlate: e.slate };
                }
                componentDidUpdate(e, t) {
                    const { currentSlate: r, hasImageError: n } = this.state,
                        { currentSlate: s } = t;
                    n && r && s && r.image && s.image && r.image.url !== s.image.url && this.setState({ hasImageError: !1 });
                }
                render() {
                    const { currentSlate: e, hasImageError: t } = this.state,
                        { cropCandidates: r, image: a, periscopeVariants: i } = e || {};
                    return a && !t ? n.createElement(Le.Z, { "aria-label": Ne, aspectMode: fe.Z.exact(m.default.theme.aspectRatios.landscape), backgroundColor: m.default.theme.colors.gray50, cropCandidates: r, customVariants: i, hideAcceptOverlay: !0, image: a, onError: this._handleError }) : n.createElement(s.Z, { style: Ue.fallback });
                }
            }
            const Ue = m.default.create((e) => ({ fallback: { backgroundColor: e.colors.gray50 } })),
                We = Ve(He);
            var ze = r(864442),
                Ge = r(62338),
                je = r(581264);
            const $e = p().f2382014,
                qe = p().g66c8348,
                Ye = ["views", "viewers"];
            class Xe extends n.Component {
                render() {
                    const { onClick: e } = this.props,
                        t = this._renderImage(),
                        r = this._renderAttribution(),
                        s = this._renderOverlay(t);
                    return n.createElement(Pe.Z, { focusable: !0, interactiveStyles: Ke, onClick: e, role: "button", style: Je.carouselItem }, s, r);
                }
                _renderAttribution() {
                    const {
                        mediaItem: { carouselItemInfo: e },
                    } = this.props;
                    if (e) {
                        const { is_blue_verified: t, name: r, screenName: s, verified: a } = e;
                        return n.createElement(ae.Z, { isBlueVerified: t, isVerified: a, name: r, screenName: s, style: Je.userAttribution, withStackedLayout: !0 });
                    }
                }
                _renderOverlay(e) {
                    const { isSelected: t } = this.props;
                    return n.createElement(Ae.Z, { ratio: m.default.theme.aspectRatios.landscape, style: Je.image }, this._renderSocialProof(e), t && n.createElement(s.Z, { style: Je.selectedOverlay }));
                }
                _renderSocialProof(e) {
                    const {
                            mediaItem: { carouselItemInfo: t },
                        } = this.props,
                        { audiospace: r, playbackDuration: a, socialProof: i, type: c } = t || {},
                        d = i && Ye.includes(i.type) ? n.createElement(l.ZP, null, n.createElement(s.Z, { style: Je.horizontalContainer }, n.createElement(Fe.default, null), n.createElement(o.ZP, null, Me.ZP.getTruncatedCount(i.count, !0)))) : null,
                        m = (({ audiospace: e, playbackDuration: t, type: r }) => {
                            switch (r) {
                                case v.Tr.LIVE_BROADCAST:
                                    return n.createElement(l.ZP, { type: "live" }, $e);
                                case v.Tr.REPLAY_BROADCAST:
                                    return n.createElement(l.ZP, { bold: !0 }, qe);
                                case v.Tr.VOD:
                                    return n.createElement(l.ZP, null, (0, Ge.y)(t) || "");
                                case v.Tr.GIF:
                                    return n.createElement(l.ZP, { bold: !0 }, "GIF");
                                case v.Tr.AUDIOSPACE: {
                                    const t = (0, je.F)(e);
                                    return n.createElement(l.ZP, t);
                                }
                                default:
                                    return null;
                            }
                        })({ audiospace: r, playbackDuration: a, type: c });
                    return n.createElement(n.Fragment, null, e, n.createElement(Re.Z, { align: "left" }, m, d));
                }
                _renderImage() {
                    const {
                        mediaItem: {
                            carouselItemInfo: { audiospace: e },
                            slate: t,
                        },
                    } = this.props;
                    return e && e.hostPalette ? n.createElement(ze.Z, { avatar_url: e.host.avatar_url, palette: e.hostPalette }) : t ? n.createElement(We, { slate: t }) : null;
                }
            }
            Xe.contextType = G.rC;
            const Je = m.default.create((e) => ({ selectedOverlay: { ...m.default.absoluteFillObject, borderColor: e.colors.primary, borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.large, borderStyle: "solid" }, horizontalContainer: { flexDirection: "row" }, image: { borderRadius: e.borderRadii.small }, carouselItem: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, padding: e.spaces.space2, width: 150 }, userAttribution: { paddingTop: e.spaces.space4 } })),
                Ke = Oe.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, customFocusBackgroundColor: m.default.theme.colors.transparent, insetFocusRing: !0 });
            const Qe = class {
                    constructor(e) {
                        (this._scribedIndices = new Map()),
                            (this._indiceCallbacks = new Map()),
                            (this._handleScribeImpression = (e) => {
                                this._scribedIndices.set(e, !0), this._scribeImpression(e);
                            }),
                            (this._scribeImpression = e);
                    }
                    destroy() {
                        Array.from(this._indiceCallbacks.values()).forEach((e) => {
                            clearTimeout(e);
                        });
                    }
                    handleVisibilityChange({ index: e, intersectionRatio: t }) {
                        if (this._scribedIndices.has(e)) return;
                        const r = this._indiceCallbacks.has(e);
                        t >= 0.5 && !r
                            ? this._indiceCallbacks.set(
                                  e,
                                  setTimeout(() => this._handleScribeImpression(e), 500),
                              )
                            : t < 0.5 && r && (clearTimeout(this._indiceCallbacks.get(e)), this._indiceCallbacks.delete(e));
                    }
                },
                et = Object.freeze({ CarouselImpression: "carousel_impression", TileClick: "tile_click", TileImpression: "tile_impression", TileAutoClick: "tile_auto_click" }),
                tt = { action: et.CarouselImpression },
                rt = { action: et.TileAutoClick },
                nt = { action: et.TileImpression },
                st = { action: et.TileClick };
            class at extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getHandleOnClickForItem = (e, t) => () => {
                            const { onCarouselScribe: r } = this.props;
                            t(e, () => r(st));
                        }),
                        (this._handleCarouselChildImpression = (e) => {
                            const { onCarouselScribe: t } = this.props;
                            t(nt, { tilePosition: e });
                        }),
                        (this._handleVisibleRangeChange = (e) => {
                            this._impressionTracker.handleVisibilityChange(e);
                        });
                }
                componentDidMount() {
                    const { onCarouselScribe: e } = this.props;
                    (this._impressionTracker = new Qe(this._handleCarouselChildImpression)), this._shouldDisplayCarousel() && e(tt);
                }
                componentWillUnmount() {
                    this._impressionTracker.destroy();
                }
                componentDidUpdate(e) {
                    const { carousel: t } = e,
                        { carousel: r, onCarouselScribe: n } = this.props;
                    this._shouldDisplayCarousel() && r.length !== t.length && n(tt);
                }
                render() {
                    return this._shouldDisplayCarousel() ? n.createElement(De.Z, { onVisibleRangeChange: this._handleVisibleRangeChange, style: it.carousel, visibleItemIndex: this.props.selectedItemIndex }, this._renderCarouselItems()) : null;
                }
                _renderCarouselItems() {
                    const { carousel: e, selectedItemIndex: t, setSelectedCarouselIndex: r } = this.props;
                    return e.map((e, s) => n.createElement(Xe, { isSelected: s === t, key: s, mediaItem: e, onClick: this._getHandleOnClickForItem(s, r) }));
                }
                _shouldDisplayCarousel() {
                    const { carousel: e } = this.props;
                    return e.length > 1;
                }
            }
            const it = m.default.create((e) => ({ carousel: { paddingTop: e.spaces.space16 } })),
                ot = at,
                lt = "events-player";
            var ct = r(550293);
            const dt = (0, M.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: ct.kX, effectiveAutoplay: Be.AP }))
                    .withAnalytics({ element: "image" }),
                mt = p().b0b38774,
                ut = { autoplayPrioritizationPolicy: ue.n8, minimumVisibilityForAutoplay: de.tB },
                pt = new ce.yt(ut),
                ht = { hideFullScreenButton: !0 };
            class gt extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._multiVideoAutoAdvanceEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_enabled")),
                        (this._multiVideoAutoAdvanceDockEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_dock_enabled")),
                        (this._multiVideoAutoAdvanceFullscreenEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_fullscreen_enabled")),
                        (this._dockableAutoplayPolicyEnabled = this.context.featureSwitches.isTrue("responsive_web_dockable_autoplay_policy_enabled")),
                        (this.state = { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
                        (this._getUiStack = (0, h.Z)(
                            (e, t, r, a, i, o) =>
                                ({ containerRef: l, guestsState: c, playerApi: d, playerState: m }) =>
                                    n.createElement(te.Z, {
                                        containerRef: l,
                                        guestsState: c,
                                        isDocked: t,
                                        nextItemInfo: a,
                                        onUpNextComplete: this._getHandleUpNextOverlayComplete(i),
                                        onUpNextReplay: this._handleReplayPress,
                                        playerApi: d,
                                        playerDisplayOptions: e,
                                        playerState: m,
                                        renderUpNextImage: () => {
                                            const e = o?.slate;
                                            return n.createElement(n.Fragment, null, e ? n.createElement(We, { slate: e }) : null, n.createElement(s.Z, { style: bt.backgroundFading }));
                                        },
                                        shouldRenderUpNext: r,
                                    }),
                        )),
                        (this._renderHorizonPlayer = ({ closeRequested: e, dockRequested: t, key: r, playerProps: a }, i) => {
                            if (!a) return null;
                            const { disableFullscreenVideo: o } = this.props,
                                l = this._shouldRenderUpNext(i, t),
                                c = o ? ht : void 0,
                                { carousel: d, selectedItemIndex: m } = this.props,
                                u = this._getNextEligibleCarouselItemIndex(m, d),
                                p = u > -1 && d ? d[u] : void 0,
                                h = p?.carouselItemInfo,
                                g = h ? { playbackDurationMs: h.playbackDuration, name: h.name, screenName: h.screenName, type: h.type, verified: !!h.verified } : void 0,
                                b = this._getUiStack(a.displayOptions, t, !!l, g, u, p);
                            return a ? n.createElement(s.Z, { style: t ? bt.dockedContainerBackground : void 0 }, n.createElement(be.Z, (0, ee.Z)({}, a, { disablePreroll: !0, displayOptions: c, key: r, loopingThresholdMs: 7e3, onProgressChange: this._handleProgressChange, preserveMuteState: !0, uiStack: b }))) : null;
                        }),
                        (this._handleProgressChange = (e, t = !1) => {
                            const { showUpNextPlayerOverlay: r } = this.state;
                            t !== r && this.setState({ showUpNextPlayerOverlay: t });
                        }),
                        (this._getHandleUpNextOverlayComplete = (e) => (t) => {
                            if (e) {
                                const { onChildScribeAction: r, setSelectedCarouselIndex: n } = this.props,
                                    s = { tilePosition: e };
                                n(e), r(t ? st : rt, s);
                            }
                            this.setState({ showUpNextPlayerOverlay: !1 });
                        }),
                        (this._setPlayer = (e) => {
                            this._playerInstance = e;
                        }),
                        (this._shouldRenderUpNext = (e = !0, t = !1) => {
                            const { carousel: r, effectiveAutoplay: n, isPlayerFullscreen: s, selectedItemIndex: a } = this.props,
                                i = this._getNextEligibleCarouselItemIndex(a, r),
                                o = (0, he.Z)(n ?? (0, pe.i)());
                            return this._multiVideoAutoAdvanceEnabled && o && !re.Z.reducedMotionEnabled && (!t || this._multiVideoAutoAdvanceDockEnabled) && (!s || this._multiVideoAutoAdvanceFullscreenEnabled) && e && this.state.showUpNextPlayerOverlay && i > -1;
                        }),
                        (this._handleCloseDockComplete = () => {
                            const { showUpNextPlayerOverlay: e } = this.state,
                                { carousel: t, selectedItemIndex: r } = this.props;
                            if (e) {
                                const e = this._getNextEligibleCarouselItemIndex(r, t);
                                this._getHandleUpNextOverlayComplete(e)();
                            } else this._playerInstance && this._playerInstance.pause();
                        }),
                        (this._handleMuteChange = ({ isPlayerMuted: e }) => this.setState({ isPlayerMuted: e })),
                        (this._handleReplayPress = () => {
                            this._playerInstance && this._playerInstance.replay();
                        }),
                        (this._getNextEligibleCarouselItemIndex = (0, h.Z)(v.mZ));
                }
                render() {
                    const { carouselItemInfo: e, isDockingEnabled: t, mediaType: r, onChildScribeAction: a, title: i } = this.props;
                    let o;
                    switch (r) {
                        case v.Tr.AUDIOSPACE:
                            o = this._renderAudioSpace();
                            break;
                        case v.Tr.REPLAY_BROADCAST:
                        case v.Tr.LIVE_BROADCAST:
                        case v.Tr.VOD:
                            o = this._renderVideo();
                            break;
                        case v.Tr.GIF:
                            o = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 });
                            break;
                        case v.Tr.SLATE:
                        default:
                            o = this._renderImage();
                    }
                    const l = t ? this._renderUserSceenName(e) : null;
                    return n.createElement(oe.Z, { dockBottomOffset: this._getOffsetForDrawer(), isDisabled: !t, onCloseDockComplete: this._handleCloseDockComplete, onDockingScribeAction: a, subtitle: l, title: i, visibleThreshold: de.tB }, n.createElement(s.Z, { style: bt.container, testID: lt }, o));
                }
                _getOffsetForDrawer() {
                    const { spaces: e } = m.default.theme,
                        { dmDrawerVisibility: t } = this.props,
                        r = parseInt(`${e.space20}`, 10);
                    return t === ge.S.COLLAPSED ? me.Z.dmDrawerHeight.collapsed + r : t === ge.S.EXPANDED ? me.Z.dmDrawerHeight.expanded + r : r;
                }
                _renderImage() {
                    const { history: e, mediaDetails: t, slate: r } = this.props;
                    return r ? n.createElement(Te, { coverMedia: t.coverMedia, fallbackAccessibilityLabel: mt, history: e, slate: r }) : null;
                }
                _renderAudioSpace() {
                    const { audiospace: e } = this.props.carouselItemInfo;
                    return e ? n.createElement(_e.MS, { audioSpaceId: e.id }) : null;
                }
                _renderVideo({ isGif: e = !1, withUpNextOverlay: t = !0 } = {}) {
                    const {
                            eventId: r,
                            mediaDetails: { broadcastId: s, coverMedia: a, coverTweet: i = {}, mediaId: o, promotedContent: l },
                            onFullscreenChange: c,
                            slate: d,
                        } = this.props,
                        { id_str: u } = a || {},
                        { id_str: p } = i,
                        { image: h, periscopeVariants: g } = d || {},
                        b = { "aria-label": mt, aspectRatio: m.default.theme.aspectRatios.landscape, backgroundColor: m.default.theme.colors.gray0, maxLoopCount: e ? void 0 : 3, onFullscreenChange: c, onMuteChange: this._handleMuteChange, promotedContent: l, playbackCoordination: this._dockableAutoplayPolicyEnabled ? ce.Tc : pt, playbackPriority: ne.W.DOCKABLE, poster: h, customVariants: g, shouldPlayUnmuted: !this.state.isPlayerMuted, setPlayer: this._setPlayer };
                    let _, y;
                    if (s && o) (_ = s), (y = { ...b, videoType: "video", includeBroadcastEventAssociation: !0, source: { contentId: o, eventId: r, variants: [], videoId: ie.Z.forBroadcast(s) } });
                    else if (u && p) {
                        const e = ie.Z.forTweet(p),
                            t = se.Z.getVideoFromCoverMedia(a),
                            n = t && se.Z.extractVideoProps(e, t, r);
                        (_ = u), (y = n ? { ...n, ...b } : void 0);
                    }
                    return n.createElement(le.Z.Consumer, null, ({ closeRequested: e, dockRequested: r }) => this._renderHorizonPlayer({ closeRequested: e, dockRequested: r, key: _, playerProps: y }, t));
                }
                _renderUserSceenName(e) {
                    const { accountType: t, name: r, screenName: s, userId: a } = e || {};
                    let i = null;
                    return a && (t === v.tO.TWITTER && s ? (i = n.createElement(ae.Z, { screenName: s, weight: "normal", withLink: !0 })) : t === v.tO.PERISCOPE && r && (i = n.createElement(o.ZP, { color: "gray700", link: `https://pscp.tv/u/${a}` }, r))), i;
                }
            }
            gt.contextType = G.rC;
            const bt = m.default.create((e) => ({ backgroundFading: { ...m.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack30 }, container: { zIndex: 10 }, dockedContainerBackground: { backgroundColor: e.colors.cellBackground } })),
                _t = dt(gt);
            var yt = r(952428),
                ft = r(157396),
                Ct = r(187669),
                It = r(427266),
                Et = r(725405);
            const vt = r.p + "betmgm-logo-dark.1f69d32a.png",
                St = r.p + "betmgm-logo-light.2095aafa.png";
            r(571372);
            function Zt({ children: e }) {
                const { setWidths: t, widths: r } = n.useContext(wt),
                    a = n.useRef(),
                    i = n.useRef(r);
                i.current = r;
                const [o, l] = n.useState(null);
                n.useLayoutEffect(() => {
                    l(i.current.length);
                    const e = i.current.length,
                        r = a.current?.getBoundingClientRect().width ?? 0;
                    return (
                        t((e) => e.concat(r)),
                        () => {
                            t((t) => t.map((t, r) => (r === e ? 0 : t)));
                        }
                    );
                }, [t]);
                const c = n.useCallback(
                        (e) => {
                            if (null !== o) {
                                const r = e.nativeEvent.layout.width;
                                t((e) => e.map((e, t) => (t === o ? r : e)));
                            }
                        },
                        [o, t],
                    ),
                    d = Math.max(0, ...r),
                    m = n.useMemo(() => [{ minWidth: d }, xt.container], [d]);
                return n.createElement(s.Z, { style: m }, n.createElement(s.Z, { onLayout: c, ref: a }, e));
            }
            const wt = n.createContext({
                widths: [],
                setWidths: () => {
                    throw new Error("EquiContext not initialized");
                },
            });
            function kt({ children: e }) {
                const [t, r] = n.useState([]);
                return n.createElement(wt.Provider, { value: { widths: t, setWidths: r } }, e);
            }
            const xt = m.default.create((e) => ({ container: { alignItems: "center", justifyContent: "center" } })),
                Tt = p().ca25ebae,
                Dt = p().e749753a,
                Pt = p().c602f5b8,
                At = p().ea885dec,
                Mt = p().cde48000,
                Rt = { spread: Dt, total: Pt, money_line: At };
            function Ot({ bettingOdds: { participant_odds: e, url: t } }) {
                const r = ["spread", "total", "money_line"].filter((t) => e.every((e) => e[t])),
                    a = n.useMemo(() => [Bt.table, { gridTemplateColumns: `minmax(max-content, 1fr) repeat(${r.length}, max-content)` }], [r.length]),
                    i = e.map(({ betting_participant: e, ...t }) => ({ participant: e, tableData: r.map((e) => (0, It.XY)(t[e])) })),
                    { scribeClickHandler: l } = (function () {
                        const e = (0, Et.Z)();
                        (0, Ct.q)(() => {
                            e.scribe({ component: Lt, action: "impression" });
                        });
                        const t = n.useCallback(() => {
                            e.scribe({ component: Lt, action: "click" });
                        }, [e]);
                        return { scribeClickHandler: t };
                    })();
                return n.createElement(
                    yt.Z,
                    { link: t, onClick: l, style: Bt.container },
                    n.createElement(
                        s.Z,
                        { style: a },
                        n.createElement(s.Z, { style: Bt.flexAlign }, n.createElement(o.ZP, { weight: "bold" }, Tt), n.createElement(Ft, null)),
                        r.map((e, t) => {
                            const r = Rt[e];
                            return r ? n.createElement(s.Z, { key: r }, n.createElement(o.ZP, { align: "center", color: "gray700", size: "subtext1" }, r)) : n.createElement(s.Z, { key: t });
                        }),
                        i.map(({ participant: { id: e, media_url: t, name: r }, tableData: a }) =>
                            n.createElement(
                                n.Fragment,
                                { key: e },
                                n.createElement(s.Z, { style: Bt.nameColumn }, t && n.createElement(c.Z, { source: t, style: Bt.teamLogo }), r ? n.createElement(o.ZP, { color: "gray900", numberOfLines: 1, style: Bt.teamName }, r) : null),
                                n.createElement(
                                    kt,
                                    null,
                                    a.map(({ subtitle: e, title: t }, r) => n.createElement(s.Z, { key: r, style: Bt.tableCell }, n.createElement(Zt, null, e ? n.createElement(o.ZP, { align: "center", color: "gray900", numberOfLines: 1, size: "subtext1" }, t) : n.createElement(o.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, t), e && n.createElement(o.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, e)))),
                                ),
                            ),
                        ),
                    ),
                    n.createElement(s.Z, { style: Bt.footer }, n.createElement(o.ZP, { color: "gray900", size: "subtext3" }, Mt)),
                );
            }
            function Ft() {
                return n.createElement(c.Z, { "aria-label": "BetMGM", source: m.default.theme.paletteName === ft.default.ThemePaletteNames.light ? St : vt, style: Bt.inlineImage });
            }
            const Lt = "bet_mgm_odds";
            const Bt = m.default.create((e) => ({ container: { marginTop: e.spaces.space16 }, table: { display: "grid", gridColumnGap: e.spaces.space2, gridRowGap: e.spaces.space2, marginTop: e.spaces.space4, overflowX: "auto", overflowY: "hidden" }, tableRow: { marginBottom: e.spaces.space4, marginTop: e.spaces.space4 }, nameColumn: { flexDirection: "row", alignItems: "center" }, tableCell: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.small, alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space4 }, footer: { marginTop: e.spaces.space8, alignItems: "end" }, inlineImage: { height: e.lineHeights.body, aspectRatio: "133 / 36", marginStart: e.spaces.space2 }, flexAlign: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1 } }));
            p().f2382014, p().g66c8348;
            class Vt extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._enableMultiVideo = this.context.featureSwitches.isTrue("live_event_multi_video_enabled")),
                        (this._enableDocking = this.context.featureSwitches.isTrue("live_event_docking_enabled")),
                        (this.state = { headerWidth: 0 }),
                        (this._getSelectedItemIndex = (e, t) => (0, X.Z)(e, (e) => e.id === t)),
                        (this._setSelectedCarouselIndex = (e) => {
                            const { carousel: t, setSelectedCarouselItem: r } = this.props,
                                n = t && t[e];
                            n && r(n);
                        });
                }
                render() {
                    const { selectedCarouselItem: e } = this.props;
                    return n.createElement(n.Fragment, null, e && this._renderHeaderMedia(e), this._renderDescription(e), n.createElement(i.Z, null));
                }
                _renderDescription(e) {
                    const {
                            bettingOdds: t,
                            isTOO: r,
                            liveEventDetails: { author: a, category: i, description: o, descriptionEntities: l, timeString: c, title: d },
                        } = this.props,
                        m = e?.mediaDetails?.coverTweet,
                        u = e?.mediaDetails?.coverMedia,
                        p = e?.slate?.imageAttribution;
                    return n.createElement(s.Z, { style: Nt.contentContainer }, d ? n.createElement(J.Z, { author: a, coverTweet: m, description: o, descriptionEntities: l, imageAttribution: p, isTOO: r, mediaType: u?.type, preTitle: r || !a ? i : "", remindMeButton: this._renderRemindMeButton(), time: c, title: d, withHashflags: !0 }) : null, this._renderScoreCard(), t ? n.createElement(Ot, { bettingOdds: t }) : null, this._enableMultiVideo && e ? this._renderCarousel(e) : null);
                }
                _renderHeaderMedia(e) {
                    const {
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: s,
                            isPlayerFullscreen: a,
                            liveEventDetails: { eventId: i, title: o },
                            onChildScribeAction: l,
                            onFullscreenChange: c,
                        } = this.props,
                        { carouselItemInfo: d, mediaDetails: m, slate: u } = e,
                        { type: p } = d,
                        h = this._getDockingEnabled(p);
                    return n.createElement(_t, { carousel: t, carouselItemInfo: d, disableFullscreenVideo: r, eventId: i, history: s, isDockingEnabled: h, isPlayerFullscreen: a, mediaDetails: m, mediaType: p, onChildScribeAction: l, onFullscreenChange: c, selectedItemIndex: this._getSelectedItemIndex(t || [], e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex, slate: u, title: o });
                }
                _renderRemindMeButton() {
                    const {
                            liveEventDetails: { eventId: e, remindMeSubscription: t },
                            onChildScribeAction: r,
                            remindMeButtonSubscribe: s,
                            remindMeButtonUnsubscribe: a,
                        } = this.props,
                        i = !!this.context.viewerUserId,
                        { toggle_visible: o } = t || {};
                    return i && o && t && s && a ? n.createElement(K.Z, { eventId: e, onPress: t.subscribed ? a : s, onRemindButtonScribe: r, remindMeSubscription: t }) : null;
                }
                _renderScoreCard() {
                    const { scoreData: e, withScoreCard: t } = this.props;
                    return e && t ? n.createElement(Q.Z, { scoreData: e }) : null;
                }
                _renderCarousel(e) {
                    const { carousel: t, onChildScribeAction: r } = this.props;
                    return t ? n.createElement(ot, { carousel: t, onCarouselScribe: r, selectedItemIndex: this._getSelectedItemIndex(t, e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex }) : null;
                }
                _getDockingEnabled(e) {
                    const { isWide: t } = this.props,
                        { viewerUserId: r } = this.context,
                        n = [v.Tr.LIVE_BROADCAST, v.Tr.REPLAY_BROADCAST, v.Tr.VOD];
                    return !!r && this._enableDocking && t && n.includes(e);
                }
            }
            Vt.contextType = G.rC;
            const Nt = m.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
            var Ht = r(769471),
                Ut = r(962741),
                Wt = r(335632);
            const zt = p().abdcd68a,
                Gt = p().cfb57adb,
                jt = p().b1037710,
                $t = p().bb980db0,
                qt = p().e9f1fbcc,
                Yt = p().a3b80be6,
                Xt = p().ffd929c1,
                Jt = { section: "shop_tab", component: "product_grid" },
                Kt = () => n.createElement(a.Z, { header: qt, message: Yt });
            class Qt extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { selectedCarouselItemId: void 0 }),
                        (this._render = () => {
                            const { history: e, interstitialOrderToDisplay: t, onInterstitialSubmit: r } = this.props,
                                s = (0, _.cu)(e);
                            return this._refreshControlWrapper(n.createElement(C.Z, { interstitials: t, onInterstitialSubmit: r }, (e) => n.createElement(n.Fragment, null, s ? null : this._renderHeader(), this._renderInlineCompose(), e || this._renderTimeline())));
                        }),
                        (this._getComposeTimelineDetails = () => this.props.timelineDetails.composeDetails),
                        (this._setSelectedCarouselItem = (e) => {
                            const { onSelectedCarouselItemChange: t } = this.props;
                            t && t(e), this.setState({ selectedCarouselItemId: e.id });
                        }),
                        (this._handleInlineComposeOnClick = (e) => {
                            e.preventDefault();
                            const { history: t } = this.props,
                                r = { pathname: "/compose/post", state: this._getComposeTimelineDetails() };
                            t.push(r);
                        }),
                        (this._getTimelineModuleMemoized = (0, h.Z)((e, t) => (0, k.Z)(e, t))),
                        (this._getLiveCommerceItemsSliceModuleMemoized = (0, h.Z)((e) => (0, Z.Z)(e)));
                    const { timelineMessageOverride: r, withTweetActionsDisabled: s } = e;
                    (this._entryConfiguration = (({ withTweetActionsDisabled: e }) => ({ ...(0, Wt.G)({ withTweetActionsDisabled: e }) }))({ withTweetActionsDisabled: s })),
                        (this._timelinePreprocessor = ((e) => (t) =>
                            e
                                ? t.map((t) => {
                                      if (t.type === Ut.ZP.Message) {
                                          const r = { content: { content: { inlinePrompt: { headerText: e } } } };
                                          return (0, Ht.Z)({}, t, r);
                                      }
                                      return t;
                                  })
                                : t)(r));
                }
                render() {
                    const { fetchStatus: e, liveEventDetails: t, onFetch: r } = this.props;
                    return n.createElement(f.Z, { "aria-label": zt, fetchStatus: e, key: t.eventId, onRequestRetry: r, render: this._render });
                }
                _renderHeader() {
                    const {
                            bettingOdds: e,
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: s,
                            isPlayerFullscreen: a,
                            isTOO: i,
                            isWide: o,
                            liveEventDetails: l,
                            onChildScribeAction: c,
                            onFullscreenChange: d,
                            remindMeButtonSubscribe: m,
                            remindMeButtonUnsubscribe: u,
                            scoreData: p,
                            timelineDetails: { hashtag: h },
                        } = this.props,
                        { selectedCarouselItemId: g } = this.state,
                        b = (0, v.to)(t, g);
                    return n.createElement(Vt, { bettingOdds: e, carousel: t, disableFullscreenVideo: r, history: s, isPlayerFullscreen: a, isTOO: i, isWide: o, liveEventDetails: l, onChildScribeAction: c, onFullscreenChange: d, remindMeButtonSubscribe: m, remindMeButtonUnsubscribe: u, scoreData: p, selectedCarouselItem: b, setSelectedCarouselItem: this._setSelectedCarouselItem, timelineHashtag: h, withScoreCard: !o });
                }
                _renderInlineCompose() {
                    const {
                            isWide: e,
                            timelineDetails: { hashtag: t },
                        } = this.props,
                        r = t ? Gt({ hashtag: t }) : jt;
                    return e ? n.createElement(n.Fragment, null, n.createElement(Y.Z, { onClick: this._handleInlineComposeOnClick, promptLabel: r }), n.createElement(i.Z, null)) : null;
                }
                _renderTimeline() {
                    const {
                            timelineDetails: { timelineId: e },
                        } = this.props,
                        t = this._renderTimelineLinks(),
                        r = e === v.BG.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline();
                    return t.length > 1 || (1 === t.length && t[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(E.Z, { "aria-label": $t, links: t.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }), n.createElement(s.Z, { style: er.timelineContainer }, r)) : r;
                }
                _renderTimelineLinks() {
                    const {
                        timelineDetails: { timelineLinks: e },
                    } = this.props;
                    return e.map(({ customizationInfo: e, label: t, labelType: r, ...s }) => {
                        const a = !(0, g.Z)(e),
                            i = this._renderTimelineLabelAnnotation(r);
                        return { ...s, key: t, label: a && e ? this._renderCustomLabel({ label: t, customizationInfo: e, labelAnnotation: i }) : n.createElement(o.ZP, { weight: "bold" }, t, i), isCustom: a };
                    });
                }
                _renderTimelineLabelAnnotation(e) {
                    return e === v.AJ.New ? n.createElement(l.ZP, { background: "primary", bold: !0, style: er.labelAnnotation }, Xt({ ttc_live_event: "" })) : null;
                }
                _renderCustomLabel({ customizationInfo: { badge_media: e, title_color: t }, label: r, labelAnnotation: a }) {
                    return n.createElement(s.Z, { style: er.timelineLabel }, e && e.url ? n.createElement(c.Z, { source: e.url, style: er.timelineLabelBadge }) : null, n.createElement(o.ZP, { style: { color: t }, weight: "bold" }, r, a));
                }
                _renderRichTimeline() {
                    const {
                            isPlayerFullscreen: e,
                            isWide: t,
                            liveEventDetails: { title: r = $t },
                            onTimelinePoll: s,
                            pollingIntervalMs: a,
                            timelineDetails: { eventId: i, timelineId: o },
                            withFloatingComposeButton: l,
                        } = this.props,
                        c = this._getTimelineModuleMemoized(i, o),
                        m = !e && !t && l ? this._renderFloatingComposeButton() : null;
                    return n.createElement(y.Z, { component: d.Z, fab: m }, n.createElement(q.Z, { anchoring: I.Z, entryConfiguration: this._entryConfiguration, module: c, onTimelinePoll: s, pollingIntervalMsOverride: a, preprocessEntryList: this._timelinePreprocessor, prerollDisplayLocation: w.Nw.OTHER, refreshControl: null, renderEmptyState: Kt, title: r }));
                }
                _renderCommerceItemSliceTimeline() {
                    const {
                            timelineDetails: { eventId: e },
                        } = this.props,
                        t = this._getLiveCommerceItemsSliceModuleMemoized(e);
                    return n.createElement(S.nO, { namespace: Jt }, n.createElement(z, { module: t }));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return n.createElement(j.Z, { getLocationState: this._getComposeTimelineDetails, history: e });
                }
                _refreshControlWrapper(e) {
                    const { onFetch: t, refreshStatus: r } = this.props;
                    return n.createElement($.Z, { isRefreshing: r === x.ZP.LOADING, onRefresh: t }, e);
                }
            }
            (Qt.contextType = G.rC), (Qt.defaultProps = { onChildScribeAction: b.Z });
            const er = m.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineLabelBadge: { borderRadius: e.borderRadii.infinite, height: e.lineHeights.body, marginEnd: e.spaces.space4, width: e.lineHeights.body }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-b308cbaf.f510485a.js.map
