"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-b308cbaf"],
    {
        514029: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(202784),
                n = r(325686),
                s = r(844685),
                a = r(731708),
                i = r(992942),
                c = r(392237),
                l = r(332920),
                m = r.n(l),
                p = r(152957);
            const d = "scorecard",
                u = m().eaaca5dc,
                g = ({ id: e = "", isLive: t, status: r }) => {
                    const o = "44" === e.split(":")[0],
                        n = r === p.I.UPCOMING || r === p.I.DELAYED;
                    return (o && t) || n;
                };
            class b extends o.Component {
                render() {
                    const { scoreData: e } = this.props,
                        t = ((e) => {
                            const { moments: t } = e;
                            if (t) {
                                const { id: e, participant_scores: r, progress_strings: o, status: n, winner_id: s } = t,
                                    a = n === p.I.LIVE;
                                return { isLive: a, progressStrings: g({ id: e, status: n, isLive: a }) ? o.join(" ") : o[0], participantScores: r, winnerId: s };
                            }
                        })(e);
                    return t ? this._renderScoreCardWithHeader(t) : null;
                }
                _renderScoreCardWithHeader(e) {
                    const { withHeader: t } = this.props;
                    return o.createElement(o.Fragment, null, t ? o.createElement(s.Z, { text: u }) : null, this._renderScoresAndMatchStatus(e));
                }
                _renderScoresAndMatchStatus(e) {
                    const { withContainer: t } = this.props,
                        { isLive: r, participantScores: s, progressStrings: i, winnerId: c } = e,
                        l = s.map((e) => this._renderTeamRow(e, c, r));
                    return o.createElement(n.Z, { style: [h.teamDisplay, t && h.container] }, o.createElement(n.Z, { style: h.teamRows }, l), o.createElement(a.ZP, { style: h.matchStatusText }, i));
                }
                _renderTeamRow(e, t, r) {
                    const {
                            participant: { id: s, media: c, name: l },
                            score: m,
                            secondaryScore: p,
                        } = e,
                        u = s === t,
                        g = r || u ? "bold" : "normal",
                        b = p ? `${m.split(" ")[0]} ${p}` : m;
                    return o.createElement(n.Z, { key: s, style: h.teamRow, testID: d }, o.createElement(i.Z, { source: c.url, style: h.teamLogo }), o.createElement(a.ZP, { align: "left", numberOfLines: 1, style: h.teamName }, l), o.createElement(a.ZP, { style: h.teamScore, weight: g }, b), o.createElement(n.Z, { style: [h.winnerContainer, u && h.winner] }));
                }
            }
            const h = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, teamDisplay: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, teamRows: { flexGrow: 1, flexShrink: 1, borderEndWidth: 1, borderEndStyle: "solid", borderEndColor: e.colors.gray200, gap: e.spaces.space8 }, teamRow: { alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1, whiteSpace: "normal" }, teamScore: { flexShrink: 0, marginStart: e.spaces.space12 }, winnerContainer: { width: e.spaces.space12 }, winner: { borderBottomWidth: 4, borderBottomColor: "transparent", borderBottomStyle: "solid", borderEndWidth: 5, borderEndStyle: "solid", borderEndColor: e.colors.text, borderTopWidth: 4, borderTopStyle: "solid", borderTopColor: "transparent" }, matchStatusText: { paddingStart: e.spaces.space12 } }));
        },
        373981: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { ...r(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, r) => {
            r.d(t, { Z: () => l });
            function o(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const n = (e, t, r) => {
                    const o = e(t),
                        n = e(r);
                    return !o && n ? -1 : o && !n ? 1 : 0;
                },
                s = (e, t, r) => a(e(r), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                i = (e, t) => {
                    if (e.length) return e.reduce((e, r) => (t(r, e) > 0 ? r : e));
                },
                c = ({ nextPos: e, prevPos: t }) => {
                    const r = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(r),
                        c = (e) => (e ? Math.abs(r.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: r }) => !o(r) && t.isRendered(r) && e.isRendered(r)),
                        m =
                            l.length > 0
                                ? i(l, (e, r) => {
                                      const o = t.getForItem(e.id),
                                          i = t.getForItem(r.id);
                                      return n(a, o, i) || s(c, o, i);
                                  })
                                : null;
                    return m && m.id;
                },
                l = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: r, distanceToViewportTop: o, id: n } = t;
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getTop() + o;
                            return e.getForItem(n).getTop() - t;
                        }
                        if ("number" == typeof r) {
                            const t = e.getForViewport().getBottom() + r;
                            return e.getForItem(n).getBottom() - t;
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
                            .filter(({ id: e }) => !o(e))
                            .map(({ id: e, rectangle: r }) => ({ id: e, distanceToViewportTop: r.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const r = c({ prevPos: e, nextPos: t });
                        if (r) {
                            const o = e.getForItem(r).getTop() - e.getForViewport().getTop();
                            return t.getForItem(r).getTop() - t.getForViewport().getTop() - o;
                        }
                        return 0;
                    },
                };
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(807896),
                n = r(202784),
                s = r(107267),
                a = r(403556),
                i = r(791632);
            const c = (e) => {
                    const t = (0, s.useHistory)();
                    return n.createElement(a.Z, (0, o.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                l = n.memo(c);
        },
        971372: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                n = r(325686),
                s = r(392237),
                a = r(310452),
                i = r(731708),
                c = r(354149);
            const l = s.default.create((e) => ({ description: { marginTop: e.spaces.space8 } })),
                m = ({ description: e, descriptionEntities: t, pivotText: r }) => {
                    const s = e ? e.trim() : void 0,
                        m = ((e) => (e?.length ? { description: { urls: e } } : void 0))(t),
                        p = s ? a.ZP.descriptionTextParts(s, m) : [];
                    return o.createElement(
                        n.Z,
                        { style: l.description },
                        p.length
                            ? o.createElement(
                                  i.ZP,
                                  null,
                                  p.map((e, t) => o.createElement(c.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        r ? o.createElement(i.ZP, { color: "gray700" }, r) : null,
                    );
                };
        },
        650554: (e, t, r) => {
            r.d(t, { Z: () => I });
            var o = r(202784),
                n = r(325686),
                s = r(457311),
                a = r(392237),
                i = r(332920),
                c = r.n(i),
                l = r(337069),
                m = r(942893),
                p = r(725516),
                d = r(208560),
                u = r(668214),
                g = r(256727);
            const b = (e, t) => (t.commerceItemId ? g.Z.select(e, t.commerceItemId) : void 0),
                h = (0, u.Z)().propsFromState(() => ({ commerceItem: b }))((e) => {
                    const { commerceItem: t, onClick: r } = e;
                    if ("CommerceProduct" === t?.__typename) {
                        const { __typename: e, ...n } = t;
                        return o.createElement(d.Z, { commerceProduct: n, onClick: r });
                    }
                    return null;
                });
            var f = r(26232);
            const w = (e, t) =>
                    t.module
                        .selectItems(e)
                        .map((t) => (t ? g.Z.select(e, t) : void 0))
                        .filter(Boolean),
                Z = (0, u.Z)().propsFromState((e) => ({ commerceItems: w })),
                E = c().e9f1fbcc,
                y = c().c9b302f8,
                S = () => o.createElement(s.Z, { header: E, message: y }),
                C = a.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 }, cell: { marginHorizontal: "1%", marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: "48%" } })),
                I = (0, p.Z)(
                    Z((e) => {
                        const { analytics: t, commerceItems: r, module: s } = e,
                            a = t.contextualScribeData;
                        o.useEffect(() => {
                            t.scribe({ action: "impression", data: a });
                        }, [t, a]);
                        const i = (e, o) => {
                                const n = m.Z.addCommerceDetailsToItems(a, r, e);
                                t.scribe({ element: "product", action: o, data: n });
                            },
                            c = (e) => () => {
                                i(e, "impression");
                            },
                            p = (e) => () => {
                                i(e, "click");
                            };
                        return o.createElement(n.Z, { style: C.root }, o.createElement(f.Z, { module: s, noItemsRenderer: S, numColumns: 2, renderer: (e) => o.createElement(l.Z, { onImpression: c(e), style: C.cell }, o.createElement(h, { commerceItemId: e, onClick: p(e) })) }));
                    }),
                );
        },
        449950: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(807896),
                n = r(202784),
                s = r(530525),
                a = r(659651),
                i = r(332920),
                c = r.n(i),
                l = r(632658);
            const m = "image",
                p = c().f93bb3ee;
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: i, shouldShowAltLabel: c, ...l } = this.props;
                            return n.createElement(n.Fragment, null, n.createElement(s.Z, (0, o.Z)({}, l, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: m })), c ? n.createElement(a.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return n.createElement(l.Z, { acceptLabel: p, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(807896),
                n = r(202784),
                s = r(325686),
                a = r(292627),
                i = r(537392),
                c = r(392237),
                l = r(365023),
                m = r(392027),
                p = r(774654),
                d = r(725516),
                u = r(443781);
            const g = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${p.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: r, onPress: b, scribeComponent: h, ...f } = e,
                        { loggedInUserId: w } = n.useContext(u.rC),
                        Z = (0, d.z)(),
                        E = n.useCallback(
                            (e) => {
                                Z.scribe({ component: h, action: "click" }), b && b(e);
                            },
                            [Z, b, h],
                        ),
                        y = p.ZM.useCollapsibleNavBars(),
                        S = [...p.Ah({ elementPosition: "bottom" }), y && g.fabStaysAboveSafeArea];
                    return w
                        ? n.createElement(
                              a.Z.FloatingAction,
                              null,
                              n.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > c.default.theme.breakpoints.large,
                                      i = e > c.default.theme.breakpoints.medium,
                                      p = e < c.default.theme.breakpoints.micro,
                                      d = [g.root, i && g.rootMedium, a && g.rootLarge],
                                      u = [g.fab, a && g.fabLarge, p && g.fabMicro, S];
                                  return n.createElement(
                                      s.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: d },
                                      n.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => n.createElement(s.Z, (0, o.Z)({ ref: e() }, i({ style: u })), n.createElement(m.Z, (0, o.Z)({}, f, { "aria-label": t, label: a ? r : void 0, onPress: E, style: p && g.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(136728);
            var o = r(202784),
                n = r(387524),
                s = r(635510);
            const a = "/compose/post";
            class i extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                o = { pathname: a, state: (t && t()) || {} };
                            r.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: i } = this.props;
                    return o.createElement(n.Z, { "aria-label": e, href: a, icon: t, label: r, onPress: this._handlePress, scribeComponent: i, testID: s.Z.tweet });
                }
            }
            const c = i;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                n = r(332920),
                s = r.n(n),
                a = r(186444),
                i = r(355883);
            const c = s().j0179e90,
                l = s().ee69d769({ verb: "" }),
                m = o.createElement(a.default, null),
                p = ({ getLocationState: e, history: t }) => o.createElement(i.Z, { "aria-label": c, getLocationState: e, history: t, icon: m, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-b308cbaf.0b3df28a.js.map
