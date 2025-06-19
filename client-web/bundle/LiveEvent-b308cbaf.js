"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-b308cbaf", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                a = r(99107),
                o = r(272175),
                s = r(111677);
            const i = r.n(s)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = i;
                    return e ? n.createElement(o.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: a.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        983389: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(272175);
            const o = ({ description: e }) => n.createElement(a.ql, null, n.createElement("meta", { content: e, name: "description" }));
        },
        349035: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(272175);
            const o = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(a.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        572067: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(272175);
            const o = (e) => {
                const { canonical: t, description: r = "", image: o, imageAlt: s, imageH: i, imageType: l, imageW: c, title: d, ttl: m, type: p } = e;
                return n.createElement(a.ql, null, p ? n.createElement("meta", { content: p, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, d ? n.createElement("meta", { content: d, property: "og:title" }) : null, n.createElement("meta", { content: r, property: "og:description" }), o ? n.createElement("meta", { content: o, property: "og:image" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:height" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:alt" }) : null, m ? n.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        898948: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                a = r(443781),
                o = r(163301);
            const s = (e) => {
                const { children: t, collectionName: r } = e,
                    s = n.useContext(a.rC);
                return (0, o.Kx)(s), t;
            };
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => p, nn: () => u, Vm: () => h });
            var n = r(202784),
                a = r(325686),
                o = r(366635),
                s = r(392237),
                i = r(453333),
                l = r(784732),
                c = r(689582),
                d = r(68290);
            const m = "placeholderIcon",
                p = ({ author: e, color: t = "text", size: r = "subtext2", style: a, withHoverCard: s = !0, withLink: i = !1, withScreenName: l = !1 }) => n.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [g.authorUserName, a], verifiedType: e.verified_type, withHoverCard: s, withLink: i, withScreenName: l }),
                u = ({ style: e }) => n.createElement(a.Z, { style: [g.lightningBadge, e] }, n.createElement(i.default, { style: g.lightningIcon })),
                h = ({ icon: e }) => n.createElement(a.Z, { style: g.placeholderIconContainer, testID: m }, "news" === e ? n.createElement(l.default, { style: g.placeholderIcon }) : "lists" === e ? n.createElement(c.default, { style: g.placeholderIcon }) : n.createElement(d.default, { style: g.placeholderIcon })),
                g = s.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        514029: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(325686),
                o = r(844685),
                s = r(731708),
                i = r(992942),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                m = r(152957);
            const p = "scorecard",
                u = d().eaaca5dc,
                h = ({ id: e = "", isLive: t, status: r }) => {
                    const n = "44" === e.split(":")[0],
                        a = r === m.I.UPCOMING || r === m.I.DELAYED;
                    return (n && t) || a;
                };
            class g extends n.Component {
                render() {
                    const { scoreData: e } = this.props,
                        t = ((e) => {
                            const { moments: t } = e;
                            if (t) {
                                const { id: e, participant_scores: r, progress_strings: n, status: a, winner_id: o } = t,
                                    s = a === m.I.LIVE;
                                return { isLive: s, progressStrings: h({ id: e, status: a, isLive: s }) ? n.join(" ") : n[0], participantScores: r, winnerId: o };
                            }
                        })(e);
                    return t ? this._renderScoreCardWithHeader(t) : null;
                }
                _renderScoreCardWithHeader(e) {
                    const { withHeader: t } = this.props;
                    return n.createElement(n.Fragment, null, t ? n.createElement(o.Z, { text: u }) : null, this._renderScoresAndMatchStatus(e));
                }
                _renderScoresAndMatchStatus(e) {
                    const { withContainer: t } = this.props,
                        { isLive: r, participantScores: o, progressStrings: i, winnerId: l } = e,
                        c = o.map((e) => this._renderTeamRow(e, l, r));
                    return n.createElement(a.Z, { style: [b.teamDisplay, t && b.container] }, n.createElement(a.Z, { style: b.teamRows }, c), n.createElement(s.ZP, { style: b.matchStatusText }, i));
                }
                _renderTeamRow(e, t, r) {
                    const {
                            participant: { id: o, media: l, name: c },
                            score: d,
                            secondaryScore: m,
                        } = e,
                        u = o === t,
                        h = r || u ? "bold" : "normal",
                        g = m ? `${d.split(" ")[0]} ${m}` : d;
                    return n.createElement(a.Z, { key: o, style: b.teamRow, testID: p }, n.createElement(i.Z, { source: l.url, style: b.teamLogo }), n.createElement(s.ZP, { align: "left", numberOfLines: 1, style: b.teamName }, c), n.createElement(s.ZP, { style: b.teamScore, weight: h }, g), n.createElement(a.Z, { style: [b.winnerContainer, u && b.winner] }));
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
            const a = (e, t, r) => {
                    const n = e(t),
                        a = e(r);
                    return !n && a ? -1 : n && !a ? 1 : 0;
                },
                o = (e, t, r) => s(e(r), e(t)),
                s = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                i = (e, t) => {
                    if (e.length) return e.reduce((e, r) => (t(r, e) > 0 ? r : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const r = t.getForViewport(),
                        s = (e) => e && e.doesIntersectWith(r),
                        l = (e) => (e ? Math.abs(r.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: r }) => !n(r) && t.isRendered(r) && e.isRendered(r)),
                        d =
                            c.length > 0
                                ? i(c, (e, r) => {
                                      const n = t.getForItem(e.id),
                                          i = t.getForItem(r.id);
                                      return a(s, n, i) || o(l, n, i);
                                  })
                                : null;
                    return d && d.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: r, distanceToViewportTop: n, id: a } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(a).getTop() - t;
                        }
                        if ("number" == typeof r) {
                            const t = e.getForViewport().getBottom() + r;
                            return e.getForItem(a).getBottom() - t;
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
                a = r(202784),
                o = r(107267),
                s = r(403556),
                i = r(791632);
            const l = (e) => {
                    const t = (0, o.useHistory)(),
                        { isCompact: r, ...l } = e;
                    return a.createElement(s.Z, (0, n.Z)({}, l, { isCompact: r || (0, i.HD)(t) }));
                },
                c = a.memo(l);
        },
        971372: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                a = r(325686),
                o = r(392237),
                s = r(310452),
                i = r(731708),
                l = r(354149);
            const c = o.default.create((e) => ({ description: { marginTop: e.spaces.space8 } })),
                d = ({ description: e, descriptionEntities: t, pivotText: r }) => {
                    const o = e ? e.trim() : void 0,
                        d = ((e) => (e?.length ? { description: { urls: e } } : void 0))(t),
                        m = o ? s.ZP.descriptionTextParts(o, d) : [];
                    return n.createElement(
                        a.Z,
                        { style: c.description },
                        m.length
                            ? n.createElement(
                                  i.ZP,
                                  null,
                                  m.map((e, t) => n.createElement(l.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        r ? n.createElement(i.ZP, { color: "gray700" }, r) : null,
                    );
                };
        },
        449950: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807896),
                a = r(202784),
                o = r(530525),
                s = r(659651),
                i = r(111677),
                l = r.n(i),
                c = r(632658);
            const d = "image",
                m = l().f93bb3ee;
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: i, shouldShowAltLabel: l, ...c } = this.props;
                            return a.createElement(a.Fragment, null, a.createElement(o.Z, (0, n.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: d })), l ? a.createElement(s.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return a.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        293988: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                a = r(154003),
                o = r(111677),
                s = r.n(o),
                i = r(74514),
                l = r(405303),
                c = r(684511),
                d = r(860174),
                m = r(71620),
                p = r(668214),
                u = r(257166),
                h = r(919022);
            const g = (e, t) => !(!t.allowPromptForPush || !u.selectShouldPromptBrowserPush(e)),
                b = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: h.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                _ = s().bdba3e1a,
                y = s().c4da7d28,
                f = s().j87c21f4,
                E = s().iebc30ca,
                C = s().dc740eb2;
            class I extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(a.ZP, { "aria-label": y, hoverLabel: { label: E }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(a.ZP, { "aria-label": _, hoverLabel: { label: f }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: C }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: r, userId: n } = this.props;
                    return r(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = b(I);
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                a = r(202784),
                o = r(325686),
                s = r(292627),
                i = r(537392),
                l = r(392237),
                c = r(365023),
                d = r(392027),
                m = r(774654),
                p = r(725516),
                u = r(443781);
            const h = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${m.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                g = (e) => {
                    const { "aria-label": t, label: r, onPress: g, scribeComponent: b, ..._ } = e,
                        { loggedInUserId: y } = a.useContext(u.rC),
                        f = (0, p.z)(),
                        E = a.useCallback(
                            (e) => {
                                f.scribe({ component: b, action: "click" }), g && g(e);
                            },
                            [f, g, b],
                        ),
                        C = m.ZM.useCollapsibleNavBars(),
                        I = [...m.Ah({ elementPosition: "bottom" }), C && h.fabStaysAboveSafeArea];
                    return y
                        ? a.createElement(
                              s.Z.FloatingAction,
                              null,
                              a.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > l.default.theme.breakpoints.large,
                                      i = e > l.default.theme.breakpoints.medium,
                                      m = e < l.default.theme.breakpoints.micro,
                                      p = [h.root, i && h.rootMedium, s && h.rootLarge],
                                      u = [h.fab, s && h.fabLarge, m && h.fabMicro, I];
                                  return a.createElement(
                                      o.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      a.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, i) => a.createElement(o.Z, (0, n.Z)({ ref: e() }, i({ style: u })), a.createElement(d.Z, (0, n.Z)({}, _, { "aria-label": t, label: s ? r : void 0, onPress: E, style: m && h.buttonMicro })))),
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
                a = r(387524),
                o = r(635510);
            const s = "/compose/post";
            class i extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                n = { pathname: s, state: (t && t()) || {} };
                            r.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: i } = this.props;
                    return n.createElement(a.Z, { "aria-label": e, href: s, icon: t, label: r, onPress: this._handlePress, scribeComponent: i, testID: o.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                a = r(111677),
                o = r.n(a),
                s = r(186444),
                i = r(355883);
            const l = o().j0179e90,
                c = o().ee69d769({ verb: "" }),
                d = n.createElement(s.default, null),
                m = ({ getLocationState: e, history: t }) => n.createElement(i.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        193394: (e, t, r) => {
            r.d(t, { Z: () => ar });
            r(136728);
            var n = r(202784),
                a = r(325686),
                o = r(457311),
                s = r(420412),
                i = r(731708),
                l = r(868634),
                c = r(992942),
                d = r(108362),
                m = r(392237),
                p = r(111677),
                u = r.n(p),
                h = r(912021),
                g = r(401388),
                b = r(516951),
                _ = r(791632),
                y = r(789831),
                f = r(290402),
                E = r(538884),
                C = r(373981),
                I = r(507651),
                v = r(810430),
                S = r(293115),
                w = r(899455),
                Z = r(519896),
                x = r(730717),
                k = r(312771),
                P = r(337069),
                T = r(942893),
                D = r(725516),
                A = r(208560),
                F = r(668214),
                R = r(256727);
            const O = (e, t) => (t.commerceItemId ? R.Z.select(e, t.commerceItemId) : void 0),
                L = (0, F.Z)().propsFromState(() => ({ commerceItem: O }))((e) => {
                    const { commerceItem: t, onClick: r } = e;
                    if ("CommerceProduct" === t?.__typename) {
                        const { __typename: e, ...a } = t;
                        return n.createElement(A.Z, { commerceProduct: a, onClick: r });
                    }
                    return null;
                });
            var M = r(26232);
            const B = (e, t) =>
                    t.module
                        .selectItems(e)
                        .map((t) => (t ? R.Z.select(e, t) : void 0))
                        .filter(Boolean),
                V = (0, F.Z)().propsFromState((e) => ({ commerceItems: B })),
                N = u().e9f1fbcc,
                H = u().c9b302f8,
                U = () => n.createElement(o.Z, { header: N, message: H }),
                z = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 }, cell: { marginHorizontal: "1%", marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: "48%" } })),
                W = (0, D.Z)(
                    V((e) => {
                        const { analytics: t, commerceItems: r, module: o } = e,
                            s = t.contextualScribeData;
                        n.useEffect(() => {
                            t.scribe({ action: "impression", data: s });
                        }, [t, s]);
                        const i = (e, n) => {
                                const a = T.Z.addCommerceDetailsToItems(s, r, e);
                                t.scribe({ element: "product", action: n, data: a });
                            },
                            l = (e) => () => {
                                i(e, "impression");
                            },
                            c = (e) => () => {
                                i(e, "click");
                            };
                        return n.createElement(a.Z, { style: z.root }, n.createElement(M.Z, { module: o, noItemsRenderer: U, numColumns: 2, renderer: (e) => n.createElement(P.Z, { onImpression: l(e), style: z.cell }, n.createElement(L, { commerceItemId: e, onClick: c(e) })) }));
                    }),
                );
            var j = r(443781),
                G = r(32677),
                q = r(144256),
                $ = r(810641),
                Y = r(586534),
                X = r(337637),
                K = r(111685),
                J = r(154003);
            const Q = u().j1d352d8,
                ee = u().d18909d4,
                te = { element: "reminder_button" },
                re = Object.freeze({ impression: "impression", click: "click" });
            const ne = function (e) {
                const {
                        eventId: t,
                        onPress: r,
                        onRemindButtonScribe: a,
                        remindMeSubscription: { notification_id: o, subscribed: s },
                    } = e,
                    i = n.useRef({});
                (i.current.onRemindButtonScribe = a),
                    n.useEffect(() => {
                        i.current?.onRemindButtonScribe({ action: re.impression, ...te });
                    }, []);
                const l = s ? "primaryOutlined" : "primaryFilled",
                    c = s ? Q : ee;
                return n.createElement(
                    J.ZP,
                    {
                        onPress: () => {
                            r(t, { remind_me: !s, notification_id: o }), a({ action: re.click, ...te });
                        },
                        size: "medium",
                        type: l,
                    },
                    c,
                );
            };
            var ae = r(514029),
                oe = r(807896),
                se = r(874090),
                ie = r(461756),
                le = r(803224),
                ce = r(284702),
                de = r(366635),
                me = r(123751),
                pe = r(162246),
                ue = r(32788),
                he = r(90890),
                ge = r(390686),
                be = r(521514),
                _e = r(408686),
                ye = r(961817),
                fe = r(992720),
                Ee = r(511582),
                Ce = r(310453),
                Ie = r(117093),
                ve = r(530525),
                Se = r(439592),
                we = r(522171),
                Ze = r(309854),
                xe = r(933794),
                ke = r(632658);
            class Pe extends n.Component {
                render() {
                    const { backgroundColor: e, children: t, remindMeButton: r } = this.props,
                        o = this._renderMediaLabel(),
                        s = o || r ? n.createElement(a.Z, { style: [Te.verticalAlignment, ((i = e), { backgroundImage: `linear-gradient(transparent 0%, ${i} 100%)` })] }, n.createElement(a.Z, { style: Te.wrapper }, r, o)) : null;
                    var i;
                    return n.createElement(a.Z, null, s, t);
                }
                _renderMediaLabel() {
                    const { mediaLabel: e } = this.props;
                    return e ? n.createElement(a.Z, { style: Te.mediaLabelWrapper }, n.createElement(i.ZP, { align: "left", color: "white", size: "body", style: Te.mediaLabel }, e)) : null;
                }
            }
            Pe.defaultProps = { backgroundColor: m.default.theme.colors.translucentBlack77 };
            const Te = m.default.create((e) => ({ verticalAlignment: { flexDirection: "column", alignItems: "flex-end", zIndex: 1, height: "25%", width: "100%", bottom: "0", start: "0", position: "absolute" }, wrapper: { flexDirection: "row-reverse", flexWrap: "nowrap", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "0", paddingBottom: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mediaLabelWrapper: { justifyContent: "center", flexGrow: 1, flexShrink: 1 }, mediaLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } })),
                De = Pe,
                Ae = u().f93bb3ee;
            class Fe extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldRenderImage: !0 }),
                        (this._getRenderDataSafeImage =
                            ({ mediaItem: e, originalImage: t }) =>
                            ({ resourceSelectionHandler: r, useMinimumData: a }) => {
                                const {
                                        fallbackAccessibilityLabel: o,
                                        slate: { label: s, periscopeVariants: i },
                                    } = this.props,
                                    { expanded_url: l, ext_alt_text: c, original_info: d } = e,
                                    p = c || o,
                                    u = n.createElement(De, { mediaLabel: a ? void 0 : s }, n.createElement(ve.Z, { "aria-label": p, aspectMode: Se.Z.exact(m.default.theme.aspectRatios.landscape), cropCandidates: d && d.focus_rects, customVariants: i, image: t, onError: this._handleImageError, onVariantSelection: r, previewMode: a }));
                                return l ? n.createElement(xe.Z, { handlers: { [we.Z.shortcuts.openMediaModal]: this._handleOpenPhotoModal } }, u) : u;
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
                        t = e && Ze.Z.getOriginalImage(e);
                    return e && t ? n.createElement(ke.Z, { acceptLabel: Ae, renderContent: this._getRenderDataSafeImage({ mediaItem: e, originalImage: t }), resourceId: t.url }) : null;
                }
                _getMediaItem() {
                    const { coverMedia: e, slate: t } = this.props;
                    return (0, v.Qv)(t, e) || void 0;
                }
            }
            const Re = Fe;
            var Oe = r(174326),
                Le = r(530732),
                Me = r(682474),
                Be = r(891198),
                Ve = r(819329),
                Ne = r(58881),
                He = r(511323),
                Ue = r(449950),
                ze = r(659773);
            const We = (0, F.Z)().propsFromState(() => ({ dataSaverMode: ze.IX })),
                je = u().i3f7ff00;
            class Ge extends n.Component {
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
                            a = (0, v.r5)(r),
                            o = (0, v.r5)(n),
                            s = "latest.jpg" === o;
                        return a !== o || (!e.dataSaverMode && s) ? { ...t, currentSlate: e.slate } : null;
                    }
                    return { ...t, currentSlate: e.slate };
                }
                componentDidUpdate(e, t) {
                    const { currentSlate: r, hasImageError: n } = this.state,
                        { currentSlate: a } = t;
                    n && r && a && r.image && a.image && r.image.url !== a.image.url && this.setState({ hasImageError: !1 });
                }
                render() {
                    const { currentSlate: e, hasImageError: t } = this.state,
                        { cropCandidates: r, image: o, periscopeVariants: s } = e || {};
                    return o && !t ? n.createElement(Ue.Z, { "aria-label": je, aspectMode: Se.Z.exact(m.default.theme.aspectRatios.landscape), backgroundColor: m.default.theme.colors.gray50, cropCandidates: r, customVariants: s, hideAcceptOverlay: !0, image: o, onError: this._handleError }) : n.createElement(a.Z, { style: qe.fallback });
                }
            }
            const qe = m.default.create((e) => ({ fallback: { backgroundColor: e.colors.gray50 } })),
                $e = We(Ge);
            var Ye = r(864442),
                Xe = r(62338),
                Ke = r(581264);
            const Je = u().f2382014,
                Qe = u().g66c8348,
                et = ["views", "viewers"];
            class tt extends n.Component {
                render() {
                    const { onClick: e } = this.props,
                        t = this._renderImage(),
                        r = this._renderAttribution(),
                        a = this._renderOverlay(t);
                    return n.createElement(Le.Z, { focusable: !0, interactiveStyles: nt, onClick: e, role: "button", style: rt.carouselItem }, a, r);
                }
                _renderAttribution() {
                    const {
                        mediaItem: { carouselItemInfo: e },
                    } = this.props;
                    if (e) {
                        const { is_blue_verified: t, name: r, screenName: a, verified: o } = e;
                        return n.createElement(de.Z, { isBlueVerified: t, isVerified: o, name: r, screenName: a, style: rt.userAttribution, withStackedLayout: !0 });
                    }
                }
                _renderOverlay(e) {
                    const { isSelected: t } = this.props;
                    return n.createElement(Me.Z, { ratio: m.default.theme.aspectRatios.landscape, style: rt.image }, this._renderSocialProof(e), t && n.createElement(a.Z, { style: rt.selectedOverlay }));
                }
                _renderSocialProof(e) {
                    const {
                            mediaItem: { carouselItemInfo: t },
                        } = this.props,
                        { audiospace: r, playbackDuration: o, socialProof: s, type: c } = t || {},
                        d = s && et.includes(s.type) ? n.createElement(l.ZP, null, n.createElement(a.Z, { style: rt.horizontalContainer }, n.createElement(He.default, null), n.createElement(i.ZP, null, Be.ZP.getTruncatedCount(s.count, !0)))) : null,
                        m = (({ audiospace: e, playbackDuration: t, type: r }) => {
                            switch (r) {
                                case v.Tr.LIVE_BROADCAST:
                                    return n.createElement(l.ZP, { type: "live" }, Je);
                                case v.Tr.REPLAY_BROADCAST:
                                    return n.createElement(l.ZP, { bold: !0 }, Qe);
                                case v.Tr.VOD:
                                    return n.createElement(l.ZP, null, (0, Xe.y)(t) || "");
                                case v.Tr.GIF:
                                    return n.createElement(l.ZP, { bold: !0 }, "GIF");
                                case v.Tr.AUDIOSPACE: {
                                    const t = (0, Ke.F)(e);
                                    return n.createElement(l.ZP, t);
                                }
                                default:
                                    return null;
                            }
                        })({ audiospace: r, playbackDuration: o, type: c });
                    return n.createElement(n.Fragment, null, e, n.createElement(Ve.Z, { align: "left" }, m, d));
                }
                _renderImage() {
                    const {
                        mediaItem: {
                            carouselItemInfo: { audiospace: e },
                            slate: t,
                        },
                    } = this.props;
                    return e && e.hostPalette ? n.createElement(Ye.Z, { avatar_url: e.host.avatar_url, palette: e.hostPalette }) : t ? n.createElement($e, { slate: t }) : null;
                }
            }
            tt.contextType = j.rC;
            const rt = m.default.create((e) => ({ selectedOverlay: { ...m.default.absoluteFillObject, borderColor: e.colors.primary, borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.large, borderStyle: "solid" }, horizontalContainer: { flexDirection: "row" }, image: { borderRadius: e.borderRadii.small }, carouselItem: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, padding: e.spaces.space2, width: 150 }, userAttribution: { paddingTop: e.spaces.space4 } })),
                nt = Ne.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, customFocusBackgroundColor: m.default.theme.colors.transparent, insetFocusRing: !0 });
            const at = class {
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
                ot = Object.freeze({ CarouselImpression: "carousel_impression", TileClick: "tile_click", TileImpression: "tile_impression", TileAutoClick: "tile_auto_click" }),
                st = { action: ot.CarouselImpression },
                it = { action: ot.TileAutoClick },
                lt = { action: ot.TileImpression },
                ct = { action: ot.TileClick };
            class dt extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getHandleOnClickForItem = (e, t) => () => {
                            const { onCarouselScribe: r } = this.props;
                            t(e, () => r(ct));
                        }),
                        (this._handleCarouselChildImpression = (e) => {
                            const { onCarouselScribe: t } = this.props;
                            t(lt, { tilePosition: e });
                        }),
                        (this._handleVisibleRangeChange = (e) => {
                            this._impressionTracker.handleVisibilityChange(e);
                        });
                }
                componentDidMount() {
                    const { onCarouselScribe: e } = this.props;
                    (this._impressionTracker = new at(this._handleCarouselChildImpression)), this._shouldDisplayCarousel() && e(st);
                }
                componentWillUnmount() {
                    this._impressionTracker.destroy();
                }
                componentDidUpdate(e) {
                    const { carousel: t } = e,
                        { carousel: r, onCarouselScribe: n } = this.props;
                    this._shouldDisplayCarousel() && r.length !== t.length && n(st);
                }
                render() {
                    return this._shouldDisplayCarousel() ? n.createElement(Oe.Z, { onVisibleRangeChange: this._handleVisibleRangeChange, style: mt.carousel, visibleItemIndex: this.props.selectedItemIndex }, this._renderCarouselItems()) : null;
                }
                _renderCarouselItems() {
                    const { carousel: e, selectedItemIndex: t, setSelectedCarouselIndex: r } = this.props;
                    return e.map((e, a) => n.createElement(tt, { isSelected: a === t, key: a, mediaItem: e, onClick: this._getHandleOnClickForItem(a, r) }));
                }
                _shouldDisplayCarousel() {
                    const { carousel: e } = this.props;
                    return e.length > 1;
                }
            }
            const mt = m.default.create((e) => ({ carousel: { paddingTop: e.spaces.space16 } })),
                pt = dt,
                ut = "events-player";
            var ht = r(550293);
            const gt = (0, F.Z)()
                    .propsFromState(() => ({ dmDrawerVisibility: ht.kX, effectiveAutoplay: ze.AP }))
                    .withAnalytics({ element: "image" }),
                bt = u().b0b38774,
                _t = { autoplayPrioritizationPolicy: _e.n8, minimumVisibilityForAutoplay: ge.tB },
                yt = new he.yt(_t),
                ft = { hideFullScreenButton: !0 };
            class Et extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._multiVideoAutoAdvanceEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_enabled")),
                        (this._multiVideoAutoAdvanceDockEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_dock_enabled")),
                        (this._multiVideoAutoAdvanceFullscreenEnabled = this.context.featureSwitches.isTrue("live_event_multi_video_auto_advance_fullscreen_enabled")),
                        (this._dockableAutoplayPolicyEnabled = this.context.featureSwitches.isTrue("responsive_web_dockable_autoplay_policy_enabled")),
                        (this.state = { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
                        (this._getUiStack = (0, h.Z)(
                            (e, t, r, o, s, i) =>
                                ({ containerRef: l, guestsState: c, playerApi: d, playerState: m }) =>
                                    n.createElement(se.Z, {
                                        containerRef: l,
                                        guestsState: c,
                                        isDocked: t,
                                        nextItemInfo: o,
                                        onUpNextComplete: this._getHandleUpNextOverlayComplete(s),
                                        onUpNextReplay: this._handleReplayPress,
                                        playerApi: d,
                                        playerDisplayOptions: e,
                                        playerState: m,
                                        renderUpNextImage: () => {
                                            const e = i?.slate;
                                            return n.createElement(n.Fragment, null, e ? n.createElement($e, { slate: e }) : null, n.createElement(a.Z, { style: Ct.backgroundFading }));
                                        },
                                        shouldRenderUpNext: r,
                                    }),
                        )),
                        (this._renderHorizonPlayer = ({ closeRequested: e, dockRequested: t, key: r, playerProps: o }, s) => {
                            if (!o) return null;
                            const { disableFullscreenVideo: i } = this.props,
                                l = this._shouldRenderUpNext(s, t),
                                c = i ? ft : void 0,
                                { carousel: d, selectedItemIndex: m } = this.props,
                                p = this._getNextEligibleCarouselItemIndex(m, d),
                                u = p > -1 && d ? d[p] : void 0,
                                h = u?.carouselItemInfo,
                                g = h ? { playbackDurationMs: h.playbackDuration, name: h.name, screenName: h.screenName, type: h.type, verified: !!h.verified } : void 0,
                                b = this._getUiStack(o.displayOptions, t, !!l, g, p, u);
                            return o ? n.createElement(a.Z, { style: t ? Ct.dockedContainerBackground : void 0 }, n.createElement(Ce.Z, (0, oe.Z)({}, o, { disablePreroll: !0, displayOptions: c, key: r, loopingThresholdMs: 7e3, onProgressChange: this._handleProgressChange, preserveMuteState: !0, uiStack: b }))) : null;
                        }),
                        (this._handleProgressChange = (e, t = !1) => {
                            const { showUpNextPlayerOverlay: r } = this.state;
                            t !== r && this.setState({ showUpNextPlayerOverlay: t });
                        }),
                        (this._getHandleUpNextOverlayComplete = (e) => (t) => {
                            if (e) {
                                const { onChildScribeAction: r, setSelectedCarouselIndex: n } = this.props,
                                    a = { tilePosition: e };
                                n(e), r(t ? ct : it, a);
                            }
                            this.setState({ showUpNextPlayerOverlay: !1 });
                        }),
                        (this._setPlayer = (e) => {
                            this._playerInstance = e;
                        }),
                        (this._shouldRenderUpNext = (e = !0, t = !1) => {
                            const { carousel: r, effectiveAutoplay: n, isPlayerFullscreen: a, selectedItemIndex: o } = this.props,
                                s = this._getNextEligibleCarouselItemIndex(o, r),
                                i = (0, fe.Z)(n ?? (0, ye.i)());
                            return this._multiVideoAutoAdvanceEnabled && i && !ie.Z.reducedMotionEnabled && (!t || this._multiVideoAutoAdvanceDockEnabled) && (!a || this._multiVideoAutoAdvanceFullscreenEnabled) && e && this.state.showUpNextPlayerOverlay && s > -1;
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
                    const { carouselItemInfo: e, isDockingEnabled: t, mediaType: r, onChildScribeAction: o, title: s } = this.props;
                    let i;
                    switch (r) {
                        case v.Tr.AUDIOSPACE:
                            i = this._renderAudioSpace();
                            break;
                        case v.Tr.REPLAY_BROADCAST:
                        case v.Tr.LIVE_BROADCAST:
                        case v.Tr.VOD:
                            i = this._renderVideo();
                            break;
                        case v.Tr.GIF:
                            i = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 });
                            break;
                        case v.Tr.SLATE:
                        default:
                            i = this._renderImage();
                    }
                    const l = t ? this._renderUserSceenName(e) : null;
                    return n.createElement(pe.Z, { dockBottomOffset: this._getOffsetForDrawer(), isDisabled: !t, onCloseDockComplete: this._handleCloseDockComplete, onDockingScribeAction: o, subtitle: l, title: s, visibleThreshold: ge.tB }, n.createElement(a.Z, { style: Ct.container, testID: ut }, i));
                }
                _getOffsetForDrawer() {
                    const { spaces: e } = m.default.theme,
                        { dmDrawerVisibility: t } = this.props,
                        r = parseInt(`${e.space20}`, 10);
                    return t === Ee.S.COLLAPSED ? be.Z.dmDrawerHeight.collapsed + r : t === Ee.S.EXPANDED ? be.Z.dmDrawerHeight.expanded + r : r;
                }
                _renderImage() {
                    const { history: e, mediaDetails: t, slate: r } = this.props;
                    return r ? n.createElement(Re, { coverMedia: t.coverMedia, fallbackAccessibilityLabel: bt, history: e, slate: r }) : null;
                }
                _renderAudioSpace() {
                    const { audiospace: e } = this.props.carouselItemInfo;
                    return e ? n.createElement(Ie.MS, { audioSpaceId: e.id }) : null;
                }
                _renderVideo({ isGif: e = !1, withUpNextOverlay: t = !0 } = {}) {
                    const {
                            eventId: r,
                            mediaDetails: { broadcastId: a, coverMedia: o, coverTweet: s = {}, mediaId: i, promotedContent: l },
                            onFullscreenChange: c,
                            slate: d,
                        } = this.props,
                        { id_str: p } = o || {},
                        { id_str: u } = s,
                        { image: h, periscopeVariants: g } = d || {},
                        b = { "aria-label": bt, aspectRatio: m.default.theme.aspectRatios.landscape, backgroundColor: m.default.theme.colors.gray0, maxLoopCount: e ? void 0 : 3, onFullscreenChange: c, onMuteChange: this._handleMuteChange, promotedContent: l, playbackCoordination: this._dockableAutoplayPolicyEnabled ? he.Tc : yt, playbackPriority: le.W.DOCKABLE, poster: h, customVariants: g, shouldPlayUnmuted: !this.state.isPlayerMuted, setPlayer: this._setPlayer };
                    let _, y;
                    if (a && i) (_ = a), (y = { ...b, videoType: "video", includeBroadcastEventAssociation: !0, source: { contentId: i, eventId: r, variants: [], videoId: me.Z.forBroadcast(a) } });
                    else if (p && u) {
                        const e = me.Z.forTweet(u),
                            t = ce.Z.getVideoFromCoverMedia(o),
                            n = t && ce.Z.extractVideoProps(e, t, r);
                        (_ = p), (y = n ? { ...n, ...b } : void 0);
                    }
                    return n.createElement(ue.Z.Consumer, null, ({ closeRequested: e, dockRequested: r }) => this._renderHorizonPlayer({ closeRequested: e, dockRequested: r, key: _, playerProps: y }, t));
                }
                _renderUserSceenName(e) {
                    const { accountType: t, name: r, screenName: a, userId: o } = e || {};
                    let s = null;
                    return o && (t === v.tO.TWITTER && a ? (s = n.createElement(de.Z, { screenName: a, weight: "normal", withLink: !0 })) : t === v.tO.PERISCOPE && r && (s = n.createElement(i.ZP, { color: "gray700", link: `https://pscp.tv/u/${o}` }, r))), s;
                }
            }
            Et.contextType = j.rC;
            const Ct = m.default.create((e) => ({ backgroundFading: { ...m.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack30 }, container: { zIndex: 10 }, dockedContainerBackground: { backgroundColor: e.colors.cellBackground } })),
                It = gt(Et);
            var vt = r(952428),
                St = r(157396),
                wt = r(187669),
                Zt = r(427266),
                xt = r(725405);
            const kt = r.p + "betmgm-logo-dark.1f69d32a.png",
                Pt = r.p + "betmgm-logo-light.2095aafa.png";
            r(571372);
            function Tt({ children: e }) {
                const { setWidths: t, widths: r } = n.useContext(Dt),
                    o = n.useRef(),
                    s = n.useRef(r);
                s.current = r;
                const [i, l] = n.useState(null);
                n.useLayoutEffect(() => {
                    l(s.current.length);
                    const e = s.current.length,
                        r = o.current?.getBoundingClientRect().width ?? 0;
                    return (
                        t((e) => e.concat(r)),
                        () => {
                            t((t) => t.map((t, r) => (r === e ? 0 : t)));
                        }
                    );
                }, [t]);
                const c = n.useCallback(
                        (e) => {
                            if (null !== i) {
                                const r = e.nativeEvent.layout.width;
                                t((e) => e.map((e, t) => (t === i ? r : e)));
                            }
                        },
                        [i, t],
                    ),
                    d = Math.max(0, ...r),
                    m = n.useMemo(() => [{ minWidth: d }, Ft.container], [d]);
                return n.createElement(a.Z, { style: m }, n.createElement(a.Z, { onLayout: c, ref: o }, e));
            }
            const Dt = n.createContext({
                widths: [],
                setWidths: () => {
                    throw new Error("EquiContext not initialized");
                },
            });
            function At({ children: e }) {
                const [t, r] = n.useState([]);
                return n.createElement(Dt.Provider, { value: { widths: t, setWidths: r } }, e);
            }
            const Ft = m.default.create((e) => ({ container: { alignItems: "center", justifyContent: "center" } })),
                Rt = u().ca25ebae,
                Ot = u().e749753a,
                Lt = u().c602f5b8,
                Mt = u().ea885dec,
                Bt = u().cde48000,
                Vt = { spread: Ot, total: Lt, money_line: Mt };
            function Nt({ bettingOdds: { participant_odds: e, url: t } }) {
                const r = ["spread", "total", "money_line"].filter((t) => e.every((e) => e[t])),
                    o = n.useMemo(() => [zt.table, { gridTemplateColumns: `minmax(max-content, 1fr) repeat(${r.length}, max-content)` }], [r.length]),
                    s = e.map(({ betting_participant: e, ...t }) => ({ participant: e, tableData: r.map((e) => (0, Zt.XY)(t[e])) })),
                    { scribeClickHandler: l } = (function () {
                        const e = (0, xt.Z)();
                        (0, wt.q)(() => {
                            e.scribe({ component: Ut, action: "impression" });
                        });
                        const t = n.useCallback(() => {
                            e.scribe({ component: Ut, action: "click" });
                        }, [e]);
                        return { scribeClickHandler: t };
                    })();
                return n.createElement(
                    vt.Z,
                    { link: t, onClick: l, style: zt.container },
                    n.createElement(
                        a.Z,
                        { style: o },
                        n.createElement(a.Z, { style: zt.flexAlign }, n.createElement(i.ZP, { weight: "bold" }, Rt), n.createElement(Ht, null)),
                        r.map((e, t) => {
                            const r = Vt[e];
                            return r ? n.createElement(a.Z, { key: r }, n.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1" }, r)) : n.createElement(a.Z, { key: t });
                        }),
                        s.map(({ participant: { id: e, media_url: t, name: r }, tableData: o }) =>
                            n.createElement(
                                n.Fragment,
                                { key: e },
                                n.createElement(a.Z, { style: zt.nameColumn }, t && n.createElement(c.Z, { source: t, style: zt.teamLogo }), r ? n.createElement(i.ZP, { color: "gray900", numberOfLines: 1, style: zt.teamName }, r) : null),
                                n.createElement(
                                    At,
                                    null,
                                    o.map(({ subtitle: e, title: t }, r) => n.createElement(a.Z, { key: r, style: zt.tableCell }, n.createElement(Tt, null, e ? n.createElement(i.ZP, { align: "center", color: "gray900", numberOfLines: 1, size: "subtext1" }, t) : n.createElement(i.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, t), e && n.createElement(i.ZP, { align: "center", numberOfLines: 1, weight: "bold" }, e)))),
                                ),
                            ),
                        ),
                    ),
                    n.createElement(a.Z, { style: zt.footer }, n.createElement(i.ZP, { color: "gray900", size: "subtext3" }, Bt)),
                );
            }
            function Ht() {
                return n.createElement(c.Z, { "aria-label": "BetMGM", source: m.default.theme.paletteName === St.default.ThemePaletteNames.light ? Pt : kt, style: zt.inlineImage });
            }
            const Ut = "bet_mgm_odds";
            const zt = m.default.create((e) => ({ container: { marginTop: e.spaces.space16 }, table: { display: "grid", gridColumnGap: e.spaces.space2, gridRowGap: e.spaces.space2, marginTop: e.spaces.space4, overflowX: "auto", overflowY: "hidden" }, tableRow: { marginBottom: e.spaces.space4, marginTop: e.spaces.space4 }, nameColumn: { flexDirection: "row", alignItems: "center" }, tableCell: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.small, alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space4 }, footer: { marginTop: e.spaces.space8, alignItems: "end" }, inlineImage: { height: e.lineHeights.body, aspectRatio: "133 / 36", marginStart: e.spaces.space2 }, flexAlign: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1 } }));
            u().f2382014, u().g66c8348;
            class Wt extends n.Component {
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
                    return n.createElement(n.Fragment, null, e && this._renderHeaderMedia(e), this._renderDescription(e), n.createElement(s.Z, null));
                }
                _renderDescription(e) {
                    const {
                            bettingOdds: t,
                            isTOO: r,
                            liveEventDetails: { author: o, category: s, description: i, descriptionEntities: l, timeString: c, title: d },
                        } = this.props,
                        m = e?.mediaDetails?.coverTweet,
                        p = e?.mediaDetails?.coverMedia,
                        u = e?.slate?.imageAttribution;
                    return n.createElement(a.Z, { style: jt.contentContainer }, d ? n.createElement(K.Z, { author: o, coverTweet: m, description: i, descriptionEntities: l, imageAttribution: u, isTOO: r, mediaType: p?.type, preTitle: r || !o ? s : "", remindMeButton: this._renderRemindMeButton(), time: c, title: d, withHashflags: !0 }) : null, this._renderScoreCard(), t ? n.createElement(Nt, { bettingOdds: t }) : null, this._enableMultiVideo && e ? this._renderCarousel(e) : null);
                }
                _renderHeaderMedia(e) {
                    const {
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: a,
                            isPlayerFullscreen: o,
                            liveEventDetails: { eventId: s, title: i },
                            onChildScribeAction: l,
                            onFullscreenChange: c,
                        } = this.props,
                        { carouselItemInfo: d, mediaDetails: m, slate: p } = e,
                        { type: u } = d,
                        h = this._getDockingEnabled(u);
                    return n.createElement(It, { carousel: t, carouselItemInfo: d, disableFullscreenVideo: r, eventId: s, history: a, isDockingEnabled: h, isPlayerFullscreen: o, mediaDetails: m, mediaType: u, onChildScribeAction: l, onFullscreenChange: c, selectedItemIndex: this._getSelectedItemIndex(t || [], e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex, slate: p, title: i });
                }
                _renderRemindMeButton() {
                    const {
                            liveEventDetails: { eventId: e, remindMeSubscription: t },
                            onChildScribeAction: r,
                            remindMeButtonSubscribe: a,
                            remindMeButtonUnsubscribe: o,
                        } = this.props,
                        s = !!this.context.viewerUserId,
                        { toggle_visible: i } = t || {};
                    return s && i && t && a && o ? n.createElement(ne, { eventId: e, onPress: t.subscribed ? o : a, onRemindButtonScribe: r, remindMeSubscription: t }) : null;
                }
                _renderScoreCard() {
                    const { scoreData: e, withScoreCard: t } = this.props;
                    return e && t ? n.createElement(ae.Z, { scoreData: e }) : null;
                }
                _renderCarousel(e) {
                    const { carousel: t, onChildScribeAction: r } = this.props;
                    return t ? n.createElement(pt, { carousel: t, onCarouselScribe: r, selectedItemIndex: this._getSelectedItemIndex(t, e.id), setSelectedCarouselIndex: this._setSelectedCarouselIndex }) : null;
                }
                _getDockingEnabled(e) {
                    const { isWide: t } = this.props,
                        { viewerUserId: r } = this.context,
                        n = [v.Tr.LIVE_BROADCAST, v.Tr.REPLAY_BROADCAST, v.Tr.VOD];
                    return !!r && this._enableDocking && t && n.includes(e);
                }
            }
            Wt.contextType = j.rC;
            const jt = m.default.create((e) => ({ contentContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
            var Gt = r(769471),
                qt = r(962741),
                $t = r(335632);
            const Yt = u().abdcd68a,
                Xt = u().cfb57adb,
                Kt = u().b1037710,
                Jt = u().bb980db0,
                Qt = u().e9f1fbcc,
                er = u().a3b80be6,
                tr = u().ffd929c1,
                rr = { section: "shop_tab", component: "product_grid" },
                nr = () => n.createElement(o.Z, { header: Qt, message: er });
            class ar extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { selectedCarouselItemId: void 0 }),
                        (this._render = () => {
                            const { history: e, interstitialOrderToDisplay: t, onInterstitialSubmit: r } = this.props,
                                a = (0, _.cu)(e);
                            return this._refreshControlWrapper(n.createElement(E.Z, { interstitials: t, onInterstitialSubmit: r }, (e) => n.createElement(n.Fragment, null, a ? null : this._renderHeader(), this._renderInlineCompose(), e || this._renderTimeline())));
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
                        (this._getTimelineModuleMemoized = (0, h.Z)((e, t) => (0, x.Z)(e, t))),
                        (this._getLiveCommerceItemsSliceModuleMemoized = (0, h.Z)((e) => (0, w.Z)(e)));
                    const { timelineMessageOverride: r, withTweetActionsDisabled: a } = e;
                    (this._entryConfiguration = (({ withTweetActionsDisabled: e }) => ({ ...(0, $t.G)({ withTweetActionsDisabled: e }) }))({ withTweetActionsDisabled: a })),
                        (this._timelinePreprocessor = ((e) => (t) =>
                            e
                                ? t.map((t) => {
                                      if (t.type === qt.ZP.Message) {
                                          const r = { content: { content: { inlinePrompt: { headerText: e } } } };
                                          return (0, Gt.Z)({}, t, r);
                                      }
                                      return t;
                                  })
                                : t)(r));
                }
                render() {
                    const { fetchStatus: e, liveEventDetails: t, onFetch: r } = this.props;
                    return n.createElement(f.Z, { "aria-label": Yt, fetchStatus: e, key: t.eventId, onRequestRetry: r, render: this._render });
                }
                _renderHeader() {
                    const {
                            bettingOdds: e,
                            carousel: t,
                            disableFullscreenVideo: r,
                            history: a,
                            isPlayerFullscreen: o,
                            isTOO: s,
                            isWide: i,
                            liveEventDetails: l,
                            onChildScribeAction: c,
                            onFullscreenChange: d,
                            remindMeButtonSubscribe: m,
                            remindMeButtonUnsubscribe: p,
                            scoreData: u,
                            timelineDetails: { hashtag: h },
                        } = this.props,
                        { selectedCarouselItemId: g } = this.state,
                        b = (0, v.to)(t, g);
                    return n.createElement(Wt, { bettingOdds: e, carousel: t, disableFullscreenVideo: r, history: a, isPlayerFullscreen: o, isTOO: s, isWide: i, liveEventDetails: l, onChildScribeAction: c, onFullscreenChange: d, remindMeButtonSubscribe: m, remindMeButtonUnsubscribe: p, scoreData: u, selectedCarouselItem: b, setSelectedCarouselItem: this._setSelectedCarouselItem, timelineHashtag: h, withScoreCard: !i });
                }
                _renderInlineCompose() {
                    const {
                            isWide: e,
                            timelineDetails: { hashtag: t },
                        } = this.props,
                        r = t ? Xt({ hashtag: t }) : Kt;
                    return e ? n.createElement(n.Fragment, null, n.createElement(Y.Z, { onClick: this._handleInlineComposeOnClick, promptLabel: r }), n.createElement(s.Z, null)) : null;
                }
                _renderTimeline() {
                    const {
                            timelineDetails: { timelineId: e },
                        } = this.props,
                        t = this._renderTimelineLinks(),
                        r = e === v.BG.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline();
                    return t.length > 1 || (1 === t.length && t[0].isCustom) ? n.createElement(n.Fragment, null, n.createElement(I.Z, { "aria-label": Jt, links: t.map((e) => ({ key: e.key, label: e.label, isActive: e.isActive, to: { ...e.to } })) }), n.createElement(a.Z, { style: or.timelineContainer }, r)) : r;
                }
                _renderTimelineLinks() {
                    const {
                        timelineDetails: { timelineLinks: e },
                    } = this.props;
                    return e.map(({ customizationInfo: e, label: t, labelType: r, ...a }) => {
                        const o = !(0, g.Z)(e),
                            s = this._renderTimelineLabelAnnotation(r);
                        return { ...a, key: t, label: o && e ? this._renderCustomLabel({ label: t, customizationInfo: e, labelAnnotation: s }) : n.createElement(i.ZP, { weight: "bold" }, t, s), isCustom: o };
                    });
                }
                _renderTimelineLabelAnnotation(e) {
                    return e === v.AJ.New ? n.createElement(l.ZP, { background: "primary", bold: !0, style: or.labelAnnotation }, tr({ ttc_live_event: "" })) : null;
                }
                _renderCustomLabel({ customizationInfo: { badge_media: e, title_color: t }, label: r, labelAnnotation: o }) {
                    return n.createElement(a.Z, { style: or.timelineLabel }, e && e.url ? n.createElement(c.Z, { source: e.url, style: or.timelineLabelBadge }) : null, n.createElement(i.ZP, { style: { color: t }, weight: "bold" }, r, o));
                }
                _renderRichTimeline() {
                    const {
                            isPlayerFullscreen: e,
                            isWide: t,
                            liveEventDetails: { title: r = Jt },
                            onTimelinePoll: a,
                            pollingIntervalMs: o,
                            timelineDetails: { eventId: s, timelineId: i },
                            withFloatingComposeButton: l,
                        } = this.props,
                        c = this._getTimelineModuleMemoized(s, i),
                        m = !e && !t && l ? this._renderFloatingComposeButton() : null;
                    return n.createElement(y.Z, { component: d.Z, fab: m }, n.createElement($.Z, { anchoring: C.Z, entryConfiguration: this._entryConfiguration, module: c, onTimelinePoll: a, pollingIntervalMsOverride: o, preprocessEntryList: this._timelinePreprocessor, prerollDisplayLocation: Z.Nw.OTHER, refreshControl: null, renderEmptyState: nr, title: r }));
                }
                _renderCommerceItemSliceTimeline() {
                    const {
                            timelineDetails: { eventId: e },
                        } = this.props,
                        t = this._getLiveCommerceItemsSliceModuleMemoized(e);
                    return n.createElement(S.nO, { namespace: rr }, n.createElement(W, { module: t }));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return n.createElement(G.Z, { getLocationState: this._getComposeTimelineDetails, history: e });
                }
                _refreshControlWrapper(e) {
                    const { onFetch: t, refreshStatus: r } = this.props;
                    return n.createElement(q.Z, { isRefreshing: r === k.ZP.LOADING, onRefresh: t }, e);
                }
            }
            (ar.contextType = j.rC), (ar.defaultProps = { onChildScribeAction: b.Z });
            const or = m.default.create((e) => ({ timelineLabel: { flexDirection: "row", alignItems: "flex-end" }, timelineLabelBadge: { borderRadius: e.borderRadii.infinite, height: e.lineHeights.body, marginEnd: e.spaces.space4, width: e.lineHeights.body }, timelineContainer: { minHeight: "90vh" }, labelAnnotation: { marginStart: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-b308cbaf.01b7cd6a.js.map
