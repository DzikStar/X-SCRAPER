"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.EventSummaryHandler"],
    {
        449950: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807896),
                o = r(202784),
                i = r(530525),
                a = r(659651),
                s = r(332920),
                l = r.n(s),
                c = r(632658);
            const d = "image",
                m = l().f93bb3ee;
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: s, shouldShowAltLabel: l, ...c } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(i.Z, (0, n.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: d })), l ? o.createElement(a.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return o.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        308192: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Ve });
            var n = r(459643),
                o = r(479506),
                i = r(942893),
                a = r(351322),
                s = r(807896),
                l = r(202784),
                c = r(663550),
                d = r(159440),
                m = r(325686),
                p = r(638009),
                u = r(952428),
                g = r(872405),
                h = r(124964),
                C = r(392237),
                y = r(346252),
                v = r(864479),
                b = r(952793),
                S = r(946409),
                E = r(903019),
                f = r(618566),
                x = r(827922),
                w = r(265196),
                Z = r(421575),
                T = r(988245),
                I = r(927389),
                k = r(442730),
                _ = r(731708),
                P = r(470397),
                M = r(628526),
                D = r(378729),
                F = r(366635),
                A = r(854582),
                H = r(868634),
                L = r(741692),
                R = r(686689);
            const O = ({ badge: e, groupedTrends: t, hasProminentSocialContext: r, linkColor: n, promotedContent: o, promotedTrendDescription: i, publisher: a, publisherTitleColor: s = "text", richContext: c, scoreEvent: d, shouldTruncateTitle: p, style: u, supportingText: g, textColor: h = "gray700", timeString: C, title: y, titleFontSize: v = "body", titleWeight: b = "bold" }) => {
                    const S = k.Z.getTextDirection(y),
                        E = r ? void 0 : B.title;
                    return l.createElement(m.Z, { style: u }, l.createElement(_.ZP, { color: s, dir: S, numberOfLines: p ? 3 : void 0, size: v, style: E, weight: b, withHashflags: !0 }, y), r ? null : l.createElement(P.Z, { color: h, style: B.aboveTitle }, g ? l.createElement(_.ZP, { color: h, numberOfLines: 1, size: "subtext2" }, g) : null, a ? l.createElement(L.S3, { author: a, color: s, size: "subtext2" }) : null, e || C ? V(C, e, h) : null), l.createElement(M.Z, { groupedTrends: t, linkColor: n, textColor: h }), r ? l.createElement(m.Z, { style: B.belowTitle }, d ? $(d) : (e || C) && a ? z({ badge: e, publisher: a, textColor: h, timeString: C }) || V(C, e, h) : null) : null, o && o.advertiser ? l.createElement(l.Fragment, null, l.createElement(_.ZP, { color: h }, i), l.createElement(D.Z, { color: "white", promotedContent: o, style: B.promotedIndicator })) : null, c ? l.createElement(R.Z, { color: h, entities: c.entities, rtl: c.rtl, size: "subtext2", text: c.text }) : null);
                },
                z = ({ badge: e, publisher: t, textColor: r, timeString: n }) => {
                    const o = l.createElement(F.Z, { isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, nameSize: "subtext2", profileImageUrl: t.profile_image_url_https });
                    return l.createElement(P.Z, { style: B.publisherRow }, o, V(n, e, r));
                },
                $ = (e) => {
                    const { category: t, eventState: r, gameClock: n, gameClockPeriod: o, participants: i, startTimeMillis: a, winnerId: s } = e;
                    return l.createElement(A.Z, { category: t, gameClock: n, gameClockPeriod: o, gameState: r, startTimeMillis: a, teams: i, winnerId: s, withCategory: !1 });
                },
                V = (e, t, r) => (t && t.text ? l.createElement(H.ZP, { type: "live" }, t.text) : e ? l.createElement(m.Z, { style: B.timestamp }, l.createElement(_.ZP, { color: r, numberOfLines: 1, size: "subtext2" }, e)) : null),
                B = C.default.create((e) => ({ aboveTitle: { alignItems: "center", flexDirection: "row" }, belowTitle: { marginTop: e.spaces.space4 }, promotedIndicator: { marginTop: e.spaces.space12 }, publisherRow: { alignItems: "center" }, timestamp: { maxWidth: "50%" }, title: { marginVertical: e.spaces.space2 } })),
                W = l.memo(O);
            var j = r(668214),
                N = r(204744),
                U = r(38562),
                Q = r(466380);
            const q = (e, t) => t.entry.content,
                G = (e, t) => {
                    const r = q(0, t),
                        n = r.socialContext && r.socialContext.topicContext && r.socialContext.topicContext.topicId;
                    return n ? Q.Z.select(e, n) : void 0;
                },
                Y = (e, t) => t.entry.content.displayType === d.Z.CellWithProminentSocialContext,
                J = (0, j.Z)()
                    .propsFromState(() => ({ dataSaverMode: U.IX, eventSummary: q, hasProminentSocialContext: Y, topic: G }))
                    .adjustStateProps(({ dataSaverMode: e, eventSummary: t, hasProminentSocialContext: r, topic: n }) => {
                        let o;
                        if (r && t.scoreEvent) {
                            const { category: e, eventState: r, gameClock: n, gameClockPeriod: i, participants: a, startTimeMillis: s, winnerId: l } = t.scoreEvent;
                            o = { category: e, eventState: r, gameClock: n, gameClockPeriod: i, startTimeMillis: s, participants: a, winnerId: l };
                        }
                        return { dataSaverMode: e, hasProminentSocialContext: r, id: t.id, scoreEvent: o, topic: n };
                    })
                    .propsFromActions(() => ({ saveAsRecentSearch: N.DI })),
                K = (e) => {
                    const { badge: t, dataSaverMode: r, feedbackItems: n, groupedTrends: i, hasProminentSocialContext: a, id: s, image: c, isInSidebar: d, link: h, onClick: C, onImpression: v, publisher: S, richContext: f, saveAsRecentSearch: x, scoreEvent: w, shouldStoreTypeaheadItem: Z, socialContext: T, supportingText: k, timeString: _, title: P, topic: M } = e,
                        D = (0, b.hC)("responsive_web_trends_ui_top_articles");
                    l.useEffect(() => {
                        v && v();
                    }, []);
                    const F = l.useCallback(() => {
                            C(), x && Z && Z(o.Z.ItemType.EVENT) && x({ event: { id: s, image: c || { url: "", height: 0, width: 0 }, supportText: k, title: P, type: E.g2.Event } });
                        }, [s, c, C, x, Z, k, P]),
                        A = l.useMemo(() => (n?.length ? l.createElement(I.Z, { feedbackItems: n }) : null), [n]);
                    return l.createElement(p.$6, null, (e) => l.createElement(u.Z, { link: e.withAnchorless(h), onClick: F, style: te.rootLink, withDarkerInteractiveBackground: d }, a && T ? l.createElement(g.Z, { rightControl: A, style: te.socialContextRow }, l.createElement(ee, { socialContext: T, topic: M })) : null, l.createElement(m.Z, { style: te.row }, D && l.createElement(y.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: a, scoreEvent: w, type: a ? "fixed" : void 0 }), l.createElement(W, { badge: t, groupedTrends: i, hasProminentSocialContext: a, publisher: S, richContext: f, scoreEvent: w, style: D ? te.detailsTrendUI : te.details, supportingText: k, timeString: _, title: P }), !D && l.createElement(y.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: a, scoreEvent: w, type: a ? "fixed" : void 0 }))));
                },
                X = ({ socialContext: e, topic: t }) => {
                    const { contextType: r, landingUrl: n, text: o, topicContext: i } = e,
                        a = i && (0, x.SJ)(i),
                        s = l.useMemo(() => (t ? l.createElement(l.Fragment, null, l.createElement(h.Z, { style: te.topicMiddot }), l.createElement(w.ZP, { isTransparent: !0, size: "smallCompact", textMode: Z.q.FollowTopic, topic: t })) : null), [t]);
                    return l.createElement(T.Z, { contextType: r, link: n ? (0, S.s9)(n) : void 0, rightControl: a ? s : void 0, text: o, topicData: t && i ? (0, f.P)(i) : void 0, weight: "bold", withLeftPadding: !1 });
                },
                ee = l.memo(X),
                te = C.default.create((e) => ({ detailsTrendUI: { flex: 1, marginStart: e.spaces.space12 }, details: { flex: 1, marginEnd: e.spaces.space12 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, rootLink: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, row: { flexDirection: "row" }, socialContextRow: { justifyContent: "space-between", marginBottom: e.spaces.space4 } })),
                re = (0, v.Z)(J(l.memo(K)));
            var ne = r(530732),
                oe = r(682474),
                ie = r(284702),
                ae = r(309854),
                se = r(439592),
                le = r(123751),
                ce = r(449950),
                de = r(310453);
            const me = { red: 0, green: 0, blue: 0 };
            class pe extends l.Component {
                render() {
                    const e = C.default.theme.aspectRatios.landscape;
                    return l.createElement(oe.Z, { ratio: e }, l.createElement(m.Z, { style: [ue.maxHeightWidth, this._getBackgroundColorStyle()] }, this._renderCover()), l.createElement(m.Z, { style: [C.default.absoluteFill, this._getGradientColorStyle()] }));
                }
                _renderCover() {
                    const { broadcast: e, coverMediaFromTweet: t, image: r, promotedContent: n, tweetId: o } = this.props;
                    if (e && e.broadcast_id && e.media_key) {
                        const t = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 },
                            r = { contentId: e.media_key, videoId: { type: "broadcast", id: e.broadcast_id }, variants: [] },
                            o = null != e.width && null != e.height ? { url: e.image_url ?? "", width: e.width, height: e.height } : void 0;
                        return l.createElement(de.Z, { "aria-label": "", aspectRatio: C.default.theme.aspectRatios.landscape, displayOptions: t, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, poster: o, promotedContent: n, showControls: !1, source: r, videoType: "video" });
                    }
                    if (o && t && "photo" !== t.type) {
                        const e = ie.Z.extractVideoProps(le.Z.forTweet(o), t),
                            r = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 };
                        return l.createElement(de.Z, (0, s.Z)({}, e, { aspectRatio: C.default.theme.aspectRatios.landscape, displayOptions: r, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, promotedContent: n, showControls: !1 }));
                    }
                    if (t) {
                        const e = t.ext_alt_text || "",
                            r = ae.Z.getOriginalImage(t);
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
                    return t || (e && ae.Z.getCropCandidates(e));
                }
                _getDominantColor() {
                    const { coverMediaFromTweet: e } = this.props;
                    return e && ae.Z.getBackgroundColor(e);
                }
            }
            const ue = C.default.create((e) => ({ maxHeightWidth: { height: "100%", width: "100%" } }));
            var ge = r(232418),
                he = r(228356),
                Ce = r(836255),
                ye = r(919022);
            const ve = (e, t) => t.entry.content,
                be = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.momentId;
                    return r ? he.Z.select(e, r) : void 0;
                },
                Se = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.tweetId;
                    return r ? Ce.Z.select(e, r) : void 0;
                },
                Ee = (e, t) => {
                    const r = t.entry.content.promotedMetadata?.advertiserId;
                    return r ? ye.ZP.select(e, r) : void 0;
                },
                fe = (e, t) => {
                    const { mediaEntity: r, mediaKey: n } = t.entry.content.media ?? {};
                    if (n && null != r?.broadcast) return r?.broadcast;
                },
                xe = ({ eventSummary: e, tweet: t }) => {
                    if (t) {
                        const r = e.media?.mediaKey?.id;
                        return t.extended_entities?.media?.find((e) => e.id_str === r);
                    }
                },
                we = (0, j.Z)()
                    .propsFromState(() => ({ advertiser: Ee, eventSummary: ve, moment: be, tweet: Se, broadcast: fe }))
                    .adjustStateProps(({ advertiser: e, broadcast: t, eventSummary: r, moment: n, tweet: o }) => {
                        const { promotedMetadata: i } = r;
                        return { coverMediaFromTweet: xe({ tweet: o, eventSummary: r }), manualCrops: (0, ge.q8)(n), promotedContent: i ? { advertiser: { id_str: i.advertiserId }, advertiser_name: e ? e.name : void 0, impression_id: i.impressionId, disclosure_type: "NoDisclosure" } : void 0, promotedTrendDescription: i ? i.promotedTrendDescription : void 0, tweetId: o?.id_str, broadcast: t };
                    }),
                Ze = "eventHero",
                Te = "white",
                Ie = (e) => {
                    const { badge: t, broadcast: r, coverMediaFromTweet: n, feedbackItems: o, groupedTrends: i, image: a, link: s, manualCrops: c, onClick: d, onImpression: u, promotedContent: g, promotedTrendDescription: h, publisher: C, richContext: y, supportingText: v, timeString: S, title: E, tweetId: f } = e;
                    l.useEffect(() => {
                        u && u();
                    }, []);
                    const x = E.length > 80 ? "headline1" : "title4",
                        w = (0, b.hC)("rweb_sourcemap_migration");
                    return l.createElement(p.$6, null, (e) => l.createElement(l.Fragment, null, l.createElement(ne.Z, { link: e.withAnchorless(s), onClick: d, style: w && ke.containerRedesign, testID: Ze }, l.createElement(pe, { broadcast: r, coverMediaFromTweet: n, image: a, manualCrops: c, promotedContent: g, tweetId: f }), l.createElement(m.Z, { style: _e }, l.createElement(W, { badge: t, groupedTrends: i, linkColor: Te, promotedContent: g, promotedTrendDescription: h, publisher: C, publisherTitleColor: Te, richContext: y, shouldTruncateTitle: !0, supportingText: v, textColor: Te, timeString: S, title: E, titleFontSize: x, titleWeight: "heavy" }))), o?.length ? l.createElement(m.Z, { style: ke.menuContainer }, l.createElement(I.Z, { feedbackItems: o, isDisplayedOnMedia: !0 })) : null));
                },
                ke = C.default.create((e) => ({ containerRedesign: { marginHorizontal: e.spaces.space16 }, menuContainer: { position: "absolute", top: e.spaces.space12, end: e.spaces.space16 }, details: { justifyContent: "flex-end", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                _e = [C.default.absoluteFill, ke.details],
                Pe = we(l.memo(Ie));
            var Me = r(614983),
                De = r.n(Me),
                Fe = r(71620),
                Ae = r(988566),
                He = r(694180);
            const Le = (e, t) => t.entry.content,
                Re = (e, t) => {
                    const r = Le(0, t),
                        n = r.socialContext && r.socialContext.topicContext && r.socialContext.topicContext.topicId;
                    return n ? Q.Z.select(e, n) : void 0;
                },
                Oe = (e, t) => {
                    const { publisherId: r } = Le(0, t);
                    return r ? ye.ZP.select(e, r) : void 0;
                },
                ze = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, logTrend: n, promotedMetadata: o, ...i } = e,
                        a = l.useCallback(
                            (e) => {
                                o && o.promotedTrendId && n({ promoted_trend_id: o.promotedTrendId, impression_id: o.impressionId, event: e }).catch(r());
                            },
                            [o, n, r],
                        ),
                        m = l.useCallback(() => {
                            t.scribeAction("click"), a(c.AJ.SPOTLIGHT_CLICK);
                        }, [t, a]),
                        p = l.useCallback(() => {
                            t.scribeAction("impression"), a(c.AJ.SPOTLIGHT_IMPRESSION);
                        }, [t, a]);
                    switch (e.displayType) {
                        case d.Z.CellWithProminentSocialContext:
                        case d.Z.Cell:
                            return l.createElement(re, (0, s.Z)({}, i, { onClick: m, onImpression: p }));
                        case d.Z.Hero:
                            return l.createElement(Pe, (0, s.Z)({}, i, { onClick: m, onImpression: p }));
                        default:
                            return null;
                    }
                },
                $e = (0, j.Z)()
                    .propsFromState(() => ({ eventSummary: Le, publisher: Oe, topic: Re }))
                    .adjustStateProps(({ eventSummary: e, publisher: t, topic: r }) => {
                        const { displayType: n, groupedTrends: o, promotedMetadata: i, richContext: a } = e,
                            s = (0, S.s9)(e.url);
                        De()(s, "link cannot be undefined in EventSummaryHero");
                        const l = (0, Ae.Du)({ isCellWithProminentSocialContext: n === d.Z.CellWithProminentSocialContext, socialContext: e.socialContext, topic: r }),
                            c = (o || []).map((e) => ({ name: e.name, link: (0, S.s9)(e.url) }));
                        return { badge: e.badge, displayType: e.displayType, groupedTrends: c, image: e.image, link: s, promotedMetadata: i, publisher: t, richContext: a, socialContext: l, supportingText: e.supportingText, timeString: e.timeString, title: e.title };
                    })
                    .propsFromActions(() => ({ logTrend: He.dS, createLocalApiErrorHandler: (0, Fe.zr)("URT_EVENT_SUMMARY") }))
                    .withAnalytics()(l.memo(ze)),
                Ve = (e) =>
                    a
                        .iH({
                            component: $e,
                            getScribeDataItem: (e) =>
                                ((e) => {
                                    const { promotedMetadata: t } = e.content,
                                        r = e.content.id,
                                        n = { item_type: o.Z.ItemType.EVENT, event_details: { event_id: r }, ...i.Z.getAllSurfaceDetails(e.itemMetadata.clientEventInfo) };
                                    return t && ((n.disclosure_type = t.disclosureType), (n.promoted_id = t.impressionId)), n;
                                })(e),
                            isFocusable: (0, n.Z)(!0),
                        })
                        .getHandler(() => ({ ...e }));
        },
        927389: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(247056),
                i = r(392237);
            const a = (0, r(523561).Z)({ loader: () => r.e("loader.FeedbackSheet").then(r.bind(r, 774426)) });
            var s = r(725516),
                l = r(851623);
            const c = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: r, isDisplayedOnMedia: i } = e,
                        s = n.useCallback((e) => (r ? n.createElement(a, { actionItems: r, onClose: e }) : null), [r]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return r && r.length > 0 ? n.createElement(o.Z, { onClick: d, renderActionMenu: s, style: c.curationControl, testID: l.Z.caret, withDarkBackground: i }) : null;
                });
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => S, H$: () => p, OB: () => E, Ww: () => d, YB: () => m, hj: () => C, qF: () => v });
            r(901951);
            var n = r(499627),
                o = r(390387);
            const i = "recentSearches",
                a = "rweb.recentSearches",
                s =
                    (e) =>
                    (t, r, { userPersistence: n }) =>
                        n.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, t) => {
                    let r = [];
                    if (e.user) {
                        const n = e.user;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        r = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        r = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        r = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
                    }
                    return r;
                },
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[i].recentSearches,
                m = (e) => d(e)[0] || null,
                p = (e) => e[i].fetched,
                u = "rweb/recentSearches/INIT_FROM_CACHE",
                g = (e) => ({ type: u, payload: e }),
                h = "rweb/recentSearches/REMOVE_QUERY",
                C =
                    (e) =>
                    (t, r, { userPersistence: n }) => {
                        t({ payload: e, type: h });
                        const i = r(),
                            a = d(i);
                        return (0, o.Qb)(i) ? t(s(a)) : Promise.resolve();
                    },
                y = "rweb/recentSearches/CLEAR_ALL",
                v =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: y });
                        const n = t(),
                            i = d(n);
                        return (0, o.Qb)(n) ? e(s(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/ADD_QUERY",
                S =
                    (e) =>
                    (t, r, { userPersistence: n }) => {
                        t({ payload: e, type: b });
                        const i = r(),
                            a = d(i);
                        return (0, o.Qb)(i) ? t(s(a)) : Promise.resolve();
                    },
                E =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const n = t();
                        return p(n)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const n = t();
                                  return (0, o.Qb)(n)
                                      ? r
                                            .get(a)
                                            .then((t) => {
                                                e(g(t));
                                            })
                                            .catch(() => {
                                                e(g());
                                            })
                                      : (e(g()), Promise.resolve());
                              });
                    };
            n.Z.register({
                [i]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case b: {
                            const r = t.payload,
                                n = r ? l(r, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), r && n.unshift(r), { ...e, recentSearches: n };
                        }
                        case h: {
                            const r = t.payload,
                                n = r ? l(r, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
                        }
                        case y:
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
            var n = r(202784),
                o = r(332920),
                i = r.n(o),
                a = r(731708),
                s = r(392237);
            const l = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, r = !1) => n.createElement(a.ZP, { color: t, link: e.link, size: "subtext2", style: r && p.paddingStart, withHashflags: !0 }, e.name),
                p = s.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: r = "gray700" }) => {
                    const o = l(e, t);
                    return o ? n.createElement(a.ZP, { color: r, numberOfLines: 2, size: "subtext2", style: p.root }, o) : null;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.EventSummaryHandler.0412e88a.js.map
