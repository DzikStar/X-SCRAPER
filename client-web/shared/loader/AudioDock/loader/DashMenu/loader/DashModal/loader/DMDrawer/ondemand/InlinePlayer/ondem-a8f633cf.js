"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"],
    {
        794215: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                i = n(202784),
                a = n(111677),
                o = n.n(a),
                s = n(731708),
                l = n(392237),
                d = n(818080);
            function c(e) {
                const { accessibilityLabelTime: t, countdown: n, humanReadable: a, narrow: o, short: l, style: c, timeMs: p, withCountdownSymbol: h, ...Z } = e;
                if ("number" != typeof p) return null;
                const _ = n ? Math.ceil : Math.floor,
                    T = d.Z.getTimeUnits(p, _, l),
                    S = v(T, e),
                    M = d.Z.formatAsISO8601Duration(T);
                let R;
                R =
                    o || l || a
                        ? I(
                              T,
                              (function (e) {
                                  if (e.narrow) return { seconds: g, minutes: w, hours: E };
                                  if (e.short) return { seconds: y, minutes: b, hours: x };
                                  return { seconds: f, minutes: C, hours: k };
                              })(e),
                          ).trim()
                        : S;
                const P = [u.timestamp, c],
                    L = t ? t(S) : m({ time: S });
                return i.createElement(s.ZP, (0, r.Z)({}, Z, { "aria-label": L, hoverLabel: { label: L }, style: P }), i.createElement("time", { dateTime: M }, R));
            }
            const u = l.default.create((e) => ({ timestamp: { flexShrink: 0, whiteSpace: "nowrap", fontVariant: "tabular-nums" } })),
                p = (e) => (e >= 10 ? e : `0${e}`),
                m = o().ebe41367,
                h = o().efce3d9b,
                g = o().e8733ed9,
                y = o().i61fef37,
                f = o().i3b7a017,
                w = o().be59d8c3,
                b = o().ba705e27,
                C = o().ie5d110f,
                E = o().i3d087db,
                x = o().j86b0d8d,
                k = o().df5f11b3;
            const I = ({ hours: e, minutes: t, seconds: n }, r) => {
                    if (!(n || t || e)) return r.seconds(0);
                    return h({ seconds: n ? r.seconds(n) : "", minutes: t ? r.minutes(t) : "", hours: e ? r.hours(e) : "" }).replace(/\s+/g, " ");
                },
                v = (e, { withCountdownSymbol: t }) => {
                    const n = (({ hours: e, minutes: t, seconds: n }) => {
                        const r = p(n),
                            i = `${e ? p(t) : t}:${r}`;
                        return e ? `${e}:${i}` : i;
                    })(e);
                    return t ? `-${n}` : n;
                };
        },
        54989: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(325686),
                a = n(2138),
                o = n(731708),
                s = n(154003),
                l = n(666305),
                d = n(392237);
            const c = () => {
                const e = r.useRef(null),
                    [t, n] = r.useState(150);
                r.useLayoutEffect(() => {
                    const t = e.current;
                    if (t) {
                        const e = (0, a.Z)(n, 300);
                        return (
                            l.Z.observe(t, (t) => {
                                e(t.contentRect.width);
                            }),
                            () => {
                                l.Z.unobserveAll(t);
                            }
                        );
                    }
                }, []);
                return [t <= 150, e];
            };
            function u({ actionButtonWrapperStyle: e, actionLink: t, actionText: n, children: a, ctaLink: l, ctaText: d, id: u, lang: m, onActionClick: h, style: g }) {
                const [y, f] = c();
                return r.createElement(i.Z, { ref: f, style: [p.root, y && p.rootCompact, g] }, r.createElement(i.Z, { style: [p.textWrapper, y && p.textWrapperCompact] }, r.createElement(o.ZP, { color: "gray700", dir: "auto", id: u, lang: m }, a), d && l ? r.createElement(r.Fragment, null, " ", r.createElement(o.ZP, { dir: "auto", link: l }, d)) : null), n && (h || t) ? r.createElement(i.Z, { style: [p.buttonWrapper, y && p.buttonWrapperCompact, e] }, r.createElement(s.ZP, { borderColor: "transparent", link: t, onPress: h, size: "small", style: p.button }, n)) : null);
            }
            const p = d.default.create((e) => ({ root: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space12 }, rootCompact: { flexDirection: "column" }, textWrapper: { display: "block", flexShrink: 1, marginHorizontal: e.spaces.space12 }, textWrapperCompact: { marginHorizontal: e.spaces.space2 }, buttonWrapper: { marginVertical: `calc(-1 * ${e.componentDimensions.gutterVertical})` }, buttonWrapperCompact: { marginTop: e.spaces.space8, marginBottom: 0 }, button: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 } }));
        },
        401339: (e, t, n) => {
            n.d(t, { Z: () => a });
            const r = {},
                i = ["touchend", "touchmove", "touchstart"];
            const a = {
                isTouchSupported: () =>
                    i.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== r[e]) return r[e];
                                const n = document.createElement(t || "div"),
                                    i = `on${e}`;
                                let a = i in n;
                                return a || (n.setAttribute(i, "return;"), (a = "function" == typeof n[i])), (r[e] = a), a;
                            })(e),
                    ),
            };
        },
        981788: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(392237),
                o = n(823161);
            const s = ({ elbowHeight: e, style: t, wideElbow: n, width: a }) => r.createElement(i.Z, { style: [u.elbowWrapper, { flexBasis: a }, t] }, r.createElement(i.Z, { style: [u.elbow, { height: e, width: n ? 18 : 12 }] })),
                l = ({ style: e, width: t }) => r.createElement(i.Z, { style: [{ flexBasis: t }, e] }),
                d = ({ style: e, width: t }) => r.createElement(i.Z, { style: [u.lineWrapper, { flexBasis: t }, e] }, r.createElement(i.Z, { style: u.line })),
                c = ({ elbowHeight: e, style: t, wideElbow: n, width: a }) => r.createElement(i.Z, { style: [u.lineElbowWrapper, { flexBasis: a }, t] }, r.createElement(i.Z, { style: [u.elbow, u.lineElbow, { height: e, width: n ? 18 : 12 }] }), r.createElement(i.Z, { style: u.line })),
                u = a.default.create((e) => ({ lineWrapper: { alignItems: "center" }, line: { ...a.default.absoluteFillObject, backgroundColor: e.colors.gray200, marginHorizontal: "auto", width: e.componentDimensions.conversationLineWidth }, elbowWrapper: { overflow: "hidden" }, elbow: { marginStart: `calc(50% - ( ${e.componentDimensions.conversationLineWidth}px / 2 ))`, borderBottomStartRadius: e.borderRadii.small, borderStartWidth: e.componentDimensions.conversationLineWidth, borderBottomWidth: e.componentDimensions.conversationLineWidth, borderColor: e.colors.gray200, borderStyle: "solid" }, lineElbowWrapper: { alignItems: "center" }, lineElbow: { marginStart: void 0, position: "absolute", start: `calc(50% - ( ${e.componentDimensions.conversationLineWidth}px / 2 ))` } })),
                p = ({ indents: e, paddingTop: t, smallFirstCell: n = !1, style: i, wideElbow: u = !1, withElbow: p }) =>
                    r.createElement(
                        r.Fragment,
                        null,
                        e
                            ? e.map((m, h) => {
                                  const g = h === e.length - 1,
                                      y = `${0 === h ? (n ? o.default.getSizeSimple("large") : o.default.getSizeSimple(o.default.defaultSize)) : o.default.getSizeSimple("large")}px`,
                                      f = `calc(${t || 0}px + ${a.default.theme.spaces.space32} / 2)`,
                                      w = 0 === h ? { marginEnd: `calc(-1 * ${a.default.theme.spaces.space12})` } : {},
                                      b = [i, w];
                                  if (g) {
                                      if ("line" === m.displayType && p) return r.createElement(c, { elbowHeight: f, key: h, style: b, wideElbow: u, width: y });
                                      if ("gap" === m.displayType && p) return r.createElement(s, { elbowHeight: f, key: h, style: b, wideElbow: u, width: y });
                                  }
                                  return "line" === m.displayType ? r.createElement(d, { key: h, style: b, width: y }) : "gap" === m.displayType ? r.createElement(l, { key: h, style: b, width: y }) : null;
                              })
                            : null,
                    );
        },
        530338: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                i = n(325686),
                a = n(111677),
                o = n.n(a),
                s = n(530525),
                l = n(731708),
                d = n(439592),
                c = n(235902),
                u = n(868634),
                p = n(912838),
                m = n(392237);
            const h = o().dc33d78a;
            const g = m.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, marginTop: e.spaces.space12 }, rootQuote: { marginTop: e.spaces.space4, borderRadius: e.borderRadii.large }, coverImage: { borderTopStartRadius: e.borderRadii.large, borderTopEndRadius: e.borderRadii.large, overflow: "hidden" }, coverImageQuote: { borderRadius: e.borderRadii.large, overflow: "hidden", marginBottom: e.spaces.space12 }, title: { marginBottom: e.spaces.space8 }, text: { padding: e.spaces.space12 }, labelOnImage: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, labeltext: { marginBottom: e.spaces.space12 } })),
                y = function ({ articleEntity: e, hasSensitiveContent: t, mediaVisibilityResults: n, renderInQuoteTweet: a, style: o }) {
                    const y = r.useMemo(() => {
                            const t = e.cover_media?.media_info;
                            if (t) return { height: t.original_img_height ?? 0, url: t.original_img_url ?? "", width: t.original_img_width ?? 0 };
                        }, [e]),
                        f = c.ZP.useProps().mediaVisibilityResultsEnabled(),
                        w = e.preview_text ? `${e.preview_text.trim()}...` : null,
                        b = f && n?.blurred_image_interstitial;
                    return r.useCallback((e) => ((t || b) && e ? r.createElement(p.Z, { mediaVisibilityResults: b ? n : void 0, revealableTombstoneConfig: p.Z.sensitiveMediaVisibilityResultsTombstoneConfig }, e) : e), [t, b, n])(r.createElement(i.Z, { style: [a ? g.rootQuote : g.root, o] }, y ? r.createElement(i.Z, { style: a ? g.coverImageQuote : g.coverImage, testID: "article-cover-image" }, r.createElement(s.Z, { "aria-label": h, aspectMode: d.Z.exact(m.default.theme.aspectRatios.articleBanner), image: y }), r.createElement(u.ZP, { background: "translucentBlack55", bold: !0, style: g.labelOnImage, type: "article" })) : null, r.createElement(i.Z, { style: a ? null : g.text }, y ? null : r.createElement(u.ZP, { background: "gray0", bold: !0, style: g.labeltext, type: "article" }), r.createElement(l.ZP, { dir: "auto", size: "headline2", style: g.title, weight: "heavy" }, e.title), w ? r.createElement(l.ZP, { dir: "auto", numberOfLines: 4 }, w) : null)));
                };
        },
        16037: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(111677),
                a = n.n(i),
                o = n(731708),
                s = n(392237);
            const l = a().e1b95ab0,
                d = a().i308d42c,
                c = a().h092d520,
                u = (e, t) => ("latest" === e ? l : "inline" === t ? d : c);
            function p({ editType: e, id: t, link: n, textMode: i, textSize: a }) {
                return r.createElement(r.Fragment, null, r.createElement(o.ZP, { color: "gray700", link: n, style: m.root }, i && r.createElement(o.ZP, { size: a }, u(e, i))));
            }
            const m = s.default.create((e) => ({ icon: { fontSize: e.fontSizes.subtext1 }, iconTextSpacing: { marginEnd: e.spaces.space4 }, root: { alignSelf: "flex-start", flexDirection: "row" } }));
        },
        103737: (e, t, n) => {
            n.d(t, { Z: () => G });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                l = n(254944),
                d = n(912021),
                c = n(459679),
                u = n(908478),
                p = n(370751),
                m = n(123751),
                h = n(145858),
                g = n(731708),
                y = n(235902),
                f = n(58881),
                w = n(530732),
                b = n(522171),
                C = n(22379),
                E = n(309854),
                x = n(65118),
                k = n(175848),
                I = n(284702),
                v = n(912838),
                Z = n(840590),
                _ = n(557487),
                T = n(336373),
                S = n(392237),
                M = n(383507),
                R = n(81400),
                P = n(666418);
            const L = ({ description: e, title: t }) => (t || e ? i.createElement(a.Z, { style: A.metadataContainer }, t ? i.createElement(g.ZP, { style: A.metadata, weight: "bold", withHashflags: !0 }, t) : null, e ? i.createElement(g.ZP, { style: A.metadata }, e) : null) : null),
                A = S.default.create((e) => ({ metadata: { marginBottom: e.spaces.space4 }, metadataContainer: { flex: 1, flexDirection: "column", paddingBottom: e.spaces.space4, paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 } })),
                B = s().b74bf8b8,
                D = s().ha9ed08c,
                U = s().bff61470;
            class z extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._autoplayGroupEmitter = null),
                        (this._getMedia = () => {
                            const { authorId: e, authorScreenName: t, caption: n, forwardPivotInfo: r, hideAcceptOverlay: i, loggedInUserId: a, mediaAltTranslations: o, mediaDetails: s, nudges: l, onPlaybackStarted: d, preventPlayback: c, promotedContent: u, renderPrerollActionMenu: p, shouldShowAltLabelAlways: m, showAltTranslation: h, tweetCreatedAt: g, tweetId: y, tweetText: f, videoAspectRatio: w, videoOptions: b, withPostPlayback: C } = this.props;
                            return !this._autoplayGroupEmitter && s.length > 1 && (this._autoplayGroupEmitter = new R.Z()), this._getMediaMemoized(e, t, n, r, l, i, a, o, s, d, c, u, m, h, g, y, f, w, b, C, p);
                        }),
                        (this._getMediaMemoized = (0, d.Z)((e, t, n, r, i, a, o, s = {}, l, d, u, p, h, g, y, f, w, b, C, x, k) =>
                            (0, c.Z)(l, (l, c) => {
                                const { expanded_url: v } = l;
                                if (!v) return null;
                                const Z = { pathname: v, state: { forwardPivotInfo: r, nudges: i } };
                                if ("photo" === l.type) {
                                    const t = "photo" === l.type && l.original_info,
                                        r = E.Z.getOriginalImage(l);
                                    return t && r && { type: "photo", "aria-label": g ? s[l.id_str] : l.ext_alt_text || B, "aria-describedby": n ? `caption-${f}` : void 0, backgroundColor: E.Z.getBackgroundColor(l), cropCandidates: E.Z.getCropCandidates(l), expandedUrl: Z, height: r.height, id_str: l.id_str, shouldShowAltLabel: !(!l.ext_alt_text || (e !== o && !h)), url: r.url, width: r.width };
                                }
                                if (I.Z.isVideo(l)) {
                                    const e = l,
                                        n = I.Z.extractVideoProps(m.Z.forTweet(f), e, void 0, r, h),
                                        i = this._autoplayGroupEmitter ? { autoplayGroupEmitter: this._autoplayGroupEmitter, mediaIndex: c } : void 0;
                                    return n && { ...n, ...C, additionalMediaInfo: e.additional_media_info, aspectRatio: b || n.aspectRatio, authorScreenName: t, autoplayGroupOptions: i, expandedUrl: Z, hideDataSaverAcceptOverlay: a, onPlaybackStarted: d, preventPlayback: u, promotedContent: p, tweetCreatedAt: y, tweetId: f, tweetText: w, withPostPlayback: x, type: e.type, renderPrerollActionMenu: k };
                                }
                                return null;
                            }),
                        )),
                        (this._getSourceUser = () => {
                            const { mediaDetails: e } = this.props;
                            return e && e[0] && e[0].additional_media_info && e[0].additional_media_info.source_user;
                        }),
                        (this._getOpenPhotoModal = (e) => () => {
                            const { onClick: t } = this.props,
                                n = "string" == typeof e[0].expandedUrl ? e[0].expandedUrl : e[0].expandedUrl?.pathname;
                            t?.(), n && Z.default?.push(n);
                        });
                }
                shouldComponentUpdate(e) {
                    return !(0, u.Z)(this.props, e);
                }
                render() {
                    const { hasSensitiveMedia: e, id: t, mediaVisibilityResults: n, style: r, withHalvedMediaSize: o } = this.props;
                    return i.createElement(y.ZP.UseProps, null, ({ canVerifiedCrawlerConsumeSensitiveMedia: s, mediaVisibilityResultsEnabled: l, sensitiveMediaWarningsEnabled: d, tweetMediaItemImmersiveViewerEntryPoint: c, withEdgeToEdgeContent: u, withMediaCarousel: p, withVodTweetDetailAttribution: m }) => {
                        const h = this.sensitiveMediaWarnings,
                            g = h.size && d(),
                            y = n?.blurred_image_interstitial && l();
                        let f;
                        return (f = y || (l() && e && !g) ? v.Z.sensitiveMediaVisibilityResultsTombstoneConfig : g ? v.Z.sensitiveMediaWarningTombstoneConfig : v.Z.sensitiveMediaTombstoneConfig), i.createElement(T.Z.Provider, { namespace: { element: "media" } }, i.createElement(a.Z, { id: t, style: [o ? N.halvedMediaSize : null, r] }, !s() && (e || y || g) ? i.createElement(v.Z, { mediaVisibilityResults: y ? n : void 0, revealableTombstoneConfig: f, sensitiveMediaWarnings: g ? h : void 0, withRoundedCorners: !u() }, this._renderContent(c(), { withMediaCarousel: p })) : this._renderContent(c(), { withMediaCarousel: p }), this._renderMediaCaption(), this._renderMediaTags(), this._renderGrokAttribution(), this._renderMediaAttribution(m())));
                    });
                }
                _renderContent(e, { withMediaCarousel: t }) {
                    const { customHoverBackgroundColor: n, isCondensed: r, mediaContentStyles: o, showBorder: s, showRoundCorners: l } = this.props,
                        d = this._getMedia();
                    let c = null;
                    e && this._isFirstMediaItemVideo() ? (c = this._renderVideo(e)) : d.length >= 1 ? (c = this._renderMedia()) : this._isFirstMediaItemVideo() && (c = this._renderVideo());
                    const u = d.length >= 1 || this._isFirstMediaItemVideo(),
                        p = s && u,
                        m = d.length ? f.Z.generate({ backgroundColor: "transparent", color: S.default.theme.colors.primary, withFocusWithinFocusRing: !0, customHoverBackgroundColor: n }) : null;
                    return c ? (d.length > 1 && !r && t() ? i.createElement(a.Z, { style: o }, c, this._renderMediaMetadata()) : i.createElement(w.Z, { interactiveStyles: m, style: [p && N.itemWithBorder, l && N.itemWithRoundCorners, o] }, c, this._renderMediaMetadata())) : null;
                }
                _renderMedia() {
                    const { cacheLocationKey: e, containerAspectRatio: t, enableKeyboardShortcuts: n, hideAcceptOverlay: r, isCondensed: a, mediaMaxHeight: o, onClick: s, renderPhoto: l, renderVideo: d, singleImageMaxAspectRatio: c, singleImageMinAspectRatio: u, withCenterCrop: p, withLink: m } = this.props,
                        h = this._getMedia();
                    return i.createElement(b.Z, { enabled: n, handlers: { [b.Z.shortcuts.openMediaModal]: this._getOpenPhotoModal(h) } }, i.createElement(M.Z, { cacheLocationKey: e, containerAspectRatio: t, hideAcceptOverlay: r, isCondensed: a, media: h, mediaMaxHeight: o, onClick: s, renderPhoto: l, renderVideo: d, singleImageMaxAspectRatio: c, singleImageMinAspectRatio: u, withCenterCrop: p, withLink: m }));
                }
                _renderVideo(e) {
                    const { authorScreenName: t, forwardPivotInfo: n, hideAcceptOverlay: a, mediaDetails: o, onPlaybackStarted: s, parentTweetId: l, preventPlayback: d, promotedContent: c, shouldShowAltLabelAlways: u, tweetCreatedAt: p, tweetId: h, tweetText: g, videoAspectRatio: y, videoOptions: f, withPostPlayback: w } = this.props,
                        b = o[0],
                        C = b && "photo" !== b.type ? b : void 0,
                        E = b && "video" === b.type,
                        x = C && I.Z.extractVideoProps(m.Z.forTweet(h), C, void 0, n, u);
                    if (C && x) {
                        const n = { ...x, ...f, additionalMediaInfo: C.additional_media_info, aspectRatio: y || x.aspectRatio, authorScreenName: t, hideDataSaverAcceptOverlay: a, onPlaybackStarted: s, parentTweetId: l, preventPlayback: d, promotedContent: c, tweetCreatedAt: p, tweetId: h, tweetText: g, withPostPlayback: w };
                        return E && e ? i.createElement(P.Z, (0, r.Z)({}, n, { immersiveViewerUrl: e })) : i.createElement(P.Z, n);
                    }
                    return null;
                }
                _renderMediaMetadata() {
                    const { displayMediaMetadata: e, mediaDetails: t } = this.props,
                        [{ additional_media_info: n }] = t,
                        { description: r, title: a } = n || {};
                    return e ? i.createElement(L, { description: r, title: a }) : null;
                }
                _renderMediaTags() {
                    const { displayMediaTags: e, loggedInUserId: t, mediaDetails: n, mediaTagsLink: r, onClickMediaTags: a, withMediaTagsIcon: o } = this.props,
                        s = k.ZP.mergeTaggedUsers(n);
                    return e && r && s.length ? i.createElement(x.Z, { linkPath: r, loggedInUserId: t, onClick: a, size: o ? "body" : "subtext2", style: N.mediaTags, users: s, withIcon: o }) : null;
                }
                _renderGrokAttribution() {
                    const { mediaDetails: e, onGrokClick: t } = this.props,
                        n = e?.[0]?.media_results?.result?.grok_image_annotation;
                    if (!n) return null;
                    const r = 1 === e.length,
                        a = e[0].media_url_https,
                        o = e[0].id_str;
                    return i.createElement(
                        g.ZP,
                        { color: "gray700", size: "subtext2", style: N.mediaAttribution },
                        i.createElement(l.default, null),
                        " ",
                        D,
                        " ",
                        i.createElement(g.ZP, { color: "text", link: "/i/grok", weight: "bold", withInteractiveStyling: !0 }, "Grok"),
                        ".  ",
                        r &&
                            a &&
                            i.createElement(
                                g.ZP,
                                {
                                    onClick: () => {
                                        t?.({ text: "", imageUrl: a, source: "post_image_annotation", isImageEdit: !0, mediaId: o });
                                    },
                                    withInteractiveStyling: !0,
                                },
                                U,
                                ".",
                            ),
                    );
                }
                _renderMediaAttribution(e) {
                    const { displayMediaAttribution: t, mediaDetails: n, withMediaTagsIcon: r } = this.props,
                        a = this._getSourceUser(),
                        o = e ? I.Z.getSourceTweetId(n[0]) : void 0;
                    return t && a ? i.createElement(C.Z, { size: r ? "body" : "subtext2", sourceTweetId: o, style: N.mediaAttribution, userAffiliateBadgeInfo: a.highlightedLabel, userIsBlueVerified: a.is_blue_verified, userIsProtected: a.protected, userIsVerified: a.verified, userName: a.name, userScreenName: a.screen_name, userVerifiedType: a.verified_type }) : null;
                }
                _isFirstMediaItemVideo() {
                    const { mediaDetails: e } = this.props;
                    return e[0] && I.Z.isVideo(e[0]);
                }
                _renderMediaCaption() {
                    const { caption: e, renderCaption: t, tweetId: n } = this.props;
                    return e ? i.createElement(a.Z, { id: `caption-${n}`, style: N.mediaCaption }, t(e)) : null;
                }
                get sensitiveMediaWarnings() {
                    const { mediaDetails: e } = this.props;
                    return (0, p.Z)(
                        e.flatMap((e) => {
                            const t = e.sensitive_media_warning;
                            return t ? Object.keys(t).filter((e) => t[e]) : [];
                        }),
                    );
                }
            }
            z.defaultProps = { displayMediaAttribution: !1, displayMediaTags: !0, enableKeyboardShortcuts: !1, hasSensitiveMedia: !1, isCondensed: !1, mediaDetails: [], renderCaption: (e) => i.createElement(_.Z, (0, r.Z)({ color: h.gZ.gray700, size: "subtext2" }, e)), showBorder: !0, showRoundCorners: !0, singleImageMaxAspectRatio: 16 / 9, singleImageMinAspectRatio: 16 / 9, withCenterCrop: !1, withLink: !0, withMediaTagsIcon: !1 };
            const N = S.default.create((e) => ({ halvedMediaSize: { minWidth: 2 * e.spacesPx.space72, width: "50%" }, itemWithBorder: { borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.nestedBorderColor }, itemWithRoundCorners: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, mediaAttribution: { marginTop: e.spaces.space8 }, mediaTags: { marginTop: e.spaces.space4 }, mediaCaption: { marginTop: e.spaces.space8 } })),
                G = z;
        },
        254950: (e, t, n) => {
            n.d(t, { ZP: () => d });
            n(571372);
            var r = n(202784),
                i = n(325686),
                a = n(682474),
                o = n(233184),
                s = n(235902),
                l = n(392237);
            class d extends r.Component {
                render() {
                    switch (this._getGroupSize()) {
                        case 0:
                            return null;
                        case 1:
                            return this._renderGroupOf1();
                        case 2:
                            return this._renderGroupOf2();
                        case 3:
                            return this._renderGroupOf3();
                        case 4:
                            return this._renderGroupOf4();
                        case 5:
                            return this._renderGroupOf5();
                        default:
                            return this._renderGroupOf6();
                    }
                }
                _renderGroupOf1() {
                    return this._renderImageAtIndex(0, null);
                }
                _renderGroupOf2() {
                    return r.createElement(c, { containerAspectRatio: this.props.containerAspectRatio }, this._renderImageInGroup(0, m.gutterRight), this._renderImageInGroup(1));
                }
                _renderGroupOf3() {
                    const { containerAspectRatio: e, isCondensed: t } = this.props;
                    return r.createElement(s.ZP.UseProps, null, ({ withEdgeToEdgeContent: n }) => {
                        const i = n() && !t,
                            a = i ? 3 : e,
                            o = i ? m.gutterRight : m.gutterBottom,
                            s = i ? r.Fragment : u;
                        return r.createElement(c, { containerAspectRatio: a }, this._renderImageInGroup(0, m.gutterRight), r.createElement(s, null, this._renderImageInGroup(1, o), this._renderImageInGroup(2)));
                    });
                }
                _renderGroupOf4() {
                    return r.createElement(s.ZP.UseProps, null, ({ withEdgeToEdgeContent: e }) => r.createElement(c, { column: !0, containerAspectRatio: e() ? 1 : this.props.containerAspectRatio }, r.createElement(p, { style: m.gutterBottom }, this._renderImageInGroup(0, m.gutterRight), this._renderImageInGroup(1)), r.createElement(p, null, this._renderImageInGroup(2, m.gutterRight), this._renderImageInGroup(3))));
                }
                _renderGroupOf5() {
                    return r.createElement(c, { column: !0, containerAspectRatio: this.props.containerAspectRatio }, r.createElement(p, { style: m.gutterBottom }, this._renderImageInGroup(0, m.gutterRight), this._renderImageInGroup(1)), r.createElement(p, null, this._renderImageInGroup(2, m.gutterRight), this._renderImageInGroup(3, m.gutterRight), this._renderImageInGroup(4)));
                }
                _renderGroupOf6() {
                    return r.createElement(c, { column: !0, containerAspectRatio: this.props.containerAspectRatio }, r.createElement(p, { style: m.gutterBottom }, this._renderImageInGroup(0, m.gutterRight), this._renderImageInGroup(1, m.gutterRight), this._renderImageInGroup(2)), r.createElement(p, null, this._renderImageInGroup(3, m.gutterRight), this._renderImageInGroup(4, m.gutterRight), this._renderImageInGroup(5)));
                }
                _renderImageInGroup(e, t) {
                    return this._renderImageAtIndex(e, [m.item, m.relativePositioning, t]);
                }
                _renderImageAtIndex(e, t) {
                    return r.createElement(i.Z, { style: t }, this.props.renderItemAtIndex({ index: e }));
                }
                _getGroupSize() {
                    const e = this.props.groupSize;
                    return 0 === e && o.Z.report(new Error("TweetPhotos: empty array of images received")), Math.min(e, d.maxGroupSize);
                }
            }
            (d.maxGroupSize = 6), (d.defaultProps = { isCondensed: !1 });
            const c = ({ children: e, containerAspectRatio: t = l.default.theme.aspectRatios.landscape, column: n = !1 }) => r.createElement(a.Z, { ratio: t }, r.createElement(i.Z, { style: [m.wideContainer, n ? m.column : m.row] }, e)),
                u = ({ children: e, style: t }) => r.createElement(i.Z, { style: [t, m.item, m.column] }, e),
                p = ({ children: e, style: t }) => r.createElement(i.Z, { style: [t, m.item, m.row] }, e),
                m = l.default.create((e) => ({ wideContainer: { width: "100%", height: "100%" }, row: { flexDirection: "row" }, column: { flexDirection: "column" }, gutterRight: { marginEnd: "2px" }, gutterBottom: { marginBottom: "2px" }, item: { flexGrow: 1, flexBasis: 0 }, relativePositioning: { position: "relative" } }));
        },
        110377: (e, t, n) => {
            n.d(t, { j: () => l });
            var r = n(202784),
                i = n(530525),
                a = n(530732),
                o = n(659651),
                s = n(392237);
            const l = ({ aspectMode: e, image: t, layoutCache: n, mediaMaxHeight: s, onClick: l, onVariantSelection: c, previewMode: u, testID: p, withCenterCrop: m, withLink: h }) => {
                    const g = "string" == typeof t.expandedUrl ? { pathname: t.expandedUrl } : t.expandedUrl;
                    return r.createElement(r.Fragment, null, r.createElement(a.Z, { "aria-describedby": t["aria-describedby"], interactiveStyles: null, link: h ? g : void 0, onClick: l, style: d.image }, r.createElement(i.Z, { "aria-label": t["aria-label"], aspectMode: e, backgroundColor: t.backgroundColor, cropCandidates: t.cropCandidates, image: t, layoutCache: n, mediaMaxHeight: s, onVariantSelection: c, previewMode: u, testID: p, withCenterCrop: m, withLoadingIndicator: !0 })), t.shouldShowAltLabel ? r.createElement(o.Z, { align: "left", altLabel: t["aria-label"] }) : null);
                },
                d = s.default.create((e) => ({ image: { height: "100%" } }));
        },
        978253: (e, t, n) => {
            n.d(t, { Z: () => T });
            var r = n(202784),
                i = n(516951),
                a = n(439592),
                o = n(235902),
                s = n(459679),
                l = n(174326),
                d = n(58881),
                c = n(530732),
                u = n(392237);
            const p = 3.4375 * u.default.theme.spacesPx.space80,
                m = 1.33,
                h = 0.75,
                g = d.Z.generate({ backgroundColor: "transparent", color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 });
            function y(e) {
                const { media: t, renderItemAtIndex: n } = e,
                    i = r.useRef(null),
                    a = (function (e, t) {
                        !(function () {
                            const [, e] = r.useReducer((e, t) => e + 1, 0);
                            r.useEffect(() => {
                                e();
                            }, [e]);
                        })();
                        const n = Math.max(
                            1,
                            ...(0, s.Z)(e, ({ height: e, width: n }) => {
                                const r = t.current?.getListRef();
                                if (void 0 === n || void 0 === e || !r) return;
                                const i = p / Math.min(e, n / h),
                                    a = r.getBoundingClientRect().width - u.default.theme.spacesPx.space64;
                                return (Math.min(n, e * m) * i) / a;
                            }),
                        );
                        return p / n;
                    })(t, i),
                    o = t.map((e, t) => {
                        let i = "photo" === e.type ? e.width / e.height : e.aspectRatio;
                        i = Math.min(m, Math.max(h, i));
                        const o = { aspectRatio: i, height: a };
                        return r.createElement(c.Z, { interactiveStyles: g, key: t, style: [o, f.item, f.itemWithRoundCorners] }, n({ index: t }));
                    });
                return r.createElement(l.Z, { buttonsContainerStyle: f.carousel, ref: i, scrollToCenter: !0, style: f.carouselContainer, withSingleIndexButtons: !0 }, o);
            }
            const f = u.default.create((e) => ({ item: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: e.borderWidths.small }, carouselContainer: { margin: -e.spacesPx.space2 }, carousel: { gap: e.spaces.space8, padding: e.spaces.space2 }, itemWithRoundCorners: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" } }));
            var w = n(254950),
                b = n(110377),
                C = n(325686),
                E = n(666418);
            const x = ({ onClick: e, testID: t, videoConfig: n }) => {
                    const { expandedUrl: i, type: a, ...o } = n;
                    return r.createElement(C.Z, { onClick: e, style: k.video, testID: t }, r.createElement(E.Z, o));
                },
                k = u.default.create((e) => ({ video: { height: "100%" } }));
            var I = n(906396);
            const v = ({ cacheLocationKey: e, containerAspectRatio: t, isCondensed: n, media: s, mediaMaxHeight: l, onClick: d, renderPhoto: c = Z, renderVideo: u = _, singleImageMaxAspectRatio: p, singleImageMinAspectRatio: m, testID: h, withCenterCrop: g = !1, withLink: f = !0 }) => {
                    const { getLayoutCacheForIndex: b } = (0, I.X)({ locationKey: e, itemCount: s.length }),
                        C = r.useMemo(() => (s.length > 1 ? a.Z.COVER : a.Z.withinRange(m, p)), [s.length, p, m]),
                        E = r.useCallback(
                            ({ index: e }) => {
                                const t = s[e];
                                if ("photo" !== t.type) return u({ mediaMaxHeight: l, onClick: d, testID: h, videoConfig: t });
                                const n = { mediaMaxHeight: l, onClick: d, testID: h, withCenterCrop: g, withLink: f },
                                    r = b(e) ?? void 0;
                                return c({ ...n, aspectMode: C, image: t, layoutCache: r, onVariantSelection: i.Z, previewMode: !1 });
                            },
                            [s, l, d, h, g, f, b, c, C, u],
                        ),
                        { withMediaCarousel: x } = o.ZP.useProps();
                    return s.length > 1 && !n && x() ? r.createElement(y, { media: s, renderItemAtIndex: E }) : r.createElement(w.ZP, { containerAspectRatio: t, groupSize: s.length, isCondensed: n, renderItemAtIndex: E });
                },
                Z = (e) => r.createElement(b.j, e),
                _ = (e) => r.createElement(x, e),
                T = r.memo(v);
        },
        906396: (e, t, n) => {
            n.d(t, { X: () => l });
            n(571372);
            var r = n(202784),
                i = n(530525),
                a = n(233184),
                o = n(254950);
            class s {
                static _generateKey({ groupSize: e, locationKey: t, photoIndexInGroup: n }) {
                    return `location:${t}_layout:${e}_index:${n}`;
                }
                static getLayoutCache({ groupSize: e, locationKey: t, photoIndexInGroup: n }) {
                    const r = Math.max(Math.min(e, o.ZP.maxGroupSize), 1),
                        a = this._generateKey({ groupSize: r, locationKey: t, photoIndexInGroup: n });
                    return this.cache[a] || (this.cache[a] = i.Z.createLayoutCache()), this.cache[a];
                }
            }
            s.cache = {};
            const l = ({ itemCount: e, locationKey: t }) => {
                r.useEffect(() => {
                    0 === e && a.Z.report(new Error("TweetPhotos: empty array of images received"));
                }, [e]);
                const n = r.useCallback((n) => (t ? (s.getLayoutCache({ locationKey: t, groupSize: e, photoIndexInGroup: n }) ?? null) : null), [e, t]);
                return r.useMemo(() => ({ getLayoutCacheForIndex: n }), [n]);
            };
        },
        278957: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                i = n(154003);
            const a = n(392237).default.create((e) => ({ previewButton: { marginTop: e.spaces.space20 } })),
                o = function ({ renderInQuoteTweet: e, title: t, url: n }) {
                    return r.createElement(i.ZP, { link: n.url, size: "medium", style: e ? null : a.previewButton, type: "primaryOutlined" }, t);
                };
        },
        650028: (e, t, n) => {
            n.d(t, { ZP: () => Z });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(392237),
                s = (n(136728), n(543673), n(240753), n(128399), n(166852)),
                l = n(111677),
                d = n.n(l),
                c = n(488684);
            const u = d().ga629a8c,
                p = (e, t, n) => (e ? r.createElement(c.Z, { screenName: t }, r.createElement(a.ZP, { dir: "ltr", link: `https://twitter.com/${t}`, onClick: n }, `@${t}`)) : r.createElement(a.ZP, { dir: "ltr" }, `@${t}`)),
                m = ({ children: e, onClick: t, viewMorePath: n }) => r.createElement(a.ZP, { "aria-label": u, link: n, onClick: t }, e),
                h = (e) => e.screen_name,
                g = (e, t) => e.find(({ id_str: e }) => e === t),
                y = "NotIncluded",
                f = "DirectReply",
                w = "NonDirectReply",
                b = ({ displayTextRange: e, inReplyToName: t, inReplyToScreenName: n, inReplyToUserIdStr: r, userMentionsEntities: i }) => {
                    const a = [...i.filter((t) => t.indices[0] < e[0] || t.id_str === r)];
                    let o = g(i, r);
                    const l = t || n;
                    return !o && r && l && n && ((o = { id_str: r, name: l, screen_name: n, indices: [] }), a.push(o)), (0, s.Z)(a, (e) => e.id_str);
                },
                C = ({ displayTextRange: e, inReplyToName: t, inReplyToScreenName: n, inReplyToUserIdStr: i, linkify: o, loggedInUserId: s, onClick: l, tweetPermalink: c, unmentionedUserIds: u, userMentionsEntities: C }) => {
                    const E = i,
                        x = b({ displayTextRange: e, inReplyToName: t, inReplyToScreenName: n, inReplyToUserIdStr: i, userMentionsEntities: C }),
                        k = { id_str: "", indices: [], name: "", screen_name: "" },
                        I = g(x, E) ?? k,
                        v = ((e, t, n, i) => {
                            const o = e ? r.createElement(m, { onClick: n, viewMorePath: t }) : r.createElement("span", null),
                                s = (e) => (l(e) ? r.createElement(a.ZP, { color: "link" }) : r.createElement("span", null)),
                                l = (t) => {
                                    const n = i?.includes(t.id_str);
                                    return e && !n;
                                };
                            return {
                                replyToOne({ user: e }) {
                                    const t = p(l(e), h(e), n);
                                    return r.createElement(d().I18NFormatMessage, { $i18n: "h5970807" }, t);
                                },
                                replyToTwo({ userOne: e, userTwo: t }) {
                                    const i = p(l(e), h(e), n),
                                        a = p(l(t), h(t), n),
                                        o = s(t);
                                    return r.createElement(d().I18NFormatMessage, { $i18n: "ge01e6a3" }, i, r.cloneElement(o, null, d().caddb529), a);
                                },
                                replyToMany({ othersCount: e, user: t }) {
                                    const i = p(l(t), h(t), n);
                                    return r.createElement(d().I18NFormatMessage, { $i18n: "f5a069ab" }, i, r.cloneElement(o, null, d().ff31714c({ othersCount: e })));
                                },
                                indirectReplyToThree({ userOne: e, userThree: t, userTwo: i }) {
                                    const a = p(l(e), h(e), n),
                                        o = p(l(i), h(i), n),
                                        c = p(l(t), h(t), n),
                                        u = s(t);
                                    return r.createElement(d().I18NFormatMessage, { $i18n: "hd7dd197" }, a, o, r.cloneElement(u, null, d().e06c99b7), c);
                                },
                                indirectReplyToMany({ othersCount: e, userOne: t, userTwo: i }) {
                                    const a = p(l(t), h(t), n),
                                        s = p(l(i), h(i), n);
                                    return r.createElement(d().I18NFormatMessage, { $i18n: "g4eb2847" }, a, s, r.cloneElement(o, null, d().i4e2f96c({ othersCount: e })));
                                },
                            };
                        })(o, new URL(`${c}/people`, "https://twitter.com").toString(), l, u),
                        Z = s === E,
                        _ = x.some(({ id_str: e }) => e === s);
                    switch (Z ? f : _ ? w : y) {
                        case f:
                        case y:
                            switch (x.length) {
                                case 1:
                                    return v.replyToOne({ user: I });
                                case 2: {
                                    const e = x.find((e) => e !== I) ?? k;
                                    return v.replyToTwo({ userOne: I, userTwo: e });
                                }
                                case 3: {
                                    const [e, t] = x.filter((e) => e !== I);
                                    return v.indirectReplyToThree({ userOne: I, userTwo: e, userThree: t });
                                }
                                default: {
                                    const e = x.find((e) => e !== I) ?? k;
                                    return v.indirectReplyToMany({ userOne: I, userTwo: e, othersCount: x.length - 2 });
                                }
                            }
                        case w:
                            switch (x.length) {
                                case 1:
                                    return null;
                                case 2: {
                                    const e = x.find((e) => e !== I) ?? k;
                                    return v.replyToTwo({ userOne: I, userTwo: e });
                                }
                                case 3: {
                                    const e = x.find(({ id_str: e }) => e !== s && e !== E) ?? k;
                                    return v.indirectReplyToThree({ userOne: I, userTwo: g(x, s) ?? k, userThree: e });
                                }
                                default:
                                    return v.indirectReplyToMany({ userOne: I, userTwo: g(x, s) ?? k, othersCount: x.length - 2 });
                            }
                        default:
                            return null;
                    }
                },
                E = Object.freeze({ Threaded: "threaded", Isolated: "isolated", None: "none" }),
                x = [E.Threaded, E.Isolated, E.None],
                k = Object.freeze({ all: "all", name: "name", none: "none" });
            class I extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = (e) => {
                            const { displayTextRange: t, inReplyToName: n, inReplyToScreenName: r, inReplyToUserIdStr: i, onClick: a, userMentionsEntities: o } = this.props;
                            a && a(e, b({ displayTextRange: t, inReplyToName: n, inReplyToScreenName: r, inReplyToUserIdStr: i, userMentionsEntities: o }).length);
                        });
                }
                render() {
                    const { displayTextRange: e, id: t, inReplyToName: n, inReplyToScreenName: o, inReplyToStatusIdStr: s, inReplyToUserIdStr: l, linkColor: d, linkType: c, loggedInUserId: u, size: p, style: m, tweetPermalink: h, unmentionedUserIds: g, userMentionsEntities: y } = this.props,
                        f = C({ displayTextRange: e, inReplyToName: n, inReplyToScreenName: o, inReplyToUserIdStr: l, tweetPermalink: h, loggedInUserId: u, linkify: c === k.name, onClick: this._handleClick, unmentionedUserIds: g, userMentionsEntities: y });
                    if (c === k.all) {
                        const e = s && `https://twitter.com/${o || "i"}/status/${s}`;
                        return r.createElement(a.ZP, { color: d, id: t, link: e, size: p, style: m }, f);
                    }
                    return c === k.name ? r.createElement(i.Z, { style: [v.root, m] }, r.createElement(a.ZP, { color: "gray700", id: t, size: p }, f)) : r.createElement(a.ZP, { color: "gray700", id: t, size: p, style: m }, f);
                }
            }
            (I.getReplyContextParticipants = b), (I.ReplyContextTypes = E), (I.TweetReplyContextTypes = x), (I.ReplyContextLinkTypes = k), (I.defaultProps = { linkColor: "link", linkType: k.name, size: "body", userMentionsEntities: [] });
            const v = o.default.create((e) => ({ root: { display: "inline-block" } })),
                Z = I;
        },
        84275: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(325686),
                a = n(872405),
                o = n(235902),
                s = n(952428),
                l = n(336373),
                d = n(392237),
                c = n(981788);
            function u({ a11yDomIds: e, avatar: t, children: n, footer: u, header: m, indents: h, interactive: g = !0, link: y, onBlur: f, onFocus: w, onPress: b, role: C = "article", testID: E, usernameContent: x, withBottomLine: k, withElbow: I, withFooterGap: v = !0, withFullWidthChildren: Z, withHeader: _ = !0, withHorizontalPadding: T = !0, withTopLine: S, withUnreadStyles: M }) {
                const R = l.Z.useAnalytics(),
                    [P, L] = r.useState(d.default.theme.spacesPx.space16),
                    A = r.useRef(!0),
                    B = o.ZP.useProps().withEdgeToEdgeContent(),
                    D = Boolean(y && g);
                r.useEffect(
                    () => () => {
                        A.current = !1;
                    },
                    [],
                ),
                    r.useEffect(() => {
                        h && R.scribe({ component: "tweet", element: "tree_connectors", action: "impression" });
                    }, [R, h]);
                const U = r.useCallback((e) => {
                    A.current && L(e.nativeEvent.layout.height);
                }, []);
                return r.createElement(s.Z, { "aria-labelledby": e?.join(" "), focusable: D, link: y, onBlur: f, onFocus: w, onPress: b, role: C, style: [k && p.containerOverlap, M && p.unread, T && p.container], testID: E, withInteractiveStyling: D }, r.createElement(c.Z, { indents: h, paddingTop: P, smallFirstCell: !1, style: p.connectors, withElbow: !!I }), r.createElement(i.Z, { style: p.column }, r.createElement(s.Z, { style: p.hoverBox, withInteractiveStyling: !1 }, _ ? r.createElement(i.Z, { onLayout: h ? U : void 0 }, r.createElement(a.Z, { avatarCell: S ? r.createElement(i.Z, { style: [p.line, p.lineTop] }) : void 0, avatarCellStyle: p.lineTopContainer, avatarSize: !Z && h && h.length > 0 ? "large" : void 0, cellStyle: p.header }, m || null)) : null, r.createElement(a.Z, { avatarCell: t ? r.createElement(r.Fragment, null, t, k ? r.createElement(i.Z, { style: [p.line, p.lineBottom] }) : null) : void 0, avatarCellStyle: p.gridColumnLeft, avatarSize: !Z && h && h.length > 0 ? "large" : void 0, cellStyle: [p.gridColumnRight, v && !B && p.gridBottomPadding] }, x, Z ? null : n), Z ? r.createElement(i.Z, { style: v && B && p.gridBottomPadding }, n) : null), u));
            }
            const p = d.default.create((e) => ({ containerOverlap: { marginBottom: -1 }, column: { flexDirection: "column", flexGrow: 1, flexShrink: 1 }, connectors: { zIndex: 1 }, hoverBox: { flexGrow: 1, flexShrink: 1 }, unread: { backgroundColor: e.colors.unreadCellBackground }, header: { paddingTop: e.componentDimensions.gutterVertical }, gridColumnLeft: { alignItems: "center" }, gridColumnRight: { flexGrow: 1, justifyContent: "center" }, gridBottomPadding: { paddingBottom: e.componentDimensions.gutterVertical }, line: { backgroundColor: e.colors.gray200, marginHorizontal: "auto", width: e.componentDimensions.conversationLineWidth }, lineTopContainer: { marginBottom: e.spaces.space4 }, lineTop: { ...d.default.absoluteFillObject }, lineBottom: { marginTop: e.spaces.space4, flexGrow: 1 }, container: { flexDirection: "row", overflow: "hidden", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
        },
        451051: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(807896),
                i = (n(136728), n(202784)),
                a = n(111677),
                o = n.n(a),
                s = n(731708),
                l = n(392237),
                d = n(354149),
                c = n(310452),
                u = n(341189);
            const p = "tweetText",
                m = o().hf3f8e3a;
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._prevText = null),
                        (this._getTextParts = () => {
                            const { displayTextRange: e, entities: t, entityBaseUrl: n, highlightType: r, hitHighlights: i, linkify: a, permalink: o, quotedTweetPermalink: s, text: l, transformHashtagLink: d, unmentionedUserIds: u, withQuoteLinks: p, withUnicodeEmojis: m } = this.props;
                            let h = l,
                                g = t;
                            const y = t && t.urls && t.urls.length;
                            if (s && !y && p && ((h = `${l} ${a ? s.url : s.display}`), a)) {
                                const e = [...l].length + 1;
                                g = { media: [], ...t, urls: [{ display_url: s.display, expanded_url: s.expanded, url: s.url, indices: [e, e + s.url.length] }] };
                            }
                            const f = [0, h.length],
                                w = [(e || f)[0], h.length],
                                b = i || [];
                            return g?.user_mentions?.length && u?.length && (g = { ...g, user_mentions: g.user_mentions.filter((e) => !u.includes(e.id_str)) }), c.ZP.tweetTextParts(h, w, g, { baseUrl: n, highlightType: r, hitHighlights: b, permalink: o, renderUnicodeEmojis: m, transformHashtagLink: d, useHashtagUrl: !0 });
                        });
                }
                componentDidMount() {
                    this._prevText = this.props.text;
                }
                componentDidUpdate() {
                    this._prevText = this.props.text;
                }
                render() {
                    const { animateDisplayTextIn: e, article: t, displayTextRange: n, entities: a, entityBaseUrl: o, excludeCardUrl: l, highlightType: c, hitHighlights: h, id: y, inlineMediaSpec: C, isCondensed: E, isPreviewDisplay: x, lang: k, linkColor: I, linkify: v, numberOfLines: Z, onEntityClick: _, permalink: T, quotedTweetId: S, quotedTweetPermalink: M, size: R, style: P, text: L, transformHashtagLink: A, transformUrl: B, underlineLinks: D, unmentionedUserIds: U, withCardLinks: z, withMediaLinks: N, withQuoteLinks: G, withShowMore: W, withUnicodeEmojis: O, ...H } = this.props,
                        V = this._getTextParts(),
                        $ = V.some((e) => e.entityType === u.Z.MEDIA),
                        F = t && x,
                        j = $ && !N,
                        K = S && !G,
                        Q = (function (e, t) {
                            const n = e.slice(),
                                r = t.inlineMediaSpec ? t.inlineMediaSpec.list : [];
                            for (const e of r)
                                for (let t = 0; t < n.length; t++) {
                                    const r = w({ media: e, part: n[t] });
                                    if (r) {
                                        n.splice(t, 1, ...r);
                                        break;
                                    }
                                }
                            return n;
                        })(
                            V.map((e, r) => {
                                const i = r === V.length - 1,
                                    a = !!e.tweetId && e.tweetId === S;
                                if (!N && e.entityType === u.Z.MEDIA) return null;
                                if (a && $ && e.indices && n[1] === e.indices[1]) return null;
                                if (i) {
                                    if (a && K && !j) return null;
                                    if (!j && !K && !z && l && (l === e.url || l === e.expandedUrl)) return null;
                                    if (t) {
                                        const n = `/i/article/${t.rest_id}`,
                                            r = e.expandedUrl?.includes(n);
                                        if (r) return null;
                                    }
                                }
                                return e;
                            }).filter(Boolean),
                            this.props,
                        ),
                        q = Q,
                        X = Q.length,
                        J = [],
                        Y = C?.list.filter((e) => 0 === e.index);
                    if (
                        (Y &&
                            Y.forEach((e) => {
                                J.push(C?.render(e.media_id));
                            }),
                        q.forEach((t, n) => {
                            const r = (function (e) {
                                let t = e.part;
                                const n = 0 === e.i,
                                    r = e.i === e.count - 1;
                                switch (t.entityType) {
                                    case u.Z.TEXT:
                                        if (!`${t.prefix}${t.text}`.trim() && (r || n)) return null;
                                        if (r) {
                                            const e = t.text.replace(f.trim_right, "");
                                            t = { ...t, text: e };
                                        }
                                        break;
                                }
                                return t;
                            })({ i: n, count: X, part: t });
                            if (!r) return null;
                            const a = (function (e, t) {
                                if (!Array.isArray(t.inlineMediaSpec?.list)) return null;
                                const n = [];
                                for (const r of t.inlineMediaSpec.list) b(r, e) && n.push(r);
                                if (!n.length) return null;
                                return n;
                            })(r, this.props);
                            a && C
                                ? J.push(
                                      i.createElement(
                                          i.Fragment,
                                          null,
                                          i.createElement(d.ZP, { animateIn: e, key: n, linkColor: I, linkify: v, onClick: _, part: r, transformUrl: B, underlineLinks: D }),
                                          a.map((e) => i.createElement(i.Fragment, { key: e.media_id }, i.createElement(s.ZP, null, "\n"), C.render(e.media_id))),
                                      ),
                                  )
                                : F || J.push(i.createElement(d.ZP, { animateIn: e, key: n, linkColor: I, linkify: v, onClick: _, part: r, transformUrl: B, underlineLinks: D }));
                        }),
                        !J.length)
                    )
                        return null;
                    const ee = W && !E;
                    return i.createElement(i.Fragment, null, i.createElement(s.ZP, (0, r.Z)({}, H, { children: J, dir: "auto", id: y, lang: k, numberOfLines: Z, size: R, style: [g.root, P, x && g.previewDisplayText], testID: p })), ee ? i.createElement(s.ZP, (0, r.Z)({ color: "link", size: R, testID: "tweet-text-show-more-link", withInteractiveStyling: !0 }, "function" == typeof W ? { onClick: W } : { link: W || T }), m) : null);
                }
            }
            h.defaultProps = { highlightType: "bold", linkColor: "link", linkify: d.Gh.linkify, underlineLinks: !1, withCardLinks: !1, withMediaLinks: !1, withQuoteLinks: !1, permalink: "", withShowMore: void 0, withUnicodeEmojis: !1, isCondensed: !1, animateDisplayTextIn: !1 };
            const g = l.default.create((e) => ({ root: { position: "relative" }, previewDisplayText: { WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))" } })),
                y = h,
                f = { trim_right: /(\s+$)/g };
            function w(e) {
                const t = { ...e.part };
                if (!e.part.indices) return null;
                const [n, r] = e.part.indices;
                if (b(e.media, e.part)) {
                    const i = e.part.text;
                    if (!i) return null;
                    const a = { ...t };
                    a.indices = [n, e.media.index];
                    const o = { ...t };
                    o.indices = [e.media.index, r];
                    const s = a.indices[1] - a.indices[0],
                        l = o.indices[1] - o.indices[0];
                    return a.text && (a.text = i.substring(0, s)), o.text && (o.text = i.substring(s, s + l)), [a, o];
                }
            }
            function b(e, t) {
                if (!t.indices) return null;
                const [n, r] = t.indices;
                return e.index > n && e.index <= r;
            }
        },
        373926: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                i = n(325686),
                a = n(111677),
                o = n.n(a),
                s = n(731708),
                l = n(952428),
                d = n(352924),
                c = n(392237),
                u = n(54989),
                p = n(84275),
                m = n(823161);
            function h({ role: e, actionButtonWrapperStyle: t, actionLink: n, actionText: a, additionalActions: c = [], additionalActionsStyle: h, avatarSize: y = m.default.defaultSize, children: f = o().e07a85a2, ctaLink: w, ctaText: b, indents: C, lang: E, onActionClick: x, withBottomLine: k, withElbow: I, withFooterGap: v, withHeader: Z, withHorizontalPadding: _, withTopLine: T }) {
                const S = (0, d.b)(),
                    M = r.useMemo(() => [S], [S]);
                return r.createElement(
                    p.Z,
                    { a11yDomIds: M, avatar: C ? r.createElement(m.default, { size: y }) : void 0, indents: C, interactive: !1, role: e, withBottomLine: k, withElbow: I, withFooterGap: v, withHeader: Z, withHorizontalPadding: _, withTopLine: T },
                    r.createElement(u.Z, { actionButtonWrapperStyle: t, actionLink: n, actionText: a, ctaLink: w, ctaText: b, id: S, lang: E, onActionClick: x }, f),
                    0 === c.length
                        ? null
                        : r.createElement(
                              i.Z,
                              { role: "group" },
                              c.map(({ label: e, onClick: t }, n) => {
                                  const i = n === c.length - 1,
                                      a = [g.additionalAction, !i && g.additionalActionDivider, h];
                                  return r.createElement(l.Z, { key: e, onClick: t, style: a, withDarkerInteractiveBackground: !0 }, r.createElement(s.ZP, { color: "gray700", weight: "bold" }, e));
                              }),
                          ),
                );
            }
            const g = c.default.create((e) => ({ additionalAction: { padding: e.spaces.space12 }, additionalActionDivider: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small } }));
        },
        5273: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(325686),
                a = n(530525),
                o = n(823161);
            const s = { tweetUserAvatar: "Tweet-User-Avatar" },
                l = a.Z.createLayoutCache(),
                d = (e) => {
                    const { id: t, link: n, onClick: i, onHoverCardScreenNameClick: a, promotedContent: s, screenName: d, size: c = o.default.defaultSize, uri: u, withHoverCard: p = !0, withLink: m = !0 } = e;
                    return r.createElement(o.default, { id: t, imageLayoutCache: l, link: n, onClick: i, onHoverCardScreenNameClick: a, promotedContent: s, screenName: d, size: c, uri: u, withHoverCard: p, withLink: m });
                };
            function c({ renderUserAvatar: e = d, size: t = o.default.defaultSize, style: n, testID: a = s.tweetUserAvatar, ...l }) {
                return r.createElement(i.Z, { style: n, testID: a }, e({ ...l, size: t }));
            }
        },
        528647: (e, t, n) => {
            n.d(t, { Z: () => k });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                l = n(516951),
                d = n(908478),
                c = n(731708),
                u = n(530732),
                p = n(946847),
                m = n(868634),
                h = n(470397),
                g = n(392237),
                y = n(519172),
                f = n(488684),
                w = n(601413);
            const b = () => i.createElement(p.Z, { actionLabel: s().g7099a02, actionLink: "https://help.x.com/using-twitter/super-follows#sfexpect", graphicDisplayMode: "none", headline: s().e453f536, onAction: l.Z, subtext: s().d6f781e4, withBottomPadding: !1 }),
                C = s().dab106f8,
                E = s().a46e92c2,
                x = s().f9633e62;
            class k extends i.Component {
                shouldComponentUpdate(e) {
                    return !(0, d.Z)(e, this.props);
                }
                _buildLink() {
                    return { pathname: `https://x.com/${this.props.userData.screenName}`, state: { contextTweetId: this.props.tweetId, userId: this.props.userData.userId, ...(this.props.promotedContent && { promotedTweetState: this.props.promotedContent }) } };
                }
                _buildLinkProps() {
                    const e = this._buildLink();
                    return this.props.withLink ? { link: e, onPress: this.props.onLinkClick } : { interactive: !1 };
                }
                _buildUserBadges(e, t, n, r, a, o) {
                    return i.createElement(c.ZP, { style: I.userBadges }, i.createElement(y.Z, { affiliateBadgeInfo: a, displayContext: "content", isBlueVerified: n, isProtected: e, isSubscriber: o, isVerified: t, renderSubscriberBadgeContext: b, verifiedType: r }));
                }
                _getUserScreenNameNode({ screenName: e, size: t, userId: n }) {
                    const a = i.createElement(w.Z, { screenName: e, size: t }),
                        o = this._buildLinkProps(),
                        s = i.createElement(u.Z, (0, r.Z)({}, o, { focusable: !1, interactiveStyles: null, style: I.root }), a);
                    return this._useUserHoverCardWrapper(s, e);
                }
                _getUserNameNode({ affiliateBadgeInfo: e, isBlueVerified: t, isProtected: n, isSubscriber: o, isVerified: s, name: l, screenName: d, size: p, userId: m, verifiedType: h }) {
                    const g = !this.props.withNameWrap,
                        y = this._buildLinkProps(),
                        f = this._buildUserBadges(n, s, t, h, e, o),
                        w = i.createElement(u.Z, (0, r.Z)({}, y, { interactiveStyles: null, style: I.shrinkableContainer }), ({ isFocused: e, isHovered: r, isPressed: o }) => i.createElement(a.Z, { style: I.nameContainer }, i.createElement(c.ZP, { size: p, style: [I.name, g && I.nameNowrap, (e || r || o) && I.underline], weight: "bold" }, i.createElement(c.ZP, { numberOfLines: g ? 1 : void 0 }, this.props.renderUserNameHighlights ? this.props.renderUserNameHighlights({ isBlueVerified: t, isProtected: n, isVerified: s, name: l, screenName: d, userId: m }) : l), g ? null : f), g ? f : null));
                    return this._useUserHoverCardWrapper(w, d);
                }
                _renderTweetUserNameContent() {
                    const { canShowCommunityMemberBadge: e, screenNameSuffix: t, size: n, userData: r, withStackedLayout: o } = this.props,
                        s = o ? void 0 : I.screenNameContainerSpaced,
                        l = this._getUserScreenNameNode({ ...r, size: n }),
                        d = this._getUserNameNode({ ...r, size: n }),
                        c = ((e, t) => {
                            switch (e) {
                                case "Admin":
                                    return i.createElement(m.ZP, { type: "modBadge" }, x);
                                case "Moderator":
                                    return i.createElement(m.ZP, { type: "modBadge" }, E);
                                case "Member":
                                    return t ? i.createElement(m.ZP, { type: "memberBadge" }, C) : void 0;
                                default:
                                    return;
                            }
                        })(r.communityModeratorStatus, e),
                        u = c ?? null,
                        p = t ? i.createElement(a.Z, { style: I.screenNameSuffixContainer }, t) : null;
                    return i.createElement(i.Fragment, null, i.createElement(a.Z, { style: I.nameContainer }, d), i.createElement(a.Z, { style: [I.screenNameContainer, s] }, i.createElement(h.Z, null, l, u, p)));
                }
                render() {
                    const { id: e, style: t, testId: n, withStackedLayout: r } = this.props,
                        o = this._renderTweetUserNameContent();
                    return i.createElement(a.Z, { style: [I.root, t] }, i.createElement(a.Z, { id: e, style: [I.root, !r && I.unstacked], testID: n }, o));
                }
                _useUserHoverCardWrapper(e, t) {
                    if (!this.props.withHoverCard) return e;
                    return this.props.renderUserHoverCard({ children: e, onScreenNameClick: this.props.onScreenNameClick, profileLink: this._buildLink(), promotedContent: this.props.promotedContent, screenName: t, wrapperStyle: [I.hoverWrapperBaseStyle, this.props.wrapperStyle] }) ?? e;
                }
            }
            k.defaultProps = { canShowCommunityMemberBadge: !1, renderUserHoverCard: (e) => i.createElement(f.Z, e), testId: "User-Name", withHoverCard: !1, withNameWrap: !1, withStackedLayout: !1 };
            const I = g.default.create((e) => ({ root: { maxWidth: "100%", flexShrink: 1, outlineStyle: "none" }, shrinkableContainer: { maxWidth: "100%", flexShrink: 1 }, unstacked: { flexDirection: "row", alignItems: "center" }, name: { overflow: "hidden", alignItems: "center", display: "flex" }, nameNowrap: { whiteSpace: "nowrap" }, underline: { textDecorationLine: "underline" }, nameContainer: { flexDirection: "row", alignItems: "center", maxWidth: "100%", flexShrink: 1 }, screenNameContainer: { flexDirection: "row", flexShrink: 1 }, screenNameContainerSpaced: { marginStart: e.spaces.space4 }, screenNameSuffixContainer: { flexDirection: "row", flexShrink: 0 }, userBadges: { display: "inline-flex", flexDirection: "row", flexShrink: 0 }, hoverWrapperBaseStyle: { flexShrink: 1, maxWidth: "100%" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf.0b1838aa.js.map
