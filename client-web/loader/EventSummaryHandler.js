"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.EventSummaryHandler", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        449950: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807896),
                o = r(202784),
                i = r(530525),
                a = r(659651),
                l = r(111677),
                s = r.n(l),
                c = r(632658);
            const d = "image",
                m = s().f93bb3ee;
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": r, hideAcceptOverlay: l, shouldShowAltLabel: s, ...c } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(i.Z, (0, n.Z)({}, c, { "aria-label": r, onVariantSelection: e, previewMode: t, testID: d })), s ? o.createElement(a.Z, { align: "left", altLabel: r }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return o.createElement(c.Z, { acceptLabel: m, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        308192: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Be });
            var n = r(459643),
                o = r(479506),
                i = r(942893),
                a = r(351322),
                l = r(807896),
                s = r(202784),
                c = r(663550),
                d = r(159440),
                m = r(325686),
                p = r(638009),
                u = r(952428),
                h = r(872405),
                g = r(124964),
                v = r(392237),
                C = r(346252),
                y = r(864479),
                b = r(952793),
                w = r(946409),
                E = r(903019),
                S = r(618566),
                f = r(827922),
                x = r(265196),
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
                z = r(868634),
                H = r(741692),
                L = r(686689);
            const R = ({ badge: e, groupedTrends: t, hasProminentSocialContext: r, linkColor: n, promotedContent: o, promotedTrendDescription: i, publisher: a, publisherTitleColor: l = "text", richContext: c, scoreEvent: d, shouldTruncateTitle: p, style: u, supportingText: h, textColor: g = "gray700", timeString: v, title: C, titleFontSize: y = "body", titleWeight: b = "bold" }) => {
                    const w = k.Z.getTextDirection(C),
                        E = r ? void 0 : $.title;
                    return s.createElement(m.Z, { style: u }, s.createElement(_.ZP, { color: l, dir: w, numberOfLines: p ? 3 : void 0, size: y, style: E, weight: b, withHashflags: !0 }, C), r ? null : s.createElement(P.Z, { color: g, style: $.aboveTitle }, h ? s.createElement(_.ZP, { color: g, numberOfLines: 1, size: "subtext2" }, h) : null, a ? s.createElement(H.S3, { author: a, color: l, size: "subtext2" }) : null, e || v ? B(v, e, g) : null), s.createElement(M.Z, { groupedTrends: t, linkColor: n, textColor: g }), r ? s.createElement(m.Z, { style: $.belowTitle }, d ? V(d) : (e || v) && a ? O({ badge: e, publisher: a, textColor: g, timeString: v }) || B(v, e, g) : null) : null, o && o.advertiser ? s.createElement(s.Fragment, null, s.createElement(_.ZP, { color: g }, i), s.createElement(D.Z, { color: "white", promotedContent: o, style: $.promotedIndicator })) : null, c ? s.createElement(L.Z, { color: g, entities: c.entities, rtl: c.rtl, size: "subtext2", text: c.text }) : null);
                },
                O = ({ badge: e, publisher: t, textColor: r, timeString: n }) => {
                    const o = s.createElement(F.Z, { isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, nameSize: "subtext2", profileImageUrl: t.profile_image_url_https });
                    return s.createElement(P.Z, { style: $.publisherRow }, o, B(n, e, r));
                },
                V = (e) => {
                    const { category: t, eventState: r, gameClock: n, gameClockPeriod: o, participants: i, startTimeMillis: a, winnerId: l } = e;
                    return s.createElement(A.Z, { category: t, gameClock: n, gameClockPeriod: o, gameState: r, startTimeMillis: a, teams: i, winnerId: l, withCategory: !1 });
                },
                B = (e, t, r) => (t && t.text ? s.createElement(z.ZP, { type: "live" }, t.text) : e ? s.createElement(m.Z, { style: $.timestamp }, s.createElement(_.ZP, { color: r, numberOfLines: 1, size: "subtext2" }, e)) : null),
                $ = v.default.create((e) => ({ aboveTitle: { alignItems: "center", flexDirection: "row" }, belowTitle: { marginTop: e.spaces.space4 }, promotedIndicator: { marginTop: e.spaces.space12 }, publisherRow: { alignItems: "center" }, timestamp: { maxWidth: "50%" }, title: { marginVertical: e.spaces.space2 } })),
                W = s.memo(R);
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
                            const { category: e, eventState: r, gameClock: n, gameClockPeriod: i, participants: a, startTimeMillis: l, winnerId: s } = t.scoreEvent;
                            o = { category: e, eventState: r, gameClock: n, gameClockPeriod: i, startTimeMillis: l, participants: a, winnerId: s };
                        }
                        return { dataSaverMode: e, hasProminentSocialContext: r, id: t.id, scoreEvent: o, topic: n };
                    })
                    .propsFromActions(() => ({ saveAsRecentSearch: N.DI })),
                K = (e) => {
                    const { badge: t, dataSaverMode: r, feedbackItems: n, groupedTrends: i, hasProminentSocialContext: a, id: l, image: c, isInSidebar: d, link: g, onClick: v, onImpression: y, publisher: w, richContext: S, saveAsRecentSearch: f, scoreEvent: x, shouldStoreTypeaheadItem: Z, socialContext: T, supportingText: k, timeString: _, title: P, topic: M } = e,
                        D = (0, b.hC)("responsive_web_trends_ui_top_articles");
                    s.useEffect(() => {
                        y && y();
                    }, []);
                    const F = s.useCallback(() => {
                            v(), f && Z && Z(o.Z.ItemType.EVENT) && f({ event: { id: l, image: c || { url: "", height: 0, width: 0 }, supportText: k, title: P, type: E.g2.Event } });
                        }, [l, c, v, f, Z, k, P]),
                        A = s.useMemo(() => (n?.length ? s.createElement(I.Z, { feedbackItems: n }) : null), [n]);
                    return s.createElement(p.$6, null, (e) => s.createElement(u.Z, { link: e.withAnchorless(g), onClick: F, style: te.rootLink, withDarkerInteractiveBackground: d }, a && T ? s.createElement(h.Z, { rightControl: A, style: te.socialContextRow }, s.createElement(ee, { socialContext: T, topic: M })) : null, s.createElement(m.Z, { style: te.row }, D && s.createElement(C.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: a, scoreEvent: x, type: a ? "fixed" : void 0 }), s.createElement(W, { badge: t, groupedTrends: i, hasProminentSocialContext: a, publisher: w, richContext: S, scoreEvent: x, style: D ? te.detailsTrendUI : te.details, supportingText: k, timeString: _, title: P }), !D && s.createElement(C.Z, { dataSaverMode: r, icon: "news", image: c, isCellWithProminentSocialContext: a, scoreEvent: x, type: a ? "fixed" : void 0 }))));
                },
                X = ({ socialContext: e, topic: t }) => {
                    const { contextType: r, landingUrl: n, text: o, topicContext: i } = e,
                        a = i && (0, f.SJ)(i),
                        l = s.useMemo(() => (t ? s.createElement(s.Fragment, null, s.createElement(g.Z, { style: te.topicMiddot }), s.createElement(x.ZP, { isTransparent: !0, size: "smallCompact", textMode: Z.q.FollowTopic, topic: t })) : null), [t]);
                    return s.createElement(T.Z, { contextType: r, link: n ? (0, w.s9)(n) : void 0, rightControl: a ? l : void 0, text: o, topicData: t && i ? (0, S.P)(i) : void 0, weight: "bold", withLeftPadding: !1 });
                },
                ee = s.memo(X),
                te = v.default.create((e) => ({ detailsTrendUI: { flex: 1, marginStart: e.spaces.space12 }, details: { flex: 1, marginEnd: e.spaces.space12 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, rootLink: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, row: { flexDirection: "row" }, socialContextRow: { justifyContent: "space-between", marginBottom: e.spaces.space4 } })),
                re = (0, y.Z)(J(s.memo(K)));
            var ne = r(530732),
                oe = r(682474),
                ie = r(284702),
                ae = r(309854),
                le = r(439592),
                se = r(123751),
                ce = r(449950),
                de = r(310453);
            const me = { red: 0, green: 0, blue: 0 };
            class pe extends s.Component {
                render() {
                    const e = v.default.theme.aspectRatios.landscape;
                    return s.createElement(oe.Z, { ratio: e }, s.createElement(m.Z, { style: [ue.maxHeightWidth, this._getBackgroundColorStyle()] }, this._renderCover()), s.createElement(m.Z, { style: [v.default.absoluteFill, this._getGradientColorStyle()] }));
                }
                _renderCover() {
                    const { broadcast: e, coverMediaFromTweet: t, image: r, promotedContent: n, tweetId: o } = this.props;
                    if (e && e.broadcast_id && e.media_key) {
                        const t = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 },
                            r = { contentId: e.media_key, videoId: { type: "broadcast", id: e.broadcast_id }, variants: [] },
                            o = null != e.width && null != e.height ? { url: e.image_url ?? "", width: e.width, height: e.height } : void 0;
                        return s.createElement(de.Z, { "aria-label": "", aspectRatio: v.default.theme.aspectRatios.landscape, displayOptions: t, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, poster: o, promotedContent: n, showControls: !1, source: r, videoType: "video" });
                    }
                    if (o && t && "photo" !== t.type) {
                        const e = ie.Z.extractVideoProps(se.Z.forTweet(o), t),
                            r = { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 };
                        return s.createElement(de.Z, (0, l.Z)({}, e, { aspectRatio: v.default.theme.aspectRatios.landscape, displayOptions: r, forceLoop: !0, hideDataSaverAcceptOverlay: !0, hidePreviewPlayButton: !0, promotedContent: n, showControls: !1 }));
                    }
                    if (t) {
                        const e = t.ext_alt_text || "",
                            r = ae.Z.getOriginalImage(t);
                        return this._renderCoverImage(r, e);
                    }
                    return this._renderCoverImage(r);
                }
                _renderCoverImage(e, t = "") {
                    return e ? s.createElement(ce.Z, { "aria-label": t, aspectMode: le.Z.exact(v.default.theme.aspectRatios.landscape), cropCandidates: this._getCropCandidates(), hideAcceptOverlay: !0, image: e }) : null;
                }
                _getBackgroundColorStyle() {
                    const e = this._getDominantColor();
                    return { backgroundColor: e ? `rgb(${e.red},${e.green},${e.blue})` : v.default.theme.colors.primary };
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
            const ue = v.default.create((e) => ({ maxHeightWidth: { height: "100%", width: "100%" } }));
            var he = r(232418),
                ge = r(228356),
                ve = r(836255),
                Ce = r(919022);
            const ye = (e, t) => t.entry.content,
                be = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.momentId;
                    return r ? ge.Z.select(e, r) : void 0;
                },
                we = (e, t) => {
                    const r = t.entry.content.media?.mediaEntity?.tweetMedia?.tweetId;
                    return r ? ve.Z.select(e, r) : void 0;
                },
                Ee = (e, t) => {
                    const r = t.entry.content.promotedMetadata?.advertiserId;
                    return r ? Ce.ZP.select(e, r) : void 0;
                },
                Se = (e, t) => {
                    const { mediaEntity: r, mediaKey: n } = t.entry.content.media ?? {};
                    if (n && null != r?.broadcast) return r?.broadcast;
                },
                fe = ({ eventSummary: e, tweet: t }) => {
                    if (t) {
                        const r = e.media?.mediaKey?.id;
                        return t.extended_entities?.media?.find((e) => e.id_str === r);
                    }
                },
                xe = (0, j.Z)()
                    .propsFromState(() => ({ advertiser: Ee, eventSummary: ye, moment: be, tweet: we, broadcast: Se }))
                    .adjustStateProps(({ advertiser: e, broadcast: t, eventSummary: r, moment: n, tweet: o }) => {
                        const { promotedMetadata: i } = r;
                        return { coverMediaFromTweet: fe({ tweet: o, eventSummary: r }), manualCrops: (0, he.q8)(n), promotedContent: i ? { advertiser: { id_str: i.advertiserId }, advertiser_name: e ? e.name : void 0, impression_id: i.impressionId, disclosure_type: "NoDisclosure" } : void 0, promotedTrendDescription: i ? i.promotedTrendDescription : void 0, tweetId: o?.id_str, broadcast: t };
                    }),
                Ze = "eventHero",
                Te = "white",
                Ie = (e) => {
                    const { badge: t, broadcast: r, coverMediaFromTweet: n, feedbackItems: o, groupedTrends: i, image: a, link: l, manualCrops: c, onClick: d, onImpression: u, promotedContent: h, promotedTrendDescription: g, publisher: v, richContext: C, supportingText: y, timeString: w, title: E, tweetId: S } = e;
                    s.useEffect(() => {
                        u && u();
                    }, []);
                    const f = E.length > 80 ? "headline1" : "title4",
                        x = (0, b.hC)("rweb_sourcemap_migration");
                    return s.createElement(p.$6, null, (e) => s.createElement(s.Fragment, null, s.createElement(ne.Z, { link: e.withAnchorless(l), onClick: d, style: x && ke.containerRedesign, testID: Ze }, s.createElement(pe, { broadcast: r, coverMediaFromTweet: n, image: a, manualCrops: c, promotedContent: h, tweetId: S }), s.createElement(m.Z, { style: _e }, s.createElement(W, { badge: t, groupedTrends: i, linkColor: Te, promotedContent: h, promotedTrendDescription: g, publisher: v, publisherTitleColor: Te, richContext: C, shouldTruncateTitle: !0, supportingText: y, textColor: Te, timeString: w, title: E, titleFontSize: f, titleWeight: "heavy" }))), o?.length ? s.createElement(m.Z, { style: ke.menuContainer }, s.createElement(I.Z, { feedbackItems: o, isDisplayedOnMedia: !0 })) : null));
                },
                ke = v.default.create((e) => ({ containerRedesign: { marginHorizontal: e.spaces.space16 }, menuContainer: { position: "absolute", top: e.spaces.space12, end: e.spaces.space16 }, details: { justifyContent: "flex-end", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                _e = [v.default.absoluteFill, ke.details],
                Pe = xe(s.memo(Ie));
            var Me = r(614983),
                De = r.n(Me),
                Fe = r(71620),
                Ae = r(988566),
                ze = r(694180);
            const He = (e, t) => t.entry.content,
                Le = (e, t) => {
                    const r = He(0, t),
                        n = r.socialContext && r.socialContext.topicContext && r.socialContext.topicContext.topicId;
                    return n ? Q.Z.select(e, n) : void 0;
                },
                Re = (e, t) => {
                    const { publisherId: r } = He(0, t);
                    return r ? Ce.ZP.select(e, r) : void 0;
                },
                Oe = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, logTrend: n, promotedMetadata: o, ...i } = e,
                        a = s.useCallback(
                            (e) => {
                                o && o.promotedTrendId && n({ promoted_trend_id: o.promotedTrendId, impression_id: o.impressionId, event: e }).catch(r());
                            },
                            [o, n, r],
                        ),
                        m = s.useCallback(() => {
                            t.scribeAction("click"), a(c.AJ.SPOTLIGHT_CLICK);
                        }, [t, a]),
                        p = s.useCallback(() => {
                            t.scribeAction("impression"), a(c.AJ.SPOTLIGHT_IMPRESSION);
                        }, [t, a]);
                    switch (e.displayType) {
                        case d.Z.CellWithProminentSocialContext:
                        case d.Z.Cell:
                            return s.createElement(re, (0, l.Z)({}, i, { onClick: m, onImpression: p }));
                        case d.Z.Hero:
                            return s.createElement(Pe, (0, l.Z)({}, i, { onClick: m, onImpression: p }));
                        default:
                            return null;
                    }
                },
                Ve = (0, j.Z)()
                    .propsFromState(() => ({ eventSummary: He, publisher: Re, topic: Le }))
                    .adjustStateProps(({ eventSummary: e, publisher: t, topic: r }) => {
                        const { displayType: n, groupedTrends: o, promotedMetadata: i, richContext: a } = e,
                            l = (0, w.s9)(e.url);
                        De()(l, "link cannot be undefined in EventSummaryHero");
                        const s = (0, Ae.Du)({ isCellWithProminentSocialContext: n === d.Z.CellWithProminentSocialContext, socialContext: e.socialContext, topic: r }),
                            c = (o || []).map((e) => ({ name: e.name, link: (0, w.s9)(e.url) }));
                        return { badge: e.badge, displayType: e.displayType, groupedTrends: c, image: e.image, link: l, promotedMetadata: i, publisher: t, richContext: a, socialContext: s, supportingText: e.supportingText, timeString: e.timeString, title: e.title };
                    })
                    .propsFromActions(() => ({ logTrend: ze.dS, createLocalApiErrorHandler: (0, Fe.zr)("URT_EVENT_SUMMARY") }))
                    .withAnalytics()(s.memo(Oe)),
                Be = (e) =>
                    a
                        .iH({
                            component: Ve,
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
            var l = r(725516),
                s = r(851623);
            const c = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: r, isDisplayedOnMedia: i } = e,
                        l = n.useCallback((e) => (r ? n.createElement(a, { actionItems: r, onClose: e }) : null), [r]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return r && r.length > 0 ? n.createElement(o.Z, { onClick: d, renderActionMenu: l, style: c.curationControl, testID: s.Z.caret, withDarkBackground: i }) : null;
                });
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => w, H$: () => p, OB: () => E, Ww: () => d, YB: () => m, hj: () => v, qF: () => y });
            r(901951);
            var n = r(499627),
                o = r(390387);
            const i = "recentSearches",
                a = "rweb.recentSearches",
                l =
                    (e) =>
                    (t, r, { userPersistence: n }) =>
                        n.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, t) => {
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
                h = (e) => ({ type: u, payload: e }),
                g = "rweb/recentSearches/REMOVE_QUERY",
                v =
                    (e) =>
                    (t, r, { userPersistence: n }) => {
                        t({ payload: e, type: g });
                        const i = r(),
                            a = d(i);
                        return (0, o.Qb)(i) ? t(l(a)) : Promise.resolve();
                    },
                C = "rweb/recentSearches/CLEAR_ALL",
                y =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: C });
                        const n = t(),
                            i = d(n);
                        return (0, o.Qb)(n) ? e(l(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, r, { userPersistence: n }) => {
                        t({ payload: e, type: b });
                        const i = r(),
                            a = d(i);
                        return (0, o.Qb)(i) ? t(l(a)) : Promise.resolve();
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
                                                e(h(t));
                                            })
                                            .catch(() => {
                                                e(h());
                                            })
                                      : (e(h()), Promise.resolve());
                              });
                    };
            n.Z.register({
                [i]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case b: {
                            const r = t.payload,
                                n = r ? s(r, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), r && n.unshift(r), { ...e, recentSearches: n };
                        }
                        case g: {
                            const r = t.payload,
                                n = r ? s(r, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
                        }
                        case C:
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
                o = r(111677),
                i = r.n(o),
                a = r(731708),
                l = r(392237);
            const s = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, r = !1) => n.createElement(a.ZP, { color: t, link: e.link, size: "subtext2", style: r && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: r = "gray700" }) => {
                    const o = s(e, t);
                    return o ? n.createElement(a.ZP, { color: r, numberOfLines: 2, size: "subtext2", style: p.root }, o) : null;
                };
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.EventSummaryHandler.ffd91ffa.js.map
