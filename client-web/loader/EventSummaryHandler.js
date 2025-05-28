"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.EventSummaryHandler"],
    {
        346252: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(202784),
                n = r(325686),
                o = r(530525),
                i = r(439592),
                s = r(682474),
                l = r(745185),
                c = r(392237),
                d = r(401388),
                m = r(250672),
                p = r(741692);
            const u = Object.freeze({ Fixed: "fixed", Variable: "variable" }),
                h = (e) => {
                    const { category: t, eventState: r, gameClock: n, gameClockPeriod: o, participants: i, startTimeMillis: s, winnerId: c } = e,
                        d = (0, m.bH)(t, r, i, o, c);
                    return a.createElement(l.Z, { "aria-label": d, category: t, containerStyle: C.scoreCardTile, gameClock: n, gameClockPeriod: o, gameState: r, isCompact: !0, startTimeMillis: s, teams: i, winnerId: c });
                },
                g = ({ isCellWithProminentSocialContext: e, type: t }) => {
                    switch (t) {
                        case u.Fixed:
                            return (e && C.fixedCellThumbnailWithProminentSocialContext) || C.fixedCellThumbnail;
                        case u.Variable:
                            return C.variableCellThumbnail;
                        default:
                            return;
                    }
                },
                C = c.default.create((e) => ({ coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, fixedCellThumbnail: { height: c.default.theme.spaces.space48, width: c.default.theme.spaces.space48 }, fixedCellThumbnailWithProminentSocialContext: { height: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})`, width: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})` }, scoreCardTile: { padding: 0 }, variableCellThumbnail: { maxHeight: `calc(${c.default.theme.spaces.space48} * 2)`, maxWidth: `calc(${c.default.theme.spaces.space48} * 2)`, minHeight: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, minWidth: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, height: "25%", width: "25%" } })),
                b = (e) => {
                    const { cropCandidates: t, dataSaverMode: r, icon: l, image: c, isCellWithProminentSocialContext: m, scoreEvent: u, type: b = "variable" } = e,
                        y = g({ isCellWithProminentSocialContext: m, type: b });
                    return a.createElement(n.Z, { style: [C.coverContainer, y] }, u ? h(u) : !c || (0, d.Z)(c) || r ? (r || (0, d.Z)(c) ? a.createElement(s.Z, { ratio: 1 }, a.createElement(p.Vm, { icon: l })) : null) : a.createElement(o.Z, { "aria-label": "", aspectMode: i.Z.SQUARE, cropCandidates: t, image: c }));
                };
        },
        741692: (e, t, r) => {
            r.d(t, { S3: () => p, nn: () => u, Vm: () => h });
            var a = r(202784),
                n = r(325686),
                o = r(366635),
                i = r(392237),
                s = r(453333),
                l = r(784732),
                c = r(689582),
                d = r(68290);
            const m = "placeholderIcon",
                p = ({ author: e, color: t = "text", size: r = "subtext2", style: n, withHoverCard: i = !0, withLink: s = !1, withScreenName: l = !1 }) => a.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[r], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: r, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: r, style: [g.authorUserName, n], verifiedType: e.verified_type, withHoverCard: i, withLink: s, withScreenName: l }),
                u = ({ style: e }) => a.createElement(n.Z, { style: [g.lightningBadge, e] }, a.createElement(s.default, { style: g.lightningIcon })),
                h = ({ icon: e }) => a.createElement(n.Z, { style: g.placeholderIconContainer, testID: m }, "news" === e ? a.createElement(l.default, { style: g.placeholderIcon }) : "lists" === e ? a.createElement(c.default, { style: g.placeholderIcon }) : a.createElement(d.default, { style: g.placeholderIcon })),
                g = i.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        449950: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(807896),
                n = r(202784),
                o = r(530525),
                i = r(659651),
                s = r(111677),
                l = r.n(s),
                c = r(632658);
            const d = "image",
                m = l().f93bb3ee;
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: s, shouldShowAltLabel: l, ...c } = this.props;
                            return n.createElement(n.Fragment, null, n.createElement(o.Z, (0, a.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: d })), l ? n.createElement(i.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return n.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        308192: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Ne });
            var a = r(459643),
                n = r(479506),
                o = r(942893),
                i = r(351322),
                s = r(807896),
                l = r(202784),
                c = r(663550),
                d = r(159440),
                m = r(325686),
                p = r(638009),
                u = r(952428),
                h = r(872405),
                g = r(124964),
                C = r(392237),
                b = r(346252),
                y = r(864479),
                f = r(952793),
                S = r(946409),
                v = r(903019),
                E = r(618566),
                w = r(827922),
                x = r(265196),
                Z = r(421575),
                I = r(988245),
                T = r(927389),
                _ = r(442730),
                k = r(731708),
                P = r(470397),
                D = r(628526),
                R = r(378729),
                M = r(366635),
                O = r(854582),
                z = r(868634),
                L = r(741692),
                $ = r(686689);
            const F = ({ badge: e, groupedTrends: t, hasProminentSocialContext: r, linkColor: a, promotedContent: n, promotedTrendDescription: o, publisher: i, publisherTitleColor: s = "text", richContext: c, scoreEvent: d, shouldTruncateTitle: p, style: u, supportingText: h, textColor: g = "gray700", timeString: C, title: b, titleFontSize: y = "body", titleWeight: f = "bold" }) => {
                    const S = _.Z.getTextDirection(b),
                        v = r ? void 0 : U.title;
                    return l.createElement(m.Z, { style: u }, l.createElement(k.ZP, { color: s, dir: S, numberOfLines: p ? 3 : void 0, size: y, style: v, weight: f, withHashflags: !0 }, b), r ? null : l.createElement(P.Z, { color: g, style: U.aboveTitle }, h ? l.createElement(k.ZP, { color: g, numberOfLines: 1, size: "subtext2" }, h) : null, i ? l.createElement(L.S3, { author: i, color: s, size: "subtext2" }) : null, e || C ? N(C, e, g) : null), l.createElement(D.Z, { groupedTrends: t, linkColor: a, textColor: g }), r ? l.createElement(m.Z, { style: U.belowTitle }, d ? H(d) : (e || C) && i ? A({ badge: e, publisher: i, textColor: g, timeString: C }) || N(C, e, g) : null) : null, n && n.advertiser ? l.createElement(l.Fragment, null, l.createElement(k.ZP, { color: g }, o), l.createElement(R.Z, { color: "white", promotedContent: n, style: U.promotedIndicator })) : null, c ? l.createElement($.Z, { color: g, entities: c.entities, rtl: c.rtl, size: "subtext2", text: c.text }) : null);
                },
                A = ({ badge: e, publisher: t, textColor: r, timeString: a }) => {
                    const n = l.createElement(M.Z, { isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, nameSize: "subtext2", profileImageUrl: t.profile_image_url_https });
                    return l.createElement(P.Z, { style: U.publisherRow }, n, N(a, e, r));
                },
                H = (e) => {
                    const { category: t, eventState: r, gameClock: a, gameClockPeriod: n, participants: o, startTimeMillis: i, winnerId: s } = e;
                    return l.createElement(O.Z, { category: t, gameClock: a, gameClockPeriod: n, gameState: r, startTimeMillis: i, teams: o, winnerId: s, withCategory: !1 });
                },
                N = (e, t, r) => (t && t.text ? l.createElement(z.ZP, { type: "live" }, t.text) : e ? l.createElement(m.Z, { style: U.timestamp }, l.createElement(k.ZP, { color: r, numberOfLines: 1, size: "subtext2" }, e)) : null),
                U = C.default.create((e) => ({ aboveTitle: { alignItems: "center", flexDirection: "row" }, belowTitle: { marginTop: e.spaces.space4 }, promotedIndicator: { marginTop: e.spaces.space12 }, publisherRow: { alignItems: "center" }, timestamp: { maxWidth: "50%" }, title: { marginVertical: e.spaces.space2 } })),
                V = l.memo(F);
            var W = r(668214),
                B = r(204744),
                j = r(38562),
                G = r(466380);
            const Q = (e, t) => t.entry.content,
                Y = (e, t) => {
                    const r = Q(0, t),
                        a = r.socialContext && r.socialContext.topicContext && r.socialContext.topicContext.topicId;
                    return a ? G.Z.select(e, a) : void 0;
                },
                q = (e, t) => t.entry.content.displayType === d.Z.CellWithProminentSocialContext,
                J = (0, W.Z)()
                    .propsFromState(() => ({ dataSaverMode: j.IX, eventSummary: Q, hasProminentSocialContext: q, topic: Y }))
                    .adjustStateProps(({ dataSaverMode: e, eventSummary: t, hasProminentSocialContext: r, topic: a }) => {
                        let n;
                        if (r && t.scoreEvent) {
                            const { category: e, eventState: r, gameClock: a, gameClockPeriod: o, participants: i, startTimeMillis: s, winnerId: l } = t.scoreEvent;
                            n = { category: e, eventState: r, gameClock: a, gameClockPeriod: o, startTimeMillis: s, participants: i, winnerId: l };
                        }
                        return { dataSaverMode: e, hasProminentSocialContext: r, id: t.id, scoreEvent: n, topic: a };
                    })
                    .propsFromActions(() => ({ saveAsRecentSearch: B.DI })),
                K = (e) => {
                    const { badge: t, dataSaverMode: r, feedbackItems: a, groupedTrends: o, hasProminentSocialContext: i, id: s, image: c, isInSidebar: d, link: g, onClick: C, onImpression: y, publisher: S, richContext: E, saveAsRecentSearch: w, scoreEvent: x, shouldStoreTypeaheadItem: Z, socialContext: I, supportingText: _, timeString: k, title: P, topic: D } = e,
                        R = (0, f.hC)("responsive_web_trends_ui_top_articles");
                    l.useEffect(() => {
                        y && y();
                    }, []);
                    const M = l.useCallback(() => {
                            C(), w && Z && Z(n.Z.ItemType.EVENT) && w({ event: { id: s, image: c || { url: "", height: 0, width: 0 }, supportText: _, title: P, type: v.g2.Event } });
                        }, [s, c, C, w, Z, _, P]),
                        O = l.useMemo(() => (a?.length ? l.createElement(T.Z, { feedbackItems: a }) : null), [a]);
                    return l.createElement(p.$6, null, (e) => l.createElement(u.Z, { link: e.withAnchorless(g), onClick: M, style: te.rootLink, withDarkerInteractiveBackground: d }, i && I ? l.createElement(h.Z, { rightControl: O, style: te.socialContextRow }, l.createElement(ee, { socialContext: I, topic: D })) : null, l.createElement(m.Z, { style: te.row }, R && l.createElement(b.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: i, scoreEvent: x, type: i ? "fixed" : void 0 }), l.createElement(V, { badge: t, groupedTrends: o, hasProminentSocialContext: i, publisher: S, richContext: E, scoreEvent: x, style: R ? te.detailsTrendUI : te.details, supportingText: _, timeString: k, title: P }), !R && l.createElement(b.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: i, scoreEvent: x, type: i ? "fixed" : void 0 }))));
                },
                X = ({ socialContext: e, topic: t }) => {
                    const { contextType: r, landingUrl: a, text: n, topicContext: o } = e,
                        i = o && (0, w.SJ)(o),
                        s = l.useMemo(() => (t ? l.createElement(l.Fragment, null, l.createElement(g.Z, { style: te.topicMiddot }), l.createElement(x.ZP, { isTransparent: !0, size: "smallCompact", textMode: Z.q.FollowTopic, topic: t })) : null), [t]);
                    return l.createElement(I.Z, { contextType: r, link: a ? (0, S.s9)(a) : void 0, rightControl: i ? s : void 0, text: n, topicData: t && o ? (0, E.P)(o) : void 0, weight: "bold", withLeftPadding: !1 });
                },
                ee = l.memo(X),
                te = C.default.create((e) => ({ detailsTrendUI: { flex: 1, marginStart: e.spaces.space12 }, details: { flex: 1, marginEnd: e.spaces.space12 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, rootLink: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, row: { flexDirection: "row" }, socialContextRow: { justifyContent: "space-between", marginBottom: e.spaces.space4 } })),
                re = (0, y.Z)(J(l.memo(K)));
            var ae = r(530732),
                ne = r(682474),
                oe = r(284702),
                ie = r(309854),
                se = r(439592),
                le = r(123751),
                ce = r(449950),
                de = r(310453);
            const me = { red: 0, green: 0, blue: 0 };
            class pe extends l.Component {
                render() {
                    const e = C.default.theme.aspectRatios.landscape;
                    return l.createElement(ne.Z, { ratio: e }, l.createElement(m.Z, { style: [ue.maxHeightWidth, this._getBackgroundColorStyle()] }, this._renderCover()), l.createElement(m.Z, { style: [C.default.absoluteFill, this._getGradientColorStyle()] }));
                }
                _renderCover() {
                    const { broadcast: e, coverMediaFromTweet: t, image: r, promotedContent: a, tweetId: n } = this.props;
                    if (e && e.broadcast_id && e.media_key) {
                        const t = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 },
                            r = { contentId: e.media_key, videoId: { type: "broadcast", id: e.broadcast_id }, variants: [] },
                            n = null != e.width && null != e.height ? { url: e.image_url ?? "", width: e.width, height: e.height } : void 0;
                        return l.createElement(de.Z, { "aria-label": "", aspectRatio: C.default.theme.aspectRatios.landscape, displayOptions: t, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, poster: n, promotedContent: a, showControls: !1, source: r, videoType: "video" });
                    }
                    if (n && t && "photo" !== t.type) {
                        const e = oe.Z.extractVideoProps(le.Z.forTweet(n), t),
                            r = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 };
                        return l.createElement(de.Z, (0, s.Z)({}, e, { aspectRatio: C.default.theme.aspectRatios.landscape, displayOptions: r, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, promotedContent: a, showControls: !1 }));
                    }
                    if (t) {
                        const e = t.ext_alt_text || "",
                            r = ie.Z.getOriginalImage(t);
                        return this._renderCoverImage(r, e);
                    }
                    return this._renderCoverImage(r);
                }
                _renderCoverImage(e, t = "") {
                    return e ? l.createElement(ce.Z, { "aria-label": t, aspectMode: se.Z.exact(C.default.theme.aspectRatios.landscape), cropCandidates: this._getCropCandidates(), hideAcceptOverlay: !0, image: e }) : null;
                }
                _getBackgroundColorStyle() {
                    const e = this._getDominantColor();
                    return { backgroundColor: e ? `rgb(${e.red},${e.green},${e.blue})` : C.default.theme.colors.primary };
                }
                _getGradientColorStyle() {
                    return { backgroundImage: `linear-gradient(transparent 0%, transparent 25%, ${`rgba(${me.red},${me.green},${me.blue}, 0.70)`} 75%, ${`rgba(${me.red},${me.green},${me.blue}, 0.80)`} 100%)` };
                }
                _getCropCandidates() {
                    const { coverMediaFromTweet: e, manualCrops: t } = this.props;
                    return t || (e && ie.Z.getCropCandidates(e));
                }
                _getDominantColor() {
                    const { coverMediaFromTweet: e } = this.props;
                    return e && ie.Z.getBackgroundColor(e);
                }
            }
            const ue = C.default.create((e) => ({ maxHeightWidth: { height: "100%", width: "100%" } }));
            var he = r(232418),
                ge = r(228356),
                Ce = r(836255),
                be = r(919022);
            const ye = (e, t) => t.entry.content,
                fe = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.momentId;
                    return r ? ge.Z.select(e, r) : void 0;
                },
                Se = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.tweetId;
                    return r ? Ce.Z.select(e, r) : void 0;
                },
                ve = (e, t) => {
                    const r = t.entry.content.promotedMetadata?.advertiserId;
                    return r ? be.ZP.select(e, r) : void 0;
                },
                Ee = (e, t) => {
                    const { mediaEntity: r, mediaKey: a } = t.entry.content.media ?? {};
                    if (a && null != r?.broadcast) return r?.broadcast;
                },
                we = ({ eventSummary: e, tweet: t }) => {
                    if (t) {
                        const r = e.media?.mediaKey?.id;
                        return t.extended_entities?.media?.find((e) => e.id_str === r);
                    }
                },
                xe = (0, W.Z)()
                    .propsFromState(() => ({ advertiser: ve, eventSummary: ye, moment: fe, tweet: Se, broadcast: Ee }))
                    .adjustStateProps(({ advertiser: e, broadcast: t, eventSummary: r, moment: a, tweet: n }) => {
                        const { promotedMetadata: o } = r;
                        return { coverMediaFromTweet: we({ tweet: n, eventSummary: r }), manualCrops: (0, he.q8)(a), promotedContent: o ? { advertiser: { id_str: o.advertiserId }, advertiser_name: e ? e.name : void 0, impression_id: o.impressionId, disclosure_type: "NoDisclosure" } : void 0, promotedTrendDescription: o ? o.promotedTrendDescription : void 0, tweetId: n?.id_str, broadcast: t };
                    }),
                Ze = "eventHero",
                Ie = "white",
                Te = (e) => {
                    const { badge: t, broadcast: r, coverMediaFromTweet: a, feedbackItems: n, groupedTrends: o, image: i, link: s, manualCrops: c, onClick: d, onImpression: u, promotedContent: h, promotedTrendDescription: g, publisher: C, richContext: b, supportingText: y, timeString: S, title: v, tweetId: E } = e;
                    l.useEffect(() => {
                        u && u();
                    }, []);
                    const w = v.length > 80 ? "headline1" : "title4",
                        x = (0, f.hC)("rweb_sourcemap_migration");
                    return l.createElement(p.$6, null, (e) => l.createElement(l.Fragment, null, l.createElement(ae.Z, { link: e.withAnchorless(s), onClick: d, style: x && _e.containerRedesign, testID: Ze }, l.createElement(pe, { broadcast: r, coverMediaFromTweet: a, image: i, manualCrops: c, promotedContent: h, tweetId: E }), l.createElement(m.Z, { style: ke }, l.createElement(V, { badge: t, groupedTrends: o, linkColor: Ie, promotedContent: h, promotedTrendDescription: g, publisher: C, publisherTitleColor: Ie, richContext: b, shouldTruncateTitle: !0, supportingText: y, textColor: Ie, timeString: S, title: v, titleFontSize: w, titleWeight: "heavy" }))), n?.length ? l.createElement(m.Z, { style: _e.menuContainer }, l.createElement(T.Z, { feedbackItems: n, isDisplayedOnMedia: !0 })) : null));
                },
                _e = C.default.create((e) => ({ containerRedesign: { marginHorizontal: e.spaces.space16 }, menuContainer: { position: "absolute", top: e.spaces.space12, end: e.spaces.space16 }, details: { justifyContent: "flex-end", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                ke = [C.default.absoluteFill, _e.details],
                Pe = xe(l.memo(Te));
            var De = r(614983),
                Re = r.n(De),
                Me = r(71620),
                Oe = r(988566),
                ze = r(694180);
            const Le = (e, t) => t.entry.content,
                $e = (e, t) => {
                    const r = Le(0, t),
                        a = r.socialContext && r.socialContext.topicContext && r.socialContext.topicContext.topicId;
                    return a ? G.Z.select(e, a) : void 0;
                },
                Fe = (e, t) => {
                    const { publisherId: r } = Le(0, t);
                    return r ? be.ZP.select(e, r) : void 0;
                },
                Ae = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, logTrend: a, promotedMetadata: n, ...o } = e,
                        i = l.useCallback(
                            (e) => {
                                n && n.promotedTrendId && a({ promoted_trend_id: n.promotedTrendId, impression_id: n.impressionId, event: e }).catch(r());
                            },
                            [n, a, r],
                        ),
                        m = l.useCallback(() => {
                            t.scribeAction("click"), i(c.AJ.SPOTLIGHT_CLICK);
                        }, [t, i]),
                        p = l.useCallback(() => {
                            t.scribeAction("impression"), i(c.AJ.SPOTLIGHT_IMPRESSION);
                        }, [t, i]);
                    switch (e.displayType) {
                        case d.Z.CellWithProminentSocialContext:
                        case d.Z.Cell:
                            return l.createElement(re, (0, s.Z)({}, o, { onClick: m, onImpression: p }));
                        case d.Z.Hero:
                            return l.createElement(Pe, (0, s.Z)({}, o, { onClick: m, onImpression: p }));
                        default:
                            return null;
                    }
                },
                He = (0, W.Z)()
                    .propsFromState(() => ({ eventSummary: Le, publisher: Fe, topic: $e }))
                    .adjustStateProps(({ eventSummary: e, publisher: t, topic: r }) => {
                        const { displayType: a, groupedTrends: n, promotedMetadata: o, richContext: i } = e,
                            s = (0, S.s9)(e.url);
                        Re()(s, "link cannot be undefined in EventSummaryHero");
                        const l = (0, Oe.Du)({ isCellWithProminentSocialContext: a === d.Z.CellWithProminentSocialContext, socialContext: e.socialContext, topic: r }),
                            c = (n || []).map((e) => ({ name: e.name, link: (0, S.s9)(e.url) }));
                        return { badge: e.badge, displayType: e.displayType, groupedTrends: c, image: e.image, link: s, promotedMetadata: o, publisher: t, richContext: i, socialContext: l, supportingText: e.supportingText, timeString: e.timeString, title: e.title };
                    })
                    .propsFromActions(() => ({ logTrend: ze.dS, createLocalApiErrorHandler: (0, Me.zr)("URT_EVENT_SUMMARY") }))
                    .withAnalytics()(l.memo(Ae)),
                Ne = (e) =>
                    i
                        .iH({
                            component: He,
                            getScribeDataItem: (e) =>
                                ((e) => {
                                    const { promotedMetadata: t } = e.content,
                                        r = e.content.id,
                                        a = { item_type: n.Z.ItemType.EVENT, event_details: { event_id: r }, ...o.Z.getAllSurfaceDetails(e.itemMetadata.clientEventInfo) };
                                    return t && ((a.disclosure_type = t.disclosureType), (a.promoted_id = t.impressionId)), a;
                                })(e),
                            isFocusable: (0, a.Z)(!0),
                        })
                        .getHandler(() => ({ ...e }));
        },
        250672: (e, t, r) => {
            r.d(t, { bH: () => m });
            var a = r(111677),
                n = r.n(a),
                o = r(93074),
                i = r(810495);
            const s = n().a3484d22,
                l = n().aab2efa9,
                c = n().ba21c289,
                d = (e) => `${e.fullName || ""} ${e.score || ""}`,
                m = (e, t, r, a, n) => {
                    const m = r && n ? ((e, t) => (e && t ? e.find((e) => e.id === t) : void 0))(r, n) : void 0,
                        p = (0, o.Z)(t),
                        u = e || "",
                        h = r && r[0] ? d(r[0]) : "",
                        g = r && r[1] ? d(r[1]) : "",
                        C = a || "",
                        b = m ? l({ winner: m.fullName }) : "",
                        y = t === i.D.Completed ? (m ? b : s) : C;
                    return c({ gameCategory: u, gameState: p, accessibleGameClockPeriod: y, teamOneLabel: h, teamTwoLabel: g });
                };
        },
        927389: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                n = r(247056),
                o = r(392237);
            const i = (0, r(523561).Z)({ loader: () => r.e("loader.FeedbackSheet").then(r.bind(r, 774426)) });
            var s = r(725516),
                l = r(851623);
            const c = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: r, isDisplayedOnMedia: o } = e,
                        s = a.useCallback((e) => (r ? a.createElement(i, { actionItems: r, onClose: e }) : null), [r]),
                        d = a.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return r && r.length > 0 ? a.createElement(n.Z, { onClick: d, renderActionMenu: s, style: c.curationControl, testID: l.Z.caret, withDarkBackground: o }) : null;
                });
        },
        93074: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(111677),
                n = r.n(a),
                o = r(810495);
            const i = n().f178e38c,
                s = n().b6da6b02,
                l = n().i9f615c8,
                c = n().f897267a,
                d = n().f93c4b6a,
                m = (e) => {
                    switch (e) {
                        case o.D.Scheduled:
                            return i;
                        case o.D.InProgress:
                            return s;
                        case o.D.Completed:
                            return l;
                        case o.D.Postponed:
                            return c;
                        case o.D.Cancelled:
                            return d;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => S, H$: () => p, OB: () => v, Ww: () => d, YB: () => m, hj: () => C, qF: () => y });
            r(901951);
            var a = r(499627),
                n = r(390387);
            const o = "recentSearches",
                i = "rweb.recentSearches",
                s =
                    (e) =>
                    (t, r, { userPersistence: a }) =>
                        a.set(i, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, t) => {
                    let r = [];
                    if (e.user) {
                        const a = e.user;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== a.id));
                    } else if (e.event) {
                        const a = e.event;
                        r = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== a.id));
                    } else if (e && e.keyword) {
                        const a = e.keyword;
                        r = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== a.query));
                    } else if (e.list) {
                        const a = e.list;
                        r = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== a.id));
                    } else if (e.topic) {
                        const a = e.topic;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== a.id));
                    }
                    return r;
                },
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[o].recentSearches,
                m = (e) => d(e)[0] || null,
                p = (e) => e[o].fetched,
                u = "rweb/recentSearches/INIT_FROM_CACHE",
                h = (e) => ({ type: u, payload: e }),
                g = "rweb/recentSearches/REMOVE_QUERY",
                C =
                    (e) =>
                    (t, r, { userPersistence: a }) => {
                        t({ payload: e, type: g });
                        const o = r(),
                            i = d(o);
                        return (0, n.Qb)(o) ? t(s(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                y =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: b });
                        const a = t(),
                            o = d(a);
                        return (0, n.Qb)(a) ? e(s(o)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/ADD_QUERY",
                S =
                    (e) =>
                    (t, r, { userPersistence: a }) => {
                        t({ payload: e, type: f });
                        const o = r(),
                            i = d(o);
                        return (0, n.Qb)(o) ? t(s(i)) : Promise.resolve();
                    },
                v =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const a = t();
                        return p(a)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const a = t();
                                  return (0, n.Qb)(a)
                                      ? r
                                            .get(i)
                                            .then((t) => {
                                                e(h(t));
                                            })
                                            .catch(() => {
                                                e(h());
                                            })
                                      : (e(h()), Promise.resolve());
                              });
                    };
            a.Z.register({
                [o]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case f: {
                            const r = t.payload,
                                a = r ? l(r, e.recentSearches) : [];
                            return a.length > 49 && a.splice(49, 1), r && a.unshift(r), { ...e, recentSearches: a };
                        }
                        case g: {
                            const r = t.payload,
                                a = r ? l(r, e.recentSearches) : [];
                            return { ...e, recentSearches: a };
                        }
                        case b:
                            return { fetched: !0, recentSearches: [] };
                        case u:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        628526: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                n = r(111677),
                o = r.n(n),
                i = r(731708),
                s = r(392237);
            const l = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => a.createElement(o().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => a.createElement(o().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, r = !1) => a.createElement(i.ZP, { color: t, link: e.link, size: "subtext2", style: r && p.paddingStart, withHashflags: !0 }, e.name),
                p = s.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: r = "gray700" }) => {
                    const n = l(e, t);
                    return n ? a.createElement(i.ZP, { color: r, numberOfLines: 2, size: "subtext2", style: p.root }, n) : null;
                };
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                o = r(58881),
                i = r(530732),
                s = r(392237);
            const l = s.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: c, link: d, lower: m, onClick: p, stackLayoutLowerStyle: u, stackLayoutUpperStyle: h, upper: g, withInsetFocusRing: C = !0, withInteractiveStyling: b = !1 }) => {
                    const y = o.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, insetFocusRing: C }),
                        f = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [l.defaultUpperContainerStyle, h, c && { height: "auto" }] }, g), m ? a.createElement(n.Z, { style: [l.defaultLowerContainerStyle, u] }, m) : null);
                    return a.createElement(i.Z, { "aria-label": e, disabled: r, interactive: b, interactiveStyles: b ? y : void 0, link: d, onClick: p, style: [l.root, t] }, f);
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                n = r(165822),
                o = r(854582),
                i = r(325686),
                s = r(530525),
                l = r(731708),
                c = r(439592),
                d = r(626202),
                m = r(392237),
                p = r(615084);
            const u = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return a.createElement(i.Z, { style: C.teamNameContainer }, a.createElement(l.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: r },
                                } = this.props,
                                { imageError: n } = this.state,
                                o = (!r && !t) || n ? C.translucent : {},
                                l = r ? c.Z.exact(r.width / r.height) : c.Z.SQUARE;
                            return a.createElement(i.Z, { style: [C.imageContainer, o, e && C.compactImageContainer] }, a.createElement(s.Z, { "aria-label": "", aspectMode: l, image: r || t || "", onError: this._handleImageError, rounded: !r }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: r, winnerId: n } = this.props,
                                { color: o, id: s, score: c, secondaryScore: d } = r,
                                m = s === n,
                                h = !n,
                                b = t === p.D.Completed && !m && !h,
                                y = this._shouldRenderScore(),
                                f = this._getTeamScoreSize(u.SCORE),
                                S = d ? this._getTeamScoreSize(u.SECONDARY_SCORE) : void 0,
                                v = "Cricket" === e ? c?.split(" ")[0] : c;
                            return y ? a.createElement(i.Z, { style: [C.teamScore, b && C.losingTeamScore] }, a.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: f, weight: "heavy" }, v), d ? a.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: S, weight: "bold" }, d) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: t,
                                team: { secondaryScore: r },
                            } = this.props;
                            if (!!!r) return t ? "headline1" : "title4";
                            switch (e) {
                                case u.SCORE:
                                    return t ? "subtext2" : "body";
                                case u.SECONDARY_SCORE:
                                    return t ? "subtext3" : "subtext2";
                                default:
                                    return;
                            }
                        }),
                        (this._shouldRenderScore = () => {
                            const { gameState: e } = this.props;
                            return e === p.D.Completed || e === p.D.InProgress;
                        });
                }
                render() {
                    const {
                            fallbackColor: e,
                            isCompact: t,
                            team: { color: r },
                        } = this.props,
                        n = { backgroundColor: (r && `rgb(${r.red}, ${r.green}, ${r.blue})`) || m.default.theme.colors[e] },
                        o = this._shouldRenderScore(),
                        s = !t || !o;
                    return a.createElement(i.Z, { style: [C.root, n, t && C.compactRoot] }, this._renderImage(), s ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function g(e) {
                return e
                    ? (function (e) {
                          return (0, d.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            h.defaultProps = { isCompact: !1 };
            const C = m.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${m.default.theme.spaces.space1} + ${m.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                b = h;
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: r, gameState: n, isCompact: i, startTimeMillis: s, teams: l, winnerId: c } = this.props;
                            return a.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: r, gameState: n, startTimeMillis: s, teams: l, winnerId: c, withCategory: !i });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: r, gameState: n, isCompact: o, winnerId: i } = this.props,
                                { id: s } = e;
                            return a.createElement(b, { category: r, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: n, isCompact: o, key: s, team: e, winnerId: i });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: r, link: o, onClick: i, teams: s } = this.props;
                    if (s) {
                        const l = s && s.map(this._renderTeamRow);
                        return a.createElement(n.Z, { "aria-label": e, containerStyle: t, isCompact: r, link: o, lower: r ? void 0 : this._renderGameStatus(), onClick: i, upper: l, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            y.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => S });
            var a = r(202784),
                n = r(111677),
                o = r.n(n),
                i = r(731708),
                s = r(470397),
                l = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                m = o().d725a289,
                p = o().db355331,
                u = o().a8428d5e,
                h = o().a7aad8ba,
                g = o().e431f1aa,
                C = o().a7391708,
                b = o().d2dbfa92,
                y = o().cd734f66,
                f = o().c8891d06;
            class S extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? a.createElement(i.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const t = new Date(parseInt(e, 10)),
                                    r = ((e) => {
                                        const t = new Date().setHours(0, 0, 0, 0),
                                            r = t + c;
                                        return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1;
                                    })(t);
                                return -1 === r ? this._renderDateTime(t) : this._renderTodayTomorrow(r, t);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, t) => {
                            const r = m(t);
                            return a.createElement(s.Z, null, a.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? y : f), a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, r));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = m(e),
                                r = d(e);
                            return a.createElement(s.Z, null, a.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, r), a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: r } = this.props,
                                n = this._getWinnerName(),
                                o = e && n ? p({ team: n }) : t && r ? r : void 0;
                            return o ? a.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, o) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                r = e && e.find((e) => e.id === t);
                            return r && r.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        r = e === l.D.Scheduled,
                        n = e === l.D.InProgress,
                        o = e === l.D.Completed;
                    return a.createElement(
                        a.Fragment,
                        null,
                        r
                            ? this._renderGameScheduledDateTime()
                            : a.createElement(
                                  s.Z,
                                  null,
                                  a.createElement(
                                      i.ZP,
                                      { color: n ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case l.D.Scheduled:
                                                  return u;
                                              case l.D.InProgress:
                                                  return h;
                                              case l.D.Completed:
                                                  return g;
                                              case l.D.Postponed:
                                                  return C;
                                              case l.D.Cancelled:
                                                  return b;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(o, n),
                              ),
                        t ? this._renderCategory() : null,
                    );
                }
            }
            S.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.EventSummaryHandler.026b862a.js.map
