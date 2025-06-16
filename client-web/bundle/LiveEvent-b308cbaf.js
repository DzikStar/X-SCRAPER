"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-b308cbaf", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(99107),
                a = r(272175),
                i = r(111677);
            const c = r.n(i)().c39b0e24,
                s = ({ deepLink: e }) => {
                    const t = c;
                    return e ? o.createElement(a.ql, null, o.createElement("meta", { content: e, property: "al:ios:url" }), o.createElement("meta", { content: n.AF, property: "al:ios:app_store_id" }), o.createElement("meta", { content: t, property: "al:ios:app_name" }), o.createElement("meta", { content: e, property: "al:android:url" }), o.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), o.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        983389: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(272175);
            const a = ({ description: e }) => o.createElement(n.ql, null, o.createElement("meta", { content: e, name: "description" }));
        },
        572067: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(272175);
            const a = (e) => {
                const { canonical: t, description: r = "", image: a, imageAlt: i, imageH: c, imageType: s, imageW: l, title: m, ttl: d, type: p } = e;
                return o.createElement(n.ql, null, p ? o.createElement("meta", { content: p, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, m ? o.createElement("meta", { content: m, property: "og:title" }) : null, o.createElement("meta", { content: r, property: "og:description" }), a ? o.createElement("meta", { content: a, property: "og:image" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:type" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:width" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:height" }) : null, i ? o.createElement("meta", { content: i, property: "og:image:alt" }) : null, d ? o.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        898948: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                n = r(443781),
                a = r(163301);
            const i = (e) => {
                const { children: t, collectionName: r } = e,
                    i = o.useContext(n.rC);
                return (0, a.Kx)(i), t;
            };
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => p, nn: () => u, Vm: () => g });
            var o = r(202784),
                n = r(325686),
                a = r(366635),
                i = r(392237),
                c = r(453333),
                s = r(784732),
                l = r(689582),
                m = r(68290);
            const d = "placeholderIcon",
                p = ({ author: e, color: t = "text", size: r = "subtext2", style: n, withHoverCard: i = !0, withLink: c = !1, withScreenName: s = !1 }) => o.createElement(a.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [h.authorUserName, n], verifiedType: e.verified_type, withHoverCard: i, withLink: c, withScreenName: s }),
                u = ({ style: e }) => o.createElement(n.Z, { style: [h.lightningBadge, e] }, o.createElement(c.default, { style: h.lightningIcon })),
                g = ({ icon: e }) => o.createElement(n.Z, { style: h.placeholderIconContainer, testID: d }, "news" === e ? o.createElement(s.default, { style: h.placeholderIcon }) : "lists" === e ? o.createElement(l.default, { style: h.placeholderIcon }) : o.createElement(m.default, { style: h.placeholderIcon })),
                h = i.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        954970: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(154003),
                a = r(111677),
                i = r.n(a);
            const c = i().j1d352d8,
                s = i().d18909d4,
                l = { element: "reminder_button" },
                m = Object.freeze({ impression: "impression", click: "click" });
            const d = function (e) {
                const {
                        eventId: t,
                        onPress: r,
                        onRemindButtonScribe: a,
                        remindMeSubscription: { notification_id: i, subscribed: d },
                    } = e,
                    p = o.useRef({});
                (p.current.onRemindButtonScribe = a),
                    o.useEffect(() => {
                        p.current?.onRemindButtonScribe({ action: m.impression, ...l });
                    }, []);
                const u = d ? "primaryOutlined" : "primaryFilled",
                    g = d ? c : s;
                return o.createElement(
                    n.ZP,
                    {
                        onPress: () => {
                            r(t, { remind_me: !d, notification_id: i }), a({ action: m.click, ...l });
                        },
                        size: "medium",
                        type: u,
                    },
                    g,
                );
            };
        },
        514029: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                n = r(325686),
                a = r(844685),
                i = r(731708),
                c = r(992942),
                s = r(392237),
                l = r(111677),
                m = r.n(l),
                d = r(152957);
            const p = "scorecard",
                u = m().eaaca5dc,
                g = ({ id: e = "", isLive: t, status: r }) => {
                    const o = "44" === e.split(":")[0],
                        n = r === d.I.UPCOMING || r === d.I.DELAYED;
                    return (o && t) || n;
                };
            class h extends o.Component {
                render() {
                    const { scoreData: e } = this.props,
                        t = ((e) => {
                            const { moments: t } = e;
                            if (t) {
                                const { id: e, participant_scores: r, progress_strings: o, status: n, winner_id: a } = t,
                                    i = n === d.I.LIVE;
                                return { isLive: i, progressStrings: g({ id: e, status: n, isLive: i }) ? o.join(" ") : o[0], participantScores: r, winnerId: a };
                            }
                        })(e);
                    return t ? this._renderScoreCardWithHeader(t) : null;
                }
                _renderScoreCardWithHeader(e) {
                    const { withHeader: t } = this.props;
                    return o.createElement(o.Fragment, null, t ? o.createElement(a.Z, { text: u }) : null, this._renderScoresAndMatchStatus(e));
                }
                _renderScoresAndMatchStatus(e) {
                    const { withContainer: t } = this.props,
                        { isLive: r, participantScores: a, progressStrings: c, winnerId: s } = e,
                        l = a.map((e) => this._renderTeamRow(e, s, r));
                    return o.createElement(n.Z, { style: [y.teamDisplay, t && y.container] }, o.createElement(n.Z, { style: y.teamRows }, l), o.createElement(i.ZP, { style: y.matchStatusText }, c));
                }
                _renderTeamRow(e, t, r) {
                    const {
                            participant: { id: a, media: s, name: l },
                            score: m,
                            secondaryScore: d,
                        } = e,
                        u = a === t,
                        g = r || u ? "bold" : "normal",
                        h = d ? `${m.split(" ")[0]} ${d}` : m;
                    return o.createElement(n.Z, { key: a, style: y.teamRow, testID: p }, o.createElement(c.Z, { source: s.url, style: y.teamLogo }), o.createElement(i.ZP, { align: "left", numberOfLines: 1, style: y.teamName }, l), o.createElement(i.ZP, { style: y.teamScore, weight: g }, h), o.createElement(n.Z, { style: [y.winnerContainer, u && y.winner] }));
                }
            }
            const y = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, teamDisplay: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, teamRows: { flexGrow: 1, flexShrink: 1, borderEndWidth: 1, borderEndStyle: "solid", borderEndColor: e.colors.gray200, gap: e.spaces.space8 }, teamRow: { alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, teamLogo: { borderRadius: e.borderRadii.small, marginEnd: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, teamName: { flexGrow: 1, flexShrink: 1, whiteSpace: "normal" }, teamScore: { flexShrink: 0, marginStart: e.spaces.space12 }, winnerContainer: { width: e.spaces.space12 }, winner: { borderBottomWidth: 4, borderBottomColor: "transparent", borderBottomStyle: "solid", borderEndWidth: 5, borderEndStyle: "solid", borderEndColor: e.colors.text, borderTopWidth: 4, borderTopStyle: "solid", borderTopColor: "transparent" }, matchStatusText: { paddingStart: e.spaces.space12 } }));
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
                a = (e, t, r) => i(e(r), e(t)),
                i = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                c = (e, t) => {
                    if (e.length) return e.reduce((e, r) => (t(r, e) > 0 ? r : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const r = t.getForViewport(),
                        i = (e) => e && e.doesIntersectWith(r),
                        s = (e) => (e ? Math.abs(r.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: r }) => !o(r) && t.isRendered(r) && e.isRendered(r)),
                        m =
                            l.length > 0
                                ? c(l, (e, r) => {
                                      const o = t.getForItem(e.id),
                                          c = t.getForItem(r.id);
                                      return n(i, o, c) || a(s, o, c);
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
                        const r = s({ prevPos: e, nextPos: t });
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
                a = r(107267),
                i = r(403556),
                c = r(791632);
            const s = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: r, ...s } = e;
                    return n.createElement(i.Z, (0, o.Z)({}, s, { isCompact: r || (0, c.HD)(t) }));
                },
                l = n.memo(s);
        },
        971372: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                n = r(325686),
                a = r(392237),
                i = r(310452),
                c = r(731708),
                s = r(354149);
            const l = a.default.create((e) => ({ description: { marginTop: e.spaces.space8 } })),
                m = ({ description: e, descriptionEntities: t, pivotText: r }) => {
                    const a = e ? e.trim() : void 0,
                        m = ((e) => (e?.length ? { description: { urls: e } } : void 0))(t),
                        d = a ? i.ZP.descriptionTextParts(a, m) : [];
                    return o.createElement(
                        n.Z,
                        { style: l.description },
                        d.length
                            ? o.createElement(
                                  c.ZP,
                                  null,
                                  d.map((e, t) => o.createElement(s.ZP, { key: `events_textpart_${t}`, linkify: !0, part: e })),
                              )
                            : null,
                        r ? o.createElement(c.ZP, { color: "gray700" }, r) : null,
                    );
                };
        },
        650554: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var o = r(202784),
                n = r(325686),
                a = r(457311),
                i = r(392237),
                c = r(111677),
                s = r.n(c),
                l = r(337069),
                m = r(942893),
                d = r(725516),
                p = r(208560),
                u = r(668214),
                g = r(256727);
            const h = (e, t) => (t.commerceItemId ? g.Z.select(e, t.commerceItemId) : void 0),
                y = (0, u.Z)().propsFromState(() => ({ commerceItem: h }))((e) => {
                    const { commerceItem: t, onClick: r } = e;
                    if ("CommerceProduct" === t?.__typename) {
                        const { __typename: e, ...n } = t;
                        return o.createElement(p.Z, { commerceProduct: n, onClick: r });
                    }
                    return null;
                });
            var f = r(26232);
            const b = (e, t) =>
                    t.module
                        .selectItems(e)
                        .map((t) => (t ? g.Z.select(e, t) : void 0))
                        .filter(Boolean),
                E = (0, u.Z)().propsFromState((e) => ({ commerceItems: b })),
                w = s().e9f1fbcc,
                I = s().c9b302f8,
                Z = () => o.createElement(a.Z, { header: w, message: I }),
                S = i.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 }, cell: { marginHorizontal: "1%", marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: "48%" } })),
                _ = (0, d.Z)(
                    E((e) => {
                        const { analytics: t, commerceItems: r, module: a } = e,
                            i = t.contextualScribeData;
                        o.useEffect(() => {
                            t.scribe({ action: "impression", data: i });
                        }, [t, i]);
                        const c = (e, o) => {
                                const n = m.Z.addCommerceDetailsToItems(i, r, e);
                                t.scribe({ element: "product", action: o, data: n });
                            },
                            s = (e) => () => {
                                c(e, "impression");
                            },
                            d = (e) => () => {
                                c(e, "click");
                            };
                        return o.createElement(n.Z, { style: S.root }, o.createElement(f.Z, { module: a, noItemsRenderer: Z, numColumns: 2, renderer: (e) => o.createElement(l.Z, { onImpression: s(e), style: S.cell }, o.createElement(y, { commerceItemId: e, onClick: d(e) })) }));
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-b308cbaf.835bc01a.js.map
